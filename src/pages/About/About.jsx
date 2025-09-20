import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      id="about"
      className="py-16 md:py-32 text-white bg-[#04081A] relative overflow-hidden"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Floating Blur Effects */}
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Content */}
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 relative z-10">
        {/* Heading */}
        <motion.h2
          className="max-w-xl text-4xl lg:text-5xl font-medium text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Developer, Full-Stack Enthusiast
        </motion.h2>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24 items-stretch">
          {/* Portrait Image */}
          <motion.div
            className="relative flex"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/hero.png"
                alt="Naveen Raj S"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            className="space-y-4 flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <p className="text-white text-base sm:text-lg">
              Hello! I'm <span className="font-bold">Naveen Raj S</span>, a
              passionate JavaScript developer creating innovative web solutions
              and user-friendly interfaces. I love learning new technologies and
              building full-stack applications.
            </p>

            <p className="text-white text-base sm:text-lg">
              My goal is to make web development faster, easier, and accessible
              to all developers. I'm continuously expanding my backend skills to
              grow as a complete full-stack developer.
            </p>

            <blockquote className="border-l-4 border-gray-300 pl-4 pt-4 text-white">
              <p>
                I'm a lifelong learner, driven to contribute to the developer
                community with ideas and tools that deliver real value.
              </p>
              <cite className="block mt-4 font-medium">
                Naveen Raj S, Full-Stack Enthusiast
              </cite>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
