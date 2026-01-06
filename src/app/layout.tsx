import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/providers';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { SkipToContent } from '@/components/accessibility/skip-to-content';
import { NetworkBanner } from '@/components/error-handling/network-banner';
import { ExitIntentWrapper } from '@/components/layout/exit-intent-wrapper';
import { ClientLangWrapper } from '@/components/layout/client-lang-wrapper';
import { MobileStickyCTA } from '@/components/layout/mobile-sticky-cta';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    default: 'Operational Excellence Consulting | TwelfthKey™ Consulting',
    template: '%s | TwelfthKey™ Consulting',
  },
  description: 'Transform ops chaos into discipline. G2P Framework™ + PraXio™ SaaS. Improve governance 35-59% in 90 days. Fractional CBO at 65-80% savings.',
  keywords: ['operational excellence', 'process improvement', 'governance', 'fractional COO', 'startup consulting', 'MSME solutions'],
  authors: [{ name: 'TwelfthKey Consulting' }],
  creator: 'TwelfthKey Consulting',
  publisher: 'TwelfthKey Consulting',
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    siteName: 'TwelfthKey Consulting',
    title: 'Operational Excellence Consulting | TwelfthKey™',
    description: 'Transform chaos into discipline. Measurable governance improvements for startups and MSMEs.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TwelfthKey Consulting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Operational Excellence Consulting | TwelfthKey™',
    description: 'Transform chaos into discipline. Measurable governance improvements.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`} suppressHydrationWarning>
      <head>
        {/* Schema.org Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'TwelfthKey™ Consulting',
              url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
              logo: `${process.env.NEXT_PUBLIC_APP_URL}/logo.png`,
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+91-XXXXXXXXXX',
                contactType: 'Customer Service',
              },
              sameAs: [
                'https://www.linkedin.com/company/twelfthkey-consulting',
                'https://twitter.com/TwelfthKeyOps',
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <Providers>
          <ClientLangWrapper>
            <ExitIntentWrapper>
              <SkipToContent />
              <NetworkBanner />
              <Header />
              <main id="main-content">{children}</main>
              <Footer />
              <MobileStickyCTA />
            </ExitIntentWrapper>
          </ClientLangWrapper>
        </Providers>
      </body>
    </html>
  );
}

