'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/**
 * Page de redirection pour le projet BABI CRUNCH & DABALI sous la route /work/babi-crunch-dabali.
 * 
 * @returns Composant de redirection automatique vers /babi-crunch-dabali.html
 */
export default function BabiCrunchPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirection automatique vers la page interactive complète
    console.info('[Route:BabiCrunch] Redirection vers /babi-crunch-dabali.html');
    window.location.href = '/babi-crunch-dabali.html';
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#2B0C0E] text-[#FFF7EE]">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">BABI CRUNCH &amp; DABALI</h1>
        <p className="text-sm text-gray-300 mb-6">Chargement de la plateforme en cours...</p>
        <a
          href="/babi-crunch-dabali.html"
          className="inline-block px-6 py-3 rounded-full bg-[#FF5500] text-white font-semibold text-sm hover:bg-[#E04B00] transition-colors"
        >
          Accéder au site
        </a>
      </div>
    </div>
  );
}
