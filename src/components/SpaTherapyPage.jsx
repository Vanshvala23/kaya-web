import { useEffect, useState } from "react";
import { 
  Flower, Droplets, Flame, Sparkles, 
  ChevronDown, Calendar, Download, X, 
  CheckCircle2, Phone, ArrowRight,
  Calculator, Quote, Hotel, Bed, Leaf
} from "lucide-react";

// 1. INTERNAL DATA 

const spaSpecifics = {
  fees: { total: 65000, minDownPayment: 12000 },
  modules: {
    western: [
      "Swedish Massage (Effleurage/Petrissage)", "Deep Tissue Techniques", "Sports Massage Basics", 
      "Lymphatic Drainage", "Hot Stone Therapy", "Aromatherapy Blending"
    ],
    oriental: [
      "Thai Yoga Massage (Stretching)", "Reflexology (Foot Pressure Points)", "Shiatsu Basics", 
      "Balinese Massage", "Potli Massage (Herbal Compress)", "Head & Shoulder Relief"
    ],
    wellness: [
      "Body Scrubs & Wraps", "Hydrotherapy Basics", "Sauna & Steam Room Management", 
      "Client Draping & Modesty", "Spa Hygiene & Sanitization", "Setting the Ambience"
    ],
    management: [
      "Spa Menu Engineering", "Retail Sales (Products)", "Front Desk Etiquette", 
      "Handling VIP Clients", "Booking Software Basics", "Inventory Control"
    ]
  },
  career: [
    { role: "Spa Therapist", salary: "₹ 20k - 40k + Tips" },
    { role: "Resort Wellness Manager", salary: "₹ 6L - 10L p.a." },
    { role: "Cruise Ship Therapist", salary: "₹ 80k - 1.5L/mo" },
    { role: "Aromatherapist", salary: "₹ 30k - 50k/mo" }
  ],
  batches: [
    { id: 1, date: "Nov 20, 2025", type: "Weekday Intensive", status: "Open", seats: 8 },
    { id: 2, date: "Dec 05, 2025", type: "Weekend Professional", status: "Filling Fast", seats: 4 }
  ],
  gallery: [
    "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=600", // Massage
    "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=600", // Spa Stone
    "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600", // Facial
    "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=600"  // Towels/Ambience
  ],
  partners: ["Taj Hotels", "Marriott Bonvoy", "O2 Spa", "Four Seasons", "Urban Company"]
};

