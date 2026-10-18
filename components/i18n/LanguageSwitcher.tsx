'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useLocale } from './LocaleContext';

interface LanguageSwitcherProps {
  inline?: boolean;
}

export default function LanguageSwitcher({ inline = false }: LanguageSwitcherProps) {
  const { locale, toggleLocale, t } = useLocale();
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();

  // Hide floating switcher when viewing apps or embedded apps (they have inline switcher or full screen)
  if (!inline && pathname?.match(/^\/(vi\/)?(apps|app)(\/|$)/)) {
    return null;
  }

  const nextLocale = locale === 'en' ? 'vi' : 'en';
  const currentLabel = locale === 'en' ? 'EN' : 'VI';
  const targetLabel = locale === 'en' ? 'Tiếng Việt' : 'English';

  const wrapperClass = inline
    ? "relative select-none"
    : "fixed bottom-6 right-6 z-50 select-none";

  return (
    <div className={wrapperClass}>
      <motion.button
        onClick={toggleLocale}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.06, y: -2 }}
        whileTap={{ scale: 0.94 }}
        aria-label={t.switcher.ariaLabel}
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-black/75 hover:bg-black/90 backdrop-blur-xl border border-white/20 hover:border-blue-400/60 shadow-2xl transition-all duration-300 text-white"
        style={{
          boxShadow: '0 20px 40px -12px rgba(0,0,0,0.8), 0 0 25px -4px rgba(59, 130, 246, 0.3)',
        }}
      >
        {/* Glow ambient background effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/25 via-purple-500/25 to-pink-500/25 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm pointer-events-none" />

        {/* Globe icon with rotation animation */}
        <motion.div
          animate={{ rotate: isHovered ? 180 : 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="relative text-blue-400 group-hover:text-blue-300"
        >
          <Globe size={18} />
        </motion.div>

        {/* Current Language Badge */}
        <span className="relative text-sm font-semibold tracking-wider bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
          {currentLabel}
        </span>

        {/* Next Language Pill */}
        <div className="relative flex items-center justify-center px-1.5 py-0.5 rounded-md bg-white/10 text-[10px] font-bold text-gray-300 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 group-hover:text-white transition-all duration-300">
          {nextLocale.toUpperCase()}
        </div>

        {/* Floating Tooltip */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-full right-0 mb-3 px-3 py-1.5 rounded-xl bg-gray-900/95 backdrop-blur-md border border-white/10 text-xs font-medium text-gray-200 whitespace-nowrap shadow-xl pointer-events-none"
            >
              <span>{t.switcher.togglePrompt} ({targetLabel})</span>
              <div className="absolute top-full right-6 -mt-1 w-2 h-2 bg-gray-900 border-r border-b border-white/10 transform rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
