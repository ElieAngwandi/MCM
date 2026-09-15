import {
  Users,
  Building,
  Landmark,
  ShieldCheck,
  Truck,
  DraftingCompass,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

const pillars = [
  {
    icon: DraftingCompass,
    title: 'Ingénierie & Rigueur Technique',
    description:
      'Chaque projet repose sur des études géotechniques rigoureuses, un dimensionnement structurel conforme aux normes et un encadrement permanent par des ingénieurs expérimentés.',
    stats: '100% conformité technique',
  },
  {
    icon: Truck,
    title: 'Parc Matériel & Flotte Dédiée',
    description:
      'Pelles mécaniques, niveleuses, compacteurs, outillage spécialisé et unités mobiles de nettoyage : nous maîtrisons notre chaîne logistique pour garantir la tenue des plannings.',
    stats: 'Autonomie opérationnelle',
  },
  {
    icon: ShieldCheck,
    title: 'Qualité, Sécurité & HSE',
    description:
      'Une politique stricte "Zéro Accident", le port des EPI obligatoire, le respect scrupuleux de l’environnement et la préservation de la biodiversité sur l’ensemble de nos chantiers.',
    stats: 'Standard international',
  },
];

const audiences = [
  {
    icon: Users,
    type: 'Particuliers & Bailleurs',
    subtitle: 'Villas, Immeubles résidentiels & Rénovation',
    points: [
      'Construction neuve du gros œuvre aux finitions',
      'Rénovation complète d’espaces existants',
      'Installations sanitaires & électricité sécurisée',
      'Suivi régulier et transparence budgétaire',
    ],
    action: 'Démarrer un projet résidentiel',
  },
  {
    icon: Building,
    type: 'Entreprises & Industries',
    subtitle: 'Bâtiments tertiaires, Usines & Sites miniers',
    points: [
      'Entrepôts logistiques & structures métalliques',
      'Réseaux de plomberie industrielle & groupes MT/BT',
      'Contrats annuels de facility management & cleaning',
      'Interventions d’urgence 24/7 sur installations',
    ],
    action: 'Collaborer avec nos équipes',
  },
  {
    icon: Landmark,
    type: 'Institutions & Pouvoirs Publics',
    subtitle: 'Infrastructures urbaines, Voirie & Assainissement',
    points: [
      'Aménagement et réhabilitation de routes & pistes',
      'Caniveaux en béton armé & collecteurs d’eau pluviale',
      'Assainissement urbain et désenclavement de quartiers',
      'Conformité stricte aux cahiers des charges étatiques',
    ],
    action: 'Consulter nos références publiques',
  },
];

export function AboutSection() {
  return (
    <section id="a-propos" className="py-24 lg:py-32 relative bg-[#0B1320] overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="page-shell relative z-10 space-y-20">
        {/* Section Heading */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-amber-500/10 border border-amber-500/20 text-xs font-mono font-semibold text-amber-400">
            <span>À PROPOS DE MCM SARL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
            Un partenaire d&apos;excellence,{' '}
            <span className="gradient-text-amber">plusieurs expertises</span>, une exigence absolue de résultat.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed pt-2">
            Née de la volonté d&apos;accompagner durablement le développement de la République Démocratique du Congo,{' '}
            <strong className="text-white">MCM SARL</strong> rassemble les métiers de l&apos;ingénierie, du BTP,
            de l&apos;assainissement et de la maintenance au sein d&apos;un écosystème coordonné et réactif.
          </p>
        </div>

        {/* 3 Pillars of Excellence */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="glass-panel p-8 rounded-2xl border border-white/10 hover:border-amber-500/30 transition-all duration-300 group relative flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-white group-hover:text-amber-400 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Standard MCM</span>
                  <span className="text-amber-400 font-semibold">{pillar.stats}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Target Audience Showcase */}
        <div className="space-y-8 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest font-mono text-amber-400 font-semibold">
                ACCOMPAGNEMENT SUR-MESURE
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white mt-1">
                Des solutions adaptées à chaque donneur d&apos;ordre
              </h3>
            </div>
            <p className="text-sm text-slate-400 max-w-md">
              Que vous soyez un particulier exigeant ou une institution publique gérant de grands travaux,
              nous appliquons la même rigueur opérationnelle.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {audiences.map((aud, i) => {
              const Icon = aud.icon;
              return (
                <div
                  key={i}
                  className="bg-slate-900/60 p-7 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold font-display text-white">{aud.type}</h4>
                        <p className="text-xs text-slate-400">{aud.subtitle}</p>
                      </div>
                    </div>

                    <ul className="space-y-2.5 pt-2">
                      {aud.points.map((pt, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center justify-between w-full pt-4 border-t border-white/10 text-xs font-bold text-amber-400 hover:text-amber-300 group"
                  >
                    <span>{aud.action}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
