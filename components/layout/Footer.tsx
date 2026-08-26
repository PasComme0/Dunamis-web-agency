import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="font-serif text-2xl tracking-tight font-medium inline-block mb-6">
              Dunamis.
            </Link>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              Solutions digitales pour les entreprises ambitieuses. Nous concevons des plateformes génératrices de résultats.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-6 text-sm">Services</h4>
            <ul className="flex flex-col gap-4 text-sm text-muted">
              <li><Link href="/services/web" className="hover:text-background transition-colors">Développement Web</Link></li>
              <li><Link href="/services/mobile" className="hover:text-background transition-colors">Développement Mobile</Link></li>
              <li><Link href="/services/design" className="hover:text-background transition-colors">Design</Link></li>
              <li><Link href="/services/consulting" className="hover:text-background transition-colors">Conseil</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-6 text-sm">L&apos;Agence</h4>
            <ul className="flex flex-col gap-4 text-sm text-muted">
              <li><Link href="/about" className="hover:text-background transition-colors">À Propos</Link></li>
              <li><Link href="/work" className="hover:text-background transition-colors">Réalisations</Link></li>
              <li><Link href="/process" className="hover:text-background transition-colors">Processus</Link></li>
              <li><Link href="/faq" className="hover:text-background transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-background transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-6 text-sm">Ressources</h4>
            <ul className="flex flex-col gap-4 text-sm text-muted">
              <li><Link href="/resources" className="hover:text-background transition-colors">Blog</Link></li>
              <li><Link href="/guides" className="hover:text-background transition-colors">Guides</Link></li>
              <li><Link href="/articles" className="hover:text-background transition-colors">Articles</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-6 text-sm">Contact</h4>
            <ul className="flex flex-col gap-4 text-sm text-muted">
              <li><a href="mailto:dunamis@Dunamis.com" className="hover:text-background transition-colors">dunamis@Dunamis.com</a></li>
              <li><a href="tel:+2250171483627" className="hover:text-background transition-colors">+225 0584583936</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted">&copy; {new Date().getFullYear()} Dunamis. Tous droits réservés.</p>

        </div>
      </div>
    </footer>
  );
}
