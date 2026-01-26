import { useEffect, useState } from "react";
import {
  Building2,
  Users,
  TrendingUp,
  Award,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Wallet,
  LayoutDashboard,
  Megaphone,
  GraduationCap,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Calculator,
  Download,
  Check,
  Loader2,
  Phone,
} from "lucide-react";

import franchiseBg from "../assets/history.jpg";

/* ---------------- DATA ---------------- */

const benefits = [
  {
    icon: Award,
    title: "Established Brand Legacy",
    desc: "Partner with a 25-year-old market leader with 110+ academies globally.",
  },
  {
    icon: TrendingUp,
    title: "High ROI Business Model",
    desc: "Recession-proof education business with predictable growth.",
  },
  {
    icon: Users,
    title: "Comprehensive Support",
    desc: "End-to-end support from setup to operations.",
  },
  {
    icon: GraduationCap,
    title: "World-Class Curriculum",
    desc: "International certifications like CIDESCO & CIBTAC.",
  },
];

const supportSystem = [
  {
    title: "Pre-Opening Support",
    items: [
      "Site selection",
      "Interior guidelines",
      "Staff recruitment",
      "Equipment vendors",
    ],
  },
  {
    title: "Operational Support",
    items: [
      "SOPs",
      "ERP system",
      "Audits",
      "Curriculum upgrades",
    ],
  },
  {
    title: "Marketing Support",
    items: [
      "National campaigns",
      "Digital lead generation",
      "Social creatives",
      "Local marketing",
    ],
  },
  {
    title: "Training Support",
    items: [
      "Train-the-trainer",
      "Sales training",
      "Center leadership",
      "Soft skills",
    ],
  },
];

const faqs = [
  {
    q: "What is the minimum area required?",
    a: "1500–2500 sq. ft. carpet area is recommended.",
  },
  {
    q: "Is prior experience required?",
    a: "No. Complete training & support is provided.",
  },
  {
    q: "Expected ROI?",
    a: "Break-even typically within 18–24 months.",
  },
  {
    q: "Placement support?",
    a: "Central placement cell + local tie-ups.",
  },
];

const steps = [
  { num: "01", title: "Apply", desc: "Submit inquiry form" },
  { num: "02", title: "Connect", desc: "Initial discussion" },
  { num: "03", title: "Evaluate", desc: "Site & feasibility" },
  { num: "04", title: "Sign", desc: "Agreement & fee" },
  { num: "05", title: "Launch", desc: "Training & opening" },
];

/* ---------------- COMPONENT ---------------- */

export default function FranchisePage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [calcFee, setCalcFee] = useState(50000);
  const [calcStudents, setCalcStudents] = useState(10);
  const [estimatedRevenue, setEstimatedRevenue] = useState(0);

  const [formStatus, setFormStatus] = useState("idle");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setEstimatedRevenue(calcStudents * calcFee * 12);
  }, [calcStudents, calcFee]);

  const scrollToForm = () => {
    document
      .getElementById("inquiry-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    /* 🔥 IMPORTANT: Padding added for sticky CTA */
    <div className="relative pb-28 md:pb-0">
      {/* ---------------- HERO ---------------- */}
      <section className="relative pt-32 pb-20 bg-[#2a0a12] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src={franchiseBg}
            alt=""
            className="w-full h-full object-cover grayscale"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Partner with India’s <span className="text-pink-400">Largest</span>{" "}
            Beauty Academy
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
            Build a profitable education business with PureRevive.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={scrollToForm}
              className="bg-white text-[#631529] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition"
            >
              Become a Partner <ArrowRight className="inline ml-2" />
            </button>
            <button className="border border-white px-8 py-4 rounded-full">
              <Download className="inline mr-2" /> Download FIM
            </button>
          </div>
        </div>
      </section>

      {/* ---------------- ROI ---------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif font-bold mb-8">
            ROI Calculator
          </h2>

          <div className="bg-[#631529] text-white rounded-3xl p-10">
            <p className="mb-4">Estimated Annual Revenue</p>
            <h3 className="text-4xl font-bold mb-6">
              ₹{estimatedRevenue.toLocaleString()}
            </h3>

            <div className="space-y-6">
              <input
                type="range"
                min="5"
                max="100"
                step="5"
                value={calcStudents}
                onChange={(e) => setCalcStudents(+e.target.value)}
                className="w-full accent-white"
              />
              <input
                type="range"
                min="20000"
                max="150000"
                step="5000"
                value={calcFee}
                onChange={(e) => setCalcFee(+e.target.value)}
                className="w-full accent-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- FORM ---------------- */}
      <section
        id="inquiry-form"
        className="py-20 bg-[#631529] text-white scroll-mt-28"
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Start Your Success Story
          </h2>

          <button
            onClick={() => setFormStatus("success")}
            className="bg-white text-[#631529] px-8 py-4 rounded-full font-bold"
          >
            Simulate Submit
          </button>

          {formStatus === "success" && (
            <p className="mt-6 text-green-300">
              Application submitted successfully!
            </p>
          )}
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          {faqs.map((f, i) => (
            <div key={i} className="border rounded-xl mb-4">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex justify-between p-5 font-bold"
              >
                {f.q}
                {openFaq === i ? <ChevronUp /> : <ChevronDown />}
              </button>
              {openFaq === i && (
                <div className="p-5 pt-0 text-gray-600">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- MOBILE STICKY CTA (FIXED) ---------------- */}
      {formStatus !== "success" && (
        <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-white border-t shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
          <div className="flex gap-3 p-4 pb-[calc(env(safe-area-inset-bottom)+1rem)]">
            <button
              onClick={scrollToForm}
              className="flex-1 bg-[#631529] text-white py-3 rounded-full font-bold"
            >
              Apply Now
            </button>
            <a
              href="tel:+919225527523"
              className="bg-gray-100 p-3 rounded-full text-[#631529]"
            >
              <Phone />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
