import { useEffect, useState } from 'react';

export default function CSSLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200); // Elegant, rapid fading transition

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      id="css-only-loader-wrapper"
      className="fixed inset-0 bg-oceanic-noir flex flex-col items-center justify-center z-[9999] transition-opacity duration-500 ease-out animate-fade-out"
      style={{
        animationDelay: '1000ms',
        animationFillMode: 'forwards',
      }}
    >
      <div className="relative flex flex-col items-center">
        {/* Glow backdrop light ring */}
        <div className="absolute w-24 h-24 rounded-full bg-forsythia/10 blur-xl animate-pulse" />
        
        {/* Modern rotating concentric arc segments */}
        <div className="w-12 h-12 border-2 border-forsythia/10 border-t-forsythia border-b-deep-saffron rounded-full animate-spin duration-1000" />
        
        {/* Text loading indicators in monospace premium font */}
        <div className="mt-6 text-center space-y-1">
          <p className="text-xs font-mono font-medium tracking-widest text-arctic-powder uppercase">
            Axiom AI Systems
          </p>
          <p className="text-[9px] font-mono text-mystic-mint/60 animate-pulse">
            Configuring quantum schema pipelines...
          </p>
        </div>
      </div>
    </div>
  );
}
