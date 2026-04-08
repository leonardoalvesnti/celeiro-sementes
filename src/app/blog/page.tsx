'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowRight, Tag, BookOpen, Leaf, Sprout, Beaker } from 'lucide-react';
import { artigos, categorias } from '@/data/blog';
import { formatDateBR } from '@/lib/utils';

export default function BlogPage() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<string>('');

  const filtered = useMemo(() => {
    if (!categoriaSelecionada) return artigos;
    return artigos.filter((a) => a.categoria === categoriaSelecionada);
  }, [categoriaSelecionada]);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-celeiro-green-dark overflow-hidden">
        <div className="absolute inset-0 section-divider-dots opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
              <span className="text-celeiro-yellow">Blog</span> Celeiro
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Notícias, artigos técnicos e dicas para maximizar a produtividade da sua lavoura.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category filters + Articles */}
      <section className="py-12 bg-celeiro-gray-100/30 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Floating category filters */}
          <div className="flex flex-wrap gap-2 mb-10 sticky top-20 z-30 bg-white/80 backdrop-blur-md rounded-2xl p-4 shadow-sm border border-celeiro-gray-200/50">
            <button onClick={() => setCategoriaSelecionada('')}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${!categoriaSelecionada ? 'bg-celeiro-green-dark text-white' : 'bg-celeiro-gray-100 text-celeiro-gray-500 hover:bg-celeiro-gray-200'}`}>
              Todas
            </button>
            {categorias.map((cat) => (
              <button key={cat} onClick={() => setCategoriaSelecionada(categoriaSelecionada === cat ? '' : cat)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${categoriaSelecionada === cat ? 'bg-celeiro-green-dark text-white' : 'bg-celeiro-gray-100 text-celeiro-gray-500 hover:bg-celeiro-gray-200'}`}>
                {cat}
              </button>
            ))}
          </div>

          {/* Articles Grid (masonry-like) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((artigo, i) => (
              <motion.article key={artigo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-celeiro-gray-200/50 ${i === 0 ? 'sm:col-span-2 lg:col-span-2' : ''}`}
              >
                <div className={`relative bg-gradient-to-br from-celeiro-green-dark to-celeiro-green overflow-hidden ${i === 0 ? 'h-64' : 'h-48'}`}>
                  <div className="absolute inset-0 section-divider-leaves opacity-20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    {(() => {
                      const icons = [BookOpen, Leaf, Sprout, Beaker];
                      const Icon = icons[i % icons.length];
                      return <Icon className={`${i === 0 ? 'w-20 h-20' : 'w-16 h-16'} text-white/15`} />;
                    })()}
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-celeiro-yellow text-celeiro-green-dark text-xs font-bold px-3 py-1 rounded-full">{artigo.categoria}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-celeiro-gray-500 text-xs mb-3">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{formatDateBR(artigo.dataPublicacao)}</span>
                    <span>•</span>
                    <span>{artigo.autor}</span>
                  </div>
                  <h2 className={`font-bold text-celeiro-green-dark group-hover:text-celeiro-green transition-colors mb-3 ${i === 0 ? 'text-2xl' : 'text-lg'}`}>
                    {artigo.titulo}
                  </h2>
                  <p className="text-celeiro-gray-500 text-sm mb-4 line-clamp-3">{artigo.resumo}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {artigo.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="inline-flex items-center gap-1 text-xs text-celeiro-gray-500 bg-celeiro-gray-100 px-2 py-0.5 rounded-full">
                        <Tag className="w-3 h-3" />{tag}
                      </span>
                    ))}
                  </div>
                  <Link href={`/blog/${artigo.slug}`} className="inline-flex items-center gap-1 text-celeiro-green font-semibold text-sm hover:text-celeiro-green-dark transition-colors">
                    Ler artigo completo <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
