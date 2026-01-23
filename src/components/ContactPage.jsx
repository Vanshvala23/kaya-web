import { useState, useEffect } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Loader2, 
  MessageSquare, 
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Users,
  Briefcase,
  GraduationCap,
  Building2,
  MessageCircle,
  AlertCircle
} from "lucide-react";

// Placeholder asset
import contactBg from "../assets/center.jpg"; 

// DATA: DEPARTMENTS
const departments = [
  {
    icon: GraduationCap,
    name: "Admissions Team",
    desc: "For course details, fees, and enrollment.",
    phone: "+91 8872 500 500",
    email: "admissions@PureReviev.com"
  },
  {
    icon: Users,
    name: "Student Support",
    desc: "For existing students, exams, and certification.",
    phone: "+91 8872 500 501",
    email: "support@PureReviev.com"
  },
  {
    icon: Building2,
    name: "Franchise Inquiry",
    desc: "For business partnership opportunities.",
    phone: "+91 9876 543 210",
    email: "franchise@PureReviev.com"
  },
  {
    icon: Briefcase,
    name: "HR & Careers",
    desc: "For job applications and recruitment.",
    phone: "0172 500 500",
    email: "hr@PureReviev.com"
  }
];

// COMPONENTS 

const ContactCard = ({ icon: Icon, title, info, subInfo, action, actionLabel }) => (
  <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group text-center flex flex-col items-center h-full">
    <div className="w-14 h-14 md:w-16 md:h-16 bg-[#fdeff0] text-[#631529] rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
      <Icon size={28} className="md:w-8 md:h-8" />
    </div>
    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-[#631529] font-bold text-lg md:text-xl mb-1">{info}</p>
    <p className="text-gray-500 text-xs md:text-sm mb-6">{subInfo}</p>
    <a 
      href={action} 
      className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-gray-400 group-hover:text-[#631529] transition-colors py-2"
    >
      {actionLabel} <ArrowRight size={16} />
    </a>
  </div>
);

const SocialButton = ({ icon: Icon, href, color }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noreferrer"
    className={`w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-white hover:border-transparent transition-all duration-300 ${color}`}
  >
    <Icon size={18} className="md:w-5 md:h-5" />
  </a>
);

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", subject: "", message: "", bestTime: ""
  });
  const [formStatus, setFormStatus] = useState("idle"); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("loading");
    // Simulate API
    setTimeout(() => {
      setFormStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "", bestTime: "" });
    }, 2000);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* FLOATING WHATSAPP */}
      <a 
        href="https://wa.me/918872500500" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center animate-bounce-slow"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>

      {/* HERO SECTION */}
      <section className="relative pt-28 pb-16 lg:pt-40 lg:pb-32 bg-[#2a0a12] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src={contactBg} 
            alt="Contact Background" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block bg-[#631529] border border-white/20 text-white text-[10px] md:text-xs font-bold tracking-wider px-3 py-1 md:px-4 md:py-1.5 rounded-full mb-6 animate-pulse">
            GET IN TOUCH
          </span>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
            We'd Love to <br />
            <span className="text-pink-400">Hear From You</span>
          </h1>
          
          <p className="text-base md:text-xl text-white/80 max-w-2xl mx-auto mb-0 leading-relaxed px-4">
            Have a question about our courses, franchises, or just want to say hello? Our team is ready to answer all your questions.
          </p>
        </div>
      </section>

      {/* QUICK CONTACT CARDS */}
      <section className="relative z-20 -mt-10 px-4 md:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <ContactCard 
            icon={Phone} 
            title="Call Us" 
            info="+91 8872 500 500" 
            subInfo="Mon-Sat from 9am to 7pm"
            action="tel:+918872500500"
            actionLabel="Call Now"
          />
          <ContactCard 
            icon={Mail} 
            title="Email Us" 
            info="info@PureReviev.com" 
            subInfo="We reply within 24 hours"
            action="mailto:info@PureReviev.com"
            actionLabel="Send Email"
          />
          <ContactCard 
            icon={MapPin} 
            title="Head Office" 
            info="Mohali, Punjab" 
            subInfo="SCO 88-92, Sector 82, JLPL Area"
            action="https://maps.google.com"
            actionLabel="Get Directions"
          />
        </div>
      </section>

      {/* DEPARTMENT DIRECTORY */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900">Specific Departments</h2>
            <p className="text-gray-500 mt-2">Connect directly with the right team to resolve your queries faster.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-[#631529]/30 transition group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#631529] shadow-sm">
                    <dept.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{dept.name}</h3>
                    <p className="text-[10px] text-gray-500">{dept.desc}</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <a href={`tel:${dept.phone}`} className="flex items-center gap-2 text-gray-600 hover:text-[#631529]">
                    <Phone size={14} /> {dept.phone}
                  </a>
                  <a href={`mailto:${dept.email}`} className="flex items-center gap-2 text-gray-600 hover:text-[#631529]">
                    <Mail size={14} /> {dept.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-16 md:py-24 bg-[#faf7f7]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Left: Contact Form */}
            <div className="lg:w-1/2">
              <div className="mb-8">
                <span className="text-[#631529] font-bold text-xs tracking-wider uppercase">ENQUIRY FORM</span>
                <h2 className="text-3xl font-serif font-bold text-gray-900 mt-2 mb-4">Send us a Message</h2>
                <p className="text-gray-600 leading-relaxed">
                  Fill out the form below and our admissions team will get back to you shortly.
                </p>
              </div>

              {formStatus === "success" ? (
                <div className="bg-green-50 border border-green-100 rounded-3xl p-8 text-center animate-in fade-in zoom-in">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for contacting us. We will be in touch with you shortly.
                  </p>
                  <button 
                    onClick={() => setFormStatus("idle")}
                    className="text-[#631529] font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 bg-white p-6 md:p-8 rounded-[32px] shadow-sm">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-500 uppercase">Your Name</label>
                      <input 
                        required 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        type="text" 
                        placeholder="John Doe" 
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#631529] focus:ring-1 focus:ring-[#631529] transition-all" 
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-500 uppercase">Phone Number</label>
                      <input 
                        required 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        type="tel" 
                        placeholder="+91 98765 43210" 
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#631529] focus:ring-1 focus:ring-[#631529] transition-all" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-500 uppercase">Email Address</label>
                      <input 
                        required 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email" 
                        placeholder="john@example.com" 
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#631529] focus:ring-1 focus:ring-[#631529] transition-all" 
                      />
                    </div>
                     <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-500 uppercase">Preferred Call Time</label>
                      <select 
                        name="bestTime"
                        value={formData.bestTime}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#631529] focus:ring-1 focus:ring-[#631529] transition-all cursor-pointer"
                      >
                        <option value="">Anytime</option>
                        <option value="Morning">Morning (9am - 12pm)</option>
                        <option value="Afternoon">Afternoon (12pm - 4pm)</option>
                        <option value="Evening">Evening (4pm - 7pm)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-500 uppercase">Subject</label>
                    <select 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#631529] focus:ring-1 focus:ring-[#631529] transition-all cursor-pointer"
                    >
                      <option value="">Select a topic</option>
                      <option value="Admission">Course Admission</option>
                      <option value="Franchise">Franchise Inquiry</option>
                      <option value="Career">Job Application</option>
                      <option value="Other">General Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-500 uppercase">Message</label>
                    <textarea 
                      required 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4" 
                      placeholder="How can we help you?" 
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#631529] focus:ring-1 focus:ring-[#631529] transition-all resize-none"
                    ></textarea>
                  </div>

                  <button 
                    disabled={formStatus === "loading"}
                    className="w-full bg-[#631529] text-white font-bold py-4 rounded-xl hover:bg-[#4a101f] transition shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 transform active:scale-95"
                  >
                    {formStatus === "loading" ? <><Loader2 className="animate-spin" /> Sending...</> : <><Send size={18} /> Send Message</>}
                  </button>
                </form>
              )}
            </div>

            {/* Right: Map & Socials */}
            <div className="lg:w-1/2 flex flex-col h-full">
              
              {/* Map Container */}
              <div className="bg-white rounded-3xl overflow-hidden h-80 lg:h-96 shadow-sm border border-gray-200 mb-8 relative group">
                {/* Embed Google Map Iframe */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.347572765366!2d76.7038!3d30.6758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fe8d61741d401%3A0x6097892336332145!2sPureReviev%20International%20Head%20Office!5e0!3m2!1sen!2sin!4v1625637289123!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen="" 
                  loading="lazy"
                  title="PureReviev Head Office Map"
                  className="grayscale group-hover:grayscale-0 transition-all duration-700"
                ></iframe>
                
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg flex items-start gap-3">
                  <MapPin className="text-[#631529] shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">PureReviev International Head Office</h4>
                    <p className="text-xs text-gray-600 mt-1 leading-snug">SCO 88-92, Sector 82, JLPL Industrial Area, Mohali, Punjab 140308</p>
                  </div>
                </div>
              </div>

              {/* Social Connect */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 text-center mt-auto shadow-sm">
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Connect With Us</h3>
                <p className="text-gray-500 mb-6 text-sm">Follow our social media handles for daily updates, tips, and success stories.</p>
                <div className="flex justify-center gap-4">
                  <SocialButton icon={Facebook} href="#" color="hover:bg-[#1877F2] hover:border-[#1877F2]" />
                  <SocialButton icon={Instagram} href="#" color="hover:bg-[#E4405F] hover:border-[#E4405F]" />
                  <SocialButton icon={Linkedin} href="#" color="hover:bg-[#0A66C2] hover:border-[#0A66C2]" />
                  <SocialButton icon={Youtube} href="#" color="hover:bg-[#FF0000] hover:border-[#FF0000]" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* STUDENT GRIEVANCE */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-red-50 rounded-2xl p-6 md:p-10 border border-red-100 flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center shrink-0">
              <AlertCircle size={32} />
            </div>
            <div className="text-center md:text-left flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Student Grievance Redressal</h3>
              <p className="text-gray-600 text-sm mb-4">
                Are you an existing student facing issues? We take your concerns seriously. Please reach out to our dedicated grievance cell.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm font-bold">
                 <a href="mailto:grievance@PureReviev.com" className="text-red-600 hover:underline">grievance@PureReviev.com</a>
                 <span className="text-gray-300">|</span>
                 <span className="text-gray-700">+91 1234 567 890</span>
              </div>
            </div>
            <button className="bg-red-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-red-700 transition shadow-lg shrink-0">
              Report Issue
            </button>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 md:py-24 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <MessageSquare size={40} className="mx-auto text-[#631529] mb-4" />
          <h2 className="text-3xl font-serif font-bold mb-8">Common Questions</h2>
          
          <div className="space-y-4 text-left">
            <details className="group bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden">
              <summary className="flex items-center justify-between p-5 font-bold cursor-pointer list-none text-gray-800 hover:text-[#631529] transition select-none">
                What are the office timings?
                <span className="bg-white rounded-full p-1 border border-gray-200 group-open:rotate-180 transition-transform"><ArrowRight size={14} className="rotate-90" /></span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed animate-in slide-in-from-top-1">
                Our head office and counseling centers are open from Monday to Saturday, 9:00 AM to 7:00 PM. We are closed on Sundays and National Holidays.
              </div>
            </details>

            <details className="group bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden">
              <summary className="flex items-center justify-between p-5 font-bold cursor-pointer list-none text-gray-800 hover:text-[#631529] transition select-none">
                Can I visit without an appointment?
                <span className="bg-white rounded-full p-1 border border-gray-200 group-open:rotate-180 transition-transform"><ArrowRight size={14} className="rotate-90" /></span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed animate-in slide-in-from-top-1">
                Yes, walk-ins are welcome at all our centers. However, we recommend booking a slot online or calling ahead to ensure a counselor is available to guide you properly.
              </div>
            </details>

            <details className="group bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden">
              <summary className="flex items-center justify-between p-5 font-bold cursor-pointer list-none text-gray-800 hover:text-[#631529] transition select-none">
                Do you offer online counseling?
                <span className="bg-white rounded-full p-1 border border-gray-200 group-open:rotate-180 transition-transform"><ArrowRight size={14} className="rotate-90" /></span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed animate-in slide-in-from-top-1">
                Absolutely! If you cannot visit a center, we can arrange a video call with our expert career counselors. Just fill out the form above and select "Admission" as the subject.
              </div>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}