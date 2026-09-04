'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/**
 * Page de redirection pour le projet DjiniPay sous la route /work/djinipay.
 * 
 * @returns Composant de redirection automatique vers /djinipay.html
 */
export default function DjiniPayPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirection automatique vers la page interactive complète DjiniPay
    console.info('[Route:DjiniPay] Redirection vers /djinipay.html');
    window.location.href = '/djinipay.html';
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#070B19] text-[#FFFFFF]">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">DjiniPay</h1>
        <p className="text-sm text-gray-300 mb-6">Chargement de la plateforme financière en cours...</p>
        <a
          href="/djinipay.html"
          className="inline-block px-6 py-3 rounded-full bg-[#38ef7d] text-[#070B19] font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          Accéder au site
        </a>
      </div>
    </div>
  );
}
