import { useEffect, useState } from "react";
import { MapPin, Phone, Mail, ArrowUp, MessageSquare, X,Facebook,Instagram } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const [showArrow, setShowArrow] = useState(false);
  const [chatOpen, setChatOpen] = useState(false); // Chat box open state
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const handleScroll = () => setShowArrow(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sendMessage = () => {
    if (!input.trim()) return;
    // Add user message
    setMessages([...messages, { sender: "user", text: input }]);
    // Simulate AI response (replace with real AI API call)
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: "ai", text: `You said: "${input}"` }]);
    }, 500);
    setInput("");
  };

  return (
    <footer className="bg-white text-gray-800 border-t relative">
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* QUICK LINKS */}
        <div>
          <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            {[
              { label: "Home", path: "/" },
              { label: "Blog", path: "/blog" },
              { label: "About Us", path: "/about-us" },
              { label: "Contact Us", path: "/contact" },
              // { label: "Certificate Tracking", path: "/certificate-tracking" },
            ].map(link => (
              <li key={link.label}>
                <NavLink to={link.path} className="hover:text-[#631529] transition">
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
            {[
              { label: "Aesthetic", path: "/courses/aesthetic" },
              { label: "Beauty", path: "/courses/beauty" },
              { label: "Combo Cosmetology", path: "/courses/combo-cosmetology" },
              { label: "Spa", path: "/courses/spa" },
              { label: "Courses-on-EMI", path: "/courses/courses-on-emi" },
              { label: "View More", path: "/courses" },
            ].map(course => (
              <li key={course.label}>
                <NavLink to={course.path} className="hover:text-[#631529] transition">
                  {course.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* OFFICE INDIA */}
        <div>
          <h4 className="font-semibold text-lg mb-6">🇮🇳 Office India</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} />
              <span>
                Vaishalli International's PURE REVIVE Head Office
40/6, Karve Rd, near Prime Furnishing, opposite Sonal Hall, Bhonde Colony, Erandwane, Pune, Maharashtra 411004, India
              </span>
            </li>
            <li className="flex gap-3"><Mail size={18} /> info@PureRevive.com</li>
            <li className="flex gap-3"><Phone size={18} /> +91 9225527523</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>
            © 2026 PureRevive International Pvt. Ltd.
            <br />
            Designed by <span className="text-[#631529] font-medium">Steline Infotech</span>
          </p>

          <div className="flex gap-3">
            {/* Facebook */}
            <a
              href="https://facebook.com/purerevive99"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#ffe4e1] text-[#631529]
                flex items-center justify-center
                hover:bg-[#631529] hover:text-white
                transition-all duration-300 hover:scale-110"
            >
              <Facebook size={18} />
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/purerevive_99"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#ffe4e1] text-[#631529]
                flex items-center justify-center
                hover:bg-[#631529] hover:text-white
                transition-all duration-300 hover:scale-110"
            >
              <Instagram size={18} />
            </a>
          </div>


          <div className="flex gap-4">
            {/* <NavLink to="/disclaimer" className="hover:text-[#631529]">Disclaimer</NavLink>
            <NavLink to="/privacy-policy" className="hover:text-[#631529]">Privacy Policy</NavLink> */}
          </div>
        </div>
      </div>

      {/* BACK TO TOP BUTTON */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 left-6 w-12 h-12 rounded-full bg-[#8b2e3e] text-white
          flex items-center justify-center transition-all duration-300
          ${showArrow ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}
