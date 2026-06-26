import React from 'react';
import { COMPANIES } from '../../constants';

export default function Companies() {
  return (
    <section
      id="companies"
      className="py-12 bg-oceanic-noir border-t border-b border-nocturnal-expedition/30 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <p className="text-center text-[10px] font-mono font-bold uppercase tracking-widest text-mystic-mint/50 mb-8">
          TRUSTED BY LEADERS AT CLOUD-NATIVE DEPLOYMENTS
        </p>

        {/* Ticker Row with left & right fades */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
          
          {/* Scrolling animation nodes */}
          <div className="flex gap-20 items-center justify-between w-max animate-marquee py-2">
            {[...COMPANIES, ...COMPANIES, ...COMPANIES].map((company, idx) => (
              <div
                key={`${company.name}-${idx}`}
                className="flex items-center gap-2 text-mystic-mint/70 hover:text-forsythia transition-colors duration-180 select-none font-display font-bold text-lg tracking-tight"
              >
                {/* Simplified vector branding icons */}
                <div className="w-5 h-5 rounded bg-nocturnal-expedition/20 flex items-center justify-center border border-nocturnal-expedition/30 text-xs font-mono font-black text-forsythia">
                  {company.name[0]}
                </div>
                <span>{company.name}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
