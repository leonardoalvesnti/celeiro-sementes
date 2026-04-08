// ============================================
// CELEIRO SEMENTES — Utility Functions
// ============================================

import { type ClassValue, clsx } from 'clsx';

/**
 * Merge Tailwind classes with clsx (install clsx if needed,
 * otherwise use this simplified version)
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

/**
 * Format phone number for WhatsApp link
 * Input:  "(61) 99829-2255"
 * Output: "5561998292255"
 */
export function formatPhoneForWhatsApp(phone: string): string {
  return '55' + phone.replace(/\D/g, '');
}

/**
 * Format date string to Brazilian format
 * Input:  "2025-09-15"
 * Output: "15 de setembro de 2025"
 */
export function formatDateBR(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

/**
 * Generate WhatsApp message link
 */
export function getWhatsAppLink(numero: string, mensagem?: string): string {
  const base = `https://wa.me/${numero}`;
  if (mensagem) {
    return `${base}?text=${encodeURIComponent(mensagem)}`;
  }
  return base;
}

/**
 * Slugify a string
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/**
 * Truncate text to a given length
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}
