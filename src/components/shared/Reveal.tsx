import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface RevealProps {
  children: React.ReactNode;
  animation?: 'fade' | 'slide-left' | 'slide-right' | 'scale-up';
  delay?: number; // delay in ms
  duration?: number; // duration in ms
  className?: string;
  triggerOnce?: boolean;
  key?: React.Key;
}

export default function Reveal({
  children,
  animation = 'fade',
  delay = 0,
  duration,
  className = '',
  triggerOnce = true
}: RevealProps) {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.05,
    rootMargin: '0px 0px -80px 0px',
    triggerOnce
  });

  const getAnimationClass = () => {
    switch (animation) {
      case 'slide-left': return 'reveal-slide-left';
      case 'slide-right': return 'reveal-slide-right';
      case 'scale-up': return 'reveal-scale-up';
      default: return 'reveal-fade';
    }
  };

  const style: React.CSSProperties = {
    transitionDelay: `${delay}ms`,
    ...(duration ? { transitionDuration: `${duration}ms` } : {})
  };

  return (
    <div
      ref={ref as any}
      style={style}
      className={`reveal-on-scroll ${getAnimationClass()} ${isIntersecting ? 'reveal-active' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
