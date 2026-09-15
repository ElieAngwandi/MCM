import Image from 'next/image';
import { getAssetPath } from '@/lib/base-path';
import {
  ArrowRight,
  ShieldCheck,
  Building2,
  Route,
  Waves,
  Sparkles,
  Zap,
  Droplets,
  HardHat,
  Award,
} from 'lucide-react';

const stats = [
  { value: '150+', label: 'Chantiers Réalisés', detail: 'Projets publics & privés livrés' },
  { value: '12+', label: "Années d'Expertise", detail: 'Ingénierie & exécution terrain' },
  { value: '99.2%', label: 'Conformité & Sécurité', detail: 'Normes HSE strictes appliquées' },
  { value: '24/7', label: 'Intervention d’Urgence', detail: 'Maintenance & permanence technique' },
];

const quickExpertise = [
  { label: 'Bâtiment & Génie Civil', icon: Building2 },
  { label: 'Routes & Voirie Urbaine', icon: Route },
  { label: 'Caniveaux & Drainage', icon: Waves },
  { label: 'Énergie & Électricité', icon: Zap },
  { label: 'Plomberie & Réseaux', icon: Droplets },
  { label: 'Assainissement & Cleaning', icon: Sparkles },
];

export function HeroSection() {
  return (
    <section
      id="accueil"
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-32 lg:pt-40 pb-16 overflow-hidden bg-[#080E18]"
    >
      {/* Background Image with Engineering Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={getAssetPath('/mcm-infrastructure-hero.png')}
          alt="Équipe technique MCM SARL sur un chantier d'infrastructures et de génie civil"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-35 scale-105 transition-transform duration-1000"
        />
        {/* Gradients to blend image cleanly into background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080E18] via-[#080E18]/85 to-[#080E18]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080E18] via-[#080E18]/60 to-transparent" />
        <div className="absolute inset-0 tech-grid opacity-30" />
        
        {/* Subtle glowing radial gradient */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="page-shell relative z-10 my-auto py-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-8 space-y-7">
            {/* Accreditation Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 border border-amber-500/30 text-xs font-semibold text-amber-400 backdrop-blur-md shadow-lg">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
              </span>
              <span className="tracking-wide uppercase text-[11px]">Entreprise Agréée BTP · Infrastructures · Maintenance</span>
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-display leading-[1.05] tracking-tight text-white">
              Donner forme aux <br />
              <span className="gradient-text-amber">ouvrages durables</span> <br />
              qui font avancer la nation.
            </h1>

            {/* Subtitle */}
            <p className="max-w-2xl text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              <strong className="text-white font-semibold">MCM SARL</strong> mobilise une ingénierie de pointe
              et des équipes de terrain qualifiées pour concevoir, construire, réhabiliter et entretenir les
              infrastructures stratégiques des particuliers, entreprises et institutions en RDC.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm tracking-wide shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Démarrer un projet avec MCM</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#realisations"
                className="inline-flex items-center gap-2.5 px-6 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800/90 text-slate-200 hover:text-white font-semibold text-sm border border-white/10 hover:border-amber-500/40 backdrop-blur-md transition-all duration-300"
              >
                <span>Explorer nos réalisations</span>
              </a>
            </div>

            {/* Trust Micro-Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <HardHat className="w-4 h-4 text-amber-500" />
                <span>Normes HSE & Sécurité renforcée</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-500" />
                <span>Assurance décennale & Suivi technique</span>
              </div>
            </div>
          </div>

          {/* Right Floating Technical Highlight Card */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="glass-panel p-6 rounded-2xl border border-white/10 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="font-mono text-xs text-amber-400 font-semibold tracking-wider">
                  MCM // EXCELLENCE TERRAIN
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/15 text-amber-400 border border-amber-500/30">
                  RDC
                </span>
              </div>

              <div className="my-5 space-y-4">
                <p className="text-sm text-slate-200 font-medium leading-relaxed">
                  « Une réponse technique unifiée pour chaque étape : de l&apos;étude géotechnique initiale jusqu&apos;à
                  la maintenance préventive longue durée. »
                </p>

                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 space-y-2 text-xs">
                  <div className="flex justify-between text-slate-400">
                    <span>Mobilisation équipes</span>
                    <span className="text-emerald-400 font-semibold">Sous 24h</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div className="w-[94%] h-full bg-amber-500 rounded-full" />
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span>Mining · Cleaning · Maintenance</span>
                <span className="text-amber-400 font-mono font-bold">2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Bottom Bar: Interactive Metrics & Quick Expertise Ticker */}
      <div className="relative z-10 border-t border-white/10 bg-[#050912]/80 backdrop-blur-xl">
        <div className="page-shell py-6">
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 pb-6 border-b border-white/10">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col space-y-1">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-white tracking-tight">
                  <span className="text-amber-500">{stat.value.charAt(0)}</span>
                  {stat.value.slice(1)}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-200">
                  {stat.label}
                </span>
                <span className="text-[11px] text-slate-400 hidden sm:block">
                  {stat.detail}
                </span>
              </div>
            ))}
          </div>

          {/* Quick Expertise Bar */}
          <div className="pt-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <span className="text-xs uppercase tracking-widest font-mono text-slate-400 font-bold whitespace-nowrap">
              Pôles d&apos;intervention clés :
            </span>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {quickExpertise.map(({ label, icon: Icon }) => (
                <a
                  key={label}
                  href="#expertises"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-amber-500/40 text-xs text-slate-300 hover:text-white transition-all duration-200"
                >
                  <Icon className="w-3.5 h-3.5 text-amber-400" />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
