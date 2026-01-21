import { useEffect, useState } from "react";
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

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#631529] shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          OraneStyle
        </div>

        {/* Links */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          <li className="hover:text-gray-200 transition">About Us <ChevronDown className="inline-block ml-1" /></li>
          <li className="hover:text-gray-200 transition">Courses <ChevronDown className="inline-block ml-1" /></li>
          <li className="hover:text-gray-200 transition">Franchise</li>
          <li className="hover:text-gray-200 transition">Location <ChevronDown className="inline-block ml-1" /></li>
            <li className="hover:text-gray-200 transition">Career <ChevronDown className="inline-block ml-1" /></li>
            <li className="hover:text-gray-200 transition">Blog <ChevronDown className="inline-block ml-1" /></li>
            <li className="hover:text-gray-200 transition">Contact Us</li>
            <li className="hover:text-gray-200 transition">Testimonal</li>
        </ul>
      </nav>
    </header>
  );
}
