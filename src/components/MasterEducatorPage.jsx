import { useEffect, useState } from "react";
import { 
  BookOpen, Users, Presentation, Target, 
  ChevronDown, Calendar, Download, X, 
  Award, CheckCircle2, Package, Phone, ArrowRight,
  TrendingUp, Calculator, Quote, GraduationCap,
  Video, Mic, Layers, Briefcase
} from "lucide-react";

// DATA 

const facultyProfile = {
  name: "Jouee Patwardhan",
  designation: "Academic Director & Master Trainer",
  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
  summary: "With 30+ years of experience, Jouee is the 'Trainer of Trainers'. She has shaped the curriculum for India's top beauty academies and mentored over 5,000 students.",
  qualifications: ["CIDESCO Diploma", "City & Guilds Assessor", "VTCT Level 4 Award"]
};

const educatorSpecifics = {
  fees: { total: 85000, minDownPayment: 15000 },
  modules: [
    { title: "Andragogy (Adult Learning Psychology)", content: "Understanding how adults learn, handling diverse age groups, and psychology of student motivation." },
    { title: "Curriculum Design & Planning", content: "Creating lesson plans, structuring courses (CIBTAC/CIDESCO standards), and designing assessments." },
    { title: "Public Speaking & Delivery", content: "Voice modulation, body language, stage presence, and overcoming fear of public speaking." },
    { title: "Digital Teaching Mastery", content: "Conducting Zoom classes, creating video tutorials, and using LMS (Learning Management Systems)." },
    { title: "Classroom Management", content: "Handling difficult students, conflict resolution, and maintaining professional decorum." },
    { title: "Assessment & Feedback", content: "Designing theory papers, practical grading rubrics, and providing constructive feedback." }
  ],
  careerPath: [
    { role: "Junior Trainer", desc: "Start assisting in academies", pay: "₹ 25k - 40k/mo" },
    { role: "Senior Faculty", desc: "Lead your own batches", pay: "₹ 50k - 80k/mo" },
    { role: "Corporate Trainer", desc: "Train for brands like L'Oréal", pay: "₹ 8L - 15L p.a." },
    { role: "Academy Principal", desc: "Manage an entire institute", pay: "₹ 15L - 25L p.a." }
  ],
  batches: [
    { id: 1, date: "Nov 10, 2025", type: "Weekday (Mon-Fri)", status: "Open", seats: 8 },
    { id: 2, date: "Dec 01, 2025", type: "Weekend (Sat-Sun)", status: "Filling Fast", seats: 4 }
  ],
  kit: [
    { name: "Trainer's Manual", desc: "Comprehensive guide on teaching methodologies" },
    { name: "Digital Asset Pack", desc: "PPT Templates, Student Logs & Certificates" },
    { name: "Presentation Tools", desc: "Professional laser pointer & clicker" },
    { name: "Grooming Kit", desc: "Essentials for maintaining a corporate trainer look" }
  ],
  testimonials: [
    { name: "Pooja S.", role: "Education Head, Lakmé", text: "I was a great stylist but a nervous teacher. This course gave me the structure and confidence to lead a classroom." },
    { name: "Amit V.", role: "Brand Trainer, L'Oréal", text: "The module on digital teaching helped me land a job conducting international webinars. Highly recommended." }
  ]
};