// 2. COMPONENTS

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
        
        <div className={`p-8 text-white text-center ${isApply ? "bg-[#631529]" : "bg-[#631529]"}`}>
          {isApply ? <Leaf size={40} className="mx-auto mb-2 text-green-300" /> : <Flower size={40} className="mx-auto mb-2 text-yellow-400" />}
          <h3 className="text-xl font-bold">{isApply ? "Course Application" : "Therapy Catalog"}</h3>
          <p className="text-xs text-white/80 mt-1">{isApply ? "Start your global career" : "Download technique list"}</p>
        </div>

        <div className="p-6">
          {success ? (
            <div className="text-center py-8 animate-in zoom-in">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600"><CheckCircle2 size={32} /></div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Success!</h4>
              <p className="text-gray-500 text-sm mb-6">{isApply ? "Our team will contact you." : "Catalog sent to your email."}</p>
              <button onClick={onClose} className="w-full bg-gray-100 text-gray-900 py-3 rounded-xl font-bold">Close</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input required type="text" placeholder="Full Name" className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-[#631529] outline-none" />
              <input required type="email" placeholder="Email Address" className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-[#631529] outline-none" />
              <input required type="tel" placeholder="Phone Number" className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-[#631529] outline-none" />
              <button disabled={loading} type="submit" className="w-full bg-[#631529] text-white py-3 rounded-xl font-bold hover:bg-[#4a101f] transition flex items-center justify-center gap-2">
                {loading ? "Processing..." : (isApply ? "Submit Application" : "Download Now")}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default function SpaTherapyPage() {
  const [modalType, setModalType] = useState(null);
  const [activeTab, setActiveTab] = useState("western");
  const [bookedBatches, setBookedBatches] = useState([]);
  
  // Spa Revenue Calculator
  const [therapiesPerDay, setTherapiesPerDay] = useState(4);
  const [ratePerTherapy, setRatePerTherapy] = useState(2500);
  const dailyIncome = therapiesPerDay * ratePerTherapy;
  const monthlyIncome = dailyIncome * 26; 

  const { fees, modules, career, batches, gallery, partners } = spaSpecifics;

  useEffect(() => window.scrollTo(0,0), []);

  const handlePreBook = (id) => {
    if (!bookedBatches.includes(id)) {
      setBookedBatches([...bookedBatches, id]);
    }
  };

  const openModal = (type) => setModalType(type);
  const closeModal = () => setModalType(null);

  return (
    <>
      <ApplicationModal isOpen={!!modalType} onClose={closeModal} type={modalType} />
      
      {/* HERO SECTION */}
      <section className="relative h-[85vh] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 via-[#631529]/60 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
          <span className="bg-teal-600 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 inline-block tracking-wider uppercase">Global Wellness</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Diploma in <br /><span className="text-yellow-400">Spa Therapy</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl font-light">
            Master international massage techniques from Swedish to Thai. Start your career in 5-star hotels and luxury cruise liners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => openModal('brochure')} className="bg-white text-[#631529] px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-gray-100 transition shadow-xl">
              <Download size={20}/> Course Brochure
            </button>
            <button onClick={() => openModal('apply')} className="backdrop-blur-md bg-white/10 border border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition">
              Apply Now
            </button>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div><div className="text-3xl font-bold text-[#631529]">Western</div><div className="text-xs text-gray-500 uppercase tracking-widest">Therapies</div></div>
          <div><div className="text-3xl font-bold text-[#631529]">Oriental</div><div className="text-xs text-gray-500 uppercase tracking-widest">Healing</div></div>
          <div><div className="text-3xl font-bold text-[#631529]">Anatomy</div><div className="text-xs text-gray-500 uppercase tracking-widest">Physiology</div></div>
          <div><div className="text-3xl font-bold text-[#631529]">5-Star</div><div className="text-xs text-gray-500 uppercase tracking-widest">Placements</div></div>
        </div>
      </section>

      {/* CURRICULUM TABS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900">Healing Curriculum</h2>
            <p className="text-gray-500 mt-2">A holistic approach to bodywork and wellness.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/3 space-y-2">
              {Object.keys(modules).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`w-full text-left px-6 py-4 rounded-2xl font-bold flex justify-between items-center transition-all ${
                    activeTab === key 
                      ? "bg-[#631529] text-white shadow-lg scale-105" 
                      : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <span className="capitalize">{key} Module</span>
                  {activeTab === key && <Flower size={18} className="text-yellow-400" />}
                </button>
              ))}
            </div>

            <div className="lg:w-2/3 bg-teal-50 rounded-3xl p-8 border border-teal-100 min-h-[300px]">
              <h3 className="text-2xl font-bold text-[#631529] mb-6 capitalize flex items-center gap-2">
                {activeTab} Techniques
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {modules[activeTab].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm hover:translate-x-1 transition">
                    <CheckCircle2 size={18} className="text-teal-600 shrink-0" />
                    <span className="font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INCOME CALCULATOR */}
      <section className="py-20 bg-[#631529] text-white">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <span className="text-teal-300 font-bold tracking-widest uppercase text-sm mb-4 block">Earning Potential</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Spa Business Revenue</h2>
            <p className="text-white/80 mb-8 leading-relaxed">
              The wellness industry is booming. Calculate the potential monthly revenue for a single therapy room or freelancer.
            </p>
            <div className="flex gap-4">
                <div className="bg-white/10 p-4 rounded-2xl border border-white/10 text-center">
                    <Hotel size={24} className="text-teal-300 mb-2 mx-auto"/>
                    <div className="font-bold">Hotels</div>
                    <div className="text-xs opacity-60">High Tips</div>
                </div>
                <div className="bg-white/10 p-4 rounded-2xl border border-white/10 text-center">
                    <Bed size={24} className="text-teal-300 mb-2 mx-auto"/>
                    <div className="font-bold">Cruise</div>
                    <div className="text-xs opacity-60">Tax Free</div>
                </div>
            </div>
          </div>

          <div className="md:w-1/2 w-full bg-white text-gray-900 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Calculator size={20} className="text-[#631529]"/> Revenue Estimate
            </h3>
            
            <div className="space-y-6 mb-8">
                <div>
                    <label className="text-xs font-bold text-gray-500 flex justify-between mb-2">
                        <span>Therapies / Day</span> <span>{therapiesPerDay}</span>
                    </label>
                    <input type="range" min="2" max="8" value={therapiesPerDay} onChange={(e) => setTherapiesPerDay(Number(e.target.value))} className="w-full accent-[#631529]" />
                </div>
                <div>
                    <label className="text-xs font-bold text-gray-500 flex justify-between mb-2">
                        <span>Avg. Rate (₹)</span> <span>{ratePerTherapy}</span>
                    </label>
                    <input type="range" min="1500" max="8000" step="500" value={ratePerTherapy} onChange={(e) => setRatePerTherapy(Number(e.target.value))} className="w-full accent-[#631529]" />
                </div>
            </div>

            <div className="bg-teal-50 p-6 rounded-2xl text-center border border-teal-100">
              <p className="text-gray-500 text-xs uppercase tracking-wide font-bold mb-1">Potential Monthly Revenue</p>
              <div className="text-4xl font-extrabold text-[#631529]">₹ {monthlyIncome.toLocaleString()}</div>
              <p className="text-xs text-gray-400 mt-2">*Based on 26 working days</p>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS & GALLERY */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Partners */}
          <div className="text-center mb-16">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">Placement Partners</h2>
            <div className="flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition duration-500">
                {partners.map((p, i) => (
                    <span key={i} className="text-xl font-bold text-gray-400 flex items-center gap-2 hover:text-[#631529]">
                        <Hotel size={20}/> {p}
                    </span>
                ))}
            </div>
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.map((img, i) => (
                <div key={i} className="rounded-2xl overflow-hidden shadow-md h-48 group relative">
                    <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" alt="Spa Therapy" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition"></div>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* BATCHES */}
      <section className="py-20 bg-[#faf7f7]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif font-bold mb-10 text-gray-900">Upcoming Batches</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {batches.map((b) => (
              <div key={b.id} className="p-6 bg-white rounded-2xl shadow-sm border border-gray-200 flex justify-between items-center group hover:border-[#631529] transition">
                <div className="text-left">
                  <h4 className="font-bold text-lg">{b.date}</h4>
                  <p className="text-sm text-gray-500">{b.type}</p>
                </div>
                <div className="text-right">
                  <span className={`text-xs font-bold px-2 py-1 rounded ${b.seats < 5 ? 'bg-orange-100 text-orange-700' : 'bg-green-100 text-green-700'}`}>{b.status}</span>
                  <button 
                    onClick={() => handlePreBook(b.id)}
                    className={`block w-full mt-2 text-sm font-bold underline transition ${bookedBatches.includes(b.id) ? 'text-green-600 no-underline' : 'text-[#631529] opacity-0 group-hover:opacity-100'}`}
                  >
                    {bookedBatches.includes(b.id) ? "Registered ✓" : "Reserve Seat"}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[#631529] rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Start Your Wellness Journey</h2>
              <p className="mb-8 opacity-90">Join the elite league of international spa therapists.</p>
              <button onClick={() => openModal('apply')} className="bg-white text-[#631529] px-10 py-3.5 rounded-full font-bold hover:bg-gray-100 transition inline-block">Apply Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE STICKY BAR */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 flex gap-4 md:hidden z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <a href="tel:+919225527523" className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-900 py-3 rounded-xl font-bold">
          <Phone size={18} /> Call
        </a>
        <button onClick={() => openModal('apply')} className="flex-1 flex items-center justify-center gap-2 bg-[#631529] text-white py-3 rounded-xl font-bold">
          <ArrowRight size={18} /> Apply
        </button>
      </div>
    </>
  );
}