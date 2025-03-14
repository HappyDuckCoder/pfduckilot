"use client";

import React from "react";
import SplitText from "./ui/SplitText";

const IntroHeader = () => (
  <h1>
    <SplitText
      text="HI THERE -"
      className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold leading-tight text-center md:text-left px-4"
    />
    <SplitText
      text="I'M DUCKILOT"
      className="justify-end text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold leading-tight text-center md:text-left px-4"
    />
  </h1>
);

export default IntroHeader;
