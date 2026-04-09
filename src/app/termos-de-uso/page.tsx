import { Metadata } from 'next';
import { FileText, Leaf } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Termos de Uso | Celeiro Sementes',
  description: 'Termos e condições de uso do site da Celeiro Sementes.',
};

export default function TermosDeUsoPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-celeiro-green-dark overflow-hidden">
        <div className="absolute inset-0 section-divider-dots opacity-10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-celeiro-yellow/20 text-celeiro-yellow px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-celeiro-yellow/30">
            <FileText className="w-4 h-4" /> Documentação Legal
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            Termos de <span className="text-celeiro-yellow">Uso</span>
          </h1>
          <p className="text-white/70 text-lg">
            Condições gerais de utilização do site da Celeiro Sementes.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-green">
          <p className="text-celeiro-gray-500 font-medium">Última atualização: Outubro de 2024</p>

          <h2 className="text-2xl font-bold text-celeiro-green-dark mt-10 mb-4">1. Aceitação dos Termos</h2>
          <p className="text-celeiro-gray-500 mb-6">
            Ao acessar e utilizar o site da <strong>Celeiro Sementes</strong> (celeirosementes.com.br), você concorda integralmente com os presentes Termos de Uso. Caso não concorde com qualquer disposição aqui descrita, solicitamos que não utilize o site.
          </p>

          <h2 className="text-2xl font-bold text-celeiro-green-dark mt-10 mb-4">2. Sobre o Site</h2>
          <p className="text-celeiro-gray-500 mb-6">
            O site da Celeiro Sementes tem como objetivo apresentar informações institucionais, portfólio de cultivares de soja, conteúdos educativos sobre o agronegócio e canais de contato para atendimento comercial e técnico. As informações publicadas são de caráter informativo e não substituem orientação técnica profissional.
          </p>

          <h2 className="text-2xl font-bold text-celeiro-green-dark mt-10 mb-4">3. Propriedade Intelectual</h2>
          <p className="text-celeiro-gray-500 mb-6">
            Todo o conteúdo do site — incluindo textos, imagens, logotipos, marcas registradas, design, layout e códigos — é de propriedade da Celeiro Sementes ou de seus parceiros e está protegido pela legislação brasileira de propriedade intelectual. A reprodução, distribuição ou uso não autorizado deste conteúdo é expressamente proibida sem autorização prévia por escrito.
          </p>

          <h2 className="text-2xl font-bold text-celeiro-green-dark mt-10 mb-4">4. Uso Permitido</h2>
          <p className="text-celeiro-gray-500 mb-4">Ao utilizar o site, você se compromete a:</p>
          <ul className="list-disc pl-6 text-celeiro-gray-500 mb-6 space-y-2">
            <li>Fornecer dados verdadeiros e atualizados nos formulários de contato.</li>
            <li>Não utilizar o site para fins ilícitos, fraudulentos ou que violem os direitos de terceiros.</li>
            <li>Não tentar acessar áreas restritas, servidores ou bancos de dados de forma não autorizada.</li>
            <li>Não reproduzir ou distribuir conteúdo do site sem a devida autorização.</li>
          </ul>

          <h2 className="text-2xl font-bold text-celeiro-green-dark mt-10 mb-4">5. Informações Técnicas sobre Cultivares</h2>
          <p className="text-celeiro-gray-500 mb-6">
            As informações técnicas sobre cultivares de soja apresentadas no site (PMR, ciclo, tecnologia, etc.) são fornecidas pelas obtentoras parceiras e têm caráter exclusivamente informativo. O desempenho real de cada cultivar pode variar conforme as condições edafoclimáticas, manejo e região de plantio. Para recomendações específicas, consulte sempre um engenheiro agrônomo.
          </p>

          <h2 className="text-2xl font-bold text-celeiro-green-dark mt-10 mb-4">6. Limitação de Responsabilidade</h2>
          <p className="text-celeiro-gray-500 mb-6">
            A Celeiro Sementes empenha-se para manter as informações do site atualizadas e precisas, mas não garante que o conteúdo esteja isento de erros ou omissões. O uso das informações do site é de responsabilidade exclusiva do usuário. A Celeiro Sementes não se responsabiliza por danos diretos ou indiretos decorrentes do uso ou da impossibilidade de uso do site.
          </p>

          <h2 className="text-2xl font-bold text-celeiro-green-dark mt-10 mb-4">7. Links Externos</h2>
          <p className="text-celeiro-gray-500 mb-6">
            O site pode conter links para sites de terceiros (parceiros, obtentoras, etc.). A Celeiro Sementes não se responsabiliza pelo conteúdo, políticas de privacidade ou práticas de sites externos.
          </p>

          <h2 className="text-2xl font-bold text-celeiro-green-dark mt-10 mb-4">8. Alterações nos Termos</h2>
          <p className="text-celeiro-gray-500 mb-6">
            A Celeiro Sementes reserva-se o direito de modificar estes Termos de Uso a qualquer momento, sem aviso prévio. As alterações entram em vigor imediatamente após sua publicação no site. Recomendamos que você revise esta página periodicamente.
          </p>

          <h2 className="text-2xl font-bold text-celeiro-green-dark mt-10 mb-4">9. Legislação Aplicável</h2>
          <p className="text-celeiro-gray-500 mb-6">
            Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Quaisquer disputas serão submetidas ao foro da comarca de Monte Alegre do Piauí - PI.
          </p>

          <h2 className="text-2xl font-bold text-celeiro-green-dark mt-10 mb-4">10. Contato</h2>
          <p className="text-celeiro-gray-500 mb-6">
            Para dúvidas ou esclarecimentos sobre estes Termos de Uso, entre em contato:
          </p>
          <div className="bg-celeiro-gray-100 p-6 rounded-xl border border-celeiro-gray-200">
            <p className="text-celeiro-green-dark font-semibold">Celeiro Sementes</p>
            <p className="text-celeiro-gray-500 text-sm mt-2">
              E-mail: <a href="mailto:contato@celeirosementes.com.br" className="text-celeiro-green hover:underline">contato@celeirosementes.com.br</a>
            </p>
            <p className="text-celeiro-gray-500 text-sm mt-1">
              Rod. BR-135, KM 51, Zona Rural, Monte Alegre do Piauí - PI
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
