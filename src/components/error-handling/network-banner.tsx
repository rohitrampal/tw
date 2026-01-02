'use client';

import { useEffect, useState } from 'react';
import { Wifi, WifiOff } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function NetworkBanner() {
  const [isOnline, setIsOnline] = useState(true);
  const [wasOffline, setWasOffline] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      // Keep banner visible for 2 seconds after reconnection
      setTimeout(() => setWasOffline(false), 2000);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setWasOffline(true);
    };

    // Check initial state
    setIsOnline(navigator.onLine);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <AnimatePresence>
      {(!isOnline || wasOffline) && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-50 bg-error-500 text-white text-center py-3 px-4"
          role="alert"
          aria-live="polite"
        >
          <div className="container-custom flex items-center justify-center gap-3">
            {!isOnline ? (
              <>
                <WifiOff className="w-5 h-5" aria-hidden="true" />
                <div>
                  <p className="font-semibold">Slow or lost internet connection detected.</p>
                  <p className="text-sm">Your data is being saved locally. Retrying connection...</p>
                </div>
                <button
                  onClick={() => window.location.reload()}
                  className="ml-4 px-4 py-1 bg-white text-error-500 rounded hover:bg-gray-100 focus:outline-2 focus:outline-white transition-colors"
                  aria-label="Retry connection"
                >
                  Retry
                </button>
              </>
            ) : (
              <>
                <Wifi className="w-5 h-5" aria-hidden="true" />
                <p className="font-semibold">Connection restored. Syncing your data...</p>
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

