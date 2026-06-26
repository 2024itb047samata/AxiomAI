import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Terminal, 
  Sparkles, 
  Check, 
  Database, 
  Zap, 
  Cpu, 
  Activity, 
  Sliders, 
  RefreshCw, 
  Play, 
  Layers, 
  ShieldAlert, 
  Settings 
} from 'lucide-react';
import MagneticButton from '../shared/MagneticButton';

export default function Hero() {
  // Live Simulation States
  const [pipelineState, setPipelineState] = useState<'idle' | 'parsing' | 'transforming' | 'validating' | 'done'>('idle');
  const [consoleLogs, setConsoleLogs] = useState<string[]>([
    '[system] Axiom Cognitive Core loaded.',
    '[system] All multi-agent orchestration nodes online.',
    '[system] Monitoring active unstructured file streams...'
  ]);

  // Interactive System Config toggles (AI OS controls)
  const [selfHealing, setSelfHealing] = useState<boolean>(true);
  const [parallelIngest, setParallelIngest] = useState<boolean>(true);
  const [scanDepth, setScanDepth] = useState<'standard' | 'deep' | 'quantum'>('deep');

  // Fluctuating real-time metrics
  const [gpuLoad, setGpuLoad] = useState<number>(91.4);
  const [throughput, setThroughput] = useState<number>(4412);
  const [latency, setLatency] = useState<number>(0.84);
  const [successRate, setSuccessRate] = useState<number>(99.982);

  // Fluctuating metric interval
  useEffect(() => {
    const interval = setInterval(() => {
      setGpuLoad((prev) => {
        const delta = (Math.random() - 0.5) * 1.5;
        return Math.max(85, Math.min(99, parseFloat((prev + delta).toFixed(1))));
      });
      setThroughput((prev) => {
        const delta = Math.floor((Math.random() - 0.5) * 80);
        return Math.max(3900, Math.min(4900, prev + delta));
      });
      setLatency((prev) => {
        const base = scanDepth === 'standard' ? 0.4 : scanDepth === 'deep' ? 0.8 : 1.4;
        const delta = (Math.random() - 0.5) * 0.08;
        return Math.max(0.2, parseFloat((base + delta).toFixed(2)));
      });
      setSuccessRate((prev) => {
        const healingModifier = selfHealing ? 0.001 : -0.005;
        const delta = (Math.random() - 0.5) * 0.002 + healingModifier;
        return Math.max(99.8, Math.min(100, parseFloat((prev + delta).toFixed(4))));
      });
    }, 1200);

    return () => clearInterval(interval);
  }, [scanDepth, selfHealing]);

  // Main interactive pipeline simulation
  const runMockPipeline = () => {
    if (pipelineState !== 'idle') return;

    setConsoleLogs([
      `[init] Starting pipeline in ${scanDepth.toUpperCase()} mode...`,
      `[config] Parallel Ingestion: ${parallelIngest ? 'ENABLED (24 Cores)' : 'DISABLED (1 Core)'}`,
      `[config] Auto-healing Guard: ${selfHealing ? 'ACTIVE (Zero-Downtime)' : 'OFF (Warning on error)'}`
    ]);

    const steps = [
      {
        state: 'parsing' as const,
        log: '✔ [Ingest] Connected raw directory: unstructured_invoices_Q2/ (OCR-Free parser matched 142 PDFs)',
        delay: 800
      },
      {
        state: 'transforming' as const,
        log: '⚡ [Transform] Decoupling unstructured tables, synthesizing LeadSchema mapping...',
        delay: 2000
      },
      {
        state: 'validating' as const,
        log: selfHealing 
          ? '🛡 [Self-Heal] Successfully resolved invalid timestamp on record #842. Corrected in-flight.' 
          : '⚠ [Validation-Warn] Empty timestamp found on record #842. No self-healing enabled.',
        delay: 3200
      },
      {
        state: 'done' as const,
        log: '🚀 [Sync] Synced schema into production database. Ingestion completed in 184ms.',
        delay: 4400
      }
    ];

    steps.forEach((step) => {
      setTimeout(() => {
        setPipelineState(step.state);
        setConsoleLogs((prev) => [...prev, step.log]);
      }, step.delay);
    });

    // Reset loop back to idle after completion
    setTimeout(() => {
      setPipelineState('idle');
      setConsoleLogs((prev) => [
        ...prev,
        '---',
        '[system] Ingestion node returned to ready state. Monitoring stream...'
      ]);
    }, 7000);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 lg:pt-36 pb-20 overflow-hidden flex items-center bg-oceanic-noir"
    >
      {/* Immersive radial glow lighting spotlights using exact palette */}
      <div className="absolute top-0 left-1/4 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-forsythia/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-10 w-[600px] h-[600px] rounded-full bg-deep-saffron/5 blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full bg-nocturnal-expedition/10 blur-[130px] pointer-events-none z-0" />

      {/* Cyber-grid drifting canvas background */}
      <div className="absolute inset-0 grid-overlay bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,#000_60%,transparent_100%)] pointer-events-none z-0 opacity-70 animate-grid-drift" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: HERO MARKETING CONTENT */}
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
            
            {/* Private Beta Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forsythia/10 border border-forsythia/20 text-xs font-semibold text-forsythia uppercase tracking-widest leading-none mx-auto lg:mx-0">
              <Sparkles className="w-3.5 h-3.5 text-forsythia animate-pulse" />
              Next-Generation Autonomous OS
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl md:text-6xl font-display font-black text-arctic-powder tracking-tight leading-[1.08]">
              Decouple Your Ingestion Layer with{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-forsythia via-deep-saffron to-forsythia bg-[size:200%] animate-shimmer">
                Autonomous AI Agents
              </span>
            </h1>

            {/* Premium Subheadline */}
            <p className="text-sm md:text-base text-mystic-mint/80 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Why write fragile ETL boilerplate? Axiom AI connects unstructured files directly to clean, fully structured tables, synthesizes relational schemas, and auto-corrects data anomalies in microseconds.
            </p>

            {/* Benefit Checkpoints */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-xs font-mono text-mystic-mint/70">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-forsythia shrink-0" />
                <span>Zero Manual Mapping</span>
              </div>
              <div className="hidden sm:block text-mystic-mint/30">•</div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-forsythia shrink-0" />
                <span>Regional PPP Priced</span>
              </div>
              <div className="hidden sm:block text-mystic-mint/30">•</div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-forsythia shrink-0" />
                <span>SOC2 Type II Insured</span>
              </div>
            </div>

            {/* Interactive CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <MagneticButton
                onClick={() => {
                  const pricingSection = document.getElementById('pricing');
                  if (pricingSection) {
                    const offset = 85;
                    const pos = pricingSection.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({ top: pos - offset, behavior: 'smooth' });
                  }
                }}
                className="w-full sm:w-auto bg-gradient-to-r from-forsythia to-deep-saffron text-oceanic-noir font-bold px-8 py-4 rounded-xl hover:opacity-90 shadow-lg shadow-forsythia/10 flex items-center justify-center gap-2.5 group transition-all"
                strength={0.2}
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </MagneticButton>

              <button
                onClick={() => {
                  const featuresSection = document.getElementById('features');
                  if (featuresSection) {
                    const offset = 85;
                    const pos = featuresSection.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({ top: pos - offset, behavior: 'smooth' });
                  }
                }}
                className="w-full sm:w-auto px-8 py-4 text-xs font-semibold text-mystic-mint hover:text-forsythia bg-nocturnal-expedition/20 border border-nocturnal-expedition/30 rounded-xl hover:bg-nocturnal-expedition/35 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Terminal className="w-3.5 h-3.5 text-mystic-mint/60" />
                Inspect Agent Specs
              </button>
            </div>

            {/* Live Infrastructure Counters */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-nocturnal-expedition/30 max-w-md mx-auto lg:mx-0">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-mystic-mint/50 uppercase tracking-widest block">LATENCY</span>
                <p className="text-xl font-bold font-mono text-forsythia transition-all">{latency}ms</p>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-mystic-mint/50 uppercase tracking-widest block">THROUGHPUT</span>
                <p className="text-xl font-bold font-mono text-arctic-powder">{throughput.toLocaleString()}/s</p>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-mystic-mint/50 uppercase tracking-widest block">CERTAINTY</span>
                <p className="text-xl font-bold font-mono text-mystic-mint">{successRate}%</p>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: HIGH-POLISH "AI OS" LANDING CONSOLE */}
          <div className="lg:col-span-6 relative w-full max-w-xl mx-auto">
            
            {/* Holographic glowing bloom backdrops */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-forsythia via-deep-saffron to-nocturnal-expedition rounded-2xl opacity-10 blur-xl pointer-events-none z-0" />
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-forsythia/10 blur-3xl pointer-events-none" />

            {/* Main Terminal Frame */}
            <div className="relative z-10 bg-oceanic-noir/80 border border-nocturnal-expedition/40 rounded-2xl shadow-2xl backdrop-blur-2xl overflow-hidden flex flex-col cyber-scanlines">
              
              {/* Window Header */}
              <div className="bg-nocturnal-expedition/20 px-5 py-3.5 border-b border-nocturnal-expedition/30 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-deep-saffron" />
                  <div className="w-2.5 h-2.5 rounded-full bg-forsythia" />
                  <div className="w-2.5 h-2.5 rounded-full bg-mystic-mint/40" />
                  <span className="text-[10px] font-mono text-mystic-mint/60 ml-2">axiom_hologram_v4.0.sh</span>
                </div>
                <div className="flex items-center gap-2 text-[9px] font-mono text-forsythia bg-forsythia/10 px-2.5 py-1 rounded border border-forsythia/20">
                  <Activity className="w-3 h-3 text-forsythia animate-pulse" />
                  GPU_CLUSTER: {gpuLoad}% LOAD
                </div>
              </div>

              {/* FLOW CONNECTION GRAPH: ANIMATED SVGS */}
              <div className="p-6 bg-oceanic-noir/40 border-b border-nocturnal-expedition/30 relative">
                
                {/* Connector SVG Grid */}
                <div className="flex justify-between items-center relative z-10">
                  
                  {/* Node 1: Stream */}
                  <div className={`p-3 rounded-xl border flex flex-col items-center justify-center w-24 h-24 text-center transition-all duration-300 ${
                    pipelineState === 'parsing'
                      ? 'border-forsythia bg-forsythia/10 shadow-lg shadow-forsythia/5 scale-105'
                      : 'border-nocturnal-expedition/40 bg-oceanic-noir/90'
                  }`}>
                    <Database className={`w-5 h-5 mb-1 ${pipelineState === 'parsing' ? 'text-forsythia animate-pulse' : 'text-mystic-mint/50'}`} />
                    <span className="text-[8px] font-mono text-mystic-mint/40 block">01 / SOURCE</span>
                    <span className="text-[10px] font-bold font-display text-arctic-powder">Raw Streams</span>
                  </div>

                  {/* Flowing connector line 1-2 */}
                  <div className="flex-1 h-12 relative mx-2">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40">
                      <defs>
                        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#114C5A" stopOpacity="0.4" />
                          <stop offset="50%" stopColor="#FFC801" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="#FF9932" stopOpacity="0.8" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M 0,20 Q 50,10 100,20"
                        fill="none"
                        stroke="url(#gradient1)"
                        strokeWidth="1.5"
                        className={pipelineState === 'parsing' || pipelineState === 'transforming' ? 'animate-[glowFlow_1.5s_linear_infinite]' : ''}
                        strokeDasharray={pipelineState !== 'idle' ? '5, 5' : 'none'}
                      />
                    </svg>
                  </div>

                  {/* Node 2: Cognitive Engine */}
                  <div className={`p-3 rounded-xl border flex flex-col items-center justify-center w-24 h-24 text-center transition-all duration-300 ${
                    pipelineState === 'transforming' || pipelineState === 'validating'
                      ? 'border-deep-saffron bg-deep-saffron/10 shadow-lg shadow-deep-saffron/5 scale-105'
                      : 'border-nocturnal-expedition/40 bg-oceanic-noir/90'
                  }`}>
                    <Cpu className={`w-5 h-5 mb-1 ${pipelineState === 'transforming' || pipelineState === 'validating' ? 'text-deep-saffron animate-spin' : 'text-mystic-mint/50'}`} />
                    <span className="text-[8px] font-mono text-mystic-mint/40 block">02 / CORE</span>
                    <span className="text-[10px] font-bold font-display text-arctic-powder">Axiom Cognitive</span>
                  </div>

                  {/* Flowing connector line 2-3 */}
                  <div className="flex-1 h-12 relative mx-2">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40">
                      <defs>
                        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#FF9932" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="#D9E8E2" stopOpacity="0.4" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M 0,20 Q 50,30 100,20"
                        fill="none"
                        stroke="url(#gradient2)"
                        strokeWidth="1.5"
                        className={pipelineState === 'validating' || pipelineState === 'done' ? 'animate-[glowFlow_1.5s_linear_infinite]' : ''}
                        strokeDasharray={pipelineState !== 'idle' ? '5, 5' : 'none'}
                      />
                    </svg>
                  </div>

                  {/* Node 3: Structured Target */}
                  <div className={`p-3 rounded-xl border flex flex-col items-center justify-center w-24 h-24 text-center transition-all duration-300 ${
                    pipelineState === 'done'
                      ? 'border-mystic-mint bg-mystic-mint/10 shadow-lg shadow-mystic-mint/5 scale-105'
                      : 'border-nocturnal-expedition/40 bg-oceanic-noir/90'
                  }`}>
                    <Zap className={`w-5 h-5 mb-1 ${pipelineState === 'done' ? 'text-mystic-mint animate-bounce' : 'text-mystic-mint/50'}`} />
                    <span className="text-[8px] font-mono text-mystic-mint/40 block">03 / TARGET</span>
                    <span className="text-[10px] font-bold font-display text-arctic-powder">Structured DB</span>
                  </div>

                </div>

              </div>

              {/* TERMINAL OUTPUT PANEL */}
              <div className="p-5 font-mono text-[10px] space-y-2 h-[160px] overflow-y-auto bg-oceanic-noir/90 border-b border-nocturnal-expedition/30 no-scrollbar relative">
                
                {/* Floating ambient glow corner inside log */}
                <div className="absolute bottom-2 right-2 w-12 h-12 rounded-full bg-forsythia/5 blur-md pointer-events-none" />

                {consoleLogs.map((log, idx) => (
                  <div key={idx} className="text-mystic-mint/90 leading-relaxed truncate animate-entry">
                    {log}
                  </div>
                ))}

                {pipelineState === 'parsing' && (
                  <div className="text-forsythia flex items-center gap-1.5 animate-pulse mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-forsythia animate-ping" />
                    [Scanning] Unifying schema tables & resolving OCR maps...
                  </div>
                )}
                {pipelineState === 'transforming' && (
                  <div className="text-deep-saffron flex items-center gap-1.5 animate-pulse mt-1">
                    <RefreshCw className="w-3 h-3 animate-spin text-deep-saffron" />
                    [Mapping] Restructuring raw matrices on virtual compiler...
                  </div>
                )}
                {pipelineState === 'validating' && (
                  <div className="text-forsythia flex items-center gap-1.5 animate-pulse mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-forsythia animate-pulse" />
                    [Self-Healing] Resolving integrity keys...
                  </div>
                )}
              </div>

              {/* INTERACTIVE CONTROLS RAIL */}
              <div className="bg-nocturnal-expedition/10 p-5 space-y-4">
                
                {/* Switches grid */}
                <div className="grid grid-cols-3 gap-3">
                  
                  {/* Toggle 1: Self-Healing */}
                  <button
                    onClick={() => setSelfHealing(!selfHealing)}
                    className={`flex flex-col text-left p-2.5 rounded-lg border text-xs cursor-pointer transition-all ${
                      selfHealing 
                        ? 'bg-nocturnal-expedition/20 border-forsythia text-arctic-powder' 
                        : 'bg-transparent border-nocturnal-expedition/30 text-mystic-mint/40 hover:border-nocturnal-expedition/60'
                    }`}
                  >
                    <span className="text-[8px] font-mono tracking-widest text-mystic-mint/40 block mb-1">AUTO-HEALING</span>
                    <div className="flex items-center justify-between w-full">
                      <span className="font-bold font-mono">{selfHealing ? 'ON' : 'OFF'}</span>
                      <span className={`w-2 h-2 rounded-full ${selfHealing ? 'bg-forsythia' : 'bg-mystic-mint/30'}`} />
                    </div>
                  </button>

                  {/* Toggle 2: Parallel Ingest */}
                  <button
                    onClick={() => setParallelIngest(!parallelIngest)}
                    className={`flex flex-col text-left p-2.5 rounded-lg border text-xs cursor-pointer transition-all ${
                      parallelIngest 
                        ? 'bg-nocturnal-expedition/20 border-forsythia text-arctic-powder' 
                        : 'bg-transparent border-nocturnal-expedition/30 text-mystic-mint/40 hover:border-nocturnal-expedition/60'
                    }`}
                  >
                    <span className="text-[8px] font-mono tracking-widest text-mystic-mint/40 block mb-1">PARALLEL CORE</span>
                    <div className="flex items-center justify-between w-full">
                      <span className="font-bold font-mono">{parallelIngest ? 'MULTI' : 'SINGLE'}</span>
                      <span className={`w-2 h-2 rounded-full ${parallelIngest ? 'bg-forsythia' : 'bg-mystic-mint/30'}`} />
                    </div>
                  </button>

                  {/* Config 3: Scan Depth Select */}
                  <div className="flex flex-col text-left p-2.5 rounded-lg border border-nocturnal-expedition/30 bg-oceanic-noir text-xs relative">
                    <span className="text-[8px] font-mono tracking-widest text-mystic-mint/40 block mb-1">SCANNING DEPTH</span>
                    <select
                      value={scanDepth}
                      onChange={(e) => setScanDepth(e.target.value as any)}
                      className="bg-transparent font-bold font-mono text-forsythia outline-none border-none p-0 cursor-pointer w-full text-xs"
                    >
                      <option value="standard" className="bg-oceanic-noir text-arctic-powder">Standard</option>
                      <option value="deep" className="bg-oceanic-noir text-arctic-powder">Deep Spec</option>
                      <option value="quantum" className="bg-oceanic-noir text-arctic-powder">Quantum</option>
                    </select>
                  </div>

                </div>

                {/* Simulation Trigger Button */}
                <div className="flex items-center justify-between gap-4 pt-1">
                  <div className="text-[9px] font-mono text-mystic-mint/50 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-forsythia animate-ping" />
                    Axiom-Node-04, Host: cloud-run-3000
                  </div>

                  <button
                    onClick={runMockPipeline}
                    disabled={pipelineState !== 'idle'}
                    className={`px-5 py-2.5 rounded-xl text-xs font-bold font-mono transition-all flex items-center gap-2 ${
                      pipelineState !== 'idle'
                        ? 'bg-nocturnal-expedition/40 text-mystic-mint/40 border border-transparent'
                        : 'bg-gradient-to-r from-forsythia to-deep-saffron hover:opacity-95 text-oceanic-noir shadow-lg shadow-forsythia/10 cursor-pointer font-bold scale-100 hover:scale-[1.02]'
                    }`}
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    {pipelineState === 'idle' ? 'Run Live Simulation' : 'Pipeline Running...'}
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
