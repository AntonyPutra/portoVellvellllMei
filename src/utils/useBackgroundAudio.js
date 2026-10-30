import { useState, useEffect, useRef, useCallback } from 'react';
import { ASSETS_BASE_URL } from '../constants/projectsData';

// Candidate paths for background piano BGM
const AUDIO_SOURCES = [
  `${ASSETS_BASE_URL}/audio/piano-bgm.mp3`,
  '/assets-static/audio/piano-bgm.mp3',
  '/uploaded-assets/audio/piano-bgm.mp3'
];

export const BGM_PATH = AUDIO_SOURCES[0];

const TARGET_VOLUME = 0.35;
const FADE_INTERVAL = 25; // ms
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
    audio.preload = 'auto';

    // Set initial volume safely (handles iOS read-only volume gracefully)
    try {
      audio.volume = TARGET_VOLUME;
    } catch (e) {}

    sourceIndexRef.current = 0;
    audio.src = AUDIO_SOURCES[0];

    // Handle source load error: try next candidate path before giving up
    const handleError = (e) => {
      console.warn('[Audio] Source load error on:', audio.src, e);
      if (sourceIndexRef.current < AUDIO_SOURCES.length - 1) {
        sourceIndexRef.current += 1;
        const nextSrc = AUDIO_SOURCES[sourceIndexRef.current];
        console.info(`[Audio] Switching to candidate source: ${nextSrc}`);
        audio.src = nextSrc;
        audio.load();
        if (isPlayingRef.current) {
          audio.play().catch(() => {});
        }
      } else {
        console.info('[Audio] All candidate MP3 paths failed, using ambient piano backup.');
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
    try {
      targetAudio.volume = Math.max(0.05, targetAudio.volume || 0.05);
    } catch (e) {
      // iOS volume is read-only, nothing to fade
      return;
    }

    fadeTimerRef.current = setInterval(() => {
      if (!targetAudio) return;
      try {
        if (targetAudio.volume < TARGET_VOLUME - FADE_STEP) {
          targetAudio.volume = Math.min(TARGET_VOLUME, targetAudio.volume + FADE_STEP);
        } else {
          targetAudio.volume = TARGET_VOLUME;
          clearFadeTimer();
        }
      } catch (e) {
        clearFadeTimer();
      }
    }, FADE_INTERVAL);
  }, []);

  // Soft fade out volume to 0 then pause
  const fadeOut = useCallback((targetAudio, onComplete) => {
    clearFadeTimer();

    fadeTimerRef.current = setInterval(() => {
      if (!targetAudio) return;
      try {
        if (targetAudio.volume > FADE_STEP) {
          targetAudio.volume = Math.max(0, targetAudio.volume - FADE_STEP);
        } else {
          targetAudio.volume = 0;
          targetAudio.pause();
          clearFadeTimer();
          if (onComplete) onComplete();
        }
      } catch (e) {
        try { targetAudio.pause(); } catch (err) {}
        clearFadeTimer();
        if (onComplete) onComplete();
      }
    }, FADE_INTERVAL);
  }, []);

  // Procedural Web Audio Ambient Piano Chords (Backup if MP3 cannot be decoded)
  const startFallbackSynth = () => {
    if (fallbackSynthRef.current) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

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

    // Reset to primary candidate source if previously errored
    if (audio.error && sourceIndexRef.current >= AUDIO_SOURCES.length - 1) {
      sourceIndexRef.current = 0;
      audio.src = AUDIO_SOURCES[0];
      audio.load();
    }

    try {
      audio.volume = TARGET_VOLUME;
    } catch (e) {}

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          fadeIn(audio);
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn('[Audio] HTML5 Audio play error:', err.message);
          // Try reloading audio and playing once more
          audio.load();
          audio.play()
            .then(() => {
              setIsPlaying(true);
            })
            .catch(() => {
              startFallbackSynth();
              setIsPlaying(true);
            });
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
