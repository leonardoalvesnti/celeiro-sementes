'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Calendar, Target, Eye, Heart, Building2, Leaf, Lightbulb, Handshake, Shield } from 'lucide-react';
import { empresa } from '@/data/empresa';

const valores = [
  { icon: Heart, label: empresa.historia.valores[0] },
  { icon: Target, label: empresa.historia.valores[1] },
  { icon: Building2, label: empresa.historia.valores[2] },
];

const timeline = [
  { ano: '1994', titulo: 'Fundação', descricao: 'Início das atividades com produção de sementes de soja no Sul do Piauí.' },
  { ano: '2005', titulo: 'Expansão Regional', descricao: 'Ampliação do atendimento para toda a região do MATOPIBA (MA, TO, PI, BA).' },
  { ano: '2015', titulo: 'Novas Parcerias', descricao: 'Consolidação de parcerias com as principais obtentoras: Brasmax, TMG, Latitude e SoyTech.' },

  { ano: '2024', titulo: '+30 Anos', descricao: 'Mais de 30 anos de tradição e inovação, com presença em 9 estados brasileiros.' },
];

export default function SobrePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-celeiro-green-dark overflow-hidden">
        <div className="absolute inset-0 section-divider-dots opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 bg-celeiro-yellow/20 text-celeiro-yellow px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-celeiro-yellow/30">
              <Leaf className="w-4 h-4" /> Desde 1994
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Sobre a <span className="text-celeiro-yellow">Celeiro Sementes</span>
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Mais de 30 anos de história, dedicação e paixão pelo agronegócio brasileiro.
            </p>
          </motion.div>
        </div>
      </section>

      {/* História */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="relative h-80 lg:h-[450px] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80" alt="Lavoura de soja" fill className="object-cover" />
                <div className="absolute inset-0 bg-green-950/80 mix-blend-multiply" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent font-extrabold text-8xl block leading-none mb-3">+30</span>
                  <span className="text-white text-xl tracking-wide font-medium">Anos de mercado</span>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-block bg-celeiro-green-light/10 text-celeiro-green px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Nossa História</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-celeiro-green-dark mb-6 leading-tight">
                DNA <span className="text-celeiro-green-light">agro</span> desde o primeiro dia
              </h2>
              <p className="text-celeiro-gray-500 leading-relaxed mb-4">{empresa.descricao}</p>
              <p className="text-celeiro-gray-500 leading-relaxed mb-6">
                Nascida no coração do cerrado piauiense, a Celeiro Sementes construiu sua trajetória com base em relacionamento direto com o produtor,
                atendimento técnico de excelência e parceria com as maiores obtentoras de genética de soja do Brasil.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-celeiro-gray-100/50">
                  <div className="w-10 h-10 rounded-lg bg-celeiro-green-dark flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-celeiro-yellow" />
                  </div>
                  <div>
                    <h4 className="font-bold text-celeiro-green-dark text-sm">Missão</h4>
                    <p className="text-celeiro-gray-500 text-xs mt-1">{empresa.historia.missao}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-celeiro-gray-100/50">
                  <div className="w-10 h-10 rounded-lg bg-celeiro-green-dark flex items-center justify-center flex-shrink-0">
                    <Eye className="w-5 h-5 text-celeiro-yellow" />
                  </div>
                  <div>
                    <h4 className="font-bold text-celeiro-green-dark text-sm">Visão</h4>
                    <p className="text-celeiro-gray-500 text-xs mt-1">{empresa.historia.visao}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 bg-celeiro-gray-100/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-celeiro-green-dark text-center mb-10">Nossos Valores</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {empresa.historia.valores.map((valor, i) => {
              const icons = [Heart, Lightbulb, Handshake, Leaf, Shield];
              const Icon = icons[i % icons.length];
              return (
              <motion.div key={valor} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-5 text-center shadow-sm hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-celeiro-green-dark/10 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-5 h-5 text-celeiro-green" />
                </div>
                <span className="text-celeiro-gray-800 font-semibold text-sm">{valor}</span>
              </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-celeiro-green-dark text-center mb-12">Nossa Trajetória</h2>
          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-celeiro-green-light/30 sm:-translate-x-1/2" />
            {timeline.map((item, i) => (
              <motion.div key={item.ano} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                className={`relative flex items-start gap-6 mb-10 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                <div className="hidden sm:block sm:w-1/2" />
                <div className="absolute left-4 sm:left-1/2 w-4 h-4 rounded-full bg-celeiro-green-light border-4 border-white -translate-x-1/2 mt-1.5 z-10" />
                <div className="ml-10 sm:ml-0 sm:w-1/2 bg-celeiro-gray-100/50 rounded-xl p-5">
                  <span className="text-celeiro-yellow-dark font-extrabold text-lg">{item.ano}</span>
                  <h3 className="font-bold text-celeiro-green-dark mt-1">{item.titulo}</h3>
                  <p className="text-celeiro-gray-500 text-sm mt-1">{item.descricao}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Unidades */}
      <section className="py-20 bg-celeiro-green-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white text-center mb-12">Nossa <span className="text-celeiro-yellow">Unidade</span></h2>
          <div className="flex justify-center">
            {empresa.unidades.map((unidade, i) => (
              <motion.div key={unidade.nome} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-celeiro-yellow/30 transition-all">
                <MapPin className="w-8 h-8 text-celeiro-yellow mb-4" />
                <h3 className="text-white font-bold text-lg mb-2">{unidade.nome}</h3>
                <p className="text-white/60 text-sm">{unidade.descricao}</p>
                <span className="inline-block mt-3 bg-celeiro-yellow/20 text-celeiro-yellow text-xs font-bold px-3 py-1 rounded-full">{unidade.estado}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
