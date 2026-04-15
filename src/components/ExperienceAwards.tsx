"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { FaTrophy } from "react-icons/fa";
import { experienceAwards } from "@/lib/data";

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const awardsContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const ExperienceAwards = () => {
  const awardsRef = useRef(null);
  const isAwardsInView = useInView(awardsRef, { once: true, amount: 0.2 });

  return (
    <div className="mt-24 md:mt-32" ref={awardsRef}>
      <motion.div
        className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={isAwardsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-400/20">
          <FaTrophy className="text-2xl text-cyan-300" />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-lightColor tracking-tight">
            Awards
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Competitions, achievements and impact
          </p>
        </div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6"
        variants={awardsContainerVariants}
        initial="hidden"
        animate={isAwardsInView ? "visible" : "hidden"}
      >
        {experienceAwards.map((award) => (
          <motion.article
            key={award.id}
            className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-cyan-500/5 via-white/[0.02] to-transparent hover:border-cyan-400/20 transition-all duration-500"
            variants={itemVariants}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative flex flex-col md:flex-row min-h-[260px]">
              <div className="relative w-full md:w-44 shrink-0">
                <div className="relative h-44 md:h-full">
                  <Image
                    src={award.image}
                    alt={award.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 176px"
                    className="object-cover opacity-80 group-hover:opacity-95 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/45 via-black/20 to-transparent" />
                </div>
                <div className="absolute left-3 top-3 inline-flex items-center rounded-full border border-cyan-300/25 bg-cyan-500/15 px-3 py-1 text-[11px] font-semibold text-cyan-100">
                  Top {award.rank}
                </div>
              </div>

              <div className="flex-1 p-5 md:p-6">
                <p className="text-[10px] uppercase tracking-[0.18em] text-cyan-300/80">
                  {award.category} - {award.year}
                </p>
                <h3 className="mt-2 text-lg md:text-xl font-bold text-lightColor">
                  {award.title}
                </h3>
                <p className="text-sm text-gray-400 mt-1">{award.org}</p>
                <p className="text-sm text-cyan-200/85 mt-2">{award.role}</p>

                <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                <p className="mt-4 text-sm text-gray-300 leading-relaxed">
                  {award.summary}
                </p>
                <p className="mt-3 text-sm text-gray-400">
                  <span className="text-cyan-200/90 font-medium">Achievement:</span>{" "}
                  {award.achievement}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
};

export default ExperienceAwards;
