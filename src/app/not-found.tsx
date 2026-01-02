import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="heading-hero text-navy-500 mb-4">404</h1>
        <h2 className="heading-h3 text-gray-700 mb-4">Oops! Page not found.</h2>
        <p className="body-default text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button variant="primary" asChild>
            <Link href="/">
              <Home className="w-4 h-4 mr-2 inline" aria-hidden="true" />
              Go to Homepage
            </Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/consulting/contact">
              Contact Us
            </Link>
          </Button>
        </div>
        <div className="w-full max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" aria-hidden="true" />
            <input
              type="search"
              placeholder="Search the site..."
              aria-label="Search site"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

