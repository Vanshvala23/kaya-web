import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import bridal1 from "../assets/bridal1.jpg";
import bridal2 from "../assets/bridal2.jpg";
import bridal3 from "../assets/bridal3.jpg";

const slides = [
  {
    image: bridal1,
    position: "85% 30%", // 👈 face slightly upper
    tag: "Orane Goes Online!",
    title: "Complete Bridal Makeup & Hairstyling Course",
    subtitle: "Get Certified in 45 Days",
    meta: ["Course Fee: ₹50,000 Only"],
  },
  {
    image: bridal2,
    position: "50% 25%",
    tag: "Professional Courses",
    title: "Advanced Makeup Artist Program",
    subtitle: "Master Self Grooming, Eye Lash & Eye Tinting Techniques.",
    meta: ["Duration 93 Hours"],
  },
  {
    image: bridal3,
    position: "50% 50%", // normal center
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
      () => setCurrent((p) => (p + 1) % slides.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () =>
    setCurrent((p) => (p - 1 + slides.length) % slides.length);
  const nextSlide = () =>
    setCurrent((p) => (p + 1) % slides.length);

  return (
    <section className="relative w-full overflow-hidden">
      {/* SLIDER */}
      <div
        className="flex transition-transform duration-700 ease-in-out
                   h-[65vh] sm:h-[75vh] lg:h-screen"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="min-w-full relative h-full">
            {/* IMAGE — FACE SAFE */}
            <img
              src={slide.image}
              alt={slide.title}
              style={{ objectPosition: slide.position }}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/60 sm:bg-gradient-to-r sm:from-black/80 sm:via-black/50 sm:to-black/10" />

            {/* CONTENT */}
            <div className="relative z-10 h-full flex items-center justify-center sm:justify-start">
              <div className="max-w-7xl mx-auto w-full px-4 sm:px-6">
                <div className="max-w-xl text-white text-center sm:text-left mx-auto sm:mx-0">
                  <span className="inline-block bg-[#631529] px-3 py-1 rounded-full text-xs sm:text-sm mb-3">
                    {slide.tag}
                  </span>

                  <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
                    {slide.title}
                  </h1>

                  <p className="text-sm sm:text-lg md:text-xl mb-3">
                    {slide.subtitle}
                  </p>

                  {slide.meta.length > 0 && (
                    <ul className="text-sm sm:text-lg mb-4">
                      {slide.meta.map((m, idx) => (
                        <li key={idx}>{m}</li>
                      ))}
                    </ul>
                  )}

                  <div className="flex justify-center sm:justify-start">
                    <button className="group inline-flex items-center gap-3 bg-white text-[#631529] px-5 py-2.5 rounded-full font-semibold text-sm sm:text-base hover:bg-gray-100 transition">
                      Know More
                      <span className="bg-[#631529] text-white p-2 rounded-full group-hover:translate-x-1 transition">
                        <ChevronRight size={16} />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MOBILE ARROWS */}
      <button
        onClick={prevSlide}
        className="sm:hidden absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full z-20"
      >
        <ChevronLeft className="text-[#631529]" />
      </button>
      <button
        onClick={nextSlide}
        className="sm:hidden absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full z-20"
      >
        <ChevronRight className="text-[#631529]" />
      </button>

      {/* DESKTOP ARROWS */}
      <div className="hidden sm:flex absolute bottom-10 right-10 gap-4 z-20">
        <button onClick={prevSlide} className="bg-white/90 p-3 rounded-full">
          <ChevronLeft className="text-[#631529]" />
        </button>
        <button onClick={nextSlide} className="bg-white/90 p-3 rounded-full">
          <ChevronRight className="text-[#631529]" />
        </button>
      </div>
    </section>
  );
}
