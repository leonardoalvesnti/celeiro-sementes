import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre Nós',
  description:
    'Conheça a história da Celeiro Sementes — mais de 30 anos de tradição, qualidade e inovação no agronegócio brasileiro.',
};

export default function SobreLayout({ children }: { children: React.ReactNode }) {
  return children;
}
