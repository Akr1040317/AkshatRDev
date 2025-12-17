'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Copy, Check } from 'lucide-react';

const email = 'akshra0317@gmail.com';

export default function ContactPanel() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-12"
      >
        <div className="space-y-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text">Contact</h1>
          <p className="text-muted text-lg">
            Let's build something serious.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          {/* Email */}
          <motion.button
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            onClick={handleCopyEmail}
            className="glass-2 rounded-xl px-8 py-4 flex items-center gap-4 hover:bg-panel-2 transition-all neon-glow group min-w-[280px] justify-center"
          >
            {copied ? (
              <>
                <Check size={24} className="text-green-400" />
                <span className="text-lg font-semibold">Copied!</span>
              </>
            ) : (
              <>
                <Mail size={24} className="text-purple group-hover:scale-110 transition-transform" />
                <span className="text-lg font-semibold">{email}</span>
                <Copy size={20} className="text-muted group-hover:text-white transition-colors" />
              </>
            )}
          </motion.button>

          {/* Social Links */}
          <div className="flex gap-4">
            <motion.a
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              href="https://www.linkedin.com/in/akshat--rastogi"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-xl p-4 hover:bg-panel-2 transition-all neon-glow group"
            >
              <Linkedin size={24} className="text-blue group-hover:scale-110 transition-transform" />
            </motion.a>
            <motion.a
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              href="https://github.com/akshatrastogi"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-xl p-4 hover:bg-panel-2 transition-all neon-glow group"
            >
              <Github size={24} className="text-purple group-hover:scale-110 transition-transform" />
            </motion.a>
            <motion.a
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              href="https://cal.com/akshatr"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-xl px-6 py-4 hover:bg-panel-2 transition-all neon-glow group flex items-center gap-2"
            >
              <span className="text-sm font-semibold">Schedule a call</span>
            </motion.a>
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center text-muted text-sm pt-8 border-t border-panel"
        >
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </motion.div>
      </motion.div>
    </div>
  );
}

