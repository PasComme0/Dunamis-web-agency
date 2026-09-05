'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/**
 * Page de redirection pour le projet Kroma Atelier sous la route /work/kroma.
 * 
 * @returns Composant de redirection automatique vers /kroma.html
 */
export default function KromaAtelierPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirection automatique vers la vitrine architecturale complète Kroma Atelier
    console.info('[Route:KromaAtelier] Redirection vers /kroma.html');
    window.location.href = '/kroma.html';
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#141311] text-[#e6e2de]">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4 tracking-wider uppercase font-serif text-[#ffb68d]">KROMA ATELIER</h1>
        <p className="text-sm text-gray-400 mb-6">Chargement de la vitrine d&apos;architecture moderne en cours...</p>
        <a
          href="/kroma.html"
          className="inline-block px-6 py-3 rounded bg-[#cd7d4d] text-white font-semibold text-sm hover:bg-[#ffb68d] hover:text-[#141311] transition-colors"
        >
          Accéder à la vitrine
        </a>
      </div>
    </div>
  );
}
