import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import aboutImage from "../assets/aboutus1.jpg"; // Replace with your image

export default function AboutUs() {
  useEffect(() => {
    document.title = "About Us | Orane";
  }, []);

  return (
    <section className="relative bg-[#fde7e3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
        
        {/* LEFT CONTENT */}
        <div className="relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-[#631529] leading-snug sm:leading-tight md:leading-tight">
            Transforming Beauty and Wellness
            <br />
            Education Since 1999
          </h1>

          <p className="mt-4 sm:mt-6 text-gray-700 leading-relaxed max-w-xl text-sm sm:text-base">
            Skilling is the key to a better India where youth will have a safe and
            better future with better career opportunities. With this thought in
            mind, <span className="text-[#631529] font-medium">Orane International</span> was
            conceptualised in 1999. We offer skill-based courses to empower youth!
          </p>

          <p className="mt-3 sm:mt-4 text-gray-700 leading-relaxed max-w-xl text-sm sm:text-base">
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
                <span className="text-lg">
                    <ArrowUpRight />
                </span>
              </button>

              {/* Secondary Button */}
              <button className="flex items-center gap-2 border border-[#631529] text-[#631529] px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-medium bg-[#ffebe7] hover:bg-white hover:text-[#631529] shadow-md hover:shadow-xl transition-all duration-300">
                Explore Our Courses
                <span className="text-lg">
                    <ArrowUpRight />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-64 sm:h-80 md:h-[480px] lg:h-[520px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
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
  );
}
