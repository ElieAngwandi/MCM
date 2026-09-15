'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { getAssetPath } from '@/lib/base-path';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Menu,
  X,
  ArrowRight,
} from 'lucide-react';

const navItems = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'À Propos', href: '#a-propos' },
  { label: 'Expertises', href: '#expertises' },
  { label: 'Réalisations', href: '#realisations' },
  { label: 'Méthode & HSE', href: '#methode' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Notification / Emergency Contact Bar */}
      <div className="hidden lg:block bg-[#050910] text-slate-400 text-xs border-b border-white/5 py-2.5 z-50 relative">
        <div className="page-shell flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              <span>Kinshasa, République Démocratique du Congo</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-amber-500" />
              <span>Lun - Sam : 7h30 - 18h00 | Astreinte Chantiers 24/7</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="mailto:contact@mcm-sarl.com"
              className="flex items-center gap-2 hover:text-amber-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-500" />
              <span>contact@mcm-sarl.com</span>
            </a>
            <a
              href="tel:+243810000000"
              className="flex items-center gap-2 text-amber-400 font-semibold hover:text-amber-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+243 (0) 81 000 0000</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`fixed top-0 lg:top-[37px] left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#080E18]/90 backdrop-blur-md shadow-2xl border-b border-white/10 py-3'
            : 'bg-gradient-to-b from-[#080E18]/90 via-[#080E18]/60 to-transparent py-5'
        }`}
      >
        <div className="page-shell flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#accueil" className="flex items-center gap-3.5 group" aria-label="MCM SARL Accueil">
            <div className="relative w-11 h-11 rounded-xl overflow-hidden bg-white p-1 ring-1 ring-white/20 shadow-lg group-hover:scale-105 transition-transform duration-300">
              <Image
                src={getAssetPath('/logo-mcm.jpeg')}
                alt="Logo MCM SARL"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-extrabold text-xl tracking-wider text-white">
                  MCM <span className="text-amber-500">SARL</span>
                </span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                Mining · Cleaning · Maintenance
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-white/10 backdrop-blur-md shadow-inner">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 rounded-full text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Header Action CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs tracking-wide shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Demander un devis</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-slate-800/80 border border-white/10 text-slate-200 hover:text-white hover:bg-slate-700 transition-colors"
            aria-label="Ouvrir le menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden bg-slate-950/90 backdrop-blur-xl flex flex-col transition-all duration-300"
          aria-label="Menu de navigation mobile"
        >
          <div className="p-5 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-white p-1">
                <Image src={getAssetPath('/logo-mcm.jpeg')} alt="Logo MCM" fill className="object-contain" />
              </div>
              <span className="font-display font-bold text-lg text-white">MCM SARL</span>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-white/5 text-slate-300 hover:text-white"
              aria-label="Fermer le menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3.5 rounded-xl text-base font-semibold text-slate-200 hover:text-amber-400 hover:bg-white/5 border border-transparent hover:border-white/5 transition-all"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="pt-8 border-t border-white/10 space-y-4">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/25"
              >
                <span>Demander un devis direct</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <div className="text-xs text-slate-400 space-y-2 pt-2">
                <p className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-amber-500" />
                  <span>Kinshasa, RDC</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-amber-500" />
                  <span>+243 (0) 81 000 0000</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
