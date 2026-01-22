import { useState } from "react";
import Footer from "../components/Footer";
import { 
  CheckCircle2, 
  Sparkles, 
  Award, 
  BookOpen, 
  Users, 
  Globe, 
  ArrowRight,
  Search,
  X,
  Phone,
  MessageSquare,
  FileText
} from "lucide-react";

// Placeholder for hero background
import heroBg from "../assets/c2.jpg"; 

// DATA 
const courseCategories = [
  {
    id: "cosmetology",
    title: "Cosmetology & Beauty",
    description: "Master the art of beauty culture with our comprehensive cosmetology programs. From basics to grand master levels, we cover it all.",
    icon: Sparkles,
    color: "bg-pink-50 text-pink-600",
    courses: [
      "Grand Master in Cosmetology",
      "Diploma in Cosmetology",
      "Diploma in Beauty Culture",
      "Advanced Certificate in Beauty Culture",
      "Certificate Course in Beauty Culture",
      "Professional Esthiology Program",
      "Advanced Esthiology Program",
      "Beauty Therapy Certification"
    ]
  },
  {
    id: "makeup",
    title: "Makeup Artistry",
    description: "Unleash your creativity with professional makeup courses ranging from bridal and party makeup to high-fashion and SFX.",
    icon: Users,
    color: "bg-purple-50 text-purple-600",
    courses: [
      "Certificate in Art of Makeup",
      "Professional Makeup Artist Course",
      "Complete Makeup Artistry Program",
      "Bridal Makeup Course",
      "Party & Evening Makeup",
      "Advanced Makeup Techniques",
      "Airbrush Makeup Artistry",
      "High Fashion & Editorial Makeup",
      "Media Makeup Course",
      "Special Effects (SFX) Makeup",
      "Semi-Permanent Makeup / Microblading"
    ]
  },
  {
    id: "hair",
    title: "Hair Designing & Styling",
    description: "Become a hair expert. Learn cutting, coloring, chemical treatments, and advanced styling techniques from industry professionals.",
    icon: Sparkles,
    color: "bg-orange-50 text-orange-600",
    courses: [
      "Certificate in Hair Designing",
      "Diploma in Hair Designing",
      "Professional Hair Styling Course",
      "Hair Cutting Techniques",
      "Hair Colouring & Chemical Treatments",
      "Advanced Hair Styling & Updos",
      "Hair Technology Program"
    ]
  },
  {
    id: "skin",
    title: "Skin & Aesthetics",
    description: "Dive deep into clinical aesthetics. Master advanced facial treatments, chemical peels, lasers, and anti-aging therapies.",
    icon: Globe,
    color: "bg-blue-50 text-blue-600",
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
  },
  {
    id: "nail",
    title: "Nail Technology",
    description: "Turn nails into canvas. Learn nail art, extensions (Gel & Acrylic), and professional manicures & pedicures.",
    icon: BookOpen,
    color: "bg-red-50 text-red-600",
    courses: [
      "Certificate in Nail Art",
      "Professional Nail Technician Course",
      "Gel Nail Extensions",
      "Acrylic Nail Extensions",
      "Manicure & Pedicure Course",
      "Advanced Nail Art Designs"
    ]
  },
  {
    id: "spa",
    title: "Spa & Wellness",
    description: "Focus on holistic wellness. Learn international spa therapies, body massage techniques, and aromatherapy.",
    icon: Award,
    color: "bg-teal-50 text-teal-600",
    courses: [
      "Certificate in Spa Therapy",
      "International Spa Therapies",
      "Body Massage Techniques",
      "Aromatherapy",
      "Wellness & Relaxation Therapies"
    ]
  }
];

// MODAL COMPONENT 
const EnquiryModal = ({ isOpen, onClose, type, subject }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl scale-100 transition-all">
        {/* Header */}
        <div className="bg-[#631529] p-6 text-white flex justify-between items-center">
          <div>
            <h3 className="text-xl font-serif font-bold">
              {type === "syllabus" ? "Request Syllabus" : "Enquire Now"}
            </h3>
            <p className="text-white/80 text-sm mt-1">
              {type === "syllabus" 
                ? `Get detailed curriculum for ${subject}` 
                : "Fill the form to get a callback"}
            </p>
          </div>
          <button onClick={onClose} className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition">
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <div className="p-6 md:p-8 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#631529] focus:ring-1 focus:ring-[#631529]" />
            <input type="text" placeholder="Last Name" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#631529] focus:ring-1 focus:ring-[#631529]" />
          </div>
          <input type="tel" placeholder="Phone Number" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#631529] focus:ring-1 focus:ring-[#631529]" />
          <input type="email" placeholder="Email Address" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#631529] focus:ring-1 focus:ring-[#631529]" />
          
          {type !== "syllabus" && (
             <textarea rows="3" placeholder="Any specific questions?" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#631529] focus:ring-1 focus:ring-[#631529]"></textarea>
          )}

          <button className="w-full bg-[#631529] text-white font-bold py-4 rounded-xl hover:bg-[#4a101f] transition-all transform active:scale-95 shadow-lg flex items-center justify-center gap-2">
            {type === "syllabus" ? "Send Syllabus" : "Submit Enquiry"} 
            <ArrowRight size={18} />
          </button>

          <p className="text-xs text-center text-gray-400">
            By submitting, you agree to our privacy policy.
          </p>
        </div>
      </div>
    </div>
  );
};

