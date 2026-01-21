import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkBase =
    "relative group flex items-center gap-1 transition-colors duration-300";

  const navItems = [
    { name: "About Us", path: "/about", dropdown: true },
    { name: "Courses", path: "/courses", dropdown: true },
    { name: "Franchise", path: "/franchise" },
    { name: "Location", path: "/location", dropdown: true },
    { name: "Career", path: "/career", dropdown: true },
    { name: "Blog", path: "/blog", dropdown: true },
    { name: "Contact Us", path: "/contact" },
    { name: "Testimonials", path: "/testimonials" },
  ];

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

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          {navItems.map((item, index) => (
            <li key={index} className="relative">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? "text-[#d4af37]" : "text-white"}`
                }
              >
                {item.name}
                {item.dropdown && (
                  <ChevronDown size={16} className="mt-[2px]" />
                )}
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/20 transition"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#631529] text-white px-6 py-4 space-y-4">
          {navItems.map((item, index) => (
            <div key={index} className="flex flex-col">
              <NavLink
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between py-2 text-white font-medium hover:text-[#d4af37] transition"
              >
                {item.name}
                {item.dropdown && <ChevronDown size={16} />}
              </NavLink>
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
