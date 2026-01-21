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

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;

    const scroll = () => {
      if (!slider) return;

      scrollAmount += 0.6;
      slider.scrollLeft = scrollAmount;

      if (scrollAmount >= slider.scrollWidth / 2) {
        scrollAmount = 0;
      }
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#fdecee] via-[#f9edf3] to-[#f7eef4]">
      
      {/* soft background glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#7b1020]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#7b1020]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-14">
          <div className="max-w-xl">
            <span className="inline-block bg-[#7b1020] text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-wide">
              PLACEMENTS
            </span>

            <h2 className="text-4xl md:text-5xl font-serif leading-tight text-[#1a1a1a] mb-5">
              Brands Our Students <br /> Working With
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
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
          className="flex gap-10 overflow-x-hidden whitespace-nowrap group"
        >
          {brands.map((logo, index) => (
            <div
              key={index}
              className="
                min-w-[280px] h-[150px]
                bg-white/80 backdrop-blur
                rounded-[48px]
                flex items-center justify-center
                shadow-[0_20px_40px_rgba(0,0,0,0.08)]
                border border-white
                transition-all duration-500
                group-hover:pause
                hover:-translate-y-2
                hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)]
              "
            >
              <img
                src={logo}
                alt="Brand"
                className="max-h-16 object-contain grayscale hover:grayscale-0 transition duration-500"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
