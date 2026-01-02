'use client';

import { useEffect } from 'react';

export function SkipToContent() {
  useEffect(() => {
    // Keyboard shortcut: 'S' key to skip to content
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 's' || e.key === 'S') {
        if (e.target === document.body || (e.target as HTMLElement).tagName === 'BODY') {
          e.preventDefault();
          const mainContent = document.getElementById('main-content');
          if (mainContent) {
            mainContent.focus();
            mainContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-gold-300 focus:text-white focus:rounded-lg focus:font-semibold"
    >
      Skip to main content
    </a>
  );
}

