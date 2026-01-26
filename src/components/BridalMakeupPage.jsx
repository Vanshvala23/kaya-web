import { useEffect, useState } from "react";
import {
  Sparkles, Heart, Crown, Calendar, Download, X,
  CheckCircle2, Package, Phone, ArrowRight,
  ChevronDown, Star, Camera, Gem
} from "lucide-react";

import bridal1 from "../assets/bridal1.jpg";

// DATA
const bridalSpecifics = {
  fees: { total: 65000, minDownPayment: 15000 },
  modules: [
    { title: "Bridal Skin Prep & Longevity", content: "Luxury skin prep, hydration layering, primers, and setting techniques to ensure 12+ hour flawless bridal makeup." },
    { title: "HD & Airbrush Base", content: "Color correction, HD foundations, airbrush finish, and flash-friendly techniques." },
    { title: "Traditional Indian Bridal Eyes", content: "Cut crease, smokey eyes, shimmer placement, lash mapping, and kajal techniques." },
    { title: "Bridal Contour & Highlight", content: "Face sculpting based on face shape, nose contouring, and glass-like highlights." },
    { title: "Lip Perfection", content: "Bridal nude & bold lips, lining, filling, and transfer-proof sealing." },
    { title: "Jewellery & Dupatta Setting", content: "Face framing, matha patti balance, nose ring placement, and bridal finishing touches." }
  ],
  kit: [
    { name: "HD Foundations", desc: "Multiple skin tones for Indian bridal coverage" },
    { name: "Luxury Eye Palettes", desc: "Warm & glam bridal shades" },
    { name: "Lashes & Tools", desc: "Premium lashes, curlers & adhesives" },
    { name: "Skin Prep Kit", desc: "Masks, serums & primers" }
  ],
  batches: [
    { id: 1, date: "Oct 15, 2025", type: "Weekend Batch", status: "Filling Fast" },
    { id: 2, date: "Nov 01, 2025", type: "Weekday Batch", status: "Open" }
  ]
};

const BrochureModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 relative max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4">
          <X />
        </button>

        <h3 className="text-xl md:text-2xl font-bold text-center mb-6">
          Bridal Makeup Brochure
        </h3>

        <form className="space-y-4">
          <input placeholder="Full Name" className="w-full border p-3 rounded-xl text-sm" />
          <input placeholder="Email" className="w-full border p-3 rounded-xl text-sm" />
          <input placeholder="Phone" className="w-full border p-3 rounded-xl text-sm" />
          <button className="w-full bg-[#7b1e3a] text-white py-3 rounded-xl font-bold">
            Download
          </button>
        </form>
      </div>
    </div>
  );
};

export default function BridalMakeupPage() {
  const [active, setActive] = useState(null);
  const [modal, setModal] = useState(false);
  const { fees, modules, kit, batches } = bridalSpecifics;

  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <BrochureModal open={modal} onClose={() => setModal(false)} />

      {/* HERO */}
      <section className="relative h-[75vh] md:h-[90vh] flex items-center text-white">
        <img
          src={bridal1}
         className="absolute inset-0 w-full h-full object-cover object-center md:object-[30%_10%] brightness-125"

          alt="Bridal"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#7b1e3a]/90 to-transparent"></div>

        <div className="relative z-10 max-w-6xl px-4 sm:px-6">
          <span className="bg-pink-600 text-xs px-4 py-1 rounded-full">
            BRIDAL SPECIAL
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-7xl font-serif font-bold mt-6 leading-tight">
            Professional <span className="text-pink-200">Bridal Makeup</span>
          </h1>

          <p className="mt-4 md:mt-6 max-w-xl text-sm md:text-base">
            Become a certified bridal makeup artist and master luxury bridal looks.
          </p>

          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setModal(true)}
              className="bg-white text-[#7b1e3a] px-8 py-3 rounded-full font-bold flex items-center justify-center gap-2"
            >
              <Download size={18} /> Brochure
            </button>

            <button className="border border-white px-8 py-3 rounded-full">
              Book Demo
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-12 md:py-16 bg-[#fff5f7]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
          {[{ icon: Crown, title: "Luxury Looks" }, { icon: Camera, title: "HD Finish" }, { icon: Heart, title: "Bride Confidence" }].map((f, i) => (
            <div key={i} className="bg-white p-6 md:p-8 rounded-3xl shadow">
              <f.icon className="mx-auto text-pink-600" size={32} />
              <h3 className="mt-4 font-bold">{f.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* MODULES */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
              Course Curriculum
            </h2>

            {modules.map((m, i) => (
              <div key={i} className="border rounded-2xl mb-4">
                <button
                  onClick={() => setActive(active === i ? null : i)}
                  className="w-full flex justify-between items-center p-4 md:p-5 font-bold text-sm md:text-base"
                >
                  {m.title}
                  <ChevronDown className={`transition ${active === i ? "rotate-180" : ""}`} />
                </button>

                {active === i && (
                  <p className="p-4 md:p-5 text-xs md:text-sm text-gray-600">
                    {m.content}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div>
            <div className="bg-gray-900 text-white p-6 md:p-8 rounded-3xl mb-6">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <Package /> Bridal Kit
              </h3>
              {kit.map((k, i) => (
                <p key={i} className="text-sm">
                  • {k.name} – {k.desc}
                </p>
              ))}
            </div>

            <div className="bg-gray-100 p-5 md:p-6 rounded-3xl">
              <h4 className="font-bold text-sm md:text-base">Course Fee</h4>
              <p className="text-2xl md:text-3xl font-extrabold text-[#7b1e3a]">
                ₹ {fees.total.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BATCHES */}
      <section className="py-14 md:py-20 bg-[#faf7f7]">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8 md:mb-10">
            Upcoming Batches
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {batches.map(b => (
              <div key={b.id} className="bg-white p-6 rounded-2xl shadow">
                <h4 className="font-bold">{b.date}</h4>
                <p className="text-sm">{b.type}</p>
                <span className="text-xs text-green-600 font-bold">
                  {b.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOBILE CTA */}
      <div className="fixed bottom-0 left-0 w-full bg-white p-4 flex gap-4 md:hidden shadow-lg">
        <a
          href="tel:+919225527523"
          className="flex-1 bg-gray-100 py-3 rounded-xl font-bold flex items-center justify-center gap-2"
        >
          <Phone /> Call
        </a>

        <button
          onClick={() => setModal(true)}
          className="flex-1 bg-[#7b1e3a] text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2"
        >
          <ArrowRight /> Apply
        </button>
      </div>
    </>
  );
}
