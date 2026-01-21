import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkBase =
    "relative group flex items-center gap-1 transition-colors duration-300";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#631529] shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-bold text-white tracking-wide"
        >
          OraneStyle
        </NavLink>

        {/* Links */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          
          {[
            { name: "About Us", path: "/about", dropdown: true },
            { name: "Courses", path: "/courses", dropdown: true },
            { name: "Franchise", path: "/franchise" },
            { name: "Location", path: "/location", dropdown: true },
            { name: "Career", path: "/career", dropdown: true },
            { name: "Blog", path: "/blog", dropdown: true },
            { name: "Contact Us", path: "/contact" },
            { name: "Testimonials", path: "/testimonials" },
          ].map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `${linkBase} ${
                    isActive ? "text-[#d4af37]" : "text-white"
                  }`
                }
              >
                {item.name}
                {item.dropdown && (
                  <ChevronDown size={16} className="mt-[2px]" />
                )}

                {/* Gold underline */}
                <span
                  className="
                    absolute left-0 -bottom-1
                    h-[2px] w-0
                    bg-[#d4af37]
                    transition-all duration-300
                    group-hover:w-full
                  "
                />
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
