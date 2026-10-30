import React from 'react';
import { motion } from 'framer-motion';
import { ArchivalImage } from '../utils/vectorFallbacks';

/**
 * Realistic Metallic Paperclip
 */
export function Paperclip({ className = "", position = "top-left" }) {
  const positionClasses = {
    "top-left": "-top-4 left-6",
    "top-right": "-top-4 right-6",
    "top-center": "-top-5 left-1/2 -translate-x-1/2"
  };

  return (
    <div
      className={`absolute z-30 pointer-events-none drop-shadow-[1px_3px_4px_rgba(55,25,44,0.3)] ${positionClasses[position] || position} ${className}`}
      aria-hidden="true"
    >
      <svg width="22" height="54" viewBox="0 0 22 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="clipMetal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF3E5" />
            <stop offset="45%" stopColor="#D4AF37" />
            <stop offset="85%" stopColor="#8C6D23" />
            <stop offset="100%" stopColor="#EAD7B5" />
          </linearGradient>
        </defs>
        {/* Outer loop */}
        <path
          d="M 5 16 L 5 44 C 5 49 17 49 17 44 L 17 8 C 17 3 5 3 5 8 L 5 38 C 5 41 13 41 13 38 L 13 16"
          stroke="url(#clipMetal)"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  );
}

/**
 * Semi-Transparent Washi Tape Strip
 */
export function WashiTape({ color = "vanilla", className = "", angle = -4 }) {
  const colorStyles = {
    vanilla: "bg-[#EAD7B5]/80 text-[#37192C]",
    plum: "bg-[#37192C]/80 text-[#FFF3E5]",
    gold: "bg-[#D4AF37]/80 text-[#37192C]",
    kraft: "bg-[#CBB493]/85 text-[#24101D]"
  };

  return (
    <div
      className={`absolute z-20 h-6 px-4 flex items-center justify-center font-mono text-[9px] uppercase tracking-wider backdrop-blur-[1px] shadow-[0_1px_3px_rgba(55,25,44,0.15)] pointer-events-none select-none ${colorStyles[color] || colorStyles.vanilla} ${className}`}
      style={{
        transform: `rotate(${angle}deg)`,
        backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.15) 0, rgba(255,255,255,0.15) 6px, transparent 6px, transparent 12px)'
      }}
      aria-hidden="true"
    >
      <span className="opacity-70 font-semibold">DKV // B28</span>
    </div>
  );
}

/**
 * Distressed Rubber Ink Stamp
 */
export function RubberStamp({ text = "ARCHIVE VERIFIED", variant = "red", className = "", angle = -8 }) {
  const variants = {
    red: "border-[#B33939] text-[#B33939]",
    gold: "border-[#D4AF37] text-[#D4AF37]",
    plum: "border-[#37192C] text-[#37192C]"
  };

  return (
    <div
      className={`inline-block px-3 py-1 border-2 border-dashed rounded font-mono text-xs font-black uppercase tracking-widest pointer-events-none select-none opacity-85 ${variants[variant] || variants.red} ${className}`}
      style={{ transform: `rotate(${angle}deg)` }}
    >
      {text}
    </div>
  );
}

/**
 * Realistic Instant Polaroid Photo Frame
 */
export function Polaroid({
  image,
  caption = "Mei — BINUS B28 DKV",
  subcaption = "studio archives // 2024",
  rotation = -3,
  onClick,
  className = ""
}) {
  return (
    <motion.div
      className={`relative bg-[#FFFFFF] p-3 pb-5 rounded-[2px] shadow-[0_10px_25px_rgba(55,25,44,0.18)] cursor-pointer border border-[#37192C]/10 ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
      whileHover={{
        rotate: 0,
        scale: 1.03,
        y: -4,
        boxShadow: "0 20px 35px rgba(55, 25, 44, 0.22)",
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      onClick={onClick}
    >
      {/* Paperclip attached at top */}
      <Paperclip position="top-left" />

      {/* Washi tape on opposite corner */}
      <WashiTape color="gold" className="-top-3 right-4 w-16" angle={6} />

      {/* Photo viewport */}
      <div className="w-full aspect-[1/1.12] bg-[#1C0E17] rounded-[1px] overflow-hidden relative shadow-inner">
        <ArchivalImage
          src={image}
          alt={caption}
          fallbackType="profile"
          className="w-full h-full"
        />
        {/* Subtle photo gloss sheen */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 pointer-events-none" />
      </div>

      {/* Polaroid handwritten caption footer */}
      <div className="mt-3 text-center">
        <p className="font-hand text-xl text-[#37192C] leading-tight">{caption}</p>
        <p className="font-mono text-[9px] uppercase tracking-wider text-[#6B5B65] mt-1">{subcaption}</p>
      </div>
    </motion.div>
  );
}

