'use client';

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export function ClientLangWrapper({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Update HTML lang attribute when language changes
    if (typeof document !== 'undefined') {
      document.documentElement.lang = i18n.language;
    }
  }, [i18n.language]);

  return <>{children}</>;
}

