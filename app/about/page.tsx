'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowRight } from 'lucide-react';

export default function AboutPage() {
  const principles = [
    {
      title: 'Clarté',
      description: 'Pas de jargon technique derrière lequel se cacher. Seulement des progrès transparents et des conseils honnêtes. Nous traduisons l\'ingénierie complexe en résultats commerciaux clairs.'
    },
    {
      title: 'Qualité',
      description: 'Nous refusons de livrer un travail médiocre. Chaque pixel, chaque interaction et chaque ligne de code sont méticuleusement conçus pour répondre à un objectif précis.'
    },
    {
      title: 'Transparence',
      description: 'Une visibilité totale sur notre processus, nos tarifs et nos délais. Vous ne vous demanderez jamais quel est le statut de votre projet ou la logique derrière nos décisions.'
    },
    {
      title: 'Fiabilité',
      description: 'Nous livrons ce que nous promettons, quand nous le promettons. Nous considérons nos engagements comme une architecture absolue, pas comme des suggestions flexibles.'
    },
    {
      title: 'Amélioration continue',
      description: 'Le lancement n\'est que le point de départ. Nous concevons des plateformes numériques spécifiquement conçues pour évoluer, s\'adapter et répondre aux évolutions du marché.'
    }
  ];

  return (
    <div className="flex flex-col w-full bg-background">
      {/* HERO SECTION */}
      <section className="pt-48 pb-24 px-6 md:px-12 bg-foreground text-background">
        <div className="max-w-7xl mx-auto w-full">
          <Reveal>
            <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-serif leading-[1] mb-8 text-balance tracking-tight max-w-5xl">
              La technologie doit résoudre des problèmes, non <span className="italic font-light">en créer de nouveaux.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg md:text-xl text-background/80 max-w-2xl leading-relaxed">
              Nous sommes une agence digitale fondée sur la conviction qu&apos;une ingénierie exceptionnelle et un design précis sont les fondements ultimes de la croissance des entreprises.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ATMOSPHERIC IMAGE */}
      <section className="py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Reveal delay={0.2} className="w-full">
            <div className="relative aspect-[16/9] md:aspect-[21/9] w-full bg-muted overflow-hidden">
              <Image 
                src="https://picsum.photos/seed/agency-about-office/1920/800"
                alt="Notre espace de travail collaboratif"
                fill
                className="object-cover grayscale opacity-90"
                sizes="100vw"
                referrerPolicy="no-referrer"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* THE MISSION */}
      <section className="py-24 md:py-32 px-6 md:px-12 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            <div className="lg:col-span-4">
              <Reveal>
                <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                  Notre Mission
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <Reveal delay={0.1}>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-snug mb-10 text-balance">
                  Nous existons pour combler le fossé entre des objectifs commerciaux ambitieux et une exécution technique sans faille.
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
                  <p>
                    Trop souvent, les projets digitaux échouent non pas par manque de capacités techniques, mais à cause d&apos;une déconnexion fondamentale entre la stratégie commerciale et la production digitale. Nous avons fondé cette agence pour éliminer cet écart.
                  </p>
                  <p>
                    Nous ne nous contentons pas d&apos;écrire du code ou de pousser des pixels. Nous concevons des solutions entièrement pensées autour de vos réalités opérationnelles, des besoins des utilisateurs et des objectifs de croissance. Nous agissons comme votre partenaire technique stratégique, bien au-delà du lancement initial.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PRINCIPLES */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-foreground text-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-4">
              <Reveal>
                <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                  Principes <br/><span className="italic font-light">Directeurs.</span>
                </h2>
              </Reveal>
            </div>
            
            <div className="lg:col-span-8">
              <div className="flex flex-col border-t border-background/20">
                {principles.map((principle, idx) => (
                  <Reveal key={idx} delay={idx * 0.1}>
                    <div className="py-8 md:py-12 border-b border-background/20 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
                      <div className="md:col-span-1">
                        <h3 className="text-xl font-medium tracking-tight">
                          {principle.title}
                        </h3>
                      </div>
                      <div className="md:col-span-2">
                        <p className="text-background/70 leading-relaxed text-base">
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM STATEMENT */}
      <section className="py-32 px-6 md:px-12 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-serif mb-8 text-balance">
              Petits par dessein. Concentrés par nécessité.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-12">
              Nous maintenons volontairement une équipe concentrée de praticiens expérimentés. Lorsque vous travaillez avec nous, vous collaborez directement avec les experts qui conçoivent et développent votre produit : pas de couches de gestion de compte, pas de transfert à des associés juniors.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
             <Link 
              href="/work" 
              className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest pb-1 border-b border-foreground hover:text-muted-foreground hover:border-muted-foreground transition-colors"
            >
              Découvrir notre travail <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-32 px-6 border-t border-border bg-background text-foreground text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif mb-8 text-balance">
              Construisons quelque chose de <span className="italic font-light">durable.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
             <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-xl text-center">
              Nous acceptons actuellement de nouveaux projets pour le T3. Contactez-nous pour réserver une session stratégique.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-10 py-5 text-sm font-medium text-background bg-foreground hover:bg-foreground/90 transition-colors uppercase tracking-widest rounded-none"
            >
              Contacter l&apos;équipe
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
