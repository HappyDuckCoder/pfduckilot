"use client";

import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import NoiseBackground from "./NoiseBackground";
import helloAnimation from "../../public/public/load.json";

const LoadingScreen = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <NoiseBackground mode="dark" intensity={0.1}>
      <div className="flex items-center justify-center w-screen h-screen">
        <div className="flex flex-col items-center justify-center w-40 h-40 md:w-64 md:h-64">
          {mounted ? (
            <Lottie
              animationData={helloAnimation}
              loop
              className="w-full h-full"
            />
          ) : (
            <div
              className="w-full h-full rounded-full border-2 border-white/20 border-t-white animate-spin"
              aria-hidden
            />
          )}
        </div>
      </div>
    </NoiseBackground>
  );
};

export default LoadingScreen;
