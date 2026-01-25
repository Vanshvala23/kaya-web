import { useEffect, useState } from "react";
import { 
  Globe, Award, Plane, BookOpen, 
  ChevronDown, Download, X, CheckCircle2, 
  Phone, ArrowRight, MapPin, Briefcase, 
  Landmark, Stamp, FileText, Calculator,
  Coins, GraduationCap
} from "lucide-react";

// DATA 

const internationalSpecifics = {
  certifications: [
    {
      id: "cibtac",
      name: "CIBTAC (UK)",
      full: "Confederation of International Beauty Therapy and Cosmetology",
      origin: "United Kingdom 🇬🇧",
      validity: "Commonwealth (UK, Canada, Aus, NZ, Singapore)",
      desc: " Focused on high standards of therapy and spa management. Essential for UK work visas.",
      exam: {
        theory: "Multiple Choice Questions (45 mins)",
        practical: "3-hour Live Model Demonstration",
        passing: "60% minimum in both sections"
      }
    },
    {
      id: "cidesco",
      name: "CIDESCO (Zurich)",
      full: "Comité International d'Esthétique et de Cosmétologie",
      origin: "Switzerland 🇨🇭",
      validity: "Global (100+ Countries including USA & Europe)",
      desc: "The world's most prestigious qualification. The PhD of the beauty industry.",
      exam: {
        theory: "Thesis Project + Written Exam",
        practical: "6-hour Full Body & Face Treatment",
        passing: "70% minimum required"
      }
    }
  ],
  migrationSteps: [
    { step: "01", title: "Diploma Level 3/4", desc: "Complete your advanced course at PureReviev." },
    { step: "02", title: "Intl. Exam", desc: "Clear CIBTAC/CIDESCO practicals (External Examiner)." },
    { step: "03", title: "Portfolio", desc: "Build a digital portfolio of your case studies." },
    { step: "04", title: "Placement", desc: "Apply to our global partners (Steiner/Onboard Spa)." },
    { step: "05", title: "Visa", desc: "Use your certificate for Skilled Worker Visa points." }
  ],
  salaryData: {
    "India": { income: 30000, expense: 15000, currency: "₹" },
    "Dubai": { income: 180000, expense: 80000, currency: "₹ (conv.)" }, // Converted to INR approx
    "Canada": { income: 250000, expense: 120000, currency: "₹ (conv.)" },
    "UK": { income: 220000, expense: 100000, currency: "₹ (conv.)" }
  },
  partners: ["Steiner Cruises", "Urban Retreat Harrods", "Emirates Palace", "Four Seasons Global"],
  gallery: [
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600", // Graduation
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=600", // Team
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600", // Work Abroad
    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600"  // Exam
  ]
};

// COMPONENTS

