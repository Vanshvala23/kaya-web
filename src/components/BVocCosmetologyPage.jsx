  import { useEffect, useState } from "react";
import { 
  GraduationCap, BookOpen, Clock, Globe, 
  CheckCircle2, Download, Phone, ArrowRight,
  FileText, Landmark, UserCheck, Calendar,
  TrendingUp, Percent, Award, Briefcase, Calculator,
  Building2, Users, MapPin, X, HelpCircle, ChevronDown,
  PenTool
} from "lucide-react";

// DATA

const degreeSpecifics = {
  details: {
    duration: "3 Years (6 Semesters)",
    eligibility: "10+2 (Any Stream)",
    affiliation: "Recognized by UGC & NSDC",
    fees: "₹ 1.2L - 1.5L per year"
  },
  semesters: [
    { 
      year: "Year 1: Diploma Level", 
      subjects: ["Skin Anatomy & Physiology", "Basic Hair Dressing", "Foundation Makeup Artistry", "Communication Skills", "Computer Basics"] 
    },
    { 
      year: "Year 2: Advanced Diploma", 
      subjects: ["Advanced Chemical Peels", "Creative Hair Coloring", "Bridal & Airbrush Makeup", "Salon Management Basics", "Nutrition & Dietetics"] 
    },
    { 
      year: "Year 3: B.VOC Degree", 
      subjects: ["Clinical Cosmetology", "Laser Physics & Safety", "Spa Therapies", "Entrepreneurship Development", "Final Project & Internship"] 
    }
  ],
  career: [
    { role: "Clinical Cosmetologist", salary: "₹ 4L - 8L p.a." },
    { role: "Clinic Manager", salary: "₹ 5L - 10L p.a." },
    { role: "Beauty Lecturer", salary: "₹ 6L - 12L p.a." },
    { role: "Govt. Skill Trainer", salary: "₹ 5L - 9L p.a." }
  ],
  comparison: {
    headers: ["Feature", "Normal Diploma", "B.VOC Degree"],
    rows: [
      { feature: "Duration", val1: "6 - 12 Months", val2: "3 Years" },
      { feature: "Govt. Jobs", val1: "Limited", val2: "Eligible" },
      { feature: "Study Abroad", val1: "Harder", val2: "Master's Eligible" },
      { feature: "Recognition", val1: "Institute Level", val2: "University (UGC)" }
    ]
  },
  batches: [
    { id: 1, date: "Aug 01, 2025", type: "Academic Year 2025-26", status: "Open", seats: 60 }
  ],
  gallery: [
    "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800", 
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800", 
    "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=600", 
    "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=600"  
  ],
  admissionSteps: [
    { step: "01", title: "Submit Application", desc: "Fill the form with 12th Marks" },
    { step: "02", title: "Entrance/Interview", desc: "Basic aptitude & creative test" },
    { step: "03", title: "Documentation", desc: "Submit original marksheets" },
    { step: "04", title: "Fee Payment", desc: "Pay admission fee to secure seat" }
  ],
  partners: ["Lakmé", "Kaya Skin Clinic", "VLCC", "Urban Company", "Nykaa Pro"],
  faqs: [
    { q: "Is this degree valid for Government jobs?", a: "Yes, B.VOC is a UGC-recognized degree, making you eligible for exams like UPSC, SSC, and state govt roles." },
    { q: "Can I go abroad after this?", a: "Absolutely. The degree is recognized globally, and you can apply for a Master's degree abroad or skilled migration visas." },
    { q: "Do I need Science in 12th?", a: "No. Students from Arts, Commerce, or Science streams are eligible." },
    { q: "Is there an entrance exam?", a: "We conduct a basic aptitude interview to assess your interest and communication skills." }
  ]
};

