'use client';

import { motion } from 'framer-motion';
import { Shield, Leaf, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { empresa } from '@/data/empresa';

const beneficios = [
  { icon: Shield, titulo: 'Preservação da Tecnologia', descricao: 'Mantém a eficácia das proteínas Bt contra lagartas, garantindo o retorno do investimento em biotecnologia.' },
  { icon: Leaf, titulo: 'Sustentabilidade', descricao: 'Reduz o uso de inseticidas químicos a longo prazo, preservando o meio ambiente e a saúde do solo.' },
  { icon: CheckCircle, titulo: 'Obrigação Legal', descricao: 'O plantio de refúgio é obrigatório para todas as cultivares com tecnologia Bt, conforme normas do MAPA.' },
];

const passos = [
  { numero: '01', titulo: 'Proporção', descricao: 'Plante no mínimo 20% da área total com cultivares sem tecnologia Bt (convencional ou RR).' },
  { numero: '02', titulo: 'Proximidade', descricao: 'As faixas de refúgio devem estar a no máximo 800 metros da área Bt.' },
  { numero: '03', titulo: 'Manejo', descricao: 'O refúgio pode e deve receber aplicações de inseticidas quando o nível de dano econômico for atingido.' },
  { numero: '04', titulo: 'Simultaneidade', descricao: 'Plante o refúgio na mesma época do plantio da área Bt para sincronizar o ciclo dos insetos.' },
];

export default function RefugioPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-celeiro-green-dark overflow-hidden">
        <div className="absolute inset-0 section-divider-leaves opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 bg-celeiro-yellow/20 text-celeiro-yellow px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-celeiro-yellow/30">
              <Leaf className="w-4 h-4" /> Preservação
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Áreas de <span className="text-celeiro-yellow">Refúgio</span>
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Preservar a biotecnologia Bt é garantir a sustentabilidade e a produtividade da sua lavoura por muitas safras.
            </p>
          </motion.div>
        </div>
      </section>

      {/* O que é */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-block bg-celeiro-green-light/10 text-celeiro-green px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Entenda</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-celeiro-green-dark mb-6">
                O que são as <span className="text-celeiro-green-light">áreas de refúgio?</span>
              </h2>
              <p className="text-celeiro-gray-500 leading-relaxed mb-4">
                As áreas de refúgio são parcelas da lavoura (mínimo de 20% da área total) plantadas com cultivares de soja <strong>sem tecnologia Bt</strong>.
                Essa prática permite que insetos suscetíveis sobrevivam e se reproduzam com eventuais insetos resistentes, diluindo genes de resistência na população.
              </p>
              <p className="text-celeiro-gray-500 leading-relaxed mb-6">
                Sem o refúgio, a pressão de seleção faria com que apenas insetos resistentes às proteínas Bt sobrevivessem, tornando a tecnologia ineficaz em poucos anos.
              </p>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-celeiro-yellow/10 border border-celeiro-yellow/20">
                <AlertTriangle className="w-6 h-6 text-celeiro-yellow-dark flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-celeiro-green-dark text-sm">Atenção</h4>
                  <p className="text-celeiro-gray-500 text-sm mt-1">
                    O não cumprimento da área de refúgio pode gerar sanções legais e compromete a sustentabilidade da biotecnologia para todos os produtores.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="relative bg-gradient-to-br from-celeiro-green-dark to-celeiro-green rounded-2xl p-8 text-white">
              <div className="absolute inset-0 section-divider-dots opacity-10 rounded-2xl" />
              <div className="relative">
                <h3 className="font-extrabold text-2xl mb-6 text-celeiro-yellow">Proporção ideal</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-xl bg-celeiro-green-light/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-3xl font-extrabold text-celeiro-yellow">80%</span>
                    </div>
                    <div>
                      <span className="font-bold">Área Bt</span>
                      <p className="text-white/60 text-sm">Cultivares com tecnologia Bt (Intacta, I2X)</p>
                    </div>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-xl bg-celeiro-yellow/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-3xl font-extrabold text-celeiro-yellow">20%</span>
                    </div>
                    <div>
                      <span className="font-bold">Área de Refúgio</span>
                      <p className="text-white/60 text-sm">Cultivares convencionais ou RR (sem Bt)</p>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-celeiro-gray-100/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-celeiro-green-dark text-center mb-12">Por que plantar <span className="text-celeiro-green-light">refúgio?</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {beneficios.map((b, i) => (
              <motion.div key={b.titulo} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-celeiro-green-dark flex items-center justify-center mb-5">
                  <b.icon className="w-7 h-7 text-celeiro-yellow" />
                </div>
                <h3 className="font-bold text-celeiro-green-dark text-lg mb-3">{b.titulo}</h3>
                <p className="text-celeiro-gray-500 text-sm leading-relaxed">{b.descricao}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Plantar */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-celeiro-green-dark text-center mb-12">Como plantar o <span className="text-celeiro-yellow">refúgio</span> corretamente</h2>
          <div className="space-y-6">
            {passos.map((p, i) => (
              <motion.div key={p.numero} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex items-start gap-6 p-6 rounded-2xl bg-celeiro-gray-100/50 hover:bg-celeiro-gray-100 transition-colors">
                <span className="text-4xl font-extrabold text-celeiro-green-light/30 flex-shrink-0">{p.numero}</span>
                <div>
                  <h3 className="font-bold text-celeiro-green-dark text-lg">{p.titulo}</h3>
                  <p className="text-celeiro-gray-500 text-sm mt-1">{p.descricao}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-celeiro-green-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Precisa de cultivares para <span className="text-celeiro-yellow">refúgio?</span></h2>
          <p className="text-white/60 text-lg mb-8">A Celeiro Sementes oferece cultivares convencionais e RR ideais para compor suas áreas de refúgio.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sementes" className="inline-flex items-center justify-center gap-2 bg-celeiro-yellow hover:bg-celeiro-yellow-dark text-celeiro-green-dark font-bold text-lg px-8 py-4 rounded-full transition-all">
              Ver Cultivares RR <ArrowRight className="w-5 h-5" />
            </Link>
            <a href={`https://wa.me/${empresa.contato.whatsappNumero}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-celeiro-yellow text-white font-semibold text-lg px-8 py-4 rounded-full transition-all">
              Fale com um Consultor
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
