import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight, X, CheckCircle2, Loader2, ChevronRight } from "lucide-react";
import aboutImage from "../assets/aboutus1.jpg";
import historyImage from "../assets/history.jpg";
import visionImage from "../assets/vision.jpg";
// 👉 IMPORT PRESIDENT IMAGE
import presidentImage from "../assets/image.png";

import toast from "react-hot-toast";
import axios from "axios";

export default function AboutUs() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });

  useEffect(() => {
    document.title = "About Us | PureRevive";
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const toastId = toast.loading("Submitting...");

    try {
      await axios.post(
        "https://kaya-server.vercel.app/api/enroll",
        { ...formData },
        { headers: { "Content-Type": "application/json" } }
      );
      setStep(2);
      toast.success("Enrollment submitted successfully!", { id: toastId });
    } catch (error) {
      console.error(error);
      toast.error("Submission failed. Please try again.", { id: toastId });
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setStep(1);
    setFormData({ name: "", email: "", phone: "", course: "" });
  };

  return (
    <div className="bg-[#fde7e3] relative">

      {/* ====== About Us Section ====== */}
      <section className="relative overflow-hidden pt-24 sm:pt-32 md:pt-36 lg:pt-40 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* LEFT CONTENT */}
          <div className="relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-[#631529] leading-tight">
              Transforming Beauty and Wellness
              <br />
              Education Since 1999
            </h1>
            <p className="mt-6 text-gray-700 max-w-xl">
              Skilling is the key to a better India where youth will have a safe and
              better future with better career opportunities. With this thought in
              mind, <span className="text-[#631529] font-medium">PureRevive International</span> was
              conceptualised in 1999.
            </p>

            <div className="mt-10 bg-[#ffebe7] p-8 rounded-2xl shadow-lg max-w-xl">
              <h3 className="text-[#631529] font-serif text-xl mb-6">
                Join a state-of-art Beauty College
              </h3>

              <div className="flex gap-4 flex-wrap">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center gap-2 bg-[#631529] text-white px-6 py-3 rounded-full hover:bg-white hover:text-[#631529] transition"
                >
                  Get Enrolled
                  <ArrowUpRight />
                </button>

                <button
                  onClick={() => navigate("/courses")}
                  className="flex items-center gap-2 border border-[#631529] text-[#631529] px-6 py-3 rounded-full hover:bg-white transition"
                >
                  Explore Our Courses
                  <ArrowUpRight />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="hidden md:block relative h-[520px] rounded-xl overflow-hidden shadow-lg">
            <img
              src={aboutImage}
              alt="Beauty Academy"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ===== Modal ===== */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl">
            <div className="bg-[#631529] p-6 text-white flex justify-between items-center">
              <h3 className="text-xl font-bold">Get Enrolled</h3>
              <button onClick={closeModal}><X /></button>
            </div>

            <div className="p-8">
              {step === 1 ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input name="name" value={formData.name} onChange={handleInputChange} placeholder="Full Name" required className="w-full p-3 border rounded-xl" />
                  <input name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="Email" required className="w-full p-3 border rounded-xl" />
                  <input name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone" required className="w-full p-3 border rounded-xl" />
                  <textarea name="course" value={formData.course} onChange={handleInputChange} placeholder="Course Interested In" required className="w-full p-3 border rounded-xl" />
                  <button disabled={isSubmitting} className="w-full bg-[#631529] text-white py-4 rounded-xl">
                    {isSubmitting ? <Loader2 className="animate-spin mx-auto" /> : "Submit Enrollment"}
                  </button>
                </form>
              ) : (
                <div className="text-center py-10">
                  <CheckCircle2 size={48} className="mx-auto text-green-600" />
                  <h3 className="mt-4 text-xl font-bold">Enrollment Sent!</h3>
                  <button onClick={closeModal} className="mt-6 text-[#631529] font-bold">Close</button>
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

      {/* ====== Meet Our President ====== */}
<section className="relative py-20 bg-gradient-to-br from-[#ffe4e1] to-[#fff0f5] overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center relative z-10">

    {/* PRESIDENT IMAGE */}
    <div className="flex justify-center md:justify-start relative">
      {/* Soft floating shadow effect */}
      <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-pink-100 to-pink-200 blur-2xl opacity-60 md:block"></div>

      <img 
        src={presidentImage} 
        alt="President" 
        className="relative z-10 w-full max-w-sm h-[420px] object-cover rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-300"
      />
    </div>

    {/* CONTENT */}
    <div className="text-center md:text-left">
      <span className="inline-block mb-4 px-5 py-1 text-xs tracking-widest font-semibold rounded-full bg-[#ffb6c1]/20 text-[#631529]">
        LEADERSHIP
      </span>

      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
        Meet Our <span className="text-[#631529]">President</span>
      </h2>

      <h3 className="text-xl font-semibold text-gray-800 mb-1">Mrs. Jouee Patwardhan</h3>
      <p className="text-sm text-[#631529] font-medium mb-4">
        International Aesthetic Educator | CIDESCO Trainer | Beauty, Skin & Wellness Expert
      </p>

      <p className="text-sm text-gray-700 mb-4">
        <span className="font-semibold">Experience:</span> 30+ Years<br/>
        <span className="font-semibold">Location:</span> India
      </p>

      <p className="text-gray-600 leading-relaxed mb-4 max-w-xl md:mx-0">
        Highly accomplished international aesthetic educator with over 30 years of experience in beauty therapy, skin aesthetics, wellness, and advanced cosmetology education. Holder of multiple globally recognized diplomas including CIDESCO, CIBTAC, and City & Guilds. Renowned for delivering world-class training aligned with international standards and mentoring professionals for successful global careers.
      </p>

      <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
        <li>Advanced Skin Aesthetics</li>
        <li>Clinical & Medical Cosmetology</li>
        <li>Aromatherapy & Holistic Wellness</li>
        <li>Spa Therapy & Luxury Spa Management</li>
        <li>Media & Professional Makeup</li>
        <li>Facial Electricals & Advanced Devices</li>
        <li>Hair Dressing & Professional Styling</li>
        <li>CIDESCO / International Curriculum Training</li>
      </ul>
    </div>

  </div>
</section>


      {/* ====== Vision & Mission Section ====== */}
      <section className="relative bg-[#631529] py-20 sm:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start gap-12 relative z-10">
          <div className="w-full md:w-1/2 h-80 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
            <img src={visionImage} alt="Vision & Mission" className="w-full h-full object-cover rounded-2xl object-[50%_5%]" />
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
