import { useEffect, useState } from "react";
import { 
  Apple, Activity, HeartPulse, Scale, 
  ChevronDown, Download, X, CheckCircle2, 
  Calculator, User, Leaf, Phone, ArrowRight,
  BookOpen, Trophy, Stethoscope, Utensils
} from "lucide-react";

// DATA 

const nutritionSpecifics = {
  fees: { total: 55000, minDownPayment: 10000 },
  modules: {
    clinical: [
      "Human Anatomy & Physiology", "Therapeutic Diets (Diabetes/BP/Thyroid)", 
      "PCOD & Hormonal Health", "Gut Health & Probiotics", "Hospital Kitchen Management"
    ],
    sports: [
      "Pre & Post Workout Nutrition", "Supplements & Whey Protein", "Hydration Strategies", 
      "Muscle Gain vs Fat Loss", "Meal Timing for Athletes"
    ],
    weight: [
      "Keto, Intermittent Fasting & Paleo", "Calorie Deficit Calculations", 
      "Behavioral Eating Patterns", "Detox & Cleansing Diets", "Maintenance Phases"
    ],
    software: [
      "DietCal Software Training", "Creating E-Diet Charts", "Client History Taking", 
      "Ethical Counseling Practices", "Setting up a Private Clinic"
    ]
  },
  career: [
    { role: "Clinical Dietitian", salary: "₹ 3.5L - 6L p.a." },
    { role: "Sports Nutritionist", salary: "₹ 5L - 12L p.a." },
    { role: "Corporate Wellness Coach", salary: "₹ 4L - 8L p.a." },
    { role: "Food Quality Auditor", salary: "₹ 3L - 5L p.a." }
  ],
  batches: [
    { id: 1, date: "Nov 10, 2025", type: "Weekday (Clinical Focus)", status: "Open", seats: 15 },
    { id: 2, date: "Dec 05, 2025", type: "Weekend (Sports Focus)", status: "Filling Fast", seats: 8 }
  ],
  partners: ["Apollo Hospitals", "Max Healthcare", "Gold's Gym", "Cult.fit", "HealthifyMe"]
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
        
        <div className={`p-8 text-white text-center ${isApply ? "bg-[#631529]" : "bg-[#631529]"}`}>
          {isApply ? <Leaf size={40} className="mx-auto mb-2 text-green-400" /> : <BookOpen size={40} className="mx-auto mb-2 text-yellow-400" />}
          <h3 className="text-xl font-bold">{isApply ? "Course Application" : "Syllabus Download"}</h3>
          <p className="text-xs text-white/80 mt-1">{isApply ? "Join the Health Revolution" : "Get the Full Module List"}</p>
        </div>

        <div className="p-6">
          {success ? (
            <div className="text-center py-8 animate-in zoom-in">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600"><CheckCircle2 size={32} /></div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Success!</h4>
              <p className="text-gray-500 text-sm mb-6">{isApply ? "Our counselor will call you shortly." : "The syllabus has been sent to your email."}</p>
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

export default function NutritionPage() {
  const [modalType, setModalType] = useState(null); // 'brochure' or 'apply'
  const [activeTab, setActiveTab] = useState("clinical");
  const [bookedBatches, setBookedBatches] = useState([]);
  
  // BMR Calculator State
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(170);
  const [age, setAge] = useState(25);
  const [activity, setActivity] = useState(1.2); // Sedentary
  
  const bmr = Math.round(10 * weight + 6.25 * height - 5 * age + 5); // Mifflin-St Jeor Equation (Male default for simplicity)
  const tdee = Math.round(bmr * activity);

  const { fees, modules, career, batches, partners } = nutritionSpecifics;

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
          <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#631529]/90 via-[#631529]/60 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
          <span className="bg-green-600 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 inline-block tracking-wider uppercase">Health & Wellness</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Diploma in <br /><span className="text-yellow-400">Nutrition & Dietetics</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl font-light">
            Become a certified Dietitian. Master clinical nutrition, sports dietetics, and therapeutic meal planning with hospital internships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => openModal('brochure')} className="bg-white text-[#631529] px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-gray-100 transition shadow-xl">
              <Download size={20}/> Syllabus PDF
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
          <div><div className="text-3xl font-bold text-[#631529]">Clinical</div><div className="text-xs text-gray-500 uppercase tracking-widest">Training</div></div>
          <div><div className="text-3xl font-bold text-[#631529]">DietCal</div><div className="text-xs text-gray-500 uppercase tracking-widest">Software</div></div>
          <div><div className="text-3xl font-bold text-[#631529]">Hospital</div><div className="text-xs text-gray-500 uppercase tracking-widest">Internships</div></div>
          <div><div className="text-3xl font-bold text-[#631529]">100%</div><div className="text-xs text-gray-500 uppercase tracking-widest">Placement</div></div>
        </div>
      </section>

      {/* CURRICULUM TABS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900">Course Curriculum</h2>
            <p className="text-gray-500 mt-2">A holistic approach to health, food, and healing.</p>
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
                  <span className="capitalize">{key} Nutrition</span>
                  {activeTab === key && <Leaf size={18} className="text-green-400" />}
                </button>
              ))}
            </div>

            <div className="lg:w-2/3 bg-green-50 rounded-3xl p-8 border border-green-100 min-h-[300px]">
              <h3 className="text-2xl font-bold text-[#631529] mb-6 capitalize flex items-center gap-2">
                {activeTab} Module
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {modules[activeTab].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm hover:translate-x-1 transition">
                    <CheckCircle2 size={18} className="text-green-600 shrink-0" />
                    <span className="font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BMR CALCULATOR */}
      <section className="py-20 bg-[#631529] text-white">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <span className="text-green-400 font-bold tracking-widest uppercase text-sm mb-4 block">Student Tool</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Learn Calorie Science</h2>
            <p className="text-white/80 mb-8 leading-relaxed">
              As a nutritionist, you won't just guess diets. You'll use scientific formulas like Mifflin-St Jeor to calculate BMR and TDEE. Try the tool our students use.
            </p>
            <div className="flex gap-4">
                <div className="bg-white/10 p-4 rounded-2xl border border-white/10 text-center">
                    <Activity size={24} className="text-green-400 mb-2 mx-auto"/>
                    <div className="font-bold">BMR</div>
                    <div className="text-xs opacity-60">Basal Rate</div>
                </div>
                <div className="bg-white/10 p-4 rounded-2xl border border-white/10 text-center">
                    <Utensils size={24} className="text-green-400 mb-2 mx-auto"/>
                    <div className="font-bold">TDEE</div>
                    <div className="text-xs opacity-60">Total Energy</div>
                </div>
            </div>
          </div>

          <div className="md:w-1/2 w-full bg-white text-gray-900 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Calculator size={20} className="text-[#631529]"/> Calorie Calculator
            </h3>
            
            <div className="space-y-4 mb-6">
                <div>
                    <label className="text-xs font-bold text-gray-500 flex justify-between"><span>Weight (kg)</span> <span>{weight}</span></label>
                    <input type="range" min="40" max="150" value={weight} onChange={(e) => setWeight(Number(e.target.value))} className="w-full accent-green-600" />
                </div>
                <div>
                    <label className="text-xs font-bold text-gray-500 flex justify-between"><span>Height (cm)</span> <span>{height}</span></label>
                    <input type="range" min="140" max="220" value={height} onChange={(e) => setHeight(Number(e.target.value))} className="w-full accent-green-600" />
                </div>
                <div>
                    <label className="text-xs font-bold text-gray-500 flex justify-between"><span>Age</span> <span>{age}</span></label>
                    <input type="range" min="18" max="80" value={age} onChange={(e) => setAge(Number(e.target.value))} className="w-full accent-green-600" />
                </div>
                <div>
                    <label className="text-xs font-bold text-gray-500 mb-1 block">Activity Level</label>
                    <select value={activity} onChange={(e) => setActivity(Number(e.target.value))} className="w-full p-2 border rounded-lg text-sm bg-gray-50">
                        <option value="1.2">Sedentary (Office Job)</option>
                        <option value="1.375">Light Exercise (1-3 days)</option>
                        <option value="1.55">Moderate Exercise (3-5 days)</option>
                        <option value="1.725">Heavy Exercise (6-7 days)</option>
                    </select>
                </div>
            </div>

            <div className="bg-green-50 p-6 rounded-2xl text-center border border-green-100">
              <p className="text-gray-500 text-xs uppercase tracking-wide font-bold mb-1">Daily Calories Needed</p>
              <div className="text-4xl font-extrabold text-green-700">{tdee} <span className="text-lg text-gray-400">kcal</span></div>
              <p className="text-xs text-gray-400 mt-2">To maintain current weight</p>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS & CAREER */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Partners */}
          <div className="text-center mb-16">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">Internship Partners</h2>
            <div className="flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition duration-500">
                {partners.map((p, i) => (
                    <span key={i} className="text-xl font-bold text-gray-400 flex items-center gap-2 hover:text-[#631529]">
                        <Stethoscope size={20}/> {p}
                    </span>
                ))}
            </div>
          </div>

          {/* Career Grid */}
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-gray-900">Career Scope</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {career.map((job, i) => (
              <div key={i} className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:border-green-200 transition text-center group">
                <div className="w-14 h-14 mx-auto bg-green-50 rounded-full flex items-center justify-center text-green-700 mb-4 group-hover:bg-green-600 group-hover:text-white transition">
                  <Trophy size={24} />
                </div>
                <h4 className="font-bold text-lg mb-1 text-gray-900">{job.role}</h4>
                <p className="text-sm text-[#631529] font-bold">{job.salary}</p>
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
              <h2 className="text-3xl font-bold mb-4">Start Your Career in Healthcare</h2>
              <p className="mb-8 opacity-90">Join the next batch and get your clinical certification.</p>
              <button onClick={() => openModal('apply')} className="bg-white text-[#631529] px-10 py-3.5 rounded-full font-bold hover:bg-gray-100 transition inline-block">Apply Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE STICKY BAR */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 flex gap-4 md:hidden z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <a href="tel:+918872500500" className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-900 py-3 rounded-xl font-bold">
          <Phone size={18} /> Call
        </a>
        <button onClick={() => openModal('apply')} className="flex-1 flex items-center justify-center gap-2 bg-[#631529] text-white py-3 rounded-xl font-bold">
          <ArrowRight size={18} /> Apply
        </button>
      </div>
    </>
  );
}