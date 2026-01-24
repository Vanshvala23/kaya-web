import { useEffect, useState } from "react";
import { 
  Sparkles, UserCheck, Award, Microscope, GraduationCap, 
  Clock, ChevronDown, Calendar, Download, X, Image as ImageIcon, 
  BookOpen, Globe, CheckCircle2, Briefcase, Calculator
} from "lucide-react";

// DATA 

const facultyProfile = {
  name: "Jouee Patwardhan",
  designation: "International Aesthetic Educator | CIDESCO Trainer",
  experience: "30+ Years",
  location: "India",
  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
  summary: "Highly accomplished international aesthetic educator with over 30 years of experience in beauty therapy, skin aesthetics, wellness, and advanced cosmetology education. Holder of multiple globally recognized diplomas including CIDESCO, CIBTAC, and City & Guilds.",
  qualifications: [
    "CIDESCO International Diploma – Aromatherapy",
    "CIDESCO International Diploma – Spa Therapy",
    "CIDESCO International Diploma – Media Makeup",
    "CIBTAC International Diploma – Facial Electricals",
    "City & Guilds International Diploma – Hair Dressing"
  ],
  expertise: [
    "Advanced Skin Aesthetics",
    "Clinical & Medical Cosmetology",
    "Aromatherapy & Holistic Wellness",
    "Spa Therapy & Luxury Spa Management",
    "Facial Electricals & Advanced Devices"
  ]
};

const aestheticSpecifics = {
  fees: {
    total: 125000, 
    minDownPayment: 25000 
  },
  modules: [
    {
      title: "Anatomy & Physiology of Skin",
      content: "Deep dive into skin layers (Epidermis, Dermis, Hypodermis), skin types, conditions, and analyzing skin health for clinical treatments."
    },
    {
      title: "Chemical Peels (Basic to Advanced)",
      content: "Mastering Glycolic, Salicylic, Lactic, and TCA peels. Pre-peel prep, post-peel care, and managing contraindications."
    },
    {
      title: "Laser Aesthetics & Safety",
      content: "Understanding Laser Physics (IPL, Diode, Nd:YAG). Hair removal protocols, photo-rejuvenation, and laser safety classifications."
    },
    {
      title: "Advanced Facials & Machinery",
      content: "Hands-on training with Hydra-dermabrasion, Microcurrent, Galvanic, High Frequency, and Ultrasonic devices."
    },
    {
      title: "Anti-Ageing Treatments",
      content: "Non-surgical facelifts, micro-needling (Derma Roller/Pen), and skin tightening theories (RF Basics)."
    },
    {
      title: "Client Consultation & Business",
      content: "Patient history taking, consent forms, selling treatment plans, and setting up your own aesthetic clinic."
    }
  ],
  career: [
    { role: "Clinical Cosmetologist", salary: "₹ 4L - 8L p.a." },
    { role: "Laser Technician", salary: "₹ 3L - 6L p.a." },
    { role: "Medi-Spa Manager", salary: "₹ 5L - 10L p.a." },
    { role: "Skin Aesthetician", salary: "₹ 3.5L - 7L p.a." },
    { role: "Dermatologist Assistant", salary: "₹ 3L - 5L p.a." },
    { role: "Beauty Consultant", salary: "₹ 4L - 9L p.a." }
  ],
  batches: [
    { date: "Oct 15, 2025", type: "Weekday (Mon-Fri)", status: "Filling Fast", seats: 3 },
    { date: "Nov 01, 2025", type: "Weekend (Sat-Sun)", status: "Open", seats: 12 },
    { date: "Nov 15, 2025", type: "Weekday (Mon-Fri)", status: "Open", seats: 15 }
  ],
  gallery: [
    "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600", 
    "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?auto=format&fit=crop&q=80&w=600"
  ]
};

const courseData = {
  title: "Skin & Aesthetics",
  banner: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=1920",
  courses: [
    "Certificate in Skin Care",
    "Professional Skin Program",
    "Advanced Facial Treatments",
    "Chemical Peel Certification",
    "Anti-Ageing Skin Treatments",
    "Acne & Pigmentation Management",
    "Laser Aesthetics (Basics)",
    "Microdermabrasion & Advanced Skin Therapies"
  ]
};

// Components

const BrochureModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl relative">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors"
        >
          <X size={20} />
        </button>
        <div className="bg-[#631529] p-8 text-white text-center">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-md border border-white/20">
             <Download size={32} className="text-white" />
          </div>
          <h3 className="text-2xl font-serif font-bold mb-2">Download Syllabus</h3>
          <p className="text-white/80 text-sm px-4">Enter your details to receive the complete course curriculum PDF instantly.</p>
        </div>
        <form className="p-6 md:p-8 space-y-4">
          <input type="text" placeholder="Full Name" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#631529]" />
          <input type="tel" placeholder="Phone Number" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#631529]" />
          <input type="email" placeholder="Email Address" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#631529]" />
          <button type="button" onClick={onClose} className="w-full bg-[#631529] text-white py-4 rounded-xl font-bold hover:bg-[#4a101f] transition shadow-lg mt-2">
            Download Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default function AestheticCoursesPage() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeModule, setActiveModule] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // EMI State
  const [downPayment, setDownPayment] = useState(aestheticSpecifics.fees.minDownPayment);
  const [months, setMonths] = useState(6);
  
  const { batches, gallery, modules, career, fees } = aestheticSpecifics;

  // EMI Calculation
  const loanAmount = fees.total - downPayment;
  const monthlyEmi = Math.round(loanAmount / months);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const toggleFaq = (index) => setActiveFaq(activeFaq === index ? null : index);
  const toggleModule = (index) => setActiveModule(activeModule === index ? null : index);

  const faqs = [
    { q: "What is the duration of these courses?", a: "Duration varies from 4 weeks for certificate courses to 6 months for advanced diplomas." },
    { q: "Do I need a medical background?", a: "No, our courses are designed to take you from beginner to expert level, covering anatomy and physiology basics." },
    { q: "Is the certification valid internationally?", a: "Yes, Orane certification is recognized globally, and we prepare you for CIDESCO/CIBTAC exams." },
    { q: "Do you provide placement assistance?", a: "Absolutely. We have a 100% placement support record with top clinics and luxury spas." }
  ];

  return (
    <>
      <BrochureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* HERO SECTION */}
      <section className="relative h-[90vh] min-h-[700px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={courseData.banner} alt={courseData.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
          <div className="max-w-3xl animate-in slide-in-from-bottom-10 duration-1000">
            <span className="inline-block bg-[#631529] border border-white/20 text-white text-xs md:text-sm font-bold tracking-wider px-4 py-1.5 rounded-full mb-6">ADVANCED DIPLOMAS</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
              Master the Science of <br />
              <span className="text-pink-400">Clinical Aesthetics</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/90 mb-10 leading-relaxed font-light max-w-2xl">
              Bridge the gap between beauty and medicine. Learn advanced chemical peels, lasers, and skin therapies from international experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4" >
              <button 
                onClick={() => setIsModalOpen(true)} 
                className="bg-white text-[#631529] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-xl hover:scale-105 transform duration-200 flex items-center justify-center gap-2"
              >
                <Download size={20} /> Download Brochure
              </button>
              <button className="backdrop-blur-md bg-white/10 border border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition">
                Book Free Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR  */}
      <section className="bg-[#631529] py-12 text-white relative z-20 -mt-8 mx-4 md:mx-10 rounded-3xl shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
          <div><div className="text-3xl md:text-4xl font-bold mb-1">8+</div><div className="text-xs md:text-sm text-pink-200 uppercase tracking-widest">Modules</div></div>
          <div><div className="text-3xl md:text-4xl font-bold mb-1">100%</div><div className="text-xs md:text-sm text-pink-200 uppercase tracking-widest">Practical</div></div>
          <div><div className="text-3xl md:text-4xl font-bold mb-1">CIDESCO</div><div className="text-xs md:text-sm text-pink-200 uppercase tracking-widest">Aligned</div></div>
          <div><div className="text-3xl md:text-4xl font-bold mb-1">Global</div><div className="text-xs md:text-sm text-pink-200 uppercase tracking-widest">Placements</div></div>
        </div>
      </section>

      {/* DETAILED MODULES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          
          <div className="sticky top-24">
            <span className="text-[#631529] font-bold tracking-widest uppercase text-sm">Course Structure</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mt-2 mb-6">What You Will Master</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Our curriculum is designed by international experts to take you from fundamentals to advanced clinical procedures.
            </p>
            <div className="bg-[#fff0f4] p-6 rounded-2xl border border-pink-100 mb-8">
              <h4 className="font-bold text-[#631529] mb-4 flex items-center gap-2"><Award size={20}/> Certification Includes:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-600"/> Orane International Diploma</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-600"/> NSDC Certification (Optional)</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-600"/> Preparation for CIDESCO Media Exam</li>
              </ul>
            </div>
          </div>

          {/* Right: Accordion Modules */}
          <div className="space-y-4">
            {modules.map((mod, i) => (
              <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-md bg-white">
                <button 
                  onClick={() => toggleModule(i)}
                  className={`w-full flex items-center justify-between p-6 text-left font-bold text-lg transition-colors ${activeModule === i ? 'bg-gray-50 text-[#631529]' : 'text-gray-800 hover:bg-gray-50'}`}
                >
                  <span className="flex items-center gap-3">
                    <span className="bg-[#631529] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">{i + 1}</span>
                    {mod.title}
                  </span>
                  <ChevronDown className={`transition-transform duration-300 ${activeModule === i ? "rotate-180" : ""}`} />
                </button>
                <div className={`px-6 bg-gray-50 text-gray-600 text-sm leading-relaxed overflow-hidden transition-all duration-300 ${activeModule === i ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="pl-11">{mod.content}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* TOOLS & TECH */}
      <section className="py-20 bg-[#2a0a12] text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12">Tools You Will Master</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { icon: Microscope, name: "Laser Machines" },
              { icon: Sparkles, name: "Derma Rollers" },
              { icon: Clock, name: "Galvanic Tools" },
              { icon: Globe, name: "High Frequency" },
              { icon: BookOpen, name: "Skin Analyzers" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-4 group">
                <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-[#631529] group-hover:scale-110 transition-all duration-300">
                  <item.icon size={32} className="text-pink-300 group-hover:text-white" />
                </div>
                <h4 className="font-bold text-sm tracking-wide">{item.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAREER PATHWAYS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">Career Opportunities</h2>
            <p className="text-gray-500 mt-4">Unlock high-paying roles in the global beauty industry.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {career.map((job, i) => (
              <div key={i} className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-lg hover:border-pink-100 transition-all group">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center text-[#631529] group-hover:bg-[#631529] group-hover:text-white transition-colors">
                    <Briefcase size={24} />
                  </div>
                  <span className="text-xs font-bold bg-green-100 text-green-700 px-3 py-1 rounded-full">High Demand</span>
                </div>
                <h4 className="font-bold text-xl text-gray-900 mb-1">{job.role}</h4>
                <p className="text-sm text-gray-500">Est. Salary: <span className="font-bold text-gray-700">{job.salary}</span></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STUDENT GALLERY */}
      <section className="py-20 bg-[#faf7f7]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-12">Student Work Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {gallery.map((img, i) => (
              <div key={i} className={`rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition duration-500 relative group h-64 ${i === 0 ? 'md:col-span-2 md:row-span-2 md:h-[536px]' : ''}`}>
                <img src={img} alt="Student Work" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACULTY SPOTLIGHT */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#fff5f7] rounded-[48px] p-8 md:p-14 border border-pink-100 grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 text-center">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl mx-auto mb-6">
                <img src={facultyProfile.image} alt={facultyProfile.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-3xl font-serif font-bold text-gray-900">{facultyProfile.name}</h3>
              <p className="text-gray-500 font-medium">{facultyProfile.designation}</p>
            </div>
            <div className="lg:col-span-7">
              <h4 className="text-2xl font-bold text-[#631529] mb-4 flex items-center gap-2"><UserCheck /> Meet Your Mentor</h4>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">"{facultyProfile.summary}"</p>
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <h5 className="font-bold text-gray-900 mb-4 border-b border-pink-200 pb-2">Qualifications</h5>
                  <ul className="space-y-2">{facultyProfile.qualifications?.map((q,i)=><li key={i} className="text-sm text-gray-600 flex gap-2"><Award size={14} className="text-[#631529] mt-1"/>{q}</li>)}</ul>
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 mb-4 border-b border-pink-200 pb-2">Core Expertise</h5>
                  <ul className="space-y-2">{facultyProfile.expertise?.map((e,i)=><li key={i} className="text-sm text-gray-600 flex gap-2"><Sparkles size={14} className="text-[#631529] mt-1"/>{e}</li>)}</ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BATCHES & PROCESS */}
      <section className="py-20 bg-[#faf7f7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Batches</h3>
              <div className="space-y-4">
                {batches.map((batch, i) => (
                  <div key={i} className="bg-white p-5 rounded-xl border border-gray-200 flex justify-between items-center hover:border-[#631529] transition group">
                    <div>
                      <h4 className="font-bold text-gray-900">{batch.date}</h4>
                      <p className="text-xs text-gray-500">{batch.type}</p>
                    </div>
                    <div className="text-right">
                      <span className={`text-xs font-bold px-2 py-1 rounded-md ${batch.seats < 5 ? 'bg-orange-100 text-orange-700' : 'bg-green-100 text-green-700'}`}>
                        {batch.status}
                      </span>
                      <button className="block mt-2 text-xs font-bold text-[#631529] underline opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">Pre-Book</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Process */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Application Process</h3>
              <div className="space-y-6 relative border-l-2 border-gray-200 ml-3 pl-8 py-2">
                {[
                  { title: "Submit Enquiry", desc: "Fill the form or call us." },
                  { title: "Counseling Session", desc: "Free career guidance." },
                  { title: "Documentation", desc: "Submit ID & academic proofs." },
                  { title: "Enrollment", desc: "Pay fees & get student kit." }
                ].map((step, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[41px] top-0 w-6 h-6 bg-[#631529] rounded-full border-4 border-white shadow-sm"></div>
                    <h4 className="font-bold text-gray-900">{step.title}</h4>
                    <p className="text-sm text-gray-500">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEE & EMI CALCULATOR */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gray-900 rounded-[40px] p-8 md:p-14 text-white shadow-2xl flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <span className="bg-[#631529] text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">0% INTEREST EMI</span>
              <h2 className="text-3xl font-serif font-bold mb-4">Smart Fee Calculator</h2>
              <p className="text-gray-400 mb-6">Education should be accessible. Calculate your monthly installments.</p>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-400" /> No hidden charges</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-400" /> Easy documentation</li>
              </ul>
            </div>
            <div className="bg-white text-gray-900 p-6 md:p-8 rounded-3xl w-full md:w-1/2">
              <div className="flex items-center gap-2 mb-6 text-[#631529] font-bold">
                <Calculator size={24} /> Estimate EMI
              </div>
              <div className="mb-6">
                <div className="flex justify-between text-sm font-bold mb-2"><span>Down Payment</span><span>₹ {downPayment.toLocaleString()}</span></div>
                <input type="range" min="10000" max={fees.total - 10000} step="5000" value={downPayment} onChange={(e) => setDownPayment(Number(e.target.value))} className="w-full accent-[#631529] h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-bold mb-2">Duration (Months)</label>
                <div className="flex gap-2">
                  {[3, 6, 9, 12].map(m => (
                    <button key={m} onClick={() => setMonths(m)} className={`flex-1 py-2 rounded-lg text-sm font-bold border transition ${months === m ? 'bg-[#631529] text-white border-[#631529]' : 'border-gray-200 hover:border-gray-400'}`}>{m}M</button>
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl text-center">
                <p className="text-gray-500 text-xs uppercase tracking-wide">Monthly Installment</p>
                <div className="text-3xl font-bold text-[#631529] mt-1">₹ {monthlyEmi.toLocaleString()}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#faf7f7]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-bold text-center mb-10">Common Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <button onClick={() => toggleFaq(index)} className="w-full flex justify-between p-6 text-left font-bold text-gray-900 hover:text-[#631529]">
                  {faq.q} <ChevronDown className={`transition-transform ${activeFaq === index ? "rotate-180" : ""}`} />
                </button>
                {activeFaq === index && <div className="px-6 pb-6 text-gray-600 text-sm">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="bg-[#631529] rounded-[40px] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 relative z-10">Start Your Journey Today</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <a href="/contact" className="bg-white text-[#631529] px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition shadow-lg">Apply Now</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}