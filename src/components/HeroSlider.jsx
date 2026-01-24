import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

import bridal1 from "../assets/bridal1.jpg";
import bridal2 from "../assets/bridal2.jpg";
import bridal3 from "../assets/bridal3.jpg";

const slides = [
  {
    image: bridal1,
    position: "85% 30%",
    tag: "PureRevive Goes Online!",
    title: "Complete Bridal Makeup & Hairstyling Course",
    subtitle: "Get Certified in 45 Days",
    meta: ["Course Fee: ₹50,000 Only"],
    button: "Know More",
    link: "/courses/bridal-makeup",
  },
  {
    image: bridal2,
    position: "80% 10%",
    tag: "Professional Courses",
    title: "Advanced Makeup Artist Program",
    subtitle: "Master Self Grooming, Eye Lash & Eye Tinting Techniques.",
    meta: ["Duration 93 Hours"],
    button: "Enroll Now",
    link: "/courses/makeup-artist",
  },
  {
    image: bridal3,
    position: "90% 75%",
    tag: "Engage, Learn, & Grow",
    title: "Learn From Anywhere & Anytime",
    subtitle:
      "Explore a World of Learning with Our Online Courses Hub. Find Your Next Learning Adventure Today.",
    meta: [],
    button: "Explore Courses",
    link: "/courses",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const navigate = useNavigate();

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

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      className="relative w-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="flex transition-transform duration-700 ease-in-out
                   h-[70vh] sm:h-[80vh] lg:h-screen"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="min-w-full relative h-full">
            <img
  src={slide.image}
  alt={slide.title}
  style={{ objectPosition: slide.position }}
  className="
    absolute inset-0 w-full h-full object-cover
    brightness-130 contrast-120 saturate-180
    sm:brightness-175 sm:contrast-200 sm:saturate-200
  "
/>
            <div className="absolute inset-0 bg-black/50 sm:bg-gradient-to-r sm:from-black/70 sm:via-black/40 sm:to-black/10" />

            <div className="relative z-10 h-full flex items-end pb-10 sm:items-center sm:pb-0">
              <div className="max-w-7xl mx-auto w-full px-4 sm:px-6">
                <div className="max-w-xl mx-auto sm:mx-0 text-white text-center sm:text-left">
                  <span className="inline-block px-6 py-1 rounded-full mb-3 text-xs sm:text-sm bg-[#f2f2f2] text-[#631529] sm:bg-[#631529] sm:text-[#f2f2f2]">
                    {slide.tag}
                  </span>

                  <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
                    {slide.title}
                  </h1>

                  <p className="text-sm sm:text-lg md:text-xl mb-4">
                    {slide.subtitle}
                  </p>

                  {slide.meta.length > 0 && (
                    <ul className="text-sm sm:text-lg mb-5">
                      {slide.meta.map((m, idx) => (
                        <li key={idx}>{m}</li>
                      ))}
                    </ul>
                  )}

                  <div className="flex justify-center sm:justify-start">
                    <button
                      onClick={() => navigate(slide.link)}
                      className="group inline-flex items-center gap-3
                        bg-white text-[#631529]
                        px-6 py-3 rounded-full font-semibold
                        transition-all duration-300
                        hover:bg-[#631529] hover:text-white
                        hover:scale-105
                        hover:shadow-[0_0_25px_rgba(99,21,41,0.7)]"
                    >
                      {slide.button}
                      <span
                        className="bg-[#631529] text-white p-2 rounded-full
                          transition-all duration-300
                          group-hover:bg-white group-hover:text-[#631529]
                          group-hover:translate-x-1"
                      >
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
        className="sm:hidden absolute left-3 top-1/2 -translate-y-1/2
          bg-white/90 p-2 rounded-full z-20
          transition-all duration-300
          hover:bg-[#631529] hover:scale-110
          hover:shadow-[0_0_20px_rgba(99,21,41,0.8)]"
      >
        <ChevronLeft className="text-[#631529] hover:text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="sm:hidden absolute right-3 top-1/2 -translate-y-1/2
          bg-white/90 p-2 rounded-full z-20
          transition-all duration-300
          hover:bg-[#631529] hover:scale-110
          hover:shadow-[0_0_20px_rgba(99,21,41,0.8)]"
      >
        <ChevronRight className="text-[#631529] hover:text-white" />
      </button>

      {/* DESKTOP ARROWS — POSITION UNCHANGED */}
      <div className="hidden sm:flex absolute bottom-10 right-10 gap-4 z-20">
        <button
          onClick={prevSlide}
          className="bg-white/90 p-3 rounded-full
            transition-all duration-300
            hover:bg-[#631529] hover:scale-110
            hover:shadow-[0_0_20px_rgba(99,21,41,0.8)]"
        >
          <ChevronLeft className="text-[#631529] hover:text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="bg-white/90 p-3 rounded-full
            transition-all duration-300
            hover:bg-[#631529] hover:scale-110
            hover:shadow-[0_0_20px_rgba(99,21,41,0.8)]"
        >
          <ChevronRight className="text-[#631529] hover:text-white" />
        </button>
      </div>
    </section>
  );
}
