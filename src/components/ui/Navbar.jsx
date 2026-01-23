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

  /* ✅ FIXED: dropdown only where needed */
  const navItems = [
    { name: "About Us", path: "/about-us" },
    { name: "Courses", path: "/courses", dropdown: true },
    { name: "Franchise", path: "/franchise" },
    { name: "Location", path: "/location" },
    { name: "Career", path: "/career" },
    { name: "Blog", path: "/blog" },
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
        <NavLink to="/" className={`text-2xl font-bold ${textColor}`}>
          PureReviev
        </NavLink>

        {/* ================= DESKTOP MENU ================= */}
        <ul className="hidden md:flex space-x-6 font-medium">
          {navItems.map((item) => (
            <li key={item.name} className="relative group">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg flex items-center gap-1 transition-all duration-300 ${
                    isActive
                      ? "bg-white text-[#631529] shadow-md"
                      : `${textColor} hover:bg-white hover:text-[#631529]`
                  }`
                }
              >
                {item.name}
                {item.dropdown && <ChevronDown size={16} />}
              </NavLink>

              {/* Desktop Courses Dropdown */}
              {item.name === "Courses" && (
                <div className="absolute left-0 top-full mt-2 hidden group-hover:grid grid-cols-2 min-w-[600px] bg-white text-[#631529] rounded-xl shadow-xl">
                  {coursesMenu.map((cat) => (
                    <div key={cat.heading} className="p-4 border-l first:border-l-0">
                      <h4 className="font-semibold mb-2">{cat.heading}</h4>
                      {cat.items.map((c) => (
                        <NavLink
                          key={c.name}
                          to={c.path}
                          className="block px-2 py-1 rounded hover:bg-[#fde7e3]"
                        >
                          {c.name}
                        </NavLink>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* ================= MOBILE BUTTON ================= */}
        <button className={`md:hidden ${textColor}`} onClick={() => setMobileOpen(true)}>
          <Menu size={26} />
        </button>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 ${mobileOpen ? "block" : "hidden"}`}
        onClick={() => setMobileOpen(false)}
      />

      {/* ================= MOBILE MENU ================= */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 bg-[#631529] text-white z-50 transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-white/20">
          <span className="font-semibold text-lg">Menu</span>
          <button onClick={() => setMobileOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="px-6 py-6 space-y-3">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.name}>
                <div className="flex gap-2">
                  {/* Navigate */}
                  <NavLink
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className="flex-1 px-4 py-2 rounded-lg hover:bg-white hover:text-[#631529]"
                  >
                    {item.name}
                  </NavLink>

                  {/* Dropdown Toggle */}
                  <button
                    onClick={() => toggleMobileDropdown(item.name)}
                    className="px-3 rounded-lg hover:bg-white/20"
                  >
                    <ChevronDown
                      className={`transition-transform ${
                        mobileDropdowns[item.name] ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                {mobileDropdowns[item.name] && (
                  <div className="pl-4 mt-2 border-l border-white/20">
                    {coursesMenu.map((cat) => (
                      <div key={cat.heading}>
                        <h4 className="text-sm font-semibold mt-2">{cat.heading}</h4>
                        {cat.items.map((c) => (
                          <NavLink
                            key={c.name}
                            to={c.path}
                            onClick={() => setMobileOpen(false)}
                            className="block px-4 py-2 rounded hover:bg-white hover:text-[#631529]"
                          >
                            {c.name}
                          </NavLink>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-2 rounded-lg hover:bg-white hover:text-[#631529]"
              >
                {item.name}
              </NavLink>
            )
          )}
        </div>
      </aside>
    </header>
  );
}
