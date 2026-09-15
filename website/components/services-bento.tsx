'use client';

import { useState } from 'react';
import {
  Building2,
  Route,
  Waves,
  Droplets,
  Zap,
  Sparkles,
  DraftingCompass,
  ArrowUpRight,
  CheckCircle,
} from 'lucide-react';

const categories = [
  { id: 'all', label: 'Toutes les Expertises' },
  { id: 'btp', label: 'BTP & Gros Œuvre' },
  { id: 'infra', label: 'Voirie & Assainissement' },
  { id: 'energie', label: 'Énergie & Réseaux' },
  { id: 'maint', label: 'Maintenance & Cleaning' },
];

const allServices = [
  {
    id: 'construction',
    number: '01',
    category: 'btp',
    title: 'Construction & Rénovation',
    subtitle: 'Bâtiments résidentiels, tertiaires et industriels',
    description:
      'Prise en charge intégrale : terrassement, fondations, gros œuvre, maçonnerie, toitures et finitions haut de gamme pour chantiers neufs ou réhabilitations complètes.',
    icon: Building2,
    deliverables: [
      'Fondations & béton armé',
      'Charpente & étanchéité',
      'Second œuvre & carrelage',
      'Finitions d’architecture',
    ],
    featured: true,
    colSpan: 'lg:col-span-8',
    gradient: 'from-amber-500/15 via-slate-900/60 to-slate-900/90',
  },
  {
    id: 'routes',
    number: '02',
    category: 'infra',
    title: 'Routes & Infrastructures',
    subtitle: 'Aménagement des voies & désenclavement',
    description:
      'Terrassement lourd, stabilisation de sols, pose d’enrobé bitumineux, pavage urbain et réfection de pistes d’accès pour zones industrielles et collectivités.',
    icon: Route,
    deliverables: [
      'Terrassement & nivellement',
      'Revêtement bitumineux',
      'Pavage et bordures',
      'Signalisation routière',
    ],
    featured: false,
    colSpan: 'lg:col-span-4',
    gradient: 'from-slate-900/90 to-slate-950',
  },
  {
    id: 'drainage',
    number: '03',
    category: 'infra',
    title: 'Caniveaux & Drainage Pluvial',
    subtitle: 'Gestion durable des eaux & lutte anti-érosive',
    description:
      'Conception et coulage de caniveaux en béton armé, dalots de franchissement, collecteurs principaux et fossés de drainage pour protéger durablement les sols et les voiries.',
    icon: Waves,
    deliverables: [
      'Caniveaux trapézoïdaux & rectangulaires',
      'Dalots & buses de franchissement',
      'Collecteurs à ciel ouvert ou fermés',
      'Curage & entretien préventif',
    ],
    featured: false,
    colSpan: 'lg:col-span-4',
    gradient: 'from-slate-900/90 to-slate-950',
  },
  {
    id: 'plomberie',
    number: '04',
    category: 'energie',
    title: 'Plomberie & Fluides Sanitaires',
    subtitle: 'Réseaux hydrauliques & alimentation en eau',
    description:
      'Installation de réseaux d’adduction d’eau potable, forages avec châteaux d’eau, tuyauteries industrielles, évacuation des eaux usées et stations de pompage.',
    icon: Droplets,
    deliverables: [
      'Adduction d’eau potable',
      'Réseaux sanitaires complets',
      'Forages & motopompes solaires',
      'Tuyauteries en PEHD & cuivre',
    ],
    featured: false,
    colSpan: 'lg:col-span-4',
    gradient: 'from-slate-900/90 to-slate-950',
  },
  {
    id: 'electricite',
    number: '05',
    category: 'energie',
    title: 'Travaux d’Électricité & Solaire',
    subtitle: 'Distribution MT/BT & solutions photovoltaïques',
    description:
      'Étude et pose de tableaux de distribution, colonnes montantes, raccordement MT/BT, groupes électrogènes de secours, éclairage public et centrales solaires autonomes.',
    icon: Zap,
    deliverables: [
      'Armoires & tableaux de commande',
      'Éclairage public LED & candélabres',
      'Centrales solaires avec stockage',
      'Postes de transformation & câblage',
    ],
    featured: false,
    colSpan: 'lg:col-span-4',
    gradient: 'from-slate-900/90 to-slate-950',
  },
  {
    id: 'cleaning',
    number: '06',
    category: 'maint',
    title: 'Cleaning & Assainissement Pro',
    subtitle: 'Entretien de sites industriels, miniers & tertiaires',
    description:
      'Nettoyage de fin de chantier, décapage haute pression, assainissement de bases-vie et sites miniers, désinfection certifiée et gestion responsable des déchets industriels.',
    icon: Sparkles,
    deliverables: [
      'Nettoyage lourd de fin de chantier',
      'Maintenance hygiène de sites miniers',
      'Désinfection & traitement des sols',
      'Lavage haute pression & dégraissage',
    ],
    featured: false,
    colSpan: 'lg:col-span-6',
    gradient: 'from-slate-900/90 to-slate-950',
  },
  {
    id: 'genie-civil',
    number: '07',
    category: 'btp',
    title: 'Génie Civil & Études d’Ingénierie',
    subtitle: 'Études structurales, topographie & supervision HSE',
    description:
      'Bureaux d’études techniques, levés topographiques haute définition, analyses de sols, dimensionnement d’ouvrages complexes en béton armé et maîtrise d’œuvre sur chantier.',
    icon: DraftingCompass,
    deliverables: [
      'Études géotechniques & calculs BA',
      'Levés topographiques par drone/GPS',
      'Plans d’exécution & modélisation',
      'Contrôle qualité & audits HSE',
    ],
    featured: true,
    colSpan: 'lg:col-span-6',
    gradient: 'from-amber-500/10 via-slate-900/80 to-slate-950',
  },
];

