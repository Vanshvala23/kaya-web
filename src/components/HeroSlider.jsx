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
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* Slider */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full relative">

            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="
                w-full
                h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]
                object-cover object-center
              "
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10"></div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-2xl px-4 sm:px-6 md:px-10 text-white">
                {/* Tag */}
                <span className="inline-block bg-[#631529] px-3 py-1 rounded-full text-xs sm:text-sm mb-2">
                  {slide.tag}
                </span>

                {/* Title */}
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug mb-2 sm:mb-3">
                  {slide.title}
                </h1>

                {/* Subtitle */}
                <p className="text-xs sm:text-sm md:text-base mb-3">
                  {slide.subtitle}
                </p>

                {/* Meta */}
                {slide.meta.length > 0 && (
                  <ul className="text-xs sm:text-sm mb-3">
                    {slide.meta.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}

                {/* Button */}
                <button className="group flex items-center gap-2 sm:gap-3 bg-white text-[#631529] px-4 py-2 sm:px-5 sm:py-3 rounded-full font-semibold hover:bg-gray-100 transition text-xs sm:text-sm">
                  Know More
                  <span className="bg-[#631529] text-white p-1 sm:p-2 rounded-full group-hover:translate-x-1 transition-transform">
                    <ChevronRight size={14} />
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 flex gap-2 sm:gap-3 z-20">
        <button
          onClick={prevSlide}
          className="bg-white/90 hover:bg-white p-1.5 sm:p-2 rounded-full transition"
        >
          <ChevronLeft className="text-[#631529]" size={16} />
        </button>
        <button
          onClick={nextSlide}
          className="bg-white/90 hover:bg-white p-1.5 sm:p-2 rounded-full transition"
        >
          <ChevronRight className="text-[#631529]" size={16} />
        </button>
      </div>
    </section>
  );
}
