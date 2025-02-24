import BlogHero from "@/components/Blog/BlogHero";
import BlogList from "@/components/Blog/BlogList";
import NoiseBackground from "@/components/NoiseBackground";
import React from "react";

const page = () => {
  return (
    <main
      id="home-section"
      className="relative flex justify-center items-center flex-col overflow-x-hidden mx-auto"
    >
      <div className="w-full">
        <NoiseBackground mode="dark" intensity={0.1}>
          <BlogHero />
        </NoiseBackground>
        <NoiseBackground mode="dark" intensity={0.1}>
          <BlogList />
        </NoiseBackground>
      </div>
    </main>
  );
};

export default page;
