'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Search, Filter, X, ChevronDown, Shield, Sprout } from 'lucide-react';
import { sementes, marcas, ciclos, tecnologias, type Marca, type Ciclo, type Tecnologia } from '@/data/sementes';

export default function SementesPage() {
  const [busca, setBusca] = useState('');
  const [marcaSelecionada, setMarcaSelecionada] = useState<Marca | ''>('');
  const [cicloSelecionado, setCicloSelecionado] = useState<Ciclo | ''>('');
  const [tecSelecionada, setTecSelecionada] = useState<Tecnologia | ''>('');
  const [showFilters, setShowFilters] = useState(false);
  const [mobileLimit, setMobileLimit] = useState(4);

  const filtered = useMemo(() => {
    return sementes.filter((s) => {
      const matchBusca = busca === '' || s.nome.toLowerCase().includes(busca.toLowerCase()) || s.descricaoCurta.toLowerCase().includes(busca.toLowerCase());
      const matchMarca = marcaSelecionada === '' || s.marca === marcaSelecionada;
      const matchCiclo = cicloSelecionado === '' || s.caracteristicas.ciclo === cicloSelecionado;
      const matchTec = tecSelecionada === '' || s.caracteristicas.tecnologia === tecSelecionada;
      return matchBusca && matchMarca && matchCiclo && matchTec;
    });
  }, [busca, marcaSelecionada, cicloSelecionado, tecSelecionada]);

  const activeFilters = [marcaSelecionada, cicloSelecionado, tecSelecionada].filter(Boolean).length;

  const clearFilters = () => {
    setBusca('');
    setMarcaSelecionada('');
    setCicloSelecionado('');
    setTecSelecionada('');
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-celeiro-green-dark overflow-hidden">
        <div className="absolute inset-0 section-divider-dots opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
              Nossas <span className="text-celeiro-yellow">Sementes</span>
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
              {sementes.length} cultivares de alta qualidade das marcas Brasmax, Latitude, SoyTech e TMG.
            </p>

            {/* Search bar */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                placeholder="Buscar cultivar por nome..."
                className="w-full bg-white/10 border border-white/20 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-celeiro-yellow/50 transition-all"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters + Catalog */}
      <section className="py-12 bg-celeiro-gray-100/30 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter bar */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center gap-2 bg-white border border-celeiro-gray-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-celeiro-gray-800 hover:border-celeiro-green transition-colors"
            >
              <Filter className="w-4 h-4" />
              Filtros
              {activeFilters > 0 && (
                <span className="bg-celeiro-green-light text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">{activeFilters}</span>
              )}
              <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>

            {/* Active filter chips */}
            {marcaSelecionada && (
              <span className="inline-flex items-center gap-1 bg-celeiro-green-dark text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                {marcaSelecionada}
                <button onClick={() => setMarcaSelecionada('')}><X className="w-3 h-3" /></button>
              </span>
            )}
            {cicloSelecionado && (
              <span className="inline-flex items-center gap-1 bg-celeiro-green text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                {cicloSelecionado}
                <button onClick={() => setCicloSelecionado('')}><X className="w-3 h-3" /></button>
              </span>
            )}
            {tecSelecionada && (
              <span className="inline-flex items-center gap-1 bg-celeiro-yellow-dark text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                {tecSelecionada}
                <button onClick={() => setTecSelecionada('')}><X className="w-3 h-3" /></button>
              </span>
            )}
            {activeFilters > 0 && (
              <button onClick={clearFilters} className="text-celeiro-gray-500 text-xs hover:text-celeiro-green-dark underline">Limpar tudo</button>
            )}

            <span className="ml-auto text-celeiro-gray-500 text-sm">
              {filtered.length} cultivar{filtered.length !== 1 ? 'es' : ''} encontrada{filtered.length !== 1 ? 's' : ''}
            </span>
          </div>

          {/* Expandable filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden bg-white rounded-2xl p-6 mb-8 shadow-sm border border-celeiro-gray-200/50">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-celeiro-gray-800 uppercase tracking-wider mb-2">Marca</label>
                    <div className="flex flex-wrap gap-2">
                      {marcas.map((m) => (
                        <button key={m} onClick={() => setMarcaSelecionada(marcaSelecionada === m ? '' : m)}
                          className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${marcaSelecionada === m ? 'bg-celeiro-green-dark text-white' : 'bg-celeiro-gray-100 text-celeiro-gray-500 hover:bg-celeiro-gray-200'}`}>
                          {m}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-celeiro-gray-800 uppercase tracking-wider mb-2">Ciclo</label>
                    <div className="flex flex-wrap gap-2">
                      {ciclos.map((c) => (
                        <button key={c} onClick={() => setCicloSelecionado(cicloSelecionado === c ? '' : c)}
                          className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${cicloSelecionado === c ? 'bg-celeiro-green text-white' : 'bg-celeiro-gray-100 text-celeiro-gray-500 hover:bg-celeiro-gray-200'}`}>
                          {c}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-celeiro-gray-800 uppercase tracking-wider mb-2">Tecnologia</label>
                    <div className="flex flex-wrap gap-2">
                      {tecnologias.map((t) => (
                        <button key={t} onClick={() => setTecSelecionada(tecSelecionada === t ? '' : t)}
                          className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${tecSelecionada === t ? 'bg-celeiro-yellow-dark text-white' : 'bg-celeiro-gray-100 text-celeiro-gray-500 hover:bg-celeiro-gray-200'}`}>
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Catalog Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((semente, index) => (
                <motion.div
                  key={semente.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group border border-celeiro-gray-200/50 ${index >= mobileLimit ? 'hidden sm:block' : ''}`}
                >
                  <div className="relative h-44 bg-gradient-to-br from-celeiro-gray-100 to-white overflow-hidden flex items-center justify-center p-4">
                    <Image src={semente.imagem} alt={semente.nome} width={300} height={150} className="object-contain max-h-36 group-hover:scale-105 transition-transform" />
                    <div className="absolute top-3 left-3 flex gap-1.5">
                      {semente.lancamento && (
                        <span className="bg-celeiro-yellow text-celeiro-green-dark text-xs font-bold px-2.5 py-1 rounded-full">Lançamento</span>
                      )}
                    </div>
                    <span className="absolute top-3 right-3 bg-celeiro-green-dark/80 text-white text-xs font-bold px-2.5 py-1 rounded-full backdrop-blur-sm">
                      {semente.marca}
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="font-bold text-celeiro-green-dark text-lg mb-2 group-hover:text-celeiro-green transition-colors">
                      {semente.nome}
                    </h3>
                    <p className="text-celeiro-gray-500 text-sm mb-4 line-clamp-2">{semente.descricaoCurta}</p>

                    {/* Specs grid */}
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-celeiro-gray-100/50 rounded-lg px-2.5 py-2">
                        <span className="text-celeiro-gray-500 block">Ciclo</span>
                        <span className="text-celeiro-green-dark font-bold">{semente.caracteristicas.ciclo}</span>
                      </div>
                      <div className="bg-celeiro-gray-100/50 rounded-lg px-2.5 py-2">
                        <span className="text-celeiro-gray-500 block">PMR</span>
                        <span className="text-celeiro-green-dark font-bold">{semente.caracteristicas.pmr}</span>
                      </div>
                      <div className="bg-celeiro-gray-100/50 rounded-lg px-2.5 py-2">
                        <span className="text-celeiro-gray-500 block">Fertilidade</span>
                        <span className="text-celeiro-green-dark font-bold">{semente.caracteristicas.exigenciaFertilidade}</span>
                      </div>
                      <div className="bg-celeiro-gray-100/50 rounded-lg px-2.5 py-2">
                        <span className="text-celeiro-gray-500 block">Tecnologia</span>
                        <span className="text-celeiro-green-light font-bold">{semente.caracteristicas.tecnologia}</span>
                      </div>
                    </div>

                    {semente.caracteristicas.resistenciaNematoide && (
                      <div className="mt-3 flex items-center gap-1.5 text-xs text-celeiro-green font-semibold">
                        <Shield className="w-3.5 h-3.5" />
                        Resistente a Nematoide
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Mobile "Ver Mais" Button */}
          {filtered.length > mobileLimit && (
            <div className="mt-10 flex justify-center sm:hidden">
              <button
                onClick={() => setMobileLimit((prev) => prev + 100)} // Shows all remaining
                className="bg-celeiro-yellow hover:bg-yellow-400 text-green-950 font-bold px-8 py-3.5 rounded-xl shadow-lg transition-transform active:scale-95"
              >
                Ver Todas
              </button>
            </div>
          )}

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <Sprout className="w-16 h-16 text-celeiro-gray-200 mx-auto mb-4" />
              <p className="text-celeiro-gray-500 text-lg">Nenhuma cultivar encontrada com os filtros selecionados.</p>
              <button onClick={clearFilters} className="mt-4 text-celeiro-green font-semibold hover:underline">Limpar filtros</button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
