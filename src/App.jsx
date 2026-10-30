import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sun, Moon, Instagram, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from './constants/projectsData';
import { FolderTabs } from './components/FolderTabs';
import { FolderSheet } from './components/FolderSheet';
import { AboutTab } from './components/tabs/AboutTab';
import { ProjectGalleryTab } from './components/tabs/ProjectGalleryTab';
import { ContactTab } from './components/tabs/ContactTab';
import { ArchivalImage } from './utils/vectorFallbacks';
import { soundEngine } from './utils/soundEngine';
import { useBackgroundAudio } from './utils/useBackgroundAudio';

export function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [isNightMode, setIsNightMode] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [isPolaroidModalOpen, setIsPolaroidModalOpen] = useState(false);

  // Background Piano Audio Hook
  const { isPlaying: isBgmPlaying, toggleBgm } = useBackgroundAudio();

  // Keyboard shortcut listener: 1-6 for tabs, ESC for modal, M for piano BGM
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['input', 'textarea'].includes(document.activeElement.tagName.toLowerCase())) {
        return;
      }

      if (e.key === 'Escape') {
        setIsPolaroidModalOpen(false);
      }

      if (e.key === 'm' || e.key === 'M') {
        const next = toggleBgm();
        showToast(next ? "🎵 Piano BGM: Playing" : "🔇 Piano BGM: Paused");
      }

      const num = parseInt(e.key, 10);
      if (!isNaN(num) && num >= 1 && num <= PORTFOLIO_DATA.tabs.length) {
        const target = PORTFOLIO_DATA.tabs[num - 1].id;
        handleTabChange(target);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggleBgm]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    soundEngine.playTabClick();
  };

  const handleToggleBgm = () => {
    const next = toggleBgm();
    showToast(next ? "🎵 Piano BGM: Playing" : "🔇 Piano BGM: Paused");
  };

  const toggleLamp = () => {
    setIsNightMode(prev => !prev);
    soundEngine.playClipSound();
    showToast(!isNightMode ? "💡 Studio Night Desk Lamp Glow" : "☀️ Natural Daylight Desk Restored");
  };

  const handlePlaySound = (type) => {
    if (type === 'stamp') soundEngine.playStampThud();
    else if (type === 'clip') soundEngine.playClipSound();
    else soundEngine.playPaperRustle();
  };

  return (
    <div className={`min-h-screen text-[#37192C] transition-colors duration-500 relative overflow-x-hidden w-full max-w-full ${
      isNightMode ? 'bg-[#1F0E1A]' : 'bg-[#2E1626]'
    }`}>
      {/* Background Desk Ambient Gradient & Subtle Desk Grid */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-40"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 15%, rgba(234, 215, 181, 0.2) 0%, transparent 65%),
            linear-gradient(135deg, rgba(55, 25, 44, 0.4) 0%, rgba(20, 8, 18, 0.8) 100%)
          `
        }}
      />

      {/* Warm Studio Lamp Glow (when toggled) */}
      <div
        className={`fixed inset-0 pointer-events-none z-0 transition-opacity duration-700 ${
          isNightMode ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: 'radial-gradient(circle at 80% 20%, rgba(255, 204, 136, 0.28) 0%, rgba(15, 5, 14, 0.8) 75%)'
        }}
      />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-2.5 sm:px-4 md:px-6 py-3 sm:py-5 md:py-8">

        {/* =========================================================
            DESK TOP BAR / ARCHIVAL CATALOG HEADER
            ========================================================= */}
        <header className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6 p-3 sm:p-4 md:px-6 bg-[#FFF3E5]/95 backdrop-blur-md rounded-xl border border-[#EAD7B5] shadow-[0_4px_16px_rgba(55,25,44,0.12)]">
          {/* Identity Info */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
            <div className="flex items-center gap-1.5 font-mono text-[9px] sm:text-[11px] font-bold text-[#FFF3E5] bg-[#37192C] px-2 py-1 sm:px-2.5 sm:py-1.5 rounded uppercase tracking-wider flex-shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
              <span className="hidden xs:inline">BINUS SEMARANG // DKV</span>
              <span className="xs:hidden">BINUS DKV</span>
            </div>
            <div className="min-w-0">
              <span className="font-mono text-[8px] sm:text-[10px] text-[#6B5B65] tracking-wider block truncate uppercase">
                DOSSIER // VALLERIE SHARON WIBOWO
              </span>
              <h1 className="font-display text-sm sm:text-base md:text-lg font-bold text-[#37192C] leading-tight truncate">
                Visual Communication Portfolio
              </h1>
            </div>
          </div>

          {/* Action Toolbar */}
          <div className="flex items-center justify-between sm:justify-end gap-1.5 sm:gap-2.5 pt-2 sm:pt-0 border-t border-[#EAD7B5]/60 sm:border-0">
            {/* Background Piano Audio Toggle Button */}
            <button
              type="button"
              onClick={handleToggleBgm}
              className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-md font-mono text-[10px] sm:text-xs font-semibold transition-all hover:-translate-y-0.5 shadow-sm select-none flex-shrink-0 ${
                isBgmPlaying
                  ? 'bg-[#37192C] text-[#FFF3E5] border border-[#37192C] shadow-[0_0_12px_rgba(55,25,44,0.35)]'
                  : 'bg-[#FDFBF7] hover:bg-[#FFFFFF] text-[#6B5B65] border border-[#D4BD99]'
              }`}
              title={isBgmPlaying ? "Pause Piano BGM (Press M)" : "Play Piano BGM (Press M)"}
            >
              {isBgmPlaying ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
                  <span>Piano BGM</span>
                  {/* Animated 3-bar mini equalizer indicator */}
                  <div className="flex items-end gap-[2px] h-3 w-2.5 ml-0.5 flex-shrink-0" aria-hidden="true">
                    <span className="w-[2px] bg-[#D4AF37] rounded-full animate-[pulse_0.6s_ease-in-out_infinite] h-2" />
                    <span className="w-[2px] bg-[#D4AF37] rounded-full animate-[pulse_0.4s_ease-in-out_infinite] h-3" />
                    <span className="w-[2px] bg-[#D4AF37] rounded-full animate-[pulse_0.7s_ease-in-out_infinite] h-1.5" />
                  </div>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-[#6B5B65] flex-shrink-0" />
                  <span>Piano BGM</span>
                </>
              )}
            </button>

            {/* Studio Lamp Toggle */}
            <button
              type="button"
              onClick={toggleLamp}
              className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 bg-[#FDFBF7] hover:bg-[#FFFFFF] border border-[#D4BD99] rounded-md font-mono text-[10px] sm:text-xs font-semibold text-[#37192C] transition-all hover:-translate-y-0.5 shadow-sm flex-shrink-0"
              title="Toggle Studio Desk Lamp Glow"
            >
              {isNightMode ? <Moon className="w-3.5 h-3.5 text-[#D4AF37]" /> : <Sun className="w-3.5 h-3.5 text-[#D86B43]" />}
              <span>{isNightMode ? 'Studio Glow' : 'Daylight'}</span>
            </button>

            {/* Instagram Link Button */}
            <a
              href={PORTFOLIO_DATA.profile.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1.5 bg-[#37192C] hover:bg-[#4D253F] text-[#FFF3E5] rounded-md font-mono text-[10px] sm:text-xs font-bold transition-all hover:-translate-y-0.5 shadow-sm flex-shrink-0"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>@{PORTFOLIO_DATA.profile.instagram}</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </header>

        {/* =========================================================
            MULTI-LAYER STAGGERED FOLDER BINDER SYSTEM
            ========================================================= */}
        <div className="relative w-full max-w-full">
          {/* Horizontal Folder Tabs */}
          <FolderTabs
            tabs={PORTFOLIO_DATA.tabs}
            activeTab={activeTab}
            onSelectTab={handleTabChange}
          />

          {/* Active Folder Interior Document Jacket */}
          <FolderSheet activeTab={activeTab}>
            {activeTab === 'about' && (
              <AboutTab
                profile={PORTFOLIO_DATA.profile}
                onOpenPolaroid={() => setIsPolaroidModalOpen(true)}
              />
            )}

            {activeTab === 'branding' && (
              <ProjectGalleryTab
                category="branding"
                items={PORTFOLIO_DATA.branding}
                onShowToast={showToast}
              />
            )}

            {activeTab === 'illustration' && (
              <ProjectGalleryTab
                category="illustration"
                items={PORTFOLIO_DATA.illustration}
                onShowToast={showToast}
              />
            )}

            {activeTab === 'editorial' && (
              <ProjectGalleryTab
                category="editorial"
                items={PORTFOLIO_DATA.editorial}
                onShowToast={showToast}
              />
            )}

            {activeTab === 'social' && (
              <ProjectGalleryTab
                category="social"
                items={PORTFOLIO_DATA.social.feed}
                socialData={PORTFOLIO_DATA.social}
                onShowToast={showToast}
              />
            )}

            {activeTab === 'contact' && (
              <ContactTab
                profile={PORTFOLIO_DATA.profile}
                onShowToast={showToast}
                onPlaySound={handlePlaySound}
              />
            )}
          </FolderSheet>
        </div>
      </div>

      {/* =========================================================
          POLAROID ZOOM MODAL
          ========================================================= */}
      {isPolaroidModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#24101D]/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4"
          onClick={() => setIsPolaroidModalOpen(false)}
        >
          <div
            className="relative bg-[#FFFFFF] p-4 sm:p-6 pb-6 sm:pb-8 rounded shadow-2xl max-w-xs sm:max-w-sm md:max-w-md w-full border border-[#EAD7B5] max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsPolaroidModalOpen(false)}
              className="absolute top-3 right-3 w-7 h-7 rounded-full bg-[#FFF3E5] border border-[#EAD7B5] flex items-center justify-center font-mono font-bold text-xs hover:bg-[#37192C] hover:text-[#FFF3E5] transition-colors z-20"
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="w-full aspect-[1/1.12] bg-[#1C0E17] rounded-[2px] overflow-hidden mb-3.5 shadow-inner">
              <ArchivalImage
                src={PORTFOLIO_DATA.profile.avatar}
                alt="Vallerie Sharon Wibowo Portrait"
                fallbackType="profile"
                className="w-full h-full"
              />
            </div>

            <p className="font-hand text-xl sm:text-2xl text-[#37192C] text-center">
              {PORTFOLIO_DATA.profile.polaroidCaption || "Vallerie Sharon Wibowo"}
            </p>
            <p className="font-mono text-[10px] sm:text-xs text-center text-[#6B5B65] mt-1">
              Visual Communication Student // BINUS University @ Semarang
            </p>

            <div className="mt-3.5 pt-3 border-t border-[#EAD7B5] flex justify-between items-center">
              <a
                href={PORTFOLIO_DATA.profile.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] sm:text-xs font-bold text-[#37192C] hover:text-[#B33939] inline-flex items-center gap-1"
              >
                <span>@{PORTFOLIO_DATA.profile.instagram}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <span className="font-mono text-[10px] text-[#D4AF37] font-bold">BINUS SEMARANG</span>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
          TOAST FEEDBACK ALERT
          ========================================================= */}
      {toastMessage && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-auto sm:right-6 z-50 bg-[#37192C] text-[#FFF3E5] font-mono text-[11px] sm:text-xs font-bold px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-lg border-l-4 border-[#D4AF37] shadow-2xl max-w-[92vw] sm:max-w-md w-auto text-center truncate">
          {toastMessage}
        </div>
      )}
    </div>
  );
}

export default App;
