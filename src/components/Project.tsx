"use client";

import Link from "next/link";
import React from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  link: string;
}

interface ProjectProps {
  project: Project;
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="p-6 bg-[#3d1a1a44] rounded-xl shadow-lg hover:scale-105 transition-transform">
      {/* Hiển thị ảnh */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover rounded-lg"
      />

      <h3 className="text-2xl font-semibold text-gray-900 mt-4">
        {project.title}
      </h3>
      <p className="text-gray-700 mt-2">{project.description}</p>

      {/* Công nghệ sử dụng */}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.techStack.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-[#751d5b2f] text-gray-900 text-sm rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Link xem project */}
      <Link
        href={project.link}
        className="block mt-4 text-[#751d5b] hover:underline font-medium"
        target="_blank"
      >
        View Project →
      </Link>
    </div>
  );
};

export default Project;
