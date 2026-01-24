import { useEffect, useState } from "react";
import { 
  CreditCard, Calculator, FileText, CheckCircle2, 
  X, Phone, ArrowRight, Download, Banknote, 
  Calendar, Percent, ShieldCheck, HelpCircle, ChevronDown,
  Landmark, UserCheck, Wallet, Clock, TrendingUp, Building2
} from "lucide-react";

// DATA 

const emiSpecifics = {
  partners: ["Bajaj Finserv", "IDFC First Bank", "GrayQuest", "Eduvanz", "ShopSe"],
  stats: [
    { label: "Students Financed", value: "12,000+" },
    { label: "Approval Rate", value: "95%" },
    { label: "Partners", value: "8+" },
    { label: "Interest Saved", value: "₹ 5Cr+" }
  ],
  benefits: [
    { title: "0% Interest", desc: "Absolutely no extra cost. You pay only the course fee divided by months." },
    { title: "Instant Approval", desc: "Digital KYC process takes just 15 minutes. No physical paperwork needed." },
    { title: "Minimal Docs", desc: "For loans under ₹50k, only your Aadhar and PAN card are sufficient." },
    { title: "Flexible Tenure", desc: "Choose a repayment plan that fits your pocket, from 3 to 18 months." }
  ],
  lenders: [
    { name: "Bajaj Finserv", interest: "0%", tenure: "3 - 9 Months", fee: "₹ 750", speed: "Instant" },
    { name: "GrayQuest", interest: "0%", tenure: "6 - 12 Months", fee: "₹ 999", speed: "2 Hours" },
    { name: "IDFC First", interest: "0%", tenure: "9 - 18 Months", fee: "1%", speed: "4 Hours" },
    { name: "Eduvanz", interest: "Low Cost", tenure: "12 - 24 Months", fee: "Nil", speed: "24 Hours" }
  ],
  timeline: [
    { step: "01", title: "Apply Online", desc: "Fill the basic eligibility form on this page." },
    { step: "02", title: "Digital KYC", desc: "Upload Aadhar/PAN photos via secure link." },
    { step: "03", title: "Approval", desc: "Receive sanction letter from the bank." },
    { step: "04", title: "Join Course", desc: "Fees are paid directly to the institute." }
  ],
  documents: [
    { name: "Identity Proof", detail: "Aadhar Card / Voter ID / Passport" },
    { name: "Financial Proof", detail: "Bank Statement (Last 3-6 Months)" },
    { name: "Address Proof", detail: "Rent Agreement / Utility Bill / Aadhar" },
    { name: "Photographs", detail: "2 Recent Passport Size Photos" }
  ],
  testimonials: [
    { name: "Riya S.", course: "Makeup Artistry", text: "I didn't have ₹1.5L upfront. The 0% EMI allowed me to join, and now I pay the installments from my freelance earnings." },
    { name: "Amit K.", course: "Hair Design", text: "GrayQuest was super fast. My loan was approved in 2 hours while I was sitting at the counseling desk." }
  ],
  faqs: [
    { q: "Is there really 0% interest?", a: "Yes. The institute bears the interest cost for the first 6-9 months to make education affordable for you." },
    { q: "Is there a processing fee?", a: "Most banks charge a small one-time file charge (approx ₹500-₹900) which is deducted from the first EMI." },
    { q: "Do I need a credit card?", a: "No. We have partners like GrayQuest and Eduvanz that provide cardless EMI based on your bank statement." },
    { q: "Can a student apply?", a: "Students need a co-applicant (Parent/Guardian/Spouse) who has a steady income source." },
    { q: "What if my CIBIL score is low?", a: "We have partners who look at alternate data points, but a score above 650 is recommended for instant approval." }
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

  const isCheck = type === "check";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="bg-white rounded-3xl w-full max-w-md relative overflow-hidden shadow-2xl">
        <button onClick={onClose} className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/20 text-white hover:bg-black/40"><X size={20}/></button>
        
        <div className={`p-8 text-white text-center bg-[#631529]`}>
          {isCheck ? <ShieldCheck size={40} className="mx-auto mb-2 text-green-400" /> : <CreditCard size={40} className="mx-auto mb-2 text-yellow-400" />}
          <h3 className="text-xl font-bold">{isCheck ? "Check Eligibility" : "Apply for Loan"}</h3>
          <p className="text-xs text-white/80 mt-1">{isCheck ? "Soft check (Won't affect CIBIL)" : "Get a call from our finance team"}</p>
        </div>

        <div className="p-6">
          {success ? (
            <div className="text-center py-8 animate-in zoom-in">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600"><CheckCircle2 size={32} /></div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{isCheck ? "You are Eligible!" : "Request Sent!"}</h4>
              <p className="text-gray-500 text-sm mb-6">{isCheck ? "Pre-approved for up to ₹ 2 Lakhs." : "Expect a callback within 2 hours."}</p>
              <button onClick={onClose} className="w-full bg-gray-100 text-gray-900 py-3 rounded-xl font-bold">Close</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input required type="text" placeholder="Full Name (As per PAN)" className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-[#631529] outline-none" />
              <input required type="tel" placeholder="Mobile Number" className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-[#631529] outline-none" />
              {isCheck && (
                 <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="Monthly Income" className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-[#631529] outline-none" />
                    <input type="text" placeholder="Pincode" className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-[#631529] outline-none" />
                 </div>
              )}
              <button disabled={loading} type="submit" className="w-full bg-[#631529] text-white py-3 rounded-xl font-bold hover:bg-[#4a101f] transition flex items-center justify-center gap-2">
                {loading ? "Processing..." : (isCheck ? "Check Now" : "Request Callback")}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default function CoursesOnEMIPage() {
  const [modalType, setModalType] = useState(null); 
  const [activeFaq, setActiveFaq] = useState(null);

  // EMI Calculator State
  const [loanAmount, setLoanAmount] = useState(50000);
  const [tenure, setTenure] = useState(6);
  const [interestRate, setInterestRate] = useState(0); 

  const calculateEMI = () => {
    if (interestRate === 0) return Math.round(loanAmount / tenure);
    const r = interestRate / 12 / 100;
    const emi = loanAmount * r * (Math.pow(1 + r, tenure) / (Math.pow(1 + r, tenure) - 1));
    return Math.round(emi);
  };

  const emi = calculateEMI();
  const totalPayable = emi * tenure;

  const { partners, benefits, documents, faqs, stats, lenders, timeline, testimonials } = emiSpecifics;

  useEffect(() => window.scrollTo(0,0), []);

  const openModal = (type) => setModalType(type);
  const closeModal = () => setModalType(null);

  return (
    <>
      <ApplicationModal isOpen={!!modalType} onClose={closeModal} type={modalType} />
      
      {/* HERO SECTION */}
      <section className="relative h-[80vh] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#631529]/95 via-[#631529]/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
          <span className="bg-white/20 border border-white/30 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 inline-block tracking-wider uppercase">Financial Aid Available</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Learn Now, <br /><span className="text-yellow-400">Pay Later</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl font-light">
            Don't let fees stop your dreams. Get 0% Interest EMI options on all our professional courses. Approval in 15 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => openModal('check')} className="bg-white text-[#631529] px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-gray-100 transition shadow-xl">
              <ShieldCheck size={20}/> Check Eligibility
            </button>
            <button onClick={() => openModal('apply')} className="backdrop-blur-md bg-white/10 border border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition">
              Call Finance Team
            </button>
          </div>
        </div>
      </section>

      {/* STATS & TRUST  */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <div className="text-3xl font-bold text-[#631529]">{s.value}</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS GRID */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-gray-900">Why Choose EMI?</h2>
            <p className="text-gray-500 mt-2">Smart financial planning for your education.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <div key={i} className="text-center p-8 rounded-3xl bg-white shadow-sm hover:shadow-md transition border border-gray-100 group">
                <div className="w-16 h-16 mx-auto bg-orange-50 rounded-full flex items-center justify-center text-[#631529] mb-6 group-hover:bg-[#631529] group-hover:text-white transition duration-300">
                  {i === 0 ? <Percent size={28}/> : i === 1 ? <Clock size={28}/> : i === 2 ? <FileText size={28}/> : <Calendar size={28}/>}
                </div>
                <h4 className="font-bold text-lg mb-3 text-gray-900">{b.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMI CALCULATOR */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900">Plan Your Budget</h2>
            <p className="text-gray-500 mt-2">Adjust the sliders to customize your repayment plan.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 bg-gray-50 p-8 md:p-12 rounded-[40px] shadow-sm border border-gray-200">
            {/* Controls */}
            <div className="lg:w-1/2 space-y-10">
              <div>
                <label className="flex justify-between text-sm font-bold text-gray-600 mb-4">
                  <span>Loan Amount (Course Fee)</span> 
                  <span className="text-[#631529] text-xl font-bold">₹ {loanAmount.toLocaleString()}</span>
                </label>
                <input 
                  type="range" min="10000" max="200000" step="5000" 
                  value={loanAmount} 
                  onChange={(e) => setLoanAmount(Number(e.target.value))} 
                  className="w-full h-3 bg-gray-200 rounded-lg accent-[#631529] cursor-pointer" 
                />
                <div className="flex justify-between text-xs text-gray-400 mt-2 font-medium">
                  <span>₹ 10k</span>
                  <span>₹ 2L</span>
                </div>
              </div>

              <div>
                <label className="text-sm font-bold text-gray-600 mb-4 block">Select Tenure (Months)</label>
                <div className="grid grid-cols-5 gap-3">
                  {[3, 6, 9, 12, 18].map((t) => (
                    <button 
                      key={t}
                      onClick={() => {
                        setTenure(t);
                        setInterestRate(t > 9 ? 12 : 0); // Logic: 0% interest only for <= 9 months
                      }}
                      className={`py-3 rounded-xl font-bold border text-sm transition ${
                        tenure === t 
                          ? "bg-[#631529] text-white border-[#631529] shadow-lg transform scale-105" 
                          : "bg-white text-gray-600 border-gray-200 hover:border-[#631529]"
                      }`}
                    >
                      {t}M
                    </button>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-3 flex items-center gap-1.5 font-medium bg-white px-3 py-1 rounded-full border border-gray-100">
                  {tenure > 9 ? <Wallet size={12} className="text-orange-500"/> : <CheckCircle2 size={12} className="text-green-500"/>}
                  {tenure > 9 ? "Standard Interest Applies (~12%)" : "0% Interest Offer Active"}
                </p>
              </div>
            </div>

            {/* Results Display */}
            <div className="lg:w-1/2 bg-[#631529] text-white rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 p-24 bg-black/10 rounded-full -ml-10 -mb-10 blur-2xl"></div>
              
              <div className="relative z-10 text-center">
                <p className="text-white/70 uppercase tracking-widest text-xs font-bold mb-2">Estimated Monthly Installment</p>
                <div className="text-6xl font-serif font-bold mb-8">₹ {emi.toLocaleString()}</div>
                
                <div className="bg-white/10 rounded-xl p-4 grid grid-cols-2 gap-4 border border-white/10">
                  <div className="text-left border-r border-white/10 pr-4">
                    <div className="text-xs opacity-60 mb-1">Total Payable</div>
                    <div className="font-bold text-xl">₹ {totalPayable.toLocaleString()}</div>
                  </div>
                  <div className="text-left pl-2">
                    <div className="text-xs opacity-60 mb-1">Interest Rate</div>
                    <div className="font-bold text-xl text-yellow-400">{interestRate}%</div>
                  </div>
                </div>

                <button onClick={() => openModal('apply')} className="mt-8 w-full bg-white text-[#631529] py-4 rounded-xl font-bold hover:bg-gray-100 transition shadow-xl flex items-center justify-center gap-2">
                  Apply for this Plan <ArrowRight size={18}/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LENDER COMPARISON */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900">Compare Partners</h2>
            <p className="text-gray-500 mt-2">We work with the best banks to give you the best rates.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b-2 border-gray-100">
                  <th className="p-4 text-gray-400 font-medium text-sm">Lender</th>
                  <th className="p-4 text-gray-400 font-medium text-sm">Interest Rate</th>
                  <th className="p-4 text-gray-400 font-medium text-sm">Tenure</th>
                  <th className="p-4 text-gray-400 font-medium text-sm">Processing Fee</th>
                  <th className="p-4 text-gray-400 font-medium text-sm">Approval Speed</th>
                </tr>
              </thead>
              <tbody>
                {lenders.map((l, i) => (
                  <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition group">
                    <td className="p-6 font-bold text-gray-900 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-[#631529]"><Building2 size={16}/></div>
                      {l.name}
                    </td>
                    <td className="p-6 text-green-600 font-bold bg-green-50/30">{l.interest}</td>
                    <td className="p-6 text-gray-600">{l.tenure}</td>
                    <td className="p-6 text-gray-600">{l.fee}</td>
                    <td className="p-6 font-bold text-[#631529]">{l.speed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* LOAN PROCESS TIMELINE*/}
      <section className="py-20 bg-[#631529] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4">How it Works</h2>
            <p className="opacity-70 max-w-2xl mx-auto">From application to approval in 4 simple steps.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-white/20 -z-0"></div>
            
            {timeline.map((step, i) => (
              <div key={i} className="relative z-10 text-center group">
                <div className="w-16 h-16 mx-auto bg-[#8b233e] rounded-full border-4 border-[#631529] flex items-center justify-center font-bold text-xl mb-6 shadow-lg group-hover:scale-110 transition duration-300">
                  {step.step}
                </div>
                <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                <p className="text-sm opacity-70 leading-relaxed px-4">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS  */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-gray-900">Funded Futures</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-orange-200 transition">
                <div className="flex gap-4 mb-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#631529] font-bold shadow-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{t.name}</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">{t.course}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic leading-relaxed">"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCUMENTS & FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          
          {/* Documents Checklist */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <FileText size={24} className="text-[#631529]"/> Required Documents
            </h3>
            <p className="text-gray-500 mb-8">Keep these digital copies ready for a super-fast approval process.</p>
            <div className="bg-orange-50 p-8 rounded-3xl border border-orange-100">
              <ul className="space-y-6">
                {documents.map((doc, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="bg-white p-2 rounded-full text-[#631529] shadow-sm mt-1"><CheckCircle2 size={16}/></div>
                    <div>
                      <span className="font-bold text-gray-900 block text-lg">{doc.name}</span>
                      <span className="text-sm text-gray-600">{doc.detail}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <HelpCircle size={24} className="text-[#631529]"/> Common Questions
            </h3>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-gray-100 rounded-2xl p-5 hover:border-[#631529] transition bg-white shadow-sm cursor-pointer group" onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                  <div className="flex justify-between items-center w-full text-left font-bold text-gray-800 group-hover:text-[#631529]">
                    {faq.q}
                    <ChevronDown size={18} className={`transition-transform text-gray-400 ${activeFaq === i ? 'rotate-180' : ''}`} />
                  </div>
                  {activeFaq === i && (
                    <p className="mt-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4 animate-in slide-in-from-top-2">{faq.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* MOBILE STICKY BAR */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 flex gap-4 md:hidden z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <a href="tel:+918872500500" className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-900 py-3 rounded-xl font-bold">
          <Phone size={18} /> Call
        </a>
        <button onClick={() => openModal('check')} className="flex-1 flex items-center justify-center gap-2 bg-[#631529] text-white py-3 rounded-xl font-bold">
          <ArrowRight size={18} /> Check EMI
        </button>
      </div>
    </>
  );
}