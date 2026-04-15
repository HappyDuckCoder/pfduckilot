"use client";

import React from "react";
import SplitText from "./ui/SplitText";
import ExperienceTimeline from "./ExperienceTimeline";
import ExperienceAwards from "./ExperienceAwards";

const Experience = () => {
  return (
    <section
      id="experience-section"
      className="relative py-28 md:py-36 bg-darkBg text-white overflow-hidden"
    >
      {/* Background */}
      <div className="container relative mx-auto px-6 lg:px-12 ">
        {/* Header */}
        <header className="text-center mb-20 md:mb-24">
          <SplitText
            text="Experience and Awards"
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-lightColor tracking-tight"
          />
          <p className="text-gray-400 text-lg md:text-xl mt-6 max-w-md leading-relaxed">
            Education, work, and recognition along the way.
          </p>
        </header>

        <ExperienceTimeline />

        <ExperienceAwards />
      </div>
    </section>
  );
};

export default Experience;
