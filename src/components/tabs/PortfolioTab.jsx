import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, MapPin, Calendar, Maximize2, X, ChevronLeft, ChevronRight, Sliders, Film } from 'lucide-react';
import { WashiTape, RubberStamp, Paperclip } from '../SkeuomorphicElements';
import { ArchivalImage } from '../../utils/vectorFallbacks';

const ALBUMS = [
  { id: 'all', label: 'ALL SERIES', icon: Film },
  { id: 'portrait', label: 'PORTRAIT & FASHION', icon: Camera },
  { id: 'street', label: 'STREET & SPONTANEOUS', icon: MapPin },
  { id: 'event', label: 'EVENT & LIFESTYLE', icon: Calendar },
  { id: 'conceptual', label: 'CONCEPTUAL', icon: Sliders }
];

export function PortfolioTab({ items, onShowToast }) {
  const [activeAlbum, setActiveAlbum] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Filter items by subCategory
  const filteredPhotos = activeAlbum === 'all'
    ? items
    : items.filter(photo => photo.subCategory === activeAlbum);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedPhoto) return;

      if (e.key === 'Escape') {
        setSelectedPhoto(null);
      } else if (e.key === 'ArrowRight') {
        const currentIdx = filteredPhotos.findIndex(p => p.id === selectedPhoto.id);
        if (currentIdx < filteredPhotos.length - 1) {
          setSelectedPhoto(filteredPhotos[currentIdx + 1]);
        }
      } else if (e.key === 'ArrowLeft') {
        const currentIdx = filteredPhotos.findIndex(p => p.id === selectedPhoto.id);
        if (currentIdx > 0) {
          setSelectedPhoto(filteredPhotos[currentIdx - 1]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto, filteredPhotos]);

  const handleSelectAlbum = (albumId) => {
    setActiveAlbum(albumId);
    if (onShowToast) {
      const album = ALBUMS.find(a => a.id === albumId);
      onShowToast(`📁 Opened Album: ${album?.label}`);
    }
  };

  const currentIdx = selectedPhoto
    ? filteredPhotos.findIndex(p => p.id === selectedPhoto.id)
    : -1;

  return (
    <div className="w-full max-w-full">
      {/* Pane Section Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 pb-4 sm:pb-6 mb-5 sm:mb-7 border-b-2 border-dashed border-[#37192C]/15">
        <div className="min-w-0">
          <div className="font-mono text-[9px] sm:text-xs tracking-widest text-[#B33939] font-bold uppercase mb-1 flex items-center gap-1.5 sm:gap-2">
            <span>RECORD CLASSIFICATION // 04</span>
            <span>//</span>
            <span>PHOTO ARCHIVE ROLL</span>
          </div>
          <h2 className="font-display text-xl sm:text-3xl md:text-4xl font-extrabold text-[#37192C] tracking-tight leading-tight">
            Photography Archive & Film Rolls
          </h2>
          <p className="font-editorial text-sm sm:text-base md:text-lg italic text-[#6B5B65] mt-0.5 sm:mt-1">
            Medium format studies, street chronicles, campus event documentations, and conceptual light experiments.
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs text-[#37192C] bg-[#FFF3E5] px-2.5 py-1 sm:px-3.5 sm:py-2 rounded-md border border-[#EAD7B5] self-start sm:self-auto flex-shrink-0">
          <span className="font-bold">{filteredPhotos.length} EXPOSURES</span>
          <span>•</span>
          <span>INSPECTION READY</span>
        </div>
      </div>

      {/* =========================================================
          SUB-FOLDER / ALBUM SELECTOR (ARCHIVAL ENVELOPE TABS)
          ========================================================= */}
      <div className="mb-6 sm:mb-8">
        <div className="flex items-center gap-1.5 mb-2 font-mono text-[10px] sm:text-[11px] text-[#6B5B65] uppercase font-bold tracking-wider">
          <Film className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>SELECT FILM ROLL / SUB-FOLDER:</span>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto scrollbar-none pb-2 pt-1 touch-pan-x -mx-1 px-1">
          {ALBUMS.map(album => {
            const isActive = activeAlbum === album.id;
            const count = album.id === 'all'
              ? items.length
              : items.filter(p => p.subCategory === album.id).length;

            return (
              <button
                key={album.id}
                type="button"
                onClick={() => handleSelectAlbum(album.id)}
                className={`relative group flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-200 flex-shrink-0 border select-none ${
                  isActive
                    ? 'bg-[#37192C] text-[#FFF3E5] border-[#37192C] shadow-[0_4px_12px_rgba(55,25,44,0.25)]'
                    : 'bg-[#FFF3E5] text-[#37192C] hover:bg-[#FFFFFF] border-[#D4BD99] hover:border-[#37192C]/40'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeAlbumPin"
                    className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shadow-sm flex-shrink-0"
                    transition={{ type: "spring", stiffness: 450, damping: 30 }}
                  />
                )}
                <span>{album.label}</span>
                <span className={`text-[9px] px-1.5 py-0.2 rounded font-mono ${
                  isActive ? 'bg-[#D4AF37] text-[#37192C]' : 'bg-[#37192C]/10 text-[#37192C]'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* =========================================================
          PHOTO PRINTS MASONRY / STAGGERED CONTACT SHEET GRID
          ========================================================= */}
      <motion.div
        layout
        className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
      >
        <AnimatePresence>
          {filteredPhotos.map((photo, idx) => {
            const tapeColors = ["gold", "plum", "kraft", "vanilla"];
            const tapeColor = tapeColors[idx % tapeColors.length];

            return (
              <motion.article
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 350, damping: 26 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                onClick={() => setSelectedPhoto(photo)}
                className="group relative bg-[#FFFFFF] p-2 sm:p-3 pb-3 sm:pb-4 rounded-[3px] border border-[#EAD7B5] shadow-[0_2px_8px_rgba(55,25,44,0.08)] hover:shadow-[0_12px_28px_rgba(55,25,44,0.18)] hover:border-[#37192C] transition-all cursor-pointer flex flex-col justify-between"
              >
                {/* Washi tape on alternating photos */}
                {idx % 3 === 0 && (
                  <WashiTape
                    color={tapeColor}
                    className="-top-2.5 right-3 w-12 sm:w-16"
                    angle={idx % 2 === 0 ? 3 : -3}
                  />
                )}

                {/* Film rebate roll badge */}
                <div className="flex justify-between items-center mb-1.5 sm:mb-2 px-0.5">
                  <span className="font-mono text-[8px] sm:text-[9px] font-bold text-[#6B5B65] uppercase tracking-wider">
                    {photo.roll}
                  </span>
                  <span className="font-mono text-[8px] sm:text-[9px] text-[#B33939] font-bold uppercase truncate max-w-[90px] sm:max-w-[120px]">
                    {photo.subCategoryLabel}
                  </span>
                </div>

                {/* Photo Print Viewport */}
                <div className={`relative w-full ${photo.aspect || 'aspect-[4/5]'} bg-[#1C0E17] rounded-[1px] overflow-hidden shadow-inner mb-2`}>
                  <ArchivalImage
                    src={photo.image}
                    alt={photo.title}
                    fallbackType="photography"
                    title={photo.title}
                    className="w-full h-full"
                  />

                  {/* Darkroom Contact Sheet Film Frame Numbers */}
                  <div className="absolute top-1 left-1 font-mono text-[7px] sm:text-[8px] text-[#D4AF37] bg-black/60 px-1 py-0.2 rounded backdrop-blur-[1px] pointer-events-none opacity-80">
                    EXP 0{idx + 1}
                  </div>

                  {/* Hover Overlay with Metadata Tag */}
                  <div className="absolute inset-0 bg-[#24101D]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-between p-2.5 sm:p-3 text-[#FFF3E5]">
                    <div className="flex justify-end">
                      <span className="w-6 h-6 rounded-full bg-[#FFFFFF]/20 backdrop-blur-md flex items-center justify-center text-[#FFF3E5]">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </span>
                    </div>

                    <div>
                      <span className="font-mono text-[8px] sm:text-[9px] text-[#D4AF37] block mb-0.5">
                        {photo.camera}
                      </span>
                      <p className="font-display text-xs sm:text-sm font-bold leading-tight line-clamp-2">
                        {photo.title}
                      </p>
                      <span className="font-mono text-[8px] text-[#EAD7B5] block mt-1">
                        📍 {photo.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Photo footer label */}
                <div className="pt-1 border-t border-dashed border-[#EAD7B5]/80 px-0.5">
                  <h4 className="font-display text-xs sm:text-sm font-bold text-[#37192C] leading-snug truncate">
                    {photo.title}
                  </h4>
                  <div className="flex justify-between items-center mt-0.5 text-[8px] sm:text-[9px] font-mono text-[#6B5B65]">
                    <span className="truncate max-w-[100px] sm:max-w-[130px]">{photo.camera.split('//')[0]}</span>
                    <span>{photo.year}</span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* =========================================================
          LIGHTBOX / FULL-SCREEN PHOTO INSPECTION MODAL
          ========================================================= */}
      <AnimatePresence>
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-50 bg-[#160A13]/90 backdrop-blur-md flex items-center justify-center p-2.5 sm:p-4 md:p-6"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="relative bg-[#200E1B] text-[#FFF3E5] rounded-xl border border-[#D4AF37]/30 shadow-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto flex flex-col p-4 sm:p-6 md:p-8"
              onClick={e => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 rounded-full bg-[#37192C] border border-[#D4AF37]/40 flex items-center justify-center font-mono font-bold text-xs sm:text-sm text-[#FFF3E5] hover:bg-[#D4AF37] hover:text-[#37192C] transition-colors z-30"
                aria-label="Close photo inspection"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Lightbox Header with Roll Metadata */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pr-10">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[9px] sm:text-xs font-bold text-[#37192C] bg-[#D4AF37] px-2 py-0.5 rounded">
                    {selectedPhoto.roll}
                  </span>
                  <span className="font-mono text-[10px] sm:text-xs text-[#EAD7B5]">
                    {selectedPhoto.subCategoryLabel.toUpperCase()}
                  </span>
                </div>
                <RubberStamp text="DARKROOM SPECIMEN" variant="gold" angle={-2} className="text-[8px] sm:text-[9px] py-0.5 px-2" />
              </div>

              {/* Main Photo Display Frame */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-[#120710] rounded-lg overflow-hidden mb-4 sm:mb-6 shadow-2xl border border-white/10 flex items-center justify-center">
                <ArchivalImage
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  fallbackType="photography"
                  title={selectedPhoto.title}
                  className="w-full h-full object-contain"
                />

                {/* Left / Right Carousel Controls */}
                {currentIdx > 0 && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPhoto(filteredPhotos[currentIdx - 1]);
                    }}
                    className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#1F0D19]/80 border border-[#D4AF37]/40 flex items-center justify-center text-[#FFF3E5] hover:bg-[#D4AF37] hover:text-[#37192C] transition-all shadow-lg"
                    aria-label="Previous photo"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                )}

                {currentIdx < filteredPhotos.length - 1 && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPhoto(filteredPhotos[currentIdx + 1]);
                    }}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#1F0D19]/80 border border-[#D4AF37]/40 flex items-center justify-center text-[#FFF3E5] hover:bg-[#D4AF37] hover:text-[#37192C] transition-all shadow-lg"
                    aria-label="Next photo"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                )}
              </div>

              {/* Title & Series Description */}
              <div className="mb-4">
                <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold text-[#FFF3E5]">
                  {selectedPhoto.title}
                </h3>
                <p className="font-editorial text-sm sm:text-base italic text-[#D4AF37] mt-0.5">
                  Series: {selectedPhoto.seriesTitle} ({selectedPhoto.year})
                </p>
                <p className="text-xs sm:text-sm text-[#EAD7B5]/85 leading-relaxed mt-2">
                  {selectedPhoto.description}
                </p>
              </div>

              {/* EXIF Data Grid */}
              <div className="bg-[#2D1626] rounded-lg p-3 sm:p-4 border border-[#D4AF37]/20 mb-4">
                <div className="font-mono text-[9px] sm:text-[10px] text-[#D4AF37] font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Camera className="w-3.5 h-3.5" />
                  <span>PHOTOGRAPHER’S EXIF DATA:</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
                  <div className="bg-[#1A0B16] p-2 rounded border border-white/5">
                    <span className="text-[9px] text-[#6B5B65] block uppercase">Camera & Lens</span>
                    <span className="text-[#FFF3E5] font-semibold text-[11px] truncate block" title={selectedPhoto.camera}>
                      {selectedPhoto.camera}
                    </span>
                  </div>
                  <div className="bg-[#1A0B16] p-2 rounded border border-white/5">
                    <span className="text-[9px] text-[#6B5B65] block uppercase">Exposure Specs</span>
                    <span className="text-[#FFF3E5] font-semibold text-[11px]">
                      {selectedPhoto.exif?.shutter} • {selectedPhoto.exif?.aperture} • ISO {selectedPhoto.exif?.iso}
                    </span>
                  </div>
                  <div className="bg-[#1A0B16] p-2 rounded border border-white/5">
                    <span className="text-[9px] text-[#6B5B65] block uppercase">Location</span>
                    <span className="text-[#FFF3E5] font-semibold text-[11px] truncate block" title={selectedPhoto.location}>
                      {selectedPhoto.location}
                    </span>
                  </div>
                  <div className="bg-[#1A0B16] p-2 rounded border border-white/5">
                    <span className="text-[9px] text-[#6B5B65] block uppercase">Film Stock / Profile</span>
                    <span className="text-[#FFF3E5] font-semibold text-[11px]">
                      Archival Fine Art Grade
                    </span>
                  </div>
                </div>
              </div>

              {/* Photo Tags */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-white/10">
                <div className="flex flex-wrap gap-1.5">
                  {selectedPhoto.tags?.map((tag, i) => (
                    <span
                      key={i}
                      className="font-mono text-[9px] sm:text-[10px] px-2 py-0.5 rounded bg-[#FFF3E5]/10 text-[#EAD7B5] border border-white/10"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <span className="font-mono text-[10px] text-[#6B5B65]">
                  Photo {currentIdx + 1} of {filteredPhotos.length}
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
