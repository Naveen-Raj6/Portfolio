// // import React, { useState, useEffect, useRef } from "react";
// // import { motion, useInView, useScroll, useTransform, useAnimation } from "framer-motion";
// // import { Code2, Activity, Cpu, Layers, Network, Binary, ArrowRight, Star, Zap, Target } from "lucide-react";

// const ExperienceCard = ({
//   title,
//   company,
//   period,
//   description,
//   achievements,
//   skills,
//   icon: Icon,
//   index,
//   isInView,
//   isActive,
//   onHover,
//   onLeave,
// }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const cardRef = useRef(null);

//   const handleMouseMove = (e) => {
//     if (cardRef.current) {
//       const rect = cardRef.current.getBoundingClientRect();
//       setMousePosition({
//         x: e.clientX - rect.left,
//         y: e.clientY - rect.top,
//       });
//     }
//   };

//   return (
//     <motion.div
//       ref={cardRef}
//       className="group relative overflow-hidden"
//       initial={{ opacity: 0, y: 100, scale: 0.8 }}
//       animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 100, scale: 0.8 }}
//       transition={{ 
//         duration: 0.8, 
//         delay: index * 0.2,
//         ease: "easeOut"
//       }}
//       whileHover={{ 
//         y: -20, 
//         scale: 1.05,
//         transition: { duration: 0.3, ease: "easeOut" }
//       }}
//       onMouseMove={handleMouseMove}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Animated background gradient */}
//       <motion.div 
//         className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-500/20 rounded-2xl"
//         animate={{
//           background: isHovered 
//             ? "linear-gradient(135deg, rgba(6, 182, 212, 0.3), rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.3))"
//             : "linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.1))"
//         }}
//         transition={{ duration: 0.5 }}
//       />

//       {/* Floating particles */}
//       {[...Array(8)].map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute w-1 h-1 bg-cyan-400/60 rounded-full"
//           style={{
//             left: `${20 + (i * 10)}%`,
//             top: `${30 + (i * 8)}%`,
//           }}
//           animate={{
//             y: [0, -20, 0],
//             opacity: [0.3, 1, 0.3],
//             scale: [0.5, 1.5, 0.5]
//           }}
//           transition={{
//             duration: 3 + i * 0.5,
//             repeat: Infinity,
//             delay: i * 0.3,
//             ease: "easeInOut"
//           }}
//         />
//       ))}

//       {/* Interactive glow effect */}
//       <motion.div
//         className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
//         style={{
//           background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(6, 182, 212, 0.15), transparent 40%)`
//         }}
//         transition={{ duration: 0.1 }}
//       />

//       {/* Animated border */}
//       <motion.div
//         className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100"
//         animate={{
//           background: [
//             "linear-gradient(45deg, #06b6d4, #3b82f6, #8b5cf6)",
//             "linear-gradient(45deg, #8b5cf6, #06b6d4, #3b82f6)",
//             "linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4)",
//             "linear-gradient(45deg, #06b6d4, #3b82f6, #8b5cf6)"
//           ]
//         }}
//         transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//       />

//       <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 h-full border border-gray-700/50 shadow-2xl">
//         {/* Animated icon section */}
//         <motion.div 
//           className="relative mb-8"
//           animate={{
//             rotate: isHovered ? [0, 5, -5, 0] : 0,
//             scale: isHovered ? 1.1 : 1
//           }}
//           transition={{ duration: 0.5 }}
//         >
//           {/* Icon background with pulsing effect */}
//           <motion.div
//             className="absolute -inset-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-20"
//             animate={{
//               scale: [1, 1.2, 1],
//               opacity: [0.2, 0.4, 0.2]
//             }}
//             transition={{
//               duration: 2,
//               repeat: Infinity,
//               ease: "easeInOut"
//             }}
//           />
          
//           {/* Icon with rotation */}
//           <motion.div
//             className="relative z-10 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg"
//             whileHover={{ rotate: 360 }}
//             transition={{ duration: 0.6, ease: "easeInOut" }}
//           >
//             <Icon className="w-8 h-8 text-white" />
//           </motion.div>

