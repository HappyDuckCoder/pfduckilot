"use client";

import React from "react";
import Rocket from "./Rocket";
import Marquee from "./ui/Marquee";
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
        {/* Tiêu đề */}
        <div className="text-left">
          <SplitText
            text="More about me"
            className="text-5xl md:text-6xl font-extrabold"
          />
          <p className="text-gray-400 text-lg mt-4 max-w-2xl">
            I am a passionate Fullstack Developer specializing in modern web
            technologies. With experience in{" "}
            <span className="font-semibold">Next.js, Prisma, MongoDB</span>, I
            focus on building scalable and high-performance applications.
          </p>
          <span className="block mt-4 text-gray-300 text-center">
            <ScrollForMore onClick={handleScrollToProject} />
          </span>
        </div>

        {/* Bố cục chính */}
        <div className="mt-16 flex flex-col md:flex-row items-center gap-12">
          {/* Hình ảnh hoặc Animation */}
          <div className="flex-1 flex justify-end">
            <Rocket />
          </div>
          {/* Nội dung mô tả */}
          <div className="flex-1 text-left text-gray-300 text-lg space-y-10">
            <p>
              I have a strong passion for solving{" "}
              <span className="text-white font-semibold">
                real-world problems
              </span>{" "}
              with technology. My journey started with a deep curiosity about
              how software can create meaningful impact.
            </p>
            <p>
              My expertise spans both{" "}
              <span className="text-white font-semibold">
                frontend and backend development
              </span>
              , allowing me to build applications that are not only visually
              appealing but also performant and scalable.
            </p>
            <p>
              I thrive in dynamic environments, constantly exploring new tools
              and frameworks to enhance development workflows. My goal is to{" "}
              <span className="text-white font-semibold">
                deliver user-friendly solutions
              </span>{" "}
              that provide seamless experiences.
            </p>
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
