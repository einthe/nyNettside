'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParallaxBackground({ children }: { children: React.ReactNode }) {
  const targetRef = useRef(null);
  const { scrollY } = useScroll({ target: targetRef });
  const bgY = useTransform(scrollY, [0, 5000], [0, 3000]);

  return (
    <motion.div
      ref={targetRef}
      style={{
        backgroundImage: "url('/space_blur.jpg')",
        backgroundAttachment: 'scroll',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundPositionY: bgY,
        minHeight: '100vh',
        width: '100%',
        zIndex: -1
      }}
    >
      {children}
    </motion.div>
  );
}