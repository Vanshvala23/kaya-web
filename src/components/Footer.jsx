import { useEffect, useState } from "react";
import { MapPin, Phone, Mail, ArrowUp, MessageSquare, X } from "lucide-react";
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
              { label: "Certificate Tracking", path: "/certificate-tracking" },
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
              { label: "Combo Cosmetology", path: "/courses/cosmetology" },
              { label: "Spa", path: "/courses/spa" },
              { label: "Courses-on-EMI", path: "/emi" },
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
            <li className="flex gap-3"><Mail size={18} /> info@PureRevive.ca</li>
          </ul>
        </div>

        {/* OFFICE INDIA */}
        <div>
          <h4 className="font-semibold text-lg mb-6">🇮🇳 Office India</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} />
              <span>
                SCO 88–92 Sector 82, JLPL Industrial Area, Airport Road, Punjab 140308
              </span>
            </li>
            <li className="flex gap-3"><Mail size={18} /> info@PureRevive.com</li>
            <li className="flex gap-3"><Phone size={18} /> +91 123 456 7890</li>
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
            {[
              { name: "Facebook", url: "https://facebook.com" },
              { name: "X", url: "https://x.com" },
              { name: "Instagram", url: "https://instagram.com" },
              { name: "YouTube", url: "https://youtube.com" },
              { name: "LinkedIn", url: "https://linkedin.com" },
              { name: "Pinterest", url: "https://pinterest.com" },
            ].map(s => (
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

      {/* BACK TO TOP BUTTON */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 left-6 w-12 h-12 rounded-full bg-[#8b2e3e] text-white
          flex items-center justify-center transition-all duration-300
          ${showArrow ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <ArrowUp size={20} />
      </button>

      {/* ASK AI BUTTON */}
      <button
        onClick={() => setChatOpen(true)}
        className={`fixed bottom-6 right-6 px-4 h-14 rounded-full bg-[#631529] text-white
          flex items-center justify-center gap-2 transition-all duration-300
          hover:bg-[#4a101f] hover:scale-110 hover:shadow-[0_0_25px_rgba(99,21,41,0.6)]
          ${showArrow ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <MessageSquare size={20} />
        <span className="font-medium">Ask AI</span>
      </button>

      {/* AI CHAT BOX MODAL */}
      {chatOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white border rounded-xl shadow-lg flex flex-col overflow-hidden z-50">
          {/* Header */}
          <div className="bg-[#631529] text-white flex justify-between items-center px-4 py-2">
            <span>AI Chat</span>
            <button onClick={() => setChatOpen(false)}><X /></button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-2 overflow-y-auto space-y-2">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`px-2 py-1 rounded-lg ${
                  msg.sender === "user" ? "bg-[#8b2e3e] text-white self-end" : "bg-gray-200 self-start text-gray-800"
                } max-w-[75%]`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-2 border-t flex gap-2">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && sendMessage()}
              className="flex-1 border rounded-lg px-2 py-1 focus:outline-none focus:ring-1 focus:ring-[#631529]"
              placeholder="Type a message..."
            />
            <button
              onClick={sendMessage}
              className="bg-[#631529] text-white px-4 py-1 rounded-lg hover:bg-[#4a101f]"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
