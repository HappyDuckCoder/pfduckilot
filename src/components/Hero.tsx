"use client";

import React from "react";
import IntroHeader from "./IntroHeader";
import Portrait from "./Portrait";
import ScrollForMore from "./ScrollForMore";
import LottieAnimation from "./Loti";

const Hero = () => {
  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero-section" className="px-5 pb-10 md:pb-40 pt-16 sm:pt-20">
      <div className="container mx-auto max-w-7xl px-4">
        <IntroHeader />
        <div className="flex flex-col md:flex-row gap-6 md:gap-16 items-center">
          <div className="flex flex-col items-center md:items-start">
            <Portrait width={200} height={200} />
            <p className="text-gray-600 mt-3 font-bold text-lg sm:text-xl">
              Duckilot
            </p>
          </div>
          <div className="text-center md:text-left flex-1 p-3">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-700">
              Welcome to my world!
            </h2>
            <p className="text-gray-600 mt-3 text-base sm:text-lg leading-relaxed max-w-md">
              As a passionate{" "}
              <span className="font-semibold text-gray-800">
                Fullstack Developer
              </span>
              , I specialize in building scalable web applications. With
              expertise in{" "}
              <span className="font-semibold text-gray-800">
                Next.js, Prisma, and MongoDB
              </span>
              , I craft seamless user experiences and robust backend solutions.
            </p>
            <div className="mt-5">
              <ScrollForMore onClick={handleScrollToAbout} />
            </div>
          </div>
          <div className="hidden md:flex flex-1 justify-center">
            <LottieAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
