'use client';

import { ReactNode } from 'react';
import { ExitIntentModal, useExitIntent } from '@/components/ui/exit-intent-modal';

export function ExitIntentWrapper({ children }: { children: ReactNode }) {
  const { showModal, setShowModal } = useExitIntent();
  
  return (
    <>
      {children}
      {showModal && <ExitIntentModal onClose={() => setShowModal(false)} />}
    </>
  );
}

