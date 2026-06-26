import React, { useState } from 'react';
import { Database, Cpu, ShieldAlert, Workflow, ChevronDown, Layers } from 'lucide-react';
import { BENTO_FEATURES } from '../../constants';
import { useMediaQuery } from '../../hooks/useMediaQuery';

export default function Features() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const isMobile = useMediaQuery('(max-w: 1024px)');

  // Map string icon name to Lucide icons
  const getIcon = (name: string, className = 'w-5 h-5') => {
    switch (name) {
      case 'DatabaseZap':
        return <Database className={className} />;
      case 'Cpu':
        return <Cpu className={className} />;
      case 'ShieldAlert':
        return <ShieldAlert className={className} />;
      case 'Workflow':
        return <Workflow className={className} />;
      default:
        return <Layers className={className} />;
    }
  };

  // Reusable visual mockup preview component
  const renderMockup = (id: string, isActive: boolean) => {
    switch (id) {
      case 'feature-1':
        return (
          <div className="relative h-44 w-full bg-oceanic-noir rounded-xl border border-nocturnal-expedition/30 p-4 overflow-hidden font-mono text-[10px] flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-nocturnal-expedition/30 pb-2 text-mystic-mint/50">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-forsythia animate-ping" />
                Ingestion Engine v3.8
              </span>
              <span>100% Parsed</span>
            </div>
            
            <div className="space-y-1.5 flex-1 py-3 text-mystic-mint/80">
              <div className="flex justify-between border-b border-nocturnal-expedition/30 pb-1">
                <span className="text-forsythia">Source: raw_invoice.pdf</span>
                <span className="text-mystic-mint/40">324.2 KB</span>
              </div>
              <div className="flex gap-2">
                <span className="text-deep-saffron">OCR-FREE MAP:</span>
                <span className="text-mystic-mint/50">Extracting table [14 columns, 82 rows]...</span>
              </div>
              <div className="text-mystic-mint/50 truncate">
                {"{ name: 'Acme LLC', total: '$14,200.00', date: '2026-06-25' }"}
              </div>
            </div>

            <div className="flex items-center justify-between pt-1 border-t border-nocturnal-expedition/30 text-[9px]">
              <span className="text-forsythia">✔ JSON generated with 99.94% certainty score</span>
              <span className="text-mystic-mint/40">8.2ms</span>
            </div>
          </div>
        );

      case 'feature-2':
        return (
          <div className="relative h-44 w-full bg-oceanic-noir rounded-xl border border-nocturnal-expedition/30 p-4 overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-nocturnal-expedition/30 pb-2 font-mono text-[10px] text-mystic-mint/50">
              <span>Auto-DB Synthesizer</span>
              <span className="text-forsythia">SYNCED</span>
            </div>

            <div className="flex gap-2 flex-1 py-3 items-center justify-around">
              <div className="bg-nocturnal-expedition/20 border border-nocturnal-expedition/30 rounded-lg p-2 flex flex-col gap-1 w-24">
                <div className="text-[10px] text-mystic-mint/80 font-bold border-b border-nocturnal-expedition/30 pb-1">raw_leads</div>
                <div className="text-[8px] font-mono text-mystic-mint/40">col_1: string</div>
                <div className="text-[8px] font-mono text-mystic-mint/40">col_2: raw_date</div>
              </div>

              <div className="flex flex-col items-center justify-center gap-1">
                <div className="w-12 h-0.5 bg-gradient-to-r from-forsythia to-deep-saffron relative">
                  <div className={`absolute top-1/2 left-0 w-1.5 h-1.5 -translate-y-1/2 bg-forsythia rounded-full ${isActive ? 'animate-[marqueeScroll_2s_linear_infinite]' : ''}`} />
                </div>
                <span className="text-[8px] font-mono text-forsythia">Synthesis</span>
              </div>

              <div className="bg-nocturnal-expedition/30 border border-forsythia/20 rounded-lg p-2 flex flex-col gap-1 w-24 shadow-md shadow-forsythia/5">
                <div className="text-[10px] text-forsythia font-bold border-b border-nocturnal-expedition/30 pb-1">LeadSchema</div>
                <div className="text-[8px] font-mono text-forsythia">company: text</div>
                <div className="text-[8px] font-mono text-forsythia">acquired_at: timestamp</div>
              </div>
            </div>

            <div className="font-mono text-[9px] text-mystic-mint/40 text-center">
              Schema updated dynamically - 0ms downtime migration
            </div>
          </div>
        );

      case 'feature-3':
        return (
          <div className="relative h-44 w-full bg-oceanic-noir rounded-xl border border-nocturnal-expedition/30 p-4 overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-nocturnal-expedition/30 pb-2 font-mono text-[10px] text-mystic-mint/50">
              <span>Sentinel Guard</span>
              <span className="text-forsythia flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-forsythia rounded-full animate-pulse" />
                Active Monitor
              </span>
            </div>

            <div className="flex flex-col items-center justify-center flex-1 py-1 gap-2">
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-xl font-bold font-display text-arctic-powder">4.8M</div>
                  <div className="text-[8px] font-mono text-mystic-mint/50">Records Analysed</div>
                </div>
                <div className="h-8 w-px bg-nocturnal-expedition/30" />
                <div className="text-center">
                  <div className="text-xl font-bold font-display text-forsythia">100%</div>
                  <div className="text-[8px] font-mono text-mystic-mint/50">Accuracy Guarded</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-forsythia/20 border border-forsythia flex items-center justify-center text-[8px] text-forsythia font-bold">✔</div>
                <div className="w-12 h-0.5 bg-nocturnal-expedition/30 relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-nocturnal-expedition/40 px-1 rounded text-[7px] font-mono text-mystic-mint/50">Resolve</div>
                </div>
                <div className="w-5 h-5 rounded-full bg-deep-saffron/20 border border-deep-saffron flex items-center justify-center text-[8px] text-deep-saffron font-bold">⚙</div>
              </div>
            </div>

            <div className="font-mono text-[8px] text-forsythia/80 text-center">
              Self-healing: Reparsed invalid timestamp at record #849,201
            </div>
          </div>
        );

      case 'feature-4':
        return (
          <div className="relative h-44 w-full bg-oceanic-noir rounded-xl border border-nocturnal-expedition/30 p-4 overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-nocturnal-expedition/30 pb-2 font-mono text-[10px] text-mystic-mint/50">
              <span>Multi-Agent Orchestrator</span>
              <span className="text-forsythia">3 Agents Active</span>
            </div>

            <div className="flex items-center justify-around flex-1 py-2">
              <div className="flex flex-col items-center gap-1">
                <div className="w-8 h-8 rounded-lg bg-nocturnal-expedition/20 border border-nocturnal-expedition/30 flex items-center justify-center text-mystic-mint/80">
                  <Database className="w-4 h-4" />
                </div>
                <span className="text-[8px] font-mono text-mystic-mint/50">Scrape Agent</span>
              </div>

              <div className="text-mystic-mint/30">→</div>

              <div className="flex flex-col items-center gap-1">
                <div className="w-8 h-8 rounded-lg bg-forsythia/10 border border-forsythia/30 flex items-center justify-center text-forsythia animate-pulse">
                  <Cpu className="w-4 h-4" />
                </div>
                <span className="text-[8px] font-mono text-mystic-mint/50">Enrich Agent</span>
              </div>

              <div className="text-mystic-mint/30">→</div>

              <div className="flex flex-col items-center gap-1">
                <div className="w-8 h-8 rounded-lg bg-deep-saffron/10 border border-deep-saffron/30 flex items-center justify-center text-deep-saffron">
                  <Workflow className="w-4 h-4" />
                </div>
                <span className="text-[8px] font-mono text-mystic-mint/50">Valid Agent</span>
              </div>
            </div>

            <div className="font-mono text-[8px] text-mystic-mint/40 text-center">
              Coordinated extraction completes in average 184ms
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section
      id="features"
      className="relative py-24 lg:py-32 bg-oceanic-noir border-t border-nocturnal-expedition/30 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Title segment */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forsythia/10 border border-forsythia/20 text-xs font-semibold text-forsythia uppercase tracking-widest mb-6">
            <Layers className="w-3.5 h-3.5" />
            Core Capabilities
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-arctic-powder tracking-tight leading-tight">
            The multi-agent infrastructure for modern data pipelines
          </h2>
          <p className="text-mystic-mint/80 mt-4 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            From raw inputs to optimized, fully typed relational database tables. Powered by self-healing AI schema mapping algorithms.
          </p>
        </div>

        {/* Dynamic Display Rendering depending on viewport matches */}
        {isMobile ? (
          /* MOBILE VIEW: VERTICAL ACCORDION PANELS */
          <div id="mobile-accordion-wrapper" className="space-y-4">
            {BENTO_FEATURES.map((feature, idx) => {
              const isExpanded = activeIndex === idx;
              return (
                <div
                  key={feature.id}
                  className={`glass-panel rounded-xl overflow-hidden border transition-all duration-180 ${
                    isExpanded ? 'border-forsythia/60 bg-nocturnal-expedition/20' : 'border-nocturnal-expedition/30'
                  }`}
                >
                  {/* Accordion header button */}
                  <button
                    onClick={() => setActiveIndex(idx)}
                    aria-expanded={isExpanded}
                    id={`accordion-trigger-${feature.id}`}
                    className="w-full flex items-center justify-between p-5 text-left select-none cursor-pointer focus-visible:outline-2 focus-visible:outline-forsythia"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`p-2 rounded-lg transition-colors ${isExpanded ? 'bg-forsythia/20 text-forsythia' : 'bg-nocturnal-expedition/20 text-mystic-mint/60'}`}>
                        {getIcon(feature.iconName)}
                      </div>
                      <div>
                        <span className="text-[9px] font-bold uppercase tracking-wider text-forsythia">
                          {feature.tag}
                        </span>
                        <h3 className="text-base font-display font-semibold text-arctic-powder tracking-tight mt-0.5">
                          {feature.title}
                        </h3>
                      </div>
                    </div>

                    <div className={`p-1.5 rounded-full border border-nocturnal-expedition/30 transition-transform duration-180 ${isExpanded ? 'rotate-180 bg-forsythia/20 border-forsythia/20' : 'bg-transparent'}`}>
                      <ChevronDown className={`w-4 h-4 transition-colors ${isExpanded ? 'text-forsythia' : 'text-mystic-mint/50'}`} />
                    </div>
                  </button>

                  {/* Accordion collapsible body panel */}
                  <div
                    id={`accordion-body-${feature.id}`}
                    className={`transition-all duration-180 overflow-hidden ${
                      isExpanded ? 'max-h-[500px] border-t border-nocturnal-expedition/30 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                    }`}
                  >
                    <div className="p-5 space-y-4 bg-nocturnal-expedition/5">
                      <p className="text-xs text-mystic-mint/80 leading-relaxed">
                        {feature.description}
                      </p>
                      
                      <div className="mt-2.5">
                        {renderMockup(feature.id, isExpanded)}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* DESKTOP VIEW: BENTO GRID INTERACTIVE PANELS */
          <div id="desktop-bento-grid-wrapper" className="grid grid-cols-2 gap-8 items-stretch">
            
            {/* Left Selection Navigator column */}
            <div className="space-y-4">
              {BENTO_FEATURES.map((feature, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <div
                    key={feature.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`p-6 rounded-2xl border transition-all duration-180 cursor-pointer flex gap-4 select-none group relative overflow-hidden ${
                      isActive
                        ? 'bg-nocturnal-expedition/20 border-forsythia shadow-xl shadow-forsythia/5'
                        : 'bg-nocturnal-expedition/10 border-nocturnal-expedition/30 hover:border-forsythia/30 hover:bg-nocturnal-expedition/20'
                    }`}
                  >
                    {/* Active spotlight backdrop overlay */}
                    {isActive && (
                      <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-forsythia/5 blur-2xl pointer-events-none" />
                    )}

                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${
                      isActive
                        ? 'bg-forsythia/10 border-forsythia/20 text-forsythia'
                        : 'bg-nocturnal-expedition/20 border-nocturnal-expedition/30 text-mystic-mint/60 group-hover:text-arctic-powder transition-colors'
                    }`}>
                      {getIcon(feature.iconName)}
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-forsythia">
                          {feature.tag}
                        </span>
                        {feature.badgeText && (
                          <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-nocturnal-expedition/30 border border-nocturnal-expedition/40 text-mystic-mint/50">
                            {feature.badgeText}
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-display font-semibold text-arctic-powder tracking-tight">
                        {feature.title}
                      </h3>
                      <p className="text-xs text-mystic-mint/80 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Display visualizer column */}
            <div className="glass-panel border border-nocturnal-expedition/30 rounded-3xl p-8 flex flex-col justify-between bg-nocturnal-expedition/10 relative overflow-hidden h-full min-h-[400px]">
              {/* Center glow radial lighting spot */}
              <div className="absolute inset-x-0 top-1/4 h-[300px] rounded-full bg-forsythia/5 blur-3xl pointer-events-none" />
              
              <div className="relative z-10 space-y-4">
                <span className="text-[10px] font-mono font-bold tracking-widest text-mystic-mint/40 uppercase">
                  Live System Diagnostics
                </span>
                <h3 className="text-2xl font-display font-bold text-arctic-powder tracking-tight">
                  {BENTO_FEATURES[activeIndex].title}
                </h3>
                <p className="text-xs text-mystic-mint/80 leading-relaxed max-w-sm">
                  Review the mechanical operations of our multi-agent automation nodes during continuous ingestion.
                </p>
              </div>

              {/* Central diagnostics visualizer node */}
              <div className="my-8 relative z-10 bg-oceanic-noir/50 p-4 rounded-2xl border border-nocturnal-expedition/30 shadow-inner">
                {renderMockup(BENTO_FEATURES[activeIndex].id, true)}
              </div>

              <div className="relative z-10 border-t border-nocturnal-expedition/30 pt-4 flex justify-between items-center text-[10px] font-mono text-mystic-mint/40">
                <span>Active metric: <strong className="text-forsythia">{BENTO_FEATURES[activeIndex].metric}</strong></span>
                <span>ISO 27001 Protected</span>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
