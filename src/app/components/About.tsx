"use client";

import { motion, Variants } from "motion/react";
import { personalInfo } from "../data/portfolioData";

const stats = [
  { label: "Projects Completed", value: "15+" },
  { label: "Years Learning", value: "2+" },
  { label: "Technologies", value: "15+" },
];

export default function About() {
  // Split bio text into individual words for word-by-word animation
  const bioWords = personalInfo.bio.split(" ");


  // Parent container variant to stagger word animations
  const textContainerVariants: Variants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Individual word variant


  // Container variant for staggering stats cards
  const statsContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  // Spring animation for stats cards
  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.5, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        // stiffness: 260,
        // damping: 20,
        bounce: 0.4,
        delay: 0.1
      },
    },
  };

  return (
    <section
      id="about"
      className=" py-20 border-t border-slate-800/60 flex items-center justify-center"
    >
      <div className="mx-auto max-w-6xl px-6 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl text-center font-extrabold tracking-tight text-slate-100 sm:text-4xl">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="mt-2 h-1 w-50 rounded bg-cyan-600 mx-auto"></div>
        </motion.div>

        <div className="mt-10 grid gap-12 lg:grid-cols-3 items-start">
          {/* Main Story - Word-by-Word Animation */}
          <div className="lg:col-span-3 space-y-6 text-slate-400  text-base leading-relaxed">
            {/* Bio Paragraph */}
            <motion.p
              variants={textContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              className="flex flex-wrap gap-x-1.5"
            >
              {/* {bioWords.map((word, idx) => (
                <motion.span key={idx} variants={wordVariants} className="inline-block ">
                  {word}
                </motion.span>
              ))} */}
              {personalInfo.bio}
            </motion.p>

          </div>

          {/* Stats Cards Section */}
          <motion.div
            variants={statsContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="flex  gap-4 col-span-3"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="flex-1 rounded-xl   p-5 text-center backdrop-blur-sm  transition-colors shadow-lg shadow-cyan-600/20"
              >
                <div className="text-3xl font-black text-cyan-400">{stat.value}</div>
                <div className="mt-1 text-sm font-medium text-slate-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}