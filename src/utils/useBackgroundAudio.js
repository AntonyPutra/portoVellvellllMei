import { useState, useEffect, useRef, useCallback } from 'react';
import { ASSETS_BASE_URL } from '../constants/projectsData';

// Candidate paths for background piano BGM
const AUDIO_SOURCES = [
  `${ASSETS_BASE_URL}/audio/piano-bgm.mp3`,
  '/uploaded-assets/audio/piano-bgm.mp3',
  '/assets-static/audio/piano-bgm.mp3'
];

export const BGM_PATH = AUDIO_SOURCES[0];

const TARGET_VOLUME = 0.35;
const FADE_INTERVAL = 30; // ms
const FADE_STEP = 0.035;

/**
 * Custom Hook for Ambient Piano Background Music
 * Features HTML5 Audio with source failover, soft fade-in/fade-out, loop, and cleanup.
 */
export function useBackgroundAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const fadeTimerRef = useRef(null);
  const sourceIndexRef = useRef(0);
  const fallbackSynthRef = useRef(null);
  const isPlayingRef = useRef(false);

  // Keep state ref in sync
  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  // Clean fade timer
  const clearFadeTimer = () => {
    if (fadeTimerRef.current) {
      clearInterval(fadeTimerRef.current);
      fadeTimerRef.current = null;
    }
  };

  // Initialize HTML5 Audio instance
  useEffect(() => {
    const audio = new Audio();
    audio.loop = true;
    audio.volume = 0;
    audio.preload = 'auto';

    // Set initial source
    sourceIndexRef.current = 0;
    audio.src = AUDIO_SOURCES[0];

    // Handle source load error: try next candidate path before giving up
    const handleError = () => {
      if (sourceIndexRef.current < AUDIO_SOURCES.length - 1) {
        sourceIndexRef.current += 1;
        const nextSrc = AUDIO_SOURCES[sourceIndexRef.current];
        console.info(`[Audio] Trying alternate source: ${nextSrc}`);
        audio.src = nextSrc;
        if (isPlayingRef.current) {
          audio.play().catch(() => {});
        }
      } else {
        console.info('[Audio] MP3 not found at candidate URLs, using ambient piano backup.');
      }
    };

    audio.addEventListener('error', handleError);
    audioRef.current = audio;

    return () => {
      clearFadeTimer();
      audio.removeEventListener('error', handleError);
      audio.pause();
      audio.src = '';
      stopFallbackSynth();
    };
  }, []);

  // Soft fade in volume to TARGET_VOLUME
  const fadeIn = useCallback((targetAudio) => {
    clearFadeTimer();
    targetAudio.volume = Math.max(0, targetAudio.volume);

    fadeTimerRef.current = setInterval(() => {
      if (!targetAudio) return;
      if (targetAudio.volume < TARGET_VOLUME - FADE_STEP) {
        targetAudio.volume = Math.min(TARGET_VOLUME, targetAudio.volume + FADE_STEP);
      } else {
        targetAudio.volume = TARGET_VOLUME;
        clearFadeTimer();
      }
    }, FADE_INTERVAL);
  }, []);

  // Soft fade out volume to 0 then pause
  const fadeOut = useCallback((targetAudio, onComplete) => {
    clearFadeTimer();

    fadeTimerRef.current = setInterval(() => {
      if (!targetAudio) return;
      if (targetAudio.volume > FADE_STEP) {
        targetAudio.volume = Math.max(0, targetAudio.volume - FADE_STEP);
      } else {
        targetAudio.volume = 0;
        try {
          targetAudio.pause();
        } catch (e) {}
        clearFadeTimer();
        if (onComplete) onComplete();
      }
    }, FADE_INTERVAL);
  }, []);

  // Procedural Web Audio Ambient Piano Chords (Backup if MP3 cannot be loaded)
  const startFallbackSynth = () => {
    if (fallbackSynthRef.current) return;
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

    // Reset error candidate if user explicitly clicks play again
    if (audio.error && sourceIndexRef.current >= AUDIO_SOURCES.length - 1) {
      sourceIndexRef.current = 0;
      audio.src = AUDIO_SOURCES[0];
    }

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          fadeIn(audio);
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn('[Audio] HTML5 Audio play error:', err.message);
          // Only start fallback synth if file couldn't be decoded
          if (audio.error) {
            startFallbackSynth();
          }
          setIsPlaying(true);
        });
    }
  }, [fadeIn]);

  const pauseBgm = useCallback(() => {
    const audio = audioRef.current;
    stopFallbackSynth();

    if (audio) {
      fadeOut(audio, () => {
        setIsPlaying(false);
      });
    } else {
      setIsPlaying(false);
    }
  }, [fadeOut]);

  const toggleBgm = useCallback(() => {
    if (isPlayingRef.current) {
      pauseBgm();
      return false;
    } else {
      playBgm();
      return true;
    }
  }, [playBgm, pauseBgm]);

  return {
    isPlaying,
    toggleBgm,
    playBgm,
    pauseBgm
  };
}
