import React from 'react';
import { Cpu, Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    Product: ['Features', 'Integrations', 'Enterprise', 'Security', 'Pricing'],
    Resources: ['Documentation', 'Guides', 'API Reference', 'Status Systems', 'Changelog'],
    Company: ['About Us', 'Careers', 'Brand Kit', 'Contact Sales', 'Privacy Policy'],
  };

  return (
    <footer
      id="main-app-footer"
      className="bg-oceanic-noir border-t border-nocturnal-expedition/30 pt-24 pb-12 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="col-span-2 space-y-6">
            <a
              href="#"
              onClick={handleScrollToTop}
              className="flex items-center gap-2.5 group cursor-pointer"
              aria-label="Axiom AI Home"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-forsythia to-deep-saffron flex items-center justify-center">
                <Cpu className="w-4 h-4 text-oceanic-noir" />
              </div>
              <span className="font-display font-bold text-arctic-powder text-base tracking-tight">
                Axiom AI
              </span>
            </a>
            <p className="text-xs text-mystic-mint/80 leading-relaxed max-w-sm">
              The resilient multi-agent orchestration infrastructure engineered to build, run, and self-heal modern enterprise data pipelines at global scale.
            </p>
            {/* Live Uptime Health Indicator */}
            <div className="flex items-center gap-2 text-[10px] font-mono text-mystic-mint/60 bg-nocturnal-expedition/20 border border-nocturnal-expedition/30 rounded-lg px-3 py-1.5 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-forsythia opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-forsythia" />
              </span>
              Operational Status: <span className="text-forsythia font-semibold">99.99% Uptime</span>
            </div>
          </div>

          {/* Dynamic Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h4 className="text-[10px] font-bold text-forsythia uppercase tracking-widest font-mono">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="text-xs text-mystic-mint/70 hover:text-forsythia transition-colors duration-150 cursor-pointer"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Separator */}
        <div className="h-px bg-nocturnal-expedition/30 w-full mb-8" />

        {/* Copyright and Social Media Area */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <span className="text-xs text-mystic-mint/60 font-mono">
              © {new Date().getFullYear()} Axiom AI Systems, Inc. All rights reserved.
            </span>
            <span className="hidden sm:inline text-mystic-mint/30 font-mono">|</span>
            <span className="text-[10px] font-mono text-mystic-mint/40">
              Designed with architectural precision
            </span>
          </div>

          {/* Socials Icons */}
          <div className="flex items-center gap-4">
            {[
              { icon: <Github className="w-4 h-4" />, name: 'GitHub' },
              { icon: <Twitter className="w-4 h-4" />, name: 'Twitter' },
              { icon: <Linkedin className="w-4 h-4" />, name: 'LinkedIn' },
            ].map((social) => (
              <a
                key={social.name}
                href="#"
                onClick={(e) => e.preventDefault()}
                aria-label={social.name}
                className="w-8 h-8 rounded-lg bg-nocturnal-expedition/20 border border-nocturnal-expedition/30 hover:border-forsythia/30 hover:bg-nocturnal-expedition/40 text-mystic-mint hover:text-forsythia flex items-center justify-center transition-all duration-180 cursor-pointer"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
