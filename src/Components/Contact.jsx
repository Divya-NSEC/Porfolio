import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaBehance,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="w-full bg-gray-50 py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* CARD */}
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-10 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

            {/* LEFT CONTENT */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                Let’s discuss your <br />
                <span className="text-purple-600">Project</span>
              </h2>

              <p className="mt-4 text-gray-600 max-w-md">
                I’m available for frontend and web development work. Drop me a
                message if you have a project or opportunity in mind.
              </p>

              {/* CONTACT INFO */}
              <div className="mt-10 space-y-6">

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Address:</p>
                    <p className="text-gray-800 font-medium">
                      Kolkata, India
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">My Email:</p>
                    <p className="text-gray-800 font-medium">
                      dr316541@gmail.com
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Call Me Now:</p>
                    <p className="text-gray-800 font-medium">
                      +91 70034 20245
                    </p>
                  </div>
                </div>

              </div>

              {/* SOCIAL ICONS */}
              <div className="mt-10 flex gap-4">
                {[FaFacebookF, FaInstagram, FaLinkedinIn, FaBehance].map(
                  (Icon, i) => (
                    <div
                      key={i}
                      className="w-11 h-11 flex items-center justify-center rounded-lg bg-gray-100 text-purple-600
                                 hover:bg-purple-600 hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer"
                    >
                      <Icon size={18} />
                    </div>
                  )
                )}
              </div>
            </div>

            {/* RIGHT FORM */}
            <div>
              <p className="text-gray-600 font-medium mb-6">
                I’m always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>

              <form className="space-y-6">

                <input
                  type="text"
                  placeholder="Name*"
                  className="w-full border-b border-gray-300 focus:border-purple-600 outline-none py-2"
                />

                <input
                  type="email"
                  placeholder="Email*"
                  className="w-full border-b border-gray-300 focus:border-purple-600 outline-none py-2"
                />

                <input
                  type="text"
                  placeholder="Location*"
                  className="w-full border-b border-gray-300 focus:border-purple-600 outline-none py-2"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Budget*"
                    className="w-full border-b border-gray-300 focus:border-purple-600 outline-none py-2"
                  />
                  <input
                    type="text"
                    placeholder="Subject*"
                    className="w-full border-b border-gray-300 focus:border-purple-600 outline-none py-2"
                  />
                </div>

                <textarea
                  rows="4"
                  placeholder="Message*"
                  className="w-full border-b border-gray-300 focus:border-purple-600 outline-none py-2 resize-none"
                ></textarea>

                <button
                  type="submit"
                  className=" text-2xl font-bold mt-6 font-medium inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-purple-700 transition"
                >
                  Submit →
                </button>

              </form>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
