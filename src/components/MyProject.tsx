"use client";

import React from "react";
import Project from "./Project";
import SplitText from "./ui/SplitText";

const projects = [
  {
    id: 1,
    title: "Patient Management System",
    description:
      "A web application for managing patient records, scheduling appointments, and handling payments seamlessly using Stripe integration.",
    techStack: ["Next.js", "MongoDB", "Clerk"],
    image: "Image/p1.png",
    link: "https://patient-git-main-happyduckcoders-projects.vercel.app/",
  },
  {
    id: 2,
    title: "8/3 Celebration Project",
    description:
      "A fun project that generates personalized messages and images using OpenAI API to celebrate International Women's Day on March 8th.",
    techStack: ["Motion-framer", "Groq API", "Liveblocks"],
    image: "Image/p2.png",
    link: "https://83test-git-featrealtime-happyduckcoders-projects.vercel.app/",
  },
  {
    id: 3,
    title: "Searching Web Application",
    description:
      "A powerful web application that allows users to search for real-time information efficiently. Features include advanced filtering, instant search results, and optimized performance for large datasets.",
    techStack: ["Taivily", "Duckduckgo", "API service", "Google API"],
    image: "Image/p3.png",
    link: "https://searching-git-main-happyduckcoders-projects.vercel.app/",
  },
  {
    id: 4,
    title: "AI Surveillance - Detect Child Abuse",
    description:
      "An AI-powered surveillance system that detects abusive behavior towards children using computer vision and real-time Firebase notifications.",
    techStack: ["LSTM", "OpenCV", "Firebase", "React-native", "Expo-go"],
    image: "Image/p4.jpg",
    link: "#",
  },
];

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
