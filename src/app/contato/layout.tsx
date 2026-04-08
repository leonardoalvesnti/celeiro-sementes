import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Entre em contato com a Celeiro Sementes. Fale com nossa equipe comercial pelo WhatsApp, telefone ou e-mail.',
};

export default function ContatoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
