'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';

const projects = [
  {
    id: '01',
    client: 'Lumina',
    year: '2025',
    category: 'E-commerce',
    title: 'Redéfinir le commerce de détail numérique pour le luxe moderne.',
    image: 'https://picsum.photos/seed/agency-work-1/1600/1000',
    href: '/work/lumina'
  },
  {
    id: '02',
    client: 'Aether Systems',
    year: '2025',
    category: 'Plateforme SaaS',
    title: 'Un centre de commandement pour l\'infrastructure distribuée.',
    image: 'https://picsum.photos/seed/agency-work-2/1600/1000',
    href: '/work/aether'
  },
  {
    id: '03',
    client: 'Vesper',
    year: '2024',
    category: 'Mobile Natif',
    title: 'Le concierge personnel dans votre poche.',
    image: 'https://picsum.photos/seed/agency-work-3/1600/1000',
    href: '/work/vesper'
  },
  {
    id: '04',
    client: 'Nexus Capital',
    year: '2024',
    category: 'Web & Identité',
    title: 'Établir l\'autorité dans la finance moderne.',
    image: 'https://picsum.photos/seed/agency-work-4/1600/1000',
    href: '/work/nexus'
  }
];

export default function WorkPage() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="pt-48 pb-24 px-6 md:px-12 bg-foreground text-background">
        <div className="max-w-7xl mx-auto w-full">
          <Reveal>
            <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-serif leading-[1] mb-8 text-balance tracking-tight">
              Réalisations <span className="italic font-light">Sélectionnées.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg md:text-xl text-background/80 max-w-2xl leading-relaxed">
              Une collection soignée de produits, de plateformes et d&apos;expériences numériques conçus pour des organisations ambitieuses.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PROJECTS FEED */}
      <section className="pb-32 px-6 md:px-12 bg-background text-foreground">
        <div className="max-w-7xl mx-auto w-full flex flex-col gap-24 md:gap-40">
          {projects.map((project, idx) => (
            <div key={project.id} className="group relative flex flex-col gap-8">
              <Reveal direction="up" className="w-full">
                <Link href={project.href} className="block relative aspect-[4/3] md:aspect-[16/9] w-full overflow-hidden bg-muted">
                  <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:opacity-0" />
                </Link>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
                  <div className="md:col-span-4 flex flex-col gap-1">
                    <h3 className="text-xl font-medium tracking-tight">
                      {project.client}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground uppercase tracking-wider">
                      <span>{project.category}</span>
                      <span className="w-1 h-1 bg-border rounded-full" />
                      <span>{project.year}</span>
                    </div>
                  </div>
                  
                  <div className="md:col-span-6 flex flex-col items-start gap-6">
                    <p className="text-2xl md:text-3xl font-serif text-balance leading-snug">
                      {project.title}
                    </p>
                  </div>
                  
                  <div className="md:col-span-2 flex justify-start md:justify-end">
                    <Link 
                      href={project.href}
                      className="inline-flex items-center gap-3 text-sm font-medium uppercase tracking-wider group-hover:text-foreground transition-colors text-muted-foreground"
                    >
                      <span className="pb-1 border-b border-transparent group-hover:border-foreground transition-colors">Voir l&apos;étude</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-32 px-6 border-t border-border bg-foreground text-background">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif mb-8 text-balance">
              Vous avez un projet en tête ?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-background/70 mb-12 leading-relaxed max-w-xl text-center">
              Nous collaborons avec des leaders avant-gardistes pour construire l&apos;avenir. Discutons de votre vision.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-10 py-5 text-sm font-medium text-foreground bg-background hover:bg-background/90 transition-colors uppercase tracking-widest rounded-none"
            >
              Démarrer une conversation
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