//           {/* Floating elements around icon */}
//           <motion.div
//             className="absolute -top-2 -right-2 w-4 h-4 bg-purple-400 rounded-full"
//             animate={{
//               y: [0, -10, 0],
//               opacity: [0.5, 1, 0.5]
//             }}
//             transition={{
//               duration: 2,
//               repeat: Infinity,
//               delay: 0.5
//             }}
//           />
//           <motion.div
//             className="absolute -bottom-2 -left-2 w-3 h-3 bg-cyan-400 rounded-full"
//             animate={{
//               y: [0, 10, 0],
//               opacity: [0.5, 1, 0.5]
//             }}
//             transition={{
//               duration: 2,
//               repeat: Infinity,
//               delay: 1
//             }}
//           />
//         </motion.div>

//         {/* Content with staggered animations */}
//         <motion.div 
//           className="space-y-4"
//           initial={{ opacity: 0 }}
//           animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//           transition={{ duration: 0.8, delay: 0.3 + (index * 0.2) }}
//         >
//           {/* Title with typewriter effect */}
//           <motion.h3 
//             className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
//             initial={{ opacity: 0, x: -20 }}
//             animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
//             transition={{ duration: 0.6, delay: 0.5 + (index * 0.2) }}
//           >
//             {title}
//           </motion.h3>

//           {/* Company and period with slide-in effect */}
//           <motion.div 
//             className="flex justify-between items-center"
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 0.6, delay: 0.7 + (index * 0.2) }}
//           >
//             <motion.span 
//               className="font-semibold text-blue-400 flex items-center gap-2"
//               whileHover={{ scale: 1.05, color: "#06b6d4" }}
//             >
//               <Target className="w-4 h-4" />
//               {company}
//             </motion.span>
//             <motion.span 
//               className="text-sm font-mono bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-4 py-2 rounded-full border border-blue-500/30"
//               whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
//             >
//               {period}
//             </motion.span>
//           </motion.div>

//           {/* Description with animated border */}
//           <motion.div
//             className="relative"
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 0.6, delay: 0.9 + (index * 0.2) }}
//           >
//             <motion.div
//               className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full"
//               animate={{
//                 height: isHovered ? "100%" : "0%"
//               }}
//               transition={{ duration: 0.5 }}
//             />
//             <p className="text-gray-300 pl-6 leading-relaxed">
//               {description}
//             </p>
//           </motion.div>

//           {/* Achievements */}
//           {achievements && (
//             <motion.div
//               className="mt-6"
//               initial={{ opacity: 0, y: 10 }}
//               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
//               transition={{ duration: 0.6, delay: 1.1 + (index * 0.2) }}
//             >
//               <h4 className="text-sm font-semibold text-cyan-400 mb-3 flex items-center">
//                 <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2" />
//                 Key Achievements
//               </h4>
//               <div className="flex flex-wrap gap-2">
//                 {achievements.map((achievement, idx) => (
//                   <motion.span
//                     key={idx}
//                     className="px-3 py-1 bg-cyan-500/10 text-cyan-300 text-xs rounded-full border border-cyan-500/20"
//                     whileHover={{ scale: 1.05, backgroundColor: "rgba(6, 182, 212, 0.2)" }}
//                     transition={{ duration: 0.2 }}
//                   >
//                     {achievement}
//                   </motion.span>
//                 ))}
//               </div>
//             </motion.div>
//           )}

//           {/* Skills */}
//           {skills && (
//             <motion.div
//               className="mt-4"
//               initial={{ opacity: 0, y: 10 }}
//               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
//               transition={{ duration: 0.6, delay: 1.3 + (index * 0.2) }}
//             >
//               <h4 className="text-sm font-semibold text-purple-400 mb-3 flex items-center">
//                 <div className="w-2 h-2 bg-purple-400 rounded-full mr-2" />
//                 Technologies Used
//               </h4>
//               <div className="flex flex-wrap gap-2">
//                 {skills.map((skill, idx) => (
//                   <motion.span
//                     key={idx}
//                     className="px-3 py-1 bg-purple-500/10 text-purple-300 text-xs rounded-full border border-purple-500/20"
//                     whileHover={{ scale: 1.05, backgroundColor: "rgba(147, 51, 234, 0.2)" }}
//                     transition={{ duration: 0.2 }}
//                   >
//                     {skill}
//                   </motion.span>
//                 ))}
//               </div>
//             </motion.div>
//           )}

