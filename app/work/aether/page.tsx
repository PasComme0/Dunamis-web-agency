'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/**
 * Page de redirection pour le projet Aether Systems sous la route /work/aether.
 * 
 * @returns Composant de redirection automatique vers /aether.html
 */
export default function AetherPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirection automatique vers la page interactive complète Aether Systems
    console.info('[Route:Aether] Redirection vers /aether.html');
    window.location.href = '/aether.html';
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#101419] text-[#e0e2ea]">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">AETHER SYSTEMS</h1>
        <p className="text-sm text-gray-300 mb-6">Chargement de la plateforme d&apos;architecture L3 en cours...</p>
        <a
          href="/aether.html"
          className="inline-block px-6 py-3 rounded-lg bg-[#00f0ff] text-[#101419] font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          Accéder à la plateforme
        </a>
      </div>
    </div>
  );
}
