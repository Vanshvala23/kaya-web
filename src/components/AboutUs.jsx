import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight, X, Upload, FileText, CheckCircle2, Loader2 } from "lucide-react";
import aboutImage from "../assets/aboutus1.jpg";
import historyImage from "../assets/history.jpg";
import visionImage from "../assets/vision.jpg";
import toast from "react-hot-toast";
import axios from "axios";

export default function AboutUs() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1); // 1: Form, 2: Success
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: ""
  });

  useEffect(() => {
    document.title = "About Us | PureRevive";
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("course", formData.course);

      const toastId = toast.loading("Submitting...");
      await axios.post("https://kaya-server.vercel.app/api/enroll", data, {
        headers: { "Content-Type": "multipart/form-data" }
      });

      setStep(2);
      toast.success("Enrollment submitted successfully!", { id: toastId });
    } catch (err) {
      console.error(err);
      toast.error("Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setStep(1);
    setFormData({ name: "", email: "", phone: "", course: ""});
    setFileName("");
  };

  return (
    <div className="bg-[#fde7e3] relative">

      {/* ====== About Us Section ====== */}
      <section className="relative overflow-hidden pt-24 sm:pt-32 md:pt-36 lg:pt-40 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* LEFT CONTENT */}
          <div className="relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-[#631529] leading-snug sm:leading-tight md:leading-tight">
              Transforming Beauty and Wellness
              <br />
              Education Since 1999
            </h1>

            <p className="mt-4 sm:mt-6 text-gray-700 leading-relaxed text-sm sm:text-base max-w-xl">
              Skilling is the key to a better India where youth will have a safe and
              better future with better career opportunities. With this thought in
              mind, <span className="text-[#631529] font-medium">PureRevive International</span> was
              conceptualised in 1999. We offer skill-based courses to empower youth!
            </p>

            <p className="mt-3 sm:mt-4 text-gray-700 leading-relaxed text-sm sm:text-base max-w-xl">
              Since 1999, we’ve empowered more than{" "}
              <span className="text-[#631529] font-semibold">1 Lakh+</span> aspiring
              individuals with exceptional skills. With over{" "}
              <span className="text-[#631529] font-semibold">110 academies</span> across
              22 Indian states and Canada, we are the most recognised name in
              skilling.
            </p>

            {/* CTA CARD */}
            <div className="mt-8 sm:mt-10 bg-[#ffebe7] p-6 sm:p-8 rounded-2xl shadow-lg max-w-xl transition-all hover:shadow-2xl">
              <h3 className="text-[#631529] font-serif text-lg sm:text-xl mb-4 sm:mb-6">
                Join a state-of-art Beauty College
              </h3>

              <div className="flex flex-wrap gap-3 sm:gap-4">
                <button 
                  className="flex items-center gap-2 bg-[#631529] text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-medium shadow-md hover:bg-white hover:text-[#631529] hover:shadow-xl transition-all duration-300"
                  onClick={() => setIsModalOpen(true)}
                >
                  Get Enrolled
                  <ArrowUpRight className="text-lg" />
                </button>

                <button 
                  className="flex items-center gap-2 border border-[#631529] text-[#631529] px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-medium bg-[#ffebe7] hover:bg-white hover:text-[#631529] shadow-md hover:shadow-xl transition-all duration-300"
                  onClick={() => navigate('/courses')}
                >
                  Explore Our Courses
                  <ArrowUpRight className="text-lg" />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-64 sm:h-80 md:h-[480px] lg:h-[520px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 hidden md:block">
            <img
              src={aboutImage}
              alt="Beauty Academy"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 w-10 sm:w-12 h-10 sm:h-12 bg-[#fde7e3] rounded-full mix-blend-multiply"></div>
          </div>

        </div>
      </section>

      {/* ===== Modal Form ===== */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-t-3xl md:rounded-3xl w-full max-w-lg max-h-[85vh] overflow-y-auto shadow-2xl scale-100 transition-all flex flex-col">

            {/* Header */}
            <div className="bg-[#631529] p-5 md:p-6 text-white flex justify-between items-center sticky top-0 z-10">
              <h3 className="text-lg md:text-xl font-serif font-bold">Get Enrolled</h3>
              <button onClick={closeModal} className="bg-white/20 p-2 rounded-full hover:bg-white/30 flex-shrink-0">
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-5 md:p-8">
              {step === 1 ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase">Full Name</label>
                    <input
                      required
                      type="text"
                      name="fullName"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#631529] focus:ring-1 focus:ring-[#631529]"
                    />
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

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase">Course Interested In</label>
                    <textarea
                      required
                      name="course"
                      value={formData.course}
                      onChange={handleInputChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#631529] focus:ring-1 focus:ring-[#631529]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#631529] text-white font-bold py-4 rounded-xl hover:bg-[#4a101f] transition shadow-lg flex items-center justify-center gap-2 mt-4 disabled:opacity-70 active:scale-95 transform"
                  >
                    {isSubmitting ? <><Loader2 className="animate-spin" /> Submitting...</> : "Submit Enrollment"}
                  </button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Enrollment Sent!</h3>
                  <p className="text-gray-600 mb-8 px-4">
                    Thanks for enrolling at PureRevive. Our team will review your submission and contact you shortly.
                  </p>
                  <button onClick={closeModal} className="text-[#631529] font-bold hover:underline py-2">
                    Close Window
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ====== History & Background Section ====== */}
      <section className="relative bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <span className="text-xs font-semibold text-white uppercase bg-[#611820] px-2 py-1 rounded-md inline-block mb-3">
              History
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#1f1f1f] mb-6">
              History & Background
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Envisioning the global demand for trained beauty professionals, PureRevive International was incorporated in 1999. The visionary founders of PureRevive International travelled to various countries to study global trends such as demographic profiling & market demand in the beauty & wellness domain.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              The decision to focus on India as the first location was strategic, given the country’s significant shortage of skilled labour and lack of formal skill education. With a booming economy and large youth population, India proved ideal for PureRevive International’s inauguration.
            </p>
          </div>

          <div className="order-1 md:order-2 relative w-full h-64 sm:h-80 md:h-[360px] lg:h-[400px] rounded-xl overflow-hidden shadow-lg hidden md:block">
            <img
              src={historyImage}
              alt="History"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* ====== Vision & Mission Section ====== */}
      <section className="relative bg-[#631529] py-20 sm:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start gap-12 relative z-10">
          <div className="w-full md:w-1/2 h-80 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
            <img
              src={visionImage}
              alt="Vision & Mission"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          <div className="w-full md:w-1/2 text-white flex flex-col justify-center gap-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold leading-tight">
              Vision & <span className="block">Mission</span>
            </h2>
            <div className="w-16 h-1 bg-white"></div>

            <div className="space-y-3">
              <span className="inline-block text-xs font-bold tracking-widest text-white uppercase bg-[#8B2E3E] px-3 py-1.5 rounded">
                Our Mission
              </span>
              <p className="text-sm sm:text-base leading-relaxed text-gray-100">
                Empowering Aspiring Youth. At PureRevive International, our mission is clear: We are confident that quality, skill-based learning in the beauty and wellness industry will ignite the future.
              </p>
            </div>

            <div className="space-y-3">
              <span className="inline-block text-xs font-bold tracking-widest text-white uppercase bg-[#8B2E3E] px-3 py-1.5 rounded">
                Our Vision
              </span>
              <p className="text-sm sm:text-base leading-relaxed text-gray-100">
                A Global Beacon of Excellence. Our vision is deeply woven into our DNA. We envision PureRevive as a global beacon of excellence—a place where creativity, innovation, and skill converge.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
