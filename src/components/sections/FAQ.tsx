import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { FAQS } from '../../constants';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="relative py-24 lg:py-32 bg-oceanic-noir border-t border-nocturnal-expedition/30 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forsythia/10 border border-forsythia/20 text-xs font-semibold text-forsythia uppercase tracking-widest mb-6">
            <HelpCircle className="w-3.5 h-3.5" />
            Support Systems
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-arctic-powder tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-mystic-mint/80 mt-4 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Find immediate answers on regional pricing metrics, pipeline durability guarantees, and SOC2 compliance structures.
          </p>
        </div>

        {/* Collapsible FAQ Panels */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`glass-panel border rounded-xl overflow-hidden transition-all duration-180 ${
                  isOpen ? 'border-forsythia/50 bg-nocturnal-expedition/20' : 'border-nocturnal-expedition/30 hover:border-forsythia/30'
                }`}
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-forsythia"
                >
                  <span className="text-sm md:text-base font-semibold text-arctic-powder tracking-tight pr-6">
                    {faq.question}
                  </span>
                  
                  {/* Rotating Arrow Indicator */}
                  <div className={`p-1 rounded-full border border-nocturnal-expedition/30 transition-transform duration-180 ${isOpen ? 'rotate-180 bg-forsythia/20 border-forsythia/20' : ''}`}>
                    <ChevronDown className={`w-4 h-4 transition-colors ${isOpen ? 'text-forsythia' : 'text-mystic-mint/50'}`} />
                  </div>
                </button>

                {/* Collapsible Answer Body */}
                <div
                  id={`faq-answer-${faq.id}`}
                  className={`transition-all duration-180 overflow-hidden ${
                    isOpen ? 'max-h-[300px] border-t border-nocturnal-expedition/30 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="p-6 text-xs md:text-sm text-mystic-mint/80 leading-relaxed bg-nocturnal-expedition/5">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
