import NoiseBackground from "@/components/NoiseBackground";
import Link from "next/link";
import { FaArrowLeft, FaTools } from "react-icons/fa";
import React from "react";

export const metadata = {
  title: "Blog — Under Development | HappyDuckCoder",
  description: "Blog is under development. Coming soon.",
};

const page = () => {
  return (
    <main
      id="home-section"
      className="relative flex justify-center items-center min-h-screen overflow-x-hidden mx-auto"
    >
      <Link
        href="/"
        className="fixed top-5 left-5 flex items-center gap-2 px-4 py-2 bg-zinc-700/90 text-gray-200 rounded-full shadow-lg hover:bg-zinc-600 transition z-10"
      >
        <FaArrowLeft className="text-lg" />
        <span className="hidden sm:block">Back to Home</span>
      </Link>

      <NoiseBackground mode="dark" intensity={0.1}>
        <div className="flex flex-col items-center justify-center min-h-screen px-6 py-20 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-zinc-700/80 text-4xl text-amber-400 mb-6">
            <FaTools />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Under Development
          </h1>
          <p className="text-gray-400 text-lg max-w-md">
            This blog is currently under development. Check back soon for
            articles on AI, Computer Vision, and more!
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-zinc-700/90 text-gray-200 rounded-full hover:bg-zinc-600 transition"
          >
            <FaArrowLeft />
            Back to Home
          </Link>
        </div>
      </NoiseBackground>
    </main>
  );
};

export default page;
