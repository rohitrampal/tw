'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export function ClientLangWrapper({ children }: { children: React.ReactNode }) {
  const { i18n, ready } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Update HTML lang attribute when language changes
    // Only update after component is mounted and i18n is ready
    if (mounted && ready && typeof document !== 'undefined' && i18n.language) {
      document.documentElement.lang = i18n.language;
    }
  }, [i18n.language, mounted, ready]);

  return <>{children}</>;
}

