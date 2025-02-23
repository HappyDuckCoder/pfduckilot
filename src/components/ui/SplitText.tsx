"use client";

import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
}

const SplitText: React.FC<SplitTextProps> = ({ text, className = "" }) => {
  const letters = Array.from(text);

  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, { once: false, amount: 0.5 });

  useEffect(() => {
    if (!ref.current) return;

    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={`flex ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block hover:text-stone-600 hover:bg-clip-text"
          variants={letterVariants}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default SplitText;
