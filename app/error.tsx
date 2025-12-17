'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-bg-0">
      <div className="text-center space-y-6 max-w-md">
        <h1 className="text-4xl font-bold gradient-text">Something went wrong!</h1>
        <p className="text-muted">{error.message || 'An unexpected error occurred'}</p>
        <button
          onClick={reset}
          className="glass-2 rounded-xl px-6 py-3 hover:bg-panel-2 transition-colors neon-glow"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

