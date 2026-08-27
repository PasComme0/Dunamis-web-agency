'use client';

import { useState, useMemo, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ChevronLeft, ChevronRight, Sparkles, Layers } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';

interface Project {
  id: string;
  client: string;
  year: string;
  category: 'E-commerce' | 'Plateforme SaaS' | 'Mobile Natif' | 'Web & Identité' | 'IA & Data';
  title: string;
  description: string;
  technologies: string[];
  image: string;
  href: string;
}

const allProjects: Project[] = [
  {
    id: '01',
    client: 'Lumina Luxury',
    year: '2025',
    category: 'E-commerce',
    title: 'Redéfinir le commerce de détail numérique pour le luxe moderne.',
    description: 'Refonte intégrale de la plateforme d\'achat avec expérience 3D immersive et parcours de commande haute conversion.',
    technologies: ['Next.js', 'Shopify Plus', 'Tailwind CSS', 'Stripe'],
    image: 'https://picsum.photos/seed/Dunamis-work-1/1600/1000',
    href: '/work/lumina'
  },
  {
    id: '02',
    client: 'Aether Systems',
    year: '2025',
    category: 'Plateforme SaaS',
    title: 'Un centre de commandement pour l\'infrastructure distribuée.',
    description: 'Tableau de bord temps réel gérant des flux de données massifs avec monitoring prédictif et alertes instantanées.',
    technologies: ['React', 'TypeScript', 'WebSockets', 'Go Engine'],
    image: 'https://picsum.photos/seed/Dunamis-work-2/1600/1000',
    href: '/work/aether'
  },
  {
    id: '03',
    client: 'Vesper',
    year: '2024',
    category: 'Mobile Natif',
    title: 'Le concierge personnel nouvelle génération dans votre poche.',
    description: 'Application mobile native haut de gamme offrant des réservations instantanées et un service client par messagerie chiffrée.',
    technologies: ['Swift', 'iOS Native', 'SwiftUI', 'Node.js API'],
    image: 'https://picsum.photos/seed/Dunamis-work-3/1600/1000',
    href: '/work/vesper'
  },
  {
    id: '04',
    client: 'Nexus Wealth',
    year: '2024',
    category: 'Plateforme SaaS',
    title: 'Établir l\'autorité et la sécurité dans la gestion de patrimoine.',
    description: 'Portail client sécurisé simplifiant le partage d\'actifs, l\'audit et la visualisation de portefeuilles financiers complexes.',
    technologies: ['Next.js', 'PostgreSQL', 'FinTech Security', 'TypeScript'],
    image: 'https://picsum.photos/seed/Dunamis-work-4/1600/1000',
    href: '/work/nexus'
  },
  {
    id: '05',
    client: 'Pulse Medical AI',
    year: '2025',
    category: 'IA & Data',
    title: 'Diagnostic prédictif et assistance clinique intelligente.',
    description: 'Système d\'analyse médicale avancée permettant aux praticiens de traiter les rapports d\'imagerie 4x plus rapidement.',
    technologies: ['Python', 'PyTorch', 'Next.js', 'FastAPI', 'HIPAA Cloud'],
    image: 'https://picsum.photos/seed/Dunamis-work-5/1600/1000',
    href: '/work/pulse'
  },
  {
    id: '06',
    client: 'Nova Studio',
    year: '2024',
    category: 'Web & Identité',
    title: 'Identité de marque et présence digitale cinématographique.',
    description: 'Création d\'un univers visuel complet et d\'un site interactif fluide avec micro-interactions et animations 60 FPS.',
    technologies: ['WebGL', 'Motion', 'Tailwind CSS', 'Next.js'],
    image: 'https://picsum.photos/seed/Dunamis-work-6/1600/1000',
    href: '/work/nova'
  },
  {
    id: '07',
    client: 'Orbit Logistics',
    year: '2024',
    category: 'Plateforme SaaS',
    title: 'Optimisation de fret et chaîne logistique en temps réel.',
    description: 'Plateforme logistique automatisée connectant 1 500+ transporteurs avec traçabilité GPS et calcul d\'itinéraires par IA.',
    technologies: ['Next.js', 'Mapbox GL', 'Redis', 'Docker', 'GraphQL'],
    image: 'https://picsum.photos/seed/Dunamis-work-7/1600/1000',
    href: '/work/orbit'
  },
  {
    id: '08',
    client: 'Solis Energy',
    year: '2024',
    category: 'IA & Data',
    title: 'Gestion intelligente des parcs solaires et prévision énergétique.',
    description: 'Supervision énergétique connectée via capteurs IoT et algorithmes d\'ajustement de production électrique en temps réel.',
    technologies: ['IoT Gateway', 'TimescaleDB', 'React', 'Tailwind CSS'],
    image: 'https://picsum.photos/seed/Dunamis-work-8/1600/1000',
    href: '/work/solis'
  },
  {
    id: '09',
    client: 'Kroma Atelier',
    year: '2025',
    category: 'Web & Identité',
    title: 'La vitrine digitale des grands projets d\'architecture moderne.',
    description: 'Galerie interactive haute définition mettant en valeur les réalisations internationales avec navigation ultra-rapide.',
    technologies: ['Next.js', 'Sanity CMS', 'Lenis', 'Vercel Edge'],
    image: 'https://picsum.photos/seed/Dunamis-work-9/1600/1000',
    href: '/work/kroma'
  },
  {
    id: '10',
    client: 'Chronos Horlogerie',
    year: '2025',
    category: 'E-commerce',
    title: 'Boutique exclusive et configurateur sur mesure de garde-temps.',
    description: 'Plateforme e-commerce sur invitation avec module de personnalisation de montres de prestige en temps réel.',
    technologies: ['Shopify Custom', 'Three.js', 'TypeScript', 'Next.js'],
    image: 'https://picsum.photos/seed/Dunamis-work-10/1600/1000',
    href: '/work/chronos'
  }
];

