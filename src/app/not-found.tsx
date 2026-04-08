import Link from 'next/link';
import { Sprout } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-celeiro-gray-100/30">
      <div className="text-center px-4">
        <Sprout className="w-20 h-20 text-celeiro-green-light/30 mx-auto mb-6" />
        <h1 className="text-7xl font-extrabold text-celeiro-green-dark mb-2">404</h1>
        <h2 className="text-2xl font-bold text-celeiro-green-dark mb-4">Página não encontrada</h2>
        <p className="text-celeiro-gray-500 max-w-md mx-auto mb-8">
          A página que você está procurando não existe ou foi movida para outro endereço.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-celeiro-green-dark hover:bg-celeiro-green text-white font-bold px-8 py-3.5 rounded-full transition-all hover:shadow-lg"
        >
          Voltar para o início
        </Link>
      </div>
    </div>
  );
}
