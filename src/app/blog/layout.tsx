import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Artigos, notícias e dicas sobre soja, agronegócio, tecnologia de sementes e manejo de solo pela equipe Celeiro Sementes.',
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
