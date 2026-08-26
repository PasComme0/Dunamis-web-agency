'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';

const articles = [
  {
    id: '1',
    title: 'Le ROI de l\'accessibilité dans les applications web modernes.',
    excerpt: 'L\'accessibilité est souvent traitée comme une simple case à cocher. Nous explorons comment le design inclusif impacte directement les taux de conversion, le SEO et le marché total adressable.',
    category: 'UX/UI',
    date: '12 Août 2026',
    readTime: '6 min de lecture',
    image: 'https://picsum.photos/seed/Dunamis-blog-1/1200/800',
    href: '/resources/roi-of-accessibility'
  },
  {
    id: '2',
    title: 'Pourquoi votre prochain site d\'entreprise ne devrait pas utiliser de Page Builder.',
    excerpt: 'Les coûts cachés des constructeurs visuels dans les environnements d\'entreprise, de la dégradation des performances à l\'architecture non évolutive et à la dette technique.',
    category: 'Développement Web',
    date: '28 Juil 2026',
    readTime: '8 min de lecture',
    image: 'https://picsum.photos/seed/Dunamis-blog-2/1200/800',
    href: '/resources/page-builders-hidden-costs'
  },
  {
    id: '3',
    title: 'Faire le pont entre la stratégie de marque et l\'exécution numérique.',
    excerpt: 'Une belle charte graphique est inutile si elle ne peut pas être traduite systématiquement en une interface numérique fonctionnelle et performante.',
    category: 'Stratégie Digitale',
    date: '15 Juin 2026',
    readTime: '5 min de lecture',
    image: 'https://picsum.photos/seed/Dunamis-blog-3/1200/800',
    href: '/resources/brand-strategy-digital-execution'
  },
  {
    id: '4',
    title: 'Le Contexte d\'Abord est le nouveau standard de l\'UX Mobile.',
    excerpt: 'Le design mobile-first n\'est plus suffisant. Les utilisateurs modernes exigent des interfaces sensibles au contexte qui s\'adaptent à leur environnement immédiat et à leurs intentions.',
    category: 'Design',
    date: '04 Mai 2026',
    readTime: '7 min de lecture',
    image: 'https://picsum.photos/seed/Dunamis-blog-4/1200/800',
    href: '/resources/context-first-mobile-ux'
  },
  {
    id: '5',
    title: 'La dette technique comme passif commercial.',
    excerpt: 'Comment les décisions techniques différées se cumulent au fil du temps, ralentissant la vitesse de développement des fonctionnalités et augmentant les coûts d\'infrastructure.',
    category: 'Business',
    date: '22 Avr 2026',
    readTime: '10 min de lecture',
    image: 'https://picsum.photos/seed/Dunamis-blog-5/1200/800',
    href: '/resources/technical-debt-liability'
  },
  {
    id: '6',
    title: 'Plaidoyer pour les interfaces monochromatiques dans le SaaS B2B.',
    excerpt: 'Pourquoi la suppression des palettes de couleurs saturées peut en réalité améliorer la compréhension des données et réduire la charge cognitive pour les utilisateurs professionnels.',
    category: 'UX/UI',
    date: '10 Mar 2026',
    readTime: '4 min de lecture',
    image: 'https://picsum.photos/seed/Dunamis-blog-6/1200/800',
    href: '/resources/monochromatic-b2b-saas'
  }
];

export default function ResourcesPage() {
  return (
    <div className="flex flex-col w-full bg-background">
      {/* HERO SECTION */}
      <section className="pt-48 pb-24 px-6 md:px-12 bg-foreground text-background">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-3xl">
            <Reveal>
              <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-serif leading-[1] mb-8 text-balance tracking-tight">
                Idées & <br /><span className="italic font-light">Stratégie.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg md:text-xl text-background/80 max-w-2xl leading-relaxed">
                Perspectives sur l&apos;ingénierie, le design et le commerce numérique. Nous partageons notre méthodologie et la réflexion derrière notre travail.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
            {articles.map((article, idx) => (
              <Reveal key={article.id} delay={(idx % 2) * 0.1} direction="up">
                <Link href={article.href} className="group flex flex-col gap-6">
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Metadata */}
                  <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground uppercase tracking-widest">
                    <span className="text-foreground">{article.category}</span>
                    <span className="w-1 h-1 bg-border rounded-full" />
                    <span>{article.date}</span>
                    <span className="w-1 h-1 bg-border rounded-full" />
                    <span>{article.readTime}</span>
                  </div>

                  {/* Title & Excerpt */}
                  <div className="flex flex-col gap-4">
                    <h2 className="text-2xl md:text-3xl font-serif text-balance leading-snug group-hover:text-muted-foreground transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="mt-2 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-foreground">
                    <span className="pb-0.5 border-b border-foreground/30 group-hover:border-foreground transition-colors">Lire l&apos;article</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-32 px-6 border-t border-border bg-foreground text-background">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif mb-8 text-balance">
              Prêt à appliquer ces principes ?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-background/70 mb-12 leading-relaxed max-w-xl text-center mx-auto">
              Discutons de la manière dont nous pouvons créer un avantage numérique pour votre entreprise.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 text-sm font-medium text-foreground bg-background hover:bg-background/90 transition-colors uppercase tracking-widest rounded-none"
            >
              Démarrer un projet
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
