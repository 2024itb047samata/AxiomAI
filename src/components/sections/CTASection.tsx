import React from 'react';
import { ArrowRight, HelpCircle } from 'lucide-react';
import MagneticButton from '../shared/MagneticButton';

export default function CTASection() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="cta"
      className="relative py-24 lg:py-32 bg-oceanic-noir overflow-hidden"
    >
      {/* Decorative center backdrop spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] rounded-full bg-forsythia/5 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Glow border premium panel box */}
        <div className="glass-panel border border-nocturnal-expedition/30 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden bg-nocturnal-expedition/10">
          
          {/* Backdrop shine overlays */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-forsythia/20 to-transparent" />

          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-arctic-powder tracking-tight leading-tight">
              Deploy your next-generation data architecture today
            </h2>
            <p className="text-mystic-mint/80 text-sm md:text-base leading-relaxed">
              Decouple your ingestion layers and scale with multi-agent intelligence. Join engineering cohorts that reduced data pipeline overheads by 75%.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <MagneticButton
                onClick={() => handleScrollTo('pricing')}
                className="w-full sm:w-auto bg-arctic-powder text-oceanic-noir font-bold px-8 py-4 rounded-xl hover:bg-mystic-mint shadow-xl shadow-forsythia/5 flex items-center justify-center gap-2 transition-all group"
                strength={0.25}
              >
                Get Started Free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </MagneticButton>

              <button
                onClick={() => handleScrollTo('faq')}
                className="w-full sm:w-auto px-8 py-4 text-xs font-semibold text-mystic-mint hover:text-forsythia bg-nocturnal-expedition/20 border border-nocturnal-expedition/30 rounded-xl hover:bg-nocturnal-expedition/40 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                Explain PPP Multipliers
                <HelpCircle className="w-3.5 h-3.5 text-mystic-mint/50" />
              </button>
            </div>

            {/* Subtitle assurance footer */}
            <p className="text-[10px] text-mystic-mint/50 font-mono pt-4">
              ✔ 14-day Pro Trial  •  No credit card required  •  Instant setup
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
