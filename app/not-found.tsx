import Link from 'next/link';

/**
 * Page 404 Not Found pour l'application Next.js.
 * 
 * @returns Composant 404 (Server Component)
 */
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-6 py-24">
      <h1 className="text-6xl font-bold font-serif mb-4">404</h1>
      <h2 className="text-2xl font-medium mb-6">Page non trouvée</h2>
      <p className="text-muted-foreground text-center max-w-md mb-8">
        La page que vous recherchez n&apos;existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
      >
        Retourner à l&apos;accueil
      </Link>
    </div>
  );
}
