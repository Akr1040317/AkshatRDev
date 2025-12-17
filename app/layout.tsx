import type { Metadata } from 'next';
import './globals.css';
import dynamic from 'next/dynamic';

const ParticlesBackground = dynamic(() => import('@/components/ParticlesBackground'), {
  ssr: false,
});

export const metadata: Metadata = {
  title: 'Akshat Rastogi | Portfolio',
  description: 'Software Engineer I at Honeywell Aerospace | Founder of Hive',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="fixed inset-0 bg-bg-0">
          <ParticlesBackground />
        </div>
        <div className="noise-overlay" />
        <div className="vignette" />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}

