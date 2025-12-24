import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Website",
    description: "Modern portfolio built with React and Tailwind CSS.",
    image: "/portfolio.png",
    tech: ["React", "Tailwind"],
    github: "#",
    live: "#",
  },
  {
    title: "AI Trip Planner",
    description: "AI-based trip planner using APIs and React.",
    image: "/AI Travel Planner Website Design – Where AI Meets Adventure.jpeg",
    tech: ["React", "API"],
    github: "#",
    live: "#",
  },
  {
    title: "Chat Application",
    description: "Real-time chat UI with modern design.",
    image: "/Chat App Design.jpeg",
    tech: ["React", "JS"],
    github: "#",
    live: "#",
  },
  {
    title: "E-Commerce UI",
    description: "Responsive shopping UI with cart functionality.",
    image: "/Cleveroad.jpeg",
    tech: ["React", "Tailwind"],
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  // Desktop: show only 3 unless "See More" clicked
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="w-full bg-gray-50 py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            My <span className="text-purple-600">Projects</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Some of the projects I’ve worked on using modern frontend
            technologies.
          </p>
        </div>

        {/* PROJECTS CARD */}
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-10 lg:p-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {visibleProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-gray-600 text-sm">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-purple-100 text-purple-600 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-sm hover:text-purple-600"
                    >
                      <FaGithub /> Code
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center gap-2 text-sm hover:text-purple-600"
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* SEE MORE BUTTON – DESKTOP ONLY */}
          {projects.length > 3 && !showAll && (
            <div className="mt-12 hidden lg:flex justify-center">
              <button
                onClick={() => setShowAll(true)}
                className="bg-purple-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-purple-700 transition"
              >
                See More Projects
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
