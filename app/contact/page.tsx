'use client';

import { useState } from 'react';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactPage() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Simulate network request
    setTimeout(() => {
      // In a real app, you would handle the fetch request to your API here
      setFormState('success');
    }, 1500);
  };

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* HERO SECTION */}
      <section className="pt-48 pb-24 px-6 md:px-12 bg-foreground text-background">
        <div className="max-w-7xl mx-auto w-full">
          <Reveal>
            <div className="mb-0">
              <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-serif leading-[1] mb-8 text-balance tracking-tight">
                Parlons de <br /><span className="italic font-light">votre projet.</span>
              </h1>
              <p className="text-lg md:text-xl text-background/80 max-w-2xl leading-relaxed">
                Nous accompagnons les organisations ambitieuses pour créer des produits digitaux générateurs de résultats. Remplissez le formulaire ci-dessous et nous vous répondrons sous 24 heures.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="py-24 px-6 md:px-12 bg-background text-foreground">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* CONTACT INFO (Left) */}
            <div className="lg:col-span-4 flex flex-col gap-12">
            <Reveal delay={0.1}>
              <div className="flex flex-col gap-8">
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">Demande directe</h3>
                  <a href="mailto:hello@agency.com" className="text-xl md:text-2xl font-serif hover:text-muted-foreground transition-colors">
                    dunamis@agency.com
                  </a>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">Téléphone</h3>
                  <a href="tel:+1234567890" className="text-xl md:text-2xl font-serif hover:text-muted-foreground transition-colors">
                    +225 01 71 48 36 27
                  </a>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4"></h3>
                  <address className="text-xl md:text-2xl font-serif not-italic text-foreground">
                    <br />
                    <br />
                    
                  </address>
                </div>
              </div>
            </Reveal>
          </div>

          {/* FORM (Right) */}
          <div className="lg:col-span-8">
            <Reveal delay={0.2} className="w-full">
              {formState === 'success' ? (
                <div className="bg-muted p-12 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
                  <CheckCircle2 className="w-12 h-12 mb-6 text-foreground" />
                  <h3 className="text-3xl font-serif mb-4">Demande reçue</h3>
                  <p className="text-muted-foreground max-w-md">
                    Merci de nous avoir contactés. Nous avons bien reçu les détails de votre projet et un directeur vous recontactera sous 24 heures pour discuter des prochaines étapes.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                  
                  {formState === 'error' && (
                    <div className="p-4 bg-red-50 text-red-900 border border-red-200 flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                      <p className="text-sm">Une erreur s&apos;est produite lors de l&apos;envoi. Veuillez réessayer ou nous envoyer un email directement.</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-sm font-medium">Nom complet *</label>
                      <input 
                        type="text" 
                        id="name" 
                        required
                        className="bg-transparent border-b border-border focus:border-foreground outline-none py-3 transition-colors rounded-none placeholder:text-muted-foreground/50"
                        placeholder="Jane Doe"
                      />
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <label htmlFor="company" className="text-sm font-medium">Entreprise</label>
                      <input 
                        type="text" 
                        id="company" 
                        className="bg-transparent border-b border-border focus:border-foreground outline-none py-3 transition-colors rounded-none placeholder:text-muted-foreground/50"
                        placeholder="Organization Name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-sm font-medium">Adresse email *</label>
                      <input 
                        type="email" 
                        id="email" 
                        required
                        className="bg-transparent border-b border-border focus:border-foreground outline-none py-3 transition-colors rounded-none placeholder:text-muted-foreground/50"
                        placeholder="jane@company.com"
                      />
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-sm font-medium">Numéro de téléphone</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="bg-transparent border-b border-border focus:border-foreground outline-none py-3 transition-colors rounded-none placeholder:text-muted-foreground/50"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="service" className="text-sm font-medium">Service requis *</label>
                      <select 
                        id="service" 
                        required
                        className="bg-transparent border-b border-border focus:border-foreground outline-none py-3 transition-colors rounded-none text-foreground appearance-none cursor-pointer"
                        defaultValue=""
                      >
                        <option value="" disabled className="text-muted-foreground">Sélectionner un service</option>
                        <option value="web">Développement Web</option>
                        <option value="mobile">Développement Mobile</option>
                        <option value="design">Design & Identité</option>
                        <option value="consulting">Conseil Digital</option>
                        <option value="multiple">Multiples / Indécis</option>
                      </select>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <label htmlFor="budget" className="text-sm font-medium">Budget du projet</label>
                      <select 
                        id="budget" 
                        className="bg-transparent border-b border-border focus:border-foreground outline-none py-3 transition-colors rounded-none text-foreground appearance-none cursor-pointer"
                        defaultValue=""
                      >
                        <option value="" disabled className="text-muted-foreground">Sélectionner une fourchette</option>
                        <option value="small">Moins de 10 000 €</option>
                        <option value="medium">10 000 € - 25 000 €</option>
                        <option value="large">25 000 € - 50 000 €</option>
                        <option value="enterprise">50 000 € et plus</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-medium">Détails du projet *</label>
                    <textarea 
                      id="message" 
                      required
                      rows={5}
                      className="bg-transparent border-b border-border focus:border-foreground outline-none py-3 transition-colors rounded-none placeholder:text-muted-foreground/50 resize-y"
                      placeholder="Parlez-nous de vos objectifs, de vos délais et des défis spécifiques que vous rencontrez."
                    ></textarea>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center gap-6 justify-between">
                    <p className="text-xs text-muted-foreground max-w-sm">
                      En soumettant ce formulaire, vous acceptez notre politique de confidentialité et nos conditions d&apos;utilisation.
                    </p>
                    
                    <button 
                      type="submit" 
                      disabled={formState === 'submitting'}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 text-sm font-medium text-background bg-foreground hover:bg-foreground/90 transition-colors uppercase tracking-widest rounded-none disabled:opacity-70 disabled:cursor-not-allowed shrink-0"
                    >
                      {formState === 'submitting' ? (
                        'Envoi en cours...'
                      ) : (
                        <>
                          Envoyer la demande <ArrowRight className="w-4 h-4" />
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
