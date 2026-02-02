"use client";

import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import wavingAnimation from "../../public/public/hello.json";

const LottieAnimation = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className="flex justify-center items-center w-100 h-100 min-h-[200px]"
        aria-hidden
      />
    );
  }

  return (
    <div className="flex justify-center items-center">
      <Lottie animationData={wavingAnimation} loop className="w-100 h-100" />
    </div>
  );
};

export default LottieAnimation;
