import React, { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Companies from './components/sections/Companies';
import Features from './components/sections/Features';
import Pricing from './components/sections/Pricing';
import Testimonials from './components/sections/Testimonials';
import FAQ from './components/sections/FAQ';
import CTASection from './components/sections/CTASection';
import CanvasParticles from './components/shared/CanvasParticles';
import CustomCursor from './components/shared/CustomCursor';
import CSSLoader from './components/shared/CSSLoader';

export default function App() {
  // Synchronously inject high-performance SEO Metadata tags for maximum web crawlability
  useEffect(() => {
    document.title = 'Axiom AI - Autonomous Multi-Agent AI Data Automation Platform';

    // Inject dynamic OpenGraph, Twitter Cards and Standard metadata headers
    const metaTags = [
      { name: 'description', content: 'Deploy next-generation cognitive data ingestion pipelines. Zero-config unstructured file parsing, dynamic schema synthesis, and self-healing pipelines.' },
      { property: 'og:title', content: 'Axiom AI - Autonomous Multi-Agent AI Data Automation Platform' },
      { property: 'og:description', content: 'Say goodbye to fragile ETL. Ingest unstructured streams, construct transforms, and govern database schemas autonomously.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&h=630&q=80' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Axiom AI - Autonomous AI Data Automation Platform' },
      { name: 'twitter:description', content: 'Deploy next-generation cognitive data ingestion pipelines with self-healing schema synthesis.' },
    ];

    metaTags.forEach((tag) => {
      let element = tag.name 
        ? document.querySelector(`meta[name="${tag.name}"]`) 
        : document.querySelector(`meta[property="${tag.property}"]`);

      if (!element) {
        element = document.createElement('meta');
        if (tag.name) element.setAttribute('name', tag.name);
        if (tag.property) element.setAttribute('property', tag.property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', tag.content);
    });

    // Inject Canonical URL link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.href);

    // Inject Schema.org JSON-LD Structured Data for rich search snippets
    let schemaScript = document.getElementById('seo-schema-jsonld') as HTMLScriptElement | null;
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'seo-schema-jsonld';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }

    const schemaData = {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Axiom AI',
      'operatingSystem': 'Cloud Native, SaaS',
      'applicationCategory': 'DeveloperApplication, BusinessApplication',
      'offers': {
        '@type': 'Offer',
        'price': '49.00',
        'priceCurrency': 'USD',
      },
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.9',
        'ratingCount': '312',
      },
    };

    schemaScript.text = JSON.stringify(schemaData);

    return () => {
      // Cleanup script tags on unmount if hot-reloaded
      schemaScript?.remove();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-oceanic-noir text-arctic-powder overflow-x-hidden selection:bg-forsythia/30 selection:text-arctic-powder">
      {/* Rapid CSS-only startup loading splash screen */}
      <CSSLoader />

      {/* Absolute high-performance Canvas particle background (with built-in reduced-motion support) */}
      <CanvasParticles />

      {/* Dual trailing custom cursor tracking desktop pointer devices */}
      <CustomCursor />

      {/* Floating header with glassmorphism effects on scroll and keyboard support */}
      <Navbar />

      {/* Main layout contents */}
      <main id="app-landing-page-content" className="relative z-10">
        {/* Hero Area + Interactive Terminal console */}
        <Hero />

        {/* Endless marquee containing client logos with left/right masking layers */}
        <Companies />

        {/* Bento Grid transforming into a vertical custom Accordion on mobile */}
        <Features />

        {/* Dynamic Computed Regional Pricing Grid with total state isolation */}
        <Pricing />

        {/* Masonry-style verified customer reviews */}
        <Testimonials />

        {/* Accessible FAQ lists with smooth pure React toggles */}
        <FAQ />

        {/* Final conversion CTA card */}
        <CTASection />
      </main>

      {/* Multi-column index footer with uptime live indicator */}
      <Footer />
    </div>
  );
}
