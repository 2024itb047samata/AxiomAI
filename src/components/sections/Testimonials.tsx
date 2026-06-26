import React from 'react';
import { Star, MessageSquare } from 'lucide-react';
import { TESTIMONIALS } from '../../constants';

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-24 lg:py-32 bg-oceanic-noir overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forsythia/10 border border-forsythia/20 text-xs font-semibold text-forsythia uppercase tracking-widest mb-6">
            <MessageSquare className="w-3.5 h-3.5" />
            Endorsements
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-arctic-powder tracking-tight leading-tight">
            Trusted by global software and data architects
          </h2>
          <p className="text-mystic-mint/80 mt-4 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Review how scaling engineering departments utilize Axiom AI to decouple and streamline ingestion pipelines.
          </p>
        </div>

        {/* Masonry testimonial grid layout */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="glass-panel border border-nocturnal-expedition/30 rounded-2xl p-8 bg-nocturnal-expedition/10 flex flex-col justify-between hover:border-forsythia/30 transition-all duration-180 group"
            >
              <div>
                {/* Visual Rating Stars */}
                <div className="flex items-center gap-1 mb-6 text-forsythia">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-forsythia shrink-0" />
                  ))}
                </div>

                {/* Block Quote Text */}
                <p className="text-mystic-mint/90 text-sm leading-relaxed mb-8 italic">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Verified Author Profile */}
              <div className="flex items-center gap-4 pt-6 border-t border-nocturnal-expedition/30">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full border border-nocturnal-expedition/30 object-cover"
                />
                <div>
                  <h4 className="text-sm font-semibold text-arctic-powder font-display">
                    {testimonial.name}
                  </h4>
                  <p className="text-[10px] font-mono text-mystic-mint/50 uppercase tracking-wider mt-0.5">
                    {testimonial.role} at <span className="text-forsythia font-semibold">{testimonial.company}</span>
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
