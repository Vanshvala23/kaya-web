import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";

const data = [
  {
    name: "Manvi",
    image: p1,
    course: "Clinical Dermatech",
    salary: "2,34,000 per Annum",
    location: "Noida",
    designation: "Skin Therapist",
  },
  {
    name: "Saurprit",
    image: p2,
    course: "Enrich",
    salary: "2,94,000 per Annum",
    location: "Malad",
    designation: "Beauty Therapist",
  },
  {
    name: "Ojussi",
    image: p3,
    course: "Algherm",
    salary: "2,40,000 per Annum",
    location: "Noida",
    designation: "Sales",
  },
  {
    name: "Anshu Garg",
    image: p4,
    course: "Makeup",
    salary: "3,40,000 per Annum",
    location: "Preet Vihar",
    designation: "Skin Therapist",
  },
];

export default function Placements() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(3);
  const [cardWidth, setCardWidth] = useState(320);

  /* ---------- SWIPE SUPPORT ---------- */
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;

    if (distance > 50) next();
    if (distance < -50) prev();

    touchStartX.current = null;
    touchEndX.current = null;
  };
  /* ---------------------------------- */

  /* ---------- RESPONSIVE CARDS ---------- */
  useEffect(() => {
    const handleResize = () => {
      const width = containerRef.current?.offsetWidth || 0;

      if (width < 640) {
        setVisible(1);
        setCardWidth(width - 32);
      } else if (width < 1024) {
        setVisible(2);
        setCardWidth((width - 24) / 2);
      } else {
        setVisible(3);
        setCardWidth(320);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  /* ------------------------------------ */

  const prev = () => setIndex((p) => Math.max(p - 1, 0));
  const next = () =>
    setIndex((p) => Math.min(p + 1, data.length - visible));

  /* ---------- AUTO SCROLL ---------- */
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((p) =>
        p >= data.length - visible ? 0 : p + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, [visible]);
  /* -------------------------------- */

  return (
    <section className="py-24 bg-[#631529]">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-6">
          <div>
            <span className="inline-block bg-white text-[#631529] text-xs px-4 py-1 rounded-full mb-3">
              OUR PLACEMENTS
            </span>

            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">
              Success Snapshots
            </h2>

            <p className="text-white/70 text-sm">
              We can boast of numerous accolades earned over the years.
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3 mt-4 sm:mt-0">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="w-8 h-1 bg-white/40 rounded-full" />

            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* SLIDER */}
        <div
          className="overflow-hidden"
          ref={containerRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex gap-6 transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${index * (cardWidth + 24)}px)` }}
          >
            {data.map((item, i) => (
              <div
                key={i}
                className="flex-shrink-0 rounded-[28px] p-6 bg-[#f7f1f5] relative"
                style={{ width: `${cardWidth}px` }}
              >
                {/* SPOT LIGHT */}
                <div className="absolute left-4 top-16 rotate-[-90deg]">
                  <span className="bg-[#631529] text-white text-xs px-3 py-1 rounded-full tracking-wide">
                    SPOT LIGHT
                  </span>
                </div>

                {/* IMAGE */}
                <div className="rounded-2xl overflow-hidden mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-56 object-cover"
                  />
                </div>

                {/* CONTENT */}
                <p className="text-center font-serif text-[#631529] text-lg mb-1">
                  ✨ Congratulations ✨
                </p>

                <h3 className="text-center font-semibold text-[#631529] mb-2">
                  {item.name}
                </h3>

                <p className="text-center text-xs text-gray-600 leading-relaxed">
                  Student of PureReviev International, for getting placed in{" "}
                  <strong>{item.course}</strong>
                </p>

                <div className="mt-4 text-center text-xs text-gray-500 space-y-1">
                  <p>Salary: {item.salary}</p>
                  <p>Location: {item.location}</p>
                  <p>Designation: {item.designation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
