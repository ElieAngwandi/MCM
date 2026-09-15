'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

const faqs = [
  {
    q: 'Quelles sont les zones géographiques couvertes par MCM SARL en RDC ?',
    a: 'Nos équipes et matériels interviennent en continu dans la ville-province de Kinshasa et le Kongo Central. Grâce à notre mobilité logistique, nous déployons également des bases-vie autonomes et des parcs d’engins dans toutes les provinces de la RDC pour des projets d’infrastructures routières, de génie civil ou miniers.',
  },
  {
    q: 'Comment se déroule l’étude préalable de site et la remise d’une proposition technique ?',
    a: 'Dès votre prise de contact, un ingénieur MCM prend attache avec votre équipe sous 24h ouvrées. Une visite sur site est programmée pour effectuer les relevés géométriques, topographiques et l’analyse des contraintes. Une offre technique et financière détaillée, avec phasage d’intervention, vous est ensuite remise sous 48 à 72 heures.',
  },
  {
    q: 'MCM SARL dispose-t-elle de son propre parc matériel d’engins lourds ?',
    a: 'Oui. MCM SARL possède en propre ses engins de terrassement et de nivellement (pelles hydrauliques, niveleuses, compacteurs vibrants, camions bennes), des instruments topographiques de pointe ainsi que des unités mobiles de nettoyage haute pression. Cette autonomie élimine les ruptures logistiques et garantit la maîtrise de vos plannings.',
  },
  {
    q: 'Quelles garanties et assurances accompagnent vos réalisations ?',
    a: 'L’ensemble de nos chantiers de construction et d’infrastructures est couvert par les garanties d’usage : parfait achèvement des finitions, garantie de bon fonctionnement sur les lots techniques (fluides et électricité) et garantie décennale sur la stabilité structurelle du gros œuvre et des ouvrages de drainage.',
  },
  {
    q: 'Répondez-vous aux appels d’offres publics et marchés institutionnels ?',
    a: 'Absolument. MCM SARL est une entreprise dûment enregistrée au Registre du Commerce et du Crédit Mobilier (RCCM), en règle avec l’administration fiscale (NIF), la CNSS et les ministères compétents. Nous disposons des agréments techniques pour soumissionner aux marchés de voirie, d’assainissement et de bâtiments publics.',
  },
  {
    q: 'Proposez-vous des contrats pluriannuels de maintenance et de facility management ?',
    a: 'Oui, nous gérons la maintenance technique globale (électricité, plomberie, climatisation) et le nettoyage industriel / assainissement sous forme de contrats annuels avec astreinte d’urgence 24/7 pour les sièges d’entreprises, sites miniers, ambassades et complexes commerciaux.',
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 lg:py-32 relative bg-[#0B1320] overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 tech-grid opacity-15 pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="page-shell relative z-10 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-amber-500/10 border border-amber-500/20 text-xs font-mono font-semibold text-amber-400">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FOIRE AUX QUESTIONS & TRANSPARENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
            Tout ce que vous devez savoir <br />
            <span className="gradient-text-amber">avant d’engager vos travaux.</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed pt-2">
            Retrouvez les réponses précises aux questions les plus fréquemment posées par nos clients particuliers,
            entreprises et donneurs d’ordre institutionnels.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-4xl space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="glass-panel rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-amber-500/30"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-base sm:text-lg text-white hover:text-amber-400 transition-colors">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-slate-800/80 border border-white/10 flex items-center justify-center text-amber-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-amber-500 text-slate-950' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-7 sm:px-7 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-white/5 pt-4">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Contact Help Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 max-w-4xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold font-display text-white">
                Une question technique spécifique ou un appel d’offres ?
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Nos ingénieurs et directeurs de projets sont à votre disposition pour vous conseiller.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs whitespace-nowrap shadow-lg shadow-amber-500/20 transition-all self-start sm:self-center"
          >
            Poser votre question
          </a>
        </div>
      </div>
    </section>
  );
}
