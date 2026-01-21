import {
  MapPin,
  Phone,
  Mail,
  ArrowUp,
} from "lucide-react";

// import appStore from "../assets/appstore.png";
// import playStore from "../assets/playstore.png";
// import qr from "../assets/qr.png";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 border-t">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            {[
              "Home",
              "Blog",
              "About Us",
              "Contact Us",
              "Certificate Tracking",
            ].map((item) => (
              <li
                key={item}
                className="hover:text-[#631529] transition cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="flex gap-3 mt-6">
            {/* <img src={appStore} alt="App Store" className="h-10" />
            <img src={playStore} alt="Play Store" className="h-10" /> */}
          </div>
        </div>

        {/* Courses */}
        <div>
          <h4 className="font-semibold text-lg mb-6">Courses</h4>
          <ul className="space-y-3 text-sm">
            {[
              "Aesthetic",
              "Beauty",
              "Combo Cosmetology",
              "Spa",
              "Courses-on-EMI",
              "View More",
            ].map((item) => (
              <li
                key={item}
                className="hover:text-[#631529] transition cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Office Canada */}
        <div>
          <h4 className="font-semibold text-lg mb-6 flex items-center gap-2">
            🇨🇦 Office Canada
          </h4>

          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} />
              <span>
                312-17750, 65A Ave, Surrey, BC, V3S 5N4, Canada
                <br />
                <span className="text-xs text-gray-500">
                  (PTIRU Approved)
                </span>
              </span>
            </li>

            <li className="flex gap-3">
              <Phone size={18} /> +1 (604)-698-9168
            </li>

            <li className="flex gap-3">
              <Phone size={18} /> +1 (604)-575-7475
            </li>

            <li className="flex gap-3">
              <Mail size={18} /> info@orane.ca
            </li>
          </ul>
        </div>

        {/* Office India */}
        <div>
          <h4 className="font-semibold text-lg mb-6 flex items-center gap-2">
            🇮🇳 Office India
          </h4>

          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} />
              <span>
                SCO 88–92 Sector 82, JLPL Industrial Area,
                Airport Road, Sahibzada Ajit Singh Nagar,
                Punjab 140308
              </span>
            </li>

            <li className="flex gap-3">
              <Mail size={18} /> info@orane.com
            </li>

            <li className="flex gap-3">
              <Phone size={18} /> +91 8872 500 500
            </li>
          </ul>

          <div className="mt-6">
            {/* <img src={qr} alt="QR Code" className="h-24" /> */}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">

          <p>
            © 2026 Orane International Private Limited. All Rights Reserved.
            <br />
            Website designed by{" "}
            <span className="text-[#631529] font-medium">
              Steline Infotech
            </span>
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 text-gray-500">
            {["facebook", "x", "instagram", "youtube", "linkedin", "pinterest"].map(
              (icon) => (
                <div
                  key={icon}
                  className="w-9 h-9 rounded-full bg-gray-100
                  flex items-center justify-center
                  hover:bg-[#631529] hover:text-white transition cursor-pointer"
                >
                  {icon[0].toUpperCase()}
                </div>
              )
            )}
          </div>

          <div className="flex gap-6">
            <span className="cursor-pointer hover:text-[#631529]">
              Disclaimer
            </span>
            <span className="cursor-pointer hover:text-[#631529]">
              Privacy Policy
            </span>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="
          fixed bottom-6 right-6
          w-12 h-12 rounded-full
          bg-[#631529] text-white
          flex items-center justify-center
          shadow-lg hover:scale-110 transition
        "
      >
        <ArrowUp />
      </button>
    </footer>
  );
}
