'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from 'lucide-react';
import { empresa } from '@/data/empresa';
import { useState } from 'react';

const estados = [
  'AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA',
  'PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'
];

export default function ContatoPage() {
  const [formData, setFormData] = useState({ nome: '', email: '', whatsapp: '', estado: '', cidade: '', mensagem: '' });
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => setEnviado(false), 5000);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-celeiro-green-dark overflow-hidden">
        <div className="absolute inset-0 section-divider-dots opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
              Fale <span className="text-celeiro-yellow">Conosco</span>
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Estamos prontos para atender você. Envie uma mensagem ou fale diretamente com nosso time.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-celeiro-gray-100/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form - 2 cols */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-sm border border-celeiro-gray-200/50">
              <h2 className="text-2xl font-extrabold text-celeiro-green-dark mb-6">Envie sua mensagem</h2>

              {enviado ? (
                <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-16">
                  <div className="w-20 h-20 rounded-full bg-celeiro-green-light/10 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-10 h-10 text-celeiro-green-light" />
                  </div>
                  <h3 className="text-xl font-bold text-celeiro-green-dark mb-2">Mensagem enviada!</h3>
                  <p className="text-celeiro-gray-500">Entraremos em contato em breve.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-celeiro-gray-800 mb-1.5">Nome completo *</label>
                      <input type="text" required value={formData.nome} onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        className="w-full border border-celeiro-gray-200 rounded-xl px-4 py-3 text-celeiro-gray-800 focus:outline-none focus:ring-2 focus:ring-celeiro-green-light/50 focus:border-celeiro-green-light transition-all" placeholder="Seu nome" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-celeiro-gray-800 mb-1.5">E-mail *</label>
                      <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full border border-celeiro-gray-200 rounded-xl px-4 py-3 text-celeiro-gray-800 focus:outline-none focus:ring-2 focus:ring-celeiro-green-light/50 focus:border-celeiro-green-light transition-all" placeholder="seu@email.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-celeiro-gray-800 mb-1.5">WhatsApp *</label>
                      <input type="tel" required value={formData.whatsapp} onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        className="w-full border border-celeiro-gray-200 rounded-xl px-4 py-3 text-celeiro-gray-800 focus:outline-none focus:ring-2 focus:ring-celeiro-green-light/50 focus:border-celeiro-green-light transition-all" placeholder="(00) 00000-0000" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-celeiro-gray-800 mb-1.5">Estado *</label>
                      <select required value={formData.estado} onChange={(e) => setFormData({ ...formData, estado: e.target.value })}
                        className="w-full border border-celeiro-gray-200 rounded-xl px-4 py-3 text-celeiro-gray-800 focus:outline-none focus:ring-2 focus:ring-celeiro-green-light/50 focus:border-celeiro-green-light transition-all bg-white">
                        <option value="">Selecione</option>
                        {estados.map((uf) => <option key={uf} value={uf}>{uf}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-celeiro-gray-800 mb-1.5">Cidade</label>
                      <input type="text" value={formData.cidade} onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
                        className="w-full border border-celeiro-gray-200 rounded-xl px-4 py-3 text-celeiro-gray-800 focus:outline-none focus:ring-2 focus:ring-celeiro-green-light/50 focus:border-celeiro-green-light transition-all" placeholder="Sua cidade" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-celeiro-gray-800 mb-1.5">Mensagem *</label>
                    <textarea required rows={5} value={formData.mensagem} onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                      className="w-full border border-celeiro-gray-200 rounded-xl px-4 py-3 text-celeiro-gray-800 focus:outline-none focus:ring-2 focus:ring-celeiro-green-light/50 focus:border-celeiro-green-light transition-all resize-none" placeholder="Como podemos ajudar?" />
                  </div>
                  <button type="submit"
                    className="w-full sm:w-auto bg-celeiro-green-dark hover:bg-celeiro-green text-white font-bold py-3.5 px-8 rounded-xl transition-all hover:shadow-lg text-lg inline-flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    Enviar mensagem
                  </button>
                </form>
              )}
            </motion.div>

            {/* Sidebar - Contact card */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="space-y-6">
              {/* Corporate card */}
              <div className="bg-celeiro-green-dark rounded-2xl p-8 text-white">
                <h3 className="font-bold text-xl mb-6 text-celeiro-yellow">Dados Corporativos</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-celeiro-green-light mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-white/50 text-xs block">Telefone Fixo</span>
                      <a href={`tel:${empresa.contato.telefoneFixo.replace(/\D/g, '')}`} className="text-white font-semibold hover:text-celeiro-yellow transition-colors">
                        {empresa.contato.telefoneFixo}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MessageCircle className="w-5 h-5 text-celeiro-green-light mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-white/50 text-xs block">WhatsApp</span>
                      <a href={`https://wa.me/${empresa.contato.whatsappNumero}`} target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-celeiro-yellow transition-colors">
                        {empresa.contato.whatsapp}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-celeiro-green-light mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-white/50 text-xs block">E-mail</span>
                      <a href={`mailto:${empresa.contato.email}`} className="text-white font-semibold hover:text-celeiro-yellow transition-colors text-sm break-all">
                        {empresa.contato.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-celeiro-green-light mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-white/50 text-xs block">Endereço</span>
                      <span className="text-white/90 text-sm">{empresa.endereco.completo}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-celeiro-green-light mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-white/50 text-xs block">Horário de Atendimento</span>
                      <span className="text-white/90 text-sm">Seg a Sex, 8h às 17h</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a href={`https://wa.me/${empresa.contato.whatsappNumero}?text=${encodeURIComponent('Olá! Gostaria de falar com a equipe Celeiro Sementes.')}`}
                target="_blank" rel="noopener noreferrer"
                className="block bg-[#25D366] hover:bg-[#1da851] text-white rounded-2xl p-6 text-center transition-all hover:shadow-lg">
                <MessageCircle className="w-10 h-10 mx-auto mb-3" />
                <span className="font-bold text-lg block">Prefere o WhatsApp?</span>
                <span className="text-white/80 text-sm">Clique aqui e fale agora!</span>
              </a>
            </motion.div>
          </div>

          {/* Google Maps embed */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mt-12 rounded-2xl overflow-hidden shadow-sm border border-celeiro-gray-200/50 h-80">
            <iframe
              src="https://www.google.com/maps?q=Fazenda+Celeiro,+Gleba+dos+Patos,+Zona+Rural,+64940-000,+Monte+Alegre+do+Piauí,+PI&output=embed"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              title="Fazenda Celeiro - Monte Alegre do Piauí, PI" />
          </motion.div>
        </div>
      </section>
    </>
  );
}
