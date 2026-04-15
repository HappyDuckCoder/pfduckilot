"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { FaBriefcase, FaBuilding, FaMapMarkerAlt, FaUniversity } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi2";
import { experienceTimeline } from "@/lib/data";

const iconMap = {
  education: FaUniversity,
  current: FaBuilding,
  previous: FaBriefcase,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const ExperienceTimeline = () => {
  const timelineRef = useRef(null);
  const isTimelineInView = useInView(timelineRef, { once: true, amount: 0.15 });

  return (
    <div className="relative" ref={timelineRef}>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={isTimelineInView ? "visible" : "hidden"}
      >
        {experienceTimeline.map((item) => {
          const Icon = iconMap[item.icon];

          return (
            <motion.div
              key={item.id}
              className="group h-full"
              variants={itemVariants}
            >
              <article
                className="relative h-full overflow-hidden rounded-2xl border border-cyan-200/10 bg-white/[0.02] backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.04] hover:shadow-xl hover:shadow-black/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/[0.04] via-transparent to-transparent pointer-events-none" />

                <div className="relative p-6 h-full flex flex-col transition-opacity duration-300 group-hover:opacity-0">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg border flex items-center justify-center shrink-0 bg-cyan-400/10 border-cyan-300/20 text-cyan-200">
                      <Icon className="text-lg" />
                    </div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-200/80">
                      {item.label}
                    </p>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-xl md:text-2xl font-semibold text-lightColor leading-tight line-clamp-2 min-h-[56px]">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-2 line-clamp-2 min-h-[40px]">
                      {item.subtitle}
                    </p>
                  </div>

                  <div className="mt-4 relative aspect-[16/9] rounded-xl overflow-hidden border border-white/10 bg-white/5">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover opacity-80 group-hover:opacity-95 transition-all duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                  </div>

                  <p className="mt-4 text-sm text-gray-300 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-white/10">
                    <p className="text-xs uppercase tracking-[0.16em] text-cyan-200/80">
                      {item.period}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-3 text-xs text-gray-400">
                      <span className="inline-flex items-center gap-1.5">
                        <FaMapMarkerAlt className="text-cyan-200/80" />
                        {item.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <HiAcademicCap className="text-cyan-200/80" />
                        {item.status}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="h-full rounded-xl border border-cyan-200/20 bg-black/35 backdrop-blur-md p-5 flex flex-col">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-200/80">
                      Contribution
                    </p>
                    <h4 className="mt-2 text-lg font-semibold text-white line-clamp-2">
                      {item.title}
                    </h4>

                    <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-cyan-200/50 to-transparent" />

                    <ul className="mt-4 space-y-3 text-sm text-gray-200">
                      {item.contribution.slice(0, 3).map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-200/90" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default ExperienceTimeline;
