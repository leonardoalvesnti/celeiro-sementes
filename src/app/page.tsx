'use client';

import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import {
  ChevronRight, Sprout, TrendingUp, Users, Leaf, Target, Eye,
  MessageCircle, MapPin, Phone, Shield, Zap, BarChart3,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { empresa } from '@/data/empresa';
import { sementes } from '@/data/sementes';
import { useEffect, useRef } from 'react';

/* ─── Data Constants ─── */

const stats = [
  { icon: Sprout, value: 27, suffix: '', label: 'Cultivares de alta performance' },
  { icon: TrendingUp, value: 30, suffix: '+', label: 'Anos de experiência no campo' },
  { icon: Users, value: 9, suffix: '', label: 'Estados com atuação direta' },
];

const parceiros = ['BRASMAX', 'LATITUDE', 'TMG', 'SoyTech'];

const lancamentos = sementes.filter((s) => s.lancamento);
const destaques = sementes.filter((s) => s.destaque).slice(0, 6);

/* ─── Components ─── */

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      animate(motionValue, value, { duration: 1.5, ease: 'easeOut' });
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = `${suffix === '+' ? '+' : ''}${latest}${suffix !== '+' ? suffix : ''}`;
      }
    });
    return unsubscribe;
  }, [rounded, suffix]);

  return <span ref={ref}>0</span>;
}

const sectionFadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
};

/* ─── Page ─── */

