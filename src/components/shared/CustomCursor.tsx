import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Touch detection to completely disable custom cursor on touch screens
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const updateRing = () => {
      // Smooth interpolation for the outer trailing ring (easing effect)
      const ease = 0.15;
      ringX += (mouseX - ringX) * ease;
      ringY += (mouseY - ringY) * ease;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) scale(${isHovered ? 1.5 : 1})`;
      }

      requestAnimationFrame(updateRing);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('button') || 
        target.closest('a') ||
        target.classList.contains('interactive-card');
      
      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    const animationId = requestAnimationFrame(updateRing);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(animationId);
    };
  }, [isHovered]);

  if (!isVisible) return null;

  return (
    <>
      {/* Tiny inner center dot */}
      <div
        ref={dotRef}
        id="custom-cursor-dot"
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-forsythia rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 mix-blend-screen transition-transform duration-75"
      />
      {/* Outer trailing premium ring */}
      <div
        ref={ringRef}
        id="custom-cursor-ring"
        className="fixed top-0 left-0 w-8 h-8 border border-forsythia/30 rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 mix-blend-screen transition-all duration-300 ease-out"
        style={{
          backgroundColor: isHovered ? 'rgba(255, 200, 1, 0.08)' : 'transparent',
          borderColor: isHovered ? 'rgba(255, 153, 50, 0.7)' : 'rgba(255, 200, 1, 0.3)',
        }}
      />
    </>
  );
}
