"use client";

import React from "react";
import Lottie from "lottie-react";
import wavingAnimation from "../../public/public/hello.json";

const LottieAnimation = () => {
  return (
    <div className="flex justify-center items-center">
      <Lottie animationData={wavingAnimation} loop className="w-100 h-100" />
    </div>
  );
};

export default LottieAnimation;
