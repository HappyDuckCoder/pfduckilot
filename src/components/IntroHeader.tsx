"use client";

import React from "react";
import SplitText from "./ui/SplitText";

const IntroHeader = () => (
  <h1 className="text-9xl md:text-9xl font-extrabold leading-tight">
    <SplitText text="HI THERE -" />
    <SplitText text="I'M DUCKILOT" className="justify-end" />
  </h1>
);

export default IntroHeader;
