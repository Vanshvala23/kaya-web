import { useEffect, useRef } from "react";
import { Megaphone } from "lucide-react";

const newsItems = [
  "Admissions Open for Bridal Makeup Course – Apply Now",
  "Get Certified in 45 Days | Limited Seats Available",
  "New Online Professional Courses Launched",
  "Enroll Today & Start Your Beauty Career",
  "PureRevive Certified Courses Recognized Pan India",
];

export default function NewsTicker() {
  const tickerRef = useRef(null);

  useEffect(() => {
    const ticker = tickerRef.current;
    if (!ticker) return;

    let animationId;
    let position = 0;

    const animate = () => {
      position -= 0.5; // adjust speed
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
    <div className="relative overflow-hidden bg-[#631529] text-white py-4 sm:py-6 md:py-9">
      <div
        ref={tickerRef}
        className="flex whitespace-nowrap gap-6 sm:gap-8 md:gap-12 px-6 sm:px-12"
      >
        {[...newsItems, ...newsItems].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-shrink-0 cursor-pointer hover:underline"
          >
            <Megaphone size={16} className="sm:hidden md:inline-block text-yellow-300" />
            <span className="text-xs sm:text-sm md:text-base font-medium">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
