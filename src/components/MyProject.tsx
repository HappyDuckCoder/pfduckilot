"use client";

import React from "react";
import Project from "./Project";
import SplitText from "./ui/SplitText";
import { projects } from "@/lib/data";

const MyProject = () => {
  const [featured, ...rest] = projects;

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
          <p className="text-gray-500 text-sm uppercase tracking-[0.2em] mb-3">
            Portfolio
          </p>
          <SplitText
            text="Projects"
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-darkColor tracking-tight"
          />
          <p className="mt-4 text-gray-600 text-lg max-w-xl">
            A selection of work — from web apps to AI and games.
          </p>
        </header>

        {/* Featured + grid — Ceremony “New Arrivals” style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          {featured && (
            <div className="md:col-span-2 lg:col-span-2">
              <Project project={featured} featured />
            </div>
          )}
          {rest.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProject;
