"use client";

import Image from "next/image";
import React from "react";

const Portrait = ({ width, height }: { width: number; height: number }) => {
  return (
    <div className="relative overflow-hidden rounded-2xl shadow-lg">
      <Image
        alt="Portrait duckilot"
        src="/public/cv.jpg"
        width={width}
        height={height}
        className="rounded-2xl w-full object-cover hover:scale-105 transition-transform"
        priority
      />
    </div>
  );
};

export default Portrait;
