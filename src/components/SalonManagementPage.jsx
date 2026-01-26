import { useEffect, useState } from "react";
import { 
  Briefcase, TrendingUp, Users, Target, 
  ChevronDown, Calendar, Download, X, 
  CheckCircle2, Laptop, Phone, ArrowRight,
  Calculator, Quote, Building2, BarChart3,
  PieChart, FileText, Clock, Rocket, Layers, Key
} from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";

// DATA

const managementSpecifics = {
  fees: { total: 95000, minDownPayment: 20000 },
  modules: {
    operations: [
      "Salon SOPs & Daily Operations", "Inventory Management", "Hygiene & Safety Protocols", 
      "Vendor Management & Negotiation", "Front Desk Excellence", "Software Implementation (CRM)"
    ],
    hr: [
      "Recruitment & Hiring Strategies", "Staff Training & Development", "Performance Appraisals", 
      "Payroll & Commission Structures", "Conflict Resolution", "Team Motivation"
    ],
    marketing: [
      "Digital Marketing for Salons", "Social Media Branding", "Client Retention Programs", 
      "Running Offers & Promotions", "Influencer Collaborations", "Google My Business Optimization"
    ],
    finance: [
      "P&L Statement Analysis", "Budgeting & Forecasting", "Pricing Services Correctly", 
      "Cost Control Measures", "Taxation & Compliance", "Break-Even Analysis"
    ]
  },
  career: [
    { role: "Salon Manager", salary: "₹ 4L - 8L p.a." },
    { role: "Operations Head", salary: "₹ 10L - 18L p.a." },
    { role: "Franchise Owner", salary: "₹ 15L - 50L+ p.a." },
    { role: "Brand Consultant", salary: "₹ 6L - 12L p.a." }
  ],
  batches: [
    { id: 1, date: "Nov 15, 2025", type: "Weekend Executive", status: "Open", seats: 10 },
    { id: 2, date: "Dec 01, 2025", type: "Weekday (Mon-Fri)", status: "Filling Fast", seats: 5 }
  ],
  digitalKit: [
    { name: "Salon CRM Software", desc: "1-Year License for Booking/Billing" },
    { name: "HR Policy Handbook", desc: "Ready-to-use Contracts & Offer Letters" },
    { name: "Financial Templates", desc: "Excel Sheets for P&L, Inventory & Payroll" },
    { name: "Marketing Calendar", desc: "365-Day Social Media Content Plan" }
  ],
  testimonials: [
    { name: "Rohan D.", role: "Owner, Luxe Studio", text: "I was losing money despite having clients. The Finance module taught me how to fix my pricing and now I'm profitable." },
    { name: "Simran K.", role: "Manager, Lakmé Salon", text: "The HR training helped me manage a team of 15 stylists effectively. Staff turnover has dropped significantly." }
  ],
  startupRoadmap: [
    { step: "01", title: "Concept & Legal", desc: "Registration, Licensing, Location Hunting" },
    { step: "02", title: "Setup & Interiors", desc: "Floor Planning, Equipment Sourcing" },
    { step: "03", title: "Hiring & Training", desc: "Recruiting Stylists, Setting SOPs" },
    { step: "04", title: "Soft Launch", desc: "Trial Run, Friends & Family Week" },
    { step: "05", title: "Grand Opening", desc: "Marketing Blitz, Client Acquisition" }
  ],
  dailySchedule: [
    { time: "09:30 AM", task: "Opening Checklist & Cash Float Check" },
    { time: "10:00 AM", task: "Team Briefing & Target Setting" },
    { time: "01:00 PM", task: "Inventory Audit & Vendor Orders" },
    { time: "04:00 PM", task: "Client Feedback Calls & CRM Review" },
    { time: "08:00 PM", task: "Daily Sales Closing & Reporting" }
  ]
};

// COMPONENTS

