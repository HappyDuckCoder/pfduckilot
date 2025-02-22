import Image from "next/image";
import React from "react";

const Portrait = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl shadow-lg">
      <Image
        alt="Portrait duckilot"
        src="/public/cv.jpg"
        width={200}
        height={200}
        className="rounded-2xl w-full object-cover"
        priority
      />
    </div>
  );
};

export default Portrait;
