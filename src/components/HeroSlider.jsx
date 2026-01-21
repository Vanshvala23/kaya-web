import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import bridal1 from "../assets/bridal1.jpg";
import bridal2 from "../assets/bridal2.jpg";

const slides = [
  {
    image: bridal1,
    tag: "Orane Goes Online!",
    title: "Complete Bridal Makeup & Hairstyling Course",
    subtitle: "Get Certified in 45 Days",
    price: "Course Fee: ₹50,000 Only",
  },
  {
    image: bridal2,
    tag: "Professional Courses",
    title: "Advanced Makeup Artist Program",
    subtitle: "Become Industry Ready",
    price: "Course Fee: ₹75,000 Only",
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
    <section className="relative h-screen w-full overflow-hidden">
      
      {/* SLIDER CONTAINER */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full h-full relative">
            
            {/* Background Image */}
            <img
              src={slide.image}
              alt="Hero"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10"></div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-6 w-full">
                <div className="max-w-2xl text-white">

                  {/* Tag */}
                  <span className="inline-block bg-[#631529] px-4 py-1 rounded-full text-sm mb-4">
                    {slide.tag}
                  </span>

                  {/* Title */}
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                    {slide.title}
                  </h1>

                  {/* Subtitle */}
                  <p className="text-lg md:text-xl mb-2">
                    {slide.subtitle}
                  </p>

                  {/* Price */}
                  <p className="text-lg mb-8">
                    {slide.price}
                  </p>

                  {/* Button */}
                  <button className="group flex items-center gap-3 bg-white text-[#631529] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
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

      {/* ARROWS — BOTTOM RIGHT */}
      <div className="absolute bottom-10 right-10 flex gap-4 z-20">
        <button
          onClick={prevSlide}
          className="bg-white/90 hover:bg-white p-3 rounded-full transition"
        >
          <ChevronLeft className="text-[#631529]" />
        </button>

        <button
          onClick={nextSlide}
          className="bg-white/90 hover:bg-white p-3 rounded-full transition"
        >
          <ChevronRight className="text-[#631529]" />
        </button>
      </div>

    </section>
  );
}
