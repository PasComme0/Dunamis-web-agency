'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/**
 * Page de redirection pour le projet Chronos Horlogerie sous la route /work/chronos.
 * 
 * @returns Composant de redirection automatique vers /chronos.html
 */
export default function ChronosHorlogeriePage() {
  const router = useRouter();

  useEffect(() => {
    // Redirection automatique vers la vitrine horlogère de haute précision Chronos Horlogerie
    console.info('[Route:ChronosHorlogerie] Redirection vers /chronos.html');
    window.location.href = '/chronos.html';
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#09090b] text-[#f4f4f5]">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4 tracking-wider uppercase font-serif text-[#ffffff]">CHRONOS HORLOGERIE</h1>
        <p className="text-sm text-zinc-400 mb-6">Chargement de la vitrine d&apos;ingénierie horlogère de haute précision en cours...</p>
        <a
          href="/chronos.html"
          className="inline-block px-6 py-3 rounded bg-zinc-100 text-zinc-900 font-semibold text-sm hover:bg-white transition-colors"
        >
          Accéder à la vitrine
        </a>
      </div>
    </div>
  );
}
