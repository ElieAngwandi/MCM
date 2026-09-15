import type { Metadata, Viewport } from 'next';
import { getAssetPath } from '@/lib/base-path';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#090E17',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'MCM SARL | BTP, Génie Civil, Infrastructures & Maintenance',
  description:
    'MCM SARL (Mining, Cleaning, Maintenance) est votre partenaire de référence en République Démocratique du Congo pour la construction, la voirie, le drainage, les réseaux électriques, l’assainissement et la maintenance industrielle.',
  keywords: [
    'MCM SARL',
    'BTP Kinshasa',
    'Génie civil RDC',
    'Construction de routes',
    'Caniveaux et drainage',
    'Rénovation bâtiment',
    'Mining Cleaning Maintenance',
    'Entreprise de construction RDC',
  ],
  authors: [{ name: 'MCM SARL' }],
  icons: {
    icon: getAssetPath('/favicon.svg'),
    apple: getAssetPath('/logo-mcm.jpeg'),
  },
  openGraph: {
    title: 'MCM SARL | Bâtir l’avenir, pérenniser les infrastructures',
    description:
      'Une expertise multisectorielle certifiée au service des particuliers, entreprises et institutions publiques en RDC.',
    type: 'website',
    locale: 'fr_FR',
    images: [
      {
        url: getAssetPath('/mcm-infrastructure-hero.png'),
        width: 1200,
        height: 630,
        alt: 'MCM SARL - Projets et Chantiers d’envergure',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased bg-[#080E18] text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 min-h-screen">
        {children}
      </body>
    </html>
  );
}
