import { notFound } from 'next/navigation';
import { artigos } from '@/data/blog';
import { formatDateBR } from '@/lib/utils';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag, User } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import type { Metadata } from 'next';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return artigos.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const artigo = artigos.find((a) => a.slug === slug);
  if (!artigo) return {};
  return { title: artigo.titulo, description: artigo.resumo };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const artigo = artigos.find((a) => a.slug === slug);
  if (!artigo) notFound();

  return (
    <>
      <section className="relative pt-32 pb-16 bg-celeiro-green-dark overflow-hidden">
        <div className="absolute inset-0 section-divider-dots opacity-10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Link href="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Voltar ao Blog
            </Link>
            <span className="inline-block bg-celeiro-yellow text-celeiro-green-dark text-xs font-bold px-3 py-1 rounded-full mb-4">
              {artigo.categoria}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
              {artigo.titulo}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-white/60 text-sm">
              <span className="flex items-center gap-1.5"><User className="w-4 h-4" />{artigo.autor}</span>
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{formatDateBR(artigo.dataPublicacao)}</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-white">
        <AnimatedSection delay={0.2}>
          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-green max-w-none
            prose-headings:text-celeiro-green-dark prose-headings:font-extrabold
            prose-p:text-celeiro-gray-500 prose-p:leading-relaxed
            prose-strong:text-celeiro-green-dark
            prose-a:text-celeiro-green prose-a:no-underline hover:prose-a:underline
            prose-li:text-celeiro-gray-500">
            <div dangerouslySetInnerHTML={{ __html: artigo.conteudo.replace(/\n/g, '<br/>').replace(/# (.*?)(<br\/>)/g, '<h1>$1</h1>').replace(/## (.*?)(<br\/>)/g, '<h2>$1</h2>').replace(/### (.*?)(<br\/>)/g, '<h3>$1</h3>') }} />
          </article>
        </AnimatedSection>

        {/* Tags */}
        <AnimatedSection delay={0.3}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-celeiro-gray-200">
            <div className="flex flex-wrap gap-2">
              {artigo.tags.map((tag) => (
                <span key={tag} className="inline-flex items-center gap-1 bg-celeiro-gray-100 text-celeiro-gray-500 text-sm px-3 py-1.5 rounded-full">
                  <Tag className="w-3.5 h-3.5" />{tag}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
