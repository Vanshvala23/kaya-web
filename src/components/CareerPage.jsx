import { useState, useEffect, useMemo } from "react";
import Footer from "../components/Footer";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Search, 
  ArrowRight, 
  Upload, 
  CheckCircle2, 
  X, 
  Users, 
  Heart, 
  Zap, 
  TrendingUp, 
  Loader2,
  FileText
} from "lucide-react";

import axios from 'axios';
import careerBg from "../assets/vision.jpg"; 

// MOCK DATA- JOBS
const jobsData = [
  {
    id: 1,
    title: "Senior Cosmetology Trainer",
    department: "Academics",
    type: "Full-Time",
    location: "Mohali, Punjab",
    exp: "5-8 Years",
    posted: "2 days ago",
    desc: "We are looking for an experienced Cosmetology Trainer to lead our advanced batches. Must have CIDESCO certification."
  },
  {
    id: 2,
    title: "Center Manager",
    department: "Management",
    type: "Full-Time",
    location: "Delhi (South)",
    exp: "8-12 Years",
    posted: "1 week ago",
    desc: "Responsible for overall center operations, sales targets, and team management. Prior experience in education sector preferred."
  },
  {
    id: 3,
    title: "Career Counselor",
    department: "Sales",
    type: "Full-Time",
    location: "Mumbai, Maharashtra",
    exp: "2-4 Years",
    posted: "3 days ago",
    desc: "Guide students to choose the right career path. Strong communication and convincing skills required."
  },
  {
    id: 4,
    title: "Digital Marketing Executive",
    department: "Marketing",
    type: "Remote / Hybrid",
    location: "Chandigarh",
    exp: "1-3 Years",
    posted: "Just now",
    desc: "Manage social media handles and run lead generation campaigns. Knowledge of Meta Ads & Google Ads is a plus."
  },
  {
    id: 5,
    title: "Makeup Artist (Faculty)",
    department: "Academics",
    type: "Part-Time",
    location: "Bangalore",
    exp: "3+ Years",
    posted: "5 days ago",
    desc: "Teach professional makeup artistry courses. Must have a strong portfolio in bridal and fashion makeup."
  },
  {
    id: 6,
    title: "Front Desk Executive",
    department: "Admin",
    type: "Full-Time",
    location: "Mohali, Punjab",
    exp: "0-2 Years",
    posted: "1 week ago",
    desc: "Manage reception, handle student queries, and maintain attendance records. Good personality and etiquette required."
  }
];

// ------------------- APPLICATION MODAL -------------------

