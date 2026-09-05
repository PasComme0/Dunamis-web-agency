'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Reveal } from '@/components/ui/Reveal';
import {
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Mail,
  Phone,
  Clock,
  ShieldCheck,
  Calendar,
  MessageSquare,
  Building2,
  User,
  Send
} from 'lucide-react';

const serviceOptions = [
  'Développement Web',
  'Mobile iOS & Android',
  'Plateforme SaaS',
  'Design & Branding',
  'IA & Data Analytics',
  'Conseil & Audit'
];

const budgetRanges = [
  '< 10 000 €',
  '10 000 € - 25 000 €',
  '25 000 € - 50 000 €',
  '50 000 € +'
];

export default function ContactPage() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [selectedService, setSelectedService] = useState<string>('Développement Web');
  const [selectedBudget, setSelectedBudget] = useState<string>('10 000 € - 25 000 €');

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');

    // Simulate network request
    setTimeout(() => {
      setFormState('success');
    }, 1200);
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-background text-foreground">
      {/* HERO SECTION */}
      <section className="pt-44 pb-20 px-6 md:px-12 bg-foreground text-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="max-w-3xl">
            <Reveal>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.08] mb-6 text-balance tracking-tight font-light">
                Parlons de votre <br />
                <span className="font-semibold italic text-background">prochain projet.</span>
              </h1>
            </Reveal>

          </div>
        </div>
      </section>

      {/* FORM & DETAILS SECTION */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

            {/* CONTACT INFO & TRUST CARD (Left Column) */}
            <div className="lg:col-span-5 flex flex-col gap-10">
              <Reveal delay={0.1}>

                {/* Direct Contacts */}
                <div className="flex flex-col gap-6 py-6 border-b border-border">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground block mb-1">
                      Email direct
                    </span>
                    <a
                      href="mailto:info@dunamis-web-agency.com"
                      className="text-lg md:text-xl font-medium text-foreground hover:opacity-75 transition-opacity inline-flex items-center gap-2"
                    >
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      info@dunamis-web-agency.com
                    </a>
                  </div>

                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground block mb-1">
                      Téléphone &amp; WhatsApp
                    </span>
                    <a
                      href="tel:+2250171483627"
                      className="text-lg md:text-xl font-medium text-foreground hover:opacity-75 transition-opacity inline-flex items-center gap-2"
                    >
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      +225 01 71 48 36 27
                    </a>
                  </div>

                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground block mb-1">
                      Horaires d&apos;échange
                    </span>
                    <div className="text-sm text-foreground/90 inline-flex items-center gap-2 font-medium">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      Du Lundi au Vendredi • 09h00 - 18h30 (GMT)
                    </div>
                  </div>
                </div>

              </Reveal>
            </div>

            {/* INTERACTIVE FORM (Right Column) */}
            <div className="lg:col-span-7 bg-card border border-border p-8 md:p-12 shadow-sm">
              <Reveal delay={0.2} className="w-full">
                {formState === 'success' ? (
                  <div className="py-16 px-6 flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 bg-muted border border-border rounded-full flex items-center justify-center mb-6 text-foreground">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                      Message Transmis avec Succès
                    </span>
                    <h3 className="text-3xl md:text-4xl font-normal tracking-tight mb-4">
                      Merci pour votre confiance.
                    </h3>
                    <p className="text-muted-foreground max-w-md leading-relaxed mb-10 text-sm md:text-base">
                      Nous avons bien reçu votre demande concernant le service <span className="font-semibold text-foreground">{selectedService}</span>. Notre équipe prépare un retour sur mesure et vous contactera dans les plus brefs délais.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button
                        onClick={() => {
                          setFormState('idle');
                          setFormData({ name: '', company: '', email: '', phone: '', message: '' });
                        }}
                        className="px-8 py-3.5 text-xs font-semibold uppercase tracking-wider bg-muted text-foreground border border-border hover:bg-muted/80 transition-colors"
                      >
                        Envoyer un autre message
                      </button>
                      <Link
                        href="/"
                        className="px-8 py-3.5 text-xs font-semibold uppercase tracking-wider bg-foreground text-background hover:bg-foreground/90 transition-colors"
                      >
                        Retour à l&apos;accueil
                      </Link>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                    {formState === 'error' && (
                      <div className="p-4 bg-red-50 text-red-900 border border-red-200 flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                        <p className="text-sm">Une erreur s&apos;est produite. Veuillez réessayer ou nous contacter directement par email.</p>
                      </div>
                    )}

                    {/* Service Selector */}
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-3">
                        1. Quel est votre besoin principal ? *
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                        {serviceOptions.map((service) => {
                          const isSelected = selectedService === service;
                          return (
                            <button
                              type="button"
                              key={service}
                              onClick={() => setSelectedService(service)}
                              className={`px-3.5 py-2.5 text-xs font-medium border text-left transition-all cursor-pointer ${isSelected
                                  ? 'bg-foreground text-background border-foreground shadow-sm'
                                  : 'bg-background hover:bg-muted text-muted-foreground hover:text-foreground border-border'
                                }`}
                            >
                              {service}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    <div className="h-px bg-border my-1" />

                    {/* Contact Fields */}
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-4">
                        3. Vos coordonnées
                      </span>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="name" className="text-xs font-medium text-foreground">
                            Nom et prénom *
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              id="name"
                              name="name"
                              required
                              value={formData.name}
                              onChange={handleChange}
                              className="w-full bg-muted/30 border border-border focus:border-foreground outline-none px-3.5 py-2.5 text-sm transition-colors placeholder:text-muted-foreground/40 text-foreground"
                              placeholder="ex: Jean Dupont"
                            />
                          </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="company" className="text-xs font-medium text-foreground">
                            Entreprise / Organisation
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full bg-muted/30 border border-border focus:border-foreground outline-none px-3.5 py-2.5 text-sm transition-colors placeholder:text-muted-foreground/40 text-foreground"
                            placeholder="ex: Acme Corp"
                          />
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="email" className="text-xs font-medium text-foreground">
                            Adresse email professionnelle *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-muted/30 border border-border focus:border-foreground outline-none px-3.5 py-2.5 text-sm transition-colors placeholder:text-muted-foreground/40 text-foreground"
                            placeholder="ex: jean@entreprise.com"
                          />
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="phone" className="text-xs font-medium text-foreground">
                            Numéro de téléphone
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full bg-muted/30 border border-border focus:border-foreground outline-none px-3.5 py-2.5 text-sm transition-colors placeholder:text-muted-foreground/40 text-foreground"
                            placeholder="ex: +225 01 00 00 00 00"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Message / Project details */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="text-xs font-medium text-foreground">
                        Décrivez brièvement votre projet ou vos objectifs *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-muted/30 border border-border focus:border-foreground outline-none p-3.5 text-sm transition-colors placeholder:text-muted-foreground/40 text-foreground resize-y"
                        placeholder="Quels sont les objectifs clés, les fonctionnalités souhaitées ou les délais envisagés ?"
                      />
                    </div>

                    {/* Submit Bar */}
                    <div className="pt-4 flex flex-col sm:flex-row items-center gap-6 justify-between border-t border-border">
                      <p className="text-[11px] text-muted-foreground leading-relaxed">
                        En soumettant ce formulaire, vous recevez une réponse sous 24h. Données 100% confidentielles.
                      </p>

                      <button
                        type="submit"
                        disabled={formState === 'submitting'}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 text-xs font-semibold text-background bg-foreground hover:bg-foreground/90 transition-all uppercase tracking-widest rounded-none disabled:opacity-70 disabled:cursor-not-allowed shrink-0 shadow-sm cursor-pointer group"
                      >
                        {formState === 'submitting' ? (
                          <span className="flex items-center gap-2">
                            <span className="w-3.5 h-3.5 border-2 border-background border-t-transparent rounded-full animate-spin" />
                            Transmission en cours...
                          </span>
                        ) : (
                          <>
                            <span>Envoyer la demande</span>
                            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                          </>
                        )}
                      </button>
                    </div>

                  </form>
                )}
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