//           {/* Interactive action button */}
//           <motion.div
//             className="mt-6"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
//             transition={{ duration: 0.6, delay: 1.5 + (index * 0.2) }}
//           >
//             <motion.button
//               className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-lg text-cyan-300 text-sm font-medium hover:from-cyan-500/30 hover:to-purple-500/30 transition-all duration-300"
//               whileHover={{ 
//                 scale: 1.05,
//                 boxShadow: "0 0 20px rgba(6, 182, 212, 0.3)"
//               }}
//               whileTap={{ scale: 0.95 }}
//               onMouseEnter={onHover}
//               onMouseLeave={onLeave}
//             >
//               <span>Learn More</span>
//               <motion.div
//                 animate={{ x: isHovered ? [0, 5, 0] : 0 }}
//                 transition={{ duration: 1, repeat: Infinity }}
//               >
//                 <ArrowRight className="w-4 h-4" />
//               </motion.div>
//             </motion.button>
//           </motion.div>
//         </motion.div>

//         {/* Animated corner decorations */}
//         <motion.div 
//           className="absolute top-4 right-4 w-16 h-16"
//           animate={{
//             rotate: isHovered ? 90 : 0
//           }}
//           transition={{ duration: 0.5 }}
//         >
//           <div className="absolute top-0 right-0 w-8 h-1 bg-gradient-to-r from-cyan-400 to-transparent rounded-full" />
//           <div className="absolute top-0 right-0 w-1 h-8 bg-gradient-to-b from-cyan-400 to-transparent rounded-full" />
//         </motion.div>
        
//         <motion.div 
//           className="absolute bottom-4 left-4 w-16 h-16"
//           animate={{
//             rotate: isHovered ? -90 : 0
//           }}
//           transition={{ duration: 0.5 }}
//         >
//           <div className="absolute bottom-0 left-0 w-8 h-1 bg-gradient-to-r from-transparent to-purple-400 rounded-full" />
//           <div className="absolute bottom-0 left-0 w-1 h-8 bg-gradient-to-t from-purple-400 to-transparent rounded-full" />
//         </motion.div>

//         {/* Floating stars */}
//         {[...Array(3)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute text-yellow-400"
//             style={{
//               top: `${20 + i * 30}%`,
//               right: `${10 + i * 20}%`,
//             }}
//             animate={{
//               rotate: [0, 180, 360],
//               scale: [0.5, 1, 0.5],
//               opacity: [0.3, 1, 0.3]
//             }}
//             transition={{
//               duration: 4 + i,
//               repeat: Infinity,
//               delay: i * 0.5
//             }}
//           >
//             <Star className="w-3 h-3" />
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// const ExperienceSection = () => {
//   const [activeCard, setActiveCard] = useState(null);
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const containerRef = useRef(null);
//   const isInView = useInView(containerRef, { once: false, amount: 0.3 });

//   const experiences = [
//     {
//       icon: Network,
//       title: "WordPress Developer",
//       company: "Fiverr",
//       period: "2019 - 2020",
//       description:
//         "Worked on developing and customizing WordPress websites for clients globally.",
//       achievements: ["50+ Projects", "100% Satisfaction", "Global Clients"],
//       skills: ["WordPress", "PHP", "CSS", "JavaScript"]
//     },
//     {
//       icon: Layers,
//       title: "Junior Frontend Developer",
//       company: "Sera Programmer",
//       period: "2021 - 2023",
//       description:
//         "Assisted in building and optimizing user interfaces with a focus on responsive and interactive designs.",
//       achievements: ["Responsive Design", "UI/UX Focus", "Team Collaboration"],
//       skills: ["React", "Vue.js", "Tailwind CSS", "Figma"]
//     },
//     {
//       icon: Code2,
//       title: "JavaScript Developer",
//       company: "OlovJS (Sera Programmer)",
//       period: "2023 - Present",
//       description:
//         "Contributed to developing JavaScript libraries and enhancing framework functionalities.",
//       achievements: ["Framework Creator", "Open Source", "Performance"],
//       skills: ["JavaScript", "TypeScript", "Node.js", "Webpack"]
//     },
//   ];

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"]
//   });

