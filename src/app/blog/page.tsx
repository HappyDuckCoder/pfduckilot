import BlogHero from "@/components/Blog/BlogHero";
import BlogList from "@/components/Blog/BlogList";
import NoiseBackground from "@/components/NoiseBackground";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import React from "react";

export const metadata = {
  title: "Duckilot Blog",
  description: "Duckilot Blog",
};

const page = () => {
  return (
    <main
      id="home-section"
      className="relative flex justify-center items-center flex-col overflow-x-hidden mx-auto"
    >
      {/* Nút quay về trang chủ */}
      <Link
        href="/"
        className="fixed top-5 left-5 flex items-center gap-2 px-4 py-2 bg-zinc-700/90 text-gray-200 rounded-full shadow-lg hover:bg-zinc-600 transition"
      >
        <FaArrowLeft className="text-lg" />
        <span className="hidden sm:block">Back to Home</span>
      </Link>

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
