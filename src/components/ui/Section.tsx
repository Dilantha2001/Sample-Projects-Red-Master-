import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const Section = ({ children, className = '', id }: SectionProps) => {
  return (
    <section 
      id={id}
      className={`relative h-screen w-full snap-start overflow-hidden ${className}`}
    >
      {children}
    </section>
  );
};