//   useEffect(() => {
//     const unsubscribe = scrollYProgress.onChange((latest) => {
//       setScrollProgress(latest);
//     });
//     return unsubscribe;
//   }, [scrollYProgress]);

//   return (
//     <motion.div 
//       ref={containerRef}
//       className="min-h-screen bg-gradient-to-b relative overflow-hidden pt-32 pb-20"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       {/* Dynamic animated background */}
//       <motion.div 
//         className="absolute inset-0 bg-[#04081A]"
//         animate={{
//           background: [
//             "linear-gradient(135deg, #04081A 0%, #0a0f2e 50%, #04081A 100%)",
//             "linear-gradient(135deg, #04081A 0%, #1a1f3a 50%, #04081A 100%)",
//             "linear-gradient(135deg, #04081A 0%, #0a0f2e 50%, #04081A 100%)"
//           ]
//         }}
//         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//       />

//       {/* Animated grid background */}
//       <motion.div 
//         className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]"
//         animate={{
//           backgroundPosition: ["0px 0px", "40px 40px", "0px 0px"]
//         }}
//         transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//       />

//       {/* Floating particles with scroll-based movement */}
//       <div className="absolute inset-0">
//         {[...Array(30)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-1 h-1 bg-cyan-400/40 rounded-full"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//             animate={{
//               y: [0, -100, 0],
//               opacity: [0.3, 1, 0.3],
//               scale: [0.5, 1.5, 0.5]
//             }}
//             transition={{
//               duration: 4 + Math.random() * 4,
//               repeat: Infinity,
//               delay: Math.random() * 5,
//               ease: "easeInOut"
//             }}
//           />
//         ))}
//       </div>

//       {/* Scroll progress indicator */}
//       <motion.div
//         className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50"
//         initial={{ scaleX: 0 }}
//         style={{ scaleX: scrollYProgress }}
//       >
//         <motion.div
//           className="h-full bg-gradient-to-r from-cyan-400 to-purple-500"
//           animate={{
//             background: [
//               "linear-gradient(90deg, #06b6d4, #3b82f6, #8b5cf6)",
//               "linear-gradient(90deg, #8b5cf6, #06b6d4, #3b82f6)",
//               "linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)"
//             ]
//           }}
//           transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//         />
//       </motion.div>

//       {/* Content container */}
//       <div className="relative container mx-auto px-6 mt-10">
//         {/* Enhanced section header */}
//         <motion.div 
//           className="flex flex-col items-center space-y-8 mb-20"
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//           transition={{ duration: 1, delay: 0.5 }}
//         >
//           {/* Decorative elements */}
//           <motion.div 
//             className="relative flex items-center justify-center mb-4"
//             initial={{ scale: 0 }}
//             animate={isInView ? { scale: 1 } : { scale: 0 }}
//             transition={{ duration: 0.8, delay: 0.7 }}
//           >
//             <motion.div 
//               className="absolute -left-8 w-16 h-0.5 bg-gradient-to-r from-transparent to-cyan-400"
//               initial={{ width: 0 }}
//               animate={isInView ? { width: "4rem" } : { width: 0 }}
//               transition={{ duration: 1, delay: 0.8 }}
//             />
//             <motion.div 
//               className="w-3 h-3 bg-cyan-400 rounded-full"
//               animate={{ 
//                 scale: [1, 1.2, 1],
//                 opacity: [0.5, 1, 0.5]
//               }}
//               transition={{ 
//                 duration: 2,
//                 repeat: Infinity,
//                 ease: "easeInOut"
//               }}
//             />
//             <motion.div 
//               className="absolute -right-8 w-16 h-0.5 bg-gradient-to-l from-transparent to-purple-400"
//               initial={{ width: 0 }}
//               animate={isInView ? { width: "4rem" } : { width: 0 }}
//               transition={{ duration: 1, delay: 0.8 }}
//             />
//           </motion.div>

//           <div className="relative">
//             <motion.h2 
//               className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-center"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
//               transition={{ duration: 1, delay: 0.9 }}
//             >
//               Professional Journey
//             </motion.h2>
            
