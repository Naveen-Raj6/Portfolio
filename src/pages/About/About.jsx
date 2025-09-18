import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 relative z-10">
        <motion.h2 
          className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Developer, Designer, Mern Stack Enthusiast
        </motion.h2>
        
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <motion.div 
            className="relative mb-6 sm:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <motion.div 
              className="bg-gradient-to-b aspect-[76/59] relative rounded-2xl p-px from-zinc-300 to-transparent"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-[15px] shadow-lg flex items-center justify-center">
                <motion.div 
                  className="text-center text-white"
                  animate={{
                    y: [0, -10, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <motion.div 
                    className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </motion.div>
                  <p className="text-sm font-medium">Your Photo</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative space-y-4"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <motion.p 
              className="text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            >
              Hello! I'm Naveen Raj S, a passionate JavaScript developer
              specializing in creating innovative web solutions and
              user-friendly interfaces.{" "}
              <motion.span 
                className="font-bold text-white"
                whileHover={{ color: "#3b82f6" }}
                transition={{ duration: 0.3 }}
              >
                As the Mern Stack Enthusiast
              </motion.span>
              , I'm dedicated to simplifying development workflows.
            </motion.p>
            
            <motion.p 
              className="text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
            >
              My focus is on making web development faster, easier, and
              accessible to all developers. Currently, I'm expanding into
              backend development to grow as a full-stack developer and create
              seamless, robust web applications.
            </motion.p>

            <motion.div 
              className="pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
            >
              <motion.blockquote 
                className="border-l-4 border-gray-300 pl-4"
                whileHover={{ borderLeftColor: "#3b82f6" }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-white">
                  I'm a lifelong learner and Mern Stack Enthusiast driven by a desire to
                  contribute to the developer community with new ideas and
                  tools that deliver real value. As the Mern Stack Enthusiast,
                  I'm pushing the boundaries of JavaScript frameworks to
                  empower developers worldwide.
                </p>

                <motion.div 
                  className="mt-6 space-y-3"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
                >
                  <cite className="block font-medium text-white">
                    Naveen Raj S, Mern Stack Enthusiast
                  </cite>
                  <motion.div 
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div 
                      className="h-5 w-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded flex items-center justify-center"
                      animate={{
                        background: [
                          "linear-gradient(90deg, #3b82f6, #8b5cf6)",
                          "linear-gradient(90deg, #8b5cf6, #3b82f6)",
                          "linear-gradient(90deg, #3b82f6, #8b5cf6)"
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <span className="text-white text-xs font-bold">O</span>
                    </motion.div>
                    <span className="text-white">Mern Stack</span>
                  </motion.div>
                </motion.div>
              </motion.blockquote>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}