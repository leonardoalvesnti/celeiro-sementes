// ============================================
// CELEIRO SEMENTES — Global Constants
// ============================================

export const SITE_NAME = 'Celeiro Sementes';
export const SITE_URL = 'https://celeirosementes.com.br';
export const SITE_DESCRIPTION =
  'Celeiro Sementes — Há mais de 46 anos fornecendo sementes de soja de alta qualidade para o agronegócio brasileiro. Brasmax, Latitude e TMG.';

export const SEO_DEFAULTS = {
  title: 'Celeiro Sementes | Paixão para cultivar o futuro',
  description: SITE_DESCRIPTION,
  keywords: [
    'sementes de soja',
    'Celeiro Sementes',
    'Brasmax',
    'Latitude',
    'SoyTech',
    'TMG',
    'agronegócio',
    'sementes cerrado',
    'MATOPIBA',
    'soja de alta qualidade',
  ],
  openGraph: {
    type: 'website' as const,
    locale: 'pt_BR',
    siteName: SITE_NAME,
  },
};

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Sobre Nós', href: '/sobre' },
  { label: 'Nossas Sementes', href: '/sementes' },
  { label: 'Refúgio', href: '/refugio' },
  { label: 'Equipe', href: '/equipe' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contato', href: '/contato' },
] as const;
