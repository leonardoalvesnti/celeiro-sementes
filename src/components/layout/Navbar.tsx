'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';
import { empresa } from '@/data/empresa';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2 border-b border-celeiro-gray-200/50'
          : 'bg-white/90 backdrop-blur-sm py-4'
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group" aria-label="Celeiro Sementes - Home">
            <div className="relative h-10 w-40 sm:h-12 sm:w-48">
              <Image
                src="/images/logo-celeiro.png"
                alt="Celeiro Sementes"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-celeiro-green-dark/80 hover:text-celeiro-green px-3 py-2 rounded-lg text-sm font-semibold transition-colors hover:bg-celeiro-green-dark/5"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${empresa.contato.telefoneFixo.replace(/\D/g, '')}`}
              className="flex items-center gap-2 text-celeiro-green-dark/70 hover:text-celeiro-green-dark text-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">{empresa.contato.telefoneFixo}</span>
            </a>
            <a
              href={`https://wa.me/${empresa.contato.whatsappNumero}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-celeiro-green-light hover:bg-celeiro-green text-white font-bold text-sm px-5 py-2.5 rounded-full transition-all hover:shadow-lg hover:scale-105"
            >
              Fale Conosco
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden text-celeiro-green-dark p-2 rounded-lg hover:bg-celeiro-green-dark/10 transition-colors"
            aria-label={isMobileOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-0 top-0 bg-celeiro-green-dark z-40"
          >
            <div className="flex flex-col items-center justify-center min-h-screen gap-6 px-6">
              {/* Close button at top */}
              <button
                onClick={() => setIsMobileOpen(false)}
                className="absolute top-5 right-5 text-white p-2 rounded-lg hover:bg-white/10"
                aria-label="Fechar menu"
              >
                <X className="w-7 h-7" />
              </button>

              {/* Logo */}
              <div className="relative h-16 w-56 mb-4">
                <Image
                  src="/images/logo-celeiro.png"
                  alt="Celeiro Sementes"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>

              {/* Links */}
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="text-white text-2xl font-bold hover:text-celeiro-yellow transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile CTA */}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                href={`https://wa.me/${empresa.contato.whatsappNumero}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 bg-celeiro-green-light hover:bg-celeiro-green text-white font-bold text-lg px-8 py-4 rounded-full transition-all inline-flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" /> Fale pelo WhatsApp
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
