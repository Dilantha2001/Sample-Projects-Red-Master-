import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const Section = ({ children, className = '', id }: SectionProps) => {
  // Check if caller specifies a custom height or min-height class
  const hasHeightClass = /\b(h-|min-h-)/.test(className);
  const defaultHeightClass = hasHeightClass ? '' : 'min-h-screen';

  return (
    <section 
      id={id}
      className={`relative w-full snap-start overflow-hidden ${defaultHeightClass} ${className}`}
    >
      {children}
    </section>
  );
};
