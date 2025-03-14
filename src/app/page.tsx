"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import MyProject from "@/components/MyProject";
import NoiseBackground from "@/components/NoiseBackground";
import React, { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

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

      {/* Nút "View My Blog" với hiệu ứng mũi tên */}
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="fixed top-5 right-5 z-50 flex items-center gap-3 px-4 py-2 bg-zinc-700/90 rounded-full shadow-lg"
        >
          <Link href="/blog" aria-label="View My Blog">
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 0.8,
                ease: "easeInOut",
              }}
            >
              <FaArrowRight className="text-gray-200 text-lg" />
            </motion.div>
          </Link>

          <Link
            href="/blog"
            className="text-gray-200 text-lg font-medium hover:underline hidden sm:block"
          >
            View My Blog
          </Link>
        </motion.div>
      )}

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
            <Contact />
          </NoiseBackground>
        </motion.div>
      )}
    </main>
  );
};

export default Home;
