import { useEffect, useState } from "react";
import { 
  Gem, UserCheck, Award, Briefcase, 
  ChevronDown, Calendar, Download, X, 
  Sparkles, Star, CheckCircle2, Package, Phone, ArrowRight,
  Calculator, Quote, Palette, HandMetal, Heart
} from "lucide-react";

// DATA 

const nailSpecifics = {
  fees: { total: 65000, minDownPayment: 10000 },
  modules: {
    foundation: [
      "Nail Anatomy & Disorders", "Hygiene & Sterilization", "Spa Manicure & Pedicure", 
      "Massage Techniques", "Paraffin Wax Therapy", "Client Consultation"
    ],
    extensions: [
      "Tip Application & Blending", "Gel Extensions (Builder/Poly)", "Acrylic Extensions", 
      "Overlays on Natural Nails", "Refilling & Rebalancing", "Safe Removal Techniques"
    ],
    artistry: [
      "French Manicure Variations", "Ombre & Marble Art", "Chrome & Holographic Effects", 
      "3D Flower Art (Acrylic)", "Rhinestone Placement", "Spider Gel & Foiling"
    ],
    tech: [
      "Electric Filing (Drill Machine)", "UV/LED Lamp Science", "Photography for Nail Art", 
      "Social Media for Nail Techs", "Pricing Your Services", "Salon Safety"
    ]
  },
  career: [
    { role: "Nail Technician", salary: "₹ 25k - 45k/mo" },
    { role: "Nail Art Educator", salary: "₹ 40k - 70k/mo" },
    { role: "Freelance Artist", salary: "₹ 50k - 1L/mo" },
    { role: "Cruise Ship Tech", salary: "₹ 1L - 2.5L/mo" }
  ],
  batches: [
    { id: 1, date: "Oct 25, 2025", type: "Fast-Track (Mon-Sat)", status: "Filling Fast", seats: 4 },
    { id: 2, date: "Nov 08, 2025", type: "Weekend Professional", status: "Open", seats: 8 }
  ],
  kit: [
    { name: "UV/LED Lamp (48W)", desc: "Professional grade curation lamp" },
    { name: "Electric Drill Machine", desc: "Portable drill with bit set" },
    { name: "Gel & Acrylic System", desc: "Builder gels, acrylic powders & monomers" },
    { name: "Nail Art Brushes", desc: "15-piece detailed art brush set" }
  ],
  testimonials: [
    { name: "Sara K.", role: "Freelance Nail Tech", text: "The drill machine training was a game changer. I reduced my service time by 30% and increased my income." },
    { name: "Tina L.", role: "Salon Owner", text: "PureReviev's 3D art module is the best. My clients specifically book me for the flower designs I learned here." }
  ],
  gallery: [
    "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=600",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8zzSvaMucbBdrYUf8Q579j757_Qr-3th88g&s"
  ]
};


// COMPONENTS

