import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Equipe Técnica Comercial',
  description:
    'Conheça os representantes técnicos comerciais da Celeiro Sementes e encontre o atendimento na sua região.',
};

export default function EquipeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