export function ServicesBento() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices =
    activeCategory === 'all'
      ? allServices
      : allServices.filter((s) => s.category === activeCategory);

  return (
    <section id="expertises" className="py-24 lg:py-32 relative bg-[#080E18]">
      {/* Background decorations */}
      <div className="absolute inset-0 tech-grid opacity-15 pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="page-shell relative z-10 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-amber-500/10 border border-amber-500/20 text-xs font-mono font-semibold text-amber-400">
              <span>NOS DOMAINES D&apos;INTERVENTION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight">
              Un savoir-faire complet, <br />
              <span className="gradient-text-amber">du bâti aux grands réseaux.</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Sept pôles spécialisés et complémentaires pour concevoir, bâtir, réhabiliter
              et entretenir durablement vos installations avec une chaîne de responsabilité unique.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors shrink-0"
          >
            <span>Consulter notre équipe d&apos;ingénieurs</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-xl bg-slate-900/80 border border-white/10 w-fit">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`p-7 sm:p-8 rounded-2xl border border-white/10 hover:border-amber-500/40 bg-gradient-to-br ${service.gradient} transition-all duration-300 flex flex-col justify-between group shadow-xl ${
                  activeCategory === 'all' ? service.colSpan : 'lg:col-span-6'
                }`}
              >
                <div className="space-y-6">
                  {/* Card Top: Number & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-amber-400/80 tracking-widest px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/20">
                      SERVICE // {service.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-white/10 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-amber-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-amber-400/90 font-mono">
                      {service.subtitle}
                    </p>
                    <p className="text-sm text-slate-300 leading-relaxed pt-1">
                      {service.description}
                    </p>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="pt-4 border-t border-white/10">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-2.5">
                      Livrables & Capacités :
                    </span>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {service.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono">Intervention RDC</span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 group-hover:text-amber-300 group-hover:translate-x-0.5 transition-all"
                  >
                    <span>Échanger sur ce besoin</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
