import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import {useNavigate} from "react-router-dom";

import c1 from "../assets/teaching/Teaching(6).jpg";
import c2 from "../assets/teaching/Teaching(13).jpg";
import c3 from "../assets/teaching/teaching(4).jpg";
import c4 from "../assets/teaching/Teaching(18).jpg";

const courses = [
  { title: "Body Courses", image: c1 },
  { title: "Combo Cosmetology", image: c2 },
  { title: "Laser Treatment", image: c3 },
  { title: "Makeup Courses", image: c4 },
];

const CARD_WIDTH = 320; // Keep desktop same
const AUTO_DELAY = 3000;

export default function OurCourses() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);
  const navigate=useNavigate();

  const maxIndex = courses.length - 3; // desktop

  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, AUTO_DELAY);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const prev = () => {
    setIndex((i) => (i === 0 ? maxIndex : i - 1));
  };

  const next = () => {
    setIndex((i) => (i >= maxIndex ? 0 : i + 1));
  };

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 gap-6">
          <div>
            <span className="inline-block bg-[#631529] text-white text-xs px-4 py-1 rounded-full mb-4">
              OUR COURSES
            </span>

            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Tailored Courses for Every Beauty Aspirant
            </h2>

            <p className="text-gray-600 max-w-3xl leading-relaxed">
              Finding a beauty course is easy at PureRevive International – with over
              100 beauty courses across cosmetology, aesthetics, hair, makeup,
              nail art and more.
            </p>
          </div>

          <a onClick={()=>{
            return navigate("/courses");
          }} className="text-[#631529] font-semibold hover:underline cursor-pointer">
            View All Programs → 
          </a>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={stopAutoPlay}
          onMouseLeave={startAutoPlay}
        >
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${index * CARD_WIDTH}px)`,
              }}
            >
              {courses.map((course, i) => (
                <div
                  key={i}
                  className="min-w-[300px] sm:min-w-[320px] flex-shrink-0"
                >
                  <div className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition" />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-center">
                    {course.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="absolute -top-20 right-0 flex gap-3">
            <button
              onClick={prev}
              className="bg-gray-200 hover:bg-[#631529] hover:text-white p-3 rounded-full transition"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={next}
              className="bg-gray-200 hover:bg-[#631529] hover:text-white p-3 rounded-full transition"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
