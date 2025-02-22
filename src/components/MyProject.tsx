import React from "react";
import Project from "./Project";
import SplitText from "./ui/SplitText";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "An online store with Next.js, Tailwind, and Stripe payment integration.",
    techStack: ["Next.js", "Tailwind", "MongoDB", "Stripe"],
    image: "public/projects/project2.5.png",
    link: "#",
  },
  {
    id: 2,
    title: "AI Chatbot",
    description: "An AI-powered chatbot using OpenAI API for smart responses.",
    techStack: ["React", "OpenAI API", "Node.js"],
    image: "public/projects/project2.5.png",
    link: "#",
  },
  {
    id: 3,
    title: "Social Media App",
    description:
      "A fullstack social media platform with real-time chat and notifications.",
    techStack: ["Next.js", "Prisma", "Socket.io"],
    image: "public/projects/project2.5.png",
    link: "#",
  },
  {
    id: 4,
    title: "Finance Tracker",
    description: "A personal finance tracking app with data visualization.",
    techStack: ["React", "D3.js", "Firebase"],
    image: "public/projects/project2.5.png",
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
