import { useEffect, useRef } from "react";
import avatar from "../assets/brands/avatar.jpg";
import lalit from "../assets/brands/lalit.jpg";
import juvenate from "../assets/brands/juvenate.jpg";

const brands = [
  avatar,
  lalit,
  juvenate,
  avatar,
  lalit, // duplicate for seamless loop
];

export default function BrandsPlacement() {
  const sliderRef = useRef(null);
  const scrollRef = useRef(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const scroll = () => {
      scrollRef.current += 0.6; // adjust speed
      slider.scrollLeft = scrollRef.current;

      if (scrollRef.current >= slider.scrollWidth / 2) {
        scrollRef.current = 0;
      }
    };

    intervalRef.current = setInterval(scroll, 20);

    // Pause on hover
    const handleMouseEnter = () => clearInterval(intervalRef.current);
    const handleMouseLeave = () =>
      (intervalRef.current = setInterval(scroll, 20));

    slider.addEventListener("mouseenter", handleMouseEnter);
    slider.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearInterval(intervalRef.current);
      slider.removeEventListener("mouseenter", handleMouseEnter);
      slider.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-br from-[#fdecee] via-[#f9edf3] to-[#f7eef4]">
      {/* soft background glow */}
      <div className="absolute -top-32 -left-32 w-72 md:w-96 h-72 md:h-96 bg-[#7b1020]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 md:w-80 h-64 md:h-80 bg-[#7b1020]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-12 md:mb-16">
          <div className="max-w-xl text-center lg:text-left">
            <span className="inline-block bg-[#7b1020] text-white text-xs md:text-sm font-semibold px-4 py-1.5 rounded-full mb-5 tracking-wide">
              PLACEMENTS
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-tight text-[#1a1a1a] mb-4 sm:mb-5">
              Brands Our Students <br /> Working With
            </h2>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              100% Job assistance with unlimited{" "}
              <span className="text-[#7b1020] font-medium underline underline-offset-4">
                placement
              </span>{" "}
              opportunities
            </p>
          </div>
        </div>

        {/* Auto Scroll */}
        <div
          ref={sliderRef}
          className="flex gap-6 md:gap-10 overflow-x-hidden whitespace-nowrap"
        >
          {brands.map((logo, index) => (
            <div
              key={index}
              className="min-w-[200px] sm:min-w-[240px] md:min-w-[280px] h-[220px] sm:h-[140px] md:h-[150px] bg-white/80 backdrop-blur rounded-[32px] md:rounded-[48px] flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-white"
            >
              <img
                src={logo}
                alt="Brand"
                className="max-h-19 sm:max-h-16 md:max-h-16 object-fill grayscale hover:grayscale-0 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
