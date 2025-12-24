import React from "react";
import profile from "../assets/profile.jpeg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaBehance,
  FaDribbble,
} from "react-icons/fa";


const About = () => {
  return (
    <section id="about" className="w-full bg-gray-50 py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* CARD */}
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-10 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* IMAGE + SOCIAL ICONS */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="bg-gray-100 rounded-2xl p-4">
                <img
                  src={profile}
                  alt="Profile"
                  className="
                    w-[260px]
                    sm:w-[300px]
                    md:w-[340px]
                    lg:w-[380px]
                    rounded-xl
                    object-cover
                  "
                />
              </div>

              {/* SOCIAL ICONS */}
              <div className="mt-6 bg-white rounded-xl shadow-md px-6 py-4 flex gap-4">
  {/* Facebook */}
  <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-gray-100 text-purple-600 
                  hover:bg-purple-600 hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer">
    <FaFacebookF size={18} />
  </div>

  {/* Dribbble / Globe */}
  <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-gray-100 text-purple-600 
                  hover:bg-purple-600 hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer">
    <FaDribbble size={18} />
  </div>

  {/* Instagram */}
  <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-gray-100 text-purple-600 
                  hover:bg-purple-600 hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer">
    <FaInstagram size={18} />
  </div>

  {/* LinkedIn */}
  <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-gray-100 text-purple-600 
                  hover:bg-purple-600 hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer">
    <FaLinkedinIn size={18} />
  </div>

  {/* Behance */}
  <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-gray-100 text-purple-600 
                  hover:bg-purple-600 hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer">
    <FaBehance size={18} />
  </div>
</div>
            </div>

            {/* CONTENT */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                I am a Professional <br />
                <span className="text-purple-600">
                  Frontend Developer
                </span>
              </h2>

              <p className="mt-6 text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                I design and develop modern, responsive, and user-friendly web
                applications. I focus on clean code, performance, and creating
                smooth user experiences using modern frontend technologies.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                I enjoy working on real-world projects and continuously improving
                my skills to deliver high-quality web solutions.
              </p>

              {/* BUTTONS */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-purple-600 text-white px-7 py-3 rounded-lg shadow-md hover:bg-purple-700 transition">
                  My Projects
                </button>

                <button className="border border-gray-300 px-7 py-3 rounded-lg text-gray-800 hover:bg-gray-100 transition flex items-center justify-center gap-2">
                  Download CV
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
