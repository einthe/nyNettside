'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParallaxBackground({ children }: { children: React.ReactNode }) {
  const targetRef = useRef(null);
  const { scrollY } = useScroll({ target: targetRef });
  const bgY = useTransform(scrollY, [0, 1000], [0, -200]);

  return (
    <motion.div
      ref={targetRef}
      style={{
        backgroundImage: "url('/Gløshaugen.jpg')",
        backgroundAttachment: 'scroll',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundPositionY: bgY,
        minHeight: '100vh',
        width: '100%',
      }}
    >
      {children}
    </motion.div>
  );
}