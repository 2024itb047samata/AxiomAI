import { useEffect, useRef, RefObject } from 'react';

/**
 * Custom hook to apply a premium magnetic pull effect on elements (e.g. CTA buttons)
 * inspired by Stripe and Vercel micro-interactions.
 */
export function useMagnetic(strength: number = 0.35): RefObject<HTMLButtonElement | null> {
  const ref = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = element.getBoundingClientRect();
      
      // Calculate center of button
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      // Distance from center
      const deltaX = clientX - centerX;
      const deltaY = clientY - centerY;
      
      // Translate the button based on strength
      element.style.transform = `translate(${deltaX * strength}px, ${deltaY * strength}px)`;
      element.style.transition = 'transform 0.1s cubic-bezier(0.25, 1, 0.5, 1)';
    };

    const handleMouseLeave = () => {
      // Smoothly reset position
      element.style.transform = 'translate(0px, 0px)';
      element.style.transition = 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)';
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength]);

  return ref;
}
