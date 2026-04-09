import { Metadata } from 'next';
import { Leaf, ShieldCheck, Mail } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Política de Privacidade | Celeiro Sementes',
  description: 'Nossa política de privacidade e compromisso com a proteção dos seus dados e cumprimento da LGPD.',
};

export default function PoliticaPrivacidadePage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-celeiro-green-dark overflow-hidden">
        <div className="absolute inset-0 section-divider-dots opacity-10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-celeiro-yellow/20 text-celeiro-yellow px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-celeiro-yellow/30">
            <ShieldCheck className="w-4 h-4" /> Segurança e Transparência
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            Política de <span className="text-celeiro-yellow">Privacidade</span>
          </h1>
          <p className="text-white/70 text-lg">
            O compromisso da Celeiro Sementes com a sua privacidade e a proteção de seus dados pessoais.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-green">
          <p className="text-celeiro-gray-500 font-medium">Última atualização: Outubro de 2024</p>
          
          <h2 className="text-2xl font-bold text-celeiro-green-dark mt-10 mb-4">1. Introdução</h2>
          <p className="text-celeiro-gray-500 mb-6">
            A <strong>Celeiro Sementes</strong> valoriza a sua privacidade. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos os seus dados pessoais quando você acessa nosso site, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
          </p>

          <h2 className="text-2xl font-bold text-celeiro-green-dark mt-10 mb-4">2. Dados que Coletamos</h2>
          <p className="text-celeiro-gray-500 mb-4">Podemos coletar as seguintes categorias de dados pessoais:</p>
          <ul className="list-disc pl-6 text-celeiro-gray-500 mb-6 space-y-2">
            <li><strong>Dados fornecidos diretamente por você:</strong> Nome completo, e-mail, telefone/WhatsApp, cidade, estado e mensagem inserida voluntariamente em nossos formulários de contato.</li>
            <li><strong>Dados de navegação automática:</strong> Endereço IP, tipo de navegador, tempo de visita e páginas acessadas, coletados de forma genérica via cookies essenciais para otimização do site.</li>
          </ul>

          <h2 className="text-2xl font-bold text-celeiro-green-dark mt-10 mb-4">3. Como Usamos Seus Dados</h2>
          <p className="text-celeiro-gray-500 mb-4">Utilizamos os dados coletados exclusivamente para as seguintes finalidades:</p>
          <ul className="list-disc pl-6 text-celeiro-gray-500 mb-6 space-y-2">
            <li>Responder a dúvidas, solicitações de orçamentos e mensagens enviadas pelo formulário ou WhatsApp.</li>
            <li>Melhorar a experiência de navegação e desempenho tecnológico do nosso website.</li>
            <li>Cumprimento de obrigações legais ou judiciais.</li>
          </ul>
          <p className="text-celeiro-gray-500 mb-6">
            <strong>Não vendemos, alugamos ou comercializamos</strong> seus dados pessoais em nenhuma hipótese.
          </p>

          <h2 className="text-2xl font-bold text-celeiro-green-dark mt-10 mb-4">4. Armazenamento e Segurança</h2>
          <p className="text-celeiro-gray-500 mb-6">
            Adotamos medidas técnicas de segurança da informação rigorosas para proteger seus dados pessoais contra acesso não autorizado, alteração ou destruição. Seus dados são armazenados apenas pelo tempo necessário para cumprir as finalidades para as quais foram coletados ou requisitos legais aplicáveis.
          </p>

          <h2 className="text-2xl font-bold text-celeiro-green-dark mt-10 mb-4">5. Seus Direitos (LGPD)</h2>
          <p className="text-celeiro-gray-500 mb-4">Conforme a LGPD, você possui os seguintes direitos sobre seus dados pessoais:</p>
          <ul className="list-disc pl-6 text-celeiro-gray-500 mb-6 space-y-2">
            <li>Confirmação da existência de tratamento.</li>
            <li>Acesso aos seus dados retidos conosco.</li>
            <li>Correção de dados incompletos, inexatos ou desatualizados.</li>
            <li>Revogação do consentimento, exclusão e portabilidade dos dados, havendo viabilidade legal.</li>
          </ul>

          <h2 className="text-2xl font-bold text-celeiro-green-dark mt-10 mb-4">6. Cookies e Tecnologias</h2>
          <p className="text-celeiro-gray-500 mb-6">
            Nosso site utiliza cookies básicos para o seu funcionamento adequado (ex: salvar preferências de pop-ups ou estado do menu). Você pode desativar o uso de cookies nas configurações do seu navegador, mas isso poderá afetar certas funcionalidades do site.
          </p>

          <h2 className="text-2xl font-bold text-celeiro-green-dark mt-10 mb-4">7. Fale com a Celeiro</h2>
          <p className="text-celeiro-gray-500 mb-6">
            Se você tiver dúvidas sobre esta Política de Privacidade ou desejar exercer seus direitos referentes aos seus dados, entre em contato com nosso portal de atendimento central:
          </p>
          <div className="bg-celeiro-gray-100 p-6 rounded-xl border border-celeiro-gray-200">
            <div className="flex items-center gap-3 mb-3">
              <Mail className="w-5 h-5 text-celeiro-green" />
              <span className="font-semibold text-celeiro-green-dark">E-mail:</span>
              <a href="mailto:contato@celeirosementes.com.br" className="text-celeiro-green hover:underline">
                contato@celeirosementes.com.br
              </a>
            </div>
            <p className="text-celeiro-gray-500 text-sm mt-4">
              <strong>Sede Principal:</strong> Rod. BR-135, KM 51, Zona Rural, Monte Alegre do Piauí - PI
            </p>
          </div>

          <div className="mt-16 text-center">
            <Link href="/" className="inline-flex items-center gap-2 font-bold text-celeiro-green hover:text-celeiro-green-dark transition-colors">
              <Leaf className="w-4 h-4" /> Voltar para a Página Inicial
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
