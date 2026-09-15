import {
  Compass,
  FileCheck2,
  HardHat,
  Award,
  ShieldAlert,
  Clock,
  Sparkles,
  Users2,
} from 'lucide-react';

const steps = [
  {
    number: '01',
    phase: 'AUDIT & DIAGNOSTIC',
    title: 'Analyse Terrain & Topographie',
    description:
      'Étude de faisabilité approfondie : sondages de sol, relevés topographiques précis, analyse des contraintes hydrologiques et définition du cahier des charges avec le client.',
    icon: Compass,
  },
  {
    number: '02',
    phase: 'CONCEPTION TECHNIQUE',
    title: 'Ingénierie, Plans & Phasage',
    description:
      'Modélisation des ouvrages, notes de calcul de structures, établissement des plans d’exécution d’ingénierie et planification chronologique rigoureuse des approvisionnements.',
    icon: FileCheck2,
  },
  {
    number: '03',
    phase: 'EXÉCUTION DU CHANTIER',
    title: 'Déploiement, Matériel & HSE',
    description:
      'Mobilisation de la flotte d’engins lourds et des équipes d’artisans. Application intraitable de notre charte HSE "Zéro Accident" et contrôle systématique de la qualité des matériaux.',
    icon: HardHat,
  },
  {
    number: '04',
    phase: 'LIVRAISON & GARANTIE',
    title: 'Réception & Maintenance Continue',
    description:
      'Essais préalables, réception contradictoire des travaux, remise du dossier des ouvrages exécutés (DOE) et mise en place d’un contrat de suivi et de maintenance préventive.',
    icon: Award,
  },
];

const commitments = [
  {
    icon: ShieldAlert,
    title: 'Charte Sécurité HSE Intransigeante',
    text: 'Briefing quotidien de sécurité (Toolbox talk), port obligatoire des EPI et protocoles de prévention sur chaque site.',
  },
  {
    icon: Clock,
    title: 'Respect Strict des Échéances',
    text: 'Planification par jalons et reporting régulier au maître d’ouvrage pour assurer la livraison dans les temps.',
  },
  {
    icon: Sparkles,
    title: 'Matériaux Contrôlés & Certifiés',
    text: 'Essais de convenance des bétons, conformité des armatures et des revêtements aux standards d’ingénierie.',
  },
  {
    icon: Users2,
    title: 'Impact Économique Local',
    text: 'Recrutement et formation continue de techniciens et ouvriers congolais pour dynamiser les communautés.',
  },
];

export function MethodSection() {
  return (
    <section id="methode" className="py-24 lg:py-32 relative bg-[#080E18] overflow-hidden">
      {/* Background visual elements */}
      <div className="absolute inset-0 tech-dots opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="page-shell relative z-10 space-y-20">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-amber-500/10 border border-amber-500/20 text-xs font-mono font-semibold text-amber-400">
            <span>MÉTHODOLOGIE D’INGÉNIERIE & RIGUEUR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
            La maîtrise complète du projet, <br />
            <span className="gradient-text-amber">de l’analyse préalable à la durée.</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed pt-2">
            Notre approche méthodique élimine les aléas de chantier et garantit une exécution sans compromis sur la solidité,
            la conformité environnementale et la sécurité des hommes.
          </p>
        </div>

        {/* 4 Process Steps Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="glass-panel p-7 rounded-2xl border border-white/10 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group relative shadow-lg"
              >
                {/* Step Header */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="font-mono text-2xl font-black text-amber-500">
                      {step.number}
                    </span>
                    <div className="p-2 rounded-lg bg-white/5 text-slate-300 group-hover:text-amber-400 group-hover:bg-amber-500/10 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="text-[10px] font-mono tracking-widest text-amber-400/90 font-bold uppercase block">
                    {step.phase}
                  </span>

                  <h3 className="text-lg font-bold font-display text-white group-hover:text-amber-400 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Progress bar accent */}
                <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-2">
                  <div className="h-1 flex-1 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className="h-full bg-amber-500 rounded-full"
                      style={{ width: `${(idx + 1) * 25}%` }}
                    />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 font-semibold">
                    {(idx + 1) * 25}%
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* HSE and Quality Assurance Banner */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/95 to-slate-950 border border-amber-500/20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-widest">
                  ENGAGEMENT QUALITÉ & SÉCURITÉ
                </span>
                <h3 className="text-2xl font-bold font-display text-white mt-1">
                  Les 4 piliers de notre charte d’excellence
                </h3>
              </div>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30 w-fit">
                Standard HSE MCM
              </span>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {commitments.map((c, i) => {
                const Icon = c.icon;
                return (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center gap-2.5 text-amber-400 font-bold text-sm">
                      <Icon className="w-4 h-4 shrink-0" />
                      <span>{c.title}</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {c.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
