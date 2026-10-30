import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export function FolderTabs({ tabs, activeTab, onSelectTab }) {
  const tabsContainerRef = useRef(null);

  // Auto-scroll active tab into view on mobile
  useEffect(() => {
    if (!tabsContainerRef.current) return;
    const activeEl = tabsContainerRef.current.querySelector('[aria-selected="true"]');
    if (activeEl) {
      activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [activeTab]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Subtle edge fade indicator for horizontal scroll on mobile */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-3 z-30 bg-gradient-to-r from-[#2E1626]/40 to-transparent sm:hidden" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-3 z-30 bg-gradient-to-l from-[#2E1626]/40 to-transparent sm:hidden" />

      <nav
        ref={tabsContainerRef}
        className="flex items-end gap-1 sm:gap-1.5 px-1 sm:px-3 relative z-10 overflow-x-auto scroll-smooth touch-pan-x scrollbar-none pb-0 -mb-[1px] w-full max-w-full"
        style={{ WebkitOverflowScrolling: 'touch' }}
        role="tablist"
        aria-label="Archive Folder Drawers"
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onSelectTab(tab.id)}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              className={`group relative flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-t-lg sm:rounded-t-xl font-mono text-[10px] sm:text-xs font-bold tracking-wider uppercase whitespace-nowrap transition-colors duration-200 focus:outline-none flex-shrink-0 border-t border-l border-r border-[#37192C]/15 select-none ${
                isActive
                  ? 'bg-[#FDFBF7] text-[#37192C] z-20 shadow-[-2px_-4px_12px_rgba(55,25,44,0.12)]'
                  : 'bg-[#EAD7B5] hover:bg-[#FFF3E5] text-[#37192C]/80 z-0'
              }`}
            >
              {/* Active tab spring elevation indicator */}
              {isActive && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute inset-0 rounded-t-lg sm:rounded-t-xl border-t-2 border-[#37192C] pointer-events-none"
                  transition={{ type: "spring", stiffness: 450, damping: 32 }}
                />
              )}

              {/* Brass pin accent on active tab */}
              {isActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shadow-[0_1px_2px_rgba(0,0,0,0.3)] mr-0.5 flex-shrink-0" />
              )}

              <span className={`text-[9px] sm:text-[10px] px-1 sm:px-1.5 py-0.5 rounded font-mono ${isActive ? 'bg-[#37192C] text-[#FFF3E5]' : 'bg-[#37192C]/10 text-[#37192C]'}`}>
                {tab.num}
              </span>

              <span className="truncate">{tab.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