//             {/* Animated background glow */}
//             <motion.div 
//               className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full"
//               animate={{ 
//                 scale: [1, 1.2, 1],
//                 opacity: [0.2, 0.4, 0.2]
//               }}
//               transition={{ 
//                 duration: 4,
//                 repeat: Infinity,
//                 ease: "easeInOut"
//               }}
//             />

//             {/* Floating particles around title */}
//             {[...Array(8)].map((_, i) => (
//               <motion.div
//                 key={i}
//                 className="absolute w-2 h-2 bg-cyan-400/60 rounded-full"
//                 style={{
//                   top: `${20 + Math.random() * 60}%`,
//                   left: `${10 + Math.random() * 80}%`,
//                 }}
//                 animate={{
//                   y: [0, -30, 0],
//                   opacity: [0.3, 1, 0.3],
//                   scale: [0.5, 1, 0.5]
//                 }}
//                 transition={{
//                   duration: 3 + Math.random() * 2,
//                   repeat: Infinity,
//                   delay: i * 0.5,
//                   ease: "easeInOut"
//                 }}
//               />
//             ))}
//           </div>

//           <motion.p 
//             className="text-lg md:text-xl text-gray-300 font-medium tracking-wide text-center max-w-3xl leading-relaxed"
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 1, delay: 1.1 }}
//           >
//             <span className="text-cyan-400 font-semibold">"Transforming ideas into digital reality"</span>
//             <br />
//             <span className="text-gray-400">One project at a time, building the future of web development</span>
//           </motion.p>

//           {/* Interactive stats */}
//           <motion.div 
//             className="flex items-center space-x-8 mt-8"
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 1, delay: 1.3 }}
//           >
//             {[
//               { icon: Zap, label: "4+ Years", color: "cyan" },
//               { icon: Star, label: "10+ Projects", color: "purple" },
//               { icon: Target, label: "Continuous Learning", color: "blue" }
//             ].map((stat, i) => (
//               <motion.div
//                 key={i}
//                 className="flex items-center space-x-2 px-4 py-2 bg-gray-800/50 rounded-full backdrop-blur-sm border border-gray-700/50"
//                 whileHover={{ scale: 1.05, y: -2 }}
//                 transition={{ duration: 0.2 }}
//               >
//                 <stat.icon className={`w-4 h-4 text-${stat.color}-400`} />
//                 <span className="text-sm text-gray-300 font-mono">{stat.label}</span>
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>

//         {/* Interactive experience grid */}
//         <motion.div 
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto"
//           initial={{ opacity: 0 }}
//           animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//           transition={{ duration: 1, delay: 1.5 }}
//         >
//           {experiences.map((exp, index) => (
//             <ExperienceCard 
//               key={index} 
//               {...exp} 
//               index={index}
//               isInView={isInView}
//               isActive={activeCard === index}
//               onHover={() => setActiveCard(index)}
//               onLeave={() => setActiveCard(null)}
//             />
//           ))}
//         </motion.div>

//         {/* Call to action with scroll-triggered animation */}
//         <motion.div 
//           className="text-center mt-20"
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//           transition={{ duration: 1, delay: 2 }}
//         >
//           <motion.div 
//             className="inline-block p-8 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 backdrop-blur-sm"
//             whileHover={{ scale: 1.02, y: -5 }}
//             transition={{ duration: 0.3 }}
//           >
//             <h3 className="text-2xl font-bold text-white mb-4">
//               Ready to Work Together?
//             </h3>
//             <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
//               Let's discuss how my experience and passion for development can help bring your ideas to life.
//             </p>
//             <motion.a
//               href="#contact"
//               className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <span>Get In Touch</span>
//               <motion.div
//                 className="ml-2"
//                 animate={{ x: [0, 5, 0] }}
//                 transition={{ duration: 1.5, repeat: Infinity }}
//               >
//                 →
//               </motion.div>
//             </motion.a>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Enhanced background effects */}
//       <motion.div 
//         className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl"
//         animate={{
//           scale: [1, 1.2, 1],
//           opacity: [0.1, 0.3, 0.1]
//         }}
//         transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <motion.div 
//         className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"
//         animate={{
//           scale: [1, 1.1, 1],
//           opacity: [0.1, 0.2, 0.1]
//         }}
//         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
//       />
//     </motion.div>
//   );
// };

// export default ExperienceSection;