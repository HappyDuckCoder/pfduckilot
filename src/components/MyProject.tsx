"use client";

import React from "react";
import Project from "./Project";
import SplitText from "./ui/SplitText";
import { projects } from "@/lib/data";

const MyProject = () => {
  const projectOrder = [
    "Video Summarization (BiLSTM Multimodal)",
    "AI-Holyann (Holyann Explore)",
    "IOTFRIDGE",
    "TourismTogether Frontend",
    "TourismTogether Backend",
    "AIRushHour (RushRelic)",
  ];

  const visibleProjects = [...projects]
    .sort((a, b) => {
      const aIndex = projectOrder.indexOf(a.title);
      const bIndex = projectOrder.indexOf(b.title);

      const normalizedAIndex = aIndex === -1 ? Number.MAX_SAFE_INTEGER : aIndex;
      const normalizedBIndex = bIndex === -1 ? Number.MAX_SAFE_INTEGER : bIndex;

      if (normalizedAIndex !== normalizedBIndex) {
        return normalizedAIndex - normalizedBIndex;
      }

      return a.id - b.id;
    })
    .slice(0, 6);

  return (
    <section
      id="project-section"
      className="relative py-24 md:py-32 bg-lightColor text-darkColor overflow-hidden"
    >
      {/* Subtle grid — light section: dark lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(19,19,19,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(19,19,19,0.12) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container relative z-10 mx-auto px-6 lg:px-12 max-w-vw">
        <header className="mb-14 md:mb-16">
          <SplitText
            text="Projects"
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-darkColor tracking-tight"
          />
          <p className="mt-4 text-gray-600 text-lg max-w-xl">
            A selection of works — from web apps to AI and games.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {visibleProjects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProject;
