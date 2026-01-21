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
      "Explore a World of Learning with Our Online Courses Hub.",
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

  return (
    <section className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="
              relative min-w-full
              h-[60vh] sm:h-[70vh] lg:h-[85vh]
            "
          >
            {/* IMAGE — PERFECT CENTER */}
            <img
              src={slide.image}
              alt={slide.title}
              className="
                absolute inset-0
                w-full h-full
                object-cover
                object-center
                block
              "
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/50" />

            {/* CONTENT */}
            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-6 text-white max-w-xl">
                <span className="inline-block bg-[#631529] px-4 py-1 rounded-full text-xs mb-3">
                  {slide.tag}
                </span>

                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4">
                  {slide.title}
                </h1>

                <p className="text-sm sm:text-lg mb-4">
                  {slide.subtitle}
                </p>

                {slide.meta.map((m, idx) => (
                  <p key={idx} className="text-sm mb-4">{m}</p>
                ))}

                <button className="flex items-center gap-2 bg-white text-[#631529] px-5 py-3 rounded-full font-semibold">
                  Know More
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CONTROLS */}
      <div className="absolute bottom-6 right-6 flex gap-3 z-20">
        <button
          onClick={() =>
            setCurrent((p) => (p - 1 + slides.length) % slides.length)
          }
          className="bg-white p-3 rounded-full"
        >
          <ChevronLeft className="text-[#631529]" />
        </button>

        <button
          onClick={() => setCurrent((p) => (p + 1) % slides.length)}
          className="bg-white p-3 rounded-full"
        >
          <ChevronRight className="text-[#631529]" />
        </button>
      </div>
    </section>
  );
}
