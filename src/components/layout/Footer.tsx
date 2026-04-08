import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { empresa } from '@/data/empresa';
import { NAV_LINKS } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-celeiro-green-dark text-white relative overflow-hidden">
      {/* Organic top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-celeiro-yellow via-celeiro-green-light to-celeiro-yellow" />

      {/* Dotted background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="section-divider-dots w-full h-full" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-sm text-gray-300">
          {/* Column 1: Logo & About */}
          <div>
            <div className="mb-6">
              <div className="relative w-44 h-16">
                <Image
                  src="/images/logo-celeiro.png"
                  alt="Celeiro Sementes"
                  fill
                  className="object-contain object-left brightness-0 invert"
                  sizes="176px"
                />
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {empresa.descricao}
            </p>

            {/* Social media */}
            <div className="flex gap-3">
              <a
                href={empresa.redesSociais.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-celeiro-green-light flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={empresa.redesSociais.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-celeiro-green-light flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={empresa.redesSociais.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-celeiro-green-light flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Links */}
          <div>
            <h3 className="text-celeiro-yellow font-bold text-sm uppercase tracking-wider mb-6">
              Navegação
            </h3>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-celeiro-yellow text-sm transition-colors inline-flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-celeiro-green-light" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-celeiro-yellow font-bold text-sm uppercase tracking-wider mb-6">
              Contato
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href={`tel:${empresa.contato.telefoneFixo.replace(/\D/g, '')}`}
                  className="flex items-start gap-3 text-white/60 hover:text-white text-sm transition-colors"
                >
                  <Phone className="w-5 h-5 mt-0.5 text-celeiro-green-light flex-shrink-0" />
                  <span>{empresa.contato.telefoneFixo}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${empresa.contato.whatsappNumero}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/60 hover:text-white text-sm transition-colors"
                >
                  <Phone className="w-5 h-5 mt-0.5 text-celeiro-green-light flex-shrink-0" />
                  <span>{empresa.contato.whatsapp} (WhatsApp)</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${empresa.contato.email}`}
                  className="flex items-start gap-3 text-white/60 hover:text-white text-sm transition-colors"
                >
                  <Mail className="w-5 h-5 mt-0.5 text-celeiro-green-light flex-shrink-0" />
                  <span>{empresa.contato.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/60 text-sm">
                  <MapPin className="w-5 h-5 mt-0.5 text-celeiro-green-light flex-shrink-0" />
                  <span>{empresa.endereco.completo}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Partners */}
          <div>
            <h3 className="text-celeiro-yellow font-bold text-sm uppercase tracking-wider mb-6">
              Parceiros
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {empresa.parceiros.map((parceiro) => (
                <div
                  key={parceiro}
                  className="bg-white/10 rounded-lg p-3 flex items-center justify-center hover:bg-white/15 transition-colors"
                >
                  <span className="text-white/80 text-sm font-semibold">{parceiro}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-6" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm text-center sm:text-left">
            © {currentYear} Celeiro Sementes. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link
              href="/politica-de-privacidade"
              className="text-white/50 hover:text-white/80 text-sm transition-colors"
            >
              Política de Privacidade
            </Link>
            <Link
              href="/termos-de-uso"
              className="text-white/50 hover:text-white/80 text-sm transition-colors"
            >
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
