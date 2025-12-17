'use client';

import { motion } from 'framer-motion';

interface AuroraBackgroundProps {
  className?: string;
}

export default function AuroraBackground({ className = '' }: AuroraBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <motion.div
        className="absolute top-0 -left-1/4 w-[600px] h-[600px] rounded-full blur-[120px] opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(255, 79, 216, 0.4) 0%, transparent 70%)',
        }}
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.1, 0.9, 1],
          opacity: [0.3, 0.4, 0.35, 0.3],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute top-1/3 -right-1/4 w-[500px] h-[500px] rounded-full blur-[100px] opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)',
        }}
        animate={{
          x: [0, -40, 40, 0],
          y: [0, 40, -40, 0],
          scale: [1, 1.2, 0.8, 1],
          opacity: [0.25, 0.35, 0.25, 0.25],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 w-[550px] h-[550px] rounded-full blur-[110px] opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(76, 201, 255, 0.4) 0%, transparent 70%)',
        }}
        animate={{
          x: [0, 50, -30, 0],
          y: [0, 30, -50, 0],
          scale: [1, 0.8, 1.15, 1],
          opacity: [0.2, 0.3, 0.25, 0.2],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}

