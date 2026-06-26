import React, { ReactNode } from 'react';
import { useMagnetic } from '../../hooks/useMagnetic';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  id?: string;
  strength?: number;
}

export default function MagneticButton({
  children,
  className = '',
  onClick,
  type = 'button',
  id,
  strength = 0.35,
}: MagneticButtonProps) {
  const magneticRef = useMagnetic(strength);

  return (
    <button
      ref={magneticRef}
      type={type}
      id={id}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}
