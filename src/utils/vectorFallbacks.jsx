import React, { useState } from 'react';

/**
 * High-fidelity vector fallbacks rendered when static server images are unavailable or loading
 */
export const VectorFallbacks = {
  profile() {
    return (
      <svg viewBox="0 0 420 480" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="pBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#37192C"/>
            <stop offset="100%" stopColor="#150812"/>
          </linearGradient>
        </defs>
        <rect width="420" height="480" fill="url(#pBg)"/>
        {/* Desk grid lines */}
        <g stroke="#FFF3E5" strokeOpacity="0.08" strokeWidth="1">
          <line x1="0" y1="120" x2="420" y2="120"/>
          <line x1="0" y1="240" x2="420" y2="240"/>
          <line x1="0" y1="360" x2="420" y2="360"/>
          <line x1="140" y1="0" x2="140" y2="480"/>
          <line x1="280" y1="0" x2="280" y2="480"/>
        </g>
        {/* Mei Character Silhouette & Portrait */}
        <ellipse cx="210" cy="220" rx="90" ry="105" fill="#1C0E17"/>
        <circle cx="210" cy="120" r="44" fill="#1C0E17"/>
        {/* Bun pencil */}
        <line x1="165" y1="130" x2="255" y2="105" stroke="#D4AF37" strokeWidth="3.5" strokeLinecap="round"/>
        {/* Face */}
        <path d="M 150 220 Q 150 295 210 295 Q 270 295 270 220 Q 270 155 210 155 Q 150 155 150 220 Z" fill="#FFF3E5"/>
        {/* Glasses */}
        <rect x="160" y="215" width="40" height="30" rx="10" fill="none" stroke="#D4AF37" strokeWidth="2.5"/>
        <rect x="220" y="215" width="40" height="30" rx="10" fill="none" stroke="#D4AF37" strokeWidth="2.5"/>
        <line x1="200" y1="228" x2="220" y2="228" stroke="#D4AF37" strokeWidth="2.5"/>
        <circle cx="180" cy="230" r="3" fill="#37192C"/>
        <circle cx="240" cy="230" r="3" fill="#37192C"/>
        {/* Blush */}
        <ellipse cx="172" cy="246" rx="12" ry="6" fill="#E88D67" opacity="0.4"/>
        <ellipse cx="248" cy="246" rx="12" ry="6" fill="#E88D67" opacity="0.4"/>
        <path d="M 200 268 Q 210 275 220 268" stroke="#B34A47" strokeWidth="2" fill="none" strokeLinecap="round"/>
        {/* Sweater */}
        <path d="M 140 325 Q 210 350 280 325 L 340 480 L 80 480 Z" fill="#37192C"/>
        <path d="M 165 325 Q 210 355 255 325 Q 210 375 165 325 Z" fill="#4B223D"/>
        {/* Headphones */}
        <ellipse cx="140" cy="350" rx="16" ry="22" fill="#37192C" stroke="#D4AF37" strokeWidth="2"/>
        <ellipse cx="280" cy="350" rx="16" ry="22" fill="#37192C" stroke="#D4AF37" strokeWidth="2"/>
        <path d="M 135 300 Q 210 320 285 300" stroke="#CBB493" strokeWidth="5" fill="none" strokeLinecap="round"/>
        <text x="390" y="465" fontFamily="monospace" fontSize="10" fill="#E88D67" textAnchor="end" opacity="0.8">’24 10 30</text>
      </svg>
    );
  },

  branding(id) {
    return (
      <svg viewBox="0 0 600 380" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="380" fill="#24131E"/>
        <g stroke="#FFF3E5" strokeOpacity="0.08" strokeWidth="1">
          <circle cx="300" cy="190" r="140" fill="none"/>
          <circle cx="300" cy="190" r="90" fill="none"/>
          <line x1="0" y1="190" x2="600" y2="190"/>
        </g>
        <circle cx="300" cy="190" r="50" fill="#37192C" stroke="#D4AF37" strokeWidth="2"/>
        <text x="300" y="196" fontFamily="serif" fontSize="24" fill="#D4AF37" textAnchor="middle" fontStyle="italic">DKV</text>
        <text x="300" y="290" fontFamily="monospace" fontSize="12" fill="#EAD7B5" textAnchor="middle" letterSpacing="3">
          {id ? id.toUpperCase() : "CASE SPECIMEN"}
        </text>
        <text x="300" y="315" fontFamily="monospace" fontSize="9" fill="#FFF3E5" opacity="0.6" textAnchor="middle">
          BINUS UNIVERSITY B28 ARCHIVE
        </text>
      </svg>
    );
  },

  generic(title = "ARCHIVE SPECIMEN") {
    return (
      <svg viewBox="0 0 500 500" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
        <rect width="500" height="500" fill="#2E1727"/>
        <g stroke="#FFF3E5" strokeOpacity="0.1" strokeWidth="1">
          <line x1="50" y1="50" x2="450" y2="50"/><line x1="50" y1="150" x2="450" y2="150"/>
          <line x1="50" y1="250" x2="450" y2="250"/><line x1="50" y1="350" x2="450" y2="350"/><line x1="50" y1="450" x2="450" y2="450"/>
        </g>
        <rect x="75" y="75" width="350" height="350" rx="8" fill="#37192C" stroke="#D4AF37" strokeWidth="1.5"/>
        <circle cx="250" cy="220" r="60" fill="#4B223D"/>
        <path d="M 210 220 Q 250 170 290 220 Q 250 270 210 220 Z" fill="#D4AF37"/>
        <text x="250" y="330" fontFamily="serif" fontSize="18" fill="#FFF3E5" textAnchor="middle" fontStyle="italic">
          {title}
        </text>
        <text x="250" y="355" fontFamily="monospace" fontSize="9" fill="#EAD7B5" textAnchor="middle" letterSpacing="2">
          MEI // VISUAL RECORD
        </text>
      </svg>
    );
  }
};

/**
 * ArchivalImage component with automatic fallback handling
 */
export function ArchivalImage({ src, alt, fallbackType = "generic", className = "", title = "" }) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (hasError || !src) {
    if (fallbackType === "profile") return <div className={className}>{VectorFallbacks.profile()}</div>;
    if (fallbackType === "branding") return <div className={className}>{VectorFallbacks.branding(title)}</div>;
    return <div className={className}>{VectorFallbacks.generic(title || alt)}</div>;
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-[#2D1626] animate-pulse flex items-center justify-center">
          <span className="font-mono text-xs text-[#EAD7B5] opacity-60">LOADING ARCHIVE...</span>
        </div>
      )}
      <img
        src={src}
        alt={alt || "Archive Asset"}
        className={`w-full h-full object-cover transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        onLoad={() => setIsLoading(false)}
        onError={() => setHasError(true)}
      />
    </div>
  );
}

