'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Reveal } from '@/components/ui/Reveal';
import {
  ArrowRight,
  ShieldCheck,
  Cpu,
  Target,
  Layers,
  CheckCircle2,
  Zap,
  Users,
  Code2
} from 'lucide-react';
import type { HeroImage } from '@/types/supabase';

interface AboutClientProps {
  hero: HeroImage | null;
}

export default function AboutClient({ hero }: AboutClientProps) {
  const pillars = [
    {
      icon: Target,
      number: '01',
      title: 'Clarté Stratégique',
      description: 'Nous traduisons vos défis commerciaux complexes en feuille de route technique limpide, sans jargon superflu ni fausses promesses.'
    },
    {
      icon: Cpu,
      number: '02',
      title: 'Ingénierie de Précision',
      description: 'Chaque ligne de code et chaque architecture sont conçues pour la vitesse, la haute disponibilité et une scalabilité sans friction.'
    },
    {
      icon: Zap,
      number: '03',
      title: 'Impact Mesurable',
      description: 'Des expériences et plateformes pensées avant tout pour maximiser l\'adoption utilisateur, les conversions et votre retour sur investissement.'
    }
  ];

  const methodology = [
    {
      step: '01',
      title: 'Diagnostic & Stratégie',
      desc: 'Analyse approfondie de vos besoins métier, choix de la stack technologique idoine et validation du cahier des charges.'
    },
    {
      step: '02',
      title: 'Architecture & UX/UI',
      desc: 'Conception d\'interfaces intuitives, design systems modulaires et schémas d\'infrastructure performants.'
    },
    {
      step: '03',
      title: 'Développement & Tests',
      desc: 'Sprints de développement agiles, revues de code strictes et tests automatisés pour une fiabilité totale.'
    },
    {
      step: '04',
      title: 'Déploiement & Suivi',
      desc: 'Mise en ligne sécurisée sans coupure de service, monitoring continu et accompagnement à la croissance.'
    }
  ];

  const principles = [
    {
      id: '01',
      title: 'Transparence Intégrale',
      description: 'Accès direct aux avancées, aux métriques et aux arbitrages techniques. Vous savez toujours exactement où en est votre projet.'
    },
    {
      id: '02',
      title: 'Excellence Sans Compromis',
      description: 'Nous refusons les raccourcis techniques qui génèrent de la dette. Nos solutions sont bâties pour durer et évoluer.'
    },
    {
      id: '03',
      title: 'Vélocité & Respect des Délais',
      description: 'Nos calendriers de livraison sont des engagements fermes. Nous livrons ce qui a été convenu, au moment convenu.'
    },
    {
      id: '04',
      title: 'Culture de l\'Amélioration',
      description: 'Le lancement n\'est que le début. Nous analysons les retours terrain pour optimiser les performances en continu.'
    }
  ];

  const heroImageUrl = hero?.image_url ?? null;
  const heroOpacity = hero?.opacity ?? 0.35;
  const heroAlt = hero?.alt ?? 'À propos hero background';

  return (
    <div className="flex flex-col w-full bg-background text-foreground">
      {/* HERO SECTION - Streamlined & Impactful */}
      <section className="pt-44 pb-20 px-6 md:px-12 bg-foreground text-background relative overflow-hidden">
        {heroImageUrl && (
          <div className="absolute inset-0 z-0">
            <Image
              src={heroImageUrl}
              alt={heroAlt}
              fill
              className="object-cover mix-blend-luminosity"
              style={{ opacity: heroOpacity }}
              sizes="100vw"
              referrerPolicy="no-referrer"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/90 to-foreground"></div>
          </div>
        )}
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="max-w-4xl">
            <Reveal>
              <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] leading-[1.05] mb-6 text-balance tracking-tight font-light">
                Bâtir l&apos;Excellence <br />
                <span className="font-semibold italic text-background">Numérique.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg md:text-xl text-background/75 max-w-2xl leading-relaxed mb-10">
                Nous accompagnons les organisations ambitieuses avec une ingénierie logicielle robuste et un design exigeant conçus pour créer un avantage concurrentiel durable.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ATMOSPHERIC IMAGE / STUDIO BANNER */}
      <section className="py-12 md:py-16 px-6 md:px-12 bg-muted/30 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <Reveal delay={0.1} className="w-full">
            <div className="relative aspect-[16/9] md:aspect-[21/8] w-full bg-muted overflow-hidden border border-border">
              <Image
                src="https://picsum.photos/seed/Dunamis-about-office/1920/800"
                alt="Notre espace d'ingénierie et de design"
                fill
                className="object-cover grayscale opacity-90 transition-transform duration-700 hover:scale-102"
                sizes="100vw"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-widest text-white/70 mb-2">Notre Standard</p>
                <p className="text-xl md:text-2xl font-light leading-snug">
                  « La véritable sophistication réside dans la clarté et la solidité de l&apos;exécution. »
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MISSION & THREE PILLARS */}
      <section className="py-24 md:py-32 px-6 md:px-12 border-b border-border bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20">
            <div className="max-w-2xl">
              <Reveal>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Notre Raison d&apos;Être</p>
                <h2 className="text-3xl md:text-5xl font-normal tracking-tight text-balance">
                  Combler le fossé entre stratégie métier et excellence technique.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <p className="text-base md:text-lg text-muted-foreground max-w-md leading-relaxed">
                Trop de projets échouent par manque d&apos;alignement opérationnel. Nous concevons chaque produit comme un levier direct de croissance.
              </p>
            </Reveal>
          </div>

          {/* 3 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <Reveal key={pillar.number} delay={idx * 0.1} direction="up">
                  <div className="p-8 md:p-10 border border-border bg-card hover:border-foreground/40 transition-colors h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-8">
                        <div className="p-3 bg-muted border border-border/60">
                          <Icon className="w-5 h-5 text-foreground" />
                        </div>
                        <span className="text-sm font-semibold tracking-widest text-muted-foreground">{pillar.number}</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-4">{pillar.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* METHODOLOGY SECTION */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-muted/20 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16 md:mb-20">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Méthodologie</p>
              <h2 className="text-3xl md:text-5xl font-normal tracking-tight text-balance">
                Un processus éprouvé de l&apos;idée à la production.
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodology.map((step, idx) => (
              <Reveal key={step.step} delay={idx * 0.1} direction="up">
                <div className="p-6 md:p-8 bg-background border border-border h-full flex flex-col justify-between">
                  <div>
                    <span className="text-3xl font-bold text-foreground/20 block mb-4">{step.step}</span>
                    <h3 className="text-lg font-semibold tracking-tight mb-3 text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GUIDING PRINCIPLES */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-foreground text-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="text-xs font-semibold uppercase tracking-widest text-background/60 mb-3">Nos Valeurs</p>
                <h2 className="text-4xl md:text-5xl font-light leading-tight tracking-tight mb-6">
                  Des principes clairs, <br />
                  <span className="font-semibold italic text-background">appliqués au quotidien.</span>
                </h2>
                <p className="text-background/70 leading-relaxed max-w-md mb-8">
                  Ces engagements régissent chacune de nos lignes de code, chacun de nos échanges et la manière dont nous gérons nos partenariats.
                </p>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-background pb-1 border-b border-background hover:text-background/80 transition-colors"
                >
                  Voir nos réalisations <ArrowRight className="w-4 h-4" />
                </Link>
              </Reveal>
            </div>

            <div className="lg:col-span-7 flex flex-col divide-y divide-background/15 border-t border-b border-background/15">
              {principles.map((p, idx) => (
                <Reveal key={p.id} delay={idx * 0.08}>
                  <div className="py-8 grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 items-start">
                    <div className="sm:col-span-4 flex items-center gap-3">
                      <span className="text-xs font-mono font-semibold text-background/50">{p.id}</span>
                      <h3 className="text-lg font-medium text-background">{p.title}</h3>
                    </div>
                    <div className="sm:col-span-8">
                      <p className="text-sm md:text-base text-background/70 leading-relaxed">
                        {p.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SENIOR COLLECTIVE / TEAM STATEMENT */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-background border-b border-border">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <Reveal>
            <div className="p-3 bg-muted border border-border inline-flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-foreground" />
            </div>
            <h2 className="text-3xl md:text-5xl font-normal mb-6 text-balance tracking-tight">
              Une équipe d&apos;experts dédiée, sans intermédiaire.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-10 mx-auto">
              Lorsque vous travaillez avec nous, vous dialoguez directement avec les ingénieurs et designers qui façonnent votre projet. Pas de gestionnaires de compte juniors, pas de sous-traitance opaque : uniquement une expertise pointue et engagée.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 py-8 px-10 border border-border bg-muted/20 w-full max-w-2xl mb-10 mx-auto">
              <div>
                <span className="text-2xl md:text-3xl font-bold text-foreground block">Max 3</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider mt-1 block">Projets simultanés</span>
              </div>
              <div>
                <span className="text-2xl md:text-3xl font-bold text-foreground block">100%</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider mt-1 block">Profils Séniors</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-2xl md:text-3xl font-bold text-foreground block">&lt; 2h</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider mt-1 block">Temps de réponse</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest pb-1 border-b-2 border-foreground hover:text-muted-foreground hover:border-muted-foreground transition-colors"
            >
              Échanger avec notre équipe <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-32 px-6 border-t border-border bg-foreground text-background text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl lg:text-7xl leading-tight mb-8 text-balance font-light">
              Construisons quelque chose <br />
              <span className="font-semibold italic text-background">de durable.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-background/70 mb-12 leading-relaxed max-w-xl text-center mx-auto">
              Nous sélectionnons un nombre limité de projets par trimestre pour garantir un niveau d&apos;attention et d&apos;exécution maximal.
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