// Unified Application & Brochure Modal 
const ApplicationModal = ({ isOpen, onClose, type }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSuccess(true); }, 1500);
  };

  const isApply = type === "apply";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="bg-white rounded-3xl w-full max-w-md relative overflow-hidden shadow-2xl">
        <button onClick={onClose} className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/20 text-white hover:bg-black/40"><X size={20}/></button>
        
        <div className={`p-8 text-white text-center bg-[#631529]`}>
          {isApply ? <Plane size={40} className="mx-auto mb-2 text-white" /> : <Globe size={40} className="mx-auto mb-2 text-yellow-400" />}
          <h3 className="text-xl font-bold">{isApply ? "Global Career Inquiry" : "Exam Guide"}</h3>
          <p className="text-xs text-white/80 mt-1">{isApply ? "Start your journey abroad" : "Download exam patterns & fees"}</p>
        </div>

        <div className="p-6">
          {success ? (
            <div className="text-center py-8 animate-in zoom-in">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600"><CheckCircle2 size={32} /></div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Success!</h4>
              <p className="text-gray-500 text-sm mb-6">{isApply ? "Our international placement cell will contact you." : "Guide sent to your email."}</p>
              <button onClick={onClose} className="w-full bg-gray-100 text-gray-900 py-3 rounded-xl font-bold">Close</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input required type="text" placeholder="Full Name" className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-[#631529] outline-none" />
              <input required type="email" placeholder="Email Address" className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-[#631529] outline-none" />
              <input required type="tel" placeholder="Mobile Number" className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-[#631529] outline-none" />
              <button disabled={loading} type="submit" className="w-full bg-[#631529] text-white py-3 rounded-xl font-bold hover:bg-[#4a101f] transition flex items-center justify-center gap-2">
                {loading ? "Processing..." : (isApply ? "Request Callback" : "Download Guide")}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default function InternationalCertificationPage() {
  const [modalType, setModalType] = useState(null); 
  const [activeTab, setActiveTab] = useState("cibtac");
  const [targetCountry, setTargetCountry] = useState("Canada");

  const { certifications, migrationSteps, partners, gallery, salaryData } = internationalSpecifics;

  // Savings Calculator Logic
  const savings = salaryData[targetCountry].income - salaryData[targetCountry].expense;
  const indiaSavings = salaryData["India"].income - salaryData["India"].expense;
  const multiplier = Math.round(savings / indiaSavings);

  useEffect(() => window.scrollTo(0,0), []);

  const openModal = (type) => setModalType(type);
  const closeModal = () => setModalType(null);

  return (
    <>
      <ApplicationModal isOpen={!!modalType} onClose={closeModal} type={modalType} />
      
      {/* HERO SECTION */}
      <section className="relative h-[85vh] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#631529]/90 via-[#631529]/70 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
          <span className="bg-white/20 border border-white/30 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 inline-block tracking-wider uppercase">Study in India, Work Abroad</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            International <br /><span className="text-yellow-400">Certification</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl font-light">
            Your passport to a global career. Get certified by CIBTAC (UK) and CIDESCO (Switzerland) and work in 100+ countries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => openModal('brochure')} className="bg-white text-[#631529] px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-gray-100 transition shadow-xl">
              <Download size={20}/> Exam Guide
            </button>
            <button onClick={() => openModal('apply')} className="backdrop-blur-md bg-white/10 border border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition">
              Check Eligibility
            </button>
          </div>
        </div>
      </section>

      {/* EXAM STRUCTURE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900">Global Standards</h2>
            <p className="text-gray-500 mt-2">Compare the world's top two beauty certifications.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Tabs */}
            <div className="lg:w-1/3 space-y-4">
              {certifications.map((cert) => (
                <button
                  key={cert.id}
                  onClick={() => setActiveTab(cert.id)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all ${
                    activeTab === cert.id 
                      ? "bg-[#631529] text-white border-[#631529] shadow-xl scale-105" 
                      : "bg-white text-gray-600 border-gray-100 hover:border-[#631529]"
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-lg">{cert.name}</span>
                    {activeTab === cert.id && <CheckCircle2 size={20} className="text-yellow-400"/>}
                  </div>
                  <p className={`text-xs ${activeTab === cert.id ? "text-white/80" : "text-gray-400"}`}>{cert.origin}</p>
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="lg:w-2/3 bg-gray-50 rounded-3xl p-8 border border-gray-100 relative overflow-hidden">
              {certifications.map((cert) => (
                activeTab === cert.id && (
                  <div key={cert.id} className="animate-in fade-in slide-in-from-right-4 duration-500">
                    <div className="flex items-start justify-between mb-6">
                        <div>
                            <h3 className="text-2xl font-bold text-[#631529]">{cert.full}</h3>
                            <p className="text-sm text-gray-500 mt-2 max-w-md">{cert.desc}</p>
                        </div>
                        <Award size={48} className="text-yellow-500/20"/>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                            <div className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">Theory Exam</div>
                            <div className="font-bold text-gray-800">{cert.exam.theory}</div>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                            <div className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">Practical Exam</div>
                            <div className="font-bold text-gray-800">{cert.exam.practical}</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm font-bold text-[#631529] bg-pink-50 p-3 rounded-lg">
                        <Globe size={16}/> Valid in: {cert.validity}
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SAVINGS CALCULATOR */}
      <section className="py-20 bg-[#631529] text-white">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <span className="text-yellow-400 font-bold tracking-widest uppercase text-sm mb-4 block">Financial Growth</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Why Go Global?</h2>
            <p className="text-white/80 mb-8 leading-relaxed">
              International therapists don't just earn more; they save more. Compare your potential monthly savings in India vs. Top Destinations.
            </p>
            <div className="flex gap-4">
                <div className="bg-white/10 p-4 rounded-2xl border border-white/10 text-center">
                    <Coins size={24} className="text-yellow-400 mb-2 mx-auto"/>
                    <div className="font-bold">{multiplier}x</div>
                    <div className="text-xs opacity-60">Higher Savings</div>
                </div>
                <div className="bg-white/10 p-4 rounded-2xl border border-white/10 text-center">
                    <Briefcase size={24} className="text-yellow-400 mb-2 mx-auto"/>
                    <div className="font-bold">Tax Free</div>
                    <div className="text-xs opacity-60">In Dubai/Cruise</div>
                </div>
            </div>
          </div>

          <div className="md:w-1/2 w-full bg-white text-gray-900 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Calculator size={20} className="text-[#631529]"/> Savings Estimator
            </h3>
            
            <div className="mb-8">
                <label className="text-xs font-bold text-gray-500 mb-2 block">Select Destination</label>
                <div className="flex gap-2">
                    {["Dubai", "Canada", "UK"].map((c) => (
                        <button 
                            key={c}
                            onClick={() => setTargetCountry(c)}
                            className={`flex-1 py-2 rounded-lg text-sm font-bold border transition ${targetCountry === c ? 'bg-[#631529] text-white border-[#631529]' : 'border-gray-200 hover:bg-gray-50'}`}
                        >
                            {c}
                        </button>
                    ))}
                </div>
            </div>

            <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-bold text-gray-500">Est. Income</span>
                    <span className="text-lg font-bold text-green-600">₹ {salaryData[targetCountry].income.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-bold text-gray-500">Living Cost</span>
                    <span className="text-lg font-bold text-red-500">- ₹ {salaryData[targetCountry].expense.toLocaleString()}</span>
                </div>
                <div className="border-t border-gray-200 pt-4 mt-2">
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-bold text-gray-800">Monthly Savings</span>
                        <span className="text-2xl font-extrabold text-[#631529]">₹ {savings.toLocaleString()}</span>
                    </div>
                    <p className="text-xs text-gray-400 text-right mt-1">vs ₹ {indiaSavings.toLocaleString()} in India</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* MIGRATION ROADMAP */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-gray-900">Your Roadmap to Abroad</h2>
            <p className="text-gray-500 mt-2">How to move from a student in India to a professional in London.</p>
          </div>

          <div className="grid md:grid-cols-5 gap-4 relative">
             {/* Connector Line (Desktop) */}
             <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gray-200 -z-10"></div>
             
             {migrationSteps.map((step, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center group hover:-translate-y-2 transition duration-300">
                    <div className="w-12 h-12 mx-auto bg-[#631529] text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 border-4 border-white shadow-md">
                        {step.step}
                    </div>
                    <h4 className="font-bold text-sm mb-2">{step.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* PARTNERS & GALLERY */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Partners */}
          <div className="text-center mb-16">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">Global Employers</h2>
            <div className="flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition duration-500">
                {partners.map((p, i) => (
                    <span key={i} className="text-xl font-bold text-gray-400 flex items-center gap-2 hover:text-[#631529]">
                        <Landmark size={20}/> {p}
                    </span>
                ))}
            </div>
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.map((img, i) => (
                <div key={i} className="rounded-2xl overflow-hidden shadow-md h-48 group relative">
                    <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" alt="International Career" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition"></div>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOBILE STICKY BAR */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 flex gap-4 md:hidden z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <a href="tel:+918872500500" className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-900 py-3 rounded-xl font-bold">
          <Phone size={18} /> Call
        </a>
        <button onClick={() => openModal('apply')} className="flex-1 flex items-center justify-center gap-2 bg-[#631529] text-white py-3 rounded-xl font-bold">
          <ArrowRight size={18} /> Eligibility
        </button>
      </div>
    </>
  );
}