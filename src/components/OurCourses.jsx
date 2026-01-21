import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

import c1 from "../assets/c1.jpg";
import c2 from "../assets/c2.jpg";
import c3 from "../assets/c3.jpg";
import c4 from "../assets/c4.jpg";

const courses = [
  { title: "Body Courses", image: c1 },
  { title: "Combo Cosmetology", image: c2 },
  { title: "Hair Courses", image: c3 },
  { title: "Makeup Courses", image: c4 },
];

const AUTO_DELAY = 3000;

export default function OurCourses() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const total = courses.length;

  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, AUTO_DELAY);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const prev = () =>
    setIndex((i) => (i === 0 ? total - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === total - 1 ? 0 : i + 1));

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, []);

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 gap-6">
          <div>
            <span className="inline-block bg-[#631529] text-white text-xs px-4 py-1 rounded-full mb-4">
              OUR COURSES
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-4">
              Tailored Courses for Every Beauty Aspirant
            </h2>

            <p className="text-gray-600 max-w-3xl leading-relaxed text-sm sm:text-base">
              Finding a beauty course is easy at Orane International – with over
              100 beauty courses across cosmetology, aesthetics, hair, makeup,
              nail art and more.
            </p>
          </div>

          <a
            href="#"
            className="text-[#631529] font-semibold hover:underline self-start lg:self-auto"
          >
            View All Programs →
          </a>
        </div>

        {/* CAROUSEL */}
        <div
          className="relative"
          onMouseEnter={stopAutoPlay}
          onMouseLeave={startAutoPlay}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${index * 100}%)`,
              }}
            >
              {courses.map((course, i) => (
                <div
                  key={i}
                  className="
                    min-w-full
                    sm:min-w-[50%]
                    md:min-w-[33.333%]
                    lg:min-w-[25%]
                    px-3
                  "
                >
                  <div className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="
                        h-56
                        sm:h-64
                        md:h-72
                        w-full
                        object-cover
                        transition-transform duration-500
                        group-hover:scale-105
                      "
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition" />
                  </div>

                  <h3 className="mt-5 text-base sm:text-lg font-semibold text-center">
                    {course.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* LEFT CONTROL */}
          <button
            onClick={prev}
            className="
              absolute left-0 sm:-left-4
              top-1/2 -translate-y-1/2
              bg-gray-200 hover:bg-[#631529] hover:text-white
              p-2 sm:p-3
              rounded-full
              transition
              z-10
            "
          >
            <ChevronLeft />
          </button>

          {/* RIGHT CONTROL */}
          <button
            onClick={next}
            className="
              absolute right-0 sm:-right-4
              top-1/2 -translate-y-1/2
              bg-gray-200 hover:bg-[#631529] hover:text-white
              p-2 sm:p-3
              rounded-full
              transition
              z-10
            "
          >
            <ChevronRight />
          </button>
        </div>

      </div>
    </section>
  );
}
