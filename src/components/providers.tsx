'use client';

import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n/config';
import { AnalyticsProvider } from './analytics/analytics-provider';
import { ErrorBoundary } from './error-handling/error-boundary';
import { ChatProvider } from './chat/chat-provider';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  // Ensure i18n is initialized (it's already initialized in config.ts)
  // The I18nextProvider will handle hydration properly
  return (
    <I18nextProvider i18n={i18n}>
      <ErrorBoundary>
        <AnalyticsProvider>
          <ChatProvider>
            {children}
          </ChatProvider>
        </AnalyticsProvider>
      </ErrorBoundary>
    </I18nextProvider>
  );
}

