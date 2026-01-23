import { useEffect, useState } from "react";
import { MapPin, Phone, Mail, ArrowUp } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowArrow(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "Blog", path: "/blog" },
    { label: "About Us", path: "/about-us" },
    { label: "Contact Us", path: "/contact" },
    { label: "Certificate Tracking", path: "/certificate-tracking" },
  ];

  const courses = [
    { label: "Aesthetic", path: "/courses/aesthetic" },
    { label: "Beauty", path: "/courses/beauty" },
    { label: "Combo Cosmetology", path: "/courses/cosmetology" },
    { label: "Spa", path: "/courses/spa" },
    { label: "Courses-on-EMI", path: "/emi" },
    { label: "View More", path: "/courses" },
  ];

  const socialLinks = [
    { name: "Facebook", url: "https://facebook.com" },
    { name: "X", url: "https://x.com" },
    { name: "Instagram", url: "https://instagram.com" },
    { name: "YouTube", url: "https://youtube.com" },
    { name: "LinkedIn", url: "https://linkedin.com" },
    { name: "Pinterest", url: "https://pinterest.com" },
  ];

  return (
    <footer className="bg-white text-gray-800 border-t relative">
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* QUICK LINKS */}
        <div>
          <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            {quickLinks.map(link => (
              <li key={link.label}>
                <NavLink
                  to={link.path}
                  className="hover:text-[#631529] transition"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* COURSES */}
        <div>
          <h4 className="font-semibold text-lg mb-6">Courses</h4>
          <ul className="space-y-3 text-sm">
            {courses.map(course => (
              <li key={course.label}>
                <NavLink
                  to={course.path}
                  className="hover:text-[#631529] transition"
                >
                  {course.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* OFFICE CANADA */}
        <div>
          <h4 className="font-semibold text-lg mb-6">🇨🇦 Office Canada</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} />
              <span>
                312-17750, 65A Ave, Surrey, BC, V3S 5N4
                <br />
                <span className="text-xs text-gray-500">(PTIRU Approved)</span>
              </span>
            </li>
            <li className="flex gap-3"><Phone size={18} /> +1 (604)-123-456</li>
            <li className="flex gap-3"><Mail size={18} /> info@PureReviev.ca</li>
          </ul>
        </div>

        {/* OFFICE INDIA */}
        <div>
          <h4 className="font-semibold text-lg mb-6">🇮🇳 Office India</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} />
              <span>
                SCO 88–92 Sector 82, JLPL Industrial Area,
                Airport Road, Punjab 140308
              </span>
            </li>
            <li className="flex gap-3"><Mail size={18} /> info@PureReviev.com</li>
            <li className="flex gap-3"><Phone size={18} /> +91 123 456 7890</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">

          <p>
            © 2026 PureReviev International Pvt. Ltd.
            <br />
            Designed by <span className="text-[#631529] font-medium">Steline Infotech</span>
          </p>

          {/* SOCIAL LINKS */}
          <div className="flex gap-3">
            {socialLinks.map(s => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center
                hover:bg-[#631529] hover:text-white transition font-bold"
              >
                {s.name[0]}
              </a>
            ))}
          </div>

          <div className="flex gap-4">
            <NavLink to="/disclaimer" className="hover:text-[#631529]">Disclaimer</NavLink>
            <NavLink to="/privacy-policy" className="hover:text-[#631529]">Privacy Policy</NavLink>
          </div>
        </div>
      </div>

      {/* BACK TO TOP */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 left-6 w-12 h-12 rounded-full bg-[#8b2e3e] text-white
        flex items-center justify-center transition-all
        ${showArrow ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <ArrowUp />
      </button>
    </footer>
  );
}
