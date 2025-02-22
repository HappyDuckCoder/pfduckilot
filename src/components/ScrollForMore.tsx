"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface ScrollForMoreProps {
  onClick: () => void;
}

const ScrollForMore: React.FC<ScrollForMoreProps> = ({ onClick }) => {
  return (
    <div className="button md:text-lgButton text-gray hidden md:flex md:items-center">
      <button onClick={onClick} className="flex items-center gap-2">
        <span>(Scroll For More)</span>
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <Image
            src="public/icons/arrowdown.svg"
            alt="Arrow Down Icon for scrolling"
            width={16}
            height={16}
            className="md:w-4 md:h-4 lg:w-6 lg:h-6"
          />
        </motion.div>
      </button>
    </div>
  );
};

export default ScrollForMore;
