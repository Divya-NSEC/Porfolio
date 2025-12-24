import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaBehance,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#243447] text-gray-300 relative">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* TOP ROW */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* LOGO */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-3xl">
              D
            </div>
            <h3 className="text-3xl font-semibold text-white">
              Divya
            </h3>
          </div>

          {/* NAV LINKS */}
          <ul className="flex flex-wrap justify-center gap-8 text-lg">
            {[
              "Home",
              "About",
              "Process",
              "Portfolio",
              "Blog",
              "Services",
              "Contact",
            ].map((item, i) => (
              <li
                key={i}
                className="hover:text-purple-400 transition cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* COPYRIGHT */}
          <p className="text-base text-gray-400">
            Copyright © {new Date().getFullYear()} Divya Rana. All rights reserved.
          </p>
        </div>

        {/* DIVIDER */}
        <div className="my-12 border-t border-gray-600/40"></div>

        {/* BOTTOM ROW */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">

          {/* SOCIAL ICONS */}
          <div className="flex gap-6">
            {[FaFacebookF, FaInstagram, FaLinkedinIn, FaBehance].map(
              (Icon, index) => (
                <Icon
                  key={index}
                  className="text-purple-400 hover:text-white transition cursor-pointer"
                  size={22}
                />
              )
            )}
          </div>

          {/* CREDIT */}
          <p className="text-base text-gray-400">
            Developed with <span className="text-purple-400">❤</span> by{" "}
            <span className="text-white font-medium hover:underline cursor-pointer">
              Divya
            </span>
          </p>
        </div>
      </div>

      {/* BACK TO TOP */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-purple-600 text-white
                  text-2xl font-bold flex items-center justify-center shadow-lg hover:bg-purple-700 transition"
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;
