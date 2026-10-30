import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Camera, MapPin, Calendar, Maximize2, X, ChevronLeft, ChevronRight, User, Film, Layers } from 'lucide-react';
import { WashiTape, RubberStamp, Paperclip } from '../SkeuomorphicElements';
import { ArchivalImage } from '../../utils/vectorFallbacks';

export function PortfolioTab({ projects = [], items = [], onShowToast }) {
  // Support both props: 'projects' or fallback 'items'
  const projectList = projects.length > 0 ? projects : items;

  // Level 1 (null) vs Level 2 (project object)
  const [selectedProject, setSelectedProject] = useState(null);

  // Lightbox Modal state (null or photo index in current project)
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Scroll to top of folder sheet when switching levels
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedProject]);

  // Keyboard navigation for lightbox modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null || !selectedProject) return;

      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        if (lightboxIndex < selectedProject.photos.length - 1) {
          setLightboxIndex(prev => prev + 1);
        }
      } else if (e.key === 'ArrowLeft') {
        if (lightboxIndex > 0) {
          setLightboxIndex(prev => prev - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, selectedProject]);

  const handleOpenProject = (project) => {
    setSelectedProject(project);
    if (onShowToast) {
      onShowToast(`📁 Opened Album: ${project.title}`);
    }
  };

  const handleBackToCollection = () => {
    setSelectedProject(null);
    setLightboxIndex(null);
    if (onShowToast) {
      onShowToast("← Kembali ke Koleksi Portfolio");
    }
  };

  const activePhoto = (selectedProject && lightboxIndex !== null)
    ? selectedProject.photos[lightboxIndex]
    : null;

  return (
    <div className="w-full max-w-full">
      <AnimatePresence mode="wait">
        {/* =========================================================
            LEVEL 1: PROJECT / ALBUM COLLECTION GRID
            ========================================================= */}
        {!selectedProject ? (
          <motion.div
            key="collection-grid"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
          >
            {/* Level 1 Section Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 pb-4 sm:pb-6 mb-6 sm:mb-8 border-b-2 border-dashed border-[#37192C]/15">
              <div className="min-w-0">
                <div className="font-mono text-[9px] sm:text-xs tracking-widest text-[#B33939] font-bold uppercase mb-1 flex items-center gap-1.5 sm:gap-2">
                  <span>RECORD CLASSIFICATION // 04</span>
                  <span>//</span>
                  <span>STREET PHOTOGRAPHY ARCHIVE</span>
                </div>
                <h2 className="font-display text-xl sm:text-3xl md:text-4xl font-extrabold text-[#37192C] tracking-tight leading-tight">
                  Street Photography Projects & Albums
                </h2>
                <p className="font-editorial text-sm sm:text-base md:text-lg italic text-[#6B5B65] mt-0.5 sm:mt-1">
                  Dokumentasi visual jalanan, lanskap perkotaan, dinamika pasar tradisional, dan narasi manusia di sudut kota.
                </p>
              </div>

              <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs text-[#37192C] bg-[#FFF3E5] px-2.5 py-1 sm:px-3.5 sm:py-2 rounded-md border border-[#EAD7B5] self-start sm:self-auto flex-shrink-0">
                <span className="font-bold">{projectList.length} ALBUM SERIES</span>
                <span>•</span>
                <span>INSPECTION READY</span>
              </div>
            </div>

            {/* Album Collection Grid (Level 1) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
              {projectList.map((project, idx) => {
                const tapeColors = ["gold", "plum", "kraft", "vanilla"];
                const tapeColor = tapeColors[idx % tapeColors.length];

                return (
                  <motion.article
                    key={project.id}
                    whileHover={{ y: -6, rotate: idx % 2 === 0 ? -0.4 : 0.4 }}
                    transition={{ type: "spring", stiffness: 320, damping: 22 }}
                    onClick={() => handleOpenProject(project)}
                    className="group relative bg-[#FFFFFF] rounded-xl border border-[#EAD7B5] p-4 sm:p-5 shadow-[0_2px_8px_rgba(55,25,44,0.06)] hover:shadow-[0_16px_36px_rgba(55,25,44,0.14)] hover:border-[#37192C] transition-all flex flex-col justify-between cursor-pointer"
                  >
                    <WashiTape
                      color={tapeColor}
                      className={idx % 2 === 0 ? "-top-2.5 right-6 w-16 sm:w-20" : "-top-2.5 left-6 w-16 sm:w-20"}
                      angle={idx % 2 === 0 ? 3 : -3}
                    />

                    <div>
                      {/* Top Header Badge Row */}
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-mono text-[9px] sm:text-[10px] font-bold text-[#37192C] bg-[#EAD7B5] px-2 py-0.5 rounded tracking-wider uppercase">
                          {project.badge || project.category}
                        </span>
                        <span className="font-mono text-[10px] text-[#6B5B65] flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-[#B33939]" />
                          <span>{project.date}</span>
                        </span>
                      </div>

                      {/* Album Cover Photo Viewport */}
                      <div className="relative w-full aspect-[16/10] bg-[#1C0E17] rounded-lg overflow-hidden shadow-inner mb-3.5 border border-[#EAD7B5]/60">
                        <ArchivalImage
                          src={project.coverImage || project.photos?.[0]?.url}
                          alt={project.title}
                          fallbackType="photography"
                          title={project.title}
                          className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                        />

                        {/* Film Roll Badge */}
                        <div className="absolute top-2 left-2 font-mono text-[8px] sm:text-[9px] text-[#D4AF37] bg-black/75 px-1.5 py-0.5 rounded backdrop-blur-[2px] pointer-events-none">
                          ROLL #{String(idx + 1).padStart(2, '0')} // KODAK 400TX
                        </div>

                        {/* Photo Count Pill */}
                        <div className="absolute bottom-2 right-2 font-mono text-[9px] text-[#FFF3E5] bg-[#37192C]/85 px-2 py-0.5 rounded backdrop-blur-[2px] flex items-center gap-1">
                          <Layers className="w-3 h-3 text-[#D4AF37]" />
                          <span>{project.photos?.length || 0} Photos</span>
                        </div>
                      </div>

                      {/* Metadata Row */}
                      <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono text-[#8C6D23] mb-1.5 truncate">
                        <span className="flex items-center gap-1 truncate">
                          <MapPin className="w-3 h-3 flex-shrink-0" />
                          <span className="truncate">{project.location}</span>
                        </span>
                      </div>

                      {/* Album Title */}
                      <h3 className="font-display text-lg sm:text-xl font-bold text-[#37192C] leading-snug mb-2 group-hover:text-[#B33939] transition-colors">
                        {project.title}
                      </h3>

                      {/* Description Snippet */}
                      <p className="text-xs text-[#6B5B65] leading-relaxed line-clamp-3 mb-4">
                        {project.description}
                      </p>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="pt-3 border-t border-dashed border-[#EAD7B5] mt-auto flex items-center justify-between gap-2">
                      <span className="font-mono text-[9px] sm:text-[10px] text-[#6B5B65] truncate max-w-[130px] sm:max-w-[160px]">
                        📷 {project.gear}
                      </span>

                      <span className="inline-flex items-center gap-1.5 font-mono text-[11px] sm:text-xs font-bold text-[#37192C] bg-[#FFF3E5] group-hover:bg-[#37192C] group-hover:text-[#FFF3E5] px-3 py-1.5 rounded-md border border-[#D4BD99] transition-all">
                        <span>Lihat Gallery</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </span>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </motion.div>
        ) : (
          /* =========================================================
             LEVEL 2: PROJECT DETAIL & PHOTO GALLERY
             ========================================================= */
          <motion.div
            key="project-detail"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="w-full"
          >
            {/* Top Navigation: Tactile Back Button Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-[#EAD7B5]">
              <button
                type="button"
                onClick={handleBackToCollection}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 bg-[#37192C] hover:bg-[#4D253F] text-[#FFF3E5] rounded-lg font-mono text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-sm active:scale-[0.98]"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>← Kembali ke Portfolio</span>
              </button>

              <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs text-[#6B5B65]">
                <span className="hidden sm:inline">DOSSIER //</span>
                <span className="font-bold text-[#37192C] bg-[#FFF3E5] px-2.5 py-1 rounded border border-[#EAD7B5]">
                  {selectedProject.id.toUpperCase()}
                </span>
                <RubberStamp text="VERIFIED STREET RECORD" variant="gold" angle={-2} className="text-[8px] sm:text-[9px] py-0.5 px-2" />
              </div>
            </div>

            {/* Level 2 Project Header Dossier */}
            <div className="relative bg-[#FFFFFF] p-4 sm:p-6 md:p-8 rounded-xl border border-[#EAD7B5] shadow-[0_2px_12px_rgba(55,25,44,0.06)] mb-6 sm:mb-8">
              <Paperclip position="top-right" />
              <WashiTape color="plum" className="-top-2.5 left-8 w-20" angle={-2} />

              <div className="flex flex-wrap items-center gap-2 mb-2 pr-10">
                <span className="font-mono text-[10px] sm:text-xs font-bold text-[#B33939] uppercase tracking-wider">
                  {selectedProject.category}
                </span>
                <span className="text-[#6B5B65]">•</span>
                <span className="font-mono text-[10px] sm:text-xs text-[#6B5B65] flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {selectedProject.date}
                </span>
              </div>

              {/* Large Serif Title */}
              <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#37192C] tracking-tight leading-tight mb-3">
                {selectedProject.title}
              </h1>

              {/* Narrative Story */}
              <p className="text-xs sm:text-sm md:text-base text-[#37192C]/90 leading-relaxed max-w-4xl mb-6">
                {selectedProject.description}
              </p>

              {/* Metadata Spec Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-4 border-t border-dashed border-[#EAD7B5] font-mono text-xs">
                <div className="bg-[#FFF3E5] p-2.5 rounded-lg border border-[#EAD7B5]/60">
                  <span className="text-[9px] sm:text-[10px] text-[#6B5B65] uppercase block font-semibold flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#B33939]" />
                    Location
                  </span>
                  <span className="text-[#37192C] font-bold text-[11px] sm:text-xs mt-0.5 truncate block" title={selectedProject.location}>
                    {selectedProject.location}
                  </span>
                </div>

                <div className="bg-[#FFF3E5] p-2.5 rounded-lg border border-[#EAD7B5]/60">
                  <span className="text-[9px] sm:text-[10px] text-[#6B5B65] uppercase block font-semibold flex items-center gap-1">
                    <Camera className="w-3 h-3 text-[#D4AF37]" />
                    Camera & Gear
                  </span>
                  <span className="text-[#37192C] font-bold text-[11px] sm:text-xs mt-0.5 truncate block" title={selectedProject.gear}>
                    {selectedProject.gear}
                  </span>
                </div>

                <div className="bg-[#FFF3E5] p-2.5 rounded-lg border border-[#EAD7B5]/60">
                  <span className="text-[9px] sm:text-[10px] text-[#6B5B65] uppercase block font-semibold flex items-center gap-1">
                    <User className="w-3 h-3 text-[#37192C]" />
                    Subject / Project
                  </span>
                  <span className="text-[#37192C] font-bold text-[11px] sm:text-xs mt-0.5 truncate block" title={selectedProject.client}>
                    {selectedProject.client}
                  </span>
                </div>

                <div className="bg-[#FFF3E5] p-2.5 rounded-lg border border-[#EAD7B5]/60">
                  <span className="text-[9px] sm:text-[10px] text-[#6B5B65] uppercase block font-semibold flex items-center gap-1">
                    <Film className="w-3 h-3 text-[#8C6D23]" />
                    Series Archive
                  </span>
                  <span className="text-[#37192C] font-bold text-[11px] sm:text-xs mt-0.5 truncate block">
                    {selectedProject.photos.length} Curated Exposures
                  </span>
                </div>
              </div>
            </div>

            {/* Gallery Section Sub-Header */}
            <div className="flex items-center justify-between mb-4 px-1">
              <div className="flex items-center gap-2 font-mono text-xs sm:text-sm font-bold text-[#37192C] uppercase tracking-wider">
                <Layers className="w-4 h-4 text-[#D4AF37]" />
                <span>EXPOSURE CONTACT SHEETS // KLIK UNTUK INSPEKSI FULL-SCREEN</span>
              </div>
              <span className="font-mono text-[10px] text-[#6B5B65]">
                {selectedProject.photos.length} Frames Total
              </span>
            </div>

            {/* Photo Gallery Grid (Level 2) */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
              {selectedProject.photos.map((photo, pIdx) => (
                <motion.div
                  key={photo.id || pIdx}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  onClick={() => setLightboxIndex(pIdx)}
                  className="group relative bg-[#FFFFFF] p-2 sm:p-2.5 pb-2.5 sm:pb-3 rounded-[3px] border border-[#EAD7B5] shadow-[0_2px_6px_rgba(55,25,44,0.06)] hover:shadow-[0_12px_24px_rgba(55,25,44,0.16)] hover:border-[#37192C] transition-all cursor-pointer flex flex-col justify-between select-none"
                >
                  {/* Photo Frame Header */}
                  <div className="flex justify-between items-center mb-1 text-[8px] sm:text-[9px] font-mono text-[#6B5B65] px-0.5">
                    <span className="font-bold text-[#D4AF37]">FRAME #{String(pIdx + 1).padStart(2, '0')}</span>
                    <span className="truncate max-w-[80px] sm:max-w-[100px]">{photo.exif?.split('•')[0] || '1/250s'}</span>
                  </div>

                  {/* Photo Container */}
                  <div className={`relative w-full ${photo.aspect || 'aspect-[4/5]'} bg-[#160A13] rounded-[1px] overflow-hidden shadow-inner mb-2`}>
                    <ArchivalImage
                      src={photo.url || photo}
                      alt={photo.caption || `Photo ${pIdx + 1}`}
                      fallbackType="photography"
                      title={photo.caption || `EXPOSURE 0${pIdx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Darkroom Contact Sheet Stamp */}
                    <div className="absolute top-1 left-1 font-mono text-[7px] text-[#D4AF37] bg-black/65 px-1 py-0.2 rounded backdrop-blur-[1px] pointer-events-none opacity-85">
                      EXP {String(pIdx + 1).padStart(2, '0')}
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#24101D]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-between p-2.5 text-[#FFF3E5]">
                      <div className="flex justify-end">
                        <span className="w-6 h-6 rounded-full bg-[#FFFFFF]/25 backdrop-blur-md flex items-center justify-center text-[#FFF3E5]">
                          <Maximize2 className="w-3.5 h-3.5" />
                        </span>
                      </div>
                      <div>
                        <p className="font-editorial text-xs italic text-[#FFF3E5] leading-snug line-clamp-3">
                          “{photo.caption || selectedProject.title}”
                        </p>
                        <span className="font-mono text-[8px] text-[#D4AF37] block mt-1">
                          {photo.exif || selectedProject.gear}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Photo Caption Footer */}
                  <div className="pt-1 border-t border-dashed border-[#EAD7B5]/80 px-0.5">
                    <p className="text-[10px] sm:text-[11px] font-sans font-medium text-[#37192C] leading-tight line-clamp-2">
                      {photo.caption || `Exposure ${pIdx + 1}`}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================================
          HIGH-RES LIGHTBOX MODAL WITH FULL EXIF INSPECTION
          ========================================================= */}
      <AnimatePresence>
        {activePhoto && selectedProject && (
          <div
            className="fixed inset-0 z-50 bg-[#120710]/94 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6"
            onClick={() => setLightboxIndex(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="relative bg-[#1E0D1A] text-[#FFF3E5] rounded-xl border border-[#D4AF37]/35 shadow-2xl max-w-4xl w-full max-h-[94vh] overflow-y-auto flex flex-col p-3.5 sm:p-5 md:p-7"
              onClick={e => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 rounded-full bg-[#37192C] border border-[#D4AF37]/40 flex items-center justify-center font-mono font-bold text-xs sm:text-sm text-[#FFF3E5] hover:bg-[#D4AF37] hover:text-[#37192C] transition-colors z-40"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Lightbox Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pr-10">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[9px] sm:text-xs font-bold text-[#37192C] bg-[#D4AF37] px-2 py-0.5 rounded">
                    FRAME {String(lightboxIndex + 1).padStart(2, '0')} // {selectedProject.photos.length}
                  </span>
                  <span className="font-mono text-[10px] sm:text-xs text-[#EAD7B5] truncate max-w-[200px] sm:max-w-none">
                    {selectedProject.title}
                  </span>
                </div>
                <RubberStamp text="STREET DARKROOM SPECIMEN" variant="gold" angle={-2} className="text-[8px] sm:text-[9px] py-0.5 px-2" />
              </div>

              {/* High-res Image Viewport */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-[#10050E] rounded-lg overflow-hidden mb-3.5 shadow-2xl border border-white/10 flex items-center justify-center">
                <ArchivalImage
                  src={activePhoto.url || activePhoto}
                  alt={activePhoto.caption || "Inspection"}
                  fallbackType="photography"
                  title={activePhoto.caption || selectedProject.title}
                  className="w-full h-full object-contain"
                />

                {/* Left Carousel Arrow */}
                {lightboxIndex > 0 && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightboxIndex(prev => prev - 1);
                    }}
                    className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#1F0D19]/85 border border-[#D4AF37]/40 flex items-center justify-center text-[#FFF3E5] hover:bg-[#D4AF37] hover:text-[#37192C] transition-all shadow-lg z-30"
                    aria-label="Previous photo"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                )}

                {/* Right Carousel Arrow */}
                {lightboxIndex < selectedProject.photos.length - 1 && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightboxIndex(prev => prev + 1);
                    }}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#1F0D19]/85 border border-[#D4AF37]/40 flex items-center justify-center text-[#FFF3E5] hover:bg-[#D4AF37] hover:text-[#37192C] transition-all shadow-lg z-30"
                    aria-label="Next photo"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                )}
              </div>

              {/* Photo Caption & Metadata */}
              <div className="mb-3">
                <p className="font-editorial text-base sm:text-lg italic text-[#FFF3E5] leading-snug">
                  “{activePhoto.caption || selectedProject.title}”
                </p>
                <div className="flex flex-wrap items-center gap-3 mt-1.5 text-[10px] sm:text-xs font-mono text-[#D4AF37]">
                  <span>📍 {selectedProject.location}</span>
                  <span>•</span>
                  <span>📷 {selectedProject.gear}</span>
                  <span>•</span>
                  <span>⚡ {activePhoto.exif || "Manual Exposure"}</span>
                </div>
              </div>

              {/* Lightbox Footer Navigation Dots */}
              <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs font-mono text-[#6B5B65]">
                <div className="flex gap-1 overflow-x-auto py-1 max-w-[200px] sm:max-w-md">
                  {selectedProject.photos.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setLightboxIndex(i)}
                      className={`h-1.5 rounded-full transition-all ${
                        lightboxIndex === i ? 'w-5 bg-[#D4AF37]' : 'w-1.5 bg-white/20 hover:bg-white/40'
                      }`}
                      aria-label={`Go to frame ${i + 1}`}
                    />
                  ))}
                </div>

                <span>
                  Frame {lightboxIndex + 1} / {selectedProject.photos.length}
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
