/**
 * Archival Desk Sound Engine - Web Audio API Synthesizer
 * Generates tactile paper shuffles, folder tab clicks, and rubber stamp thuds
 * Zero external audio files required - 100% reliable and instantaneous.
 */

class DeskSoundEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true; // Enabled by default; user can toggle
    this.initialized = false;
  }

  init() {
    if (this.initialized) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
        this.initialized = true;
      }
    } catch (e) {
      console.warn('Web Audio not supported:', e);
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  }

  // Ensure audio context is running (browser autoplay policy)
  resume() {
    if (!this.initialized) this.init();
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  /**
   * Realistic soft paper shuffle / slide sound
   */
  playPaperRustle(intensity = 1.0) {
    if (!this.enabled) return;
    this.resume();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const bufferSize = this.ctx.sampleRate * 0.18; // 180ms
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = buffer.getChannelData(0);

      // Pink/Brown noise generation for realistic organic paper friction
      let b0 = 0, b1 = 0, b2 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        output[i] = (b0 + b1 + b2) * 0.12 * intensity;
      }

      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = buffer;

      // Bandpass filter centered at paper friction frequencies (1.5kHz - 4kHz)
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(2200, now);
      filter.Q.setValueAtTime(1.8, now);

      // Volume envelope with soft attack and decay
      const gainNode = this.ctx.createGain();
      gainNode.gain.setValueAtTime(0.001, now);
      gainNode.gain.exponentialRampToValueAtTime(0.35 * intensity, now + 0.03);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);

      whiteNoise.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(this.ctx.destination);

      whiteNoise.start(now);
      whiteNoise.stop(now + 0.19);
    } catch (e) {
      // Audio playback failed silently
    }
  }

  /**
   * Tactile tab switch / cardstock click
   */
  playTabClick() {
    if (!this.enabled) return;
    this.resume();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;

      // Tone oscillator for the cardstock snap
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(120, now + 0.06);

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.07);

      // Add a tiny paper rustle simultaneously
      this.playPaperRustle(0.6);
    } catch (e) {}
  }

  /**
   * Heavy archival rubber stamp impact thud
   */
  playStampThud() {
    if (!this.enabled) return;
    this.resume();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;

      // Deep resonant thump
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(140, now);
      osc.frequency.exponentialRampToValueAtTime(45, now + 0.12);

      gain.gain.setValueAtTime(0.4, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.15);

      // Impact crunch noise
      const bufferSize = this.ctx.sampleRate * 0.08;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * 0.25;
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(600, now);

      const noiseGain = this.ctx.createGain();
      noiseGain.gain.setValueAtTime(0.3, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

      noise.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(this.ctx.destination);

      noise.start(now);
      noise.stop(now + 0.08);
    } catch (e) {}
  }

  /**
   * Light paperclip clip / metallic click
   */
  playClipSound() {
    if (!this.enabled) return;
    this.resume();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(1800, now);
      osc.frequency.exponentialRampToValueAtTime(800, now + 0.04);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.05);
    } catch (e) {}
  }
}

window.deskSound = new DeskSoundEngine();

