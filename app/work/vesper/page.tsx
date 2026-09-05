'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/**
 * Page de redirection pour le projet Vesper Concierge sous la route /work/vesper.
 * 
 * @returns Composant de redirection automatique vers /vesper.html
 */
export default function VesperConciergePage() {
  const router = useRouter();

  useEffect(() => {
    // Redirection automatique vers la vitrine mobile VIP Vesper Concierge avec simulateur multi-écrans
    console.info('[Route:VesperConcierge] Redirection vers /vesper.html');
    window.location.href = '/vesper.html';
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0d12] text-[#f0f3f8]">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4 tracking-wider uppercase font-serif text-[#ffffff]">VESPER CONCIERGE</h1>
        <p className="text-sm text-gray-400 mb-6">Chargement de la vitrine mobile d&apos;exception en cours...</p>
        <a
          href="/vesper.html"
          className="inline-block px-6 py-3 rounded bg-[#ea3323] text-white font-semibold text-sm hover:bg-red-600 transition-colors shadow-lg shadow-red-900/30"
        >
          Accéder à la vitrine
        </a>
      </div>
    </div>
  );
}
