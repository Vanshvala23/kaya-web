import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({});
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    { name: "About Us", path: "/about-us" },
    { name: "Courses", path: "/courses", dropdown: true },
    { name: "Franchise", path: "/franchise" },
    { name: "Location", path: "/location", dropdown: true },
    { name: "Career", path: "/career", dropdown: true },
    { name: "Blog", path: "/blog", dropdown: true },
    { name: "Contact Us", path: "/contact" },
    { name: "Testimonials", path: "/testimonials" },
  ];

  const coursesMenu = [
    {
      heading: "Advanced Aesthetic Courses",
      items: [
        { name: "Aesthetic", path: "/courses/aesthetic" },
        { name: "Beauty", path: "/courses/beauty" },
        { name: "Combo Cosmetology", path: "/courses/combo-cosmetology" },
        { name: "Hair", path: "/courses/hair" },
        { name: "Korean Makeup", path: "/courses/korean-makeup" },
        { name: "Master Educator Programme", path: "/courses/master-educator" },
        { name: "Nail", path: "/courses/nail" },
        { name: "Salon Management", path: "/courses/salon-management" },
      ],
    },
    {
      heading: "Certification & Other Courses",
      items: [
        { name: "Aesthetic", path: "/courses/aesthetic" },
        { name: "B.VOC Degree Cosmetology", path: "/courses/bvoc" },
        { name: "Courses-on-EMI", path: "/courses/courses-on-emi" },
        { name: "International Certification", path: "/courses/international" },
        { name: "Makeup", path: "/courses/makeup" },
        { name: "Mehndi", path: "/courses/mehndi" },
        { name: "Nutrition", path: "/courses/nutrition" },
        { name: "Spa", path: "/courses/spa" },
      ],
    },
  ];

  const toggleMobileDropdown = (name) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navbarBg}`}>
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <NavLink
          to="/"
          className={`text-2xl font-bold tracking-wide transition-all duration-300 ${textColor}`}
        >
          OraneStyle
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium relative">
          {navItems.map((item, index) => (
            <li key={index} className="relative group">
              <NavLink
                to={item.path}
                end
                className={({ isActive }) =>
                  `relative px-4 py-2 rounded-lg flex items-center gap-1 transition-all duration-300 group
                  ${
                    isActive
                      ? "bg-white text-[#631529] shadow-[0_0_12px_rgba(255,255,255,0.6)] scale-105"
                      : `${textColor} hover:bg-white hover:text-[#631529] hover:shadow-[0_0_18px_rgba(255,255,255,0.5)] hover:scale-105`
                  }`
                }
              >
                <span className="flex items-center gap-1">
                  {item.name}
                  {item.dropdown && (
                    <ChevronDown
                      size={16}
                      className="transition-transform duration-300 group-hover:rotate-180 group-hover:text-[#631529]"
                    />
                  )}
                </span>
              </NavLink>

              {item.name === "Courses" && (
                <div className="absolute top-full left-0 mt-2 hidden group-hover:grid bg-white text-[#631529] rounded-lg shadow-2xl min-w-[600px] z-50 overflow-hidden grid-cols-2 transition-all duration-300">
                  {coursesMenu.map((category, idx) => (
                    <div key={idx} className="p-4 border-l first:border-l-0">
                      <h4 className="text-sm font-semibold mb-2">{category.heading}</h4>
                      {category.items.map((course, i) => (
                        <NavLink
                          key={i}
                          to={course.path}
                          className="block px-2 py-1 text-sm rounded hover:bg-[#fde7e3] hover:text-[#631529] transition-colors duration-200"
                        >
                          {course.name}
                        </NavLink>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button className={`md:hidden p-2 transition ${textColor}`} onClick={() => setMobileOpen(true)}>
          <Menu size={26} />
        </button>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Menu */}
      <aside
        className={`fixed top-0 right-0 h-screen w-72 bg-[#631529] text-white z-50 transform transition-transform duration-300 ease-in-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/20">
          <span className="text-lg font-semibold">Menu</span>
          <button onClick={() => setMobileOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="px-6 py-6 space-y-3">
          {navItems.map((item, index) => (
            <div key={index}>
              {/* If dropdown, use button to toggle, else use NavLink */}
              {!item.dropdown ? (
                <NavLink
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                    location.pathname === item.path
                      ? "bg-white text-[#631529] shadow-[0_0_12px_rgba(255,255,255,0.6)]"
                      : "text-white hover:bg-white hover:text-[#631529] hover:shadow-[0_0_12px_rgba(255,255,255,0.5)]"
                  }`}
                >
                  {item.name}
                </NavLink>
              ) : (
                <>
                  <button
                    onClick={() => toggleMobileDropdown(item.name)}
                    className={`w-full text-left px-4 py-2 rounded-lg flex items-center justify-between transition-all duration-300 ${
                      location.pathname === item.path
                        ? "bg-white text-[#631529] shadow-[0_0_12px_rgba(255,255,255,0.6)]"
                        : "text-white hover:bg-white hover:text-[#631529] hover:shadow-[0_0_12px_rgba(255,255,255,0.5)]"
                    }`}
                  >
                    {item.name}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        mobileDropdowns[item.name] ? "rotate-180 text-[#631529]" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown items */}
                  {mobileDropdowns[item.name] && (
                    <div className="pl-4 mt-1 space-y-1 border-l border-white/20">
                      {item.name === "Courses"
                        ? coursesMenu.map((category, idx) => (
                            <div key={idx} className="mb-2">
                              <h4 className="text-sm font-semibold mb-1">{category.heading}</h4>
                              {category.items.map((course, i) => (
                                <NavLink
                                  key={i}
                                  to={course.path}
                                  onClick={() => setMobileOpen(false)}
                                  className="block px-4 py-2 rounded-md text-white hover:bg-white hover:text-[#631529] transition-all duration-200"
                                >
                                  {course.name}
                                </NavLink>
                              ))}
                            </div>
                          ))
                        : null}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </aside>
    </header>
  );
}
