'use client';

import dunamis from "@/assets/dunamis.png"
import image1 from "@/assets/download.png";
import image2 from "@/assets/image2.png";
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, CheckCircle2, ChevronDown, Monitor, Smartphone, PenTool, Lightbulb, ArrowRight, PlayCircle, Star, MessageSquare, HelpCircle, Clock, Sparkles } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1 — HERO */}
      <section className="relative min-h-[92vh] flex flex-col justify-center items-center pt-36 pb-20 px-6 overflow-hidden bg-foreground text-background">
        <div className="absolute inset-0 z-0">
          <Image
            src={dunamis}
            alt="Atmospheric architecture"
            fill
            className="object-cover opacity-80 mix-blend-luminosity"
            sizes="100vw"
            referrerPolicy="no-referrer"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/90 to-foreground"></div>
        </div>

        <div className="max-w-5xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
          <Reveal delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.08] mb-6 text-balance tracking-tight font-light max-w-4xl mx-auto">
              Façonner le futur numérique <br className="hidden sm:inline" />
              <span className="font-semibold italic text-background">de votre entreprise.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto mb-12">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-semibold text-foreground bg-background hover:bg-background/90 transition-all duration-200 uppercase tracking-widest rounded-none shadow-xl group"
              >
                <span>Démarrer un projet</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/work"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-background border border-background/30 hover:bg-background/10 transition-colors uppercase tracking-widest"
              >
                Voir nos réalisations
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 2 — TRUST BAR */}
      <section className="py-10 border-b border-border bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <Reveal delay={0.05} direction="up">
              <div className="flex flex-col gap-1 items-center ">
                <span className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">30+</span>
                <span className="text-xs uppercase tracking-wider font-medium text-muted-foreground">Projets Déployés</span>
              </div>
            </Reveal>
            <Reveal delay={0.1} direction="up">
              <div className="flex flex-col gap-1">
                <span className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">98%</span>
                <span className="text-xs uppercase tracking-wider font-medium text-muted-foreground">Satisfaction Client</span>
              </div>
            </Reveal>
            <Reveal delay={0.15} direction="up">
              <div className="flex flex-col gap-1">
                <span className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">15+</span>
                <span className="text-xs uppercase tracking-wider font-medium text-muted-foreground">Secteurs Clés</span>
              </div>
            </Reveal>
            <Reveal delay={0.2} direction="up">
              <div className="flex flex-col gap-1">
                <span className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">&lt; 2h</span>
                <span className="text-xs uppercase tracking-wider font-medium text-muted-foreground">Temps de Réponse</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 3 — PROBLEM */}
      <section className="py-24 md:py-32 px-6 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-serif mb-8 text-balance">
              Votre entreprise mérite plus qu&apos;un simple site web.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-muted-foreground leading-relaxed mb-16">
              Une présence en ligne obsolète, une expérience utilisateur confuse et des performances lentes ne font pas que donner une mauvaise image, elles font fuir des clients potentiels. Une présence numérique professionnelle n&apos;est pas une dépense ; c&apos;est la base de la crédibilité moderne.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            <Reveal delay={0.2} direction="up" className="bg-muted p-8 md:p-12 text-left h-full">
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-6">L&apos;Approche Générique</div>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3 text-muted-foreground"><span className="text-foreground mt-1">•</span> Difficile à naviguer et les mises à jour sont pénibles.</li>
                <li className="flex items-start gap-3 text-muted-foreground"><span className="text-foreground mt-1">•</span> Mauvaise expérience mobile qui fait fuir les utilisateurs.</li>
                <li className="flex items-start gap-3 text-muted-foreground"><span className="text-foreground mt-1">•</span> Faible crédibilité qui profite à vos concurrents.</li>
              </ul>
            </Reveal>
            <Reveal delay={0.3} direction="up" className="bg-foreground text-background p-8 md:p-12 text-left h-full">
              <div className="text-sm font-medium text-muted uppercase tracking-widest mb-6">Le Standard de l&apos;Agence</div>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 mt-0.5 opacity-80 shrink-0" /> Solutions sur mesure alignées avec vos objectifs commerciaux.</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 mt-0.5 opacity-80 shrink-0" /> Fluide, rapide et accessible sur tous les appareils.</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 mt-0.5 opacity-80 shrink-0" /> Un design qui impose l&apos;autorité et instaure la confiance.</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 4 — SERVICES */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-serif mb-6 text-balance">
                  Tout ce dont vous avez besoin pour construire une présence numérique plus forte.
                </h2>
                <p className="text-lg text-muted-foreground">
                  Des compétences spécialisées conçues pour fonctionner ensemble, offrant des solutions complètes de la stratégie au déploiement.
                </p>
              </div>
              <Link href="/services" className="inline-flex items-center gap-2 text-sm font-medium group pb-1 border-b border-foreground">
                Voir tous les services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal delay={0.1}>
              <div className="group p-8 md:p-10 border border-border hover:border-foreground transition-colors h-full flex flex-col bg-background">
                <div className="w-12 h-12 mb-8 flex items-center justify-center bg-muted">
                  <Monitor className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-2xl font-serif mb-4">Développement Web</h3>
                <p className="text-muted-foreground mb-8 flex-grow">
                  Sites d&apos;entreprise, landing pages de performance, e-commerce évolutif et applications web sur mesure conçues pour la vitesse et la fiabilité.
                </p>
                <Link href="/services/web" className="inline-flex items-center gap-2 text-sm font-medium mt-auto group-hover:text-muted-foreground transition-colors">
                  En savoir plus <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="group p-8 md:p-10 border border-border hover:border-foreground transition-colors h-full flex flex-col bg-background">
                <div className="w-12 h-12 mb-8 flex items-center justify-center bg-muted">
                  <Smartphone className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-2xl font-serif mb-4">Développement Mobile</h3>
                <p className="text-muted-foreground mb-8 flex-grow">
                  Applications métiers natives et multiplateformes conçues pour les utilisateurs modernes. Nous transformons des flux de travail complexes en expériences mobiles intuitives.
                </p>
                <Link href="/services/mobile" className="inline-flex items-center gap-2 text-sm font-medium mt-auto group-hover:text-muted-foreground transition-colors">
                  En savoir plus <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="group p-8 md:p-10 border border-border hover:border-foreground transition-colors h-full flex flex-col bg-background">
                <div className="w-12 h-12 mb-8 flex items-center justify-center bg-muted">
                  <PenTool className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-2xl font-serif mb-4">Design & Supports</h3>
                <p className="text-muted-foreground mb-8 flex-grow">
                  Communication visuelle professionnelle pour vos campagnes et votre entreprise. Des créations percutantes pour les réseaux sociaux aux identités visuelles complètes.
                </p>
                <Link href="/services/design" className="inline-flex items-center gap-2 text-sm font-medium mt-auto group-hover:text-muted-foreground transition-colors">
                  En savoir plus <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="group p-8 md:p-10 border border-border hover:border-foreground transition-colors h-full flex flex-col bg-background">
                <div className="w-12 h-12 mb-8 flex items-center justify-center bg-muted">
                  <Lightbulb className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-2xl font-serif mb-4">Conseil Digital</h3>
                <p className="text-muted-foreground mb-8 flex-grow">
                  Stratégie, audits UX, transformation numérique et accompagnement technique pour garantir que vos investissements sont alignés avec vos objectifs commerciaux.
                </p>
                <Link href="/services/consulting" className="inline-flex items-center gap-2 text-sm font-medium mt-auto group-hover:text-muted-foreground transition-colors">
                  En savoir plus <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 5 — WHY US */}
      <section className="py-24 md:py-32 px-6 bg-foreground text-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <h2 className="text-4xl md:text-5xl font-serif mb-8 text-balance">
                  Pourquoi les entreprises choisissent de travailler avec nous.
                </h2>
                <p className="text-lg text-muted opacity-80">
                  Nous ne sommes pas une simple boîte de production. Nous sommes un partenaire stratégique engagé dans le succès à long terme de votre présence numérique.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <div className="flex flex-col gap-12">
                <Reveal delay={0.1}>
                  <div className="border-t border-background/20 pt-8">
                    <h3 className="text-xl font-medium mb-4">Priorité aux objectifs commerciaux</h3>
                    <p className="text-muted opacity-80 leading-relaxed">
                      Nous ne commençons pas par la technologie. Nous commençons par vos objectifs commerciaux. Chaque décision de conception et technique est mesurée par rapport à son impact sur vos résultats.
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={0.2}>
                  <div className="border-t border-background/20 pt-8">
                    <h3 className="text-xl font-medium mb-4">Communication claire</h3>
                    <p className="text-muted opacity-80 leading-relaxed">
                      Vous savez toujours ce qui se passe avec votre projet. Pas de jargon technique derrière lequel se cacher, juste des progrès transparents et des conseils honnêtes.
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={0.3}>
                  <div className="border-t border-background/20 pt-8">
                    <h3 className="text-xl font-medium mb-4">Un design qui convertit</h3>
                    <p className="text-muted opacity-80 leading-relaxed">
                      Les interfaces sont conçues pour de vrais utilisateurs, pas seulement pour des captures d&apos;écran. Nous équilibrons une esthétique premium avec des normes d&apos;utilisabilité rigoureuses.
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={0.4}>
                  <div className="border-t border-background/20 pt-8">
                    <h3 className="text-xl font-medium mb-4">Accompagnement sur le long terme</h3>
                    <p className="text-muted opacity-80 leading-relaxed">
                      Nous ne disparaissons pas après le lancement. Nous offrons une maintenance continue et des itérations pour s&apos;assurer que votre produit évolue avec votre entreprise.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — FEATURED WORK */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
              <h2 className="text-4xl md:text-5xl font-serif text-balance">
                Réalisations Sélectionnées
              </h2>
              <Link href="/work" className="inline-flex items-center gap-2 text-sm font-medium group pb-1 border-b border-foreground">
                Voir tous les projets <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Reveal>

          <div className="flex flex-col gap-24">
            {/* Project 1 */}
            <Reveal>
              <div className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                <div className="lg:col-span-7 order-2 lg:order-1 overflow-hidden bg-muted">
                  <div className="relative aspect-[4/3] w-full transform transition-transform duration-700 group-hover:scale-105">
                    <Image
                      src={image1}
                      alt="Plateforme E-commerce Retail"
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col justify-center">
                  <div className="flex gap-4 mb-6 text-sm font-medium text-muted-foreground uppercase tracking-widest">
                    <span>Retail</span>
                    <span>•</span>
                    <span>E-commerce</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-serif mb-6">Aura Botanica</h3>
                  <p className="text-lg text-muted-foreground mb-8">
                    D&apos;une présence en ligne obsolète à une plateforme moderne axée sur la conversion qui a augmenté les ventes directes aux consommateurs de 140%.
                  </p>
                  <Link href="/work/aura-botanica" className="inline-flex items-center gap-2 text-sm font-medium">
                    Voir le site <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* Project 2 */}
            <Reveal>
              <div className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <div className="flex gap-4 mb-6 text-sm font-medium text-muted-foreground uppercase tracking-widest">
                    <span>Finance</span>
                    <span>•</span>
                    <span>Web App</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-serif mb-6">Nexus Wealth</h3>
                  <p className="text-lg text-muted-foreground mb-8">
                    Un portail client sécurisé simplifiant le partage de documents et la visualisation de portefeuille pour les particuliers fortunés.
                  </p>
                  <Link href="/work/nexus-wealth" className="inline-flex items-center gap-2 text-sm font-medium">
                    Voir l&apos;étude de cas <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="lg:col-span-7 overflow-hidden bg-muted">
                  <div className="relative aspect-[4/3] w-full transform transition-transform duration-700 group-hover:scale-105">
                    <Image
                      src={image2}
                      alt="Application Web Financière"
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 7 — PROCESS */}
      <section className="py-24 md:py-32 px-6 bg-muted">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-balance text-center max-w-3xl mx-auto">
              De l&apos;idée au lancement, sans la complexité habituelle.
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-20 max-w-2xl mx-auto">
              Notre méthodologie éprouvée garantit que chaque projet est livré avec clarté, précision et détermination.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {[
              { num: '01', title: 'Découverte', desc: 'Nous nous immergeons dans votre entreprise, votre public et vos objectifs pour définir la portée du projet.' },
              { num: '02', title: 'Stratégie', desc: 'Définition de la structure, des fonctionnalités principales et de l\'architecture technique requise pour réussir.' },
              { num: '03', title: 'Design', desc: 'Création d\'un langage visuel cohérent et d\'un système d\'interaction accessible pour les utilisateurs.' },
              { num: '04', title: 'Développement', desc: 'Construction du produit avec des technologies modernes évolutives, maintenables et un code propre.' },
              { num: '05', title: 'Lancement', desc: 'Tests rigoureux, optimisation et un déploiement fluide en production.' },
              { num: '06', title: 'Support', desc: 'Surveillance continue, maintenance et itérations pour faire évoluer le produit.' }
            ].map((step, idx) => (
              <Reveal key={idx} delay={idx * 0.1} direction="up">
                <div className="border-t border-border pt-6">
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="text-sm font-medium text-muted-foreground">{step.num}</span>
                    <h3 className="text-xl font-medium">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed pl-8">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — TESTIMONIALS */}
      <section className="py-28 md:py-36 px-6 bg-muted/30 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20">
            <div>
              <Reveal>
                <h2 className="text-3xl md:text-5xl font-normal tracking-tight text-balance">
                  Ce que disent <br /> nos partenaires.
                </h2>
              </Reveal>
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Ils n'ont pas seulement créé un site e-commerce, ils ont complètement repensé notre parcours de vente. La clarté de communication et le respect des délais ont été exemplaires.",
                author: "Sarah Jenkins",
                role: "Directrice Marketing",
                company: "Aura Botanica",
                category: "E-commerce Retail"
              },
              {
                quote: "Trouver un partenaire technique qui maîtrise autant l'architecture logicielle que les enjeux business est rare. Notre portail sécurisé a été livré sans aucun retard.",
                author: "Marcus Chen",
                role: "Associé Gérant",
                company: "Nexus Wealth",
                category: "Fintech & SaaS"
              },
              {
                quote: "L'application mobile développée pour nos équipes a transformé nos opérations. L'ergonomie est plébiscitée par nos utilisateurs avec une note moyenne de 4.9/5.",
                author: "Alexandre Moreau",
                role: "Chief Operating Officer",
                company: "Vesper Concierge",
                category: "Mobile Natif"
              }
            ].map((t, idx) => (
              <Reveal key={idx} delay={idx * 0.1} direction="up">
                <div className="p-8 md:p-10 bg-background border border-border flex flex-col justify-between h-full hover:border-foreground/40 transition-colors shadow-sm">
                  <div>
                    <div className="flex items-center justify-between mb-6">

                      <span className="text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 bg-muted text-muted-foreground border border-border/60">
                        {t.category}
                      </span>
                    </div>

                    <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-8">
                      &laquo; {t.quote} &raquo;
                    </p>
                  </div>

                  <div className="pt-6 border-t border-border/80 flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground text-sm">{t.author}</p>
                      <p className="text-xs text-muted-foreground">{t.role}, <span className="text-foreground/80 font-medium">{t.company}</span></p>
                    </div>

                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Quick reassurance strip */}
          <Reveal delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 mt-12 border-t border-border text-center">
              <div>
                <span className="text-2xl md:text-3xl font-bold text-foreground">98%</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider block mt-1">Satisfaction Client</span>
              </div>
              <div>
                <span className="text-2xl md:text-3xl font-bold text-foreground">100%</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider block mt-1">Délais Respectés</span>
              </div>
              <div>
                <span className="text-2xl md:text-3xl font-bold text-foreground">&lt; 24h</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider block mt-1">Temps de Réponse</span>
              </div>
              <div>
                <span className="text-2xl md:text-3xl font-bold text-foreground">0</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider block mt-1">Frais Cachés</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 9 — FAQ */}
      <section className="py-24 md:py-32 px-6 border-t border-border bg-background">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-normal mb-12 text-center text-balance tracking-tight">
              Questions Fréquemment Posées
            </h2>
          </Reveal>

          <div className="flex flex-col border-t border-border">
            {[
              {
                q: "Combien coûte un site web ?",
                a: "Les coûts des projets varient en fonction de la complexité, des fonctionnalités et des délais. Après un bref appel de découverte pour comprendre vos besoins, nous fournissons une proposition détaillée et transparente avec un prix fixe. Nous ne croyons pas aux frais cachés."
              },
              {
                q: "Combien de temps prend généralement un projet ?",
                a: "Un site web d'entreprise standard prend généralement de 4 à 6 semaines, de la découverte au lancement. Des applications web ou des plateformes e-commerce plus complexes peuvent prendre de 8 à 12 semaines. Nous établissons un calendrier précis lors de la phase de stratégie et nous nous y tenons strictement."
              },
              {
                q: "Faites-vous la refonte de sites web existants ?",
                a: "Oui. Nous aidons souvent les entreprises à moderniser leurs plateformes existantes. Nous commençons par un audit UX et technique complet pour déterminer si une refonte itérative ou une reconstruction complète est l'approche la plus rentable."
              },
              {
                q: "Proposez-vous une maintenance continue ?",
                a: "Absolument. Nous considérons le lancement comme le début de notre partenariat. Nous proposons des forfaits de support et de maintenance structurés pour garantir que votre produit numérique reste sécurisé, rapide et aligné sur l'évolution de vos besoins commerciaux."
              },
              {
                q: "Que se passe-t-il après vous avoir contacté ?",
                a: "Nous planifierons un bref appel d'introduction sans engagement dans les 24 heures pour discuter de vos objectifs commerciaux et des exigences de votre projet. Si nous sommes compatibles, nous passerons à notre processus de découverte formel."
              }
            ].map((faq, idx) => (
              <Reveal key={idx} delay={0.1}>
                <div className="border-b border-border">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between py-6 text-left focus:outline-none cursor-pointer"
                    aria-expanded={activeFaq === idx}
                  >
                    <span className="text-lg font-medium pr-8 text-foreground">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {activeFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-muted-foreground pb-8 leading-relaxed text-base">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 — FINAL CTA */}
      <section className="py-32 md:py-44 px-6 bg-foreground text-background relative overflow-hidden border-t border-border">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
          <Reveal>
            <h2 className="text-4xl md:text-6xl lg:text-7xl leading-[1.08] mb-8 text-balance font-light">
              Vous avez un projet <br />
              <span className="font-semibold italic text-background">en tête ?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-base md:text-xl text-background/75 mb-10 max-w-2xl leading-relaxed text-balance mx-auto">
              Dites-nous ce que vous souhaitez accomplir. Nous analysons vos besoins et vous proposons une feuille de route technique claire sous 24 à 48 heures.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 mx-auto w-fit  ">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-9 py-5 text-sm font-semibold text-foreground bg-background hover:bg-background/90 transition-colors uppercase tracking-widest rounded-none shadow-lg group"
              >
                <span>Démarrer un projet</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/tarifs"
                className="inline-flex items-center justify-center px-9 py-5 text-sm font-medium text-background border border-background/30 hover:bg-background/10 transition-colors uppercase tracking-widest"
              >
                Consulter nos tarifs
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-xs uppercase tracking-wider text-background/60 font-medium pt-8 mt-8 border-t border-background/15 w-full max-w-lg mx-auto">

            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
