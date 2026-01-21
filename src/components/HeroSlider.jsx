import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import bridal1 from "../assets/bridal1.jpg";
import bridal2 from "../assets/bridal2.jpg";
import bridal3 from "../assets/bridal3.jpg";

const slides = [
  {
    image: bridal1,
    tag: "Orane Goes Online!",
    title: "Complete Bridal Makeup & Hairstyling Course",
    subtitle: "Get Certified in 45 Days",
    meta: ["Course Fee: ₹50,000 Only"],
  },
  {
    image: bridal2,
    tag: "Professional Courses",
    title: "Advanced Makeup Artist Program",
    subtitle: "Master Self Grooming, Eye Lash & Eye Tinting Techniques.",
    meta: ["Duration 93 Hours"],
  },
  {
    image: bridal3,
    tag: "Engage, Learn, & Grow",
    title: "Learn From Anywhere & Anytime",
    subtitle:
      "Explore a World of Learning with Our Online Courses Hub. Find Your Next Learning Adventure Today.",
    meta: [],
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <section className="relative w-full overflow-hidden">
      {/* SLIDER */}
      <div
        className="flex transition-transform duration-700 ease-in-out
                   h-[60vh] sm:h-[75vh] lg:h-screen"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full relative h-full">
            {/* IMAGE */}
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10" />

            {/* CONTENT */}
            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-7xl mx-auto w-full px-4 sm:px-6">
                <div className="max-w-2xl text-white">

                  {/* TAG */}
                  <span className="inline-block bg-[#631529] px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm mb-3 sm:mb-4">
                    {slide.tag}
                  </span>

                  {/* TITLE */}
                  <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl
                                 font-bold leading-tight mb-3 sm:mb-6">
                    {slide.title}
                  </h1>

                  {/* SUBTITLE */}
                  <p className="text-sm sm:text-lg md:text-xl mb-3 sm:mb-4">
                    {slide.subtitle}
                  </p>

                  {/* META */}
                  {slide.meta.length > 0 && (
                    <ul className="text-sm sm:text-lg mb-4 sm:mb-6">
                      {slide.meta.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {/* BUTTON */}
                  <button
                    className="group inline-flex items-center gap-3
                               bg-white text-[#631529]
                               px-4 sm:px-6 py-2 sm:py-3
                               rounded-full font-semibold
                               text-sm sm:text-base
                               hover:bg-gray-100 transition"
                  >
                    Know More
                    <span className="bg-[#631529] text-white p-2 rounded-full
                                     group-hover:translate-x-1 transition-transform">
                      <ChevronRight size={16} />
                    </span>
                  </button>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ARROWS (Desktop unchanged, mobile tighter) */}
      <div className="absolute bottom-4 sm:bottom-10 right-4 sm:right-10 flex gap-3 sm:gap-4 z-20">
        <button
          onClick={prevSlide}
          className="bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full transition"
        >
          <ChevronLeft className="text-[#631529]" />
        </button>

        <button
          onClick={nextSlide}
          className="bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full transition"
        >
          <ChevronRight className="text-[#631529]" />
        </button>
      </div>
    </section>
  );
}
