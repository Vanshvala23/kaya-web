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
    tag: "Engage, Learn & Grow",
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

  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* SLIDES */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="
              min-w-full relative
              h-[42vh]       /* MOBILE */
              sm:h-[60vh]    /* TABLET */
              lg:h-[85vh]    /* DESKTOP */
            "
          >
            {/* IMAGE */}
            <img
              src={slide.image}
              alt={slide.title}
              className="
                absolute inset-0
                w-full h-full
                object-cover
                object-top sm:object-center
              "
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/10" />

            {/* CONTENT */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-6 w-full">
                <div className="max-w-xl text-white">

                  <span className="inline-block bg-[#631529] px-4 py-1 rounded-full text-xs sm:text-sm mb-3">
                    {slide.tag}
                  </span>

                  <h1 className="text-xl sm:text-3xl lg:text-5xl font-bold leading-tight mb-3">
                    {slide.title}
                  </h1>

                  <p className="text-sm sm:text-base lg:text-lg mb-4">
                    {slide.subtitle}
                  </p>

                  {slide.meta.length > 0 && (
                    <ul className="text-sm sm:text-base mb-4">
                      {slide.meta.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}

                  <button className="group inline-flex items-center gap-3 bg-white text-[#631529] px-5 py-2.5 rounded-full font-semibold hover:bg-gray-100 transition">
                    Know More
                    <span className="bg-[#631529] text-white p-2 rounded-full group-hover:translate-x-1 transition">
                      <ChevronRight size={16} />
                    </span>
                  </button>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ARROWS */}
      <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 flex gap-3 z-20">
        <button className="bg-white/90 p-2 rounded-full">
          <ChevronLeft className="text-[#631529]" />
        </button>
        <button className="bg-white/90 p-2 rounded-full">
          <ChevronRight className="text-[#631529]" />
        </button>
      </div>
    </section>
  );
}
