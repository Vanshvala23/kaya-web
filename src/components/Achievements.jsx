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
    <section className="py-24 bg-[#fdeff0]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-[#631529] text-white text-xs px-4 py-1 rounded-full mb-4">
            ACHIEVEMENTS
          </span>

          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Our Work is Recognized as the Best in the Industry.
          </h2>

          <p className="text-gray-600 text-sm md:text-base">
            Our commitment to improving skills in the beauty and wellness
            industry has been recognized with top awards and accreditations,
            showing our dedication to excellence.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-[32px] p-8 text-center shadow-md hover:shadow-xl transition"
              >
                {/* Icon */}
                <div className="flex justify-center mb-5">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#fdeff0] text-[#631529]">
                    <Icon size={30} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-semibold text-base mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed">
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
