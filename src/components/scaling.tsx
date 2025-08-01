"use client";

import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function ScalingSection({ children }: { children: ReactNode }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end 0.2"],
  });

  const rawScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);
  const scale = useSpring(rawScale, {
    stiffness: 500,
    damping: 100,
  });

  return (
    <motion.div ref={ref} className="scaling" style={{ scale, width: "100%", height: "auto" }}>
      {children}
    </motion.div>
  );
}
