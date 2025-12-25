import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const links = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
  ];

  const handleScroll = (link) => {
    setActive(link.name);
    setOpen(false);

    const section = document.getElementById(link.id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* LEFT (Brand) */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-3xl">
              D
            </div>
            <span className="text-3xl font-bold">Divya</span>
          </div>
        </div>

        {/* CENTER (Desktop) */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => handleScroll(link)}
              className={`px-4 py-2 rounded-md text-xl font-medium transition-all duration-300
                ${
                  active === link.name
                    ? "bg-purple-600 text-white shadow"
                    : "text-gray-700 hover:text-purple-600 hover:bg-purple-100"
                }`}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* RIGHT (Mobile menu icon + Desktop Contact) */}
        <div className="flex items-center gap-3">
          <button
            className="md:hidden text-2xl font-bold"
            onClick={() => setOpen(!open)}
            aria-label="Open menu"
          >
            ☰
          </button>
          <button
            onClick={() => handleScroll({ name: "Contact", id: "contact" })}
            className="hidden md:inline-flex px-4 py-2 bg-purple-600 text-white text-xl font-medium rounded-md shadow hover:bg-purple-800 transition"
          >
            Contact
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-white overflow-hidden transition-all duration-500 ease-in-out
          ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="px-6 py-6 space-y-8">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => handleScroll(link)}
              className="block w-full text-left text-lg font-semibold text-gray-900 hover:text-purple-600 transition"
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
