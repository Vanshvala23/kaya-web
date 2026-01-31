import { useState, useRef, useEffect } from "react";
import { 
  Award, 
  Sparkles, 
  BookOpen, 
  Users, 
  ArrowRight,
  Search,
  X,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Scissors,
  Palette,
  Camera
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

// UNIQUE IMAGES FOR POPULAR SERVICES
import skinLaserImg from "../assets/services/services1.jpg";
import hairTreatmentImg from "../assets/services/services2.jpg";
import permanentMakeupImg from "../assets/services/services3.jpg";
import bbGlowImg from "../assets/services/services4.jpg";
import heroBg from "../assets/teaching/Teaching(6).jpg";

// SERVICE CATEGORIES WITH DETAILED OFFERINGS
const serviceCategories = [
  {
    id: "bridal-beauty",
    title: "Bridal Beauty Services",
    description: "Your wedding day deserves absolute perfection. Our bridal beauty services are thoughtfully customized to suit your skin type, outfit, jewelry, wedding theme, and personal style.",
    icon: Sparkles,
    color: "bg-pink-50 text-pink-600",
    services: [
      "HD / Airbrush Bridal Makeup",
      "Skin preparation & long-lasting base",
      "Eye makeup – Traditional | Modern | International styles",
      "Bridal hairstyling & dupatta setting",
      "Bridal nail art, gel polish & extensions",
      "Waterproof, HD photo-ready finish"
    ],
    idealFor: "Bride • Engagement • Reception • Sangeet • Wedding Functions"
  },
  {
    id: "party-occasion",
    title: "Party & Occasion Beauty",
    description: "Look effortlessly stunning at every celebration with our elegant, coordinated beauty services—makeup, hair, and nails designed to complement each other perfectly.",
    icon: Users,
    color: "bg-purple-50 text-purple-600",
    services: [
      "Natural | Glam | Smokey Makeup Finishes",
      "Dewy | Matte Makeup Options",
      "Professional Hairstyling & Updos",
      "Minimal | Glam | French Nail Art",
      "Metallic | Floral Statement Designs",
      "Complete coordinated beauty look"
    ],
    idealFor: "Engagements • Birthdays • Cocktail Parties • Festivals • Family Functions"
  },
  {
    id: "hd-airbrush",
    title: "HD & Airbrush Beauty Finish",
    description: "Ideal for clients who want a lightweight, flawless, and long-lasting beauty finish, especially for photography and videography.",
    icon: Camera,
    color: "bg-teal-50 text-teal-600",
    services: [
      "Smooth, skin-like makeup finish",
      "Sweat & humidity resistant",
      "Chip-free, long-lasting nails",
      "Comfortable for long events & shoots",
      "Perfect for photography & videography",
      "Professional HD quality results"
    ],
    idealFor: "Photoshoots • Video Shoots • Long Events • Outdoor Functions"
  },
  {
    id: "photoshoot-fashion",
    title: "Fashion & Portfolio Shoots",
    description: "Designed for models, influencers, and professionals who need impactful, high-definition looks on camera.",
    icon: Palette,
    color: "bg-orange-50 text-orange-600",
    services: [
      "Portfolio Shoot Makeup",
      "Fashion Show Styling",
      "Brand Campaign Looks",
      "Social Media Content Makeup",
      "Editorial & High Fashion Makeup",
      "Customized nail art for shoots"
    ],
    idealFor: "Models • Influencers • Fashion Shows • Brand Campaigns • Content Creation"
  },
  {
    id: "hairstyling",
    title: "Professional Hairstyling",
    description: "Professional hairstyling tailored to enhance your makeup and outfit, creating a complete polished look.",
    icon: Scissors,
    color: "bg-blue-50 text-blue-600",
    services: [
      "Bridal & Party Hairstyles",
      "Curls, Waves & Straight Styling",
      "Traditional Buns & Braids",
      "Hair Accessories & Dupatta Setting",
      "International styling techniques",
      "Long-lasting hold & finish"
    ],
    idealFor: "Weddings • Parties • Events • Photoshoots • Special Occasions"
  },
  {
    id: "nail-art",
    title: "Nail Art & Nail Care",
    description: "Complete your look with luxury nail art and professional nail care, crafted with precision and creativity.",
    icon: Award,
    color: "bg-red-50 text-red-600",
    services: [
      "Bridal & Occasion Nail Art",
      "Gel Polish & Nail Extensions",
      "Nail Shaping, Buffing & Cuticle Care",
      "Manicure & Nail Spa",
      "Long-lasting, chip-free finish",
      "Custom designs & patterns"
    ],
    idealFor: "All Occasions • Daily Wear • Special Events • Professional Settings"
  }
];

// POPULAR SERVICES CAROUSEL
const popularServices = [
  { title: "Bridal Makeup & Hair", image: skinLaserImg, category: "bridal-beauty" },
  { title: "Party Makeup Styling", image: hairTreatmentImg, category: "party-occasion" },
  { title: "HD Airbrush Finish", image: permanentMakeupImg, category: "hd-airbrush" },
  { title: "Professional Nail Art", image: bbGlowImg, category: "nail-art" }
];

const CARD_WIDTH = 320;
const AUTO_DELAY = 3000;

// ENQUIRY MODAL
const EnquiryModal = ({ isOpen, onClose, service }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const toastId = toast.loading("Submitting...");
    try {
      const res = await axios.post("https://kaya-server.vercel.app/api/enquiry", {
        firstName,
        lastName,
        phone,
        email,
        message,
        service
      });
      toast.success(res.data.message || "Submitted successfully ✅", { id: toastId });
      setFirstName(""); setLastName(""); setPhone(""); setEmail(""); setMessage("");
      onClose();
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Something went wrong ❌", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl">
        <div className="bg-[#631529] p-6 text-white flex justify-between items-center">
          <div>
            <h3 className="text-xl font-serif font-bold">Enquire About Service</h3>
            <p className="text-white/80 text-sm mt-1">Fill the form to get more info about {service}</p>
          </div>
          <button onClick={onClose} className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input 
              type="text" 
              placeholder="First Name" 
              value={firstName} 
              onChange={e => setFirstName(e.target.value)} 
              required 
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#631529] focus:ring-1 focus:ring-[#631529]" 
            />
            <input 
              type="text" 
              placeholder="Last Name" 
              value={lastName} 
              onChange={e => setLastName(e.target.value)} 
              required 
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#631529] focus:ring-1 focus:ring-[#631529]" 
            />
          </div>
          <input 
            type="tel" 
            placeholder="Phone Number" 
            value={phone} 
            onChange={e => setPhone(e.target.value)} 
            required 
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#631529] focus:ring-1 focus:ring-[#631529]" 
          />
          <input 
            type="email" 
            placeholder="Email Address" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            required 
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#631529] focus:ring-1 focus:ring-[#631529]" 
          />
          <textarea 
            rows="3" 
            placeholder="Any specific questions?" 
            value={message} 
            onChange={e => setMessage(e.target.value)} 
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#631529] focus:ring-1 focus:ring-[#631529]" 
          />

          <button 
            type="submit" 
            disabled={loading} 
            className="w-full bg-[#631529] text-white font-bold py-4 rounded-xl hover:bg-[#4a101f] transition-all transform active:scale-95 shadow-lg flex items-center justify-center gap-2"
          >
            Submit Enquiry <ArrowRight size={18} />
          </button>

          <p className="text-xs text-center text-gray-400">By submitting, you agree to our privacy policy.</p>
        </form>
      </div>
    </div>
  );
};

// SERVICES PAGE
export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalService, setModalService] = useState("");
  const [carouselIndex, setCarouselIndex] = useState(0);
  const intervalRef = useRef(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const navigate = useNavigate();
  const maxIndex = popularServices.length - 1;

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, []);

  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = setInterval(() => {
      setCarouselIndex(i => (i >= maxIndex ? 0 : i + 1));
    }, AUTO_DELAY);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const prevSlide = () => {
    stopAutoPlay();
    setCarouselIndex(i => (i === 0 ? maxIndex : i - 1));
    startAutoPlay();
  };

  const nextSlide = () => {
    stopAutoPlay();
    setCarouselIndex(i => (i >= maxIndex ? 0 : i + 1));
    startAutoPlay();
  };

  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchMove = (e) => { touchEndX.current = e.touches[0].clientX; };
  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
    touchStartX.current = null; 
    touchEndX.current = null;
  };

  const filteredServices = serviceCategories.map(cat => {
    if (!searchTerm) return cat;
    const titleMatch = cat.title.toLowerCase().includes(searchTerm.toLowerCase());
    const descMatch = cat.description.toLowerCase().includes(searchTerm.toLowerCase());
    const servicesMatch = cat.services.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    
    if (titleMatch || descMatch || servicesMatch) {
      if (servicesMatch && !titleMatch) {
        return {
          ...cat,
          services: cat.services.filter(s => s.toLowerCase().includes(searchTerm.toLowerCase()))
        };
      }
      return cat;
    }
    return null;
  }).filter(Boolean);

  const openModal = (service) => {
    setModalService(service);
    setIsModalOpen(true);
  };

  const scrollToCategory = (categoryId) => {
    const element = document.getElementById(categoryId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} service={modalService} />

      {/* HERO */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#631529] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src={heroBg} alt="Services Background" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-wider px-4 py-1.5 rounded-full mb-6">
            PREMIUM BEAUTY SERVICES
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            Professional Beauty Services <br />
            <span className="text-pink-200">For Every Occasion</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
            Expert makeup, hairstyling, and nail art services designed to enhance your natural beauty with elegance and confidence.
          </p>

          <div className="max-w-xl mx-auto relative mb-10">
            <input 
              type="text" 
              placeholder="Search for a service (e.g. Bridal, Makeup, Nails)" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/10 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 rounded-full pl-6 pr-14 py-4 focus:outline-none focus:bg-white/20 focus:border-white transition-all shadow-lg"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80">
              <Search size={24} />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => openModal("General Enquiry")} 
              className="bg-white text-[#631529] px-6 py-3 md:px-8 md:py-3.5 rounded-full font-bold hover:bg-gray-100 transition shadow-lg transform hover:-translate-y-1 flex items-center gap-2 text-sm md:text-base"
            >
              <MessageSquare size={18} /> Book Appointment
            </button>
          </div>
        </div>
      </section>

      {/* POPULAR SERVICES CAROUSEL */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-8 text-gray-900">Popular Services</h2>
          <div
            className="relative"
            onMouseEnter={stopAutoPlay}
            onMouseLeave={startAutoPlay}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="overflow-hidden rounded-3xl">
              <div 
                className="flex transition-transform duration-700 ease-in-out" 
                style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
              >
                {popularServices.map((service, i) => (
                  <div key={i} className="min-w-full flex-shrink-0 px-2">
                    <div 
                      onClick={() => scrollToCategory(service.category)} 
                      className="cursor-pointer group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                    >
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="h-96 w-full object-cover transition-transform duration-500 group-hover:scale-105" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <h3 className="text-white font-bold text-2xl md:text-3xl mb-2">{service.title}</h3>
                        <button className="bg-white text-[#631529] px-6 py-2 rounded-full font-bold text-sm hover:bg-gray-100 transition">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
              <button 
                onClick={prevSlide} 
                className="pointer-events-auto bg-white/90 hover:bg-white p-3 rounded-full transition shadow-lg"
              >
                <ChevronLeft className="text-[#631529]" />
              </button>
              <button 
                onClick={nextSlide} 
                className="pointer-events-auto bg-white/90 hover:bg-white p-3 rounded-full transition shadow-lg"
              >
                <ChevronRight className="text-[#631529]" />
              </button>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {popularServices.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCarouselIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === carouselIndex ? 'w-8 bg-[#631529]' : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE CATEGORIES */}
      <section className="bg-[#faf7f7] min-h-screen pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          {filteredServices.length === 0 ? (
            <div className="text-center py-20">
              <div className="bg-gray-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-500">
                <Search size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-700">No services found</h3>
              <p className="text-gray-500">Try adjusting your search terms.</p>
            </div>
          ) : (
            <div className="space-y-8 md:space-y-12">
              {filteredServices.map((category) => {
                const Icon = category.icon;
                return (
                  <div 
                    key={category.id} 
                    id={category.id} 
                    className="bg-white rounded-[24px] md:rounded-[32px] p-6 md:p-10 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
                  >
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
                      {/* Left Column - Info */}
                      <div className="lg:w-1/3">
                        <div className={`w-14 h-14 ${category.color} rounded-2xl flex items-center justify-center mb-6 shadow-sm`}>
                          <Icon size={28} />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4">
                          {category.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-6 text-base">
                          {category.description}
                        </p>
                        <div className="bg-pink-50 rounded-2xl p-4 mb-6">
                          <p className="font-bold text-gray-700 text-sm mb-2">Ideal For:</p>
                          <p className="text-gray-600 text-sm">{category.idealFor}</p>
                        </div>
                        <button 
                          onClick={() => openModal(category.title)} 
                          className="inline-flex items-center gap-2 text-[#631529] font-bold hover:gap-3 transition-all bg-pink-50 px-5 py-2.5 rounded-full"
                        >
                          <MessageSquare size={18} /> Book Now
                        </button>
                      </div>

                      {/* Right Column - Services List */}
                      <div className="lg:w-2/3 bg-[#fdfbfb] rounded-3xl p-6 md:p-8 border border-gray-100">
                        <div className="flex items-center justify-between mb-6">
                          <h4 className="font-bold text-gray-400 text-xs uppercase tracking-widest">
                            {category.services.length} Services Included
                          </h4>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                          {category.services.map((service, i) => (
                            <div 
                              key={i} 
                              className="flex items-start gap-3 p-3 rounded-xl hover:bg-white hover:shadow-sm transition-all cursor-default group border border-transparent hover:border-gray-100"
                            >
                              <CheckCircle2 size={18} className="text-[#631529] mt-0.5 shrink-0" />
                              <span className="text-gray-700 font-medium text-sm md:text-base leading-tight">
                                {service}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-gray-900">
              Why Choose Vaishalli International?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Experience the perfect blend of luxury, expertise, and personalized care
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Certified Experts",
                desc: "Internationally certified beauty, makeup, nail & hair artists"
              },
              {
                icon: Sparkles,
                title: "Premium Products",
                desc: "International & dermatologically tested products"
              },
              {
                icon: Users,
                title: "Personalized Approach",
                desc: "Customized beauty solutions for every client"
              },
              {
                icon: BookOpen,
                title: "Hygiene Standards",
                desc: "Strict hygiene & sanitation protocols"
              },
              {
                icon: Camera,
                title: "HD Photo-Ready",
                desc: "Waterproof, long-lasting, camera-perfect results"
              },
              {
                icon: Palette,
                title: "Trusted by Professionals",
                desc: "Preferred by brides, models & fashion clients"
              }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-[#faf7f7] rounded-3xl p-8 hover:shadow-lg transition-all border border-gray-100">
                  <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center mb-4">
                    <Icon className="text-[#631529]" size={24} />
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#faf7f7]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-[#631529] rounded-[32px] md:rounded-[40px] p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-400 to-purple-600"></div>
            </div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare size={32} />
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Ready to Look Stunning?</h2>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                Book your appointment today and experience luxury beauty services that enhance your natural elegance.
              </p>
              <button 
                onClick={() => openModal("General Enquiry")} 
                className="bg-white text-[#631529] px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center gap-2 mx-auto"
              >
                Book Your Appointment <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}