// COMPONENTS
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
        
        {/* Updated Background Color to #631529 */}
        <div className="bg-[#631529] p-8 text-white text-center">
          {isApply ? <PenTool size={40} className="mx-auto mb-2 text-white" /> : <GraduationCap size={40} className="mx-auto mb-2 text-yellow-400" />}
          <h3 className="text-xl font-bold">{isApply ? "Admission Application" : "University Prospectus"}</h3>
          <p className="text-xs text-white/80 mt-1">{isApply ? "Secure your seat for 2025" : "Get the 3-Year Roadmap"}</p>
        </div>

        <div className="p-6">
          {success ? (
            <div className="text-center py-8 animate-in zoom-in">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600"><CheckCircle2 size={32} /></div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Received!</h4>
              <p className="text-gray-500 text-sm mb-6">{isApply ? "Our counselor will call you shortly." : "Check your email for the PDF."}</p>
              <button onClick={onClose} className="w-full bg-gray-100 text-gray-900 py-3 rounded-xl font-bold">Close</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input required type="text" placeholder="Student Name" className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-[#631529] outline-none" />
              <input required type="email" placeholder="Email Address" className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-[#631529] outline-none" />
              <input required type="tel" placeholder="Mobile Number" className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-[#631529] outline-none" />
              {isApply && (
                 <select className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-[#631529] outline-none bg-white">
                    <option>Select 12th Stream</option>
                    <option>Arts</option>
                    <option>Commerce</option>
                    <option>Science</option>
                 </select>
              )}
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

export default function BVocCosmetologyPage() {
  const [modalType, setModalType] = useState(null); 
  const [activeYear, setActiveYear] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);
  
  const { semesters, career, comparison, gallery, admissionSteps, partners, faqs } = degreeSpecifics;

  // Scholarship Calculator State
  const [marks, setMarks] = useState(75);
  const [scholarship, setScholarship] = useState(5000);

  useEffect(() => window.scrollTo(0,0), []);

  useEffect(() => {
    if (marks >= 90) setScholarship(25000);
    else if (marks >= 80) setScholarship(15000);
    else if (marks >= 70) setScholarship(5000);
    else setScholarship(0);
  }, [marks]);

  const openModal = (type) => setModalType(type);
  const closeModal = () => setModalType(null);

  return (
    <>
      <ApplicationModal isOpen={!!modalType} onClose={closeModal} type={modalType} />
      
      {/* HERO SECTION */}
      <section className="relative h-[85vh] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2a0a12]/95 via-[#631529]/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
          <span className="bg-yellow-500/20 border border-yellow-400/50 text-yellow-300 text-xs font-bold px-4 py-1.5 rounded-full mb-6 inline-block tracking-wider uppercase">UGC Recognized</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            B.VOC Degree in <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-white">Cosmetology</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl font-light">
            Get a full-fledged graduation degree while mastering Hair, Skin, and Makeup. The perfect blend of academic theory and practical skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => openModal('brochure')} className="bg-white text-[#631529] px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-gray-100 transition shadow-xl">
              <Download size={20}/> Download Prospectus
            </button>
            <button onClick={() => openModal('apply')} className="backdrop-blur-md bg-white/10 border border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition">
              Apply Now
            </button>
          </div>
        </div>
      </section>

      {/* DEGREE HIGHLIGHTS  */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div><div className="text-3xl font-bold text-[#631529]">3 Years</div><div className="text-xs text-gray-500 uppercase tracking-widest">Duration</div></div>
          <div><div className="text-3xl font-bold text-[#631529]">12th Pass</div><div className="text-xs text-gray-500 uppercase tracking-widest">Eligibility</div></div>
          <div><div className="text-3xl font-bold text-[#631529]">Multiple</div><div className="text-xs text-gray-500 uppercase tracking-widest">Entry/Exit</div></div>
          <div><div className="text-3xl font-bold text-[#631529]">Work</div><div className="text-xs text-gray-500 uppercase tracking-widest">Integrated</div></div>
        </div>
      </section>

      {/* WHY B.VOC? (COMPARISON) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-gray-900">Why Choose a Degree?</h2>
            <p className="text-gray-500 mt-2">Compare the benefits of a University Degree vs. a regular Diploma.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-[#631529] text-white">
                  {comparison.headers.map((h, i) => (
                    <th key={i} className={`p-4 font-bold border-b border-gray-700 ${i===0 ? 'w-1/4' : 'w-1/4 text-center'}`}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.rows.map((row, i) => (
                  <tr key={i} className="border-b border-gray-100 hover:bg-pink-50 transition">
                    <td className="p-4 font-bold text-gray-700">{row.feature}</td>
                    <td className="p-4 text-center text-gray-600">{row.val1}</td>
                    <td className="p-4 text-center font-bold text-[#631529] bg-pink-50/30">{row.val2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SEMESTER ROADMAP */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-gray-900">Academic Roadmap</h2>
            <p className="text-gray-500 mt-2">A structured path from Diploma to Degree.</p>
          </div>
          
          <div className="grid md:grid-cols-12 gap-8">
            {/* Sidebar */}
            <div className="md:col-span-4 space-y-2">
              {semesters.map((sem, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveYear(i)}
                  className={`w-full text-left p-5 rounded-xl font-bold border transition-all ${
                    activeYear === i 
                    ? "bg-[#631529] text-white border-[#631529] shadow-lg scale-105" 
                    : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  <div className="text-xs opacity-70 uppercase tracking-wide">Step {i+1}</div>
                  <div className="text-lg">{sem.year}</div>
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="md:col-span-8 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-100 rounded-bl-[100px] -mr-4 -mt-4 opacity-50"></div>
              <h3 className="text-2xl font-bold text-[#631529] mb-6 flex items-center gap-2 relative z-10">
                <BookOpen size={24}/> Subjects Covered
              </h3>
              <ul className="grid gap-4 relative z-10">
                {semesters[activeYear].subjects.map((sub, j) => (
                  <li key={j} className="flex items-center gap-3 p-3 bg-pink-50/30 rounded-lg text-gray-800 font-medium border border-pink-100">
                    <CheckCircle2 size={18} className="text-[#631529]" /> {sub}
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500 relative z-10">
                <span>*Includes Practical Exams & Viva</span>
                <span className="font-bold text-[#631529]">Total Credits: 60/Year</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCHOLARSHIP CALCULATOR */}
      <section className="py-20 bg-[#631529] text-white">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <span className="text-yellow-400 font-bold tracking-widest uppercase text-sm mb-4 block">Merit Scholarship</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Financial Aid Estimator</h2>
            <p className="text-white/80 mb-8 leading-relaxed">
              We reward academic excellence. Use the slider to enter your 12th Standard percentage and check your eligible fee waiver for the first year.
            </p>
            <div className="flex gap-4">
              <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                <Percent size={24} className="text-yellow-400 mb-2"/>
                <div className="font-bold">Up to 25k</div>
                <div className="text-xs opacity-60">Waiver Available</div>
              </div>
              <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                <Award size={24} className="text-yellow-400 mb-2"/>
                <div className="font-bold">Merit Based</div>
                <div className="text-xs opacity-60">Strictly on Marks</div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 w-full bg-white text-gray-900 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Calculator size={20} className="text-[#631529]"/> Check Eligibility
            </h3>
            
            <div className="mb-8">
              <label className="flex justify-between text-sm font-bold text-gray-600 mb-2">
                <span>Your 12th Percentage</span>
                <span>{marks}%</span>
              </label>
              <input type="range" min="50" max="99" value={marks} onChange={(e) => setMarks(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg accent-[#631529]" />
              <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>50% (Pass)</span>
                <span>99% (Topper)</span>
              </div>
            </div>

            <div className="bg-[#fff0f4] p-6 rounded-2xl text-center border border-pink-100">
              <p className="text-gray-500 text-xs uppercase tracking-wide font-bold mb-1">Eligible Scholarship Amount</p>
              <div className="text-4xl font-extrabold text-[#631529]">₹ {scholarship.toLocaleString()}</div>
              {scholarship > 0 ? (
                <p className="text-xs text-green-600 mt-2 font-bold flex items-center justify-center gap-1"><CheckCircle2 size={12}/> Congratulations! You qualify.</p>
              ) : (
                <p className="text-xs text-gray-400 mt-2">Score above 70% to unlock scholarships.</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* INTERNSHIP PARTNERS  */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-12">Internship & Placement</h2>
          <p className="text-gray-500 mb-12 -mt-8">Work with the best brands in your final year.</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            {partners.map((partner, i) => (
              <div key={i} className="text-2xl font-bold text-gray-400 hover:text-[#631529] transition cursor-default flex items-center gap-2">
                <Building2 size={24} className="text-gray-300"/> {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAMPUS LIFE & ADMISSION */}
      <section className="py-20 bg-[#faf7f7]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          {/* Gallery */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2"><Landmark/> Campus Life</h3>
            <div className="grid grid-cols-2 gap-4">
              {gallery.map((img, i) => (
                <div key={i} className={`rounded-2xl overflow-hidden shadow-sm h-40 ${i===0 ? 'col-span-2 h-56' : ''}`}>
                  <img src={img} alt="Campus" className="w-full h-full object-cover hover:scale-110 transition duration-500" />
                </div>
              ))}
            </div>
          </div>

          {/* Admission Timeline & FAQ */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2"><Calendar/> Admission Process</h3>
            <div className="space-y-6 relative border-l-2 border-gray-200 ml-3 pl-8">
              {admissionSteps.map((step, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[41px] top-0 w-6 h-6 bg-[#631529] rounded-full border-4 border-white shadow-sm"></div>
                  <h4 className="font-bold text-gray-900 flex justify-between">
                    {step.title} <span className="text-gray-400 text-xs font-normal">{step.step}</span>
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">{step.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2"><HelpCircle size={18}/> FAQ</h4>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div key={i} className="border-b border-gray-50 pb-2 last:border-0">
                    <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="text-sm font-bold text-left w-full flex justify-between hover:text-[#631529] items-center">
                      {faq.q} <ChevronDown size={14} className={`transform transition ${activeFaq === i ? 'rotate-180' : ''}`}/>
                    </button>
                    {activeFaq === i && <p className="text-xs text-gray-500 mt-2 leading-relaxed">{faq.a}</p>}
                  </div>
                ))}
              </div>
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