//  COMPONENTS

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
        
        <div className="bg-slate-900 p-8 text-white text-center">
          <BookOpen size={40} className="mx-auto mb-2 text-yellow-500" />
          <h3 className="text-xl font-bold">Educator Syllabus</h3>
          <p className="text-xs text-slate-400 mt-1">Curriculum for Future Leaders</p>
        </div>

        <div className="p-6">
          {success ? (
            <div className="text-center py-8 animate-in zoom-in">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600"><CheckCircle2 size={32} /></div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Sent!</h4>
              <p className="text-gray-500 text-sm mb-6">Check your email for the roadmap.</p>
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

export default function MasterEducatorPage() {
  const [activeMod, setActiveMod] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookedBatches, setBookedBatches] = useState([]);
  
  const { fees, modules, careerPath, batches, kit, testimonials } = educatorSpecifics;
  
  // EMI
  const [downPayment, setDownPayment] = useState(fees.minDownPayment);
  const [months, setMonths] = useState(6);
  const emi = Math.round((fees.total - downPayment) / months);

  // Income Calculator
  const [workshopDays, setWorkshopDays] = useState(4);
  const [dayRate, setDayRate] = useState(15000);
  const monthlyFreelance = workshopDays * dayRate;

  useEffect(() => window.scrollTo(0,0), []);

  const handlePreBook = (id) => {
    if (!bookedBatches.includes(id)) {
      setBookedBatches([...bookedBatches, id]);
    }
  };

  const toggleModule = (index) => setActiveMod(activeMod === index ? null : index);

  return (
    <>
      <BrochureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      {/* HERO SECTION */}
      <section className="relative h-[85vh] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-[#631529]/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
          <span className="bg-yellow-500/20 border border-yellow-400/50 text-yellow-300 text-xs font-bold px-4 py-1.5 rounded-full mb-6 inline-block tracking-wider uppercase">Executive Programme</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Master Educator <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-white">Certification</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl font-light">
            Transition from an artist to a mentor. Learn the international methodology of teaching, curriculum design, and classroom leadership.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => setIsModalOpen(true)} className="bg-white text-[#631529] px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-gray-100 transition shadow-xl">
              <Download size={20}/> Download Brochure
            </button>
            <button className="backdrop-blur-md bg-white/10 border border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition">
              Speak to Academic Head
            </button>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div><div className="text-3xl font-bold text-[#631529]">VTCT</div><div className="text-xs text-gray-500 uppercase tracking-widest">Methods</div></div>
          <div><div className="text-3xl font-bold text-[#631529]">Digital</div><div className="text-xs text-gray-500 uppercase tracking-widest">Teaching</div></div>
          <div><div className="text-3xl font-bold text-[#631529]">100%</div><div className="text-xs text-gray-500 uppercase tracking-widest">Placement</div></div>
          <div><div className="text-3xl font-bold text-[#631529]">Global</div><div className="text-xs text-gray-500 uppercase tracking-widest">Validity</div></div>
        </div>
      </section>

      {/* CAREER TRAJECTORY */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-gray-900">Your Growth Path</h2>
            <p className="text-gray-500 mt-2">Where this certification can take you.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {careerPath.map((step, i) => (
              <div key={i} className="relative p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:-translate-y-2 transition duration-300">
                <div className="absolute -top-4 left-6 bg-[#631529] text-white w-8 h-8 flex items-center justify-center rounded-full font-bold text-sm">
                  {i + 1}
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-800">{step.role}</h3>
                <p className="text-sm text-gray-500 mt-2 min-h-[40px]">{step.desc}</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="text-xs uppercase font-bold text-green-600 tracking-wider">Avg. Pay</span>
                  <div className="font-bold text-gray-900">{step.pay}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          
          {/* Accordion */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Teacher Training Modules</h2>
            <div className="space-y-4">
              {modules.map((m, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:border-[#631529] transition">
                  <button onClick={() => toggleModule(i)} className="w-full flex justify-between items-center p-5 font-bold text-left text-gray-800 hover:bg-gray-50 transition">
                    <span className="flex items-center gap-3">
                      <span className="bg-[#631529] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">{i+1}</span>
                      {m.title}
                    </span> 
                    <ChevronDown className={`transition-transform duration-300 ${activeMod === i ? "rotate-180" : ""}`} />
                  </button>
                  {activeMod === i && (
                    <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                      <div className="pl-11 mt-2">{m.content}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Faculty & Kit */}
          <div>
            <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-yellow-500">
                  <img src={facultyProfile.image} alt="Faculty" className="w-full h-full object-cover"/>
                </div>
                <div>
                  <h3 className="font-bold text-lg">{facultyProfile.name}</h3>
                  <p className="text-yellow-500 text-sm">{facultyProfile.designation}</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm italic mb-6">"{facultyProfile.summary}"</p>
              <div className="flex flex-wrap gap-2">
                {facultyProfile.qualifications.map((q,i) => (
                  <span key={i} className="text-xs border border-slate-600 px-2 py-1 rounded bg-slate-800">{q}</span>
                ))}
              </div>
            </div>

            <div className="bg-[#fff0f4] p-8 rounded-3xl border border-pink-100">
              <h3 className="text-xl font-bold text-[#631529] mb-4 flex items-center gap-2">
                <Package size={20}/> Trainer's Toolkit
              </h3>
              <ul className="space-y-3">
                {kit.map((k, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#631529] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-gray-900 text-sm">{k.name}</span>
                      <p className="text-xs text-gray-500">{k.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* INCOME CALCULATOR */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <span className="text-yellow-400 font-bold tracking-widest uppercase text-sm mb-4 block">Freelance Trainer</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Calculate Your Worth</h2>
            <p className="text-slate-300 mb-8">
              As a Master Educator, you can conduct weekend workshops for salons or brands. Estimate your potential side-income.
            </p>
            <div className="flex gap-4">
              <div className="bg-white/10 p-4 rounded-xl">
                <Users size={24} className="text-yellow-400 mb-2"/>
                <div className="font-bold">High Demand</div>
                <div className="text-xs opacity-60">Corporate Training</div>
              </div>
              <div className="bg-white/10 p-4 rounded-xl">
                <Presentation size={24} className="text-yellow-400 mb-2"/>
                <div className="font-bold">Scalable</div>
                <div className="text-xs opacity-60">Online Classes</div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 w-full bg-white text-gray-900 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Calculator size={20} className="text-[#631529]"/> Workshop Earnings
            </h3>
            
            <div className="mb-6">
              <label className="flex justify-between text-sm font-bold text-gray-600 mb-2">
                <span>Workshops / Month</span>
                <span>{workshopDays} Days</span>
              </label>
              <input type="range" min="1" max="10" value={workshopDays} onChange={(e) => setWorkshopDays(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg accent-[#631529]" />
            </div>

            <div className="mb-8">
              <label className="flex justify-between text-sm font-bold text-gray-600 mb-2">
                <span>Fee per Day (₹)</span>
                <span>{dayRate.toLocaleString()}</span>
              </label>
              <input type="range" min="5000" max="50000" step="5000" value={dayRate} onChange={(e) => setDayRate(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg accent-[#631529]" />
            </div>

            <div className="bg-slate-100 p-6 rounded-2xl text-center">
              <p className="text-gray-500 text-xs uppercase tracking-wide font-bold mb-1">Extra Monthly Income</p>
              <div className="text-4xl font-extrabold text-[#631529]">₹ {monthlyFreelance.toLocaleString()}</div>
              <p className="text-xs text-gray-400 mt-2">*Working just {workshopDays} days a month</p>
            </div>
          </div>
        </div>
      </section>

      {/* BATCHES & CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif font-bold mb-10 text-gray-900">Upcoming Teacher Training Batches</h2>
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
              <h2 className="text-3xl font-bold mb-4">Inspire the Next Generation</h2>
              <p className="mb-8 opacity-90">Turn your experience into a legacy. Limited seats for the Master Educator Programme.</p>
              <a href="/contact" className="bg-white text-[#631529] px-10 py-3.5 rounded-full font-bold hover:bg-gray-100 transition inline-block">Apply for Interview</a>
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