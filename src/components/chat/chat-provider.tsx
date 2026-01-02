'use client';

import { ReactNode, useEffect } from 'react';

interface ChatProviderProps {
  children: ReactNode;
}

export function ChatProvider({ children }: ChatProviderProps) {
  useEffect(() => {
    // Initialize Crisp chat widget
    if (
      typeof window !== 'undefined' &&
      process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID &&
      process.env.NEXT_PUBLIC_ENABLE_CHAT === 'true'
    ) {
      // Load Crisp script
      const script = document.createElement('script');
      script.innerHTML = `
        window.$crisp=[];
        window.CRISP_WEBSITE_ID="${process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID}";
        (function(){
          d=document;
          s=d.createElement("script");
          s.src="https://client.crisp.chat/l.js";
          s.async=1;
          d.getElementsByTagName("head")[0].appendChild(s);
        })();
      `;
      document.head.appendChild(script);

      return () => {
        // Cleanup if needed
        const crispScript = document.querySelector('script[src*="crisp.chat"]');
        if (crispScript) {
          crispScript.remove();
        }
      };
    }
  }, []);

  return <>{children}</>;
}

