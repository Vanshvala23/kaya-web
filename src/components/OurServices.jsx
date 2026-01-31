import { useNavigate } from "react-router-dom";
import s1 from "../assets/teaching/Teaching(7).jpg"; // replace with your service images
import s2 from "../assets/teaching/Teaching(6).jpg";
import s3 from "../assets/teaching/Teaching(18).jpg";
import s4 from "../assets/teaching/Teaching(1).jpg";

const services = [
  {
    title: "Advanced Skin & Laser Treatments",
    description: "LHR, Face Lifting, Pigmentation Removal, Skin Polishing, Carbon Peel, Glow IV, Anti-Aging, Pro Bright, Microneedling, K-Glass, Anti-Scarring.",
    image: s1,
    link: "/services/skin-laser",
  },
  {
    title: "Hair Treatments",
    description: "Hair Regrowth, Hair Fall Control, Advanced therapies for natural hair growth.",
    image: s2,
    link: "/services/hair-treatments",
  },
  {
    title: "Permanent Makeup",
    description: "Eyebrows, Lips, Eyeliner – Long-lasting, natural-looking permanent makeup solutions.",
    image: s3,
    link: "/services/permanent-makeup",
  },
  {
    title: "Medi Facials",
    description: "Prime Hydra, Charcoal Luxe, Illumina, BB Glow, Vampire, Photo, MDA, Geneo+ Facials – Hydration, glow, anti-aging.",
    image: s4,
    link: "/services/medi-facials",
  },
];

export default function OurServices() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 gap-6">
          <div>
            <span className="inline-block bg-[#631529] text-white text-xs px-4 py-1 rounded-full mb-4">
              OUR SERVICES
            </span>

            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Premium Beauty & Wellness Services
            </h2>

            <p className="text-gray-600 max-w-3xl leading-relaxed">
              Explore our wide range of services, crafted for skincare, haircare, and beauty enhancement. Each service is designed with the latest techniques for the ultimate experience.
            </p>
          </div>

          <a
            onClick={() => navigate("/services")}
            className="text-[#631529] font-semibold hover:underline cursor-pointer"
          >
            View All Services →
          </a>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition bg-white"
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                </div>

                <button
                  onClick={() => navigate(service.link)}
                  className="mt-auto bg-[#631529] text-white px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:bg-white hover:text-[#631529] hover:shadow-md"
                >
                  Know More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
