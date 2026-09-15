import Image from 'next/image';
import { getAssetPath } from '@/lib/base-path';
import {
  ArrowUp,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
} from 'lucide-react';

export function SiteFooter() {
  return (
    <footer className="bg-[#050911] text-slate-400 text-xs border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle tech background */}
      <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />

      <div className="page-shell relative z-10 space-y-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Company presentation */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#accueil" className="inline-flex items-center gap-3 group">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white p-1 ring-1 ring-white/20">
                <Image
                  src={getAssetPath('/logo-mcm.jpeg')}
                  alt="Logo MCM SARL"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-xl tracking-wider text-white">
                  MCM <span className="text-amber-500">SARL</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                  Mining · Cleaning · Maintenance
                </span>
              </div>
            </a>

            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Entreprise multisectorielle d’ingénierie, de BTP, de voirie, d’assainissement
              et de maintenance industrielle au service du développement durable de la RDC.
            </p>

            <div className="pt-2 flex items-center gap-2 text-slate-400 text-xs">
              <ShieldCheck className="w-4 h-4 text-amber-500" />
              <span>Agrément BTP & Génie Civil · Conforme aux normes HSE</span>
            </div>
          </div>

          {/* Column 1: Expertises BTP & Voirie */}
          <div className="lg:col-span-3 space-y-4">
            <span className="font-mono text-xs font-bold text-white uppercase tracking-widest block">
              Infrastructures & BTP
            </span>
            <ul className="space-y-2.5">
              <li>
                <a href="#expertises" className="hover:text-amber-400 transition-colors">
                  Construction neuve & Bâtiments
                </a>
              </li>
              <li>
                <a href="#expertises" className="hover:text-amber-400 transition-colors">
                  Rénovation & Gros œuvre
                </a>
              </li>
              <li>
                <a href="#expertises" className="hover:text-amber-400 transition-colors">
                  Routes & Voirie urbaine
                </a>
              </li>
              <li>
                <a href="#expertises" className="hover:text-amber-400 transition-colors">
                  Caniveaux & Drainage pluvial
                </a>
              </li>
              <li>
                <a href="#expertises" className="hover:text-amber-400 transition-colors">
                  Génie civil & Études de sol
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Réseaux & Maintenance */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-mono text-xs font-bold text-white uppercase tracking-widest block">
              Services Techniques
            </span>
            <ul className="space-y-2.5">
              <li>
                <a href="#expertises" className="hover:text-amber-400 transition-colors">
                  Plomberie & Réseaux d&apos;eau
                </a>
              </li>
              <li>
                <a href="#expertises" className="hover:text-amber-400 transition-colors">
                  Électricité MT/BT & Solaire
                </a>
              </li>
              <li>
                <a href="#expertises" className="hover:text-amber-400 transition-colors">
                  Cleaning & Assainissement
                </a>
              </li>
              <li>
                <a href="#expertises" className="hover:text-amber-400 transition-colors">
                  Maintenance industrielle
                </a>
              </li>
              <li>
                <a href="#realisations" className="hover:text-amber-400 transition-colors">
                  Portfolio des Chantiers
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contacts Rapides */}
          <div className="lg:col-span-3 space-y-4">
            <span className="font-mono text-xs font-bold text-white uppercase tracking-widest block">
              Siège & Contact
            </span>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>Kinshasa, République Démocratique du Congo</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href="tel:+243810000000" className="hover:text-amber-400 transition-colors">
                  +243 (0) 81 000 0000
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a href="mailto:contact@mcm-sarl.com" className="hover:text-amber-400 transition-colors">
                  contact@mcm-sarl.com
                </a>
              </div>
            </div>

            <div className="pt-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md transition-all"
              >
                <span>Demande de devis</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} MCM SARL. Tous droits réservés.</span>
            <span>·</span>
            <span>Mining · Cleaning · Maintenance</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-slate-400">Professionnalisme · Fiabilité · Qualité</span>
            <a
              href="#accueil"
              className="p-2 rounded-lg bg-white/5 hover:bg-amber-500 hover:text-slate-950 text-slate-300 transition-all"
              aria-label="Retour en haut de page"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
