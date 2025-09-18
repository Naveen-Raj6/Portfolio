import React, { useState } from "react";
import EducationLoader from "../../components/ui/Sub_Components/EducationLoader";
import {
  Star,
  Award,
  Calendar,
  BookOpen,
  GraduationCap,
  Trophy,
} from "lucide-react";
import { motion } from "framer-motion";

const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const educationData = [
    {
      degree: "Bachelor of Computer Application",
      school: "Sri Aurobindo College",
      mascot: "📗",
      year: "2021-2024",
      achievements: ["CGPA: 7", "Subject: Computer Application"],
      skills: ["Computer Application", "English"],
      description:
        "Developed strong analytical and critical thinking skills through comprehensive study of Computer Application.",
    },
    {
      Certificate: "MERN FULLStack",
      school: "Jspider",
      mascot: "📘",
      year: "2024",
      achievements: ["MERN FULLStack"],
      skills: ["Full Stack Developer", "React", "Node.js", "MongoDB"],
      description: "Certified Full Stack Developer from Jspider.",
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 60, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section 
      className="min-h-screen relative overflow-hidden pt-16 md:pt-40 pb-40 bg-[#04081A]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Enhanced Grid Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <motion.div 
          className="absolute inset-0 bg-grid-white/[0.05] bg-[length:50px_50px]"
          animate={{
            backgroundPosition: ["0px 0px", "50px 50px", "0px 0px"]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04081A] via-transparent to-[#04081A]" />
        <div className="absolute inset-0 border border-white/[0.05] grid grid-cols-2 md:grid-cols-4" />
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-teal-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1.5, 0.5]
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-6"
            whileHover={{ 
              backgroundImage: "linear-gradient(90deg, #14b8a6, #3b82f6, #8b5cf6)",
              transition: { duration: 0.3 }
            }}
          >
            Educational Journey
          </motion.h2>
          <motion.p 
            className="text-gray-300 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Discover how academic excellence shapes innovative thinking and
            professional growth.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative border rounded-xl p-8 transition-all duration-500 bg-gray-900/50 backdrop-blur-sm ${
                hoveredIndex === index
                  ? "border-teal-500 scale-[1.02] shadow-xl shadow-teal-500/20"
                  : "border-blue-400/20"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{edu.mascot}</span>
                    <h3 className="text-2xl font-bold text-white">
                      {edu.degree}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-300 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-teal-500" />
                    {edu.school}
                  </p>
                  <p className="text-gray-400 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {edu.year}
                  </p>
                </div>

                <p className="text-gray-300 text-sm italic border-l-2 border-teal-500 pl-3">
                  {edu.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-yellow-500" />
                    Key Achievements
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 flex items-center gap-2 text-sm"
                      >
                        <Award className="w-4 h-4" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {edu.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EducationSection;