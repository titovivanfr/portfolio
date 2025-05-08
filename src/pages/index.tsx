import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { JSX } from "react";
import Image from "next/image";
interface Project {
  id: number;
  title: string;
  description: string;
  url: string;
}

export default function Portfolio(): JSX.Element {
  const [theme, setTheme] = useState<string>("dark");
  const skills = [
    {
      title: "Full Stack Development",
      description:
        "Creating scalable web applications using modern front-end and back-end technologies.",
      icon: "💻",
      bg: theme === "dark" ? "bg-[#2c3e50]" : "bg-blue-100",
    },
    {
      title: "UI/UX Design",
      description:
        "Designing clean and user-friendly interfaces focused on great user experience.",
      icon: "🎨",
      bg: theme === "dark" ? "bg-[#34495e]" : "bg-green-100",
    },
    {
      title: "API & Backend Architecture",
      description:
        "Developing secure and efficient server-side systems and RESTful APIs.",
      icon: "🛠️",
      bg: theme === "dark" ? "bg-[#3b3b3b]" : "bg-red-100",
    },
    {
      title: "Database Management",
      description:
        "Modeling, optimizing, and maintaining relational and NoSQL databases.",
      icon: "🗄️",
      bg: theme === "dark" ? "bg-[#3a4b5c]" : "bg-yellow-100",
    },
    {
      title: "Automated Testing",
      description:
        "Ensuring code quality and stability with unit, integration, and end-to-end tests.",
      icon: "🧪",
      bg: theme === "dark" ? "bg-[#2e3b4e]" : "bg-purple-100",
    },
    {
      title: "DevOps Basics",
      description:
        "Working with Git, CI/CD pipelines, and basic deployment on cloud platforms.",
      icon: "🚀",
      bg: theme === "dark" ? "bg-[#30465a]" : "bg-indigo-100",
    },
  ];
  useEffect(() => {
    document.body.className =
      theme === "dark" ? "bg-[#212f3c] text-white" : "bg-white text-black";
  }, [theme]);

  const projects: Project[] = [
    {
      id: 1,
      title: "Cocktails Mobile App Design",
      description: "A modern cocktails app with sleek UI/UX.",
      url: "/images/cocktails.webp",
    },
    {
      id: 2,
      title: "E-Commerce Mobile App Design",
      description: "An intuitive shopping experience for users.",
      url: "/images/artist.webp",
    },
    {
      id: 3,
      title: "Fitness Mobile App Design",
      description: "A fitness app to track workouts and goals.",
      url: "/images/artist.webp",
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
            theme === "dark" ? "text-white" : "text-black"
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
          className="w-48 h-48 rounded-full object-cover mb-6 border-4 border-blue-500 object-top"
        />
        <h2 className="text-5xl font-extrabold">
          I'm a <span className="text-blue-500">Full Stack Web Developer</span>
        </h2>
        <p className="mt-4 text-xl text-gray-400 max-w-2xl">
          I create modern and visually appealing web applications.
        </p>
        {/* <motion.button
          whileHover={{ scale: 1.1 }}
          className="mt-6 px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-lg"
        >
          Previous Projects
        </motion.button> */}
      </motion.section>

      {/* Profile Section */}
      <section className="p-12 rounded-t-3xl shadow-xl">
        <h3
          className={`text-4xl font-bold mb-12 text-center ${
            theme === "dark" ? "text-white" : "text-blue-500"
          }`}
        >
          What I Do
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((item, idx) => (
            <motion.div
              whileHover={{ y: -5, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              key={idx}
              className={`flex flex-col p-8 rounded-xl shadow-lg ${item.bg} ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h6 className="text-2xl font-semibold mb-2">{item.title}</h6>
              <p className="text-md flex-grow">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="p-12 rounded-t-3xl shadow-xl">
        <h3
          className={`text-4xl font-bold mb-8 text-center ${
            theme === "dark" ? "text-white" : "text-blue-500"
          }`}
        >
          Education
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="flex flex-col p-8 rounded-lg shadow-md bg-blue-600 text-white">
            <h6 className="text-3xl font-bold">Bac +2 Web Development</h6>
            <p className="mt-4 flex-grow">
              Acquired foundational skills in web development, including HTML,
              CSS, JavaScript, and basic backend technologies.
            </p>
          </div>
          <div className="flex flex-col p-8 rounded-lg shadow-md bg-teal-600 text-white">
            <h6 className="text-3xl font-bold">
              Bac +4 Full Stack Development
            </h6>
            <p className="mt-4 flex-grow">
              Advanced studies in full stack development, focusing on modern
              frameworks, databases, and scalable application design.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="p-12 rounded-t-3xl shadow-xl">
        <h3
          className={`text-4xl font-bold mb-8 text-center ${
            theme === "dark" ? "text-white" : "text-blue-500"
          }`}
        >
          Technologies I Use
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
          <div className="flex flex-col p-8 rounded-lg shadow-md bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <h6 className="text-3xl font-bold">TypeScript</h6>
            <p className="mt-4 flex-grow">
              A strongly typed programming language that builds on JavaScript.
            </p>
          </div>
          <div className="flex flex-col p-8 rounded-lg shadow-md bg-gradient-to-r from-green-500 to-teal-500 text-white">
            <h6 className="text-3xl font-bold">React.js</h6>
            <p className="mt-4 flex-grow">
              A JavaScript library for building user interfaces.
            </p>
          </div>
          <div className="flex flex-col p-8 rounded-lg shadow-md bg-gradient-to-r from-red-500 to-pink-500 text-white">
            <h6 className="text-3xl font-bold">PHP & Laravel</h6>
            <p className="mt-4 flex-grow">
              A popular general-purpose scripting language and its web
              framework.
            </p>
          </div>
          <div className="flex flex-col p-8 rounded-lg shadow-md bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
            <h6 className="text-3xl font-bold">SQL & PostgreSQL</h6>
            <p className="mt-4 flex-grow">
              A standard language for accessing databases and a powerful,
              open-source database system.
            </p>
          </div>
          <div className="flex flex-col p-8 rounded-lg shadow-md bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
            <h6 className="text-3xl font-bold">Jest & Dusk</h6>
            <p className="mt-4 flex-grow">
              JavaScript testing framework and Laravel's browser testing tool.
            </p>
          </div>
          <div className="flex flex-col p-8 rounded-lg shadow-md bg-gradient-to-r from-blue-500 to-green-500 text-white">
            <h6 className="text-3xl font-bold">Tailwind CSS & Bootstrap</h6>
            <p className="mt-4 flex-grow">
              Utility-first CSS framework and the most popular CSS framework.
            </p>
          </div>
          <div className="flex flex-col p-8 rounded-lg shadow-md bg-gradient-to-r from-pink-500 to-red-500 text-white">
            <h6 className="text-3xl font-bold">Vue.js</h6>
            <p className="mt-4 flex-grow">
              A progressive JavaScript framework for building user interfaces.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      {/* <section className="p-12 rounded-t-3xl shadow-xl">
        <h3
          className={`text-4xl font-bold mb-8 text-center ${
            theme === "dark" ? "text-white" : "text-blue-500"
          }`}
        >
          Portfolio
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl shadow-lg border border-blue-500 relative"
            >
              <h6 className="text-2xl font-semibold">{project.title}</h6>
              <p className="mt-3">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </section> */}
    </div>
  );
}
