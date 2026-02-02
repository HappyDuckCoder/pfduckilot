"use client";

import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import RocketAnimation from "../../public/public/study.json";

const Rocket = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className="flex justify-center items-center w-50 min-h-[200px]"
        aria-hidden
      />
    );
  }

  return (
    <div className="flex justify-center items-center">
      <Lottie animationData={RocketAnimation} loop className="w-50" />
    </div>
  );
};

export default Rocket;
