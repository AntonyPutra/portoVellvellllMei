import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Copy, Check, Eye, Heart, MessageCircle, BookOpen, Layers } from 'lucide-react';
import { WashiTape, RubberStamp, Paperclip } from '../SkeuomorphicElements';
import { ArchivalImage } from '../../utils/vectorFallbacks';

export function ProjectGalleryTab({ category, items, socialData, onShowToast }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentSpreadIdx, setCurrentSpreadIdx] = useState(0);
  const [copiedHex, setCopiedHex] = useState(null);

  const copyColor = (hex) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    if (onShowToast) onShowToast(`Color copied: ${hex}`);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <div>
      {/* Category Header */}
      <div className="flex flex-wrap justify-between items-end gap-4 pb-6 mb-8 border-b-2 border-dashed border-[#37192C]/15">
        <div>
          <div className="font-mono text-xs tracking-widest text-[#B33939] font-bold uppercase mb-1">
            RECORD CLASSIFICATION // {category.toUpperCase()}
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-[#37192C] tracking-tight capitalize">
            {category === 'branding' && 'Brand Identity & Packaging Architecture'}
            {category === 'illustration' && 'Artwork & Visual Scrapbook'}
            {category === 'editorial' && 'Editorial Design & Zine Spreads'}
            {category === 'social' && 'Social Media & Event Exhibition Curation'}
          </h2>
          <p className="font-editorial text-lg italic text-[#6B5B65] mt-1">
            {category === 'branding' && 'Holistic visual identities, packaging mockups, and typography systems.'}
            {category === 'illustration' && 'Risograph test prints, character designs, and nostalgic sticker sheets.'}
            {category === 'editorial' && 'French-fold zines, book jackets, and editorial type specimens.'}
            {category === 'social' && 'Campaign rollouts, event identities, and curated visual diary feeds.'}
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-[#37192C] bg-[#FFF3E5] px-3.5 py-2 rounded-md border border-[#EAD7B5]">
          <span className="font-bold">
            {category === 'social' ? '9 FEED POSTS + 1 CAMPAIGN' : `${items.length} ACTIVE CASE FILES`}
          </span>
          <span>•</span>
          <span>INSPECTION READY</span>
        </div>
      </div>

      {/* =========================================================
          BRANDING CATEGORY GRID
          ========================================================= */}
      {category === 'branding' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((brand, idx) => (
            <motion.article
              key={brand.id}
              whileHover={{ y: -6, rotate: -0.5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative bg-[#FFFFFF] rounded-xl border border-[#EAD7B5] p-6 shadow-[0_2px_8px_rgba(55,25,44,0.06)] hover:shadow-[0_16px_35px_rgba(55,25,44,0.14)] hover:border-[#37192C] transition-all flex flex-col cursor-pointer"
              onClick={() => setSelectedItem(brand)}
            >
              <WashiTape
                color={idx % 2 === 0 ? "gold" : "plum"}
                className={idx % 2 === 0 ? "-top-3 right-8 w-20" : "-top-3 left-8 w-20"}
                angle={idx % 2 === 0 ? 3 : -4}
              />

              <div className="flex justify-between items-center mb-3.5">
                <span className="font-mono text-xs font-bold text-[#37192C] bg-[#EAD7B5] px-2 py-0.5 rounded">
                  {brand.badge}
                </span>
                <span className="font-mono text-xs text-[#6B5B65]">{brand.year}</span>
              </div>

              {/* Mockup Preview Container */}
              <div className="w-full aspect-[16/10] bg-[#24131E] rounded-lg overflow-hidden mb-4 shadow-inner">
                <ArchivalImage
                  src={brand.image}
                  alt={brand.title}
                  fallbackType="branding"
                  title={brand.title}
                  className="w-full h-full"
                />
              </div>

              <div className="flex flex-col flex-1">
                <h3 className="font-display text-xl font-bold text-[#37192C] leading-tight">
                  {brand.title}
                </h3>
                <p className="font-editorial text-sm italic text-[#B33939] mb-2">{brand.category}</p>
                <p className="text-xs text-[#6B5B65] leading-relaxed line-clamp-3 mb-4 flex-1">
                  {brand.description}
                </p>

                {/* Color Swatches */}
                <div className="flex items-center gap-2 mb-4">
                  {brand.colors.map((c, i) => (
                    <span
                      key={i}
                      className="w-5 h-5 rounded-full border border-black/15 shadow-sm"
                      style={{ backgroundColor: c }}
                      title={`${brand.colorNames[i]}: ${c}`}
                    />
                  ))}
                </div>

                <div className="flex justify-between items-center pt-3 border-t border-dashed border-[#EAD7B5] mt-auto">
                  <span className="font-mono text-[10px] text-[#6B5B65]">
                    {brand.deliverables.slice(0, 2).join(' • ')}
                  </span>
                  <button
                    type="button"
                    className="font-mono text-xs font-bold text-[#37192C] bg-[#FFF3E5] hover:bg-[#37192C] hover:text-[#FFF3E5] px-3 py-1.5 rounded border border-[#D4BD99] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Inspect Case</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      )}

      {/* =========================================================
          ILLUSTRATION CATEGORY GRID (Scrapbook Layout)
          ========================================================= */}
      {category === 'illustration' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((art, idx) => {
            const rotations = [-1.5, 1.2, -2, 1.8, -1, 2];
            const rot = rotations[idx % rotations.length];

            return (
              <motion.article
                key={art.id}
                style={{ transform: `rotate(${rot}deg)` }}
                whileHover={{ rotate: 0, y: -8, scale: 1.02, zIndex: 10 }}
                transition={{ type: "spring", stiffness: 320, damping: 20 }}
                className="relative bg-[#FFFFFF] p-4 pb-5 rounded-[3px] border border-[#EAD7B5] shadow-[0_2px_8px_rgba(55,25,44,0.08)] hover:shadow-[0_16px_35px_rgba(55,25,44,0.16)] cursor-pointer"
                onClick={() => setSelectedItem(art)}
              >
                <WashiTape
                  color={art.tapeColor || "gold"}
                  className={idx % 2 === 0 ? "-top-3 left-4 w-16" : "-top-3 right-4 w-16"}
                  angle={idx % 2 === 0 ? -4 : 5}
                />

                <div className="w-full aspect-square bg-[#1C1019] rounded-[2px] overflow-hidden mb-3 shadow-inner">
                  <ArchivalImage
                    src={art.image}
                    alt={art.title}
                    fallbackType="generic"
                    title={art.title}
                    className="w-full h-full"
                  />
                </div>

                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-display text-base font-bold text-[#37192C] truncate">
                    {art.title}
                  </h3>
                  <span className="font-mono text-[9px] bg-[#FFF3E5] border border-[#EAD7B5] px-1.5 py-0.5 rounded text-[#37192C]">
                    {art.badge}
                  </span>
                </div>

                <p className="font-editorial text-xs italic text-[#6B5B65] mb-2">{art.medium}</p>
                <p className="font-hand text-base text-[#D86B43] leading-snug line-clamp-2">
                  “{art.description}”
                </p>
              </motion.article>
            );
          })}
        </div>
      )}

      {/* =========================================================
          EDITORIAL CATEGORY (Interactive Zine Viewer)
          ========================================================= */}
      {category === 'editorial' && (
        <div className="flex flex-col gap-8">
          {items.map((pub) => (
            <article key={pub.id} className="bg-[#FFFFFF] rounded-xl border border-[#EAD7B5] p-6 md:p-8 shadow-[0_2px_8px_rgba(55,25,44,0.06)] flex flex-col gap-6">
              <div className="flex flex-wrap justify-between items-start gap-4">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-extrabold text-[#37192C]">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-[#6B5B65] max-w-2xl mt-1 leading-relaxed">
                    {pub.description}
                  </p>
                </div>
                <div className="font-mono text-xs bg-[#FFF3E5] border border-[#EAD7B5] px-3 py-1.5 rounded text-[#37192C] font-semibold">
                  {pub.specs}
                </div>
              </div>

              {/* Spread Viewer Carousel */}
              {pub.spreads && pub.spreads.length > 0 && (
                <div className="bg-[#1C0F18] rounded-xl p-4 md:p-6 border border-[#EAD7B5] shadow-lg">
                  <div className="w-full aspect-[16/10] bg-[#2A1424] rounded-lg overflow-hidden shadow-inner relative">
                    <ArchivalImage
                      src={pub.spreads[currentSpreadIdx]?.image}
                      alt={pub.spreads[currentSpreadIdx]?.label}
                      fallbackType="generic"
                      title={pub.spreads[currentSpreadIdx]?.label}
                      className="w-full h-full"
                    />
                  </div>

                  {/* Spread Controls Bar */}
                  <div className="flex flex-wrap justify-between items-center gap-3 mt-4 pt-4 border-t border-[#FFF3E5]/10">
                    <div className="flex gap-2">
                      <button
                        type="button"
                        disabled={currentSpreadIdx === 0}
                        onClick={() => setCurrentSpreadIdx(prev => Math.max(0, prev - 1))}
                        className="px-3 py-1.5 bg-[#FFF3E5] text-[#37192C] disabled:opacity-40 rounded font-mono text-xs font-bold hover:bg-[#EAD7B5] transition-colors"
                      >
                        ← Prev Spread
                      </button>
                      <button
                        type="button"
                        disabled={currentSpreadIdx === pub.spreads.length - 1}
                        onClick={() => setCurrentSpreadIdx(prev => Math.min(pub.spreads.length - 1, prev + 1))}
                        className="px-3 py-1.5 bg-[#FFF3E5] text-[#37192C] disabled:opacity-40 rounded font-mono text-xs font-bold hover:bg-[#EAD7B5] transition-colors"
                      >
                        Next Spread →
                      </button>
                    </div>

                    <div className="flex gap-1.5 flex-wrap">
                      {pub.spreads.map((spread, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setCurrentSpreadIdx(idx)}
                          className={`px-2.5 py-1 rounded font-mono text-[10px] font-bold transition-all ${
                            currentSpreadIdx === idx
                              ? 'bg-[#D4AF37] text-[#37192C] shadow-sm'
                              : 'bg-[#FFF3E5]/20 text-[#FFF3E5] hover:bg-[#FFF3E5]/40'
                          }`}
                        >
                          {`0${idx + 1}`}
                        </button>
                      ))}
                    </div>

                    <div className="text-right">
                      <p className="font-mono text-xs font-bold text-[#FFF3E5]">
                        {pub.spreads[currentSpreadIdx]?.label}
                      </p>
                      <p className="font-editorial text-xs italic text-[#EAD7B5]">
                        “{pub.spreads[currentSpreadIdx]?.quote}”
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      )}

      {/* =========================================================
          SOCIAL MEDIA CATEGORY (Campaign + 9-Grid Simulator)
          ========================================================= */}
      {category === 'social' && socialData && (
        <div className="flex flex-col gap-8">
          {/* Showcase Campaign Feature Card */}
          <article className="bg-[#FFFFFF] rounded-xl border border-[#EAD7B5] p-6 md:p-8 shadow-[0_2px_8px_rgba(55,25,44,0.06)] grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 items-center">
            <div>
              <span className="font-mono text-xs font-bold text-[#B33939] uppercase tracking-wider">
                {socialData.campaign.badge}
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-extrabold text-[#37192C] mt-1 mb-3">
                {socialData.campaign.title}
              </h3>
              <p className="text-sm text-[#6B5B65] leading-relaxed mb-4">
                {socialData.campaign.concept}
              </p>
              <div className="font-mono text-xs text-[#37192C] bg-[#FFF3E5] p-3 rounded-md border-l-4 border-[#D4AF37]">
                {socialData.campaign.metrics}
              </div>
            </div>

            <div className="w-full aspect-square bg-[#180914] rounded-lg overflow-hidden shadow-md">
              <ArchivalImage
                src={socialData.campaign.image}
                alt={socialData.campaign.title}
                fallbackType="generic"
                title="METAMORPHOSIS POSTER"
                className="w-full h-full"
              />
            </div>
          </article>

          {/* Instagram 9-Grid Feed Simulator */}
          <section className="bg-[#FFFFFF] rounded-xl border border-[#EAD7B5] p-6 md:p-8 shadow-[0_2px_8px_rgba(55,25,44,0.06)]">
            <div className="flex flex-wrap justify-between items-center gap-4 pb-4 mb-6 border-b border-[#EAD7B5]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#37192C] border-2 border-[#D4AF37] flex items-center justify-center font-display font-bold text-lg text-[#FFF3E5]">
                  M
                </div>
                <div>
                  <h4 className="font-sans font-extrabold text-[#37192C] text-base leading-tight">
                    kyuu__rious
                  </h4>
                  <p className="font-mono text-xs text-[#6B5B65]">
                    Mei • DKV BINUS B28 • 9 Posts • 2,480 Followers
                  </p>
                </div>
              </div>

              <a
                href="https://www.instagram.com/kyuu__rious"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs font-bold px-4 py-2 bg-[#37192C] text-[#FFF3E5] hover:bg-[#4D253F] rounded-md transition-colors"
              >
                Follow @kyuu__rious ↗
              </a>
            </div>

            {/* 3x3 Instagram Feed Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {socialData.feed.map((post, idx) => (
                <div
                  key={post.id}
                  className="group relative aspect-square bg-[#24111E] rounded-md overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-all"
                  onClick={() => {
                    if (onShowToast) onShowToast(`Feed post: "${post.caption.substring(0, 45)}..."`);
                  }}
                >
                  <ArchivalImage
                    src={post.image}
                    alt={post.caption}
                    fallbackType="generic"
                    title={`FEED 0${idx + 1}`}
                    className="w-full h-full"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#37192C]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-center items-center p-4 text-center text-[#FFF3E5]">
                    <p className="text-xs line-clamp-3 mb-2">{post.caption}</p>
                    <div className="font-mono text-[11px] text-[#D4AF37] flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Heart className="w-3.5 h-3.5 fill-[#D4AF37]" /> {post.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="w-3.5 h-3.5 fill-[#D4AF37]" /> {post.comments}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}

      {/* =========================================================
          CASE STUDY / ARTWORK INSPECTION MODAL (Lightbox)
          ========================================================= */}
      <AnimatePresence>
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 bg-[#24101D]/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-6"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="relative bg-[#FDFBF7] rounded-xl border-2 border-[#EAD7B5] shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8"
              onClick={e => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#FFFFFF] border border-[#EAD7B5] flex items-center justify-center font-mono font-bold text-[#37192C] hover:bg-[#37192C] hover:text-[#FFF3E5] transition-colors"
                aria-label="Close modal"
              >
                ✕
              </button>

              <div className="font-mono text-xs font-bold text-[#FFF3E5] bg-[#37192C] px-2.5 py-1 rounded inline-block mb-3">
                {selectedItem.badge || "ARCHIVE SPECIMEN"}
              </div>

              <h3 className="font-display text-2xl md:text-3xl font-extrabold text-[#37192C]">
                {selectedItem.title}
              </h3>
              <p className="font-editorial text-base italic text-[#B33939] mb-4">
                {selectedItem.category || selectedItem.medium} {selectedItem.year ? `— ${selectedItem.year}` : ''}
              </p>

              {/* High-res Image / Vector View */}
              <div className="w-full aspect-[16/10] bg-[#1C0E17] rounded-lg overflow-hidden mb-6 shadow-md">
                <ArchivalImage
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fallbackType={category === 'branding' ? 'branding' : 'generic'}
                  title={selectedItem.title}
                  className="w-full h-full"
                />
              </div>

              {/* Case Rationale Details */}
              {selectedItem.challenge && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-[#FFF3E5] p-4 rounded-lg border border-[#EAD7B5]">
                    <h5 className="font-mono text-xs font-bold uppercase text-[#37192C] mb-1.5">
                      The Challenge
                    </h5>
                    <p className="text-xs text-[#37192C]/80 leading-relaxed">
                      {selectedItem.challenge}
                    </p>
                  </div>
                  <div className="bg-[#FFF3E5] p-4 rounded-lg border border-[#EAD7B5]">
                    <h5 className="font-mono text-xs font-bold uppercase text-[#37192C] mb-1.5">
                      Creative Solution
                    </h5>
                    <p className="text-xs text-[#37192C]/80 leading-relaxed">
                      {selectedItem.solution}
                    </p>
                  </div>
                </div>
              )}

              {/* Story / Journal for Artwork */}
              {selectedItem.story && (
                <div className="bg-[#FFF3E5] p-4 rounded-lg border border-[#EAD7B5] mb-6">
                  <h5 className="font-mono text-xs font-bold uppercase text-[#37192C] mb-1.5">
                    Artist’s Process Journal
                  </h5>
                  <p className="text-xs text-[#37192C]/80 leading-relaxed">
                    {selectedItem.story}
                  </p>
                </div>
              )}

              {/* Color System Chips with Copy Action */}
              {selectedItem.colors && (
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <h5 className="font-mono text-xs font-bold uppercase text-[#37192C]">
                      Color System Palette
                    </h5>
                    <span className="font-mono text-[10px] text-[#6B5B65]">CLICK TO COPY HEX</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.colors.map((c, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => copyColor(c)}
                        className="flex items-center gap-2 bg-[#FFFFFF] px-3 py-1.5 rounded-md border border-[#EAD7B5] hover:border-[#37192C] transition-all font-mono text-xs"
                      >
                        <span className="w-4 h-4 rounded-full border border-black/10" style={{ backgroundColor: c }} />
                        <span className="font-bold text-[#37192C]">{selectedItem.colorNames?.[i] || `Tone ${i+1}`}</span>
                        <span className="text-[#6B5B65] text-[11px]">{c}</span>
                        {copiedHex === c ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3 h-3 text-[#6B5B65]" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap justify-between items-center pt-4 border-t border-dashed border-[#EAD7B5] gap-3">
                <span className="font-mono text-xs text-[#6B5B65]">
                  {selectedItem.typography ? `Typography: ${selectedItem.typography}` : `Catalog ID: DKV-${selectedItem.id.toUpperCase()}`}
                </span>
                <RubberStamp text="ARCHIVE VERIFIED // B28" variant="gold" angle={-3} className="text-[10px]" />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
