import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "HTML", level: "90%", icon: <FaHtml5 /> },
  { name: "CSS", level: "85%", icon: <FaCss3Alt /> },
  { name: "JavaScript", level: "80%", icon: <FaJs /> },
  { name: "React", level: "75%", icon: <FaReact /> },
  { name: "Tailwind CSS", level: "85%", icon: <SiTailwindcss /> },
  { name: "Git & GitHub", level: "70%", icon: <FaGitAlt /> },
];

const Skills = () => {
  return (
    <section  id="skills"className="w-full bg-gray-50 py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            My <span className="text-purple-600">Skills</span>
          </h2>
          <p className="mt-4 text-xl font-medium text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I use to build modern, responsive, and
            user-friendly web applications.
          </p>
        </div>

        {/* SKILLS CARD */}
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-10 lg:p-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition"
              >
                {/* ICON + TITLE */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-purple-600 text-4xl">
                    {skill.icon}
                  </div>
                  <h3 className="text-2xl  text-gray-800  font-bold">
                    {skill.name}
                  </h3>
                </div>

                {/* PROGRESS BAR */}
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-purple-600 h-2 rounded-full"
                    style={{ width: skill.level }}
                  ></div>
                </div>

                <p className="mt-2 text-sm font-medium text-gray-500">
                  Proficiency: {skill.level}
                </p>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
