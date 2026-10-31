import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Terminal } from 'lucide-react';
import { Polaroid, Paperclip, WashiTape, RubberStamp } from '../SkeuomorphicElements';

export function AboutTab({ profile, onOpenPolaroid }) {
  return (
    <div className="w-full max-w-full">
      {/* Pane Section Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 pb-4 sm:pb-6 mb-5 sm:mb-8 border-b-2 border-dashed border-[#37192C]/15">
        <div className="min-w-0">
          <div className="font-mono text-[9px] sm:text-xs tracking-widest text-[#B33939] font-bold uppercase mb-1 flex items-center gap-1.5 sm:gap-2 flex-wrap">
            <span>RECORD NO. 01</span>
            <span>//</span>
            <span>OFFICIAL PROFILE DOSSIER</span>
          </div>
          <h2 className="font-display text-xl sm:text-3xl md:text-4xl font-extrabold text-[#37192C] tracking-tight leading-tight">
            Introduction profile
          </h2>
        </div>

        <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs text-[#37192C] bg-[#FFF3E5] px-2.5 py-1 sm:px-3.5 sm:py-2 rounded-md border border-[#EAD7B5] self-start sm:self-auto flex-shrink-0">
          <span className="font-bold">BINUS SEMARANG</span>
          <span>•</span>
          <span>SEMARANG, ID</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] xl:grid-cols-[340px_1fr] gap-6 sm:gap-8 items-start">
        {/* Left Column: Polaroid & Student Badge */}
        <div className="flex flex-col gap-5 max-w-[270px] sm:max-w-[300px] lg:max-w-none mx-auto w-full">
          {/* Interactive Polaroid Photo */}
          <Polaroid
            image={profile.avatar}
            caption={profile.polaroidCaption || "Vallerie Sharon Wibowo"}
            subcaption={profile.polaroidSubcaption || "Visual Communication Student"}
            rotation={-1}
            onClick={onOpenPolaroid}
          />

          {/* BINUS University Student ID Card */}
          <div className="relative bg-[#FFF3E5] border-2 border-[#D4BD99] rounded-xl p-3.5 sm:p-5 shadow-[0_2px_8px_rgba(55,25,44,0.08)] flex flex-col gap-3">
            <WashiTape color="plum" className="-top-2.5 left-4 sm:left-6 w-18" angle={-2} />
            
            <div className="flex justify-between items-center border-b border-[#37192C]/10 pb-2">
              <span className="font-mono text-[9px] sm:text-[10px] font-bold text-[#37192C] tracking-wider uppercase">
                BINUS SEMARANG // DESIGN
              </span>
              <span className="font-mono text-[8px] sm:text-[9px] font-extrabold text-[#B33939] uppercase">
                ACTIVE STUDENT
              </span>
            </div>

            <div className="flex flex-col xs:flex-row justify-between items-start xs:items-center gap-2">
              <div className="min-w-0">
                <h3 className="font-display text-sm sm:text-base font-bold text-[#37192C] leading-snug">
                  {profile.name}
                </h3>
                <p className="font-mono text-[9px] sm:text-[10px] text-[#6B5B65] mt-0.5 leading-tight">
                  Visual Communication Student<br />
                  BINUS University @ Semarang
                </p>
              </div>

              {/* Barcode */}
              <div className="flex flex-col items-start xs:items-end gap-1 flex-shrink-0 pt-1 xs:pt-0">
                <div
                  className="h-5 sm:h-6 w-16 sm:w-20"
                  style={{
                    background: 'repeating-linear-gradient(90deg, #37192C 0, #37192C 2px, transparent 2px, transparent 4px, #37192C 4px, #37192C 6px, transparent 6px, transparent 8px)'
                  }}
                  aria-label="Student ID Barcode"
                />
                <span className="font-mono text-[8px] tracking-widest text-[#37192C]">BINUS-SMG</span>
              </div>
            </div>

            <div className="flex justify-between items-center pt-2 border-t border-dashed border-[#37192C]/15">
              <span className="font-mono text-[9px] text-[#37192C] font-semibold">CAMPUS: SEMARANG</span>
              <RubberStamp text="VERIFIED" variant="gold" angle={-2} className="text-[8px] py-0.5 px-1.5" />
            </div>
          </div>
        </div>

        {/* Right Column: Archival Dossier Sheet */}
        <div className="relative bg-[#FFFFFF] p-4 sm:p-6 md:p-8 rounded-xl border border-[#EAD7B5] shadow-[0_2px_8px_rgba(55,25,44,0.06)] min-w-0">
          <Paperclip position="top-right" />

          {/* Archival Sheet Header Row with Stamp */}
          <div className="flex justify-between items-center mb-4 pb-2 border-b border-[#EAD7B5]/60 pr-8">
            <span className="font-mono text-[9px] sm:text-[10px] text-[#6B5B65] uppercase tracking-wider font-semibold">
              DOCUMENT // STATEMENT OF PURPOSE
            </span>
            <RubberStamp text="BINUS SEMARANG" variant="red" angle={-3} className="text-[9px] sm:text-[10px]" />
          </div>

          {/* Personal Quote / Philosophy */}
          <blockquote className="font-editorial text-lg sm:text-2xl md:text-3xl italic text-[#37192C] leading-snug sm:leading-relaxed mb-4 sm:mb-6 pl-3 sm:pl-4 border-l-4 border-[#D4AF37]">
            “{profile.personalStatement}”
          </blockquote>

          <p className="text-xs sm:text-sm md:text-base text-[#37192C]/90 leading-relaxed mb-5 sm:mb-6">
            {profile.bio}
          </p>

          {/* Core Disciplines */}
          <div className="mb-5 sm:mb-6">
            <h4 className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#37192C] mb-2 sm:mb-3 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#D4AF37]" />
              Core Design Disciplines
            </h4>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {profile.disciplines.map((item, idx) => (
                <span
                  key={idx}
                  className="font-mono text-[10px] sm:text-xs px-2.5 py-1 sm:px-3 sm:py-1.5 bg-[#FFF3E5] border border-[#EAD7B5] text-[#37192C] font-semibold rounded-md hover:bg-[#37192C] hover:text-[#FFF3E5] transition-colors duration-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Creative Toolkit */}
          <div className="mb-5 sm:mb-6">
            <h4 className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#37192C] mb-2 sm:mb-3 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-[#D4AF37]" />
              Creative Toolkit & Software
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
              {profile.toolkit.map((tool, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-2 sm:p-2.5 bg-[#FDFBF7] border border-[#EAD7B5] rounded-lg">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded bg-[#37192C] text-[#D4AF37] font-mono text-[10px] sm:text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {tool.code}
                  </div>
                  <div className="min-w-0">
                    <p className="font-sans text-xs font-bold text-[#37192C] leading-tight truncate">{tool.name}</p>
                    <p className="font-mono text-[9px] sm:text-[10px] text-[#6B5B65] truncate">{tool.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sticky Note Callout */}
          <div className="relative bg-[#FFF9D2] p-3.5 sm:p-5 rounded-[2px_2px_14px_2px] shadow-[0_4px_12px_rgba(55,25,44,0.08)] border border-[#D4AF37]/30">
            <WashiTape color="plum" className="-top-2 left-4 sm:left-6 w-14 sm:w-16" angle={-2} />
            <p className="font-sans text-xs sm:text-sm text-[#37192C] leading-relaxed mb-3 pt-1">
              Currently open for photography projects, digital illustration, video editing, and creative collaborations! Let's create something memorable ✨
            </p>
            <div className="flex items-center justify-between pt-2 border-t border-[#3B2406]/15">
              <span className="font-mono text-[9px] sm:text-[10px] text-[#3B2406]/75 uppercase tracking-wider">BINUS UNIVERSITY @ SEMARANG // SCHOOL OF DESIGN</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
