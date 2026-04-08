import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import ScrollProgress from '@/components/layout/ScrollProgress';
import ScrollToTop from '@/components/layout/ScrollToTop';
import { SEO_DEFAULTS, SITE_NAME, SITE_URL } from '@/lib/constants';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SEO_DEFAULTS.title,
    template: `%s | ${SITE_NAME}`,
  },
  description: SEO_DEFAULTS.description,
  keywords: SEO_DEFAULTS.keywords,
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: SITE_NAME,
    title: SEO_DEFAULTS.title,
    description: SEO_DEFAULTS.description,
    url: SITE_URL,
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo/celeiro-logo.png`,
  description: SEO_DEFAULTS.description,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Fazenda Celeiro, Gleba dos Patos',
    addressLocality: 'Monte Alegre do Piauí',
    addressRegion: 'PI',
    postalCode: '64940-000',
    addressCountry: 'BR',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+55-61-3621-2946',
    contactType: 'sales',
    availableLanguage: 'Portuguese',
  },
  sameAs: [
    'https://www.instagram.com/celeirosementes/',
    'https://www.facebook.com/celeirosementes/',
    'https://www.linkedin.com/company/celeirosementes/',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={montserrat.variable}>
      <body className="font-campton antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-celeiro-green-dark focus:text-white focus:px-4 focus:py-2 focus:rounded-lg">
          Pular para o conteúdo
        </a>
        <Navbar />
        <main id="main-content" className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
        <ScrollProgress />
        <ScrollToTop />
      </body>
    </html>
  );
}
