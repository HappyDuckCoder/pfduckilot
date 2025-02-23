"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import MyProject from "@/components/MyProject";
import NoiseBackground from "@/components/NoiseBackground";
import React, { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import { motion } from "framer-motion";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Tăng thời gian chút để loading animation mượt hơn

    return () => clearTimeout(timer);
  }, []);

  return (
    <main
      id="home-section"
      className="relative flex justify-center items-center flex-col overflow-x-hidden mx-auto"
    >
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
            <Contact />
          </NoiseBackground>
        </motion.div>
      )}
    </main>
  );
};

export default Home;