const categories = [
  'Tous',
  'E-commerce',
  'Plateforme SaaS',
  'Mobile Natif',
  'Web & Identité',
  'IA & Data'
] as const;

const ITEMS_PER_PAGE = 4;

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const projectsListRef = useRef<HTMLDivElement>(null);

  // Filter projects based on selected category
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'Tous') {
      return allProjects;
    }
    return allProjects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  // Compute pagination details
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProjects = filteredProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      Tous: allProjects.length
    };
    allProjects.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    if (projectsListRef.current) {
      projectsListRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="flex flex-col w-full bg-background text-foreground">
      {/* HERO SECTION */}
      <section className="pt-40 pb-16 px-6 md:px-12 bg-foreground text-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <Reveal>
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.08] mb-5 text-balance tracking-tight font-light">
                  Projets &amp; <br className="hidden sm:inline" />
                  <span className="font-semibold italic text-background">Réalisations.</span>
                </h1>
              </Reveal>

            </div>


          </div>
        </div>
      </section>

      {/* FILTER TABS & STATS BAR */}
      <section className="sticky top-20 z-20 border-y border-border bg-background/90 backdrop-blur-md px-6 md:px-12 py-4">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const count = categoryCounts[cat] || 0;
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${isActive
                      ? 'bg-foreground text-background shadow-sm'
                      : 'bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground border border-transparent'
                    }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${isActive ? 'bg-background/20 text-background' : 'bg-background text-muted-foreground'
                      }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Results Counter */}
          <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground flex items-center gap-2 shrink-0">
            <Layers className="w-3.5 h-3.5" />
            <span>
              {filteredProjects.length === 0
                ? '0 projet trouvé'
                : `${filteredProjects.length} projet${filteredProjects.length > 1 ? 's' : ''} au total`}
            </span>
          </div>
        </div>
      </section>

      {/* PROJECTS FEED */}
      <section ref={projectsListRef} className="py-20 md:py-28 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto w-full">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-24 border border-dashed border-border p-12">
              <p className="text-xl text-muted-foreground mb-4">Aucun projet trouvé dans cette catégorie.</p>
              <button
                onClick={() => handleCategoryChange('Tous')}
                className="px-6 py-3 text-sm font-medium bg-foreground text-background hover:bg-foreground/90 transition-colors cursor-pointer"
              >
                Afficher tous les projets
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-20 md:gap-32">
              {currentProjects.map((project, idx) => (
                <article
                  key={project.id}
                  className="group relative border-b border-border pb-20 md:pb-28 last:border-b-0 last:pb-0"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                    {/* Image Column */}
                    <div
                      className={`lg:col-span-7 ${idx % 2 === 1 ? 'lg:order-2' : 'lg:order-1'
                        }`}
                    >
                      <Reveal direction="up" className="w-full">
                        <Link
                          href={project.href}
                          className="block relative aspect-[16/10] w-full overflow-hidden bg-muted border border-border/60 shadow-sm"
                        >
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 60vw, 800px"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute top-4 left-4 z-10">
                            <span className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider bg-background/90 text-foreground backdrop-blur-md border border-border/40 shadow-sm">
                              {project.category}
                            </span>
                          </div>
                        </Link>
                      </Reveal>
                    </div>

                    {/* Content Column */}
                    <div
                      className={`lg:col-span-5 flex flex-col justify-center ${idx % 2 === 1 ? 'lg:order-1' : 'lg:order-2'
                        }`}
                    >
                      <Reveal delay={0.1}>
                        <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-4">
                          <span className="text-foreground">{project.client}</span>
                          <span className="w-1.5 h-1.5 bg-foreground/30 rounded-full" />
                          <span>{project.year}</span>
                        </div>

                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-balance leading-snug mb-4 tracking-tight group-hover:text-foreground/80 transition-colors">
                          <Link href={project.href}>{project.title}</Link>
                        </h2>

                        <p className="text-base text-muted-foreground leading-relaxed mb-6">
                          {project.description}
                        </p>
                        {/* Tech Stack Pills */}
                        <div className="flex flex-wrap gap-2 mb-8">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 text-xs font-medium bg-muted text-muted-foreground border border-border/50"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* CTA Link */}
                        <div>
                          <Link
                            href={project.href}
                            className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-foreground hover:opacity-80 transition-opacity group/link"
                          >
                            <span className="pb-1 border-b-2 border-foreground">
                              Explorer le projet
                            </span>
                            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                          </Link>
                        </div>
                      </Reveal>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* PAGINATION CONTROLS */}
          {totalPages > 1 && (
            <div className="mt-20 md:mt-28 pt-12 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6">
              {/* Counter info */}
              <div className="text-sm text-muted-foreground font-medium">
                Affichage de <span className="font-semibold text-foreground">{startIndex + 1}</span> à{' '}
                <span className="font-semibold text-foreground">
                  {Math.min(startIndex + ITEMS_PER_PAGE, filteredProjects.length)}
                </span>{' '}
                sur <span className="font-semibold text-foreground">{filteredProjects.length}</span> projets
              </div>

              {/* Page buttons */}
              <div className="flex items-center gap-2">
                {/* Previous */}
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  aria-label="Page précédente"
                  className="inline-flex items-center justify-center p-2.5 border border-border text-foreground hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {/* Page Numbers */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                  const isActive = pageNum === currentPage;
                  return (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={`w-10 h-10 text-sm font-semibold transition-colors cursor-pointer border ${isActive
                          ? 'bg-foreground text-background border-foreground shadow-sm'
                          : 'bg-background text-foreground border-border hover:bg-muted'
                        }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}

                {/* Next */}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  aria-label="Page suivante"
                  className="inline-flex items-center justify-center p-2.5 border border-border text-foreground hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-32 px-6 border-t border-border bg-foreground text-background">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl lg:text-7xl leading-tight mb-8 text-balance font-light">
              Vous avez un projet <br />
              <span className="font-semibold italic text-background">en tête ?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-background/70 mb-12 leading-relaxed max-w-xl text-center mx-auto">
              Nous collaborons avec des entreprises et des leaders ambitieux pour concevoir des solutions pérennes et hautement performantes.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 text-sm font-medium text-foreground bg-background hover:bg-background/90 transition-colors uppercase tracking-widest rounded-none shadow-lg"
            >
              Démarrer une conversation
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
