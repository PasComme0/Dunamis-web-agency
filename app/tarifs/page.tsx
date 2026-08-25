'use client';

import Link from 'next/link';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const plans = [
  {
    id: 'site-vitrine',
    name: 'Site Vitrine',
    description: 'Une présence numérique essentielle pour asseoir votre crédibilité et présenter votre activité.',
    price: 'À partir de 3 000 €',
    timeline: '4 à 6 semaines',
    features: [
      'Design UI/UX sur mesure',
      'Architecture SEO optimisée',
      "Jusqu'à 5 pages principales",
      'Responsive design sans faille',
      'Déploiement et hébergement inclus',
    ]
  },
  {
    id: 'plateforme-web',
    name: 'Plateforme Web',
    description: 'Une solution complète avec des fonctionnalités avancées et une gestion de contenu autonome.',
    price: 'À partir de 8 000 €',
    timeline: '8 à 12 semaines',
    features: [
      "Intégration d'un CMS Headless",
      'Animations et interactions complexes',
      'Architecture évolutive',
      'Formation de votre équipe au CMS',
      'Support prioritaire',
    ]
  },
  {
    id: 'e-commerce',
    name: 'E-Commerce',
    description: "Une boutique en ligne performante, conçue pour maximiser vos conversions et votre chiffre d'affaires.",
    price: 'À partir de 12 000 €',
    timeline: '10 à 14 semaines',
    features: [
      "Parcours d'achat optimisé (CRO)",
      'Intégration des paiements sécurisés',
      'Tableau de bord de gestion des stocks',
      'Synchronisation avec vos outils internes',
      'Configuration SEO avancée pour les produits',
    ]
  },
  {
    id: 'application-mobile',
    name: 'Application Mobile',
    description: "Une application iOS et Android native ou multiplateforme, pensée pour l'usage mobile.",
    price: 'À partir de 20 000 €',
    timeline: '14 à 20 semaines',
    features: [
      'Développement iOS et Android',
      'Design système adapté aux mobiles',
      "Mise en place d'un backend évolutif",
      'Analytiques et suivi des comportements',
      'Assistance à la soumission sur les stores',
    ]
  }
];

export default function TarifsPage() {
  return (
    <div className="flex flex-col w-full bg-background">
      {/* HERO SECTION */}
      <section className="pt-48 pb-24 px-6 md:px-12 bg-foreground text-background">
        <div className="max-w-7xl mx-auto w-full">
          <Reveal>
            <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-serif leading-[1] mb-8 text-balance tracking-tight">
              Investissements <br/><span className="italic font-light">Transparents.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg md:text-xl text-background/80 max-w-2xl leading-relaxed">
              La qualité n&apos;a pas de prix caché. Nous proposons des tarifications claires, basées sur la valeur que nous apportons et adaptées à l&apos;ambition de votre projet.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PRICING GRID */}
      <section className="py-24 px-6 md:px-12 bg-muted/30">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {plans.map((plan, idx) => (
              <Reveal key={plan.id} delay={(idx % 2) * 0.1} direction="up">
                <div className="flex flex-col h-full bg-background border border-border p-10 md:p-14 hover:border-foreground transition-colors group">
                  <div className="flex flex-col mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif mb-4 text-foreground tracking-tight">
                      {plan.name}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      {plan.description}
                    </p>
                    <div className="flex flex-col gap-2 pb-8 border-b border-border">
                      <p className="text-2xl font-serif text-foreground">
                        {plan.price}
                      </p>
                      <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                        Délais typiques : {plan.timeline}
                      </p>
                    </div>
                  </div>
                  
                  <ul className="flex flex-col gap-4 mb-16 flex-grow">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-foreground shrink-0 opacity-80" />
                        <span className="text-muted-foreground text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link 
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-foreground pb-1 border-b border-foreground/30 group-hover:border-foreground transition-colors w-fit"
                  >
                    Démarrer ce projet <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 md:py-32 px-6 md:px-12 border-t border-border bg-background">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center text-balance">
              Ce que chaque engagement inclut.
            </h2>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <Reveal delay={0.1}>
              <h3 className="text-xl font-serif mb-4 text-foreground">Un chef de projet dédié</h3>
              <p className="text-muted-foreground leading-relaxed">
                Vous collaborez directement avec les experts qui conçoivent et développent votre produit. Une communication fluide, sans intermédiaires inutiles.
              </p>
            </Reveal>
            
            <Reveal delay={0.2}>
              <h3 className="text-xl font-serif mb-4 text-foreground">Une architecture évolutive</h3>
              <p className="text-muted-foreground leading-relaxed">
                Nous ne construisons pas de solutions jetables. Chaque ligne de code est pensée pour accompagner votre croissance sur le long terme.
              </p>
            </Reveal>
            
            <Reveal delay={0.3}>
              <h3 className="text-xl font-serif mb-4 text-foreground">Des performances optimales</h3>
              <p className="text-muted-foreground leading-relaxed">
                Un chargement rapide, une accessibilité sans faille et une note Lighthouse parfaite. Nous optimisons chaque détail pour un impact maximal.
              </p>
            </Reveal>
            
            <Reveal delay={0.4}>
              <h3 className="text-xl font-serif mb-4 text-foreground">Une garantie de qualité</h3>
              <p className="text-muted-foreground leading-relaxed">
                Notre travail ne s&apos;arrête pas au lancement. Nous assurons un suivi post-déploiement pour garantir que votre produit numérique fonctionne parfaitement.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-32 px-6 border-t border-border bg-foreground text-background text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif mb-8 text-balance">
              Besoin d&apos;une solution sur mesure ?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
             <p className="text-lg text-background/70 mb-12 leading-relaxed max-w-xl text-center">
              Chaque entreprise est unique. Si vos besoins dépassent nos offres standards, nous concevons une proposition entièrement personnalisée pour vous.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-10 py-5 text-sm font-medium text-foreground bg-background hover:bg-background/90 transition-colors uppercase tracking-widest rounded-none"
            >
              Contactez-nous
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
