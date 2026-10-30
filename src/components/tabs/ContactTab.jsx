import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Copy, Check, Instagram, ArrowUpRight, Mail, MapPin } from 'lucide-react';
import { WashiTape, RubberStamp, Paperclip } from '../SkeuomorphicElements';

export function ContactTab({ profile, onShowToast, onPlaySound }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'branding',
    timeline: 'flexible',
    brief: ''
  });
  const [isDispatched, setIsDispatched] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onPlaySound) onPlaySound('stamp');
    setIsDispatched(true);
    if (onShowToast) onShowToast("✓ Archival Memo Filed! Dispatch recorded successfully.");

    setTimeout(() => {
      setFormData({ name: '', email: '', service: 'branding', timeline: 'flexible', brief: '' });
    }, 1500);

    setTimeout(() => {
      setIsDispatched(false);
    }, 5000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    if (onPlaySound) onPlaySound('clip');
    if (onShowToast) onShowToast(`Copied to clipboard: ${profile.email}`);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="w-full max-w-full">
      {/* Pane Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 pb-4 sm:pb-6 mb-5 sm:mb-8 border-b-2 border-dashed border-[#37192C]/15">
        <div className="min-w-0">
          <div className="font-mono text-[9px] sm:text-xs tracking-widest text-[#B33939] font-bold uppercase mb-1">
            RECORD NO. 06 // OFFICIAL DISPATCH & INQUIRY MEMO
          </div>
          <h2 className="font-display text-xl sm:text-3xl md:text-4xl font-extrabold text-[#37192C] tracking-tight leading-tight">
            Archive Requisition / Get In Touch
          </h2>
          <p className="font-editorial text-sm sm:text-base md:text-lg italic text-[#6B5B65] mt-0.5 sm:mt-1">
            File an archival requisition memo for branding projects, editorial commissions, or creative collaborations.
          </p>
        </div>

        <div className="font-mono text-[10px] sm:text-xs text-[#37192C] bg-[#FFF3E5] px-2.5 py-1 sm:px-3.5 sm:py-2 rounded-md border border-[#EAD7B5] self-start sm:self-auto flex-shrink-0">
          <span>FORM DKV-SMG</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6 sm:gap-8 items-start">
        {/* Archival Memo Form Sheet */}
        <div className="relative bg-[#FFFFFF] p-4 sm:p-6 md:p-8 rounded-xl border border-[#EAD7B5] shadow-[0_4px_14px_rgba(55,25,44,0.08)] min-w-0">
          <Paperclip position="top-right" />
          <WashiTape color="kraft" className="-top-2.5 left-6 sm:left-8 w-20 sm:w-24" angle={-3} />

          {/* Animated Distressed Red Rubber Stamp Overlay when Dispatched */}
          <AnimatePresence>
            {isDispatched && (
              <motion.div
                initial={{ scale: 2, opacity: 0, rotate: -25 }}
                animate={{ scale: 1, opacity: 1, rotate: -8 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 450, damping: 20 }}
                className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none bg-white/70 backdrop-blur-[1px] rounded-xl p-4"
              >
                <div className="border-3 sm:border-4 border-[#B33939] border-dashed text-[#B33939] font-mono text-lg sm:text-2xl md:text-3xl font-black uppercase tracking-widest px-4 py-3 sm:px-6 sm:py-4 rounded-lg shadow-xl bg-[#FFF3E5]/95 text-center">
                  DISPATCHED // ARCHIVE RECORD FILED
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex justify-between items-start pb-3 sm:pb-4 mb-4 sm:mb-6 border-b-2 border-[#37192C] pr-6">
            <div className="min-w-0">
              <span className="font-mono text-[10px] sm:text-xs text-[#B33939] font-bold tracking-wider block">
                MEMORANDUM NO. DKV-SMG-01
              </span>
              <h3 className="font-display text-lg sm:text-2xl font-extrabold text-[#37192C]">
                Creative Requisition Slip
              </h3>
            </div>
            <RubberStamp text="DKV ARCHIVE" variant="gold" angle={-4} className="text-[9px] sm:text-[10px]" />
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              <div className="flex flex-col gap-1 sm:gap-1.5">
                <label className="font-mono text-[11px] sm:text-xs font-bold text-[#37192C] uppercase tracking-wider" htmlFor="memo-name">
                  Sender Name / Studio
                </label>
                <input
                  id="memo-name"
                  type="text"
                  required
                  placeholder="e.g. Studio Nara / Julian"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="font-sans text-xs sm:text-sm p-2.5 sm:p-3 bg-[#FFF3E5] border border-[#D4BD99] rounded-md text-[#37192C] focus:bg-[#FFFFFF] focus:border-[#37192C] focus:outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1 sm:gap-1.5">
                <label className="font-mono text-[11px] sm:text-xs font-bold text-[#37192C] uppercase tracking-wider" htmlFor="memo-email">
                  Return Dispatch (Email)
                </label>
                <input
                  id="memo-email"
                  type="email"
                  required
                  placeholder="julian@studio.com"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="font-sans text-xs sm:text-sm p-2.5 sm:p-3 bg-[#FFF3E5] border border-[#D4BD99] rounded-md text-[#37192C] focus:bg-[#FFFFFF] focus:border-[#37192C] focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              <div className="flex flex-col gap-1 sm:gap-1.5">
                <label className="font-mono text-[11px] sm:text-xs font-bold text-[#37192C] uppercase tracking-wider" htmlFor="memo-service">
                  Requisition Service
                </label>
                <select
                  id="memo-service"
                  value={formData.service}
                  onChange={e => setFormData({ ...formData, service: e.target.value })}
                  className="font-sans text-xs sm:text-sm p-2.5 sm:p-3 bg-[#FFF3E5] border border-[#D4BD99] rounded-md text-[#37192C] focus:bg-[#FFFFFF] focus:border-[#37192C] focus:outline-none transition-colors cursor-pointer"
                >
                  <option value="branding">Brand Identity & Design System</option>
                  <option value="editorial">Editorial Publication & Zine Design</option>
                  <option value="illustration">Custom Digital / Riso Illustration</option>
                  <option value="packaging">Packaging Architecture & Label Design</option>
                  <option value="collab">Creative Collaboration / Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-1 sm:gap-1.5">
                <label className="font-mono text-[11px] sm:text-xs font-bold text-[#37192C] uppercase tracking-wider" htmlFor="memo-timeline">
                  Timeline & Scope
                </label>
                <select
                  id="memo-timeline"
                  value={formData.timeline}
                  onChange={e => setFormData({ ...formData, timeline: e.target.value })}
                  className="font-sans text-xs sm:text-sm p-2.5 sm:p-3 bg-[#FFF3E5] border border-[#D4BD99] rounded-md text-[#37192C] focus:bg-[#FFFFFF] focus:border-[#37192C] focus:outline-none transition-colors cursor-pointer"
                >
                  <option value="flexible">Flexible Timeline (1–2 Months)</option>
                  <option value="urgent">Sprint Project (2–3 Weeks)</option>
                  <option value="student">Student / Collective Collaboration</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1 sm:gap-1.5">
              <label className="font-mono text-[11px] sm:text-xs font-bold text-[#37192C] uppercase tracking-wider" htmlFor="memo-brief">
                Project Brief / Scope Details
              </label>
              <textarea
                id="memo-brief"
                rows={4}
                required
                placeholder="Describe your vision, goals, and any specific deliverables..."
                value={formData.brief}
                onChange={e => setFormData({ ...formData, brief: e.target.value })}
                className="font-sans text-xs sm:text-sm p-2.5 sm:p-3 bg-[#FFF3E5] border border-[#D4BD99] rounded-md text-[#37192C] focus:bg-[#FFFFFF] focus:border-[#37192C] focus:outline-none transition-colors resize-y"
              />
            </div>

            <button
              type="submit"
              className="mt-1 inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 bg-[#37192C] text-[#FFF3E5] rounded-lg font-mono text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#4D253F] transition-all shadow-[0_4px_12px_rgba(55,25,44,0.2)] active:scale-[0.99]"
            >
              <span>DISPATCH MEMO TO ARCHIVE</span>
              <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </form>
        </div>

        {/* Side Column: Quick Actions */}
        <div className="flex flex-col gap-4 sm:gap-5">
          {/* Direct Email Card */}
          <div className="bg-[#FFF3E5] border border-[#D4BD99] rounded-xl p-4 sm:p-5 shadow-[0_2px_8px_rgba(55,25,44,0.06)] flex flex-col gap-2.5 sm:gap-3">
            <div className="flex items-center gap-2 font-mono text-[11px] sm:text-xs font-bold text-[#37192C] uppercase tracking-wider">
              <Mail className="w-3.5 h-3.5" />
              <span>DIRECT CAMPUS EMAIL</span>
            </div>
            <div className="flex flex-col xs:flex-row items-stretch xs:items-center justify-between gap-2 bg-[#FFFFFF] p-2 sm:p-2.5 px-3 rounded-md border border-[#EAD7B5]">
              <span className="font-mono text-xs text-[#37192C] truncate select-all">{profile.email}</span>
              <button
                type="button"
                onClick={copyEmail}
                className="font-mono text-[10px] sm:text-[11px] font-bold text-[#B33939] hover:bg-[#FFF3E5] px-2 py-1 rounded transition-colors inline-flex items-center justify-center gap-1 self-end xs:self-auto flex-shrink-0"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3 h-3" />}
                <span>{copiedEmail ? 'COPIED' : 'COPY'}</span>
              </button>
            </div>
            <p className="text-xs text-[#6B5B65] leading-relaxed">
              Feel free to send exhibition invitations, zine exchanges, or freelance project inquiries directly.
            </p>
          </div>

          {/* Instagram Portal Card */}
          <div className="bg-[#FFFFFF] border border-[#EAD7B5] rounded-xl p-4 sm:p-5 shadow-[0_2px_8px_rgba(55,25,44,0.06)] flex flex-col gap-2.5 sm:gap-3">
            <div className="flex items-center gap-2 font-mono text-[11px] sm:text-xs font-bold text-[#37192C] uppercase tracking-wider">
              <Instagram className="w-3.5 h-3.5" />
              <span>INSTAGRAM CURATION</span>
            </div>
            <p className="text-xs text-[#6B5B65] leading-relaxed">
              Follow Vallerie's visual diary, photography studies, and creative explorations.
            </p>
            <a
              href={profile.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 sm:py-2.5 bg-[#37192C] text-[#FFF3E5] rounded-md font-mono text-xs font-bold hover:bg-[#4D253F] transition-colors"
            >
              <span>VISIT @{profile.instagram}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Studio Base Card */}
          <div className="bg-[#FFFFFF] border border-[#EAD7B5] rounded-xl p-4 sm:p-5 shadow-[0_2px_8px_rgba(55,25,44,0.06)] flex flex-col gap-2">
            <div className="flex items-center gap-2 font-mono text-[11px] sm:text-xs font-bold text-[#37192C] uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>STUDIO BASE // LOCATION</span>
            </div>
            <p className="text-xs text-[#6B5B65] leading-relaxed">
              Visual Communication Design<br />
              BINUS University @ Semarang<br />
              Central Java, Indonesia
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