const BrochureModal = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSuccess(true); }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="bg-white rounded-3xl w-full max-w-md relative overflow-hidden shadow-2xl">
        <button onClick={onClose} className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/20 text-white hover:bg-black/40"><X size={20}/></button>
        
        <div className="bg-[#631529] p-8 text-white text-center">
          <Gem size={40} className="mx-auto mb-2 text-pink-300" />
          <h3 className="text-xl font-bold">Nail Artistry Syllabus</h3>
          <p className="text-xs text-pink-100 mt-1">From Basics to 3D Art</p>
        </div>

        <div className="p-6">
          {success ? (
            <div className="text-center py-8 animate-in zoom-in">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600"><CheckCircle2 size={32} /></div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Sent!</h4>
              <p className="text-gray-500 text-sm mb-6">Check your email for the PDF.</p>
              <button onClick={onClose} className="w-full bg-gray-100 text-gray-900 py-3 rounded-xl font-bold">Close</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input required type="text" placeholder="Full Name" className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-[#631529] outline-none" />
              <input required type="email" placeholder="Email Address" className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-[#631529] outline-none" />
              <input required type="tel" placeholder="Phone Number" className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-[#631529] outline-none" />
              <button disabled={loading} type="submit" className="w-full bg-[#631529] text-white py-3 rounded-xl font-bold hover:bg-[#4a101f] transition flex items-center justify-center gap-2">
                {loading ? "Sending..." : "Download Now"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default function NailCoursesPage() {
  const [activeTab, setActiveTab] = useState("extensions");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookedBatches, setBookedBatches] = useState([]);
  
  const { fees, modules, career, batches, kit, testimonials, gallery } = nailSpecifics;
  
  // EMI
  const [downPayment, setDownPayment] = useState(fees.minDownPayment);
  const [months, setMonths] = useState(6);
  const emi = Math.round((fees.total - downPayment) / months);

  // Earnings Calculator
  const [clientsPerDay, setClientsPerDay] = useState(3);
  const [avgSetPrice, setAvgSetPrice] = useState(1500);
  const monthlyRevenue = clientsPerDay * avgSetPrice * 25;

  useEffect(() => window.scrollTo(0,0), []);

  const handlePreBook = (id) => {
    if (!bookedBatches.includes(id)) {
      setBookedBatches([...bookedBatches, id]);
    }
  };

  return (
    <>
      <BrochureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      {/* HERO SECTION */}
      <section className="relative h-[85vh] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-[#631529]/40 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
          <span className="bg-[#631529] text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 inline-block tracking-wider">CREATIVE CAREER</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Master of <br /><span className="text-pink-300">Nail Technology</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl font-light">
            From basic manicures to advanced 3D acrylic art. Learn to create wearable masterpieces with international certification.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => setIsModalOpen(true)} className="bg-white text-[#631529] px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-gray-100 transition shadow-xl">
              <Download size={20}/> Download Brochure
            </button>
            <button className="backdrop-blur-md bg-white/10 border border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition">
              Book Demo Class
            </button>
          </div>
        </div>
      </section>

      {/* STATS & HIGHLIGHTS */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div><div className="text-3xl font-bold text-[#631529]">Gel & Acrylic</div><div className="text-xs text-gray-500 uppercase tracking-widest">Mastery</div></div>
          <div><div className="text-3xl font-bold text-[#631529]">Drill</div><div className="text-xs text-gray-500 uppercase tracking-widest">Machine Tech</div></div>
          <div><div className="text-3xl font-bold text-[#631529]">100%</div><div className="text-xs text-gray-500 uppercase tracking-widest">Practical</div></div>
          <div><div className="text-3xl font-bold text-[#631529]">Global</div><div className="text-xs text-gray-500 uppercase tracking-widest">Jobs</div></div>
        </div>
      </section>

      {/* CURRICULUM TABS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900">Course Curriculum</h2>
            <p className="text-gray-500 mt-2">A complete journey from nail health to advanced artistry.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Tabs */}
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
                  {activeTab === key && <Gem size={18} className="text-pink-200" />}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="lg:w-2/3 bg-gray-50 rounded-3xl p-8 border border-gray-100 min-h-[300px]">
              <h3 className="text-2xl font-bold text-[#631529] mb-6 capitalize flex items-center gap-2">
                {activeTab} Syllabus
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {modules[activeTab].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm hover:translate-x-1 transition">
                    <CheckCircle2 size={18} className="text-[#631529] shrink-0" />
                    <span className="font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STUDENT WORK GALLERY */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <h2 className="text-3xl font-serif font-bold text-center mb-12 text-gray-900">Student Artistry</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {gallery.map((img, i) => (
                <div key={i} className="group relative overflow-hidden rounded-2xl h-64 shadow-md">
                   <img src={img} alt="Nail Art" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                   <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                      <Heart className="text-white" fill="white" />
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* REVENUE CALCULATOR */}
      <section className="py-20 bg-[#2a0a12] text-white">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <span className="bg-white/20 text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">HIGH ROI CAREER</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Nail Tech Earning Potential</h2>
            <p className="opacity-80 mb-8 leading-relaxed">
              Nail technicians have one of the highest client retention rates in the beauty industry. Calculate your potential earnings as a freelancer or salon owner.
            </p>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 p-4 rounded-2xl text-center">
                    <div className="font-bold text-xl">High Demand</div>
                    <div className="text-xs opacity-60">Weddings & Events</div>
                </div>
                <div className="bg-white/10 p-4 rounded-2xl text-center">
                    <div className="font-bold text-xl">Low Cost</div>
                    <div className="text-xs opacity-60">Material per Client</div>
                </div>
            </div>
          </div>

          <div className="md:w-1/2 w-full bg-white text-gray-900 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Calculator size={20} className="text-[#631529]"/> Income Estimator
            </h3>
            
            <div className="mb-6">
              <label className="flex justify-between text-sm font-bold text-gray-600 mb-2">
                <span>Clients / Day</span>
                <span>{clientsPerDay}</span>
              </label>
              <input type="range" min="1" max="8" value={clientsPerDay} onChange={(e) => setClientsPerDay(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg accent-[#631529]" />
            </div>

            <div className="mb-8">
              <label className="flex justify-between text-sm font-bold text-gray-600 mb-2">
                <span>Avg. Price per Set (₹)</span>
                <span>{avgSetPrice}</span>
              </label>
              <input type="range" min="800" max="3500" step="100" value={avgSetPrice} onChange={(e) => setAvgSetPrice(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg accent-[#631529]" />
            </div>

            <div className="bg-[#fff0f4] p-6 rounded-2xl text-center border border-pink-100">
              <p className="text-gray-500 text-xs uppercase tracking-wide font-bold mb-1">Potential Monthly Income</p>
              <div className="text-4xl font-extrabold text-[#631529]">₹ {monthlyRevenue.toLocaleString()}</div>
              <p className="text-xs text-gray-400 mt-2">*Based on 25 working days</p>
            </div>
          </div>
        </div>
      </section>

      {/* STUDENT KIT & FEES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          
          {/* Kit Details */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Professional Nail Kit</h2>
            <div className="bg-gray-900 text-white p-8 rounded-3xl relative overflow-hidden mb-8">
              <div className="absolute top-0 right-0 bg-[#631529] w-32 h-32 rounded-full blur-[50px] opacity-40"></div>
              <ul className="space-y-4 relative z-10">
                {kit.map((k, i) => (
                  <li key={i} className="flex justify-between items-center border-b border-gray-700 pb-3 last:border-0">
                    <span className="font-bold text-lg">{k.name}</span>
                    <span className="text-xs text-gray-400 max-w-[150px] text-right">{k.desc}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-gray-700 flex items-center gap-2 text-sm text-pink-300">
                <Package size={16}/> Included in Course Fee
              </div>
            </div>
          </div>

          {/* EMI Section */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Investment & EMI</h2>
            <div className="bg-white border border-gray-200 p-8 rounded-3xl shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Total Fee</h3>
                <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">No Interest EMI</span>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2 font-bold text-gray-500"><span>Down Payment</span><span>₹ {downPayment.toLocaleString()}</span></div>
                <input type="range" min="5000" max={fees.total - 10000} step="5000" value={downPayment} onChange={(e) => setDownPayment(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg accent-[#631529]" />
              </div>
              
              <div className="flex gap-2 mb-6">
                {[3, 6, 9].map(m => (
                  <button key={m} onClick={() => setMonths(m)} className={`flex-1 py-2 rounded-lg text-sm border font-bold transition ${months === m ? 'bg-[#631529] text-white border-[#631529]' : 'border-gray-200 hover:bg-gray-50'}`}>{m}M</button>
                ))}
              </div>
              
              <div className="bg-gray-50 p-4 rounded-xl flex justify-between items-center">
                <span className="text-sm text-gray-500">Monthly EMI</span>
                <div className="text-2xl font-bold text-[#631529]">₹ {emi.toLocaleString()}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BATCHES */}
      <section className="py-20 bg-[#faf7f7]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif font-bold mb-10 text-gray-900">Upcoming Batches</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {batches.map((b) => (
              <div key={b.id} className="p-6 bg-white rounded-2xl shadow-sm flex justify-between items-center group hover:border-[#631529] border border-transparent transition">
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
        </div>
      </section>

      {/* MOBILE STICKY BAR */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 flex gap-4 md:hidden z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <a href="tel:+919225527523" className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-900 py-3 rounded-xl font-bold">
          <Phone size={18} /> Call
        </a>
        <button onClick={() => setIsModalOpen(true)} className="flex-1 flex items-center justify-center gap-2 bg-[#631529] text-white py-3 rounded-xl font-bold">
          <ArrowRight size={18} /> Apply
        </button>
      </div>
    </>
  );
}