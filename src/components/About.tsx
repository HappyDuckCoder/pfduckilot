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
            I am a <span className="font-semibold">Fullstack Developer</span>{" "}
            with a strong focus on{" "}
            <span className="font-semibold">Next.js</span>. I enjoy working with
            modern web technologies to build{" "}
            <span className="font-semibold">scalable and efficient</span>{" "}
            applications.
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
              I have a strong passion for{" "}
              <span className="text-white font-semibold">
                frontend development
              </span>
              , working with libraries such as{" "}
              <span className="font-semibold">
                Radix UI, Tailwind CSS, and Framer Motion
              </span>{" "}
              to create beautiful and intuitive user interfaces.
            </p>
            <p>
              On the backend, I specialize in{" "}
              <span className="text-white font-semibold">
                MongoDB and Firebase
              </span>
              , ensuring efficient and secure data management for modern
              applications.
            </p>
            <p>
              Additionally, I have a deep interest in{" "}
              <span className="text-white font-semibold">
                AI and machine learning
              </span>
              , continuously learning and participating in AI-related projects
              and competitions.
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
