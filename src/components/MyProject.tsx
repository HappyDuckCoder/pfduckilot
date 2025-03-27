"use client";

import React from "react";
import Project from "./Project";
import SplitText from "./ui/SplitText";
import { projects } from "@/lib/data";

const MyProject = () => {
  return (
    <section id="project-section" className="py-20 bg-darkBg text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <SplitText
          text="Projects"
          className="text-5xl md:text-6xl font-extrabold text-darkColor"
        />
        <div className="mt-10 grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProject;
