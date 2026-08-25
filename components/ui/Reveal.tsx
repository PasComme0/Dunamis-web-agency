'use client';

import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  width?: 'fit-content' | '100%';
}

export function Reveal({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = '',
  width = '100%'
}: RevealProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px 0px',
  });

  const getVariants = () => {
    switch(direction) {
      case 'up': return { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
      case 'down': return { hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } };
      case 'left': return { hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } };
      case 'right': return { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } };
      case 'none': return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
      default: return { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
    }
  };

  return (
    <div ref={ref} style={{ width }} className={className}>
      <motion.div
        variants={getVariants()}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}
