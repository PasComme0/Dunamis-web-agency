'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/**
 * Page de redirection pour le projet Orbit Logistics sous la route /work/orbit.
 * 
 * @returns Composant de redirection automatique vers /orbit.html
 */
export default function OrbitLogisticsPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirection automatique vers la plateforme complète Orbit Logistics
    console.info('[Route:OrbitLogistics] Redirection vers /orbit.html');
    window.location.href = '/orbit.html';
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F4F6F9] text-[#1E293B]">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">ORBIT LOGISTICS</h1>
        <p className="text-sm text-gray-600 mb-6">Chargement de la plateforme de suivi de flotte en cours...</p>
        <a
          href="/orbit.html"
          className="inline-block px-6 py-3 rounded-full bg-[#FF5370] text-white font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          Accéder à la plateforme
        </a>
      </div>
    </div>
  );
}
