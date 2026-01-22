import { useEffect, useState } from "react";
import { 
  Building2, 
  Users, 
  TrendingUp, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  MapPin,
  Wallet,
  LayoutDashboard,
  Megaphone,
  GraduationCap,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Calculator,
  Download,
  Check,
  Loader2,
  X,
  Phone
} from "lucide-react";

// Reusing an existing asset for the background
import franchiseBg from "../assets/history.jpg"; 

// DATA CONSTANTS 
const benefits = [
  {
    icon: Award,
    title: "Established Brand Legacy",
    desc: "Partner with a 25-year-old market leader. We are a trusted name in beauty education with over 110+ centers globally."
  },
  {
    icon: TrendingUp,
    title: "High ROI Business Model",
    desc: "The beauty education sector is recession-proof. Enjoy high returns on investment with our proven business strategies."
  },
  {
    icon: Users,
    title: "Comprehensive Support",
    desc: "From site selection to staff recruitment and training, we hold your hand at every step of the journey."
  },
  {
    icon: GraduationCap,
    title: "World-Class Curriculum",
    desc: "Access our internationally recognized curriculum (CIBTAC, CIDESCO) that sets your academy apart from competitors."
  }
];

const supportSystem = [
  {
    title: "Pre-Opening Support",
    items: [
      "Site selection and feasibility study",
      "Interior design and layout guidelines",
      "Staff recruitment assistance",
      "Vendor finalization for equipment"
    ]
  },
  {
    title: "Operational Support",
    items: [
      "Standard Operating Procedures (SOPs)",
      "Academy management software (ERP)",
      "Regular audits and quality checks",
      "Curriculum updates and upgrades"
    ]
  },
  {
    title: "Marketing Support",
    items: [
      "National level brand campaigns",
      "Digital marketing lead generation",
      "Social media creatives and content",
      "Local marketing strategies"
    ]
  },
  {
    title: "Training Support",
    items: [
      "Train-the-Trainer (TTT) programs",
      "Sales and counseling training",
      "Center manager leadership training",
      "Soft skills and grooming workshops"
    ]
  }
];

const faqs = [
  {
    q: "What is the minimum area required to start a franchise?",
    a: "Ideally, you need a carpet area of 1500 to 2500 sq. ft. to accommodate theory classrooms, practical labs, counseling rooms, and a reception area."
  },
  {
    q: "Do I need prior experience in the beauty industry?",
    a: "No, prior experience is not mandatory. We provide complete training and operational support to help you run the academy successfully."
  },
  {
    q: "What is the expected ROI (Return on Investment)?",
    a: "While ROI depends on various factors like location and management, our franchise partners typically see a break-even within 18-24 months."
  },
  {
    q: "How does the student placement process work?",
    a: "We have a centralized placement cell that ties up with top brands. We also assist your center in building local placement networks."
  }
];

const steps = [
  { num: "01", title: "Apply", desc: "Fill the franchise inquiry form." },
  { num: "02", title: "Connect", desc: "Our team contacts you for initial discussion." },
  { num: "03", title: "Evaluate", desc: "Site visit and feasibility analysis." },
  { num: "04", title: "Sign", desc: "Sign the agreement & pay franchise fee." },
  { num: "05", title: "Launch", desc: "Setup, training, and grand opening!" }
];

