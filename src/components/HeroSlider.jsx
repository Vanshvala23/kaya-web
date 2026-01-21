import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import bridal1 from "../assets/bridal1.jpg";
import bridal2 from "../assets/bridal2.jpg";
import bridal3 from "../assets/bridal3.jpg";

const slides = [
  {
    image: bridal1,
    position: "50% 25%", // face near top-center
    tag: "Orane Goes Online!",
    title: "Complete Bridal Makeup & Hairstyling Course",
    subtitle: "Get Certified in 45 Days",
    meta: ["Course Fee: ₹50,000 Only"],
  },
  {
    image: bridal2,
    position: "50% 30%", // face slightly lower
    tag: "Professional Courses",
    title: "Advanced Makeup Artist Program",
    subtitle: "Master Self Grooming, Eye Lash & Eye Tinting Techniques.",
    meta: ["Duration 93 Hours"],
  },
  {
    image: bridal3,
    position: "50% 50%", // center
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
    const timer = setInterval(
      () => setCurrent((p) => (p + 1) % slides.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);

  const prev = () =>
    setCurrent((p) => (p - 1 + slides.length) % slides.length);
  const next = () => setCurrent((p) => (p + 1) % slides.length);

  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* SLIDER */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="
              min-w-full relative
              h-[42vh]
              sm:h-[60vh]
              lg:h-[85vh]
            "
          >
            {/* IMAGE */}
            <img
              src={slide.image}
              alt={slide.title}
              style={{ objectPosition: slide.position }}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/10" />

            {/* CONTENT */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-5 sm:px-6 w-full">
                <div className="max-w-xl text-white">

                  {/* TAG */}
                  <span className="inline-block bg-[#631529] px-3 py-1 rounded-full text-xs sm:text-sm mb-3">
                    {slide.tag}
                  </span>

                  {/* TITLE */}
                  <h1 className="text-xl sm:text-3xl lg:text-5xl font-bold leading-tight mb-3">
                    {slide.title}
                  </h1>

                  {/* SUBTITLE */}
                  <p className="text-sm sm:text-base lg:text-lg mb-4 text-white/90">
                    {slide.subtitle}
                  </p>

                  {/* META */}
                  {slide.meta.length > 0 && (
                    <ul className="text-sm sm:text-base mb-5">
                      {slide.meta.map((m, idx) => (
                        <li key={idx}>{m}</li>
                      ))}
                    </ul>
                  )}

                  {/* BUTTON (MEDIUM ON MOBILE) */}
                  <button
                    className="
                      group inline-flex items-center gap-3
                      bg-white text-[#631529]
                      px-5 py-2.5
                      sm:px-6 sm:py-3
                      rounded-full
                      text-sm sm:text-base font-semibold
                      hover:bg-gray-100
                      transition
                    "
                  >
                    Know More
                    <span
                      className="
                        bg-[#631529] text-white
                        w-8 h-8 sm:w-9 sm:h-9
                        flex items-center justify-center
                        rounded-full
                        group-hover:translate-x-1
                        transition
                      "
                    >
                      <ChevronRight size={16} />
                    </span>
                  </button>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CONTROLS */}
      <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 flex gap-3 z-20">
        <button
          onClick={prev}
          className="bg-white/90 p-2 rounded-full"
        >
          <ChevronLeft className="text-[#631529]" />
        </button>
        <button
          onClick={next}
          className="bg-white/90 p-2 rounded-full"
        >
          <ChevronRight className="text-[#631529]" />
        </button>
      </div>
    </section>
  );
}