const ApplicationModal = ({ isOpen, onClose, jobTitle }) => {
  const [step, setStep] = useState(1); // 1: Form, 2: Success
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileName, setFileName] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    resume: null
  });

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
      setFormData(prev => ({ ...prev, resume: e.target.files[0] }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const data = new FormData();
      data.append("firstName", formData.firstName);
      data.append("lastName", formData.lastName);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("jobTitle", jobTitle);
      if (formData.resume) data.append("resume", formData.resume);

      // Replace the URL with your backend API endpoint
      await axios.post("http://localhost:5000/api/career", data, {
        headers: { "Content-Type": "multipart/form-data" }
      });

      setStep(2); // Show success step
    } catch (err) {
      console.error(err);
      alert("There was an error submitting your application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-t-3xl md:rounded-3xl w-full max-w-lg max-h-[85vh] overflow-y-auto shadow-2xl scale-100 transition-all flex flex-col">
        
        {/* Header */}
        <div className="bg-[#631529] p-5 md:p-6 text-white flex justify-between items-center sticky top-0 z-10">
          <div>
            <h3 className="text-lg md:text-xl font-serif font-bold">Apply Now</h3>
            <p className="text-white/80 text-xs mt-1 max-w-[200px] truncate">Role: {jobTitle}</p>
          </div>
          <button onClick={onClose} className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition flex-shrink-0"><X size={20} /></button>
        </div>

        {/* Content */}
        <div className="p-5 md:p-8">
          {step === 1 ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase">First Name</label>
                  <input 
                    required 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#631529] focus:ring-1 focus:ring-[#631529]" 
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase">Last Name</label>
                  <input 
                    required 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#631529] focus:ring-1 focus:ring-[#631529]" 
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase">Email Address</label>
                <input 
                  required 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#631529] focus:ring-1 focus:ring-[#631529]" 
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase">Phone Number</label>
                <input 
                  required 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#631529] focus:ring-1 focus:ring-[#631529]" 
                />
              </div>

              {/* Resume Upload */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase">Resume / CV</label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:bg-gray-50 transition cursor-pointer relative bg-gray-50/50">
                  <input 
                    type="file" 
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                  />
                  {fileName ? (
                    <div className="flex items-center justify-center gap-2 text-[#631529] font-bold text-sm break-all">
                      <FileText size={20} className="flex-shrink-0" /> {fileName}
                    </div>
                  ) : (
                    <>
                      <Upload className="mx-auto text-gray-400 mb-2" size={24} />
                      <p className="text-sm text-gray-500 font-medium">Tap to upload resume</p>
                      <p className="text-xs text-gray-400 mt-1">PDF, DOCX</p>
                    </>
                  )}
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-[#631529] text-white font-bold py-4 rounded-xl hover:bg-[#4a101f] transition shadow-lg flex items-center justify-center gap-2 mt-4 disabled:opacity-70 active:scale-95 transform"
              >
                {isSubmitting ? <><Loader2 className="animate-spin" /> Submitting...</> : "Submit Application"}
              </button>
            </form>
          ) : (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                <CheckCircle2 size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Sent!</h3>
              <p className="text-gray-600 mb-8 px-4">
                Thanks for applying to PureReviev. Our HR team will review your profile and get back to you shortly.
              </p>
              <button onClick={onClose} className="text-[#631529] font-bold hover:underline py-2">
                Close Window
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ------------------- CAREER PAGE -------------------

export default function CareerPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDept, setSelectedDept] = useState("All");
  const [applicationModal, setApplicationModal] = useState({ open: false, role: "" });

  // Get unique departments
  const departments = ["All", ...new Set(jobsData.map(j => j.department))];

  // Filter Logic
  const filteredJobs = useMemo(() => {
    return jobsData.filter(job => {
      const matchSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          job.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchDept = selectedDept === "All" || job.department === selectedDept;
      return matchSearch && matchDept;
    });
  }, [searchTerm, selectedDept]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ApplicationModal 
        isOpen={applicationModal.open} 
        jobTitle={applicationModal.role} 
        onClose={() => setApplicationModal({ open: false, role: "" })} 
      />

      {/* HERO SECTION */}
      <section className="relative pt-28 pb-16 lg:pt-40 lg:pb-32 bg-[#2a0a12] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src={careerBg} 
            alt="Career Background" 
            className="w-full h-full object-cover saturate-200 opacity-60 [object-position:50%_20%]"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block bg-[#631529] border border-white/20 text-white text-[10px] md:text-xs font-bold tracking-wider px-3 py-1 md:px-4 md:py-1.5 rounded-full mb-6 animate-pulse">
            WE ARE HIRING
          </span>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
            Join the Revolution in <br />
            <span className="text-pink-400">Beauty Education</span>
          </h1>
          
          <p className="text-base md:text-xl text-white/80 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed px-2">
            Build a career that transforms lives. Join a team of passionate educators, creators, and leaders.
          </p>

          <button 
            onClick={() => document.getElementById('openings').scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-[#631529] px-8 py-3.5 md:px-10 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-gray-100 transition shadow-lg transform hover:-translate-y-1 inline-flex items-center gap-2 active:scale-95"
          >
            View Open Positions <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* CULTURE / BENEFITS */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#631529] mb-3 md:mb-4">
              Why Work With Us?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              We believe in growing together. Here's what you can expect when you join the PureReviev family.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: TrendingUp, title: "Career Growth", desc: "Fast-track promotions and upskilling opportunities for high performers." },
              { icon: Heart, title: "Health & Wellness", desc: "Comprehensive health insurance and wellness programs for you and family." },
              { icon: Users, title: "Inclusive Culture", desc: "A diverse, vibrant workplace where every voice is heard and valued." },
              { icon: Zap, title: "Global Exposure", desc: "Opportunities to travel and attend international beauty seminars." }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-6 md:p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition duration-300 group">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#fdeff0] text-[#631529] rounded-2xl flex items-center justify-center mb-5 md:mb-6 group-hover:scale-110 transition-transform">
                  <item.icon size={24} className="md:w-7 md:h-7" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOB BOARD */}
      <section id="openings" className="py-12 md:py-20 bg-[#faf7f7] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900">Current Openings</h2>
              <p className="text-gray-500 mt-2 text-sm md:text-base">Find a role that fits your skills.</p>
            </div>
            
            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <div className="relative w-full sm:w-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="text" 
                  placeholder="Search role..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#631529] w-full sm:w-64"
                />
              </div>
              <select 
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#631529] bg-white cursor-pointer w-full sm:w-auto"
              >
                {departments.map(d => <option key={d} value={d}>{d} Department</option>)}
              </select>
            </div>
          </div>

          {/* Job List */}
          {filteredJobs.length === 0 ? (
             <div className="text-center py-16 md:py-20 bg-white rounded-3xl border border-dashed border-gray-300">
               <Briefcase size={40} className="mx-auto text-gray-300 mb-4" />
               <h3 className="text-xl font-bold text-gray-600">No jobs found</h3>
               <p className="text-gray-400 text-sm">Try changing your filters.</p>
               <button onClick={() => {setSearchTerm(""); setSelectedDept("All");}} className="mt-4 text-[#631529] font-bold underline">Reset Filters</button>
             </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-5 md:gap-6">
              {filteredJobs.map((job) => (
                <div key={job.id} className="bg-white p-6 md:p-8 rounded-[24px] md:rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="bg-[#fdeff0] text-[#631529] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        {job.department}
                      </span>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-3 mb-1">{job.title}</h3>
                    </div>
                    <span className="text-[10px] md:text-xs font-medium text-gray-400 border border-gray-100 px-2 py-1 rounded-md bg-gray-50 whitespace-nowrap">
                      {job.posted}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm mb-6 flex-1 line-clamp-2 md:line-clamp-none">
                    {job.desc}
                  </p>

                  <div className="flex flex-wrap gap-3 md:gap-4 text-xs font-medium text-gray-500 mb-6 border-t border-gray-100 pt-4">
                    <div className="flex items-center gap-1.5">
                      <Briefcase size={14} className="text-[#631529]" /> {job.type}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-[#631529]" /> {job.location}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock size={14} className="text-[#631529]" /> {job.exp} Exp
                    </div>
                  </div>

                  <button 
                    onClick={() => setApplicationModal({ open: true, role: job.title })}
                    className="w-full bg-black text-white py-3 rounded-xl font-bold hover:bg-[#631529] transition duration-300 flex items-center justify-center gap-2 group transform active:scale-95"
                  >
                    Apply Now <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* GENERAL CTA */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <div className="bg-[#f8f9fa] rounded-[32px] md:rounded-[40px] p-8 md:p-16 border border-gray-100 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4">
              Didn't find the right role?
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-8">
              We are always on the lookout for talent. Send your resume to our HR team and we'll keep you on file for future openings.
            </p>
            <a 
              href="mailto:careers@PureReviev.com"
              className="inline-flex items-center gap-2 bg-[#631529] text-white px-8 py-3.5 md:px-8 md:py-4 rounded-full font-bold hover:bg-[#4a101f] transition shadow-lg transform active:scale-95"
            >
              Email Your Resume <ArrowRight size={20} />
            </a>
            <p className="mt-4 text-sm text-gray-400">
              hr@PureReviev.com
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}