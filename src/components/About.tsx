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
            learning <span className="font-semibold">AI & Computer Vision</span>{" "}
            and passionate about building intelligent applications that solve
            real-world problems.
          </p>
          <span className="block mt-4 text-gray-300 text-center">
            <ScrollForMore onClick={handleScrollToProject} />
          </span>
        </div>

        {/* Bố cục chính */}
        <div className="mt-16 flex flex-col md:flex-row items-center gap-12">
          {/* Image / Animation */}
          <div className="flex-1 flex justify-end">
            <Rocket />
          </div>
          {/* Description */}
          <div className="flex-1 text-left text-gray-300 text-lg space-y-10">
            <p>
              I work with{" "}
              <span className="text-white font-semibold">
                React, JavaScript, HTML/CSS
              </span>{" "}
              on the frontend and{" "}
              <span className="font-semibold">
                Node.js, Fastify, ASP.NET, C#
              </span>{" "}
              on the backend to build scalable, modern applications.
            </p>
            <p>
              I use{" "}
              <span className="text-white font-semibold">
                PostgreSQL, MongoDB, MySQL
              </span>{" "}
              for data storage and have experience with{" "}
              <span className="font-semibold">Git, GitHub, Vercel, Docker</span>{" "}
              for DevOps and deployment.
            </p>
            <p>
              My main focus is{" "}
              <span className="text-white font-semibold">
                AI & Computer Vision
              </span>
              —I use{" "}
              <span className="font-semibold">
                Python, OpenCV, TensorFlow, PyTorch
              </span>{" "}
              and enjoy team leadership and project planning. Fun fact: I code
              with a smile!
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
