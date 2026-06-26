import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';
import MagneticButton from '../shared/MagneticButton';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      id="main-app-navigation"
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-180 ${
        isScrolled
          ? 'bg-oceanic-noir/80 border-b border-nocturnal-expedition/30 py-4 backdrop-blur-xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Brand Logo and Title */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-2.5 group cursor-pointer"
          aria-label="Axiom AI Home"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-forsythia to-deep-saffron flex items-center justify-center shadow-lg shadow-forsythia/15 group-hover:scale-[1.05] transition-all duration-180">
            <Cpu className="w-4.5 h-4.5 text-oceanic-noir animate-[pulse_3s_ease-in-out_infinite]" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-arctic-powder text-base tracking-tight leading-none">
              Axiom AI
            </span>
            <span className="font-mono text-[9px] text-forsythia font-semibold tracking-widest uppercase mt-0.5">
              Automation
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {['features', 'pricing', 'testimonials', 'faq'].map((section) => (
            <button
              key={section}
              onClick={() => handleScrollTo(section)}
              className="text-xs font-semibold text-mystic-mint/80 hover:text-forsythia capitalize transition-colors duration-180 cursor-pointer select-none"
            >
              {section}
            </button>
          ))}
        </div>

        {/* Action Button Controls */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => handleScrollTo('pricing')}
            className="text-xs font-semibold text-mystic-mint hover:text-forsythia transition-colors cursor-pointer"
          >
            Sign In
          </button>
          <MagneticButton
            onClick={() => handleScrollTo('pricing')}
            className="bg-arctic-powder text-oceanic-noir text-xs font-bold px-5 py-2.5 rounded-xl hover:bg-mystic-mint shadow-lg hover:shadow-forsythia/5 transition-all"
            strength={0.2}
          >
            Start Free
          </MagneticButton>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-xl border border-nocturnal-expedition/30 hover:bg-nocturnal-expedition/20 text-mystic-mint hover:text-forsythia transition-colors cursor-pointer"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown Menu Overlay */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden absolute top-full inset-x-0 bg-oceanic-noir/95 border-b border-nocturnal-expedition/30 py-6 px-6 backdrop-blur-2xl flex flex-col gap-5 animate-entry"
        >
          {['features', 'pricing', 'testimonials', 'faq'].map((section) => (
            <button
              key={section}
              onClick={() => handleScrollTo(section)}
              className="text-sm font-semibold text-mystic-mint hover:text-forsythia text-left capitalize transition-colors cursor-pointer"
            >
              {section}
            </button>
          ))}
          <div className="h-px bg-nocturnal-expedition/30 w-full my-1" />
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleScrollTo('pricing')}
              className="flex-1 text-center py-3 text-xs font-semibold text-mystic-mint border border-nocturnal-expedition/30 rounded-xl hover:bg-nocturnal-expedition/20 transition-all cursor-pointer"
            >
              Sign In
            </button>
            <button
              onClick={() => handleScrollTo('pricing')}
              className="flex-1 text-center py-3 text-xs font-bold bg-arctic-powder text-oceanic-noir rounded-xl hover:bg-mystic-mint shadow-md transition-all cursor-pointer"
            >
              Start Free
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
