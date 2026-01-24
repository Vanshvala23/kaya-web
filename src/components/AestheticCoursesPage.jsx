import { useEffect, useState } from "react";
import {
  Sparkles,
  UserCheck,
  Award,
  Microscope,
  Clock,
  ChevronDown,
  Download,
  X,
  BookOpen,
  Globe,
  CheckCircle2,
  Briefcase,
  Calculator
} from "lucide-react";

/* ===================== DATA ===================== */

const facultyProfile = {
  name: "Jouee Patwardhan",
  designation: "International Aesthetic Educator | CIDESCO Trainer",
  image:
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
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
    { title: "Anatomy & Physiology of Skin", content: "Detailed study of skin layers, types, and conditions." },
    { title: "Chemical Peels", content: "Glycolic, Salicylic, Lactic & TCA peels with safety protocols." },
    { title: "Laser Aesthetics", content: "IPL, Diode, Nd:YAG lasers with hands-on safety training." },
    { title: "Advanced Facials", content: "Hydra, Galvanic, Microcurrent & Ultrasonic devices." },
    { title: "Anti-Ageing Treatments", content: "Microneedling, RF basics & non-surgical lifts." },
    { title: "Client & Clinic Management", content: "Consultation, consent, pricing & clinic setup." }
  ],
  career: [
    { role: "Clinical Cosmetologist", salary: "₹4L – 8L p.a." },
    { role: "Laser Technician", salary: "₹3L – 6L p.a." },
    { role: "Medi-Spa Manager", salary: "₹5L – 10L p.a." },
    { role: "Skin Aesthetician", salary: "₹3.5L – 7L p.a." }
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

const courseBanner =
  "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=1920";

/* ===================== MODAL ===================== */

const BrochureModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full relative overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-black/20 p-2 rounded-full text-white"
        >
          <X size={18} />
        </button>

        <div className="bg-[#631529] p-8 text-white text-center">
          <Download size={32} className="mx-auto mb-4" />
          <h3 className="text-2xl font-bold">Download Syllabus</h3>
          <p className="text-sm text-white/80 mt-2">
            Get complete curriculum instantly
          </p>
        </div>

        <div className="p-6 space-y-4">
          <input className="input" placeholder="Full Name" />
          <input className="input" placeholder="Phone Number" />
          <input className="input" placeholder="Email Address" />
          <button
            onClick={onClose}
            className="w-full bg-[#631529] text-white py-3 rounded-xl font-bold"
          >
            Download Now
          </button>
        </div>
      </div>
    </div>
  );
};

/* ===================== PAGE ===================== */

export default function AestheticCoursesPage() {
  const [activeModule, setActiveModule] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const [downPayment, setDownPayment] = useState(
    aestheticSpecifics.fees.minDownPayment
  );
  const [months, setMonths] = useState(6);

  const loan = aestheticSpecifics.fees.total - downPayment;
  const emi = Math.round(loan / months);

  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <BrochureModal open={modalOpen} onClose={() => setModalOpen(false)} />

      {/* HERO */}
      <section className="relative min-h-[85vh] md:h-[90vh] flex items-center text-white">
        <img
          src={courseBanner}
          className="absolute inset-0 w-full h-full object-cover"
          alt=""
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative max-w-7xl mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold">
            Master <span className="text-pink-400">Clinical Aesthetics</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-2xl max-w-2xl">
            Advanced lasers, peels & skin therapies by global experts.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setModalOpen(true)}
              className="bg-white text-[#631529] px-8 py-4 rounded-full font-bold flex items-center gap-2 justify-center"
            >
              <Download size={18} /> Download Brochure
            </button>
            <button className="border border-white px-8 py-4 rounded-full font-bold">
              Book Free Demo
            </button>
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <div className="relative md:sticky md:top-24">
            <h2 className="text-3xl md:text-5xl font-serif font-bold">
              What You Will Master
            </h2>
            <p className="mt-4 text-gray-600">
              Industry-aligned curriculum with hands-on exposure.
            </p>
          </div>

          <div className="space-y-4">
            {aestheticSpecifics.modules.map((m, i) => (
              <div key={i} className="border rounded-2xl overflow-hidden">
                <button
                  onClick={() => setActiveModule(i)}
                  className="w-full flex justify-between items-center p-4 sm:p-6 font-bold"
                >
                  {m.title}
                  <ChevronDown
                    className={`transition ${
                      activeModule === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`px-6 text-sm text-gray-600 transition-all ${
                    activeModule === i
                      ? "max-h-[500px] pb-6 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMI */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 bg-gray-900 text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <h3 className="text-3xl font-serif font-bold mb-4">
              Fee Calculator
            </h3>
            <p className="text-gray-400">0% Interest EMI available</p>
          </div>

          <div className="bg-white text-gray-900 rounded-2xl p-6 md:w-1/2">
            <div className="mb-4 font-bold text-[#631529] flex gap-2">
              <Calculator /> EMI Estimate
            </div>

            <input
              type="range"
              min="10000"
              max="115000"
              step="5000"
              value={downPayment}
              onChange={(e) => setDownPayment(+e.target.value)}
              className="w-full accent-[#631529]"
            />

            <div className="flex gap-2 my-4">
              {[3, 6, 9, 12].map((m) => (
                <button
                  key={m}
                  onClick={() => setMonths(m)}
                  className={`flex-1 py-2 rounded-lg border ${
                    months === m
                      ? "bg-[#631529] text-white"
                      : "border-gray-300"
                  }`}
                >
                  {m}M
                </button>
              ))}
            </div>

            <div className="text-center bg-gray-50 p-4 rounded-xl">
              <p className="text-xs text-gray-500">Monthly EMI</p>
              <p className="text-2xl font-bold text-[#631529]">
                ₹ {emi.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#faf7f7]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-bold text-center mb-10">Common Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <button onClick={() => toggleFaq(index)} className="w-full flex justify-between p-6 text-left font-bold text-gray-900 hover:text-[#631529]">
                  {faq.q} <ChevronDown className={`transition-transform ${activeFaq === index ? "rotate-180" : ""}`} />
                </button>
                {activeFaq === index && <div className="px-6 pb-6 text-gray-600 text-sm">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="bg-[#631529] rounded-[40px] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 relative z-10">Start Your Journey Today</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <a href="/contact" className="bg-white text-[#631529] px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition shadow-lg">Apply Now</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}