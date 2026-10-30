import React from 'react';
import { motion } from 'framer-motion';

export function FolderTabs({ tabs, activeTab, onSelectTab }) {
  return (
    <nav
      className="flex items-end gap-1.5 px-3 relative z-10 overflow-x-auto scrollbar-none"
      role="tablist"
      aria-label="Archive Folder Drawers"
    >
      {tabs.map((tab, idx) => {
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => onSelectTab(tab.id)}
            role="tab"
            aria-selected={isActive}
            aria-controls={`panel-${tab.id}`}
            className={`group relative flex items-center gap-2 px-4 py-2.5 rounded-t-xl font-mono text-xs font-bold tracking-wider uppercase whitespace-nowrap transition-colors duration-200 focus:outline-none flex-shrink-0 border-t border-l border-r border-[#37192C]/15 ${
              isActive
                ? 'bg-[#FDFBF7] text-[#37192C] z-20 shadow-[-2px_-4px_12px_rgba(55,25,44,0.12)]'
                : 'bg-[#EAD7B5] hover:bg-[#FFF3E5] text-[#37192C]/80 z-0'
            }`}
          >
            {/* Active tab spring elevation indicator */}
            {isActive && (
              <motion.div
                layoutId="activeTabIndicator"
                className="absolute inset-0 rounded-t-xl border-t-2 border-[#37192C] pointer-events-none"
                transition={{ type: "spring", stiffness: 450, damping: 32 }}
              />
            )}

            {/* Brass pin accent on active tab */}
            {isActive && (
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shadow-[0_1px_2px_rgba(0,0,0,0.3)] mr-0.5" />
            )}

            <span className={`text-[10px] px-1.5 py-0.5 rounded ${isActive ? 'bg-[#37192C] text-[#FFF3E5]' : 'bg-[#37192C]/10 text-[#37192C]'}`}>
              {tab.num}
            </span>

            <span>{tab.label}</span>

            {/* Folder tab rounded shoulder cutouts (skeuomorphic) */}
            <span className="absolute -left-2 bottom-0 w-2 h-2 bg-transparent pointer-events-none" />
            <span className="absolute -right-2 bottom-0 w-2 h-2 bg-transparent pointer-events-none" />
          </button>
        );
      })}
    </nav>
  );
}

