import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { JSX } from "react";
import Image from "next/image";
interface Project {
  id: number;
  title: string;
  description: string;
}

export default function Portfolio(): JSX.Element {
  const [theme, setTheme] = useState<string>("dark");

  useEffect(() => {
    document.body.className =
      theme === "dark" ? "bg-[#0B0E14] text-white" : "bg-white text-black";
  }, [theme]);

  const projects: Project[] = [
    {
      id: 1,
      title: "Dating Mobile App Design",
      description: "A modern dating app with sleek UI/UX.",
    },
    {
      id: 2,
      title: "E-Commerce Mobile App Design",
      description: "An intuitive shopping experience for users.",
    },
    {
      id: 3,
      title: "Fitness Mobile App Design",
      description: "A fitness app to track workouts and goals.",
    },
  ];

  return (
    <div
      className={`${theme} min-h-screen font-sans transition-all duration-300`}
    >
      {/* Header */}
      <header className="p-6 flex justify-between items-center fixed top-0 w-full z-10 bg-opacity-90 shadow-md">
        <h1
          className={`text-3xl font-bold tracking-wide ${
            theme === "dark" ? "bg-[#0B0E14] text-white" : "bg-white text-black"
          }`}
        >
          Full Stack Developer
        </h1>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-3 bg-blue-600 text-white rounded-full shadow-md transition-transform transform hover:scale-110"
        >
          {theme === "dark" ? "🌞" : "🌙"}
        </button>
      </header>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center p-24 pt-40"
      >
        <Image
          src="/images/artist.webp"
          alt="Ivan TITOV"
          width={500}
          height={500}
          className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-blue-500 object-top"
        />
        <h2 className="text-5xl font-extrabold">
          I'm a <span className="text-blue-500">Full Stack Developer</span>
        </h2>
        <p className="mt-4 text-xl text-gray-400 max-w-2xl">
          I create modern and visually appealing web applications.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="mt-6 px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-lg"
        >
          Previous Projects
        </motion.button>
      </motion.section>

      {/* Projects Section */}
      <section className="p-12 rounded-t-3xl shadow-xl">
        <h3 className="text-4xl font-bold mb-8 text-center text-blue-500">
          Portfolio
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl shadow-lg border border-blue-500 relative"
            >
              <h4 className="text-2xl font-semibold">{project.title}</h4>
              <p className="mt-3">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
