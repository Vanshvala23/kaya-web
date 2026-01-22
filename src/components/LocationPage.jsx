import { useState, useEffect, useMemo } from "react";
import { 
  MapPin, 
  Search, 
  Navigation, 
  Phone, 
  ArrowRight, 
  Globe, 
  Building2,
  Map as MapIcon,
  List,
  Clock,
  Calendar,
  X,
  CheckCircle2,
  Image as ImageIcon,
  Star
} from "lucide-react";

// ASSET IMPORTS 
import locationBg from "../assets/center.jpg"; 
import centerImgMohali from "../assets/c1.jpg"; 
import centerImgChandigarh from "../assets/c3.jpg"; 
import centerImgDelhi from "../assets/c2.jpg"; 
import centerImgMumbai from "../assets/c4.jpg";

//  MOCK DATA 
const centersData = [
  {
    id: 1,
    name: "Orane International Mohali",
    state: "Punjab",
    city: "Mohali",
    address: "SCO 88-92, Sector 82, JLPL Industrial Area, Mohali",
    phone: "+91 88725 00500",
    email: "mohali@orane.com",
    coordinates: { lat: 30.6740, lng: 76.7064 },
    image: centerImgMohali, 
    hours: "10:00 AM - 07:00 PM",
    rating: 4.8,
    features: ["Advanced Skin Lab", "Bridal Studio", "Hostel Facility"]
  },
  {
    id: 2,
    name: "Orane International Chandigarh",
    state: "Punjab",
    city: "Chandigarh",
    address: "SCO 14, Sector 34-A, Chandigarh",
    phone: "+91 98765 43210",
    email: "chandigarh@orane.com",
    coordinates: { lat: 30.7333, lng: 76.7794 },
    image: centerImgChandigarh, 
    hours: "09:30 AM - 06:30 PM",
    rating: 4.9,
    features: ["Makeup Studio", "Hair Academy", "Placement Cell"]
  },
  {
    id: 3,
    name: "Orane International Delhi (South)",
    state: "Delhi",
    city: "New Delhi",
    address: "A-12, Lajpat Nagar II, New Delhi",
    phone: "+91 11 2983 4567",
    email: "delhi.south@orane.com",
    coordinates: { lat: 28.5672, lng: 77.2433 },
    image: centerImgDelhi, 
    hours: "10:00 AM - 07:00 PM",
    rating: 4.7,
    features: ["Clinical Aesthetics", "Nutrition Lab"]
  },
  {
    id: 4,
    name: "Orane International Mumbai",
    state: "Maharashtra",
    city: "Mumbai",
    address: "201, Crystal Plaza, Andheri West, Mumbai",
    phone: "+91 22 4567 8900",
    email: "mumbai@orane.com",
    coordinates: { lat: 19.1136, lng: 72.8697 },
    image: centerImgMumbai, 
    hours: "11:00 AM - 08:00 PM",
    rating: 4.8,
    features: ["Celebrity Makeup", "Spa Therapy", "Nail Art Bar"]
  },
  {
    id: 5,
    name: "Orane International Vancouver",
    state: "British Columbia",
    city: "Vancouver",
    address: "123 W Hastings St, Vancouver, BC V6B 1H4, Canada",
    phone: "+1 604 123 4567",
    email: "vancouver@orane.com",
    country: "Canada",
    coordinates: { lat: 49.2827, lng: -123.1207 },
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600",
    hours: "09:00 AM - 05:00 PM",
    rating: 5.0,
    features: ["International Certification", "Co-op Programs"]
  },
  {
    id: 6,
    name: "Orane International Bangalore",
    state: "Karnataka",
    city: "Bangalore",
    address: "100 Ft Road, Indiranagar, Bangalore",
    phone: "+91 80 1234 5678",
    email: "bangalore@orane.com",
    coordinates: { lat: 12.9716, lng: 77.5946 },
    image: "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?auto=format&fit=crop&q=80&w=600",
    hours: "10:00 AM - 07:00 PM",
    rating: 4.6,
    features: ["Ayurveda Spa", "Laser Training"]
  }
];

// COMPONENTS 

