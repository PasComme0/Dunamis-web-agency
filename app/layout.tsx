import type {Metadata} from 'next';
import localFont from 'next/font/local';
import './globals.css';
import SmoothScrolling from '@/components/layout/SmoothScrolling';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const outfit = localFont({
  src: [
    {
      path: '../public/fonts/Outfit-latin-ext.woff2',
      style: 'normal',
    },
    {
      path: '../public/fonts/Outfit-latin.woff2',
      style: 'normal',
    },
  ],
  weight: '100 900',
  display: 'swap',
  variable: '--font-outfit',
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
});

/**
 * Métadonnées globales de l'application Next.js.
 * Configuré avec les titres, descriptions et les icônes favicon de la marque.
 */
export const metadata: Metadata = {
  title: 'Agence Digitale | Solutions Modernes',
  description: 'Solutions digitales pour les entreprises ambitieuses.',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/icon.png',
  },
};

/**
 * Composant de mise en page racine (RootLayout).
 * Configure le document HTML global, la typographie et la structure générale de l'application.
 * 
 * @param props - Les propriétés du composant contenant les enfants React à afficher.
 * @returns L'arborescence DOM complète de la page.
 */
export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="fr" className={outfit.variable}>
      <head>
        <script defer src="https://cloud.umami.is/script.js" data-website-id="a91c69c6-a383-46d3-96c5-8e65ef2bc0f7"></script>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "y7ykd3gpxt");
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning className={`${outfit.className} min-h-screen flex flex-col selection:bg-foreground selection:text-background font-sans`}>
        <SmoothScrolling>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
