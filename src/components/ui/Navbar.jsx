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
        <NavLink to="/" className="text-2xl font-bold text-white">
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
                {item.dropdown && <ChevronDown size={16} />}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(true)}
        >
          <Menu size={26} />
        </button>
      </nav>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* RIGHT SIDE MOBILE MENU */}
      <aside
        className={`fixed top-0 right-0 h-screen w-72 bg-[#631529] text-white z-50
        transform transition-transform duration-300
        ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/20">
          <span className="text-lg font-semibold">Menu</span>
          <button onClick={() => setMobileOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {/* Links */}
        <div className="px-6 py-6 space-y-4">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between py-2 text-white font-medium hover:text-[#d4af37] transition"
            >
              {item.name}
              {item.dropdown && <ChevronDown size={16} />}
            </NavLink>
          ))}
        </div>
      </aside>
    </header>
  );
}
