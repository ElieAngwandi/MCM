'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';

export function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="p-3 rounded-full bg-slate-900/90 hover:bg-amber-500 text-slate-300 hover:text-slate-950 border border-white/10 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Remonter en haut de page"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* WhatsApp Quick Connect Floating Button */}
      <a
        href="https://wa.me/243810000000?text=Bonjour%20MCM%20SARL,%20je%20souhaite%20des%20informations%20pour%20des%20travaux."
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 p-3 sm:px-4 sm:py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-500/60 transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="Contacter MCM SARL sur WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-950 opacity-40" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-slate-950" />
        </span>
        <MessageCircle className="w-5 h-5" />
        <span className="hidden sm:inline text-xs tracking-wide">
          WhatsApp Direct
        </span>
      </a>
    </div>
  );
}
