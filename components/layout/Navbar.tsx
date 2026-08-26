'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? 'bg-background/95 backdrop-blur-md border-b border-border py-4 text-foreground'
            : 'bg-transparent py-6 text-background'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="font-serif text-xl tracking-tight font-medium">
            Dunamis.
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className={`text-sm font-medium transition-colors ${scrolled ? 'text-muted-foreground hover:text-foreground' : 'text-background/80 hover:text-background'}`}>Accueil</Link>
            <Link href="/services" className={`text-sm font-medium transition-colors ${scrolled ? 'text-muted-foreground hover:text-foreground' : 'text-background/80 hover:text-background'}`}>Services</Link>
            <Link href="/tarifs" className={`text-sm font-medium transition-colors ${scrolled ? 'text-muted-foreground hover:text-foreground' : 'text-background/80 hover:text-background'}`}>Tarifs</Link>
            <Link href="/work" className={`text-sm font-medium transition-colors ${scrolled ? 'text-muted-foreground hover:text-foreground' : 'text-background/80 hover:text-background'}`}>Réalisations</Link>
            <Link href="/about" className={`text-sm font-medium transition-colors ${scrolled ? 'text-muted-foreground hover:text-foreground' : 'text-background/80 hover:text-background'}`}>À Propos</Link>
            {/*  <Link href="/resources" className={`text-sm font-medium transition-colors ${scrolled ? 'text-muted-foreground hover:text-foreground' : 'text-background/80 hover:text-background'}`}>Ressources</Link> */}
          </nav>

          <div className="hidden md:block">
            <Link href="/contact" className={`inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium transition-colors rounded-none ${scrolled ? 'bg-foreground text-background hover:bg-foreground/90' : 'bg-background text-foreground hover:bg-background/90'
              }`}>
              Démarrer un projet
            </Link>
          </div>

          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-background flex flex-col pt-6 px-6"
          >
            <div className="flex items-center justify-between mb-12">
              <Link href="/" className="font-serif text-xl tracking-tight font-medium" onClick={() => setMobileMenuOpen(false)}>
                Dunamis.
              </Link>
              <button
                className="p-2 -mr-2 text-foreground"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-6 text-2xl font-serif">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">Accueil</Link>
              <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">Services</Link>
              <Link href="/tarifs" onClick={() => setMobileMenuOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">Tarifs</Link>
              <Link href="/work" onClick={() => setMobileMenuOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">Réalisations</Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">À Propos</Link>
              <Link href="/resources" onClick={() => setMobileMenuOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">Ressources</Link>
            </nav>

            <div className="mt-auto pb-12 pt-8 border-t border-border mt-8">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex w-full items-center justify-center px-6 py-4 text-base font-medium text-background bg-foreground rounded-none"
              >
                Démarrer un projet
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
