import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { 
  Check, 
  HelpCircle, 
  Shield, 
  Zap, 
  Sparkles, 
  X, 
  Terminal, 
  Database, 
  ShieldCheck, 
  Network,
  Copy,
  ChevronRight
} from 'lucide-react';
import { currencyConfig } from '../../config/pricingMatrix';
import { calculatePlanPrice } from '../../utils/pricingCalculator';
import { Currency, BillingCycle } from '../../types';

export default function Pricing() {
  // ISO State Isolation: State is scoped locally to prevent triggering parent or global app re-renders.
  const [currency, setCurrency] = useState<Currency>('USD');
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');

  // Interactive Provisioning Modal state
  const [selectedPlanId, setSelectedPlanId] = useState<'Starter' | 'Pro' | 'Enterprise' | null>(null);
  const [dbDialect, setDbDialect] = useState<'postgres' | 'sqlite' | 'mysql'>('postgres');
  const [clusterRegion, setClusterRegion] = useState<'us-east' | 'eu-central' | 'asia-east'>('us-east');
  const [provisionProgress, setProvisionProgress] = useState<number>(0);
  const [provisionState, setProvisionState] = useState<'idle' | 'building' | 'complete'>('idle');
  const [copiedToken, setCopiedToken] = useState<boolean>(false);

  // Memoize Currency conversion map options to prevent object reconstruction on renders
  const currencyOptions = useMemo(() => {
    return Object.keys(currencyConfig) as Currency[];
  }, []);

  // Memoize state handlers
  const handleCurrencyChange = useCallback((cur: Currency) => {
    setCurrency(cur);
  }, []);

  const handleBillingChange = useCallback((cycle: BillingCycle) => {
    setBillingCycle(cycle);
  }, []);

  const handlePlanSelect = useCallback((id: 'Starter' | 'Pro' | 'Enterprise') => {
    setSelectedPlanId(id);
    setProvisionState('idle');
    setProvisionProgress(0);
    setCopiedToken(false);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedPlanId(null);
    setProvisionState('idle');
    setProvisionProgress(0);
  }, []);

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleCloseModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleCloseModal]);

  // Handle mock provisioning timer loop
  useEffect(() => {
    if (provisionState !== 'building') return;

    const interval = setInterval(() => {
      setProvisionProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setProvisionState('complete');
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [provisionState]);

  const startProvisioning = () => {
    setProvisionProgress(0);
    setProvisionState('building');
  };

  const copyMockToken = () => {
    setCopiedToken(true);
    setTimeout(() => setCopiedToken(false), 2000);
  };

  // Compute pricing values dynamically based on Formula pricing definitions
  const computedPlans = useMemo(() => {
    const plans: Array<{
      id: 'Starter' | 'Pro' | 'Enterprise';
      name: string;
      description: string;
      features: string[];
      badge?: string;
      popular?: boolean;
      buttonText: string;
    }> = [
      {
        id: 'Starter',
        name: 'Starter Node',
        description: 'Perfect for small teams automating core data flows and ingestion pipelines.',
        features: [
          'Up to 10,000 active automated records',
          '3 core AI extraction models',
          'Real-time webhook integration',
          'Standard error-resolution suggestions',
          'Email & Community support',
        ],
        badge: 'Developer Tier',
        buttonText: 'Initialize Starter Node',
      },
      {
        id: 'Pro',
        name: 'Pro Matrix',
        description: 'For growing businesses scaling multi-source pipelines with custom AI agents.',
        features: [
          'Up to 100,000 active automated records',
          'Unlimited custom AI Extraction & Schema Agents',
          'Advanced Anomaly Detection engine',
          'Multi-region data redundancy',
          'Priority SLAs & 24/7 priority support',
          'Dedicated integration specialist',
        ],
        badge: 'Most Popular',
        popular: true,
        buttonText: 'Deploy Pro Matrix',
      },
      {
        id: 'Enterprise',
        name: 'Enterprise Mesh',
        description: 'Custom governance, infinite scalability, and dedicated self-hosted intelligence.',
        features: [
          'Infinite active records & volume tiers',
          'Private cloud & self-hosted model deployments',
          'Zero-retention data privacy guarantees',
          'Custom LLM fine-tuning pipelines',
          'Dedicated Customer Success Architect',
          'Custom SLA & SOC2-compliance controls',
        ],
        badge: 'Autonomous Scale',
        buttonText: 'Provision Custom Mesh',
      },
    ];

    return plans.map((p) => {
      const pricing = calculatePlanPrice(p.id, currency, billingCycle);
      return {
        ...p,
        pricing,
      };
    });
  }, [currency, billingCycle]);

  // Lookup active plan details
  const activePlanDetails = useMemo(() => {
    if (!selectedPlanId) return null;
    return computedPlans.find(p => p.id === selectedPlanId) || null;
  }, [selectedPlanId, computedPlans]);

  return (
    <section
      id="pricing"
      className="relative py-24 lg:py-32 bg-oceanic-noir border-t border-nocturnal-expedition/30 overflow-hidden"
    >
      {/* Ambient background glow spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-forsythia/5 blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forsythia/10 border border-forsythia/20 text-xs font-semibold text-forsythia uppercase tracking-widest mb-6">
            <Zap className="w-3.5 h-3.5" />
            Flexible Infrastructure Plans
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-arctic-powder tracking-tight leading-tight">
            Fair, adaptive pricing built for global engineering teams
          </h2>
          <p className="text-mystic-mint/80 mt-4 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Calculated in real-time, adjusting for purchasing power parity (PPP) multipliers and long-term commitments.
          </p>
        </div>

        {/* Pricing Selection Toolbar (Isolated State Controls) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 bg-nocturnal-expedition/15 p-4 rounded-2xl border border-nocturnal-expedition/30 max-w-xl mx-auto backdrop-blur-md">
          
          {/* Billing Cycle Toggle */}
          <div className="flex flex-col items-center sm:items-start gap-2">
            <span className="text-[9px] font-mono font-bold text-mystic-mint/50 uppercase tracking-wider">Billing Frequency</span>
            <div className="bg-oceanic-noir/90 p-1 rounded-xl flex border border-nocturnal-expedition/30">
              <button
                onClick={() => handleBillingChange('monthly')}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all duration-180 cursor-pointer ${
                  billingCycle === 'monthly'
                    ? 'bg-forsythia text-oceanic-noir shadow-md shadow-forsythia/10'
                    : 'text-mystic-mint/70 hover:text-forsythia bg-transparent'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => handleBillingChange('yearly')}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all duration-180 cursor-pointer ${
                  billingCycle === 'yearly'
                    ? 'bg-forsythia text-oceanic-noir shadow-md shadow-forsythia/10'
                    : 'text-mystic-mint/70 hover:text-forsythia bg-transparent'
                }`}
              >
                Yearly
                <span className="bg-forsythia/20 text-forsythia text-[9px] px-1.5 py-0.5 rounded font-bold border border-forsythia/20">
                  -20%
                </span>
              </button>
            </div>
          </div>

          <div className="hidden sm:block w-px h-12 bg-nocturnal-expedition/30" />

          {/* Regional Currency Selector */}
          <div className="flex flex-col items-center sm:items-start gap-2">
            <span className="text-[9px] font-mono font-bold text-mystic-mint/50 uppercase tracking-wider">Select Currency</span>
            <div className="bg-oceanic-noir/90 p-1 rounded-xl flex border border-nocturnal-expedition/30">
              {currencyOptions.map((cur) => (
                <button
                  key={cur}
                  onClick={() => handleCurrencyChange(cur)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all duration-180 cursor-pointer ${
                    currency === cur
                      ? 'bg-nocturnal-expedition text-arctic-powder border border-nocturnal-expedition/40'
                      : 'text-mystic-mint/70 hover:text-forsythia'
                  }`}
                >
                  {cur}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {computedPlans.map((plan) => {
            const pricing = plan.pricing;
            const currencySymbol = currencyConfig[currency].symbol;
            const isYearly = billingCycle === 'yearly';

            return (
              <div
                key={plan.id}
                onClick={() => handlePlanSelect(plan.id)}
                className={`glass-panel rounded-2xl p-8 relative flex flex-col justify-between transition-all duration-300 border cursor-pointer group hover:scale-[1.01] ${
                  plan.popular
                    ? 'border-forsythia ring-1 ring-forsythia/40 bg-nocturnal-expedition/20 shadow-2xl shadow-forsythia/5 md:-translate-y-2 hover:border-deep-saffron'
                    : 'border-nocturnal-expedition/30 hover:border-forsythia/30 hover:bg-nocturnal-expedition/10'
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute top-0 right-6 -translate-y-1/2 bg-gradient-to-r from-forsythia to-deep-saffron text-oceanic-noir text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg shadow-forsythia/20 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Recommended Plan
                  </div>
                )}

                <div>
                  {/* Card Title & Badges */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-display font-bold text-arctic-powder">{plan.name}</h3>
                    {plan.badge && (
                      <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.75 rounded bg-nocturnal-expedition/25 border border-nocturnal-expedition/30 text-mystic-mint/60">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-mystic-mint/80 leading-relaxed min-h-[48px] mb-6">
                    {plan.description}
                  </p>

                  {/* Pricing Display */}
                  <div className="mb-6 pb-6 border-b border-nocturnal-expedition/30">
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-display font-bold text-arctic-powder tracking-tight">
                        {currencySymbol}
                        {pricing.finalPrice.toLocaleString()}
                      </span>
                      <span className="text-xs text-mystic-mint/50 font-medium">/ month</span>
                    </div>

                    {/* Secondary billing cycle details */}
                    <p className="text-[10px] text-mystic-mint/50 font-mono mt-2.5">
                      {isYearly ? (
                        <span className="text-forsythia">
                          ✔ Total: {currencySymbol}
                          {(pricing.finalPrice * 12).toLocaleString()} billed annually
                        </span>
                      ) : (
                        <span>Standard monthly subscription</span>
                      )}
                    </p>
                    {currency !== 'USD' && (
                      <p className="text-[9px] text-mystic-mint/40 font-mono mt-1">
                        * PPP Adjustment multiplier ({currencyConfig[currency].regionalMultiplier}x) applied
                      </p>
                    )}
                  </div>

                  {/* Features List */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-4 h-4 rounded-full bg-forsythia/10 border border-forsythia/30 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-forsythia" />
                        </div>
                        <span className="text-xs text-mystic-mint/90 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing Purchase CTA Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Avoid double handler firing
                    handlePlanSelect(plan.id);
                  }}
                  className={`w-full py-3.5 rounded-xl text-xs font-semibold tracking-wide cursor-pointer transition-all duration-180 focus-visible:outline-2 focus-visible:outline-forsythia ${
                    plan.popular
                      ? 'bg-gradient-to-r from-forsythia to-deep-saffron hover:opacity-90 text-oceanic-noir shadow-xl shadow-forsythia/10 font-bold'
                      : 'bg-nocturnal-expedition/30 text-mystic-mint/80 border border-nocturnal-expedition/40 hover:bg-nocturnal-expedition/40 hover:text-forsythia'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            );
          })}
        </div>

        {/* Dynamic Multiplier Verification Disclosure */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-xl bg-nocturnal-expedition/10 border border-nocturnal-expedition/30 max-w-4xl mx-auto text-center sm:text-left">
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-forsythia shrink-0" />
            <p className="text-[10px] text-mystic-mint/70 leading-normal font-mono">
              Prices dynamically computed: <strong>Base Price USD</strong> × <strong>Exchange Rate ({currency})</strong> × <strong>Regional PPP ({currencyConfig[currency].regionalMultiplier}x)</strong> × <strong>Billing Discount ({billingCycle === 'yearly' ? '0.8x' : '1.0x'})</strong>.
            </p>
          </div>
          <button
            onClick={() => {
              const faq = document.getElementById('faq');
              if (faq) {
                const offset = 85;
                const pos = faq.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({ top: pos - offset, behavior: 'smooth' });
              }
            }}
            className="text-[10px] font-semibold text-forsythia hover:text-deep-saffron flex items-center gap-1 shrink-0 font-mono cursor-pointer"
          >
            Explain calculations
            <HelpCircle className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* FUTURISTIC PROVISIONING NODE OVERLAY (HOLOGRAPHIC MODAL) */}
      {selectedPlanId && activePlanDetails && (
        <div 
          className="fixed inset-0 bg-oceanic-noir/80 backdrop-blur-xl z-50 flex items-center justify-center p-4 overflow-y-auto animate-entry"
          role="dialog"
          aria-modal="true"
        >
          {/* Main modal surface */}
          <div className="relative w-full max-w-2xl bg-oceanic-noir border border-nocturnal-expedition/40 rounded-3xl p-6 md:p-8 shadow-2xl overflow-hidden cyber-scanlines">
            
            {/* Ambient spotlight glowing backdrop */}
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-forsythia/5 blur-3xl pointer-events-none" />
            
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-6 right-6 p-2 rounded-full border border-nocturnal-expedition/30 text-mystic-mint/60 hover:text-forsythia hover:bg-nocturnal-expedition/20 cursor-pointer transition-all focus:outline-none"
              aria-label="Close provisioner modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header Title */}
            <div className="mb-6 flex items-start gap-4">
              <div className="p-3.5 rounded-xl bg-forsythia/10 border border-forsythia/30 text-forsythia shrink-0">
                <Network className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-forsythia font-bold uppercase tracking-widest">
                  AXIOM INFRASTRUCTURE ENGINE
                </span>
                <h3 className="text-2xl font-display font-black text-arctic-powder">
                  Provisioning {activePlanDetails.name}
                </h3>
                <p className="text-xs text-mystic-mint/70 mt-1">
                  Configure core engine dialects, region specs, and deploy your multi-agent architecture.
                </p>
              </div>
            </div>

            {provisionState === 'idle' && (
              <div className="space-y-6">
                
                {/* Configuration Options Grid */}
                <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-nocturnal-expedition/30">
                  
                  {/* Option 1: Database Target Dialect */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono font-bold text-mystic-mint/50 uppercase tracking-wider block">
                      Target Database Dialect
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'postgres' as const, label: 'PostgreSQL', icon: <Database className="w-3.5 h-3.5 mb-1" /> },
                        { id: 'sqlite' as const, label: 'SQLite', icon: <Terminal className="w-3.5 h-3.5 mb-1" /> },
                        { id: 'mysql' as const, label: 'MySQL', icon: <ShieldCheck className="w-3.5 h-3.5 mb-1" /> },
                      ].map((db) => (
                        <button
                          key={db.id}
                          onClick={() => setDbDialect(db.id)}
                          className={`p-3 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center ${
                            dbDialect === db.id 
                              ? 'border-forsythia bg-forsythia/10 text-forsythia' 
                              : 'border-nocturnal-expedition/30 hover:border-nocturnal-expedition/60 text-mystic-mint/60 hover:text-arctic-powder'
                          }`}
                        >
                          {db.icon}
                          <span className="text-[10px] font-bold">{db.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Option 2: Deployment Edge Region */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono font-bold text-mystic-mint/50 uppercase tracking-wider block">
                      Edge Region Cluster
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'us-east' as const, label: 'USA-East', desc: 'Virginia' },
                        { id: 'eu-central' as const, label: 'EU-West', desc: 'Frankfurt' },
                        { id: 'asia-east' as const, label: 'APAC-East', desc: 'Singapore' },
                      ].map((reg) => (
                        <button
                          key={reg.id}
                          onClick={() => setClusterRegion(reg.id)}
                          className={`p-3 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center ${
                            clusterRegion === reg.id 
                              ? 'border-deep-saffron bg-deep-saffron/10 text-deep-saffron' 
                              : 'border-nocturnal-expedition/30 hover:border-nocturnal-expedition/60 text-mystic-mint/60 hover:text-arctic-powder'
                          }`}
                        >
                          <span className="text-[10px] font-bold">{reg.label}</span>
                          <span className="text-[8px] font-mono opacity-50">{reg.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Provision Summary Panel */}
                <div className="p-4 rounded-xl bg-nocturnal-expedition/10 border border-nocturnal-expedition/30 flex items-center justify-between text-xs font-mono">
                  <div className="space-y-1">
                    <span className="text-mystic-mint/40 text-[9px] block">ESTIMATED LAUNCH DELAY</span>
                    <p className="text-arctic-powder font-bold text-sm">~ 12 Microseconds</p>
                  </div>
                  <div className="space-y-1 text-right">
                    <span className="text-mystic-mint/40 text-[9px] block">ESTIMATED PLAN COST</span>
                    <p className="text-forsythia font-bold text-sm">
                      {currencyConfig[currency].symbol}
                      {activePlanDetails.pricing.finalPrice.toLocaleString()} / mo
                    </p>
                  </div>
                </div>

                {/* Action Trigger Row */}
                <div className="flex items-center justify-between gap-4 pt-4 border-t border-nocturnal-expedition/30">
                  <button
                    onClick={handleCloseModal}
                    className="px-6 py-3.5 rounded-xl text-xs font-semibold text-mystic-mint hover:text-forsythia cursor-pointer transition-colors"
                  >
                    Cancel Deploy
                  </button>
                  <button
                    onClick={startProvisioning}
                    className="px-8 py-3.5 bg-gradient-to-r from-forsythia to-deep-saffron hover:opacity-90 text-oceanic-noir font-bold rounded-xl flex items-center gap-2 cursor-pointer transition-all shadow-lg shadow-forsythia/10"
                  >
                    Deploy Node Cluster
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            )}

            {provisionState === 'building' && (
              <div className="space-y-8 py-10 text-center">
                
                {/* Holographic provisioning loader spinner */}
                <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-4 border-nocturnal-expedition/25" />
                  <div className="absolute inset-0 rounded-full border-4 border-t-forsythia border-r-deep-saffron animate-spin" />
                  <Terminal className="w-8 h-8 text-forsythia animate-pulse" />
                </div>

                <div className="space-y-3 max-w-sm mx-auto">
                  <h4 className="text-lg font-bold text-arctic-powder font-display">
                    Spawning cognitive container...
                  </h4>
                  <p className="text-xs text-mystic-mint/60 leading-relaxed font-mono">
                    Allocating server-less clusters in region <strong className="text-forsythia">{clusterRegion.toUpperCase()}</strong>. Target dialect: <strong className="text-deep-saffron">{dbDialect.toUpperCase()}</strong>.
                  </p>
                </div>

                {/* Dynamic progress bar metrics */}
                <div className="max-w-md mx-auto space-y-2">
                  <div className="flex justify-between items-center text-[10px] font-mono text-mystic-mint/40">
                    <span>AXIOM CONTAINER PIPELINE</span>
                    <span>{provisionProgress}% COMPLETE</span>
                  </div>
                  <div className="w-full h-1.5 bg-nocturnal-expedition/20 rounded-full overflow-hidden border border-nocturnal-expedition/30">
                    <div 
                      className="h-full bg-gradient-to-r from-forsythia to-deep-saffron transition-all duration-200" 
                      style={{ width: `${provisionProgress}%` }}
                    />
                  </div>
                </div>

              </div>
            )}

            {provisionState === 'complete' && (
              <div className="space-y-6 pt-4">
                
                {/* Deployment Success Indicator */}
                <div className="p-6 rounded-2xl bg-forsythia/10 border border-forsythia/30 text-center space-y-2 max-w-lg mx-auto">
                  <div className="w-12 h-12 rounded-full bg-forsythia/20 border border-forsythia flex items-center justify-center mx-auto text-forsythia font-bold">
                    ✔
                  </div>
                  <h4 className="text-xl font-bold font-display text-forsythia tracking-tight">
                    Axiom Node Cluster Online
                  </h4>
                  <p className="text-xs text-mystic-mint/80 max-w-xs mx-auto">
                    Multi-agent containers have been successfully spawned and connected to your target target.
                  </p>
                </div>

                {/* Copyable API key block */}
                <div className="space-y-2">
                  <label className="text-[10px] font-mono font-bold text-mystic-mint/50 uppercase tracking-wider block">
                    Your Autonomous Cluster Client Token
                  </label>
                  <div className="flex items-center gap-2 p-3 bg-oceanic-noir border border-nocturnal-expedition/40 rounded-xl relative overflow-hidden">
                    <code className="text-xs text-forsythia font-mono truncate flex-1 pr-12 select-all">
                      ax_live_node_{clusterRegion}_{dbDialect}_6r3fjgi7kqkykpr5usngcr
                    </code>
                    
                    <button
                      onClick={copyMockToken}
                      className="p-2 bg-nocturnal-expedition/20 border border-nocturnal-expedition/30 rounded-lg text-mystic-mint hover:text-forsythia cursor-pointer hover:bg-nocturnal-expedition/40 transition-all absolute right-2 top-1.5"
                      aria-label="Copy deployment key"
                    >
                      {copiedToken ? (
                        <span className="text-[9px] font-bold uppercase text-forsythia px-1">COPIED</span>
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Complete close row */}
                <div className="flex items-center justify-end pt-4 border-t border-nocturnal-expedition/30">
                  <button
                    onClick={handleCloseModal}
                    className="px-8 py-3.5 bg-arctic-powder text-oceanic-noir font-bold rounded-xl cursor-pointer hover:bg-mystic-mint transition-colors shadow-lg shadow-forsythia/5 text-xs font-semibold"
                  >
                    Finish Setup & Start Dashboard
                  </button>
                </div>

              </div>
            )}

          </div>
        </div>
      )}

    </section>
  );
}
