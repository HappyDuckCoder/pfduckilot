"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SplitText from "./ui/SplitText";
import {
  FaUniversity,
  FaBuilding,
  FaBriefcase,
  FaTrophy,
} from "react-icons/fa";

const experiences = [
  {
    icon: FaUniversity,
    label: "Education",
    title: "HCMUS",
    subtitle: "University of Science, VNU-HCM",
    description: "Currently studying",
    period: "Present",
    color: "amber",
    imageSeed: 10,
  },
  {
    icon: FaBuilding,
    label: "Current",
    title: "OptimAI",
    subtitle: "AI / Tech",
    description: "Currently working",
    period: "Present",
    color: "emerald",
    imageSeed: 20,
  },
  {
    icon: FaBriefcase,
    label: "Previous",
    title: "Asoft",
    subtitle: "Software company",
    description: "Previously worked",
    period: "Past",
    color: "violet",
    imageSeed: 30,
  },
];

const awards = [
  { rank: 1, title: "AI Innovation", org: "HCMUS" },
  { rank: 6, title: "SoictAI", org: "HCMUS" },
];

const colorMap = {
  amber: {
    dot: "bg-amber-400",
    glow: "shadow-amber-500/20",
    bar: "bg-gradient-to-b from-amber-500/40 to-amber-600/20",
    iconBg: "bg-amber-500/10 border-amber-400/20 text-amber-400",
    gradient: "from-amber-500/20 via-amber-600/5 to-transparent",
    ring: "group-hover:ring-amber-400/20",
  },
  emerald: {
    dot: "bg-emerald-400",
    glow: "shadow-emerald-500/20",
    bar: "bg-gradient-to-b from-emerald-500/40 to-emerald-600/20",
    iconBg: "bg-emerald-500/10 border-emerald-400/20 text-emerald-400",
    gradient: "from-emerald-500/20 via-emerald-600/5 to-transparent",
    ring: "group-hover:ring-emerald-400/20",
  },
  violet: {
    dot: "bg-violet-400",
    glow: "shadow-violet-500/20",
    bar: "bg-gradient-to-b from-violet-500/40 to-violet-600/20",
    iconBg: "bg-violet-500/10 border-violet-400/20 text-violet-400",
    gradient: "from-violet-500/20 via-violet-600/5 to-transparent",
    ring: "group-hover:ring-violet-400/20",
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

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

const Experience = () => {
  const timelineRef = useRef(null);
  const awardsRef = useRef(null);
  const isTimelineInView = useInView(timelineRef, { once: true, amount: 0.15 });
  const isAwardsInView = useInView(awardsRef, { once: true, amount: 0.2 });

  return (
    <section
      id="experience-section"
      className="relative py-28 md:py-36 bg-darkBg text-white overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 20%, rgba(255,255,255,0.15) 0%, transparent 40%), radial-gradient(circle at 70% 80%, rgba(255,255,255,0.08) 0%, transparent 40%)`,
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
        aria-hidden
      />

      <div className="container relative mx-auto px-6 lg:px-12 max-w-5xl">
        {/* Header */}
        <header className="text-center mb-20 md:mb-24">
          <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-4">
            Journey
          </p>
          <SplitText
            text="Experience"
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-lightColor tracking-tight"
          />
          <p className="text-gray-400 text-lg md:text-xl mt-6 max-w-md mx-auto leading-relaxed">
            Education, work, and recognition along the way.
          </p>
        </header>

        {/* Experience timeline */}
        <div className="relative" ref={timelineRef}>
          <div className="absolute left-[19px] md:left-[23px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-white/15 via-white/5 to-transparent" />

          <motion.div
            className="space-y-6 md:space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={isTimelineInView ? "visible" : "hidden"}
          >
            {experiences.map((item, index) => {
              const Icon = item.icon;
              const colors = colorMap[item.color as keyof typeof colorMap];
              const imageUrl = `https://picsum.photos/seed/${item.imageSeed}/400/240`;
              return (
                <motion.div
                  key={index}
                  className="relative pl-16 md:pl-20 group"
                  variants={itemVariants}
                >
                  {/* Timeline node */}
                  <motion.div
                    className={`absolute left-0 top-7 w-[10px] h-[10px] rounded-full ${colors.dot} ring-4 ring-darkBg shadow-lg ${colors.glow} -translate-x-1/2`}
                    initial={{ scale: 0 }}
                    animate={isTimelineInView ? { scale: 1 } : { scale: 0 }}
                    transition={{
                      delay: index * 0.12 + 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                  />
                  {/* Accent bar */}
                  <div
                    className={`absolute left-[38px] md:left-[42px] top-6 bottom-6 w-0.5 rounded-full ${colors.bar} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    aria-hidden
                  />

                  <article
                    className={`relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.04] hover:shadow-xl hover:shadow-black/20 ${colors.ring} hover:ring-4`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
                    <div className="relative flex flex-col lg:flex-row gap-0">
                      {/* Content */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-5 p-6 md:p-8 flex-1 min-w-0">
                        <div
                          className={`flex-shrink-0 w-16 h-16 rounded-2xl border flex items-center justify-center ${colors.iconBg} transition-transform duration-300 group-hover:scale-105`}
                        >
                          <Icon className="text-2xl md:text-3xl" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] uppercase tracking-[0.22em] text-gray-500 mb-2">
                            {item.label}
                          </p>
                          <h3 className="text-xl md:text-2xl font-bold text-lightColor tracking-tight">
                            {item.title}
                          </h3>
                          <p className="text-gray-400 text-sm md:text-base mt-1">
                            {item.subtitle}
                          </p>
                          <p className="text-gray-500 text-sm mt-2 italic">
                            {item.description}
                          </p>
                        </div>
                        <div className="flex-shrink-0 sm:self-center">
                          <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-gray-400 bg-white/[0.06] border border-white/[0.06]">
                            {item.period}
                          </span>
                        </div>
                      </div>
                      {/* Visual / Image area */}
                      <div className="relative w-full lg:w-56 flex-shrink-0 overflow-hidden rounded-r-2xl lg:rounded-l-none border-t lg:border-t-0 lg:border-l border-white/[0.06]">
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-80`}
                          aria-hidden
                        />
                        <div className="relative aspect-video lg:aspect-auto lg:h-full min-h-[140px] flex items-center justify-center p-4">
                          <motion.div
                            className="relative w-full h-full rounded-xl overflow-hidden bg-white/5"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={imageUrl}
                              alt=""
                              className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500"
                            />
                          </motion.div>
                          <motion.div
                            className={`absolute bottom-3 right-3 w-10 h-10 rounded-xl border flex items-center justify-center ${colors.iconBg} backdrop-blur-sm`}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={
                              isTimelineInView ? { scale: 1, opacity: 1 } : {}
                            }
                            transition={{ delay: index * 0.12 + 0.25 }}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            <Icon className="text-lg" />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </article>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Awards */}
        <div className="mt-24 md:mt-32" ref={awardsRef}>
          <motion.div
            className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isAwardsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-400/20">
              <FaTrophy className="text-2xl text-amber-400" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-lightColor tracking-tight">
                Awards
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                Competitions & recognition
              </p>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6"
            variants={awardsContainerVariants}
            initial="hidden"
            animate={isAwardsInView ? "visible" : "hidden"}
          >
            {awards.map((award, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-amber-500/5 via-white/[0.02] to-transparent hover:border-amber-400/20 hover:from-amber-500/10 transition-all duration-500"
                variants={itemVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-400/5 rounded-bl-full" />
                <div className="relative flex items-center gap-5 p-6 md:p-7">
                  <motion.div
                    className="flex-shrink-0 w-16 h-16 rounded-2xl bg-amber-500/15 border border-amber-400/25 flex flex-col items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-amber-400/80">
                      Top
                    </span>
                    <span className="text-2xl font-bold text-amber-400 leading-none">
                      {award.rank}
                    </span>
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-lightColor">
                      {award.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-0.5">{award.org}</p>
                  </div>
                  <motion.div
                    whileHover={{ rotate: [0, -8, 8, 0] }}
                    transition={{ duration: 0.35 }}
                  >
                    <FaTrophy className="flex-shrink-0 w-6 h-6 text-amber-400/40 group-hover:text-amber-400/70 transition-colors" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
