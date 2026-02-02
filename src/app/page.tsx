"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import MyProject from "@/components/MyProject";
import NoiseBackground from "@/components/NoiseBackground";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const LoadingScreen = dynamic(() => import("@/components/LoadingScreen"), {
  ssr: false,
});

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main
      id="home-section"
      className="relative flex justify-center items-center flex-col overflow-x-hidden mx-auto"
    >
      {/* Màn hình Loading */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isLoading ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className={`fixed inset-0 z-50 bg-black ${
          isLoading ? "flex" : "hidden"
        }`}
      >
        <LoadingScreen />
      </motion.div>

      {/* Blog link hidden — under development */}

      {/* Nội dung chính */}
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full"
        >
          <NoiseBackground mode="light" intensity={0.1}>
            <Hero />
          </NoiseBackground>
          <NoiseBackground mode="dark" intensity={0.1}>
            <About />
          </NoiseBackground>
          <NoiseBackground mode="light" intensity={0.1}>
            <MyProject />
          </NoiseBackground>
          <NoiseBackground mode="dark" intensity={0.1}>
            <Experience />
          </NoiseBackground>
          <NoiseBackground mode="light" intensity={0.1}>
            <Contact />
          </NoiseBackground>
        </motion.div>
      )}
    </main>
  );
};

export default Home;
