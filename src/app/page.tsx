// import About from "@/components/About";
// import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
// import MyProject from "@/components/MyProject";
import NoiseBackground from "@/components/NoiseBackground";
import React from "react";

const Home = () => {
  return (
    <main
      id="home-section"
      className="relative flex justify-center items-center flex-col overflow-x-hidden mx-auto"
    >
      <div className="w-full">
        <NoiseBackground mode="light" intensity={0.1}>
          <Hero />
        </NoiseBackground>
        {/* <NoiseBackground mode="dark" intensity={0.1}>
          <About />
        </NoiseBackground>
        <NoiseBackground mode="light" intensity={0.1}>
          <MyProject />
        </NoiseBackground>
        <NoiseBackground mode="dark" intensity={0.1}>
          <Contact />
        </NoiseBackground> */}
      </div>
    </main>
  );
};

export default Home;
