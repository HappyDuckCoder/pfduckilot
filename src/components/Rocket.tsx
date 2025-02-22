"use client";

import React from "react";
import Lottie from "lottie-react";
import RocketAnimation from "../../public/public/study.json";

const Rocket = () => {
  return (
    <div className="flex justify-center items-center">
      <Lottie animationData={RocketAnimation} loop className="w-50" />
    </div>
  );
};

export default Rocket;
