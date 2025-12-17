'use client';

import { useState, useEffect } from 'react';

export type Section = 'overview' | 'products' | 'projects' | 'experience' | 'education' | 'skills' | 'leadership' | 'contact';

export function useScrollSpy(sections: Section[]) {
  const [activeSection, setActiveSection] = useState<Section>('overview');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id as Section;
          if (sections.includes(id)) {
            setActiveSection(id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elements: HTMLElement[] = [];

    // Wait for DOM to be ready
    const setupObserver = () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          observer.observe(element);
          elements.push(element);
        }
      });
    };

    // Use requestAnimationFrame to ensure DOM is ready
    const rafId = requestAnimationFrame(() => {
      setupObserver();
    });

    return () => {
      cancelAnimationFrame(rafId);
      elements.forEach((element) => {
        observer.unobserve(element);
      });
      observer.disconnect();
    };
  }, [sections]);

  return activeSection;
}

