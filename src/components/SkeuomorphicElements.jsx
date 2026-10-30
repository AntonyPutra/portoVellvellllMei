import React from 'react';
import { motion } from 'framer-motion';
import { ArchivalImage } from '../utils/vectorFallbacks';

/**
 * Realistic Metallic Paperclip
 */
export function Paperclip({ className = "", position = "top-left" }) {
  const positionClasses = {
    "top-left": "-top-3 sm:-top-4 left-4 sm:left-6",
    "top-right": "-top-3 sm:-top-4 right-4 sm:right-6",
    "top-center": "-top-4 sm:-top-5 left-1/2 -translate-x-1/2"
  };

  return (
    <div
      className={`absolute z-30 pointer-events-none drop-shadow-[1px_2px_3px_rgba(55,25,44,0.25)] ${positionClasses[position] || position} ${className}`}
      aria-hidden="true"
    >
      <svg width="20" height="48" viewBox="0 0 22 54" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-10 sm:w-5 sm:h-12">
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
    vanilla: "bg-[#EAD7B5]/85 text-[#37192C]",
    plum: "bg-[#37192C]/85 text-[#FFF3E5]",
    gold: "bg-[#D4AF37]/85 text-[#37192C]",
    kraft: "bg-[#CBB493]/90 text-[#24101D]"
  };

  return (
    <div
      className={`absolute z-20 h-5 sm:h-6 px-2.5 sm:px-4 flex items-center justify-center font-mono text-[8px] sm:text-[9px] uppercase tracking-wider backdrop-blur-[1px] shadow-[0_1px_3px_rgba(55,25,44,0.15)] pointer-events-none select-none max-w-full ${colorStyles[color] || colorStyles.vanilla} ${className}`}
      style={{
        transform: `rotate(${angle}deg)`,
        backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.15) 0, rgba(255,255,255,0.15) 6px, transparent 6px, transparent 12px)'
      }}
      aria-hidden="true"
    >
      <span className="opacity-75 font-semibold truncate">DKV // ARCHIVE</span>
    </div>
  );
}

/**
 * Distressed Rubber Ink Stamp
 */
export function RubberStamp({ text = "ARCHIVE VERIFIED", variant = "red", className = "", angle = -6 }) {
  const variants = {
    red: "border-[#B33939] text-[#B33939]",
    gold: "border-[#D4AF37] text-[#D4AF37]",
    plum: "border-[#37192C] text-[#37192C]"
  };

  return (
    <div
      className={`inline-block px-2 sm:px-3 py-0.5 sm:py-1 border border-dashed sm:border-2 rounded font-mono text-[9px] sm:text-xs font-black uppercase tracking-wider sm:tracking-widest pointer-events-none select-none opacity-90 max-w-full truncate ${variants[variant] || variants.red} ${className}`}
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
  caption = "Vallerie Sharon Wibowo",
  subcaption = "Visual Communication Student",
  rotation = -1,
  onClick,
  className = ""
}) {
  return (
    <motion.div
      className={`relative bg-[#FFFFFF] p-2.5 sm:p-3.5 pb-4 sm:pb-5 rounded-[2px] shadow-[0_8px_20px_rgba(55,25,44,0.14)] cursor-pointer border border-[#37192C]/10 w-full max-w-[270px] sm:max-w-[300px] mx-auto select-none ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
      whileHover={{
        rotate: 0,
        scale: 1.02,
        y: -3,
        boxShadow: "0 16px 30px rgba(55, 25, 44, 0.2)",
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      onClick={onClick}
    >
      {/* Paperclip attached at top */}
      <Paperclip position="top-left" />

      {/* Washi tape on opposite corner */}
      <WashiTape color="gold" className="-top-2.5 sm:-top-3 right-3 sm:right-4 w-14 sm:w-16" angle={4} />

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
      <div className="mt-2.5 sm:mt-3 text-center px-1">
        <p className="font-hand text-lg sm:text-xl text-[#37192C] leading-tight truncate">{caption}</p>
        <p className="font-mono text-[8px] sm:text-[9px] uppercase tracking-wider text-[#6B5B65] mt-0.5 truncate">{subcaption}</p>
      </div>
    </motion.div>
  );
}