// MAIN PAGE COMPONENT 
export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("general"); 
  const [modalSubject, setModalSubject] = useState("");

  // Filter Logic
  const filteredCategories = courseCategories.map(cat => {
    if (!searchTerm) return cat;

    const titleMatch = cat.title.toLowerCase().includes(searchTerm.toLowerCase());
    const filteredCourses = cat.courses.filter(c => 
      c.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (titleMatch) return cat;
    if (filteredCourses.length > 0) return { ...cat, courses: filteredCourses };
    
    return null;
  }).filter(Boolean); 

  const openModal = (type = "general", subject = "") => {
    setModalType(type);
    setModalSubject(subject);
    setIsModalOpen(true);
  };

  return (
    <>
      <EnquiryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        type={modalType}
        subject={modalSubject}
      />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#631529] text-white overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src={heroBg} 
            alt="Courses Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Decorative Shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-wider px-4 py-1.5 rounded-full mb-6 animate-pulse">
            ADMISSIONS OPEN 2026
          </span>
          
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            Shape Your Future in <br />
            <span className="text-pink-200">Beauty & Wellness</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
            Choose from 100+ internationally recognized courses. 
            From Cosmetology to Clinical Aesthetics, find your passion here.
          </p>

          {/* Search Bar Moved Here */}
          <div className="max-w-xl mx-auto relative mb-10">
            <input 
              type="text" 
              placeholder="Search for a course (e.g. Makeup, Hair, Nail)" 
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
              onClick={() => openModal("general", "Brochure Download")}
              className="bg-white text-[#631529] px-6 py-3 md:px-8 md:py-3.5 rounded-full font-bold hover:bg-gray-100 transition shadow-lg transform hover:-translate-y-1 flex items-center gap-2 text-sm md:text-base"
            >
              <FileText size={18} /> Download Brochure
            </button>
            <button 
              onClick={() => openModal("general", "Counseling Session")}
              className="bg-transparent border border-white text-white px-6 py-3 md:px-8 md:py-3.5 rounded-full font-bold hover:bg-white/10 transition flex items-center gap-2 text-sm md:text-base"
            >
              <Phone size={18} /> Talk to a Counselor
            </button>
          </div>
        </div>
      </section>

      {/* COURSE LISTING */}
      <section className="bg-[#faf7f7] min-h-screen pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          
          {filteredCategories.length === 0 ? (
            <div className="text-center py-20">
              <div className="bg-gray-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-500">
                <Search size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-700">No courses found</h3>
              <p className="text-gray-500">Try adjusting your search terms.</p>
            </div>
          ) : (
            <div className="space-y-8 md:space-y-12">
              {filteredCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <div 
                    key={category.id} 
                    id={category.id}
                    className="bg-white rounded-[24px] md:rounded-[32px] p-6 md:p-10 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
                  >
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
                      
                      {/* Category Header */}
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
  
                        <button 
                          onClick={() => openModal("syllabus", category.title)}
                          className="inline-flex items-center gap-2 text-[#631529] font-bold hover:gap-3 transition-all group bg-pink-50 px-5 py-2.5 rounded-full"
                        >
                          <FileText size={18} /> View Syllabus
                        </button>
                      </div>
  
                      {/* Course List Grid */}
                      <div className="lg:w-2/3 bg-[#fdfbfb] rounded-3xl p-6 md:p-8 border border-gray-100">
                        <div className="flex items-center justify-between mb-6">
                          <h4 className="font-bold text-gray-400 text-xs uppercase tracking-widest">
                            {category.courses.length} Available Courses
                          </h4>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                          {category.courses.map((course, i) => (
                            <div 
                              key={i} 
                              className="flex items-start gap-3 p-3 rounded-xl hover:bg-white hover:shadow-sm transition-all cursor-default group border border-transparent hover:border-gray-100"
                            >
                              <CheckCircle2 size={18} className="text-[#631529] mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                              <span className="text-gray-700 font-medium text-sm md:text-base group-hover:text-[#631529] transition-colors leading-tight">
                                {course}
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

      {/* CTA SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-[#631529] rounded-[32px] md:rounded-[40px] p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
             
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
               <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/40 via-transparent to-transparent" />
            </div>

            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare size={32} />
              </div>

              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                Still confused?
              </h2>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                Talk to our career counselors. They will help you choose the right course based on your interests and career goals.
              </p>
              
              <button 
                onClick={() => openModal("general", "Career Counseling")}
                className="bg-white text-[#631529] px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center gap-2 mx-auto"
              >
                Book Free Counseling <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}