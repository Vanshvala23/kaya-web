import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ================= NAVBAR STYLES ================= */

  const navbarBg = scrolled
    ? "bg-[#631529] shadow-lg"
    : isHomePage
    ? "bg-transparent"
    : "bg-white shadow";

  const textColor = scrolled
    ? "text-white"
    : isHomePage
    ? "text-white"
    : "text-[#631529]";

  const navItems = [
    { name: "About Us", path: "/about-us", dropdown: true },
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navbarBg}`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <NavLink
          to="/"
          className={`text-2xl font-bold transition ${textColor}`}
        >
          OraneStyle
        </NavLink>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex space-x-5 font-medium">
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                end
                className={({ isActive }) =>
                  `
                  relative px-4 py-2 rounded-md flex items-center gap-1
                  transition-all duration-300
                  ${
                    isActive
                      ? "bg-white text-[#631529] shadow-[0_0_12px_rgba(255,255,255,0.6)]"
                      : `${textColor}
                         hover:bg-white hover:text-[#631529]
                         hover:shadow-[0_0_14px_rgba(255,255,255,0.5)]`
                  }
                `
                }
              >
                {item.name}
                {item.dropdown && <ChevronDown size={16} />}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* MOBILE BUTTON */}
        <button
          className={`md:hidden p-2 ${textColor}`}
          onClick={() => setMobileOpen(true)}
        >
          <Menu size={26} />
        </button>
      </nav>

      {/* MOBILE OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* MOBILE MENU */}
      <aside
        className={`fixed top-0 right-0 h-screen w-72 bg-[#631529] text-white z-50
        transform transition-transform duration-300
        ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/20">
          <span className="text-lg font-semibold">Menu</span>
          <button onClick={() => setMobileOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="px-6 py-6 space-y-3">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `
                px-4 py-2 rounded-md flex items-center justify-between transition
                ${
                  isActive
                    ? "bg-white text-[#631529] shadow-[0_0_12px_rgba(255,255,255,0.6)]"
                    : "text-white hover:bg-white hover:text-[#631529] hover:shadow-[0_0_12px_rgba(255,255,255,0.5)]"
                }
              `
              }
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
