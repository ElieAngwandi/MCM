'use client';

import { useState } from 'react';
import Image from 'next/image';
import { getAssetPath } from '@/lib/base-path';
import {
  MapPin,
  Calendar,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

const projectCategories = [
  { id: 'all', label: 'Toutes les Réalisations' },
  { id: 'infra', label: 'Voirie & Caniveaux' },
  { id: 'batiment', label: 'Bâtiments & Rénovation' },
  { id: 'energie', label: 'Énergie & Réseaux' },
  { id: 'maint', label: 'Maintenance & Industrie' },
];

const projects = [
  {
    id: 1,
    category: 'infra',
    title: 'Axe Routier Urbain & Caniveaux de Drainage',
    client: 'Collectivité & Partenaire Institutionnel',
    location: 'Kinshasa, RDC',
    duration: '8 Mois d’exécution',
    status: 'Livré · Réception Définitive',
    statusType: 'success',
    image: '/images/road-project.jpg',
    description:
      'Terrassement approfondi, stabilisation de plateforme, pose d’enrobé bitumineux dense et caniveaux latéraux trapézoïdaux en béton armé pour une évacuation durable des eaux pluviales.',
    specs: ['12.4 km traités', 'Béton dosé à 350 kg/m³', 'Signalisation horizontale & bordures'],
  },
  {
    id: 2,
    category: 'batiment',
    title: 'Complexe Tertiaire & Résidentiel de Standing',
    client: 'Investisseur Privé & Société Foncière',
    location: 'Kinshasa - Gombe',
    duration: '14 Mois',
    status: 'En cours · Finitions & Lots Techniques',
    statusType: 'in-progress',
    image: '/images/building-project.jpg',
    description:
      'Supervision complète du gros œuvre, coulage de dalles alvéolaires, pose de mur-rideau vitré haute performance acoustique et aménagement intérieur clé en main.',
    specs: ['Immeuble R+8', '1 400 m² de bureaux', 'Ascenseurs & climatisation centrale'],
  },
  {
    id: 3,
    category: 'infra',
    title: 'Grand Collecteur Hydraulique & Dalot d’Assainissement',
    client: 'Génie Urbain & Protection Environnementale',
    location: 'Zone Périurbaine, RDC',
    duration: '6 Mois',
    status: 'Livré · 100% Opérationnel',
    statusType: 'success',
    image: '/images/drainage-project.jpg',
    description:
      'Construction d’un collecteur à grand gabarit destiné à endiguer les crues et protéger les habitations riveraines contre les érosions dévastatrices pendant la saison des pluies.',
    specs: ['Section 2.5m x 1.8m', '4 200 m linéaires', 'Ouvrages de décantation intégrés'],
  },
  {
    id: 4,
    category: 'energie',
    title: 'Poste MT/BT & Infrastructure Énergétique Hybride',
    client: 'Plateforme Logistique & Industrielle',
    location: 'Kinshasa Est',
    duration: '4 Mois',
    status: 'Livré · Contrat de Suivi',
    statusType: 'success',
    image: '/images/electrical-project.jpg',
    description:
      'Raccordement au réseau national avec transformateur 400 kVA, couplage à un champ photovoltaïque avec banc de batteries et automatisme de bascule sans coupure.',
    specs: ['Puissance 400 kVA', 'Bascule automatique 12ms', 'Supervision à distance'],
  },
  {
    id: 5,
    category: 'maint',
    title: 'Maintenance Technique & Cleaning Industriel Intensif',
    client: 'Compagnie Minière & Agro-industrielle',
    location: 'Site d’Exploitation, RDC',
    duration: 'Contrat Pluriannuel',
    status: 'Contrat Actif 2026',
    statusType: 'contract',
    image: '/images/maintenance-project.jpg',
    description:
      'Dégraissage haute pression des ateliers, assainissement microbiologique des zones sensibles, désinfection des blocs sanitaires et maintenance préventive hebdomadaire.',
    specs: ['15 000 m² sous contrat', 'Astreinte 24/7', 'Conformité HSE Zéro Incident'],
  },
];

export function ProjectsGallery() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="realisations" className="py-24 lg:py-32 relative bg-[#0A101D] overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="page-shell relative z-10 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-amber-500/10 border border-amber-500/20 text-xs font-mono font-semibold text-amber-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>RÉFÉRENCES & CHANTIERS DE TERRAIN</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight">
              Des projets emblématiques, <br />
              <span className="gradient-text-amber">une signature de fiabilité.</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Découvrez un aperçu de nos chantiers en République Démocratique du Congo.
              Chaque livraison témoigne de notre engagement en termes de sécurité, de solidité et de respect des délais.
            </p>
          </div>

          {/* Quick Filter */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-xl bg-slate-900/90 border border-white/10 shrink-0">
            {projectCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-amber-500 text-slate-950 font-bold shadow'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="glass-panel rounded-2xl overflow-hidden border border-white/10 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1.5"
            >
              {/* Card Image with Overlays */}
              <div className="relative h-64 w-full overflow-hidden bg-slate-900">
                <Image
                  src={getAssetPath(project.image)}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md border ${
                      project.statusType === 'success'
                        ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/30'
                        : project.statusType === 'in-progress'
                        ? 'bg-amber-950/80 text-amber-300 border-amber-500/30'
                        : 'bg-blue-950/80 text-blue-300 border-blue-500/30'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    <span>{project.status}</span>
                  </span>
                </div>

                {/* Location Badge */}
                <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-xs text-slate-300 font-medium bg-slate-950/70 px-2.5 py-1 rounded-md backdrop-blur-sm border border-white/10">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>{project.location}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div className="text-[11px] font-mono text-amber-400 font-bold uppercase tracking-wider">
                    {project.client}
                  </div>
                  <h3 className="text-xl font-bold font-display text-white group-hover:text-amber-400 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technical Specifications */}
                <div className="pt-4 border-t border-white/10 space-y-2">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-semibold block">
                    Points techniques clés :
                  </span>
                  <div className="space-y-1">
                    {project.specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Duration & Contact CTA */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{project.duration}</span>
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 font-bold text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    <span>Étudier un projet similaire</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
