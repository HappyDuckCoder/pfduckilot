"use client";

import Link from "next/link";
import Image from "next/image";
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
    <div className="relative bg-[#1a1a1a] rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:ring-2 hover:ring-[#d4af37]">
      {/* Hình ảnh */}
      <div className="w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={500}
          height={280}
          className="object-cover w-full h-[220px] transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Nội dung */}
      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <p className="text-gray-400 text-sm">{project.description}</p>

        {/* Công nghệ sử dụng */}
        <div className="mt-3 flex flex-wrap gap-2">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-[#333] text-gray-300 text-xs rounded-lg"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Nút CTA */}
        <Link
          href={project.link}
          className="mt-4 inline-block text-sm font-semibold px-5 py-2 text-[#d4af37] border border-[#d4af37] rounded-lg hover:bg-[#d4af37] hover:text-black transition-all duration-300"
          target="_blank"
        >
          View Project →
        </Link>
      </div>
    </div>
  );
};

export default Project;
