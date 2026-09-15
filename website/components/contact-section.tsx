'use client';

import { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
  MessageCircle,
  Building2,
} from 'lucide-react';

const clientProfiles = [
  'Particulier / Résidence',
  'Entreprise / Industrie',
  'Institution / Collectivité',
];

const serviceOptions = [
  'Construction neuve & Rénovation',
  'Routes, Pistes & Voirie',
  'Caniveaux & Drainage des eaux',
  'Plomberie & Réseaux sanitaires',
  'Électricité & Énergie solaire',
  'Cleaning & Assainissement',
  'Génie Civil & Études techniques',
  'Autre demande spécifique',
];

export function ContactSection() {
  const [profile, setProfile] = useState(clientProfiles[0]);
  const [selectedService, setSelectedService] = useState(serviceOptions[0]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    message: '',
  });

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative bg-[#080E18] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="page-shell relative z-10 space-y-16">
        {/* Section Heading */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-amber-500/10 border border-amber-500/20 text-xs font-mono font-semibold text-amber-400">
            <Building2 className="w-3.5 h-3.5" />
            <span>CONTACT DIRECT & DEMANDE D’ÉTUDE TECHNIQUE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
            Concrétisons votre projet. <br />
            <span className="gradient-text-amber">Échangez avec nos ingénieurs.</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed pt-2">
            Transmettez-nous votre cahier des charges ou décrivez brièvement votre besoin.
            Notre direction technique vous recontacte sous 24 heures ouvrées pour organiser une visite de site.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Form Card */}
          <div className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-2xl border border-white/10 shadow-2xl relative">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold font-display text-white">
                    Votre demande a bien été transmise !
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Merci pour votre confiance. L’un de nos ingénieurs étudie votre dossier et vous contactera
                    au <span className="text-amber-400 font-semibold">{formData.phone || 'numéro renseigné'}</span> pour
                    convenir d’une date de descente sur site.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold"
                >
                  Envoyer une autre demande
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Profile selection */}
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase text-slate-400 font-bold block">
                    Vous êtes :
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {clientProfiles.map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setProfile(p)}
                        className={`px-3 py-2 rounded-lg text-xs font-medium border text-center transition-all ${
                          profile === p
                            ? 'bg-amber-500 text-slate-950 font-bold border-amber-500'
                            : 'bg-slate-900/80 border-white/10 text-slate-300 hover:border-white/20'
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Service Selection */}
                <div className="space-y-2">
                  <label htmlFor="service-select" className="text-xs font-mono uppercase text-slate-400 font-bold block">
                    Domaine de travaux concerné :
                  </label>
                  <select
                    id="service-select"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/15 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-slate-900 text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Personal / Company Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="contact-name" className="text-xs font-mono uppercase text-slate-400 font-bold block">
                      Nom complet / Entreprise <span className="text-amber-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Ex: Jean Makiese / Groupe ABC"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/15 text-white text-sm focus:outline-none focus:border-amber-500 placeholder:text-slate-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact-phone" className="text-xs font-mono uppercase text-slate-400 font-bold block">
                      Téléphone d’appel & WhatsApp <span className="text-amber-500">*</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      placeholder="+243 81 000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/15 text-white text-sm focus:outline-none focus:border-amber-500 placeholder:text-slate-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="text-xs font-mono uppercase text-slate-400 font-bold block">
                      Adresse Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="contact@votre-domaine.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/15 text-white text-sm focus:outline-none focus:border-amber-500 placeholder:text-slate-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact-location" className="text-xs font-mono uppercase text-slate-400 font-bold block">
                      Localisation du chantier
                    </label>
                    <input
                      id="contact-location"
                      type="text"
                      placeholder="Ex: Kinshasa - Ngaliema / Gombe"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/15 text-white text-sm focus:outline-none focus:border-amber-500 placeholder:text-slate-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="contact-message" className="text-xs font-mono uppercase text-slate-400 font-bold block">
                    Description succincte du projet ou des travaux
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Précisez les dimensions estimées, les contraintes particulières ou vos dates souhaitées d'intervention..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/15 text-white text-sm focus:outline-none focus:border-amber-500 placeholder:text-slate-500 transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm tracking-wide shadow-xl shadow-amber-500/25 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmettre ma demande d’étude</span>
                </button>

                <p className="text-center text-[11px] text-slate-400 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
                  <span>Confidentialité garantie · Données protégées · Réponse sous 24h</span>
                </p>
              </form>
            )}
          </div>

          {/* Coordinates & Direct Access Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct WhatsApp Box */}
            <div className="p-7 rounded-2xl bg-gradient-to-br from-emerald-950/60 to-slate-900/80 border border-emerald-500/30 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-display text-white">Échange Direct par WhatsApp</h3>
                  <p className="text-xs text-emerald-300">Réponse immédiate de notre permanence</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Vous avez des photos du site ou des plans déjà disponibles ? Envoyez-les directement
                à nos ingénieurs par WhatsApp pour une pré-analyse accélérée.
              </p>
              <a
                href="https://wa.me/243810000000?text=Bonjour%20MCM%20SARL,%20je%20souhaite%20des%20renseignements%20pour%20un%20projet%20de%20travaux."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs tracking-wide shadow-lg transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Ouvrir WhatsApp avec un ingénieur</span>
              </a>
            </div>

            {/* Coordinates Card */}
            <div className="glass-panel p-7 rounded-2xl border border-white/10 space-y-6">
              <h3 className="text-lg font-bold font-display text-white border-b border-white/10 pb-3">
                Nos Coordonnées Opérationnelles
              </h3>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Direction & Siège d&apos;exploitation</strong>
                    <span>Kinshasa, République Démocratique du Congo</span>
                    <span className="block text-xs text-slate-400 mt-0.5">Bases opérationnelles déployables en provinces</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Ligne Téléphonique</strong>
                    <a href="tel:+243810000000" className="hover:text-amber-400 transition-colors">
                      +243 (0) 81 000 0000
                    </a>
                    <span className="block text-xs text-emerald-400 mt-0.5">Permanence chantiers & urgences 24/7</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Courrier Électronique</strong>
                    <a href="mailto:contact@mcm-sarl.com" className="hover:text-amber-400 transition-colors">
                      contact@mcm-sarl.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Horaires des Bureaux</strong>
                    <span>Lundi – Samedi : 07h30 – 18h00</span>
                    <span className="block text-xs text-slate-400 mt-0.5">Équipes de chantiers actives en continu selon planning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
