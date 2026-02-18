import React, { Suspense } from 'react';
import { Outlet } from 'react-router';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FloatingWhatsApp } from '../components/FloatingWhatsApp';

export function RootLayout() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-sans text-slate-900">
        <Helmet>
          {/* Primary Meta Tags */}
          <title>Daily Movers Fumigation - Professional Moving & Pest Control Services in Kilimani, Nairobi Kenya</title>
          <meta name="title" content="Daily Movers Fumigation - Professional Moving & Pest Control Services in Kilimani, Nairobi Kenya" />
          <meta name="description" content="Daily Movers Fumigation offers expert residential & commercial moving, office relocation, pest control, and fumigation services in Kilimani, Nairobi. Licensed & insured. Call 0717629399 for free quotes. Available 24/7." />
          <meta name="keywords" content="movers Kilimani, fumigation services Nairobi, moving company Kenya, pest control Kilimani, residential moving Nairobi, office relocation Kenya, house moving services, professional movers, cockroach control, rodent control, bedbug fumigation, disinfection services, packing services Nairobi, storage solutions Kenya, affordable movers Kilimani" />
          <meta name="author" content="Daily Movers Fumigation" />
          <meta name="robots" content="index, follow" />
          <meta name="language" content="English" />
          <meta name="revisit-after" content="7 days" />
          
          {/* Geographic Tags */}
          <meta name="geo.region" content="KE-30" />
          <meta name="geo.placename" content="Kilimani, Nairobi" />
          <meta name="geo.position" content="-1.2921;36.7820" />
          <meta name="ICBM" content="-1.2921, 36.7820" />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://dailymoversfumigation.com/" />
          <meta property="og:title" content="Daily Movers Fumigation - Moving & Pest Control in Kilimani, Nairobi" />
          <meta property="og:description" content="Trusted moving and fumigation experts in Kilimani, Nairobi. Professional residential & commercial relocation, pest control services. Licensed & insured. Call 0717629399" />
          <meta property="og:image" content="https://dailymoversfumigation.com/og-image.jpg" />
          <meta property="og:locale" content="en_KE" />
          <meta property="og:site_name" content="Daily Movers Fumigation" />
          
          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://dailymoversfumigation.com/" />
          <meta property="twitter:title" content="Daily Movers Fumigation - Moving & Pest Control Nairobi" />
          <meta property="twitter:description" content="Professional moving and pest control services in Kilimani, Nairobi. Licensed & insured. Free quotes available. Call 0717629399" />
          <meta property="twitter:image" content="https://dailymoversfumigation.com/twitter-image.jpg" />
          
          {/* Canonical */}
          <link rel="canonical" href="https://dailymoversfumigation.com/" />
          
          {/* Favicon */}
          <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%232563eb'/><path d='M20 50 L35 35 L65 35 L80 50 L65 65 L35 65 Z' fill='white'/><rect x='30' y='45' width='10' height='10' fill='%232563eb'/><rect x='45' y='45' width='10' height='10' fill='%232563eb'/><rect x='60' y='45' width='10' height='10' fill='%232563eb'/><path d='M25 55 L25 70 L75 70 L75 55' stroke='white' stroke-width='3' fill='none'/></svg>" />
          <link rel="apple-touch-icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%232563eb'/><path d='M20 50 L35 35 L65 35 L80 50 L65 65 L35 65 Z' fill='white'/><rect x='30' y='45' width='10' height='10' fill='%232563eb'/><rect x='45' y='45' width='10' height='10' fill='%232563eb'/><rect x='60' y='45' width='10' height='10' fill='%232563eb'/><path d='M25 55 L25 70 L75 70 L75 55' stroke='white' stroke-width='3' fill='none'/></svg>" />
          
          {/* JSON-LD Schema Markup for Local Business */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Daily Movers Fumigation",
              "image": "https://dailymoversfumigation.com/logo.png",
              "description": "Professional moving and pest control services in Kilimani, Nairobi",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Kilimani",
                "addressLocality": "Nairobi",
                "addressRegion": "Nairobi County",
                "addressCountry": "KE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -1.2921,
                "longitude": 36.7820
              },
              "telephone": "+254717629399",
              "priceRange": "$$",
              "openingHours": "Mo-Su 00:00-23:59",
              "url": "https://dailymoversfumigation.com",
              "sameAs": [
                "https://wa.me/254717629399"
              ],
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": -1.2921,
                  "longitude": 36.7820
                },
                "geoRadius": "50000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Moving and Fumigation Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Residential Moving Services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Office Relocation Services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Pest Control and Fumigation"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Disinfection Services"
                    }
                  }
                ]
              }
            })}
          </script>
        </Helmet>
        <Header />
        <main>
          <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-600">Loading...</p>
              </div>
            </div>
          }>
            <Outlet />
          </Suspense>
        </main>
        <FloatingWhatsApp />
        <Footer />
      </div>
    </HelmetProvider>
  );
}