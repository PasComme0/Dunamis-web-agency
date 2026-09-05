'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/**
 * Page de redirection pour le projet Nexus Wealth sous la route /work/nexus.
 * 
 * @returns Composant de redirection automatique vers /nexus.html
 */
export default function NexusWealthPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirection automatique vers la plateforme complète Nexus Wealth
    console.info('[Route:NexusWealth] Redirection vers /nexus.html');
    window.location.href = '/nexus.html';
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a122a] text-[#dbe1ff]">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">NEXUS WEALTH</h1>
        <p className="text-sm text-gray-300 mb-6">Chargement de la plateforme Private Office en cours...</p>
        <a
          href="/nexus.html"
          className="inline-block px-6 py-3 rounded-lg bg-[#e9c176] text-[#0a122a] font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          Accéder à la plateforme
        </a>
      </div>
    </div>
  );
}
