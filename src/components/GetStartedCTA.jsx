import { ArrowUpRight } from "lucide-react";

export default function GetStartedCTA() {
  return (
    <section className="relative overflow-hidden bg-[#6f1430] py-16 md:py-24 rounded-[32px] mx-4 md:mx-8 lg:mx-16">

      {/* Decorative curved lines */}
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        viewBox="0 0 1200 300"
        fill="none"
      >
        {[0, 18, 36, 54].map((y, i) => (
          <path
            key={i}
            d="M50 100 Q600 -40 1150 100"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="2"
            transform={`translate(0 ${y})`}
          />
        ))}
      </svg>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 text-white">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-4 sm:mb-6">
          Get Started with Our Program
        </h2>

        <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-10">
          Take the first step towards a beautiful future with PureReviev! Contact
          PureReviev for quality education and support to launch your beauty career
          confidently today!
        </p>

        {/* Button */}
        <button
          className="
            group inline-flex items-center gap-4
            bg-white text-[#6f1430]
            px-6 sm:px-8 py-3 sm:py-4
            rounded-full
            text-base sm:text-lg
            font-medium
            shadow-lg
            hover:shadow-xl
            transition-all duration-300
          "
        >
          Apply Now

          <span
            className="
              flex items-center justify-center
              w-9 h-9 sm:w-10 sm:h-10
              rounded-full
              bg-[#6f1430] text-white
              group-hover:translate-x-1
              transition-transform
            "
          >
            <ArrowUpRight size={18} className="sm:text-[20px]" />
          </span>
        </button>
      </div>
    </section>
  );
}
