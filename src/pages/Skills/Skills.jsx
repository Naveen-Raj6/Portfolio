import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../../components/ui/Sub_Components/card";
import { Badge } from "../../components/ui/Sub_Components/badge";
import IconCloudDemo from "../../components/ui/Main_Components/globe";
import { Code2, Database, Cpu } from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaBootstrap,
} from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import {
  SiSwagger,
  SiApollographql,
  SiTailwindcss,
  SiMongodb,
  SiVercel,
  SiVite,
  SiExpress,
  SiMui,
  SiJavascript,
  SiMysql,
  SiPostman,
  SiNetlify,
  SiPostgresql,
  SiNextdotjs,
  SiRedux,
} from "react-icons/si";
import { SiRender } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { BsFileEarmarkCode, BsFiletypeXml } from "react-icons/bs";

const SkillCard = ({ icon: Icon, title, skills, color, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{
      duration: 0.6,
      delay: 0.8 + index * 0.1,
      ease: "easeOut",
    }}
    whileHover={{
      y: -10,
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeOut" },
    }}
  >
    <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-500">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)]"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
      <CardContent className="p-6 relative z-10">
        <motion.div
          className="flex items-center gap-4 mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
        >
          <motion.div
            className={`p-3 rounded-xl bg-gray-800/50 ${color}`}
            whileHover={{
              scale: 1.1,
              rotate: 5,
              transition: { duration: 0.3 },
            }}
            animate={{
              boxShadow: [
                "0 0 0px rgba(59, 130, 246, 0)",
                "0 0 20px rgba(59, 130, 246, 0.3)",
                "0 0 0px rgba(59, 130, 246, 0)",
              ],
            }}
            transition={{
              boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <Icon className="w-8 h-8" />
          </motion.div>
          <motion.h3
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
            whileHover={{
              backgroundImage: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
              transition: { duration: 0.3 },
            }}
          >
            {title}
          </motion.h3>
        </motion.div>
        <motion.div
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
        >
          {skills.map((skill, skillIndex) => (
            <motion.div
              key={skillIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                delay: 1.4 + index * 0.1 + skillIndex * 0.05,
              }}
            >
              <Badge
                variant="outline"
                className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  transition: { duration: 0.2 },
                }}
              >
                <motion.span
                  className="transform group-hover/badge:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {skill.icon}
                </motion.span>
                <span className="font-medium">{skill.name}</span>
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      </CardContent>
    </Card>
  </motion.div>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      color: "text-blue-400",
      skills: [
        { name: "HTML", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#E34F26]" /> },
        { name: "CSS", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#1572B6]" /> },
        { name: "JavaScript", icon: <SiJavascript className="w-4 h-4 text-[#F7DF1E]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" /> },
        { name: "Bootstrap", icon: <FaBootstrap className="w-4 h-4 text-[#7952B3]" /> },
        { name: "Material UI", icon: <SiMui className="w-4 h-4 text-[#007ACC]" /> },
        { name: "ReactJS", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
        { name: "Vite", icon: <SiVite className="w-4 h-4 text-[#646CFF]" /> },
        { name: "Redux Toolkit", icon: <SiRedux className="w-4 h-4 text-[#764ABC]" /> },
      ],
    },
    {
      icon: Database,
      title: "Backend Development",
      color: "text-green-400",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="w-4 h-4 text-[#339933]" /> },
        { name: "Express.js", icon: <SiExpress className="w-4 h-4 text-[#ffff]" /> },
        { name: "SQL", icon: <GrMysql className="w-4 h-4 text-[#4479A1]" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-4 h-4 text-[#47A248]" /> },
        { name: "RESTful APIs", icon: <SiSwagger className="w-4 h-4 text-pink-400" /> },
      ],
    },
    {
      icon: Cpu,
      title: "Tools & Tech",
      color: "text-pink-400",
      skills: [
        { name: "VS Code", icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" /> },
        { name: "Git", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
        { name: "GitHub", icon: <FaGithub className="w-4 h-4 text-[#ffff]" /> },
        { name: "Linux", icon: <FaLinux className="w-4 h-4 text-[#FCC624]" /> },
        { name: "Postman", icon: <SiPostman className="w-4 h-4 text-[#FF6C37]" /> },
        { name: "Vercel", icon: <SiVercel className="w-4 h-4 text-white" /> },
        { name: "Render", icon: <SiRender  className="w-4 h-4 text-[#ffff]" /> },
        { name: "Netlify", icon: <SiNetlify  className="w-4 h-4 text-[#14d8d4]" /> },
      ],
    },
  ];

  return (
    <motion.main className="pt-16 md:pt-0 text-white min-h-screen bg-[#04081A] relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Grid Background */}
      <motion.div
        className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2, delay: 0.5 }}
      />

      <section className="container mx-auto px-4 py-11 relative z-10">
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <IconCloudDemo />
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
              index={index}
            />
          ))}
        </motion.div>
      </section>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(100,100,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(100,100,255,0.1) 1px, transparent 1px);
          background-size: 30px 30px;
        }
      `}</style>
    </motion.main>
  );
};

export default SkillsSection;
