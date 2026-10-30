import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function FolderSheet({ activeTab, children }) {
  return (
    <div className="relative bg-[#FDFBF7] rounded-xl sm:rounded-2xl rounded-tl-none shadow-[0_18px_50px_rgba(55,25,44,0.2),0_6px_16px_rgba(55,25,44,0.1)] border-2 border-[#EAD7B5] overflow-hidden min-h-[520px] sm:min-h-[640px] w-full max-w-full">
      {/* Folder spine left decorative binder strip & shadow */}
      <div className="absolute top-0 left-0 bottom-0 w-2.5 sm:w-3 bg-gradient-to-r from-[#37192C]/10 via-[#37192C]/3 to-transparent pointer-events-none z-10" />

      {/* Subtle archival graph paper grid pattern inside folder */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(55, 25, 44, 0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(55, 25, 44, 0.035) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
        aria-hidden="true"
      />

      {/* Animated content transition per tab */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{
            type: "spring",
            stiffness: 350,
            damping: 30,
            mass: 0.8
          }}
          className="relative z-10 p-3.5 sm:p-6 md:p-8 lg:p-10 w-full max-w-full overflow-hidden"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
