import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nossas Sementes',
  description:
    'Catálogo completo de sementes de soja da Celeiro Sementes. 27 cultivares das marcas Brasmax, Latitude, SoyTech e TMG com busca e filtros.',
};

export default function SementesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
