import { useEffect, useState } from "react";
import { 
  Download, X, Leaf, Briefcase, Award, 
  CheckCircle2, Package, Quote, ChevronDown,
  Calculator, IndianRupee, Building2, Phone, Calendar
} from "lucide-react";

// DATA

const beautySpecifics = {
  fees: { total: 85000, minDownPayment: 15000 },
  modules: [
    { title: "The Science of Beauty", content: "Bacteriology, sanitation, sterilization, and skin histology (bones, muscles, nerves)." },
    { title: "Advanced Facials", content: "European facials, lymphatic drainage massage, and treating acne/pigmentation." },
    { title: "Esthiology Techniques", content: "Electro-therapy (Galvanic, High Frequency, Vacuum Suction), microdermabrasion basics." },
    { title: "Hair Removal Mastery", content: "Advanced waxing (Rica/Bean), threading, and brow mapping techniques." },
    { title: "Body Polishing & Spa", content: "Body wraps, exfoliation techniques, back treatments, and Swedish massage basics." },
    { title: "Client Care & Retail", content: "Consultation charts, home-care prescription, and selling retail products effectively." }
  ],
  career: [
    { role: "Beauty Therapist", salary: "₹ 3.5L - 6L p.a." },
    { role: "Esthetician", salary: "₹ 4L - 7L p.a." },
    { role: "Spa Manager", salary: "₹ 5L - 9L p.a." },
    { role: "Beauty Advisor", salary: "₹ 3L - 5L p.a." }
  ],
  batches: [
    { date: "Oct 22, 2025", type: "Weekday", status: "Open", seats: 8 },
    { date: "Nov 05, 2025", type: "Weekend", status: "Filling Fast", seats: 4 }
  ],
  kit: [
    { name: "Pro Facial Kit", desc: "Cleansers, toners, masks & serums" },
    { name: "Manicure Set", desc: "Professional steel tools & buffers" },
    { name: "Waxing Heater", desc: "Single pot wax warmer" },
    { name: "Apron & Towels", desc: "Branded salon wear" },
    { name: "Brush Set", desc: "Facial application brushes" }
  ],
  testimonials: [
    { name: "Anjali M.", role: "Spa Manager, Taj", text: "The practical training in facial electricals gave me an edge over others. Orane's diploma is truly global." },
    { name: "Rohit K.", role: "Freelance Therapist", text: "I started my own home salon service immediately after the course. The kit provided was enough to start!" }
  ],
  partners: [
    "Lakmé Salon", "Kaya Skin Clinic", "VLCC", "Urban Company", 
    "O2 Spa", "Nykaa Pro", "Bodycraft", "Enrich Salon"
  ],
  comparison: {
    headers: ["Feature", "Certificate", "Diploma", "Advanced Diploma"],
    rows: [
      { feature: "Duration", val1: "3 Months", val2: "6 Months", val3: "12 Months" },
      { feature: "Facial Electricals", val1: "Basic", val2: "Advanced", val3: "Expert + Laser" },
      { feature: "Body Therapy", val1: "❌", val2: "Basics", val3: "Complete Spa" },
      { feature: "Intl. Certification", val1: "❌", val2: "Optional", val3: "Included (CIBTAC)" },
      { feature: "Placement", val1: "Assistance", val2: "Guaranteed", val3: "Guaranteed + Global" }
    ]
  }
};

// COMPONENTS

const BrochureModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-3xl w-full max-w-md relative overflow-hidden">
        <button onClick={onClose} className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/20 text-white hover:bg-black/40"><X size={20}/></button>
        <div className="bg-[#631529] p-8 text-white text-center">
          <Download size={32} className="mx-auto mb-2 opacity-80" />
          <h3 className="text-xl font-bold">Download Syllabus</h3>
          <p className="text-sm text-pink-100">Get the full syllabus & fee structure.</p>
        </div>
        <form className="p-6 space-y-4">
          <input type="text" placeholder="Full Name" className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-[#631529] outline-none" />
          <input type="tel" placeholder="Phone Number" className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-[#631529] outline-none" />
          <input type="email" placeholder="Email Address" className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-[#631529] outline-none" />
          <button type="button" onClick={onClose} className="w-full bg-[#631529] text-white py-3 rounded-xl font-bold hover:bg-[#4a101f] transition">Download Now</button>
        </form>
      </div>
    </div>
  );
};

export default function BeautyCoursesPage() {
  const [activeMod, setActiveMod] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Safe destructuring
  const { 
    fees = { total: 0, minDownPayment: 0 }, 
    modules = [], 
    career = [], 
    batches = [], 
    kit = [], 
    testimonials = [], 
    partners = [],
    comparison = { headers: [], rows: [] } 
  } = beautySpecifics || {};
  
  // EMI State
  const [downPayment, setDownPayment] = useState(fees.minDownPayment);
  const [months, setMonths] = useState(6);
  const emi = Math.round((fees.total - downPayment) / months);

  // Earnings Calculator State
  const [clientsPerDay, setClientsPerDay] = useState(2);
  const [avgTicketSize, setAvgTicketSize] = useState(1500);
  const dailyIncome = clientsPerDay * avgTicketSize;
  const monthlyIncome = dailyIncome * 25; // Assuming 25 working days

  useEffect(() => window.scrollTo(0,0), []);

  const toggleModule = (index) => setActiveModule(activeMod === index ? null : index);

  return (
    <>
      <BrochureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      {/* HERO SECTION */}
      <section className="relative h-[85vh] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
          <span className="bg-[#631529] text-xs font-bold px-4 py-1.5 rounded-full mb-6 inline-block tracking-wider">ESTHIOLOGY & CULTURE</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Expertise in <br /><span className="text-pink-400">Beauty Therapy</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl font-light">
            Master the science of skincare, facial electricals, and holistic therapies with international standards.
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

      {/* COURSE COMPARISON */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900">Choose Your Level</h2>
            <p className="text-gray-500 mt-2">Find the course that fits your career goals.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-gray-50 text-gray-900">
                  {comparison.headers.map((h, i) => (
                    <th key={i} className={`p-4 font-bold border-b border-gray-200 ${i===0 ? 'w-1/4' : 'w-1/4 text-center'}`}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.rows.map((row, i) => (
                  <tr key={i} className="border-b border-gray-100 hover:bg-pink-50/50 transition">
                    <td className="p-4 font-bold text-gray-700">{row.feature}</td>
                    <td className="p-4 text-center text-gray-600">{row.val1}</td>
                    <td className="p-4 text-center text-gray-600 font-medium">{row.val2}</td>
                    <td className="p-4 text-center text-gray-600">{row.val3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* HIRING PARTNERS */}
      <section className="py-16 bg-[#faf7f7] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h4 className="text-sm font-bold text-[#631529] uppercase tracking-widest mb-8">Our Graduates Work At</h4>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
            {partners.map((partner, i) => (
              <div key={i} className="flex items-center gap-2 text-xl font-bold text-gray-400 hover:text-[#631529] transition cursor-default">
                <Building2 size={24} /> {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODULES & CAREER */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          
          {/* Accordion */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Detailed Curriculum</h2>
            <div className="space-y-4">
              {modules.map((m, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                  <button onClick={() => setActiveMod(activeMod === i ? null : i)} className="w-full flex justify-between items-center p-5 font-bold text-left hover:bg-gray-50 transition">
                    <span className="flex items-center gap-3">
                      <span className="bg-pink-100 text-[#631529] w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">{i+1}</span>
                      {m.title}
                    </span> 
                    <ChevronDown className={`transition-transform duration-300 ${activeMod === i ? "rotate-180" : ""}`} />
                  </button>
                  {activeMod === i && (
                    <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">
                      <div className="pl-11">{m.content}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Career & Fees */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Career & Earnings</h2>
            <div className="grid grid-cols-1 gap-4 mb-10">
              {career.map((c, i) => (
                <div key={i} className="flex justify-between items-center p-5 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-[#631529] transition group">
                  <span className="font-bold flex items-center gap-3 text-gray-700 group-hover:text-[#631529]">
                    <Briefcase size={18} className="text-gray-400 group-hover:text-[#631529]"/> {c.role}
                  </span>
                  <span className="font-bold text-gray-900">{c.salary}</span>
                </div>
              ))}
            </div>

            {/* EMI Card */}
            <div className="bg-[#2a0a12] text-white p-8 rounded-3xl shadow-xl">
              <div className="flex items-center gap-2 mb-6">
                <span className="bg-[#631529] p-2 rounded-lg"><Award size={20}/></span>
                <h3 className="text-xl font-bold">Smart Fee Plan</h3>
              </div>
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2 opacity-80"><span>Down Payment</span><span>₹ {downPayment.toLocaleString()}</span></div>
                <input type="range" min="10000" max={fees.total - 10000} step="5000" value={downPayment} onChange={(e) => setDownPayment(Number(e.target.value))} className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-pink-500" />
              </div>
              <div className="flex gap-2 mb-6">
                {[3, 6, 9, 12].map(m => (
                  <button key={m} onClick={() => setMonths(m)} className={`flex-1 py-1.5 rounded-lg text-sm border border-gray-600 transition ${months === m ? 'bg-white text-black font-bold' : 'hover:bg-white/10'}`}>{m}M</button>
                ))}
              </div>
              <div className="bg-white/10 p-4 rounded-xl flex justify-between items-center">
                <span className="text-sm opacity-70">Monthly EMI</span>
                <div className="text-2xl font-bold">₹ {emi.toLocaleString()}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EARNINGS CALCULATOR  */}
      <section className="py-20 bg-[#631529] text-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <span className="bg-white/20 text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">FREELANCE POTENTIAL</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Be Your Own Boss</h2>
            <p className="opacity-80 mb-8 leading-relaxed">
              Don't just look for a job—create one. Use our calculator to see how much you can earn as a freelance Beauty Therapist working just a few hours a day.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-white text-[#631529] p-3 rounded-full"><CheckCircle2 size={20}/></div>
                <div>
                  <h4 className="font-bold">Low Investment</h4>
                  <p className="text-xs opacity-70">Start with just your student kit</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white text-[#631529] p-3 rounded-full"><Calculator size={20}/></div>
                <div>
                  <h4 className="font-bold">High Returns</h4>
                  <p className="text-xs opacity-70">Earn back your course fee in months</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 w-full bg-white text-gray-900 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><IndianRupee size={20} className="text-[#631529]"/> Earnings Estimator</h3>
            
            <div className="mb-6">
              <label className="block text-sm font-bold text-gray-600 mb-2">Clients Per Day: {clientsPerDay}</label>
              <input type="range" min="1" max="10" value={clientsPerDay} onChange={(e) => setClientsPerDay(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#631529]" />
            </div>

            <div className="mb-8">
              <label className="block text-sm font-bold text-gray-600 mb-2">Avg. Ticket Size (₹): {avgTicketSize}</label>
              <input type="range" min="500" max="5000" step="100" value={avgTicketSize} onChange={(e) => setAvgTicketSize(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#631529]" />
            </div>

            <div className="bg-[#fff0f4] p-6 rounded-2xl text-center border border-pink-100">
              <p className="text-gray-500 text-sm uppercase tracking-wide font-bold">Potential Monthly Income</p>
              <div className="text-4xl font-extrabold text-[#631529] mt-2">₹ {monthlyIncome.toLocaleString()}</div>
              <p className="text-xs text-gray-400 mt-2">*Based on 25 working days</p>
            </div>
          </div>
        </div>
      </section>

      {/* STUDENT KIT */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-pink-50 rounded-[40px] p-10 md:p-16 border border-pink-100 flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <span className="text-[#631529] font-bold tracking-widest uppercase text-sm flex items-center gap-2 mb-2">
                <Package size={18}/> Included Free
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">Professional Student Kit</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Everything you need to start practicing from Day 1. Our premium kit includes international standard products used in top salons.
              </p>
              <ul className="space-y-4">
                {kit.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-[#631529] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-gray-900 block">{item.name}</span>
                      <span className="text-xs text-gray-500">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 relative">
              <div className="bg-white p-6 rounded-3xl shadow-xl rotate-3 hover:rotate-0 transition duration-500">
                <img src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=600" alt="Student Kit" className="rounded-2xl w-full object-cover h-64" />
                <div className="mt-4 text-center font-bold text-[#631529]">Worth ₹ 15,000+</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ALUMNI STORIES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Alumni Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-3xl relative">
                <Quote size={40} className="text-pink-200 absolute top-6 right-6" />
                <p className="text-gray-600 italic mb-6 text-lg">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-[#631529] font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{t.name}</h4>
                    <p className="text-sm text-[#631529] font-medium">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BATCHES & CTA  */}
      <section className="py-20 bg-[#faf7f7]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif font-bold mb-10">Upcoming Batches</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {batches.map((b, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl shadow-sm flex justify-between items-center group hover:border-[#631529] border border-transparent transition">
                <div className="text-left">
                  <h4 className="font-bold text-lg">{b.date}</h4>
                  <p className="text-sm text-gray-500">{b.type}</p>
                </div>
                <div className="text-right">
                  <span className={`text-xs font-bold px-2 py-1 rounded ${b.seats < 5 ? 'bg-orange-100 text-orange-700' : 'bg-green-100 text-green-700'}`}>{b.status}</span>
                  <button className="block mt-2 text-[#631529] font-bold text-sm underline opacity-0 group-hover:opacity-100 transition">Reserve</button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-[#631529] rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Start Your Beauty Career</h2>
              <p className="mb-8 opacity-90">Join the next batch and get your international certification.</p>
              <a href="/contact" className="bg-white text-[#631529] px-10 py-3.5 rounded-full font-bold hover:bg-gray-100 transition inline-block">Apply Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* STICKY MOBILE CTA  */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 flex gap-4 md:hidden z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <a href="tel:+918872500500" className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-900 py-3 rounded-xl font-bold">
          <Phone size={18} /> Call Us
        </a>
        <a href="/contact" className="flex-1 flex items-center justify-center gap-2 bg-[#631529] text-white py-3 rounded-xl font-bold">
          <Calendar size={18} /> Book Demo
        </a>
      </div>
    </>
  );
}