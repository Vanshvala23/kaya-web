import { useEffect, useState } from "react";
import { 
  Scissors, UserCheck, Award, Briefcase, 
  ChevronDown, Calendar, Download, X, 
  Zap, Star, CheckCircle2, Package, Phone, ArrowRight,
  TrendingUp, Calculator, Quote, Sparkles
} from "lucide-react";

// DATA

const hairSpecifics = {
  fees: { total: 105000, minDownPayment: 18000 },
  modules: {
    fundamentals: [
      "Trichology & Hair Science", "Client Consultation & Safety", "Shampooing & Conditioning", 
      "Head Massage Techniques", "Blow-Dry Mastery", "Thermal Styling (Iron/Tongs)"
    ],
    cutting: [
      "One Length & Forward Graduation", "Layering Techniques", "Bob & Pixie Cuts", 
      "Texturizing & Thinning", "Men's Barbering (Fades/Beard)", "Kids Cuts"
    ],
    chemical: [
      "Global Coloring & Root Touchups", "Highlighting (Foiling/Weaving)", "Balayage & Ombre Techniques", 
      "Rebonding & Smoothening", "Keratin & Cystine Treatments", "Perming Basics"
    ],
    styling: [
      "Bridal Updos", "Braiding Techniques", "Vintage Waves", 
      "Messy Buns & Knots", "Hair Extensions (Clip-in/Tape)", "Portfolio Shoot Styling"
    ]
  },
  career: [
    { role: "Senior Hair Stylist", salary: "₹ 4L - 8L p.a." },
    { role: "Salon Art Director", salary: "₹ 8L - 15L p.a." },
    { role: "Color Technician", salary: "₹ 5L - 9L p.a." },
    { role: "Freelance Bridal Stylist", salary: "₹ 50k - 1L / month" }
  ],
  batches: [
    { id: 1, date: "Oct 28, 2025", type: "Weekday (Mon-Fri)", status: "Filling Fast", seats: 5 },
    { id: 2, date: "Nov 12, 2025", type: "Weekend (Sat-Sun)", status: "Open", seats: 12 }
  ],
  kit: [
    { name: "Pro Scissor Set", desc: "Japanese steel cutting & texturizing scissors" },
    { name: "Electrical Tools", desc: "Professional Hair Dryer, Straightener & Tongs" },
    { name: "Mannequin Heads", desc: "2 Human hair heads for unlimited practice" },
    { name: "Styling Kit", desc: "Ceramic brushes, combs, clips & sectioning tools" }
  ],
  testimonials: [
    { name: "Vikram S.", role: "Senior Stylist, Toni&Guy", text: "The advanced coloring module changed my career. I now specialize in Balayage and earn double what I used to." },
    { name: "Priya D.", role: "Freelance Bridal Stylist", text: "Learning updos and heat styling here gave me the confidence to handle bridal clients independently." }
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
    // Simulate API call
    setTimeout(() => { setLoading(false); setSuccess(true); }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="bg-white rounded-3xl w-full max-w-md relative overflow-hidden shadow-2xl">
        <button onClick={onClose} className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/20 text-white hover:bg-black/40"><X size={20}/></button>
        
        <div className="bg-gray-900 p-8 text-white text-center">
          <Scissors size={40} className="mx-auto mb-2 text-[#631529]" />
          <h3 className="text-xl font-bold">Hair Syllabus 2025</h3>
          <p className="text-xs text-gray-400 mt-1">Detailed module breakdown & kit list</p>
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

export default function HairCoursesPage() {
  const [activeTab, setActiveTab] = useState("fundamentals");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookedBatches, setBookedBatches] = useState([]);
  
  const { fees, modules, career, batches, kit, testimonials } = hairSpecifics;
  
  // EMI State
  const [downPayment, setDownPayment] = useState(fees.minDownPayment);
  const [months, setMonths] = useState(6);
  const emi = Math.round((fees.total - downPayment) / months);

  // Income Calculator State
  const [cutsPerDay, setCutsPerDay] = useState(3);
  const [avgCutPrice, setAvgCutPrice] = useState(500);
  const dailyIncome = cutsPerDay * avgCutPrice;
  const monthlyIncome = dailyIncome * 25; // 25 days

  useEffect(() => window.scrollTo(0,0), []);

  const handlePreBook = (id) => {
    if (!bookedBatches.includes(id)) {
      setBookedBatches([...bookedBatches, id]);
    }
  };

  return (
    <>
      <BrochureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      {/*  HERO SECTION */}
      <section className="relative h-[85vh] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
          <span className="bg-[#631529] text-xs font-bold px-4 py-1.5 rounded-full mb-6 inline-block tracking-wider">HAIR TECHNOLOGY</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Become a Pro <br /><span className="text-pink-400">Hair Stylist</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl font-light">
            Master the art of cutting, coloring, and chemical treatments with international techniques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => setIsModalOpen(true)} className="bg-white text-[#631529] px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-gray-100 transition shadow-xl">
              <Download size={20}/> Download Brochure
            </button>
            <button className="backdrop-blur-md bg-white/10 border border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition">
              Book Free Demo
            </button>
          </div>
        </div>
      </section>

      {/* CURRICULUM TABS  */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900">What You Will Master</h2>
            <p className="text-gray-500 mt-2">A structured path from basics to advanced artistry.</p>
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
                      ? "bg-[#631529] text-white shadow-lg" 
                      : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <span className="capitalize">{key}</span>
                  {activeTab === key && <Scissors size={18} />}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="lg:w-2/3 bg-gray-50 rounded-3xl p-8 border border-gray-100 min-h-[300px]">
              <h3 className="text-2xl font-bold text-[#631529] mb-6 capitalize flex items-center gap-2">
                {activeTab} Module
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {modules[activeTab].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                    <CheckCircle2 size={18} className="text-[#631529] shrink-0" />
                    <span className="font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INCOME CALCULATOR */}
      <section className="py-20 bg-[#2a0a12] text-white">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <span className="bg-white/20 text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">EARNING POTENTIAL</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Stylist Income Estimator</h2>
            <p className="opacity-80 mb-8 leading-relaxed">
              Hair styling is one of the highest-paying skills in the beauty industry. Use this calculator to see what you could earn as a freelancer or senior stylist.
            </p>
            <div className="flex gap-4">
                <div className="bg-white/10 p-4 rounded-2xl text-center">
                    <div className="font-bold text-2xl">High</div>
                    <div className="text-xs opacity-60">Repeat Clients</div>
                </div>
                <div className="bg-white/10 p-4 rounded-2xl text-center">
                    <div className="font-bold text-2xl">Low</div>
                    <div className="text-xs opacity-60">Initial Cost</div>
                </div>
            </div>
          </div>

          <div className="md:w-1/2 w-full bg-white text-gray-900 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Calculator size={20} className="text-[#631529]"/> Calculate Your Growth
            </h3>
            
            <div className="mb-6">
              <label className="flex justify-between text-sm font-bold text-gray-600 mb-2">
                <span>Haircuts / Day</span>
                <span>{cutsPerDay}</span>
              </label>
              <input type="range" min="1" max="10" value={cutsPerDay} onChange={(e) => setCutsPerDay(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#631529]" />
            </div>

            <div className="mb-8">
              <label className="flex justify-between text-sm font-bold text-gray-600 mb-2">
                <span>Avg. Service Price (₹)</span>
                <span>{avgCutPrice}</span>
              </label>
              <input type="range" min="200" max="3000" step="100" value={avgCutPrice} onChange={(e) => setAvgCutPrice(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#631529]" />
            </div>

            <div className="bg-[#fff0f4] p-6 rounded-2xl text-center border border-pink-100">
              <p className="text-gray-500 text-xs uppercase tracking-wide font-bold mb-1">Potential Monthly Income</p>
              <div className="text-4xl font-extrabold text-[#631529]">₹ {monthlyIncome.toLocaleString()}</div>
              <p className="text-xs text-gray-400 mt-2">*Excluding tips & product sales</p>
            </div>
          </div>
        </div>
      </section>

      {/* STUDENT KIT  */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <span className="text-pink-500 font-bold tracking-widest uppercase text-sm flex items-center gap-2 mb-2">
                <Package size={18}/> Worth ₹ 25,000+
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">Professional Hair Kit</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Start your practice immediately. Every student receives a premium tool kit including dummy heads for unlimited practice.
              </p>
              <ul className="space-y-4">
                {kit.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="bg-gray-100 p-2 rounded-full"><Scissors size={16} className="text-[#631529]" /></div>
                    <div>
                      <span className="font-bold block text-gray-900">{item.name}</span>
                      <span className="text-sm text-gray-500">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 relative">
              <div className="bg-gray-100 p-4 rounded-3xl rotate-2 hover:rotate-0 transition duration-500 shadow-lg">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPBxZpov6uyUaxw7N0_LSCZKl0AH1q4OVmNQ&s" 
                  alt="Hair Kit" 
                  className="rounded-2xl w-full object-cover h-72" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BATCHES & CTA */}
      <section className="py-20 bg-[#faf7f7]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif font-bold mb-10 text-gray-900">Upcoming Batches</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {batches.map((b) => (
              <div key={b.id} className="p-6 bg-white rounded-2xl shadow-sm flex justify-between items-center group hover:border-[#631529] border border-gray-100 transition">
                <div className="text-left">
                  <h4 className="font-bold text-lg text-gray-900">{b.date}</h4>
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
          
          <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Start Your Styling Career</h2>
              <p className="mb-8 text-gray-500">Join the next batch and get your international certification.</p>
              <a href="/contact" className="bg-[#631529] text-white px-10 py-3.5 rounded-full font-bold hover:bg-[#4a101f] transition inline-block">Apply Now</a>
            </div>
          </div>
        </div>
      </section>
      

      {/* MOBILE STICKY BAR */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 flex gap-4 md:hidden z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <a href="tel:+918872500500" className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-900 py-3 rounded-xl font-bold">
          <Phone size={18} /> Call
        </a>
        <button onClick={() => setIsModalOpen(true)} className="flex-1 flex items-center justify-center gap-2 bg-[#631529] text-white py-3 rounded-xl font-bold">
          <ArrowRight size={18} /> Apply
        </button>
      </div>
    </>
  );
}