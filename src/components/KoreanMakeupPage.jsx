import { useEffect, useState } from "react";
import { 
  Sparkles, UserCheck, Award, Briefcase, 
  ChevronDown, Calendar, Download, X, 
  Heart, Star, CheckCircle2, Package, Phone, ArrowRight,
  TrendingUp, Calculator, Quote, Eye, Gem
} from "lucide-react";

// DATA

const facultyProfile = {
  name: "Jouee Patwardhan",
  designation: "International Aesthetic Educator | CIDESCO Trainer",
  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
  summary: "With over 30 years of experience, Jouee brings international standards to K-Beauty training. She specializes in advanced skin aesthetics—the foundation of the 'Glass Skin' look.",
  qualifications: ["CIDESCO Diploma", "Media Makeup Expert", "CIBTAC Certification"]
};

const koreanSpecifics = {
  fees: { total: 55000, minDownPayment: 10000 },
  modules: [
    { title: "Glass Skin Prep (Skincare)", content: "The 7-Skin method, layering toners, serums, and priming for that 'lit-from-within' glow using Korean dermatology principles." },
    { title: "Base & Foundation Techniques", content: "Mastering the spatula technique, cushion foundations, and color correcting for a porcelain finish without heaviness." },
    { title: "Korean Eye Makeup", content: "Straight brows geometry, 'Puppy' eyeliner, Aegyo-sal (smiling eyes) contouring, and precise individual lash application." },
    { title: "Lip Artistry & Tints", content: "Gradient lips (ombre), blurred lip lines, over-lining for a youthful pout, and mixing custom tint shades." },
    { title: "K-Pop Idol Aesthetics", content: "Stage makeup durability, rhinestone placement, glitter tears, and camera-ready sculpting." },
    { title: "Personal Color Analysis", content: " diagnosing skin undertones (Warm/Cool/Neutral) and seasonal color analysis (Spring/Summer/Autumn/Winter)." }
  ],
  career: [
    { role: "K-Beauty Specialist", salary: "₹ 4L - 8L p.a." },
    { role: "Bridal Makeup Artist", salary: "₹ 5L - 10L p.a." },
    { role: "Beauty Content Creator", salary: "Variable (High Potential)" },
    { role: "Brand Consultant", salary: "₹ 4.5L - 7L p.a." }
  ],
  batches: [
    { id: 1, date: "Nov 05, 2025", type: "Weekend Masterclass", status: "Filling Fast", seats: 6 },
    { id: 2, date: "Nov 20, 2025", type: "Weekday (Mon-Fri)", status: "Open", seats: 10 }
  ],
  kit: [
    { name: "Cushion Foundations", desc: "Top Korean brands (Laneige/Clio equivalent) for dewy finish" },
    { name: "Lip Tints & Velvets", desc: "5 Shades of water and velvet tints for gradient lips" },
    { name: "Chunky Glitters", desc: "Liquid holographic glitters for K-Pop idol looks" },
    { name: "Skincare Prep Set", desc: "Hyaluronic toners, snail mucin essence & sheet masks" },
    { name: "Spatula & Tools", desc: "Professional mixing palette and picasso-style spatula" }
  ],
  testimonials: [
    { name: "Sanya R.", role: "Influencer (100k+)", text: "The Glass Skin module changed my content game. My audience loves the natural, dewy looks I learned here." },
    { name: "Meera K.", role: "Bridal MUA", text: "Adding 'Korean Bridal' to my menu helped me attract a whole new set of modern brides who want natural makeup." }
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
    setTimeout(() => { setLoading(false); setSuccess(true); }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="bg-white rounded-3xl w-full max-w-md relative overflow-hidden shadow-2xl">
        <button onClick={onClose} className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/20 text-white hover:bg-black/40"><X size={20}/></button>
        
        <div className="bg-pink-100 p-8 text-[#631529] text-center">
          <Heart size={40} className="mx-auto mb-2 text-[#631529]" />
          <h3 className="text-xl font-bold">K-Beauty Syllabus</h3>
          <p className="text-xs opacity-70 mt-1">Master the trends of Seoul</p>
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

export default function KoreanMakeupPage() {
  const [activeMod, setActiveMod] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookedBatches, setBookedBatches] = useState([]);
  
  const { fees, modules, career, batches, kit, testimonials } = koreanSpecifics;
  
  // EMI
  const [downPayment, setDownPayment] = useState(fees.minDownPayment);
  const [months, setMonths] = useState(3);
  const emi = Math.round((fees.total - downPayment) / months);

  // Freelance Calculator
  const [clients, setClients] = useState(5);
  const [rate, setRate] = useState(3000);
  const potential = clients * rate;

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
      <section className="relative h-[90vh] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover object-[50%_45%] " />
          <div className="absolute inset-0 bg-gradient-to-r from-pink-900/90 via-purple-900/40 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
          <span className="bg-pink-500 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 inline-block tracking-wider animate-pulse">NEW TREND 2025</span>
          <h1 className="text-5xl md:text-8xl font-serif font-bold mb-6 leading-tight">
            Advanced <br /><span className="text-pink-200">K-Beauty & Glass Skin</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl font-light">
            Master the viral trends of Seoul. Learn Glass Skin prep, Gradient Lips, and Aegyo-sal from international experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => setIsModalOpen(true)} className="bg-white text-[#631529] px-10 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-gray-100 transition shadow-xl">
              <Download size={20}/> Download Brochure
            </button>
            <button className="backdrop-blur-md bg-white/10 border border-white text-white px-10 py-4 rounded-full font-bold hover:bg-white/20 transition">
              Book Demo Class
            </button>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-white py-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div><div className="text-3xl font-bold text-[#631529]">100%</div><div className="text-xs text-gray-500 uppercase tracking-widest">Dewy Finish</div></div>
          <div><div className="text-3xl font-bold text-[#631529]">7-Skin</div><div className="text-xs text-gray-500 uppercase tracking-widest">Method</div></div>
          <div><div className="text-3xl font-bold text-[#631529]">Idol</div><div className="text-xs text-gray-500 uppercase tracking-widest">Stage Looks</div></div>
          <div><div className="text-3xl font-bold text-[#631529]">Global</div><div className="text-xs text-gray-500 uppercase tracking-widest">Certification</div></div>
        </div>
      </section>

      {/* TREND HIGHLIGHTS */}
      <section className="py-16 bg-[#fff0f4]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900">Why Learn K-Beauty?</h2>
            <p className="text-gray-500 mt-2">The global beauty standard is shifting to natural, healthy-looking skin.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Sparkles, title: "Glass Skin", desc: "The ultimate dewy, poreless complexion technique using layering." },
              { icon: Eye, title: "Youthful Eyes", desc: "Aegyo-sal and puppy liner techniques to make eyes look younger." },
              { icon: Heart, title: "Minimalist Chic", desc: "High impact with minimal product usage for the 'Clean Girl' aesthetic." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white text-center border border-pink-100 hover:-translate-y-2 transition duration-300 shadow-sm">
                <div className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center mx-auto mb-4 text-pink-500">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACULTY SPOTLIGHT */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#faf7f7] rounded-[40px] p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 border border-gray-100">
            <div className="md:w-1/3 text-center">
              <div className="relative inline-block">
                <img src={facultyProfile.image} alt={facultyProfile.name} className="w-64 h-64 rounded-full object-cover border-8 border-white shadow-xl" />
                <div className="absolute bottom-4 right-4 bg-[#631529] text-white p-2 rounded-full"><Award size={20}/></div>
              </div>
              <h3 className="text-2xl font-bold mt-6 text-gray-900">{facultyProfile.name}</h3>
              <p className="text-[#631529] font-medium text-sm">{facultyProfile.designation}</p>
            </div>
            <div className="md:w-2/3">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2"><UserCheck className="text-[#631529]"/> Meet Your Mentor</h4>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">"{facultyProfile.summary}"</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {facultyProfile.qualifications.map((q, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm">
                    <CheckCircle2 size={16} className="text-green-600"/>
                    <span className="text-sm font-bold text-gray-700">{q}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          
          {/* Accordion */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Course Modules</h2>
            <div className="space-y-4">
              {modules.map((m, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:border-pink-200 transition">
                  <button onClick={() => toggleModule(i)} className="w-full flex justify-between items-center p-5 font-bold text-left hover:bg-pink-50 transition">
                    <span className="flex items-center gap-3">
                      <span className="bg-pink-100 text-pink-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">{i+1}</span>
                      {m.title}
                    </span> 
                    <ChevronDown className={`transition-transform duration-300 ${activeMod === i ? "rotate-180" : ""}`} />
                  </button>
                  {activeMod === i && (
                    <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed bg-pink-50/30">
                      <div className="pl-11">{m.content}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Kit & Fees */}
          <div>
            <div className="bg-gray-900 text-white p-8 rounded-3xl shadow-lg relative overflow-hidden mb-8">
              <div className="absolute top-0 right-0 bg-pink-600 w-32 h-32 rounded-full blur-[60px] opacity-50"></div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 relative z-10">
                <Package size={20} className="text-pink-400"/> K-Beauty Kit Included
              </h3>
              <ul className="space-y-4 relative z-10">
                {kit.map((k, i) => (
                  <li key={i} className="flex justify-between items-center text-sm border-b border-gray-700 pb-2 last:border-0">
                    <span className="font-bold text-gray-200">{k.name}</span>
                    <span className="text-gray-400 text-xs">{k.desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* EMI Card */}
            <div className="bg-white border border-gray-200 p-8 rounded-3xl shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Course Fee</h3>
                <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">No Cost EMI</span>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2 font-bold text-gray-500"><span>Down Payment</span><span>₹ {downPayment.toLocaleString()}</span></div>
                <input type="range" min="5000" max={fees.total - 5000} step="5000" value={downPayment} onChange={(e) => setDownPayment(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#631529]" />
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

      {/* INCOME CALCULATOR */}
      <section className="py-20 bg-[#631529] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Freelance Potential</h2>
          <p className="text-white/80 mb-10">K-Beauty skills command higher rates for bridal and editorial work.</p>
          
          <div className="bg-white text-gray-900 p-8 rounded-3xl shadow-2xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left space-y-6">
                <div>
                  <label className="flex justify-between font-bold text-gray-700 mb-2">
                    <span>Clients / Month</span>
                    <span>{clients}</span>
                  </label>
                  <input type="range" min="1" max="20" value={clients} onChange={(e) => setClients(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg accent-pink-600" />
                </div>
                <div>
                  <label className="flex justify-between font-bold text-gray-700 mb-2">
                    <span>Rate per Client (₹)</span>
                    <span>{rate.toLocaleString()}</span>
                  </label>
                  <input type="range" min="1500" max="15000" step="500" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg accent-pink-600" />
                </div>
              </div>
              
              <div className="bg-pink-50 p-8 rounded-2xl border border-pink-100">
                <p className="text-gray-500 uppercase text-xs font-bold tracking-widest mb-2">Potential Earnings</p>
                <div className="text-5xl font-extrabold text-[#631529]">₹ {potential.toLocaleString()}</div>
                <p className="text-xs text-gray-400 mt-2">working weekends only</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-gray-900">How to Enroll</h2>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
            {[
              { title: "Book a Demo", desc: "Experience the Glass Skin technique live." },
              { title: "Kit Collection", desc: "Receive your premium K-Beauty toolkit." },
              { title: "Training", desc: "Intensive hands-on practice sessions." },
              { title: "Portfolio Shoot", desc: "Professional shoot for your lookbook." }
            ].map((step, i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-gray-100 group-hover:bg-[#631529] group-hover:text-white transition shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <span className="font-bold text-sm">{i+1}</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition">
                  <h4 className="font-bold text-gray-900">{step.title}</h4>
                  <p className="text-sm text-gray-500">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BATCHES & CTA */}
      <section className="py-20 bg-[#faf7f7]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif font-bold mb-10 text-gray-900">Upcoming Batches</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {batches.map((b) => (
              <div key={b.id} className="p-6 bg-white rounded-2xl shadow-sm flex justify-between items-center group hover:border-pink-500 border border-transparent transition">
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