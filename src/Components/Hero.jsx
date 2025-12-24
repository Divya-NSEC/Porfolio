import React from "react";
import profile from "../assets/profile.jpeg";

const Hero = () => {
  return (
    <section id="hero" className="relative w-full overflow-hidden bg-linear-to-br from-purple-100 via-pink-100 to-blue-100">
      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-14">

          {/* IMAGE – FIRST ON MOBILE */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="bg-white rounded-3xl shadow-2xl p-3">
              <img
                src={profile}
                alt="Profile"
                className="
                  w-70
                  sm:w-[320px]
                  md:w-95
                  lg:w-110
                  xl:w-120
                  rounded-2xl
                  object-cover
                "
              />
            </div>
          </div>

          {/* TEXT – SECOND ON MOBILE */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Hello, I’m <br />
              <span className="text-black">Divya Rana</span>
            </h1>

            <p className="mt-6 text-gray-600 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg leading-relaxed">
              I'm a Freelance UI/UX Designer and Developer based in Kolkata, India. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.
            </p>

            <div className="mt-8 flex justify-center lg:justify-start">
              <button className="rounded-lg bg-purple-600 px-7 py-3 text-white font-medium shadow-md hover:bg-purple-700 transition">
                Say Hello
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

