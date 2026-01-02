'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function BookingPage() {
  useEffect(() => {
    // Calendly will auto-initialize when script loads
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 section-padding">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="heading-h2 mb-4">Book Your Discovery Call</h1>
          <p className="body-large text-gray-600">
            Schedule a 45-minute call to discuss your operational challenges and explore how TwelfthKey can help
          </p>
        </div>

        <div className="card">
          {process.env.NEXT_PUBLIC_CALENDLY_URL ? (
            <div
              className="calendly-inline-widget"
              data-url={process.env.NEXT_PUBLIC_CALENDLY_URL}
              style={{ minHeight: '700px', width: '100%' }}
            />
          ) : (
            <div className="text-center py-12">
              <p className="body-default text-gray-600 mb-4">
                Calendly integration not configured. Please contact us directly.
              </p>
              <a href="mailto:contact@twelfthkey.com" className="text-teal-500 hover:underline">
                contact@twelfthkey.com
              </a>
            </div>
          )}
        </div>

        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
      </div>
    </div>
  );
}

