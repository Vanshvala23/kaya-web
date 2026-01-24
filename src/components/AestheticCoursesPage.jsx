import { useEffect, useState } from "react";
import { 
  Sparkles, UserCheck, Award, Microscope, GraduationCap, 
  Clock, ChevronDown, Calendar, Download, X, Image as ImageIcon, 
  BookOpen, Globe, CheckCircle2, Briefcase, Calculator
} from "lucide-react";

/* ---------------- DATA ---------------- */

const facultyProfile = {
  name: "Jouee Patwardhan",
  designation: "International Aesthetic Educator | CIDESCO Trainer",
  experience: "30+ Years",
  location: "India",
  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
  summary:
    "Highly accomplished international aesthetic educator with over 30 years of experience in beauty therapy, skin aesthetics, wellness, and advanced cosmetology education.",
  qualifications: [
    "CIDESCO International Diploma – Aromatherapy",
    "CIDESCO International Diploma – Spa Therapy",
    "CIDESCO International Diploma – Media Makeup",
    "CIBTAC International Diploma – Facial Electricals",
    "City & Guilds International Diploma – Hair Dressing"
  ],
  expertise: [
    "Advanced Skin Aesthetics",
    "Clinical & Medical Cosmetology",
    "Aromatherapy & Holistic Wellness",
    "Spa Therapy & Luxury Spa Management",
    "Facial Electricals & Advanced Devices"
  ]
};

const aestheticSpecifics = {
  fees: { total: 125000, minDownPayment: 25000 },
  modules: [
    { title: "Anatomy & Physiology of Skin", content: "Skin layers, types & analysis." },
    { title: "Chemical Peels", content: "Glycolic, Salicylic, Lactic & TCA peels." },
    { title: "Laser Aesthetics", content: "IPL, Diode & Nd:YAG lasers." },
    { title: "Advanced Facials", content: "Hydra, Galvanic & Ultrasonic." },
    { title: "Anti-Ageing", content: "Microneedling & RF basics." },
    { title: "Client & Business", content: "Consultation & clinic setup." }
  ],
  career: [
    { role: "Clinical Cosmetologist", salary: "₹ 4L - 8L p.a." },
    { role: "Laser Technician", salary: "₹ 3L - 6L p.a." },
    { role: "Medi-Spa Manager", salary: "₹ 5L - 10L p.a." }
  ],
  batches: [
    { date: "Oct 15, 2025", type: "Weekday", status: "Filling Fast", seats: 3 },
    { date: "Nov 01, 2025", type: "Weekend", status: "Open", seats: 12 }
  ],
  gallery: [
    "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c",
    "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9",
    "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881",
    "https://images.unsplash.com/photo-1519415943484-9fa1873496d4"
  ]
};

const courseData = {
  title: "Skin & Aesthetics",
  banner:
    "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=1920"
};

/* ---------------- COMPONENT ---------------- */

export default function AestheticCoursesPage() {
  const [activeModule, setActiveModule] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);
  const [downPayment, setDownPayment] = useState(25000);
  const [months, setMonths] = useState(6);

  const loan = aestheticSpecifics.fees.total - downPayment;
  const emi = Math.round(loan / months);

  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[85vh] md:h-[90vh] flex items-center text-white">
        <img src={courseData.banner} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold leading-tight">
            Master <span className="text-pink-400">Clinical Aesthetics</span>
          </h1>
          <p className="text-base sm:text-lg md:text-2xl mt-4 max-w-2xl">
            Learn lasers, peels & advanced skin therapies.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-[#631529] px-8 py-4 rounded-full font-bold">
              Download Brochure
            </button>
            <button className="border border-white px-8 py-4 rounded-full">
              Book Free Demo
            </button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#631529] text-white py-10 mx-4 md:mx-10 rounded-3xl -mt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:divide-x divide-white/20">
          {["8+ Modules", "100% Practical", "CIDESCO", "Global Jobs"].map((s, i) => (
            <div key={i} className="px-2">
              <div className="text-3xl font-bold">{s.split(" ")[0]}</div>
              <div className="text-xs uppercase">{s.split(" ").slice(1).join(" ")}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MODULES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <div className="relative md:sticky md:top-24">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
              What You Will Master
            </h2>
            <p className="text-gray-600">
              Industry-aligned curriculum from basics to advanced clinical practice.
            </p>
          </div>

          <div className="space-y-4">
            {aestheticSpecifics.modules.map((m, i) => (
              <div key={i} className="border rounded-2xl">
                <button
                  onClick={() => setActiveModule(activeModule === i ? null : i)}
                  className="w-full flex justify-between p-5 font-bold"
                >
                  {m.title}
                  <ChevronDown
                    className={`transition ${activeModule === i && "rotate-180"}`}
                  />
                </button>
                <div
                  className={`px-5 overflow-hidden transition-all ${
                    activeModule === i
                      ? "max-h-[500px] pb-5 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm text-gray-600">{m.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 bg-[#faf7f7]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {aestheticSpecifics.gallery.map((g, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-2xl h-40 sm:h-56 md:h-64 ${
                i === 0 ? "md:col-span-2 md:row-span-2 md:h-[520px]" : ""
              }`}
            >
              <img src={g} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* EMI */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gray-900 text-white rounded-3xl p-6 sm:p-8 md:p-14 flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h3 className="text-3xl font-bold">Fee Calculator</h3>
              <p className="text-gray-400 mt-2">0% Interest EMI</p>
            </div>
            <div className="bg-white text-gray-900 rounded-2xl p-6 md:w-1/2">
              <p className="font-bold mb-2">Monthly EMI</p>
              <div className="text-3xl font-bold text-[#631529]">
                ₹ {emi.toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-[#631529] text-white rounded-3xl p-8 sm:p-12 md:p-20">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
              Start Your Journey Today
            </h2>
            <a
              href="/contact"
              className="inline-block bg-white text-[#631529] px-10 py-4 rounded-full font-bold"
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
