'use client';

import { useEffect } from 'react';

/**
 * Composant Error Boundary global pour Next.js App Router.
 * 
 * @param error - Erreur capturée
 * @param reset - Fonction de réinitialisation
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('[AppError]', error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-6 py-24">
      <h2 className="text-3xl font-bold mb-4">Une erreur est survenue !</h2>
      <button
        onClick={() => reset()}
        className="px-6 py-3 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
      >
        Réessayer
      </button>
    </div>
  );
}
