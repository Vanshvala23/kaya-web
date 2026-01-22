import { useState, useEffect, useMemo } from "react";
import { 
  Star, 
  Quote, 
  Play, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle,
  X,
  Camera
} from "lucide-react";

// ASSET IMPORTS
import testimonialBg from "../assets/c1.jpg"; 
import studentAvatar from "../assets/brands/avatar.jpg"; 
import videoThumb1 from "../assets/p2.jpg"; 
import videoThumb2 from "../assets/p3.jpg"; 
import videoThumb3 from "../assets/bridal1.jpg";

// MOCK DATA 
const allTestimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    course: "Cosmetology",
    rating: 5,
    text: "The hands-on training at Orane is unmatched. I got placed at a top salon immediately after my course! The faculty is incredibly supportive.",
    image: studentAvatar,
    batch: "2024"
  },
  {
    id: 2,
    name: "Rahul Verma",
    course: "Hair Designing",
    rating: 5,
    text: "Best institute for hair styling. The mentors are industry experts who guide you at every step. I learned advanced cutting techniques.",
    image: studentAvatar, 
    batch: "2023"
  },
  {
    id: 3,
    name: "Sneha Gupta",
    course: "Makeup",
    rating: 4,
    text: "I loved the environment. It's professional yet very supportive. The bridal makeup module was my favorite. Highly recommended.",
    image: studentAvatar,
    batch: "2024"
  },
  {
    id: 4,
    name: "Aman Singh",
    course: "Nutrition",
    rating: 5,
    text: "The curriculum is very detailed. It helped me start my own consultancy. The practical workshops on diet planning were a game changer.",
    image: studentAvatar,
    batch: "2022"
  },
  {
    id: 5,
    name: "Jaspreet Kaur",
    course: "Nail Art",
    rating: 5,
    text: "Orane gave me wings to fly. I started as a novice and now I am a senior nail technician in Canada. The international certification really helps!",
    image: studentAvatar,
    batch: "2023"
  },
  {
    id: 6,
    name: "Vikram Malhotra",
    course: "Spa Therapy",
    rating: 4,
    text: "Great infrastructure and labs. The spa therapy course covers everything from anatomy to advanced massage techniques.",
    image: studentAvatar,
    batch: "2024"
  }
];

const videoTestimonials = [
  {
    id: 1,
    title: "From Student to Salon Owner",
    student: "Riya's Journey",
    thumbnail: videoThumb1, 
    duration: "2:45"
  },
  {
    id: 2,
    title: "Working at Lakmé Fashion Week",
    student: "Arjun's Experience",
    thumbnail: videoThumb2, 
    duration: "3:10"
  },
  {
    id: 3,
    title: "International Placement Success",
    student: "Meera in Dubai",
    thumbnail: videoThumb3, 
    duration: "1:55"
  }
];

// COMPONENTS 

const VideoModal = ({ isOpen, onClose, video }) => {
  if (!isOpen || !video) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-black rounded-2xl w-full max-w-4xl overflow-hidden shadow-2xl relative aspect-video">
        <button onClick={onClose} className="absolute top-4 right-4 z-10 bg-white/20 p-2 rounded-full hover:bg-white/40 text-white transition">
          <X size={24} />
        </button>
        <div className="w-full h-full flex items-center justify-center text-white flex-col gap-4">
          <Play size={64} className="opacity-50" />
          <p className="text-lg font-bold">Playing: {video.title}</p>
          <p className="text-sm opacity-60">(Video Player Placeholder)</p>
        </div>
      </div>
    </div>
  );
};

const SubmitStoryModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(2);
    setTimeout(() => {
      onClose();
      setStep(1);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full md:max-w-lg rounded-t-3xl md:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="bg-[#631529] p-6 text-white flex justify-between items-center sticky top-0 z-10">
          <h3 className="text-xl font-serif font-bold">Share Your Story</h3>
          <button onClick={onClose} className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition"><X size={20} /></button>
        </div>
        
        <div className="p-6 md:p-8 overflow-y-auto">
          {step === 1 ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input required type="text" placeholder="Full Name" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#631529]" />
              <input required type="text" placeholder="Course Completed" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#631529]" />
              <textarea required rows="4" placeholder="Write your experience..." className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#631529]"></textarea>
              
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center cursor-pointer hover:bg-gray-50 transition">
                <Camera className="mx-auto text-gray-400 mb-2" size={24} />
                <p className="text-sm text-gray-500">Upload your photo (Optional)</p>
              </div>

              <button className="w-full bg-[#631529] text-white py-3.5 rounded-xl font-bold hover:bg-[#4a101f] transition shadow-lg">
                Submit Review
              </button>
            </form>
          ) : (
            <div className="text-center py-10">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
              <p className="text-gray-600">Your story has been submitted for review.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function TestimonialsPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isSubmitOpen, setIsSubmitOpen] = useState(false);

  const filteredTestimonials = useMemo(() => {
    if (activeTab === "All") return allTestimonials;
    return allTestimonials.filter(t => t.course.includes(activeTab));
  }, [activeTab]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <VideoModal 
        isOpen={!!selectedVideo} 
        video={selectedVideo} 
        onClose={() => setSelectedVideo(null)} 
      />
      <SubmitStoryModal 
        isOpen={isSubmitOpen} 
        onClose={() => setIsSubmitOpen(false)} 
      />

      {/* HERO SECTION */}
      <section className="relative pt-28 pb-16 lg:pt-40 lg:pb-32 bg-[#2a0a12] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src={testimonialBg} 
            alt="Testimonials Background" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block bg-[#631529] border border-white/20 text-white text-[10px] md:text-xs font-bold tracking-wider px-3 py-1 md:px-4 md:py-1.5 rounded-full mb-6 animate-pulse">
            WALL OF LOVE
          </span>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
            Stories of <br />
            <span className="text-pink-400">Transformation</span>
          </h1>
          
          <p className="text-base md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed px-4">
            Don't just take our word for it. Hear from the thousands of students whose lives have been changed by Orane.
          </p>

          <div className="flex justify-center gap-8 md:gap-16 bg-white/10 backdrop-blur-md px-8 py-4 rounded-3xl border border-white/10">
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-bold mb-1">50k+</div>
              <div className="text-[10px] md:text-xs text-white/60 uppercase tracking-widest">Alumni</div>
            </div>
            <div className="w-px bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-bold mb-1">4.9</div>
              <div className="text-[10px] md:text-xs text-white/60 uppercase tracking-widest flex items-center justify-center gap-1">
                Avg Rating <Star size={10} fill="currentColor" />
              </div>
            </div>
            <div className="w-px bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-bold mb-1">100%</div>
              <div className="text-[10px] md:text-xs text-white/60 uppercase tracking-widest">Placement</div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO SUCCESS STORIES */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Video Success Stories</h2>
            <p className="text-gray-600">See real results from real students.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {videoTestimonials.map((video) => (
              <div 
                key={video.id} 
                onClick={() => setSelectedVideo(video)}
                className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 aspect-[4/5] md:aspect-video"
              >
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform">
                    <Play fill="white" className="text-white ml-1" size={24} />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white">
                  <span className="bg-[#631529] text-[10px] px-2 py-0.5 rounded-full font-bold mb-2 inline-block">
                    {video.duration}
                  </span>
                  <h3 className="font-bold text-lg mb-1 leading-tight">{video.title}</h3>
                  <p className="text-xs text-white/80">{video.student}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS GRID */}
      <section className="py-16 md:py-24 bg-[#faf7f7]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 text-center md:text-left">Student Reviews</h2>
              <p className="text-sm text-gray-500 mt-1 text-center md:text-left">Filter by your area of interest</p>
            </div>
            
            <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
              {["All", "Cosmetology", "Makeup", "Hair", "Nutrition", "Nail Art"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all flex-shrink-0
                    ${activeTab === tab 
                      ? "bg-[#631529] text-white shadow-md transform scale-105" 
                      : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"}
                  `}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {filteredTestimonials.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300">
              <MessageCircle size={40} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-bold text-gray-600">No reviews found</h3>
              <p className="text-gray-400">Try selecting a different category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTestimonials.map((t) => (
                <div key={t.id} className="bg-white p-8 rounded-[32px] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full relative group">
                  <Quote className="absolute top-8 right-8 text-[#fdeff0] group-hover:text-[#631529]/10 transition-colors" size={64} />
                  
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={`${i < t.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"}`} 
                      />
                    ))}
                  </div>

                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 italic relative z-10 flex-1">
                    "{t.text}"
                  </p>

                  <div className="flex items-center gap-4 mt-auto border-t border-gray-50 pt-6">
                    <img 
                      src={t.image} 
                      alt={t.name} 
                      className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm md:text-base">{t.name}</h4>
                      <p className="text-xs text-[#631529] font-medium">{t.course}</p>
                      <p className="text-[10px] text-gray-400">Batch of {t.batch}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-16 text-center">
            <button className="bg-white border border-gray-200 text-gray-600 px-8 py-3 rounded-full font-bold hover:bg-[#631529] hover:text-white hover:border-[#631529] transition shadow-sm text-sm md:text-base">
              Load More Reviews
            </button>
          </div>

        </div>
      </section>

      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-4 bg-white border border-gray-200 rounded-full px-8 py-4 shadow-sm hover:shadow-md transition">
            
            <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center shrink-0">
              <span className="text-xl font-bold" style={{
                background: "conic-gradient(from -45deg, #ea4335 110deg, #4285f4 90deg 180deg, #34a853 180deg 270deg, #fbbc05 270deg 360deg)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}>G</span>
            </div>

            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start gap-1 text-yellow-400 text-sm mb-1">
                <Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" />
              </div>
              <p className="text-sm font-bold text-gray-700">4.8/5 Rating based on 12,000+ Reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <div className="bg-[#f8f9fa] rounded-[40px] p-10 md:p-16 border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#631529]/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
            
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-gray-900 mb-4 relative z-10">
              Have a Story to Share?
            </h2>
            <p className="text-gray-600 text-lg mb-8 relative z-10 max-w-xl mx-auto">
              Are you an Orane alumni? Inspire the next generation of beauty professionals by sharing your journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <button 
                onClick={() => setIsSubmitOpen(true)}
                className="inline-flex items-center justify-center gap-2 bg-[#631529] text-white px-8 py-3.5 rounded-full font-bold hover:bg-[#4a101f] transition shadow-lg transform hover:-translate-y-1"
              >
                Submit Your Story <ArrowRight size={18} />
              </button>
              <a 
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 px-8 py-3.5 rounded-full font-bold hover:bg-gray-50 transition"
              >
                Join Alumni Network
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}