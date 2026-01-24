import { useEffect, useState } from "react";
import { 
  Crown, Scissors, Palette, Sparkles, 
  CheckCircle2, Download, X, Calendar, Globe, Star,
  Briefcase, IndianRupee, Calculator, Package, Gem
} from "lucide-react";

// DATA 

const comboSpecifics = {
  fees: { total: 250000, minDownPayment: 40000 },
  modules: {
    hair: [
      "Hair Science & Trichology", "Classic & Advanced Cutting", "Chemical Treatments (Rebonding/Keratin)", 
      "Creative Coloring & Balayage", "Men's Barbering", "Hair Spa & Rituals"
    ],
    makeup: [
      "Skin Tones & Color Theory", "Bridal Makeup (HD & Airbrush)", "Creative & Fantasy Looks",
      "Prosthetics & SFX", "Portfolio Building", "Client Consultation"
    ],
    skin: [
      "Anatomy & Physiology", "Advanced Facials & Peels", "Machine Treatments (Galvanic/High Freq)",
      "Body Therapies & Spa", "Waxing & Threading", "Salon Hygiene"
    ],
    management: [
      "Salon Business Planning", "Staff Management", "Inventory & Stock Control",
      "Digital Marketing for Salons", "Client Retention Strategies", "Pricing & Menu Engineering"
    ]
  },
  career: [
    { role: "Celebrity Stylist", salary: "₹ 8L - 15L p.a." },
    { role: "Salon Owner", salary: "₹ 12L - 50L p.a." },
    { role: "Technical Trainer", salary: "₹ 6L - 10L p.a." },
    { role: "Cruise Ship Cosmetologist", salary: "₹ 10L - 20L p.a." }
  ],
  batches: [
    { date: "Oct 15, 2025", type: "Full Time (Mon-Sat)", status: "Filling Fast", seats: 3 },
    { date: "Nov 01, 2025", type: "Part Time (Evening)", status: "Open", seats: 10 }
  ],
  kit: [
    { name: "Professional Makeup Trousseau", desc: "Full range of foundations, palettes & brushes" },
    { name: "Hair Styling Kit", desc: "Scissors, dryers, irons, combs & mannequins" },
    { name: "Esthetics Toolkit", desc: "Facial tools, mixing bowls, mask brushes" },
    { name: "Nail Art Kit", desc: "UV Lamp, gel polishes, acrylic powder & drills" }
  ]
};

// COMPONENTS

const BrochureModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="bg-white rounded-3xl w-full max-w-md relative overflow-hidden shadow-2xl">
        <button onClick={onClose} className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/20 text-white hover:bg-black/40"><X size={20}/></button>
        <div className="bg-gradient-to-r from-[#631529] to-[#922a45] p-8 text-white text-center">
          <Crown size={40} className="mx-auto mb-2 text-yellow-400" />
          <h3 className="text-xl font-bold">Grand Master Syllabus</h3>
          <p className="text-xs text-white/80 mt-1">Get the complete 1-Year Roadmap</p>
        </div>
        <form className="p-6 space-y-4">
          <input type="text" placeholder="Full Name" className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-[#631529] outline-none" />
          <input type="email" placeholder="Email" className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-[#631529] outline-none" />
          <input type="tel" placeholder="Phone" className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-[#631529] outline-none" />
          <button type="button" onClick={onClose} className="w-full bg-[#631529] text-white py-3 rounded-xl font-bold hover:bg-[#4a101f] transition">Download PDF</button>
        </form>
      </div>
    </div>
  );
};

export default function ComboCosmetologyPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("hair");
  const { fees, modules, career, batches, kit } = comboSpecifics;
  
  // EMI & Earnings State
  const [downPayment, setDownPayment] = useState(fees.minDownPayment);
  const [months, setMonths] = useState(12);
  const emi = Math.round((fees.total - downPayment) / months);
  
  const [servicesPerDay, setServicesPerDay] = useState(3);
  const [avgServicePrice, setAvgServicePrice] = useState(2500);
  const monthlyRevenue = servicesPerDay * avgServicePrice * 25;

  useEffect(() => window.scrollTo(0,0), []);

  return (
    <>
      <BrochureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-[#631529]/30 to-black/90"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-400/50 text-yellow-300 px-4 py-1.5 rounded-full mb-6 font-bold tracking-wider text-xs uppercase animate-pulse">
            <Crown size={14}/> Flagship Course
          </div>
          <h1 className="text-5xl md:text-8xl font-serif font-bold mb-6 leading-tight">
            Grand Master <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-white to-pink-200">Cosmetology</span>
          </h1>
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto font-light">
            The ultimate "all-in-one" qualification. Master Hair, Makeup, Skin, and Nails in one comprehensive year-long diploma designed for future salon owners.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={() => setIsModalOpen(true)} className="bg-white text-[#631529] px-10 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:scale-105 transition shadow-xl hover:shadow-2xl">
              <Download size={20}/> Download Brochure
            </button>
            <button className="bg-transparent border border-white text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition">
              Book Campus Tour
            </button>
          </div>
        </div>
      </section>

      {/* 4-IN-1 MASTERY  */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900">360° Beauty Mastery</h2>
            <p className="text-gray-500 mt-4">Why specialize in one when you can rule them all?</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Scissors, title: "Hair Expert", desc: "Cuts, Color, Chem", color: "bg-purple-50 text-purple-700" },
              { icon: Palette, title: "Makeup Artist", desc: "Bridal, HD, Airbrush", color: "bg-pink-50 text-pink-700" },
              { icon: Sparkles, title: "Aesthetician", desc: "Skin, Facials, Machines", color: "bg-blue-50 text-blue-700" },
              { icon: Gem, title: "Nail Tech", desc: "Acrylics, Gel, 3D Art", color: "bg-orange-50 text-orange-700" }
            ].map((item, i) => (
              <div key={i} className={`p-8 rounded-3xl border border-gray-100 text-center transition hover:-translate-y-2 hover:shadow-lg ${item.color}`}>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="opacity-80 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE CURRICULUM */}
      <section className="py-20 bg-[#faf7f7]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12">
          {/* Tabs */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-2xl font-serif font-bold mb-6 text-gray-900">Course Syllabus</h3>
            {["hair", "makeup", "skin", "management"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`w-full text-left p-5 rounded-2xl font-bold flex justify-between items-center transition-all ${
                  activeTab === tab 
                    ? "bg-[#631529] text-white shadow-lg scale-105" 
                    : "bg-white text-gray-600 hover:bg-white/80"
                }`}
              >
                <span className="capitalize">{tab} Mastery</span>
                {activeTab === tab && <CheckCircle2 size={20} />}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="lg:col-span-8 bg-white p-8 rounded-3xl shadow-sm border border-gray-100 min-h-[400px]">
            <h3 className="text-2xl font-bold mb-6 capitalize text-[#631529] flex items-center gap-2">
              {activeTab === "management" ? "Salon Management" : `${activeTab} Curriculum`}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {modules[activeTab].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition">
                  <div className="bg-gray-100 p-2 rounded-lg text-gray-700 font-bold text-xs">{i+1}</div>
                  <p className="font-medium text-gray-700">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-gray-100 flex items-center justify-between">
              <p className="text-sm text-gray-500">Includes theory, demo & practicals.</p>
              <button onClick={() => setIsModalOpen(true)} className="text-[#631529] font-bold text-sm flex items-center gap-1 hover:underline">
                Download Full PDF <Download size={16}/>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PREMIUM STUDENT KIT */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gray-900 rounded-[40px] p-10 md:p-16 text-white flex flex-col md:flex-row gap-16 items-center relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#631529] rounded-full blur-[100px] opacity-50 -mr-20 -mt-20 pointer-events-none"></div>

            <div className="md:w-1/2 relative z-10">
              <span className="text-yellow-400 font-bold tracking-widest uppercase text-sm flex items-center gap-2 mb-4">
                <Package size={18}/> Value ₹ 35,000+
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">The Grand Master Kit</h2>
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                Your career starter pack. Receive a massive professional kit containing premium tools and products for Hair, Skin, Makeup, and Nails.
              </p>
              <ul className="space-y-4">
                {kit.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="bg-white/10 p-1.5 rounded-full mt-1"><CheckCircle2 size={16} className="text-yellow-400" /></div>
                    <div>
                      <span className="font-bold block text-lg">{item.name}</span>
                      <span className="text-sm text-gray-400">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 w-full relative z-10">
              <div className="bg-white/10 backdrop-blur-md p-2 rounded-3xl border border-white/10 rotate-2 hover:rotate-0 transition duration-500">
                <img src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800" alt="Student Kit" className="rounded-2xl w-full object-cover h-80 shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI & CAREER */}
      <section className="py-20 bg-[#faf7f7]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          
          {/* Career List */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">Career Scope</h2>
            <div className="grid gap-4">
              {career.map((c, i) => (
                <div key={i} className="flex justify-between items-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-yellow-500 transition group cursor-default">
                  <div className="flex items-center gap-4">
                    <div className="bg-yellow-50 p-3 rounded-xl text-yellow-600 group-hover:bg-yellow-500 group-hover:text-white transition"><Star size={20}/></div>
                    <span className="font-bold text-lg text-gray-800">{c.role}</span>
                  </div>
                  <span className="font-bold text-[#631529]">{c.salary}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Business ROI Calculator */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-gray-900">
              <IndianRupee size={24} className="text-green-600"/> Future Salon Revenue
            </h3>
            <p className="text-sm text-gray-500 mb-8">Estimate potential monthly revenue if you open your own salon.</p>
            
            <div className="space-y-6 mb-8">
              <div>
                <label className="flex justify-between text-sm font-bold text-gray-700 mb-2">
                  <span>Services / Day</span>
                  <span>{servicesPerDay}</span>
                </label>
                <input type="range" min="1" max="20" value={servicesPerDay} onChange={(e) => setServicesPerDay(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600" />
              </div>
              <div>
                <label className="flex justify-between text-sm font-bold text-gray-700 mb-2">
                  <span>Avg. Bill Value (₹)</span>
                  <span>{avgServicePrice}</span>
                </label>
                <input type="range" min="500" max="10000" step="500" value={avgServicePrice} onChange={(e) => setAvgServicePrice(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600" />
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-2xl text-center border border-green-100">
              <p className="text-green-800 text-xs uppercase tracking-wide font-bold mb-1">Potential Monthly Revenue</p>
              <div className="text-4xl font-extrabold text-green-700">₹ {monthlyRevenue.toLocaleString()}</div>
              <p className="text-xs text-green-600 mt-2">*Based on 25 working days</p>
            </div>
          </div>

        </div>
      </section>

      {/*  FEES & BATCHES */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Batches */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Intakes</h3>
              <div className="space-y-4">
                {batches.map((b, i) => (
                  <div key={i} className="flex justify-between items-center p-6 bg-gray-50 rounded-2xl border border-gray-100">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Calendar size={16} className="text-[#631529]"/>
                        <span className="font-bold text-lg text-gray-900">{b.date}</span>
                      </div>
                      <p className="text-sm text-gray-500 pl-6">{b.type}</p>
                    </div>
                    <div className="text-right">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${b.seats < 5 ? 'bg-orange-100 text-orange-700' : 'bg-green-100 text-green-700'}`}>{b.status}</span>
                      <p className="text-xs text-gray-400 mt-2">{b.seats} Seats Left</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fee Card */}
            <div className="flex-1 bg-[#631529] text-white p-8 rounded-3xl shadow-2xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-white/20 p-2 rounded-lg"><Calculator size={24}/></div>
                <div>
                  <h3 className="text-xl font-bold">Fee & EMI Plan</h3>
                  <p className="text-xs opacity-70">Flexible payment options available</p>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2 font-medium"><span>Down Payment</span><span>₹ {downPayment.toLocaleString()}</span></div>
                <input type="range" min="20000" max={fees.total - 20000} step="5000" value={downPayment} onChange={(e) => setDownPayment(Number(e.target.value))} className="w-full h-1.5 bg-black/30 rounded-lg appearance-none cursor-pointer accent-white" />
              </div>
              
              <div className="grid grid-cols-4 gap-2 mb-8">
                {[6, 9, 12, 18].map(m => (
                  <button key={m} onClick={() => setMonths(m)} className={`py-2 rounded-lg text-sm font-bold border border-white/20 transition ${months === m ? 'bg-white text-[#631529]' : 'hover:bg-white/10'}`}>{m}M</button>
                ))}
              </div>
              
              <div className="bg-black/20 p-6 rounded-2xl flex justify-between items-center backdrop-blur-sm">
                <div>
                  <span className="text-xs uppercase opacity-70 block mb-1">Monthly EMI</span>
                  <div className="text-3xl font-bold">₹ {emi.toLocaleString()}</div>
                </div>
                <button className="bg-white text-[#631529] px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-gray-100 transition">Apply Now</button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CTA  */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-gray-900">Ready to Rule the Beauty World?</h2>
          <p className="text-gray-500 mb-10 text-lg">Join the elite league of Grand Masters. Limited seats for the upcoming batch.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="bg-[#631529] text-white px-10 py-4 rounded-full font-bold hover:bg-[#4a101f] transition shadow-lg">Secure Your Seat</a>
            <a href="/contact" className="bg-gray-100 text-gray-900 px-10 py-4 rounded-full font-bold hover:bg-gray-200 transition">Talk to Counselor</a>
          </div>
        </div>
      </section>
    </>
  );
}