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
    <section id="hero-section" className="px-7 pb-10 md:pb-40 pt-20">
      <div className="container mx-auto">
        <IntroHeader />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-20">
          <div className="flex flex-col items-center translate-x-10 -translate-y-16">
            <Portrait />
            <p className="text-gray-600 mt-4 font-bold">Duckilot</p>
          </div>
          <div className="text-center md:text-left flex-1 p-5 mx-2">
            <h2 className="text-4xl font-semibold text-gray-700">
              Welcome to my world!
            </h2>
            <p className="text-gray-600 mt-4 text-lg leading-relaxed max-w-md">
              As a passionate{" "}
              <span className="font-semibold text-gray-800">
                Fullstack Developer
              </span>
              , I specialize in building scalable and high-performance web
              applications. With expertise in modern technologies like{" "}
              <span className="font-semibold text-gray-800">
                Next.js, Prisma, and MongoDB
              </span>
              , I focus on crafting seamless user experiences while ensuring
              robust backend functionality.
            </p>
            <div className="flex flex-col items-center justify-center mt-7">
              <ScrollForMore onClick={handleScrollToAbout} />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center flex-1">
            <LottieAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