export default function FranchisePage() {
  const [openFaq, setOpenFaq] = useState(null);
  
  // ROI CALCULATOR STATE 
  const [calcArea, setCalcArea] = useState(1500);
  const [calcFee, setCalcFee] = useState(50000); // Avg fee per student
  const [calcStudents, setCalcStudents] = useState(10); // Monthly students
  const [estimatedRevenue, setEstimatedRevenue] = useState(0);

  // FORM STATE 
  const [formData, setFormData] = useState({
    firstName: "", 
    lastName: "", 
    email: "", 
    phone: "", 
    city: "", 
    investment: "", 
    message: ""
  });
  const [formStatus, setFormStatus] = useState("idle"); // 'idle', 'submitting', 'success', 'error'

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Recalculate ROI whenever inputs change
  useEffect(() => {
    // Logic: Monthly Students * Avg Fee * 12 Months
    const annualRevenue = calcStudents * calcFee * 12;
    setEstimatedRevenue(annualRevenue);
  }, [calcStudents, calcFee]);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("submitting");

    // SIMULATED API CALL 
    // In production, replace with: await fetch('/api/franchise', { method: 'POST', body: JSON.stringify(formData) })
    setTimeout(() => {
      setFormStatus("success");
      setFormData({ 
        firstName: "", lastName: "", email: "", phone: "", city: "", investment: "", message: "" 
      });
    }, 2000);
  };

  const scrollToForm = () => {
    const formElement = document.getElementById('inquiry-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#2a0a12] text-white overflow-hidden">
        
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src={franchiseBg} 
            alt="Franchise Background" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block bg-[#631529] border border-white/20 text-white text-xs font-bold tracking-wider px-4 py-1.5 rounded-full mb-6 animate-pulse">
            BUSINESS OPPORTUNITY
          </span>
          
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            Partner with India’s <br />
            <span className="text-pink-400">Largest Beauty Academy</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
            Join a network of 110+ successful academies. Empower the youth with skills and build a profitable, recession-proof business legacy.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={scrollToForm}
              className="bg-white text-[#631529] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-lg transform hover:-translate-y-1 inline-flex items-center justify-center gap-2"
            >
              Become a Partner <ArrowRight size={20} />
            </button>
            <button 
              className="bg-transparent border border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition inline-flex items-center justify-center gap-2"
            >
              <Download size={20} /> Download FIM
            </button>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-[#631529] text-white py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Academies", val: "110+" },
            { label: "Students Trained", val: "1 Lakh+" },
            { label: "Cities Present", val: "80+" },
            { label: "Years Legacy", val: "25+" }
          ].map((stat, i) => (
            <div key={i}>
              <h3 className="text-3xl md:text-4xl font-bold mb-1">{stat.val}</h3>
              <p className="text-white/60 text-sm uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ROI CALCULATOR */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#fff0f4] rounded-[40px] p-8 md:p-16 border border-pink-100 shadow-xl">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 text-[#631529] font-bold tracking-wide text-sm bg-white px-4 py-1 rounded-full shadow-sm mb-4">
                <Calculator size={16} /> ROI ESTIMATOR
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
                Calculate Your Potential Revenue
              </h2>
              <p className="text-gray-600 mt-2 max-w-xl mx-auto">
                Adjust the sliders to see the estimated annual gross revenue based on student intake.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Sliders */}
              <div className="space-y-8">
                {/* Student Slider */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="font-bold text-gray-700">Monthly Student Intake</label>
                    <span className="text-[#631529] font-bold">{calcStudents} Students</span>
                  </div>
                  <input 
                    type="range" min="5" max="100" step="5"
                    value={calcStudents}
                    onChange={(e) => setCalcStudents(Number(e.target.value))}
                    className="w-full h-2 bg-pink-200 rounded-lg appearance-none cursor-pointer accent-[#631529]"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>5</span>
                    <span>100</span>
                  </div>
                </div>

                {/* Fee Slider */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="font-bold text-gray-700">Avg. Course Fee</label>
                    <span className="text-[#631529] font-bold">₹{calcFee.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" min="20000" max="150000" step="5000"
                    value={calcFee}
                    onChange={(e) => setCalcFee(Number(e.target.value))}
                    className="w-full h-2 bg-pink-200 rounded-lg appearance-none cursor-pointer accent-[#631529]"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>₹20k</span>
                    <span>₹1.5L</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-pink-100 flex items-start gap-3">
                  <HelpCircle className="text-[#631529] shrink-0 mt-0.5" size={18} />
                  <p className="text-sm text-gray-500">
                    Calculations are estimates for Gross Annual Revenue. Actual profitability depends on operational costs (rent, salaries, marketing).
                  </p>
                </div>
              </div>

              {/* Result Card */}
              <div className="bg-[#631529] text-white p-8 md:p-10 rounded-3xl text-center shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                
                <h3 className="text-xl text-white/80 font-medium mb-2">Estimated Annual Revenue</h3>
                <div className="text-4xl md:text-5xl font-bold mb-6">
                  ₹{estimatedRevenue.toLocaleString()}
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-left bg-white/10 p-4 rounded-xl mb-6">
                  <div>
                    <span className="block text-xs text-white/60">Annual Students</span>
                    <span className="font-bold text-lg">{calcStudents * 12}</span>
                  </div>
                  <div>
                    <span className="block text-xs text-white/60">Avg. Ticket Size</span>
                    <span className="font-bold text-lg">₹{(calcFee/1000).toFixed(0)}k</span>
                  </div>
                </div>

                <button 
                  onClick={scrollToForm}
                  className="w-full bg-white text-[#631529] py-3 rounded-xl font-bold hover:bg-gray-100 transition"
                >
                  Get Detailed Business Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY PARTNER SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#631529] mb-4">
              Why Choose Orane?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We don't just offer a brand name; we offer a complete ecosystem for success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((item, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition duration-300 group">
                <div className="w-14 h-14 bg-[#fdeff0] text-[#631529] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REQUIREMENTS & SUPPORT */}
      <section className="py-20 bg-[#faf7f7]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          
          <div className="sticky top-24">
            <span className="text-[#631529] font-bold tracking-wide text-sm uppercase">Prerequisites</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-6">
              What You Need to Start
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              We look for partners who are passionate about education and have the capability to invest in a premium infrastructure.
            </p>

            <div className="space-y-6">
              <div className="flex gap-5 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                  <LayoutDashboard size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900">Space Requirement</h4>
                  <p className="text-gray-600">1500 - 2500 Sq. Ft. (Carpet Area)</p>
                  <p className="text-xs text-gray-400 mt-1">Preferably ground floor or first floor with high visibility.</p>
                </div>
              </div>

              <div className="flex gap-5 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center shrink-0">
                  <Wallet size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900">Investment</h4>
                  <p className="text-gray-600">INR 25 Lakhs - 40 Lakhs</p>
                  <p className="text-xs text-gray-400 mt-1">Includes franchise fee, interiors, equipment, and launch marketing.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Support Grid */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Our Support System</h3>
             {supportSystem.map((sys, idx) => (
               <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-[#631529]/30 transition hover:shadow-md">
                 <h4 className="font-serif font-bold text-lg text-[#631529] mb-4 pb-2 border-b border-gray-100 flex justify-between items-center">
                   {sys.title}
                 </h4>
                 <ul className="space-y-3">
                   {sys.items.map((item, k) => (
                     <li key={k} className="flex items-start gap-3 text-sm text-gray-600">
                       <div className="bg-green-100 text-green-600 rounded-full p-0.5 mt-0.5 shrink-0">
                         <Check size={12} />
                       </div>
                       <span>{item}</span>
                     </li>
                   ))}
                 </ul>
               </div>
             ))}
          </div>

        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#631529]">
              Steps to Ownership
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8">
            {steps.map((step, i) => (
              <div key={i} className="text-center relative">
                <div className="w-16 h-16 mx-auto bg-[#fdeff0] text-[#631529] rounded-full flex items-center justify-center font-bold text-xl mb-4 border-4 border-white shadow-lg relative z-10 transition hover:scale-110 hover:bg-[#631529] hover:text-white cursor-default">
                  {step.num}
                </div>
                {/* Connector Line (hidden on last item and mobile) */}
                {i !== steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-1 bg-gray-100 -z-0" />
                )}
                
                <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                <p className="text-xs text-gray-500 max-w-[120px] mx-auto">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section id="inquiry-form" className="py-20 bg-[#631529] text-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
              Start Your Success Story Today
            </h2>
            <p className="text-white/80 text-lg mb-10">
              Fill out the form to request our detailed Franchise Information Memorandum (FIM) and schedule a call with our business development team.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Megaphone size={24} />
                </div>
                <div>
                  <p className="font-bold text-lg">Direct Franchise Line</p>
                  <p className="text-white/70">+91 8872 500 500</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-bold text-lg">Head Office</p>
                  <p className="text-white/70">Mohali, Punjab, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white text-gray-800 p-8 rounded-3xl shadow-2xl relative">
            
            {/* SUCCESS OVERLAY */}
            {formStatus === "success" && (
              <div className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-3xl z-20 flex flex-col items-center justify-center text-center p-8 animate-in fade-in zoom-in duration-300">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Received!</h3>
                <p className="text-gray-600 mb-6">
                  Thank you for your interest. Our franchise team will review your details and contact you within 24 hours.
                </p>
                <button 
                  onClick={() => setFormStatus("idle")}
                  className="text-[#631529] font-bold hover:underline"
                >
                  Submit another inquiry
                </button>
              </div>
            )}

            <h3 className="text-2xl font-bold mb-6">Franchise Application</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="text" name="firstName" placeholder="First Name" required 
                  value={formData.firstName} onChange={handleInputChange}
                  className="w-full bg-gray-50 border border-gray-200 p-3 rounded-lg focus:outline-none focus:border-[#631529] focus:ring-1 focus:ring-[#631529]" 
                />
                <input 
                  type="text" name="lastName" placeholder="Last Name" required 
                  value={formData.lastName} onChange={handleInputChange}
                  className="w-full bg-gray-50 border border-gray-200 p-3 rounded-lg focus:outline-none focus:border-[#631529] focus:ring-1 focus:ring-[#631529]" 
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="email" name="email" placeholder="Email Address" required 
                  value={formData.email} onChange={handleInputChange}
                  className="w-full bg-gray-50 border border-gray-200 p-3 rounded-lg focus:outline-none focus:border-[#631529] focus:ring-1 focus:ring-[#631529]" 
                />
                <input 
                  type="tel" name="phone" placeholder="Phone Number" required 
                  value={formData.phone} onChange={handleInputChange}
                  className="w-full bg-gray-50 border border-gray-200 p-3 rounded-lg focus:outline-none focus:border-[#631529] focus:ring-1 focus:ring-[#631529]" 
                />
              </div>

              <input 
                type="text" name="city" placeholder="Proposed City/Location" required 
                value={formData.city} onChange={handleInputChange}
                className="w-full bg-gray-50 border border-gray-200 p-3 rounded-lg focus:outline-none focus:border-[#631529] focus:ring-1 focus:ring-[#631529]" 
              />

              <select 
                name="investment" required 
                value={formData.investment} onChange={handleInputChange}
                className="w-full bg-gray-50 border border-gray-200 p-3 rounded-lg focus:outline-none focus:border-[#631529] focus:ring-1 focus:ring-[#631529] text-gray-700"
              >
                <option value="">Investment Capacity</option>
                <option value="25-35L">25L - 35L</option>
                <option value="35-50L">35L - 50L</option>
                <option value="50L+">50L+</option>
              </select>

              <textarea 
                name="message" rows="3" placeholder="Tell us about your background..." 
                value={formData.message} onChange={handleInputChange}
                className="w-full bg-gray-50 border border-gray-200 p-3 rounded-lg focus:outline-none focus:border-[#631529] focus:ring-1 focus:ring-[#631529]"
              ></textarea>

              <button 
                type="submit" 
                disabled={formStatus === "submitting"}
                className="w-full bg-[#631529] text-white font-bold py-4 rounded-lg hover:bg-[#4a101f] transition shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {formStatus === "submitting" ? (
                  <> <Loader2 className="animate-spin" /> Submitting... </>
                ) : (
                  "Submit Application"
                )}
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-white pb-32">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <HelpCircle size={40} className="mx-auto text-[#631529] mb-4" />
            <h2 className="text-3xl font-serif font-bold">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition"
                >
                  <span className="font-bold text-gray-800">{item.q}</span>
                  {openFaq === index ? <ChevronUp size={20} className="text-[#631529]" /> : <ChevronDown size={20} className="text-gray-400" />}
                </button>
                
                {openFaq === index && (
                  <div className="p-5 pt-0 text-gray-600 bg-gray-50 text-sm leading-relaxed border-t border-gray-100 animate-in slide-in-from-top-2">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOBILE STICKY CTA */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 z-50 flex gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <button 
          onClick={scrollToForm}
          className="flex-1 bg-[#631529] text-white font-bold py-3 rounded-full shadow-lg"
        >
          Apply Now
        </button>
        <a 
          href="tel:+918872500500"
          className="bg-gray-100 text-[#631529] p-3 rounded-full flex items-center justify-center"
        >
          <Phone size={24} />
        </a>
      </div>    </>
  );
}