const ScheduleVisitModal = ({ isOpen, onClose, centerName }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl scale-100 transition-all">
        <div className="bg-[#631529] p-5 md:p-6 text-white flex justify-between items-center">
          <div>
            <h3 className="text-lg md:text-xl font-serif font-bold">Book a Center Tour</h3>
            <p className="text-white/80 text-xs mt-1 max-w-[200px] truncate">Visiting: {centerName}</p>
          </div>
          <button onClick={onClose} className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition flex-shrink-0"><X size={18} /></button>
        </div>
        <div className="p-5 md:p-6 space-y-4">
          <input type="text" placeholder="Your Name" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#631529] focus:ring-1 focus:ring-[#631529]" />
          <input type="tel" placeholder="Phone Number" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#631529] focus:ring-1 focus:ring-[#631529]" />
          <div className="grid grid-cols-2 gap-4">
            <input type="date" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#631529] text-gray-500" />
            <input type="time" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#631529] text-gray-500" />
          </div>
          <button className="w-full bg-[#631529] text-white font-bold py-3.5 rounded-xl hover:bg-[#4a101f] transition shadow-lg flex items-center justify-center gap-2 transform active:scale-95">
            Confirm Visit <CheckCircle2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default function LocationPage() {
  const [selectedState, setSelectedState] = useState("All");
  const [selectedCity, setSelectedCity] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [isLoading, setIsLoading] = useState(false);
  const [visitModal, setVisitModal] = useState({ open: false, centerName: "" });

  const states = ["All", ...new Set(centersData.map(c => c.state))].sort();
  const cities = ["All", ...new Set(
    centersData
      .filter(c => selectedState === "All" || c.state === selectedState)
      .map(c => c.city)
  )].sort();

  const filteredCenters = useMemo(() => {
    return centersData.filter(center => {
      const matchesState = selectedState === "All" || center.state === selectedState;
      const matchesCity = selectedCity === "All" || center.city === selectedCity;
      const matchesSearch = center.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            center.city.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesState && matchesCity && matchesSearch;
    });
  }, [selectedState, selectedCity, searchQuery]);

  const handleNearMe = () => {
    setIsLoading(true);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(() => {
        setTimeout(() => {
          setSelectedState("All");
          setSelectedCity("All");
          setSearchQuery("");
          setIsLoading(false);
        }, 1000);
      }, () => {
        setIsLoading(false);
        alert("Location access denied.");
      });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ScheduleVisitModal 
        isOpen={visitModal.open} 
        centerName={visitModal.centerName} 
        onClose={() => setVisitModal({ open: false, centerName: "" })} 
      />

      {/* HERO SECTION */}
      <section className="relative pt-28 pb-16 lg:pt-40 lg:pb-32 bg-[#2a0a12] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src={locationBg} 
            alt="Location Background" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block bg-[#631529] border border-white/20 text-white text-[10px] md:text-xs font-bold tracking-wider px-3 py-1 md:px-4 md:py-1.5 rounded-full mb-6 animate-pulse">
            GLOBAL PRESENCE
          </span>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 md:mb-6 leading-tight">
            Find an Academy <br />
            <span className="text-pink-400">Near You</span>
          </h1>
          
          <p className="text-base md:text-xl text-white/80 max-w-3xl mx-auto mb-8 md:mb-10 leading-relaxed px-4">
            With 110+ centers across India and Canada, quality beauty education is closer than you think.
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-2 md:gap-4 max-w-xl md:max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-white/20">
            <div className="text-center border-r border-white/20">
              <div className="text-xl md:text-3xl font-bold">110+</div>
              <div className="text-[10px] md:text-sm text-white/60 uppercase">Centers</div>
            </div>
            <div className="text-center border-r border-white/20">
              <div className="text-xl md:text-3xl font-bold">80+</div>
              <div className="text-[10px] md:text-sm text-white/60 uppercase">Cities</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-3xl font-bold">2</div>
              <div className="text-[10px] md:text-sm text-white/60 uppercase">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH & FILTER BAR */}
      <section className="sticky top-0 z-30 bg-white shadow-md py-3 md:py-4 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-3 md:gap-4 items-stretch lg:items-center justify-between">
            
            {/* Mobile: Search takes priority visually */}
            <div className="relative w-full lg:w-96 order-1 lg:order-2">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search city, center..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 md:py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#631529] focus:ring-1 focus:ring-[#631529] text-sm md:text-base"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-row gap-2 md:gap-3 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 scrollbar-hide order-2 lg:order-1">
              <button 
                onClick={handleNearMe}
                className="flex items-center justify-center gap-2 bg-[#fdeff0] text-[#631529] px-4 py-2.5 md:px-6 md:py-3 rounded-lg font-bold hover:bg-[#631529] hover:text-white transition whitespace-nowrap text-sm md:text-base flex-shrink-0"
              >
                {isLoading ? "Locating..." : <><Navigation size={18} /> Near Me</>}
              </button>

              <select 
                value={selectedState}
                onChange={(e) => { setSelectedState(e.target.value); setSelectedCity("All"); }}
                className="bg-gray-50 border border-gray-200 px-3 py-2.5 md:px-4 md:py-3 rounded-lg focus:outline-none focus:border-[#631529] w-32 md:w-48 cursor-pointer text-sm md:text-base flex-shrink-0"
              >
                <option value="All">All States</option>
                {states.filter(s => s !== "All").map(s => <option key={s} value={s}>{s}</option>)}
              </select>

              <select 
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                disabled={selectedState === "All"}
                className="bg-gray-50 border border-gray-200 px-3 py-2.5 md:px-4 md:py-3 rounded-lg focus:outline-none focus:border-[#631529] w-32 md:w-48 disabled:opacity-50 cursor-pointer text-sm md:text-base flex-shrink-0"
              >
                <option value="All">All Cities</option>
                {cities.filter(c => c !== "All").map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

          </div>
        </div>
      </section>

      {/* RESULTS SECTION */}
      <section className="py-8 md:py-12 bg-[#faf7f7] min-h-[50vh] md:min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          
          {/* Header & Toggle */}
          <div className="flex flex-row justify-between items-center mb-6 md:mb-8">
            <h2 className="text-lg md:text-xl font-bold text-gray-800">
              Showing {filteredCenters.length} Centers
            </h2>
            <div className="flex bg-white rounded-lg p-1 border border-gray-200 shadow-sm shrink-0">
              <button 
                onClick={() => setViewMode("grid")}
                className={`p-1.5 md:p-2 rounded-md transition ${viewMode === "grid" ? "bg-[#631529] text-white" : "text-gray-500 hover:bg-gray-50"}`}
              >
                <List size={18} />
              </button>
              <button 
                onClick={() => setViewMode("map")}
                className={`p-1.5 md:p-2 rounded-md transition ${viewMode === "map" ? "bg-[#631529] text-white" : "text-gray-500 hover:bg-gray-50"}`}
              >
                <MapIcon size={18} />
              </button>
            </div>
          </div>

          {filteredCenters.length === 0 ? (
            <div className="text-center py-16 md:py-20 bg-white rounded-3xl border border-dashed border-gray-300 mx-auto max-w-lg">
              <MapPin size={40} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-lg md:text-xl font-bold text-gray-600">No centers found</h3>
              <p className="text-sm md:text-base text-gray-400 px-4">Try changing your filters or search terms.</p>
              <button 
                onClick={() => {setSelectedState("All"); setSelectedCity("All"); setSearchQuery("");}}
                className="mt-4 text-[#631529] font-bold underline text-sm"
              >
                Clear all filters
              </button>
            </div>
          ) : viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredCenters.map((center) => (
                <div key={center.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group border border-gray-100 flex flex-col h-full relative">
                  
                  {/* Image & Badges */}
                  <div className="h-48 md:h-56 overflow-hidden relative">
                    <img 
                      src={center.image} 
                      alt={center.name} 
                      className="w-full h-full object-cover transition duration-500 group-hover:scale-110" 
                    />
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur px-2 py-1 rounded-md text-[10px] md:text-xs font-bold text-green-700 flex items-center gap-1 shadow-sm">
                       <Clock size={12} /> Open Now
                    </div>
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur px-2 py-1 rounded-md text-[10px] md:text-xs font-bold text-orange-500 flex items-center gap-1 shadow-sm">
                       <Star size={12} fill="currentColor" /> {center.rating}
                    </div>
                    {/* View Gallery Overlay Button */}
                    <button className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 text-white font-bold gap-2 text-sm">
                      <ImageIcon size={18} /> View Gallery
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-5 md:p-6 flex-1 flex flex-col">
                    <div className="mb-4">
                      <h3 className="text-lg md:text-xl font-serif font-bold text-gray-900 mb-1 leading-tight">
                        {center.name}
                      </h3>
                      <p className="text-xs text-gray-500 flex items-center gap-1">
                        <MapPin size={12} /> {center.city}, {center.state}
                      </p>
                    </div>

                    {/* Features Tags */}
                    <div className="flex flex-wrap gap-2 mb-4 md:mb-5">
                      {center.features.slice(0, 2).map((feat, i) => (
                        <span key={i} className="text-[10px] font-bold uppercase tracking-wider bg-gray-100 text-gray-600 px-2 py-1 rounded-md">
                          {feat}
                        </span>
                      ))}
                      {center.features.length > 2 && (
                        <span className="text-[10px] font-bold bg-gray-100 text-gray-600 px-2 py-1 rounded-md">
                          +{center.features.length - 2}
                        </span>
                      )}
                    </div>

                    <p className="text-xs md:text-sm text-gray-600 mb-4 line-clamp-2 flex-1">
                      {center.address}
                    </p>

                    <div className="space-y-2 mb-6 text-xs md:text-sm text-gray-700">
                      <div className="flex items-center gap-3">
                         <Clock size={16} className="text-[#631529] shrink-0" /> {center.hours}
                      </div>
                      <div className="flex items-center gap-3">
                         <Phone size={16} className="text-[#631529] shrink-0" /> {center.phone}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mt-auto">
                      <button 
                         onClick={() => setVisitModal({ open: true, centerName: center.name })}
                         className="flex items-center justify-center gap-2 bg-[#631529] text-white py-2.5 md:py-3 rounded-xl text-xs md:text-sm font-bold hover:bg-[#4a101f] transition shadow-md hover:shadow-lg transform active:scale-95"
                      >
                        <Calendar size={16} /> Book Visit
                      </button>
                      <a 
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(center.address)}`} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 border border-gray-200 py-2.5 md:py-3 rounded-xl text-xs md:text-sm font-bold text-gray-600 hover:border-[#631529] hover:text-[#631529] transition"
                      >
                        <Navigation size={16} /> Direction
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // MAP VIEW PLACEHOLDER 
            <div className="bg-white rounded-3xl h-[400px] md:h-[600px] flex flex-col items-center justify-center text-center p-6 md:p-10 border border-gray-200 shadow-inner">
               <div className="w-20 h-20 md:w-24 md:h-24 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mb-6 animate-bounce">
                  <Globe size={40} className="md:w-12 md:h-12" />
               </div>
               <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Interactive Map View</h3>
               <p className="text-sm md:text-base text-gray-500 max-w-md mx-auto mb-8">
                 Visualize all {filteredCenters.length} centers on an interactive map. 
                 Zoom, click, and explore locations near you.
               </p>
               <button 
                 onClick={() => setViewMode("grid")}
                 className="bg-[#631529] text-white px-6 py-2.5 md:px-8 md:py-3 rounded-full font-bold hover:bg-[#4a101f] transition shadow-lg text-sm md:text-base"
               >
                 Back to List View
               </button>
            </div>
          )}

        </div>
      </section>

      {/* EXPANSION CTA */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="bg-[#631529] rounded-[24px] md:rounded-[40px] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-8 md:gap-12 text-white relative overflow-hidden shadow-2xl">
            
            <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

            <div className="lg:w-2/3 relative z-10 text-center lg:text-left">
              <span className="bg-white/20 text-[10px] md:text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">EXPANSION</span>
              <h2 className="text-2xl md:text-5xl font-serif font-bold mb-4 md:mb-6 leading-tight">
                Don't see a center near you?
              </h2>
              <p className="text-white/80 text-sm md:text-lg leading-relaxed mb-6 md:mb-8">
                We are constantly expanding! Or, you can take the lead and bring the world's best beauty education to your city by becoming a franchise partner.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
                <a href="/franchise" className="bg-white text-[#631529] px-6 py-3 md:px-8 md:py-3.5 rounded-full font-bold hover:bg-gray-100 transition shadow-lg flex items-center justify-center gap-2 transform hover:-translate-y-1 text-sm md:text-base">
                  <Building2 size={18} /> Open a Franchise
                </a>
                <a href="/contact" className="border border-white text-white px-6 py-3 md:px-8 md:py-3.5 rounded-full font-bold hover:bg-white/10 transition flex items-center justify-center gap-2 text-sm md:text-base">
                  Contact Support <ArrowRight size={18} />
                </a>
              </div>
            </div>

            <div className="lg:w-1/3 relative z-10 w-full">
               <div className="bg-white/10 backdrop-blur-md p-5 md:p-6 rounded-2xl border border-white/20">
                 <h4 className="font-bold text-base md:text-lg mb-4 border-b border-white/20 pb-2">Upcoming Locations</h4>
                 <ul className="space-y-3 md:space-y-4">
                   {["Dubai, UAE", "Toronto, Canada", "Kolkata, India", "Hyderabad, India"].map((loc, i) => (
                     <li key={i} className="flex items-center gap-3 text-sm font-medium">
                       <span className="relative flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                        </span>
                       {loc}
                     </li>
                   ))}
                 </ul>
               </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}