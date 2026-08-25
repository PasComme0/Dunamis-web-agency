'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';

export default function ServicesPage() {
  const services = [
    {
      id: '01',
      title: 'Développement Web',
      description: 'Sites d\'entreprise, landing pages, e-commerce et applications web sur mesure. Nous concevons des plateformes pensées pour la vitesse, l\'évolutivité et une fiabilité incontestable.',
      features: ['Sites d\'entreprise', 'Landing pages', 'E-commerce', 'Applications web', 'SaaS', 'Refonte', 'Maintenance'],
      cta: 'Créer mon site',
      href: '/services/web',
      image: 'https://picsum.photos/seed/agency-web/1200/900'
    },
    {
      id: '02',
      title: 'Développement Mobile',
      description: 'Applications métiers natives et multiplateformes conçues pour les utilisateurs modernes. Transformez des flux de travail complexes en expériences mobiles intuitives et performantes.',
      features: ['Android', 'iOS', 'Multiplateforme', 'Applications métiers', 'MVP'],
      cta: 'Discuter de mon application',
      href: '/services/mobile',
      image: 'https://picsum.photos/seed/agency-mobile/1200/900'
    },
    {
      id: '03',
      title: 'Design',
      description: 'Communication visuelle professionnelle pour vos campagnes et votre entreprise. Des visuels percutants pour les réseaux sociaux aux identités visuelles complètes qui imposent l\'autorité.',
      features: ['Flyers promotionnels', 'Graphismes réseaux sociaux', 'Créations publicitaires', 'Supports de marque'],
      cta: 'Demander un design',
      href: '/services/design',
      image: 'https://picsum.photos/seed/agency-design/1200/900'
    },
    {
      id: '04',
      title: 'Conseil',
      description: 'Stratégie, audits UX, transformation numérique et accompagnement technique pour garantir que vos investissements soient parfaitement alignés avec vos objectifs commerciaux.',
      features: ['Audit digital', 'Audit UX', 'Stratégie produit', 'Conseil technique', 'Transformation numérique'],
      cta: 'Réserver une consultation',
      href: '/services/consulting',
      image: 'https://picsum.photos/seed/agency-consulting/1200/900'
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative min-h-[60vh] flex flex-col justify-end pb-24 pt-40 px-6 overflow-hidden bg-foreground text-background">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://picsum.photos/seed/agency-services-hero/1920/1080"
            alt="Atmospheric architecture"
            fill
            className="object-cover opacity-40 mix-blend-overlay grayscale"
            sizes="100vw"
            referrerPolicy="no-referrer"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/80 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col">
          <Reveal>
            <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-serif leading-[1] mb-8 text-balance tracking-tight max-w-5xl">
              Des services numériques conçus autour de votre <span className="italic font-light">entreprise.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg md:text-xl text-background/80 max-w-2xl leading-relaxed">
              Nos compétences spécialisées peuvent être déployées individuellement pour résoudre des défis spécifiques, ou combinées en une transformation numérique complète de bout en bout.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="py-32 bg-background text-foreground">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-40">
          {services.map((service, idx) => (
            <div key={service.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
              {/* Text Content */}
              <div className={`lg:col-span-5 flex flex-col ${idx % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                <Reveal direction="up">
                  <div className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-6">
                    {service.id} — {service.title}
                  </div>
                  <h2 className="text-4xl md:text-5xl font-serif mb-6 text-balance">
                    {service.title}.
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                    {service.description}
                  </p>
                  
                  <div className="mb-12">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-3 text-sm font-medium">
                          <span className="w-1.5 h-1.5 bg-foreground block shrink-0"></span>
                          <span className="truncate">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link 
                    href={service.href}
                    className="inline-flex items-center gap-3 text-sm font-medium group uppercase tracking-wider w-fit"
                  >
                    <span className="pb-1 border-b border-foreground">{service.cta}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Reveal>
              </div>

              {/* Image Content */}
              <div className={`lg:col-span-7 w-full ${idx % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                <Reveal direction={idx % 2 === 1 ? 'right' : 'left'} delay={0.2} className="w-full">
                  <div className="relative aspect-[4/3] w-full bg-muted overflow-hidden">
                    <Image 
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105 grayscale hover:grayscale-0"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-32 px-6 border-t border-border bg-muted/30">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-balance">
              Vous ne savez pas par où commencer ? Commençons par le problème.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-2xl text-center">
              Nous aidons les entreprises ambitieuses à déterminer exactement ce qui doit être construit, quelles technologies utiliser et comment l&apos;exécuter sans faille.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link 
              href="/services/consulting" 
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-background bg-foreground hover:bg-foreground/90 transition-colors rounded-none"
            >
              Réserver une consultation
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
