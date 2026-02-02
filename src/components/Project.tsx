"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

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
  featured?: boolean;
}

const FALLBACK_IMAGE_BASE = "https://picsum.photos/seed";

const Project: React.FC<ProjectProps> = ({ project, featured }) => {
  const [imgSrc, setImgSrc] = useState(project.image);
  const fallbackUrl = `${FALLBACK_IMAGE_BASE}/${project.id}/800/600`;

  const handleImageError = () => {
    setImgSrc(fallbackUrl);
  };

  return (
    <Link
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full"
    >
      <article className="h-full flex flex-col rounded-2xl overflow-hidden bg-white/90 backdrop-blur-sm border border-gray-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_6px_16px_rgba(0,0,0,0.06)] transition-all duration-500 ease-out hover:shadow-[0_4px_12px_rgba(0,0,0,0.06),0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:border-gray-300/80">
        {/* Image */}
        <div
          className={`relative w-full overflow-hidden ${
            featured ? "aspect-[16/9]" : "aspect-[4/3]"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-50" />
          <Image
            src={imgSrc}
            alt={project.title}
            fill
            sizes={
              featured
                ? "(max-width: 768px) 100vw, 66vw"
                : "(max-width: 768px) 100vw, 33vw"
            }
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            onError={handleImageError}
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"
            aria-hidden
          />
          {/* Subtle shine on hover */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out"
            aria-hidden
          />
        </div>

        {/* Content */}
        <div className="p-5 md:p-6 flex flex-col flex-1 min-h-0">
          {/* Tech pills */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.techStack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium uppercase tracking-wider text-gray-500 bg-gray-100/90 border border-gray-200/60"
              >
                {tech}
              </span>
            ))}
          </div>

          <h3 className="text-lg md:text-xl font-semibold text-darkColor tracking-tight mb-2 line-clamp-1 group-hover:text-darkColor/90">
            {project.title}
          </h3>
          <p className="text-gray-600 text-sm leading-[1.6] line-clamp-2 flex-1">
            {project.description}
          </p>

          {/* CTA */}
          <div className="mt-5 pt-4 border-t border-gray-100">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 group-hover:text-darkColor transition-colors duration-200">
              View on GitHub
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gray-100 group-hover:bg-darkColor group-hover:text-white text-gray-400 transition-all duration-300 text-xs">
                →
              </span>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default Project;
