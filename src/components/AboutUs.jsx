import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import aboutImage from "../assets/aboutus1.jpg"; // Replace with your image
import historyImage from "../assets/history.jpg"; // Replace with your history image
import visionImage from "../assets/vision.jpg";
export default function AboutUs() {
  const navigate=useNavigate();
  useEffect(() => {
    document.title = "About Us | Orane";
  }, []);

  return (
    <div className="bg-[#fde7e3]">

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
              mind, <span className="text-[#631529] font-medium">Orane International</span> was
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
                {/* Primary Button */}
                <button className="flex items-center gap-2 bg-[#631529] text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-medium shadow-md hover:bg-white hover:text-[#631529] hover:shadow-xl transition-all duration-300">
                  Get Enrolled
                  <ArrowUpRight className="text-lg" />
                </button>

                {/* Secondary Button */}
                <button className="flex items-center gap-2 border border-[#631529] text-[#631529] px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-medium bg-[#ffebe7] hover:bg-white hover:text-[#631529] shadow-md hover:shadow-xl transition-all duration-300"  onClick={() => navigate('/courses')}>
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

            {/* Decorative overlay */}
            <div className="absolute top-4 left-4 w-10 sm:w-12 h-10 sm:h-12 bg-[#fde7e3] rounded-full mix-blend-multiply"></div>
          </div>

        </div>
      </section>

      {/* ====== History & Background Section ====== */}
      <section className="relative bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT TEXT */}
          <div className="order-2 md:order-1">
            <span className="text-xs font-semibold text-white uppercase bg-[#611820] px-2 py-1 rounded-md inline-block mb-3">
              History
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#1f1f1f] mb-6">
              History & Background
            </h2>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Envisioning the global demand for trained beauty professionals, Orane International was incorporated in 1999. The visionary founders of Orane International travelled to various countries to study global trends such as demographic profiling & market demand in the beauty & wellness domain.
            </p>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              The decision to focus on India as the first location was strategic, given the country’s significant shortage of skilled labour and lack of formal skill education. With a booming economy and large youth population, India proved ideal for Orane International’s inauguration.
            </p>
          </div>

          {/* RIGHT IMAGE */}
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
        {/* ====== Vision & Mission Section ====== */}
<section className="relative bg-[#631529] py-20 sm:py-28 overflow-hidden">
  {/* Decorative floral background element */}
  <div className="absolute bottom-0 right-0 w-48 h-48 opacity-10 pointer-events-none">
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <path d="M100 100 Q150 50 180 100 Q150 150 100 100" fill="currentColor" className="text-white" />
      <path d="M100 100 Q80 30 50 80 Q100 120 100 100" fill="currentColor" className="text-white" />
      <path d="M100 100 Q20 100 50 150 Q80 120 100 100" fill="currentColor" className="text-white" />
      <path d="M100 100 Q120 170 170 150 Q130 130 100 100" fill="currentColor" className="text-white" />
    </svg>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start gap-12 relative z-10">
    {/* IMAGE */}
    <div className="w-full md:w-1/2 h-80 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
      <img
        src={visionImage}
        alt="Vision & Mission"
        className="w-full h-full object-cover rounded-2xl"
      />
    </div>

    {/* TEXT */}
    <div className="w-full md:w-1/2 text-white flex flex-col justify-center gap-6">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold leading-tight">
        Vision & <span className="block">Mission</span>
      </h2>

      {/* Divider line */}
      <div className="w-16 h-1 bg-white"></div>

      {/* Mission Box */}
      <div className="space-y-3">
        <span className="inline-block text-xs font-bold tracking-widest text-white uppercase bg-[#8B2E3E] px-3 py-1.5 rounded">
          Our Mission
        </span>
        <p className="text-sm sm:text-base leading-relaxed text-gray-100">
          Empowering Aspiring Youth. At Orane International, our mission is clear: We are confident that quality, skill-based learning in the beauty and wellness industry will ignite the future. Whether you dream of becoming a makeup artist, a cosmetologist, or a nutrition expert, we're here to guide you.
        </p>
      </div>

      {/* Vision Box */}
      <div className="space-y-3">
        <span className="inline-block text-xs font-bold tracking-widest text-white uppercase bg-[#8B2E3E] px-3 py-1.5 rounded">
          Our Vision
        </span>
        <p className="text-sm sm:text-base leading-relaxed text-gray-100">
          A Global Beacon of Excellence. Our vision is deeply woven into our DNA. We envision Orane as a global beacon of excellence—a place where creativity, innovation, and skill converge. We see a world where our trained students lead the industry, shaping trends.
        </p>
      </div>
    </div>
  </div>
</section>

    {/* {===Our Programs} */}
    </div>
  );
}
