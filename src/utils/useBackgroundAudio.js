import { useState, useEffect, useRef, useCallback } from 'react';
import { ASSETS_BASE_URL } from '../constants/projectsData';

export const BGM_PATH = `${ASSETS_BASE_URL}/audio/piano-bgm.mp3`;

const TARGET_VOLUME = 0.35;
const FADE_INTERVAL = 30; // ms
const FADE_STEP = 0.035;

/**
 * Custom Hook for Ambient Piano Background Music
 * Features HTML5 Audio, soft fade-in/fade-out, loop, and cleanup.
 */
export function useBackgroundAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const fadeTimerRef = useRef(null);
  const fallbackSynthRef = useRef(null);
  const usingFallbackRef = useRef(false);

  // Initialize HTML5 Audio instance
  useEffect(() => {
    const audio = new Audio(BGM_PATH);
    audio.loop = true;
    audio.volume = 0;
    audio.preload = 'auto';

    // Fallback error handler if MP3 is not yet on server
    audio.addEventListener('error', () => {
      console.info('Piano BGM MP3 not found on static server, using procedural ambient piano backup.');
      usingFallbackRef.current = true;
    });

    audioRef.current = audio;

    return () => {
      if (fadeTimerRef.current) clearInterval(fadeTimerRef.current);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }
      stopFallbackSynth();
    };
  }, []);

  // Soft fade in volume
  const fadeIn = useCallback((targetAudio) => {
    if (fadeTimerRef.current) clearInterval(fadeTimerRef.current);
    targetAudio.volume = 0;
    
    fadeTimerRef.current = setInterval(() => {
      if (!targetAudio) return;
      if (targetAudio.volume < TARGET_VOLUME - FADE_STEP) {
        targetAudio.volume = Math.min(TARGET_VOLUME, targetAudio.volume + FADE_STEP);
      } else {
        targetAudio.volume = TARGET_VOLUME;
        clearInterval(fadeTimerRef.current);
      }
    }, FADE_INTERVAL);
  }, []);

  // Soft fade out volume then pause
  const fadeOut = useCallback((targetAudio, onComplete) => {
    if (fadeTimerRef.current) clearInterval(fadeTimerRef.current);
    
    fadeTimerRef.current = setInterval(() => {
      if (!targetAudio) return;
      if (targetAudio.volume > FADE_STEP) {
        targetAudio.volume = Math.max(0, targetAudio.volume - FADE_STEP);
      } else {
        targetAudio.volume = 0;
        targetAudio.pause();
        clearInterval(fadeTimerRef.current);
        if (onComplete) onComplete();
      }
    }, FADE_INTERVAL);
  }, []);

  // Procedural Web Audio Ambient Piano Chords (Backup if MP3 is unavailable)
  const startFallbackSynth = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      
      const chords = [
        [261.63, 329.63, 392.00, 493.88], // Cmaj7
        [220.00, 261.63, 329.63, 392.00], // Am7
        [174.61, 220.00, 261.63, 329.63], // Fmaj7
        [196.00, 246.94, 293.66, 349.23]  // G7
      ];
      let chordIdx = 0;

      const playChord = () => {
        if (!ctx || ctx.state === 'closed') return;
        const currentChord = chords[chordIdx % chords.length];
        chordIdx++;
        const now = ctx.currentTime;

        currentChord.forEach((freq, i) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + i * 0.08);

          gain.gain.setValueAtTime(0.0001, now + i * 0.08);
          gain.gain.exponentialRampToValueAtTime(0.035, now + i * 0.08 + 0.08);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.08 + 2.8);

          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + i * 0.08);
          osc.stop(now + i * 0.08 + 3.0);
        });
      };

      playChord();
      const interval = setInterval(playChord, 3200);
      fallbackSynthRef.current = { ctx, interval };
    } catch (e) {}
  };

  const stopFallbackSynth = () => {
    if (fallbackSynthRef.current) {
      clearInterval(fallbackSynthRef.current.interval);
      if (fallbackSynthRef.current.ctx && fallbackSynthRef.current.ctx.state !== 'closed') {
        fallbackSynthRef.current.ctx.close().catch(() => {});
      }
      fallbackSynthRef.current = null;
    }
  };

  const playBgm = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (usingFallbackRef.current) {
      startFallbackSynth();
      setIsPlaying(true);
      return;
    }

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          fadeIn(audio);
          setIsPlaying(true);
        })
        .catch(() => {
          // Autoplay blocked or media file failed, switch to fallback synth
          usingFallbackRef.current = true;
          startFallbackSynth();
          setIsPlaying(true);
        });
    }
  }, [fadeIn]);

  const pauseBgm = useCallback(() => {
    const audio = audioRef.current;
    if (usingFallbackRef.current) {
      stopFallbackSynth();
      setIsPlaying(false);
      return;
    }

    if (audio) {
      fadeOut(audio, () => {
        setIsPlaying(false);
      });
    } else {
      setIsPlaying(false);
    }
  }, [fadeOut]);

  const toggleBgm = useCallback(() => {
    if (isPlaying) {
      pauseBgm();
      return false;
    } else {
      playBgm();
      return true;
    }
  }, [isPlaying, playBgm, pauseBgm]);

  return {
    isPlaying,
    toggleBgm,
    playBgm,
    pauseBgm
  };
}
