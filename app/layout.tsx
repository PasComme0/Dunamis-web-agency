import type {Metadata} from 'next';
import './globals.css';
import SmoothScrolling from '@/components/layout/SmoothScrolling';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Agence Digitale | Solutions Modernes',
  description: 'Solutions digitales pour les entreprises ambitieuses.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="fr">
      <body suppressHydrationWarning className="min-h-screen flex flex-col selection:bg-foreground selection:text-background">
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
