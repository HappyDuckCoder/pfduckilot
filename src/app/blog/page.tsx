import Blog from "@/components/Blog/Blog";
import NoiseBackground from "@/components/NoiseBackground";
import React from "react";

const page = () => {
  return (
    <main
      id="home-section"
      className="relative flex justify-center items-center flex-col overflow-x-hidden mx-auto"
    >
      <div className="w-full">
        <NoiseBackground mode="light" intensity={0.1}>
          <Blog />
        </NoiseBackground>
      </div>
    </main>
  );
};

export default page;
