'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Home } from 'lucide-react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to error reporting service
    console.error('Error:', error);
  }, [error]);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <AlertTriangle className="w-16 h-16 text-error-500 mx-auto mb-4" aria-hidden="true" />
        <h1 className="heading-h3 text-navy-500 mb-2">Something went wrong</h1>
        <p className="body-default text-gray-600 mb-6">
          We're sorry, but something unexpected happened. Please try again or contact support if the problem persists.
        </p>
        {process.env.NODE_ENV === 'development' && (
          <details className="mb-6 text-left">
            <summary className="cursor-pointer text-body-small text-gray-500 mb-2">
              Error Details (Development Only)
            </summary>
            <pre className="text-xs bg-gray-100 p-4 rounded overflow-auto max-h-48">
              {error.message}
              {error.stack}
            </pre>
          </details>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={reset} variant="primary">
            Try Again
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/">
              <Home className="w-4 h-4 mr-2 inline" aria-hidden="true" />
              Go to Homepage
            </Link>
          </Button>
        </div>
        <p className="text-body-small text-gray-500 mt-6">
          Error ID: {error.digest || Math.random().toString(36).substring(2, 9)}
        </p>
      </div>
    </main>
  );
}

