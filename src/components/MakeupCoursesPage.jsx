import { useEffect, useState } from "react";
import { 
  Brush, Palette, Camera, Sparkles, 
  ChevronDown, Calendar, Download, X, 
  CheckCircle2, Phone, ArrowRight,
  Calculator, Quote, Star, Eye, User,
  Gem, Heart
} from "lucide-react";
import bridal1 from "../assets/bridal1.jpg";
import bridal2 from "../assets/bridal2.jpg";
import bridal3 from "../assets/bridal3.jpg";

// INTERNAL DATA 

const makeupSpecifics = {
  fees: { total: 125000, minDownPayment: 25000 },
  modules: {
    foundation: [
      "Skin Science & Analysis", "Color Theory & Corrections", "Face Shapes & Contouring", 
      "Base Application (HD/Airbrush)", "Eyebrow Architecture", "Lip Correction & Shaping"
    ],
    bridal: [
      "Traditional Indian Bridal", "Christian/Western Bridal", "Reception & Engagement Looks", 
      "Saree Draping Basics", "Sweat-Proof Techniques", "Jewelry Setting & Styling"
    ],
    creative: [
      "Editorial & High Fashion", "Avant-Garde Concepts", "Cut Crease & Graphic Liners", 
      "Glitter & Rhinestone Art", "Lighting for Photography", "Portfolio Building"
    ],
    sfx: [
      "Bruises, Cuts & Wounds", "Aging Techniques (Old Age)", "Character Design", 
      "Prosthetic Basics", "Halloween & Fantasy Looks", "Beard & Stubble Creation"
    ]
  },
  career: [
    { role: "Bridal MUA", salary: "₹ 15k - 50k per Bride" },
    { role: "Celebrity Artist", salary: "₹ 50k - 1L per Shoot" },
    { role: "Makeup Educator", salary: "₹ 4L - 8L p.a." },
    { role: "Retail Artist (MAC/Sephora)", salary: "₹ 3.5L - 6L p.a." }
  ],
  batches: [
    { id: 1, date: "Nov 12, 2025", type: "Weekday Comprehensive", status: "Filling Fast", seats: 6 },
    { id: 2, date: "Dec 01, 2025", type: "Weekend Pro", status: "Open", seats: 10 }
  ],
  kit: [
    { name: "Premium Foundation Palette", desc: "Kryolan/Derma/MAC equivalent full coverage" },
    { name: "Pro Brush Belt", desc: "24-piece natural & synthetic hair brushes" },
    { name: "Eye Shadow Palette", desc: "120-color Morphe style pigment palette" },
    { name: "Airbrush Gun", desc: "Portable compressor for HD bridal finish" }
  ],
  gallery: [
    bridal1, 
    bridal2, 
    bridal3, 
    "data:image/jpeg;base64,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", // Creative Eye
    "data:image/jpeg;base64,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"
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
        
        <div className={`p-8 text-white text-center ${isApply ? "bg-[#631529]" : "bg-[#631529]"}`}>
          {isApply ? <Brush size={40} className="mx-auto mb-2 text-pink-300" /> : <Palette size={40} className="mx-auto mb-2 text-yellow-400" />}
          <h3 className="text-xl font-bold">{isApply ? "Course Application" : "Lookbook Download"}</h3>
          <p className="text-xs text-white/80 mt-1">{isApply ? "Book your seat for 2025" : "Get the trend report & syllabus"}</p>
        </div>

        <div className="p-6">
          {success ? (
            <div className="text-center py-8 animate-in zoom-in">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600"><CheckCircle2 size={32} /></div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Success!</h4>
              <p className="text-gray-500 text-sm mb-6">{isApply ? "We'll call you to schedule a trial." : "Lookbook sent to your inbox."}</p>
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

export default function MakeupCoursesPage() {
  const [modalType, setModalType] = useState(null);
  const [activeTab, setActiveTab] = useState("bridal");
  const [bookedBatches, setBookedBatches] = useState([]);
  
  // Bridal Income Calculator
  const [brides, setBrides] = useState(10);
  const [rate, setRate] = useState(15000);
  const totalRevenue = brides * rate;

  const { fees, modules, career, batches, gallery, kit } = makeupSpecifics;

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
      
      {/* HERO SECTION  */}
      <section className="relative h-[90vh] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src= {bridal1} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-pink-900/90 via-[#631529]/70 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
          <span className="bg-pink-500 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 inline-block tracking-wider uppercase">Artist Certification</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Professional <br /><span className="text-pink-200">Makeup Artistry</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl font-light">
            Master HD Bridal, Airbrush, and High-Fashion makeup. Learn from industry experts and build a portfolio that gets you booked.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => openModal('brochure')} className="bg-white text-[#631529] px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-gray-100 transition shadow-xl">
              <Download size={20}/> Lookbook PDF
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
          <div><div className="text-3xl font-bold text-[#631529]">Airbrush</div><div className="text-xs text-gray-500 uppercase tracking-widest">Mastery</div></div>
          <div><div className="text-3xl font-bold text-[#631529]">SFX</div><div className="text-xs text-gray-500 uppercase tracking-widest">Prosthetics</div></div>
          <div><div className="text-3xl font-bold text-[#631529]">Portfolio</div><div className="text-xs text-gray-500 uppercase tracking-widest">Shoots</div></div>
          <div><div className="text-3xl font-bold text-[#631529]">Global</div><div className="text-xs text-gray-500 uppercase tracking-widest">Certification</div></div>
        </div>
      </section>

      {/* CURRICULUM TABS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900">Course Curriculum</h2>
            <p className="text-gray-500 mt-2">From basic contouring to avant-garde artistry.</p>
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
                  <span className="capitalize">{key === 'sfx' ? 'SFX & Prosthetics' : key + ' Makeup'}</span>
                  {activeTab === key && <Brush size={18} className="text-pink-300" />}
                </button>
              ))}
            </div>

            <div className="lg:w-2/3 bg-pink-50 rounded-3xl p-8 border border-pink-100 min-h-[300px]">
              <h3 className="text-2xl font-bold text-[#631529] mb-6 capitalize flex items-center gap-2">
                {activeTab} Techniques
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {modules[activeTab].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm hover:translate-x-1 transition">
                    <CheckCircle2 size={18} className="text-[#631529] shrink-0" />
                    <span className="font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BRIDAL INCOME CALCULATOR */}
      <section className="py-20 bg-[#631529] text-white">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <span className="text-pink-300 font-bold tracking-widest uppercase text-sm mb-4 block">Career ROI</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Bridal Business Model</h2>
            <p className="text-white/80 mb-8 leading-relaxed">
              Bridal makeup is a high-ticket service. Even a few bookings a month can recover your course fee. Use this calculator to estimate seasonal earnings.
            </p>
            <div className="flex gap-4">
                <div className="bg-white/10 p-4 rounded-2xl border border-white/10 text-center">
                    <Star size={24} className="text-pink-300 mb-2 mx-auto"/>
                    <div className="font-bold">High Demand</div>
                    <div className="text-xs opacity-60">Wedding Season</div>
                </div>
                <div className="bg-white/10 p-4 rounded-2xl border border-white/10 text-center">
                    <Camera size={24} className="text-pink-300 mb-2 mx-auto"/>
                    <div className="font-bold">Portfolio</div>
                    <div className="text-xs opacity-60">Social Growth</div>
                </div>
            </div>
          </div>

          <div className="md:w-1/2 w-full bg-white text-gray-900 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Calculator size={20} className="text-[#631529]"/> Season Estimate
            </h3>
            
            <div className="space-y-6 mb-8">
                <div>
                    <label className="text-xs font-bold text-gray-500 flex justify-between mb-2">
                        <span>Brides / Season</span> <span>{brides}</span>
                    </label>
                    <input type="range" min="2" max="30" value={brides} onChange={(e) => setBrides(Number(e.target.value))} className="w-full accent-[#631529]" />
                </div>
                <div>
                    <label className="text-xs font-bold text-gray-500 flex justify-between mb-2">
                        <span>Rate / Bride (₹)</span> <span>{rate}</span>
                    </label>
                    <input type="range" min="8000" max="50000" step="1000" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full accent-[#631529]" />
                </div>
            </div>

            <div className="bg-pink-50 p-6 rounded-2xl text-center border border-pink-100">
              <p className="text-gray-500 text-xs uppercase tracking-wide font-bold mb-1">Potential Seasonal Income</p>
              <div className="text-4xl font-extrabold text-[#631529]">₹ {totalRevenue.toLocaleString()}</div>
              <p className="text-xs text-gray-400 mt-2">*Excluding family/guest makeup</p>
            </div>
          </div>
        </div>
      </section>

      {/* VANITY KIT & GALLERY */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          
          {/* Kit Details */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Pro Vanity Kit</h2>
            <p className="text-gray-600 mb-8">Start your journey with a professional kit worth ₹35,000+, featuring international brands.</p>
            <div className="grid gap-4">
              {kit.map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 hover:border-pink-200 transition">
                  <div className="bg-pink-50 p-3 rounded-full text-pink-700">
                    <Gem size={20}/>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{item.name}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-2 gap-4">
            {gallery.map((img, i) => (
                <div key={i} className={`rounded-2xl overflow-hidden shadow-md group relative ${i===0 ? 'col-span-2 h-48' : 'h-40'}`}>
                    <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" alt="Makeup Art" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition"></div>
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
              <h2 className="text-3xl font-bold mb-4">Start Your Beauty Career</h2>
              <p className="mb-8 opacity-90">Join the elite league of professional makeup artists.</p>
              <button onClick={() => openModal('apply')} className="bg-white text-[#631529] px-10 py-3.5 rounded-full font-bold hover:bg-gray-100 transition inline-block">Apply Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE STICKY BAR */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 flex gap-4 md:hidden z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <a href="tel:+919225527523" className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-900 py-3 rounded-xl font-bold">
          <Phone size={18} /> Call
        </a>
        <button onClick={() => openModal('apply')} className="flex-1 flex items-center justify-center gap-2 bg-[#631529] text-white py-3 rounded-xl font-bold">
          <ArrowRight size={18} /> Apply
        </button>
      </div>
    </>
  );
}