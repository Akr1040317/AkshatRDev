'use client';

import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6"
      >
        <h1 className="text-6xl font-bold gradient-text">404</h1>
        <p className="text-xl text-muted">Page not found</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 glass-2 rounded-xl px-6 py-3 hover:bg-panel-2 transition-colors neon-glow"
        >
          <Home size={20} />
          <span>Go Home</span>
        </Link>
      </motion.div>
    </div>
  );
}

