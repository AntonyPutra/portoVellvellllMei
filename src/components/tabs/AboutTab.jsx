import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, ArrowUpRight, Compass, Camera, Sparkles, Terminal } from 'lucide-react';
import { Polaroid, Paperclip, WashiTape, RubberStamp } from '../SkeuomorphicElements';

export function AboutTab({ profile, onOpenPolaroid }) {
  return (
    <div>
      {/* Pane Section Header */}
      <div className="flex flex-wrap justify-between items-end gap-4 pb-5 sm:pb-6 mb-6 sm:mb-8 border-b-2 border-dashed border-[#37192C]/15">
        <div>
          <div className="font-mono text-[10px] sm:text-xs tracking-widest text-[#B33939] font-bold uppercase mb-1 flex items-center gap-2">
            <span>RECORD NO. 01</span>
            <span>//</span>
            <span>OFFICIAL PROFILE DOSSIER</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#37192C] tracking-tight">
            Student Profile & Philosophy
          </h2>
          <p className="font-editorial text-base sm:text-lg italic text-[#6B5B65] mt-0.5 sm:mt-1">
            “{profile.tagline}”
          </p>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 font-mono text-[11px] sm:text-xs text-[#37192C] bg-[#FFF3E5] px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-md border border-[#EAD7B5]">
          <span className="font-bold">BINUS SEMARANG</span>
          <span>•</span>
          <span>SEMARANG, ID</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] xl:grid-cols-[360px_1fr] gap-6 sm:gap-8 items-start">
        {/* Left Column: Polaroid & Student Badge */}
        <div className="flex flex-col gap-6 max-w-[280px] sm:max-w-[320px] lg:max-w-none mx-auto w-full">
          {/* Interactive Polaroid Photo */}
          <Polaroid
            image={profile.avatar}
            caption="Vallerie Sharon Wibowo"
            subcaption="Visual Communication Student"
            rotation={-1}
            onClick={onOpenPolaroid}
          />

          {/* BINUS University Student ID Card */}
          <div className="relative bg-[#FFF3E5] border-2 border-[#D4BD99] rounded-xl p-4 sm:p-5 shadow-[0_2px_8px_rgba(55,25,44,0.08)] flex flex-col gap-3">
            <WashiTape color="plum" className="-top-3 left-4 sm:left-6 w-20" angle={-2} />
            <div className="flex justify-between items-center border-b border-[#37192C]/10 pb-2">
              <span className="font-mono text-[10px] sm:text-[11px] font-bold text-[#37192C] tracking-wider uppercase">
                BINUS SEMARANG // DESIGN
              </span>
              <span className="font-mono text-[9px] font-extrabold text-[#B33939] uppercase">
                ACTIVE STUDENT
              </span>
            </div>

            <div className="flex justify-between items-center gap-2">
              <div>
                <h3 className="font-display text-base sm:text-lg font-bold text-[#37192C] leading-snug">
                  {profile.name}
                </h3>
                <p className="font-mono text-[10px] sm:text-[11px] text-[#6B5B65] mt-0.5">
                  Visual Communication Student<br />
                  BINUS University @ Semarang
                </p>
              </div>

              {/* Barcode */}
              <div className="flex flex-col items-end gap-1 flex-shrink-0">
                <div
                  className="h-6 sm:h-7 w-16 sm:w-20"
                  style={{
                    background: 'repeating-linear-gradient(90deg, #37192C 0, #37192C 2px, transparent 2px, transparent 4px, #37192C 4px, #37192C 6px, transparent 6px, transparent 8px)'
                  }}
                />
                <span className="font-mono text-[8px] tracking-widest text-[#37192C]">BINUS-SMG</span>
              </div>
            </div>

            <div className="flex justify-between items-center pt-2 border-t border-dashed border-[#37192C]/15">
              <span className="font-mono text-[10px] text-[#37192C] font-semibold">CAMPUS: SEMARANG</span>
              <RubberStamp text="VERIFIED" variant="gold" angle={-2} className="text-[9px] py-0.5 px-2" />
            </div>
          </div>
        </div>

        {/* Right Column: Archival Dossier Sheet */}
        <div className="relative bg-[#FFFFFF] p-5 sm:p-6 md:p-8 rounded-xl border border-[#EAD7B5] shadow-[0_2px_8px_rgba(55,25,44,0.06)]">
          <Paperclip position="top-right" />
          <div className="absolute top-4 sm:top-6 right-12 sm:right-16">
            <RubberStamp text="BINUS SEMARANG" variant="red" angle={-4} className="text-[10px] sm:text-xs" />
          </div>

          {/* Personal Quote / Philosophy */}
          <blockquote className="font-editorial text-xl sm:text-2xl md:text-3xl italic text-[#37192C] leading-snug sm:leading-relaxed mb-5 sm:mb-6 pl-4 sm:pl-5 border-l-4 border-[#D4AF37]">
            “{profile.personalStatement}”
          </blockquote>

          <p className="text-xs sm:text-sm md:text-base text-[#37192C]/90 leading-relaxed mb-6">
            {profile.bio}
          </p>

          {/* Core Disciplines */}
          <div className="mb-6">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#37192C] mb-3 flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-[#D4AF37]" />
              Core Design Disciplines
            </h4>
            <div className="flex flex-wrap gap-2">
              {profile.disciplines.map((item, idx) => (
                <span
                  key={idx}
                  className="font-mono text-[11px] sm:text-xs px-3 py-1.5 bg-[#FFF3E5] border border-[#EAD7B5] text-[#37192C] font-semibold rounded-md hover:bg-[#37192C] hover:text-[#FFF3E5] transition-colors duration-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Creative Toolkit */}
          <div className="mb-6">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#37192C] mb-3 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-[#D4AF37]" />
              Creative Toolkit & Software
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {profile.toolkit.map((tool, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-2.5 bg-[#FDFBF7] border border-[#EAD7B5] rounded-lg">
                  <div className="w-8 h-8 rounded bg-[#37192C] text-[#D4AF37] font-mono text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {tool.code}
                  </div>
                  <div>
                    <p className="font-sans text-xs font-bold text-[#37192C] leading-tight">{tool.name}</p>
                    <p className="font-mono text-[10px] text-[#6B5B65]">{tool.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sticky Note Callout & Direct Links */}
          <div className="relative bg-[#FFF9D2] p-4 sm:p-5 rounded-[2px_2px_14px_2px] shadow-[0_6px_14px_rgba(55,25,44,0.1)] border border-[#D4AF37]/30 transform rotate-[0.3deg]">
            <WashiTape color="plum" className="-top-2.5 left-4 sm:left-6 w-16" angle={-2} />
            <p className="font-hand text-lg sm:text-xl text-[#3B2406] leading-relaxed mb-3">
              Currently open for photography projects, digital illustration, video editing, and creative collaborations! Let's create something memorable ✨
            </p>
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[#3B2406]/15">
              <a
                href={profile.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#37192C] text-[#FFF3E5] rounded-md font-mono text-xs font-bold hover:bg-[#4D253F] transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>@{profile.instagram}</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <span className="font-mono text-[10px] text-[#3B2406]/70">BINUS UNIVERSITY @ SEMARANG</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
