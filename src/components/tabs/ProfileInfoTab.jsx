import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Compass, Terminal, Camera, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { Paperclip, RubberStamp, WashiTape } from '../SkeuomorphicElements';

export function ProfileInfoTab({ profile }) {
  return (
    <div className="w-full max-w-full">
      {/* Pane Section Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 pb-4 sm:pb-6 mb-6 sm:mb-8 border-b-2 border-dashed border-[#37192C]/15">
        <div className="min-w-0">
          <div className="font-mono text-[9px] sm:text-xs tracking-widest text-[#B33939] font-bold uppercase mb-1 flex items-center gap-1.5 sm:gap-2">
            <span>RECORD NO. 02</span>
            <span>//</span>
            <span>PERSONAL PROFILE DOSSIER</span>
          </div>
          <h2 className="font-display text-xl sm:text-3xl md:text-4xl font-extrabold text-[#37192C] tracking-tight leading-tight">
            Personal Profile Information
          </h2>
          <p className="font-editorial text-sm sm:text-base md:text-lg italic text-[#6B5B65] mt-0.5 sm:mt-1">
            Academic background, creative disciplines, and technical toolkit at BINUS University @ Semarang.
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs text-[#37192C] bg-[#FFF3E5] px-2.5 py-1 sm:px-3.5 sm:py-2 rounded-md border border-[#EAD7B5] self-start sm:self-auto flex-shrink-0">
          <span className="font-bold">BINUS SEMARANG</span>
          <span>•</span>
          <span>DKV MAJOR</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6 sm:gap-8 items-start">
        {/* Main Column: Academic Journey & Core Competencies */}
        <div className="flex flex-col gap-6">
          {/* Academic Background Card */}
          <div className="relative bg-[#FFFFFF] p-5 sm:p-7 rounded-xl border border-[#EAD7B5] shadow-[0_2px_8px_rgba(55,25,44,0.06)]">
            <Paperclip position="top-right" />
            
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#37192C] uppercase tracking-wider mb-4 pb-2 border-b border-[#EAD7B5]">
              <GraduationCap className="w-4 h-4 text-[#D4AF37]" />
              <span>ACADEMIC BACKGROUND & CURRICULUM</span>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#37192C]">
                  BINUS University @ Semarang
                </h3>
                <p className="font-sans text-sm font-semibold text-[#B33939] mt-0.5">
                  Visual Communication Design (DKV / Desain Komunikasi Visual)
                </p>
                <p className="font-mono text-xs text-[#6B5B65] mt-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>School of Design • Semarang Campus, Central Java</span>
                </p>
              </div>

              <span className="font-mono text-[10px] sm:text-[11px] font-bold text-[#37192C] bg-[#FFF3E5] px-3 py-1.5 rounded-md border border-[#D4BD99] flex-shrink-0">
                ACTIVE UNDERGRADUATE
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#37192C]/85 leading-relaxed">
              Fokus pembelajaran mendalami eksplorasi bahasa visual, fotografi dokumenter jalanan, ilustrasi digital, serta kurasi media sosial. Menggabungkan ketelitian komposisi visual dengan narasi organik sehari-hari.
            </p>
          </div>

          {/* Core Design Disciplines Grid */}
          <div className="bg-[#FFFFFF] p-5 sm:p-7 rounded-xl border border-[#EAD7B5] shadow-[0_2px_8px_rgba(55,25,44,0.06)]">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#37192C] uppercase tracking-wider mb-4 pb-2 border-b border-[#EAD7B5]">
              <Compass className="w-4 h-4 text-[#D4AF37]" />
              <span>CORE CREATIVE DISCIPLINES</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-3.5 bg-[#FFF3E5] rounded-lg border border-[#EAD7B5]/80 flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-display text-base font-bold text-[#37192C]">01. Photography</span>
                  <span className="font-mono text-[9px] text-[#B33939] font-bold">PRIMARY</span>
                </div>
                <p className="text-xs text-[#6B5B65] leading-relaxed">
                  Street photography, urban geometry, night chronicles, dan potret natural menggunakan kamera full-frame & prime lens.
                </p>
              </div>

              <div className="p-3.5 bg-[#FFF3E5] rounded-lg border border-[#EAD7B5]/80 flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-display text-base font-bold text-[#37192C]">02. Digital Illustration</span>
                  <span className="font-mono text-[9px] text-[#D4AF37] font-bold">CORE</span>
                </div>
                <p className="text-xs text-[#6B5B65] leading-relaxed">
                  Eksplorasi karakter, studi flora botani, serta ilustrasi tekstur risograph dan gouache digital di Procreate.
                </p>
              </div>

              <div className="p-3.5 bg-[#FFF3E5] rounded-lg border border-[#EAD7B5]/80 flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-display text-base font-bold text-[#37192C]">03. Basic Video Editing</span>
                  <span className="font-mono text-[9px] text-[#6B5B65] font-bold">MEDIA</span>
                </div>
                <p className="text-xs text-[#6B5B65] leading-relaxed">
                  Pemotongan ritmis video pendek, color grading estetika hangat, dan storytelling visual vertikal untuk media sosial.
                </p>
              </div>

              <div className="p-3.5 bg-[#FFF3E5] rounded-lg border border-[#EAD7B5]/80 flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-display text-base font-bold text-[#37192C]">04. Social Media Curation</span>
                  <span className="font-mono text-[9px] text-[#6B5B65] font-bold">CURATION</span>
                </div>
                <p className="text-xs text-[#6B5B65] leading-relaxed">
                  Penataan moodboard, harmonisasi palet warna grid Instagram, dan kurasi narasi visual brand personal.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Side Column: Technical Toolkit & Studio Gear */}
        <div className="flex flex-col gap-5">
          {/* Creative Toolkit */}
          <div className="bg-[#FFFFFF] p-5 rounded-xl border border-[#EAD7B5] shadow-[0_2px_8px_rgba(55,25,44,0.06)]">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#37192C] uppercase tracking-wider mb-3.5 pb-2 border-b border-[#EAD7B5]">
              <Terminal className="w-4 h-4 text-[#D4AF37]" />
              <span>TECHNICAL TOOLKIT</span>
            </div>

            <div className="flex flex-col gap-2.5">
              {profile.toolkit.map((tool, idx) => (
                <div key={idx} className="flex items-center gap-3 p-2.5 bg-[#FFF3E5] rounded-lg border border-[#EAD7B5]/80">
                  <div className="w-8 h-8 rounded bg-[#37192C] text-[#D4AF37] font-mono text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {tool.code}
                  </div>
                  <div className="min-w-0">
                    <p className="font-sans text-xs font-bold text-[#37192C] leading-tight truncate">{tool.name}</p>
                    <p className="font-mono text-[9px] text-[#6B5B65] truncate">{tool.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Equipment Setup */}
          <div className="bg-[#FFF3E5] p-5 rounded-xl border border-[#D4BD99] shadow-[0_2px_8px_rgba(55,25,44,0.06)]">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#37192C] uppercase tracking-wider mb-3 pb-2 border-b border-[#37192C]/10">
              <Camera className="w-4 h-4 text-[#B33939]" />
              <span>STUDIO & CAMERA GEAR</span>
            </div>

            <ul className="flex flex-col gap-2 font-mono text-xs text-[#37192C]/90">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
                <span>Sony A7 Series & 35mm Prime</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
                <span>iPad Pro & Apple Pencil for Procreate</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
                <span>MacBook Pro for Editing & Adobe CC</span>
              </li>
            </ul>
          </div>

          {/* Philosophy Note */}
          <div className="relative bg-[#FFFFFF] p-5 rounded-xl border border-[#EAD7B5] shadow-[0_2px_8px_rgba(55,25,44,0.06)]">
            <span className="font-mono text-[9px] text-[#B33939] font-bold uppercase tracking-wider block mb-1">
              CREATIVE STATEMENT
            </span>
            <blockquote className="font-editorial text-lg italic text-[#37192C] leading-snug">
              “{profile.personalStatement}”
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
