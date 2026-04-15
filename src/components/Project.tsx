"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { ProjectItem } from "@/lib/data";

interface ProjectProps {
  project: ProjectItem;
}

const FALLBACK_IMAGE_BASE = "https://picsum.photos/seed";

const Project: React.FC<ProjectProps> = ({ project }) => {
  const [imgSrc, setImgSrc] = useState(project.image);
  const fallbackUrl = `${FALLBACK_IMAGE_BASE}/${project.id}/80/80`;
  const chipColors = [
    "border-cyan-300/35 bg-cyan-400/20 text-cyan-100",
    "border-violet-300/35 bg-violet-400/20 text-violet-100",
    "border-emerald-300/35 bg-emerald-400/20 text-emerald-100",
  ];

  const handleImageError = () => {
    setImgSrc(fallbackUrl);
  };

  return (
    <Link href={`/project/${project.id}`} className="group block h-full">
      <article className="relative h-[280px] [perspective:1200px]">
        <div className="relative h-full w-full transition-transform duration-700 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0 overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-[0_8px_24px_rgba(2,6,23,0.35)] [backface-visibility:hidden]">
            <Image
              src={imgSrc}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover brightness-[0.5] saturate-[0.9] transition-transform duration-500 ease-out group-hover:scale-105"
              onError={handleImageError}
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/40 to-black/88" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(255,255,255,0.2),transparent_35%)] opacity-80" />

            <div className="absolute top-4 right-4 flex flex-wrap justify-end gap-1.5">
              {project.techStack.slice(0, 2).map((tech, index) => (
                <span
                  key={tech}
                  className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-medium tracking-wide backdrop-blur-sm ${chipColors[index % chipColors.length]}`}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3 className="text-2xl font-bold tracking-tight text-white drop-shadow-sm line-clamp-1">
                {project.title}
              </h3>
              <p className="mt-2 text-lg leading-snug text-white/90 line-clamp-2">
                {project.description}
              </p>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/75 to-transparent" />
              <div className="mt-3 pt-3 flex justify-end">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 group-hover:text-white transition-colors duration-200">
                  View Detail Project
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-white/20 text-white transition-all duration-300 group-hover:bg-white group-hover:text-slate-900">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-[0_12px_32px_rgba(2,6,23,0.45)] [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-black" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_12%,rgba(34,211,238,0.2),transparent_35%)]" />

            <div className="relative z-10 h-full p-5 flex flex-col">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/90">
                Key Features
              </p>
              <h3 className="mt-2 text-xl font-bold text-white line-clamp-1">
                {project.title}
              </h3>

              <ul className="mt-4 space-y-2 text-sm text-slate-200 flex-1">
                {project.keyFeatures.slice(0, 4).map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                    <span className="line-clamp-1">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/70 to-transparent" />
              <div className="mt-3 pt-3 flex justify-end">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-white/85">
                  View Detail Project
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-white/20 text-white transition-all duration-300 group-hover:bg-white group-hover:text-slate-900">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default Project;
