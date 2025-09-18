import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";


const projects = [
  {
    title: "Wayfarer",
    description:
      "AI powered travel assistant",
    src: "/images/wayfarer.png",
    link: "https://i.postimg.cc/DwgWTfP0/Annotation-2025-03-19-113338.png",
    color: "#5196fd",
    githubLink: "https://github.com/Naveen-Raj6/WayFarer",
    liveLink: "https://way-farer.vercel.app",
  },
  {
    title: "BroCode",
    description:"BroCode is code Sharing Platform and collaboration tool for developers and also a editor for developers",
    src: "/images/BroCode.png",
    link: "https://i.postimg.cc/J75CKyrs/Annotation-2025-04-01-203959.png",
    color: "#8f89ff",
    githubLink: "https://github.com/Naveen-Raj6/BroCode",
    liveLink: "https://brocode-ok.vercel.app",
  },
  {
    title: "Asta",
    description:
      "Asta is a AI powered chatbot for developers and learners",
    src: "/images/wayfarer.png", // No Asta image found, using wayfarer as placeholder
    link: "https://i.postimg.cc/J4jPVFY0/Annotation-2025-04-01-204723.png",
    color: "#fff",
    githubLink: "https://github.com/Naveen-Raj6/ai-bot",
    // liveLink: "https://asta-bot.vercel.app/",
  },{
    title:"Expense Tracker",
    description:" Vite React and Recharts built Expense tracker ",
    src:"/images/ExpenseTracker.png",
    link:"",
    color:"#5196fd",
    githubLink:"https://github.com/Naveen-Raj6/Expense-Tracker",
    liveLink:"https://bro-expense-tracker.vercel.app",
  }

];

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    // Add specific styles for 1366x768 resolution
    const style = document.createElement("style");
    style.textContent = `
      @media screen and (width: 1366px) and (height: 768px),
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .project-card {
          scale: 0.85;
          margin-top: -5vh;
        }
        .project-container {
          height: 90vh;
        }
      }
    `;
    document.head.appendChild(style);

    // Resolution check function
    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      if (isTargetResolution) {
        document.documentElement.style.setProperty("--project-scale", "0.85");
        document.documentElement.style.setProperty("--project-margin", "-5vh");
      } else {
        document.documentElement.style.setProperty("--project-scale", "1");
        document.documentElement.style.setProperty("--project-margin", "0");
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, []);

  return (
    <>
      <style>{`
        .mobile-scroll::-webkit-scrollbar {
          display: none;
        }
        .mobile-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <main className="bg-black pt-16 md:pt-0" ref={container}>
        {/* Mobile Horizontal Scroll */}
        <motion.div 
          className="md:hidden relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="flex overflow-x-auto snap-x snap-mandatory mobile-scroll" 
            style={{ 
              height: '100vh',
              WebkitOverflowScrolling: 'touch'
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {projects.map((project, i) => (
              <motion.div
                key={`mobile_${i}`}
                className="flex-shrink-0 w-screen h-screen snap-center flex items-center justify-center px-4"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <Card
                  i={i}
                  url={project.link}
                  title={project.title}
                  color={project.color}
                  description={project.description}
                  progress={scrollYProgress}
                  range={[i * 0.25, 1]}
                  targetScale={1}
                  githubLink={project.githubLink}
                  liveLink={project.liveLink}
                  isMobile={true}
                />
              </motion.div>
            ))}
          </motion.div>
          
          {/* Scroll indicators */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {projects.map((_, i) => (
              <motion.div
                key={`indicator_${i}`}
                className="w-2 h-2 rounded-full bg-gray-600 opacity-50"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </motion.div>
          
          {/* Swipe instruction */}
          <motion.div 
            className="absolute top-20 left-1/2 transform -translate-x-1/2 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div 
              className="bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm"
              animate={{ 
                scale: [1, 1.05, 1],
                y: [0, -2, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              ← Swipe to explore projects →
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Desktop Vertical Scroll */}
        <section className="hidden md:block text-white w-full bg-slate-950">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`desktop_${i}`}
                i={i}
                url={project.link}
                title={project.title}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
                isMobile={false}
              />
            );
          })}
        </section>
      </main>
  </>
  );
}

function Card({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
  githubLink,
  liveLink,
  isMobile = false,
}) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  if (isMobile) {
    return (
      <div
        ref={container}
        className="w-full max-w-sm mx-auto"
      >
        <motion.div
          className="w-full bg-zinc-900 rounded-2xl overflow-hidden shadow-xl"
          whileHover={{
            y: -8,
            transition: { duration: 0.3 },
          }}
        >
          {/* Mobile Card Layout */}
          <div className="w-full flex flex-col">
            {/* Image section */}
            <div className="w-full h-[200px] relative overflow-hidden">
              <motion.img
                src={url}
                alt={title}
                className="w-full h-full object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
              <motion.div
                className="absolute inset-0"
                style={{ backgroundColor: color, mixBlendMode: "overlay" }}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.3 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium">
                Project {i + 1}
              </div>
            </div>

            {/* Content section */}
            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                  <div className="h-[1px] w-12 bg-gray-600" />
                </div>

                <h2 className="text-lg font-bold text-white mb-3">
                  {title}
                </h2>
                <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
                  {description}
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex gap-3 mt-6">
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 text-center"
                >
                  GitHub
                </a>
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 text-center"
                  style={{ backgroundColor: color }}
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  // Desktop version
  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 project-container"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          transform: `scale(var(--project-scale, 1))`,
          marginTop: "var(--project-margin, 0)",
        }}
        className="relative -top-[25%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top project-card"
        whileHover={{
          y: -8,
          transition: { duration: 0.3 },
        }}
      >
        {/* Modern split card design */}
        <div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-xl">
          {/* Image section - full width on mobile, 55% on desktop */}
          <div className="w-full md:w-[55%] h-[250px] md:h-[400px] lg:h-[450px] relative overflow-hidden">
            <motion.img
              src={url}
              alt={title}
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />

            {/* Colored overlay on hover */}
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: color, mixBlendMode: "overlay" }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />

            {/* Project number */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/50 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
              Project {i + 1}
            </div>
          </div>

          {/* Content section - full width on mobile, 45% on desktop */}
          <div className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div
                  className="w-2 h-2 md:w-3 md:h-3 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <div className="h-[1px] w-12 md:w-20 bg-gray-600" />
              </div>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4">
                {title}
              </h2>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed line-clamp-3 md:line-clamp-none max-w-md">
                {description}
              </p>
            </div>

            <div className="mt-4 md:mt-auto pt-4">
              <div className="w-full h-[1px] bg-gray-800 mb-4 md:mb-6" />

              <div className="flex items-center gap-4">
                {/* GitHub Link */}
                <motion.a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span
                    className="text-xs md:text-sm font-medium"
                    style={{ color }}
                  >
                    Code
                  </span>
                </motion.a>

                {/* Live Link */}
                <motion.a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <span
                    className="text-xs md:text-sm font-medium"
                    style={{ color }}
                  >
                    Live
                  </span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Add PropTypes validation
Card.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
};