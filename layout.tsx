import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  title: {
    default: 'ExO Catalyst - Enterprise AI Governance & Digital Transformation',
    template: '%s | ExO Catalyst',
  },
  description:
    'Exponential Digital Transformation. Governed Enterprise AI. Bridge advanced technical AI architecture with board-level risk mitigation. ISO 42001, King IV, POPIA compliant.',
  keywords: [
    'AI governance',
    'Digital transformation',
    'Enterprise AI',
    'POPIA compliance',
    'King IV corporate governance',
    'ISO 42001',
    'AI risk management',
    'Agentic AI',
    'RAG infrastructure',
    'CAIO',
  ],
  authors: [{ name: 'ExO Catalyst', url: 'https://www.exocatalyst.org' }],
  creator: 'ExO Catalyst',
  publisher: 'ExO Catalyst',
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.exocatalyst.org',
    siteName: 'ExO Catalyst',
    title: 'ExO Catalyst - Enterprise AI Governance & Digital Transformation',
    description:
      'Bridge advanced technical AI architecture with board-level risk mitigation to transform global enterprises.',
    images: [
      {
        url: 'https://www.exocatalyst.org/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ExO Catalyst',
        type: 'image/png',
      },
      {
        url: 'https://www.exocatalyst.org/og-image-square.png',
        width: 800,
        height: 800,
        alt: 'ExO Catalyst',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ExO Catalyst - Enterprise AI Governance',
    description: 'Exponential Digital Transformation. Governed Enterprise AI.',
    images: ['https://www.exocatalyst.org/twitter-image.png'],
    creator: '@exocatalyst',
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
    google: 'google-site-verification-code-here',
    yandex: 'yandex-verification-code-here',
  },
  alternates: {
    canonical: 'https://www.exocatalyst.org',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Google Fonts - Optional */}
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:wght@400;600;700&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Theme color */}
        <meta name="theme-color" content="#0A192F" />

        {/* Additional Security Headers */}
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>

      <body className="bg-slate-950 text-slate-100">
        {/* Main content */}
        <div className="relative min-h-screen">
          {children}
        </div>

        {/* Vercel Analytics */}
        <Analytics />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'ExO Catalyst',
              url: 'https://www.exocatalyst.org',
              logo: 'https://www.exocatalyst.org/logo.svg',
              description:
                'Enterprise AI governance and digital transformation services',
              sameAs: [
                'https://twitter.com/exocatalyst',
                'https://linkedin.com/company/exocatalyst',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                email: 'hello@exocatalyst.org',
              },
              areaServed: ['ZA', 'APAC', 'EU'],
            }),
          }}
        />
      </body>
    </html>
  );
}
