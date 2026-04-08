'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, MessageCircle, Users } from 'lucide-react';
import { equipe } from '@/data/equipe';

export default function EquipePage() {
  const [estadoSelecionado, setEstadoSelecionado] = useState<string>('');

  const estadosUnicos = [...new Set(equipe.flatMap((r) => r.estados))].sort();
  const filtered = estadoSelecionado ? equipe.filter((r) => r.estados.includes(estadoSelecionado)) : equipe;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-celeiro-green-dark overflow-hidden">
        <div className="absolute inset-0 section-divider-dots opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 bg-celeiro-yellow/20 text-celeiro-yellow px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-celeiro-yellow/30">
              <Users className="w-4 h-4" /> Nosso Time
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
              Equipe <span className="text-celeiro-yellow">Técnica</span> Comercial
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Encontre nossos representantes técnicos comerciais e receba atendimento especializado na sua região.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Map placeholder + Filters */}
      <section className="py-12 bg-celeiro-gray-100/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Interactive Map area */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-celeiro-green-dark rounded-2xl p-8 mb-12 overflow-hidden relative">
            <div className="absolute inset-0 section-divider-dots opacity-5" />
            <div className="relative grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-extrabold text-white mb-4">
                  Atuação em <span className="text-celeiro-yellow">9 estados</span>
                </h2>
                <p className="text-white/60 mb-6">
                  Clique em um estado para filtrar os representantes que atendem a sua região.
                </p>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setEstadoSelecionado('')}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${!estadoSelecionado ? 'bg-celeiro-yellow text-celeiro-green-dark' : 'bg-white/10 text-white hover:bg-white/20'}`}
                  >
                    Todos
                  </button>
                  {estadosUnicos.map((estado) => (
                    <button key={estado} onClick={() => setEstadoSelecionado(estadoSelecionado === estado ? '' : estado)}
                      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${estadoSelecionado === estado ? 'bg-celeiro-yellow text-celeiro-green-dark' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                      {estado}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-3 gap-3 w-full max-w-sm">
                  {estadosUnicos.map((estado) => {
                    const isActive = !estadoSelecionado || estadoSelecionado === estado;
                    return (
                      <button key={estado} onClick={() => setEstadoSelecionado(estadoSelecionado === estado ? '' : estado)}
                        className={`flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all ${
                          estadoSelecionado === estado
                            ? 'bg-celeiro-yellow text-celeiro-green-dark scale-105'
                            : isActive
                              ? 'bg-white/10 text-white hover:bg-white/20'
                              : 'bg-white/5 text-white/30'
                        }`}>
                        <MapPin className="w-4 h-4" />
                        {estado}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Team Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((rep, i) => (
              <motion.div key={rep.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-celeiro-gray-200/50 group"
              >
                <div className="bg-gradient-to-r from-celeiro-green-dark to-celeiro-green p-6">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-3">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-lg">{rep.nome}</h3>
                  <p className="text-white/60 text-sm">{rep.cargo}</p>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-celeiro-green-light mt-0.5 flex-shrink-0" />
                    <span className="text-celeiro-gray-500 text-sm">{rep.regiao}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-celeiro-green-light flex-shrink-0" />
                    <a href={`mailto:${rep.email}`} className="text-celeiro-gray-500 text-sm hover:text-celeiro-green transition-colors truncate">{rep.email}</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-celeiro-green-light flex-shrink-0" />
                    <span className="text-celeiro-gray-500 text-sm">{rep.telefone}</span>
                  </div>
                  <a href={rep.whatsappLink} target="_blank" rel="noopener noreferrer"
                    className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-bold py-3 rounded-xl transition-all text-sm">
                    <MessageCircle className="w-4 h-4" />
                    Falar pelo WhatsApp
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
