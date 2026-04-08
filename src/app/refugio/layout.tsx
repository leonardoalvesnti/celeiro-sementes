import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Áreas de Refúgio',
  description:
    'Entenda a importância das áreas de refúgio para a preservação das biotecnologias Bt e a sustentabilidade da agricultura.',
};

export default function RefugioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
