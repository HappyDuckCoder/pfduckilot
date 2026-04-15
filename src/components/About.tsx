"use client";

import React from "react";
import dynamic from "next/dynamic";
import Marquee from "./ui/Marquee";

const Rocket = dynamic(() => import("./Rocket"), { ssr: false });
import SplitText from "./ui/SplitText";
import ScrollForMore from "./ScrollForMore";

const About = () => {
  const handleScrollToProject = () => {
    const aboutSection = document.getElementById("project-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about-section" className="py-24 bg-darkBg text-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        {/* Title */}
        <div className="text-left">
          <SplitText
            text="More about me"
            className="text-5xl md:text-6xl font-extrabold"
          />
          <p className="text-gray-400 text-lg mt-4 max-w-2xl">
            I am an <span className="font-semibold">AI Engineer</span>,{" "}
            <span className="font-semibold">Full-Stack Developer</span>, and{" "}
            <span className="font-semibold">Tech Lead</span>. I&apos;m currently
            a third-year student at{" "}
            <span className="font-semibold">
              the University of Science, HCMUS
            </span>{" "}
            and specializing in{" "}
            <span className="font-semibold">Computer Vision</span>. I am
            passionate about building intelligent applications that solve
            real-world problems.
          </p>
        </div>

        {/* Bố cục chính */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image / Animation */}
          <div className="flex-1 flex justify-end">
            <Rocket />
          </div>
          {/* Description */}
          <div className="flex-1 text-left text-gray-300 text-lg space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 rounded-full bg-slate-700/60 text-slate-100 text-sm font-medium">
                  React
                </span>
                <span className="px-3 py-1 rounded-full bg-sky-700/50 text-sky-100 text-sm font-medium">
                  JavaScript
                </span>
                <span className="px-3 py-1 rounded-full bg-indigo-700/50 text-indigo-100 text-sm font-medium">
                  HTML/CSS
                </span>
                <span className="px-3 py-1 rounded-full bg-cyan-700/50 text-cyan-100 text-sm font-medium">
                  Node.js
                </span>
                <span className="px-3 py-1 rounded-full bg-teal-700/50 text-teal-100 text-sm font-medium">
                  Fastify
                </span>
                <span className="px-3 py-1 rounded-full bg-violet-700/50 text-violet-100 text-sm font-medium">
                  ASP.NET
                </span>
                <span className="px-3 py-1 rounded-full bg-purple-700/50 text-purple-100 text-sm font-medium">
                  C#
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-700/50 text-emerald-100 text-sm font-medium">
                  PostgreSQL
                </span>
                <span className="px-3 py-1 rounded-full bg-green-700/50 text-green-100 text-sm font-medium">
                  MongoDB
                </span>
                <span className="px-3 py-1 rounded-full bg-lime-700/50 text-lime-100 text-sm font-medium">
                  MySQL
                </span>
                <span className="px-3 py-1 rounded-full bg-rose-700/50 text-rose-100 text-sm font-medium">
                  Git & GitHub
                </span>
                <span className="px-3 py-1 rounded-full bg-amber-700/50 text-amber-100 text-sm font-medium">
                  Docker
                </span>
                <span className="px-3 py-1 rounded-full bg-orange-700/50 text-orange-100 text-sm font-medium">
                  Vercel
                </span>
                <span className="px-3 py-1 rounded-full bg-fuchsia-700/50 text-fuchsia-100 text-sm font-medium">
                  Python
                </span>
                <span className="px-3 py-1 rounded-full bg-blue-700/50 text-blue-100 text-sm font-medium">
                  OpenCV
                </span>
                <span className="px-3 py-1 rounded-full bg-pink-700/50 text-pink-100 text-sm font-medium">
                  TensorFlow
                </span>
                <span className="px-3 py-1 rounded-full bg-red-700/50 text-red-100 text-sm font-medium">
                  PyTorch
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 rounded-full bg-slate-700/60 text-slate-100 text-sm font-medium">
                  Team Leadership
                </span>
                <span className="px-3 py-1 rounded-full bg-blue-700/50 text-blue-100 text-sm font-medium">
                  Project Planning
                </span>
                <span className="px-3 py-1 rounded-full bg-indigo-700/50 text-indigo-100 text-sm font-medium">
                  Problem Solving
                </span>
                <span className="px-3 py-1 rounded-full bg-violet-700/50 text-violet-100 text-sm font-medium">
                  Communication
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-700/50 text-emerald-100 text-sm font-medium">
                  Collaboration
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* My Tech Stack */}
        <div className="mt-10 flex flex-col items-center">
          <h1 className="text-center">
            <SplitText
              text="My Tech Stack"
              className="text-5xl font-extrabold md:text-6xl"
            />
          </h1>
          <Marquee />
        </div>
      </div>
    </section>
  );
};

export default About;
