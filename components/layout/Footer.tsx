import Link from 'next/link';
import Image from 'next/image';
import logo from '@/images/DunamisLogoV2 - Resized.png';

/**
 * Composant Footer (Pied de page global).
 * Affiche la présentation de la marque avec le logo, les navigation secondaires, les liens de contact et le copyright.
 * 
 * @returns Le composant de pied de page réactif.
 */
export default function Footer() {
  console.debug('[Footer] Rendu du composant Footer.');

  return (
    <footer className="bg-foreground text-background py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Bloc 1 : Présentation & Logo */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6 group">
              <Image
                src={logo}
                alt="Dunamis Logo"
                width={180}
                height={50}
                className="h-10 w-auto object-contain transition-opacity group-hover:opacity-90"
              />
            </Link>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              Solutions digitales pour les entreprises ambitieuses. Nous concevons des plateformes génératrices de résultats.
            </p>
          </div>

          {/* Bloc 2 : Navigation Services */}
          <div>
            <h4 className="font-medium mb-6 text-sm">Services</h4>
            <ul className="flex flex-col gap-4 text-sm text-muted">
              <li><Link href="/contact" className="hover:text-background transition-colors">Développement Web</Link></li>
              <li><Link href="/contact" className="hover:text-background transition-colors">Développement Mobile</Link></li>
              <li><Link href="/contact" className="hover:text-background transition-colors">Design</Link></li>
              <li><Link href="/contact" className="hover:text-background transition-colors">Conseil</Link></li>
            </ul>
          </div>

          {/* Bloc 3 : Navigation Agence */}
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

          {/* Bloc 4 : Coordonnées de Contact */}
          <div>
            <h4 className="font-medium mb-6 text-sm">Contact</h4>
            <ul className="flex flex-col gap-4 text-sm text-muted">
              <li><a href="mailto:info@dunamis-web-agency.com" className="hover:text-background transition-colors">info@dunamis-web-agency.com</a></li>
              <li><a href="tel:+2250171483627" className="hover:text-background transition-colors">+225 0584583936</a></li>
            </ul>
          </div>
        </div>

        {/* Bloc 6 : Mentions de bas de page & Copyright */}
        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted">&copy; {new Date().getFullYear()} Dunamis. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