const BrochureModal = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      const toastId=toast.loading("Sending...");
      const formData = {
        name: e.target[0].value,
        email: e.target[1].value,
        phone: e.target[2].value,
      };
  
      try {
        await axios.post(
          "https://kaya-server.vercel.app/api/leads",
          formData
        );
  
        toast.success("Brochure sent successfully!", { id: toastId });
        setSuccess(true);
      } catch (error) {
        console.error(error);
        toast.error("Something went wrong!", { id: toastId });
      } finally {
        setLoading(false);
      }
    };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="bg-white rounded-3xl w-full max-w-md relative overflow-hidden shadow-2xl">
        <button onClick={onClose} className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/20 text-white hover:bg-black/40"><X size={20}/></button>
        
        <div className="bg-[#631529] p-8 text-white text-center">
          <Briefcase size={40} className="mx-auto mb-2 text-white/80" />
          <h3 className="text-xl font-bold">MBA in Beauty</h3>
          <p className="text-xs text-white/70 mt-1">Get the Management Curriculum</p>
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
                {loading ? "Sending..." : "Download Curriculum"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default function SalonManagementPage() {
  const [activeTab, setActiveTab] = useState("operations");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookedBatches, setBookedBatches] = useState([]);
  
  const { fees, modules, career, batches, digitalKit, startupRoadmap, dailySchedule } = managementSpecifics;
  
  // EMI
  const [downPayment, setDownPayment] = useState(fees.minDownPayment);
  const [months, setMonths] = useState(6);
  const emi = Math.round((fees.total - downPayment) / months);

  // Profit Calculator
  const [revenue, setRevenue] = useState(500000);
  const [expenses, setExpenses] = useState(60); 
  const profit = revenue * ((100 - expenses) / 100);

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
          <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2a0a12]/95 via-[#631529]/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
          <span className="bg-white/20 border border-white/30 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 inline-block tracking-wider uppercase">Business School for Beauty</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Salon Management <br /><span className="text-white/80">& Operations</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl font-light">
            Don't just work in a salon, learn to own one. Master HR, Finance, Marketing, and Operations with our executive programme.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => setIsModalOpen(true)} className="bg-white text-[#631529] px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-gray-100 transition shadow-xl">
              <Download size={20}/> Download Brochure
            </button>
            <button className="backdrop-blur-md bg-white/10 border border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition">
              Consult a Career Advisor
            </button>
          </div>
        </div>
      </section>

      {/* STARTUP ROADMAP */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-gray-900">Your Journey to Ownership</h2>
            <p className="text-gray-500 mt-2">We guide you through every step of launching your own brand.</p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {startupRoadmap.map((step, i) => (
              <div key={i} className="relative group">
                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:border-[#631529] hover:-translate-y-2 transition duration-300 h-full">
                  <div className="text-4xl font-extrabold text-gray-100 mb-4 group-hover:text-pink-100 transition">{step.step}</div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-xs text-gray-500">{step.desc}</p>
                </div>
                {i !== startupRoadmap.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 text-gray-300 transform -translate-y-1/2 z-10">
                    <ArrowRight size={20} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CURRICULUM TABS  */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900">Executive Curriculum</h2>
            <p className="text-gray-500 mt-2">Comprehensive modules designed for future leaders.</p>
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
                  <span className="capitalize">{key === 'hr' ? 'HR & Staffing' : key}</span>
                  {activeTab === key && <CheckCircle2 size={18} />}
                </button>
              ))}
            </div>

            <div className="lg:w-2/3 bg-gray-50 rounded-3xl p-8 border border-gray-100 min-h-[300px]">
              <h3 className="text-2xl font-bold text-[#631529] mb-6 capitalize flex items-center gap-2">
                {activeTab} Strategies
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {modules[activeTab].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm hover:translate-x-1 transition">
                    <Target size={18} className="text-[#631529] shrink-0 mt-1" />
                    <span className="font-medium text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROFIT CALCULATOR */}
      <section className="py-20 bg-[#631529] text-white">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <span className="bg-white/20 text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">BUSINESS INTELLIGENCE</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Profitability Simulator</h2>
            <p className="opacity-80 mb-8 leading-relaxed">
              Understand the numbers behind the glamour. Learn how managing expenses (rent, staff, product) impacts your bottom line.
            </p>
            <div className="flex gap-4">
                <div className="bg-white/10 p-4 rounded-2xl">
                    <BarChart3 size={24} className="mb-2"/>
                    <div className="font-bold">Revenue</div>
                    <div className="text-xs opacity-60">Optimized Pricing</div>
                </div>
                <div className="bg-white/10 p-4 rounded-2xl">
                    <PieChart size={24} className="mb-2"/>
                    <div className="font-bold">Costs</div>
                    <div className="text-xs opacity-60">Expense Control</div>
                </div>
            </div>
          </div>

          <div className="md:w-1/2 w-full bg-white text-gray-900 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Calculator size={20} className="text-[#631529]"/> Net Profit Estimator
            </h3>
            <div className="mb-6">
              <label className="flex justify-between text-sm font-bold text-gray-600 mb-2">
                <span>Monthly Revenue</span><span>₹ {revenue.toLocaleString()}</span>
              </label>
              <input type="range" min="100000" max="2000000" step="50000" value={revenue} onChange={(e) => setRevenue(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg accent-[#631529]" />
            </div>
            <div className="mb-8">
              <label className="flex justify-between text-sm font-bold text-gray-600 mb-2">
                <span>Expenses (Rent+Staff+Stock)</span><span>{expenses}%</span>
              </label>
              <input type="range" min="30" max="90" value={expenses} onChange={(e) => setExpenses(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg accent-[#631529]" />
            </div>
            <div className="bg-[#fff0f4] p-6 rounded-2xl text-center border border-pink-100">
              <p className="text-gray-500 text-xs uppercase tracking-wide font-bold mb-1">Estimated Net Profit</p>
              <div className="text-4xl font-extrabold text-[#631529]">₹ {profit.toLocaleString()}</div>
              <p className="text-xs text-gray-400 mt-2">Margin: {100 - expenses}%</p>
            </div>
          </div>
        </div>
      </section>

      {/* MANAGER'S TOOLKIT  */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center bg-gray-50 rounded-[40px] p-10 border border-gray-100">
            <div className="md:w-1/2">
              <span className="text-[#631529] font-bold tracking-widest uppercase text-sm flex items-center gap-2 mb-4">
                <Laptop size={18}/> Digital Assets Included
              </span>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Manager's Toolkit</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Start your career with a complete digital ecosystem. We provide you with licensed software and professional templates worth ₹50,000.
              </p>
              <ul className="space-y-4">
                {digitalKit.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="bg-white p-2 rounded-lg shadow-sm text-[#631529]"><FileText size={18} /></div>
                    <div>
                      <span className="font-bold text-gray-900 block">{item.name}</span>
                      <span className="text-sm text-gray-500">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Daily Schedule Preview (NEW) */}
            <div className="md:w-1/2 relative w-full">
              <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100 -rotate-1 hover:rotate-0 transition duration-500">
                <div className="flex items-center gap-2 mb-6 border-b border-gray-100 pb-4">
                  <Clock size={20} className="text-[#631529]"/>
                  <span className="font-bold text-gray-800">Day in the Life of a Manager</span>
                </div>
                <div className="space-y-4">
                  {dailySchedule.map((item, i) => (
                    <div key={i} className="flex gap-4 items-center">
                      <span className="text-xs font-bold text-gray-400 w-16">{item.time}</span>
                      <div className="flex-1 bg-gray-50 p-2 rounded-lg text-sm text-gray-700 border-l-4 border-[#631529]">
                        {item.task}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAREER & EMI */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Leadership Opportunities</h2>
            <div className="grid gap-4 mb-10">
              {career.map((c, i) => (
                <div key={i} className="flex justify-between items-center p-5 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition group">
                  <div className="flex items-center gap-4">
                    <div className="bg-gray-100 p-2 rounded-lg group-hover:bg-[#631529] group-hover:text-white transition">
                        <Briefcase size={20}/>
                    </div>
                    <span className="font-bold text-gray-800">{c.role}</span>
                  </div>
                  <span className="font-bold text-[#631529]">{c.salary}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Investment & EMI</h2>
            <div className="bg-white border border-gray-200 p-8 rounded-3xl shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Total Fee</h3>
                <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">No Interest EMI</span>
              </div>
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2 font-bold text-gray-500"><span>Down Payment</span><span>₹ {downPayment.toLocaleString()}</span></div>
                <input type="range" min="10000" max={fees.total - 10000} step="5000" value={downPayment} onChange={(e) => setDownPayment(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg accent-[#631529]" />
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
              <h2 className="text-3xl font-bold mb-4">Lead the Future of Beauty</h2>
              <p className="mb-8 opacity-90">Join the elite league of salon managers and owners.</p>
              <a href="/contact" className="bg-white text-[#631529] px-10 py-3.5 rounded-full font-bold hover:bg-gray-100 transition inline-block">Apply Now</a>
            </div>
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