export default function HomePage() {
  return (
    <main className="w-full flex flex-col">

      {/* ═══════════════════════════════════════════════
          HERO — Cinematic Agro-Tech
          ═══════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-green-950 via-green-900 to-black py-20 lg:py-32">
        {/* Background layers */}
        <div className="absolute inset-0 z-0">
          {/* Stardust texture */}
          <div className="absolute inset-0 opacity-[0.15] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
          {/* Ambient glow orbs */}
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-green-500/10 rounded-full blur-[120px]" />
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 sm:px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* ── Text Content ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20"
              >
                <Leaf className="w-4 h-4 text-yellow-500" />
                <span className="text-xs font-bold tracking-[0.25em] text-yellow-500 uppercase">
                  Tecnologia de Safra
                </span>
              </motion.div>

              <h1 className="text-[2.75rem] xs:text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight">
                A força para{' '}
                <br className="block sm:hidden" />
                a sua{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                    cultivar
                  </span>
                  <motion.span
                    className="absolute -bottom-1 sm:-bottom-1.5 left-0 h-1 sm:h-1.5 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  />
                </span>{' '}
                <br className="block lg:hidden" />
                prosperar.
              </h1>

              <p className="text-lg sm:text-xl text-gray-300/90 max-w-lg leading-snug sm:leading-relaxed font-medium">
                <span className="hidden sm:inline">Elevando o potencial genético do campo com </span>Inovação Agro-Tech
                de última geração. Sementes que alimentam o futuro.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/sementes"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-green-950 font-bold rounded-xl shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] transition-all duration-300 hover:scale-105 active:scale-[0.98]"
                >
                  Nossas Sementes <ChevronRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/sobre"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-white/20 hover:bg-white/5 text-white font-bold rounded-xl transition-all duration-300"
                >
                  Conheça a Celeiro
                </Link>
              </div>
            </motion.div>

            {/* ── Glassmorphism Form ── */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative z-10 bg-white/10 backdrop-blur-md border border-white/20 p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-2xl"
            >
              {/* Glow behind form */}
              <div className="absolute -inset-1 bg-gradient-to-br from-yellow-400/10 to-green-400/5 rounded-3xl blur-xl -z-10" />

              <h3 className="text-2xl font-bold text-white mb-6">Impulsione sua safra</h3>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm text-gray-400 mb-2 font-medium">Nome Completo</label>
                  <input
                    type="text"
                    placeholder="Seu nome"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:border-yellow-500/50 focus:bg-white/10 focus:ring-2 focus:ring-yellow-500/20 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2 font-medium">WhatsApp</label>
                  <input
                    type="tel"
                    placeholder="(DDD) 99999-9999"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:border-yellow-500/50 focus:bg-white/10 focus:ring-2 focus:ring-yellow-500/20 transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-white text-green-950 font-bold rounded-xl hover:bg-yellow-500 hover:shadow-[0_0_20px_rgba(234,179,8,0.3)] transition-all duration-300 mt-2 active:scale-[0.98]"
                >
                  Falar com um Especialista
                </button>
              </form>

              <p className="text-gray-500 text-xs mt-4 text-center">
                Ao enviar, você concorda com nossa{' '}
                <Link href="/politica-de-privacidade" className="underline hover:text-gray-300 transition-colors">
                  Política de Privacidade
                </Link>.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          PARCEIROS — Logo Ticker
          ═══════════════════════════════════════════════ */}
      <section className="relative w-full py-8 bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 border-b border-white/5">
        <div className="max-w-[1400px] mx-auto w-full px-6 sm:px-8 lg:px-16">
          <div className="flex items-center justify-between gap-8">
            <span className="text-gray-500 text-xs font-semibold uppercase tracking-[0.25em] whitespace-nowrap hidden sm:block">
              Parceiros oficiais
            </span>
            <div className="flex overflow-hidden relative w-full sm:hidden">
              <div className="flex items-center gap-8 min-w-max animate-marquee">
                {[...parceiros, ...parceiros, ...parceiros].map((parceiro, i) => (
                  <span
                    key={`${parceiro}-${i}`}
                    className="text-gray-500/60 font-extrabold text-sm tracking-[0.2em]"
                  >
                    {parceiro}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Desktop */}
            <div className="hidden sm:flex items-center justify-center gap-8 sm:gap-16 flex-1">
              {parceiros.map((parceiro, i) => (
                <motion.span
                  key={parceiro}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-gray-500/60 font-extrabold text-sm sm:text-lg tracking-[0.2em] hover:text-yellow-400 transition-colors duration-300 cursor-default"
                >
                  {parceiro}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          STATS — Key Metrics
          ═══════════════════════════════════════════════ */}
      <section className="relative w-full py-16 lg:py-32 bg-white overflow-hidden">
        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(circle,#1e4321_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 sm:px-8 lg:px-16">
          <motion.div {...sectionFadeIn} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-yellow-600 text-xs font-bold uppercase tracking-[0.25em] mb-4">
              <BarChart3 className="w-4 h-4" /> Nossos números
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-celeiro-green-dark">
              O que nos define
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="flex items-center gap-5 p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group cursor-default"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-celeiro-green-dark to-celeiro-green flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-500 shadow-lg shadow-celeiro-green-dark/10">
                  <stat.icon className="w-8 h-8 text-celeiro-yellow" />
                </div>
                <div>
                  <span className="text-4xl font-extrabold text-celeiro-green-dark block">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="text-celeiro-gray-500 text-sm">{stat.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          LANÇAMENTOS — Product Grid
          ═══════════════════════════════════════════════ */}
      <section className="relative w-full py-16 lg:py-32 bg-gray-50 overflow-hidden">
        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 sm:px-8 lg:px-16 flex flex-col gap-14">
          <motion.div {...sectionFadeIn} className="text-center">
            <span className="inline-flex items-center gap-2 text-yellow-600 text-xs font-bold uppercase tracking-[0.25em] mb-4">
              <Zap className="w-4 h-4" /> Safra 2025/26
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-celeiro-green-dark mb-4">
              Nossos Lançamentos
            </h2>
            <p className="text-celeiro-gray-500 max-w-2xl mx-auto text-lg">
              Conheça as cultivares mais recentes com tecnologias de ponta para máxima produtividade na sua safra.
            </p>
          </motion.div>

          <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-5 pb-4 -mx-6 px-6 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible sm:snap-none sm:pb-0">
            {lancamentos.slice(0, 8).map((semente, index) => (
              <motion.div
                key={semente.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`min-w-[85vw] snap-center sm:min-w-0 bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 rounded-2xl overflow-hidden group ${index >= 3 ? 'hidden sm:block' : ''}`}
              >
                <div className="relative h-44 bg-gradient-to-br from-celeiro-green-dark/5 via-gray-50 to-yellow-50/30 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image src={semente.imagem} alt={semente.nome} width={200} height={100} className="object-contain max-h-32 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-yellow-500 text-green-950 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                      Lançamento
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="bg-celeiro-green-dark/90 text-white text-xs font-bold px-2.5 py-1 rounded-full backdrop-blur-sm">
                      {semente.marca}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-celeiro-green-dark text-lg mb-1.5 group-hover:text-celeiro-green transition-colors">
                    {semente.nome}
                  </h3>
                  <p className="text-celeiro-gray-500 text-sm mb-3 line-clamp-2">
                    {semente.descricaoCurta}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="text-xs bg-celeiro-green-dark/5 text-celeiro-green-dark/70 px-2.5 py-1 rounded-lg font-medium">
                      {semente.caracteristicas.ciclo}
                    </span>
                    <span className="text-xs bg-green-50 text-celeiro-green px-2.5 py-1 rounded-lg font-medium">
                      {semente.caracteristicas.tecnologia}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/sementes"
              className="inline-flex items-center gap-2 bg-celeiro-green-dark hover:bg-celeiro-green text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-[1.03] active:scale-[0.98]"
            >
              Ver Catálogo Completo
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          QUEM SOMOS — Heritage + Mission
          ═══════════════════════════════════════════════ */}
      <section className="relative w-full py-16 lg:py-32 bg-white overflow-hidden">
        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 sm:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Column 1: 30 Years Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="h-96 lg:h-[520px] rounded-3xl overflow-hidden shadow-2xl flex flex-col items-center justify-center text-center px-6 relative">
              {/* Background photo */}
              <Image
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80"
                alt="Lavoura de soja"
                fill
                className="object-cover"
              />
              {/* Dark overlay for text legibility */}
              <div className="absolute inset-0 bg-green-950/80 mix-blend-multiply" />
              {/* Ambient glow inside card */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-yellow-400/[0.08] rounded-full blur-[80px]" />
              <span className="relative z-10 bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent font-extrabold text-8xl block leading-none mb-3">+30</span>
              <span className="relative z-10 text-white text-xl tracking-wide font-medium">Anos cultivando o futuro</span>
            </div>
          </motion.div>

          {/* Column 2: Mission & Vision */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-2 text-yellow-600 text-xs font-bold uppercase tracking-[0.25em]">
              <Shield className="w-4 h-4" /> Quem Somos
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-celeiro-green-dark leading-tight tracking-tight">
              Tradição e inovação no{' '}
              <span className="bg-gradient-to-r from-celeiro-green-light to-celeiro-green bg-clip-text text-transparent">coração do agronegócio</span>
            </h2>

            <p className="text-celeiro-gray-500 leading-relaxed text-lg">
              {empresa.descricao}
            </p>
            <p className="text-celeiro-gray-500 leading-relaxed hidden sm:block">
              Com sede em Monte Alegre do Piauí,
              levamos as melhores genéticas de soja a produtores de todo o Brasil,
              sempre com foco em qualidade, inovação e atendimento técnico especializado.
            </p>

            {/* Mission & Vision glassmorphism-lite cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-celeiro-green-dark to-celeiro-green flex items-center justify-center flex-shrink-0 shadow-md shadow-celeiro-green-dark/10">
                  <Target className="w-5 h-5 text-celeiro-yellow" />
                </div>
                <div>
                  <h4 className="font-bold text-celeiro-green-dark text-sm mb-1">Missão</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">{empresa.historia.missao}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-celeiro-green-dark to-celeiro-green flex items-center justify-center flex-shrink-0 shadow-md shadow-celeiro-green-dark/10">
                  <Eye className="w-5 h-5 text-celeiro-yellow" />
                </div>
                <div>
                  <h4 className="font-bold text-celeiro-green-dark text-sm mb-1">Visão</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">{empresa.historia.visao}</p>
                </div>
              </div>
            </div>

            <Link
              href="/sobre"
              className="inline-flex items-center gap-2 text-celeiro-green font-bold hover:text-celeiro-green-dark transition-colors group"
            >
              Conheça nossa história
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          DESTAQUES — Dark Glassmorphism Grid
          ═══════════════════════════════════════════════ */}
      <section className="relative w-full py-16 lg:py-32 bg-gradient-to-br from-green-950 via-green-900 to-black overflow-hidden">
        {/* Ambient glow orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/[0.05] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-500/[0.04] rounded-full blur-[100px] pointer-events-none" />
        {/* Stardust */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <motion.div {...sectionFadeIn} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-yellow-400 text-xs font-bold uppercase tracking-[0.25em] mb-4 border border-yellow-500/20 bg-yellow-500/10 px-4 py-1.5 rounded-full">
              <TrendingUp className="w-4 h-4" /> Top cultivares
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
              Cultivares em{' '}
              <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">Destaque</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Selecionamos as melhores genéticas para cada região e tipo de solo.
            </p>
          </motion.div>

          <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:overflow-visible sm:snap-none sm:pb-0">
            {destaques.map((semente, index) => {
              // Hides non-Latitude seeds on mobile screens
              const hideOnMobileClass = semente.marca !== 'Latitude' ? 'hidden sm:block' : '';
              
              return (
                <motion.div
                  key={semente.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className={`min-w-[85vw] snap-center sm:min-w-0 bg-white/[0.08] backdrop-blur-md rounded-2xl p-7 border border-white/[0.12] hover:border-yellow-500/30 hover:bg-white/[0.12] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group ${hideOnMobileClass}`}
                >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-yellow-400 text-xs font-bold uppercase tracking-[0.25em]">
                      {semente.marca}
                    </span>
                    <h3 className="text-white font-bold text-lg mt-1 group-hover:text-yellow-400 transition-colors">{semente.nome}</h3>
                  </div>
                  {semente.lancamento && (
                    <span className="bg-yellow-500/15 text-yellow-400 text-xs font-bold px-2.5 py-1 rounded-full border border-yellow-500/20">
                      Novo
                    </span>
                  )}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{semente.descricaoCurta}</p>

                {/* Tech specs */}
                <div className="space-y-3 pt-5 border-t border-white/10">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">Ciclo</span>
                    <span className="text-white text-sm font-semibold">{semente.caracteristicas.ciclo}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">PMR</span>
                    <span className="text-white text-sm font-semibold">{semente.caracteristicas.pmr}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">Tecnologia</span>
                    <span className="text-celeiro-green-light text-sm font-bold">
                      {semente.caracteristicas.tecnologia}
                    </span>
                  </div>
                </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CTA BANNER — Final Call-to-Action
          ═══════════════════════════════════════════════ */}
      <section className="relative w-full py-16 lg:py-24 bg-celeiro-yellow overflow-hidden">
        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[radial-gradient(circle,#1e4321_1.5px,transparent_1.5px)] bg-[size:28px_28px]" />

        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 sm:px-8 lg:px-16 text-center flex flex-col items-center gap-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-green-950 tracking-tight">
            Pronto para impulsionar sua safra?
          </h2>
          <p className="text-green-950/60 text-lg max-w-2xl">
            Entre em contato com nossa equipe técnica e descubra as melhores cultivares para a sua região.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${empresa.contato.whatsappNumero}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre as sementes da Celeiro.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-green-950 hover:bg-green-900 text-white font-bold text-lg px-10 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-green-950/20 hover:scale-[1.03] active:scale-[0.98]"
            >
              <MessageCircle className="w-5 h-5" /> Fale pelo WhatsApp
            </a>
            <Link
              href="/equipe"
              className="inline-flex items-center justify-center gap-2 border-2 border-green-950/30 hover:border-green-950 hover:bg-green-950 hover:text-white text-green-950 font-bold text-lg px-10 py-4 rounded-xl transition-all duration-300"
            >
              Encontre um Representante
            </Link>
          </div>
          <div className="flex items-center justify-center gap-6 sm:gap-10 mt-2">
            <div className="flex items-center gap-2 text-green-950/50">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">{empresa.contato.telefoneFixo}</span>
            </div>
            <div className="w-px h-4 bg-green-950/20" />
            <div className="flex items-center gap-2 text-green-950/50">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">Monte Alegre do Piauí - PI</span>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
