import { useEffect, useRef } from "react";

const newsItems = [
  "Admissions Open for Bridal Makeup Course – Apply Now",
  "Get Certified in 45 Days | Limited Seats Available",
  "New Online Professional Courses Launched",
  "Enroll Today & Start Your Beauty Career",
  "Orane Certified Courses Recognized Pan India",
];

export default function NewsTicker() {
  const tickerRef = useRef(null);

  useEffect(() => {
    const ticker = tickerRef.current;
    let animationId;
    let position = 0;

    const animate = () => {
      position -= 0.5;
      if (Math.abs(position) >= ticker.scrollWidth / 2) {
        position = 0;
      }
      ticker.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="relative overflow-hidden bg-[#631529] text-white py-9">
      <div
        ref={tickerRef}
        className="flex whitespace-nowrap gap-12 px-12"
      >
        {[...newsItems, ...newsItems].map((item, index) => (
          <span
            key={index}
            className="text-sm md:text-base font-medium hover:underline cursor-pointer"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
