import {
  Award,
  BarChart3,
  Stars,
  Trophy,
  Scissors,
  Sparkles,
} from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "Awarded by PwC",
    desc: "World’s Greatest Brands & Leaders in Skill Training Asia & GCC",
  },
  {
    icon: BarChart3,
    title: "Fastest Growing Academy of the Decade",
    desc: "Awarded by The Beauty Polis",
  },
  {
    icon: Stars,
    title: "Rising Star of Asia",
    desc: "Awarded by The Indo ASEAN Global Investment Summit",
  },
  {
    icon: Trophy,
    title: "Best Award of Education Excellence",
    desc: "Skill Development Institution",
  },
  {
    icon: Scissors,
    title: "Best Hair and Beauty Institute",
    desc: "By International Quality Award",
  },
  {
    icon: Sparkles,
    title: "Best Beauty Institute",
    desc: "Awarded by Global Quality Award",
  },
  {
    icon: Stars,
    title: "Rising Star of Asia",
    desc: "Best Education Institute",
  },
  {
    icon: Award,
    title: "Best Beauty Training Institute Award",
    desc: "Awarded in Malaysia",
  },
];

export default function Achievements() {
  return (
    <section className="py-16 md:py-24 bg-[#fdeff0]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block bg-[#631529] text-white text-xs md:text-sm px-4 py-1 rounded-full mb-4">
            ACHIEVEMENTS
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
            Our Work is Recognized as the Best in the Industry.
          </h2>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg">
            Our commitment to improving skills in the beauty and wellness
            industry has been recognized with top awards and accreditations,
            showing our dedication to excellence.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 sm:p-8 text-center shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300"
              >
                {/* Icon */}
                <div className="flex justify-center mb-4 sm:mb-5">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-[#fdeff0] text-[#631529]">
                    <Icon size={30} className="sm:scale-110" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-semibold text-base sm:text-lg mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
