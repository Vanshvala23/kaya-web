import image from "../assets/certificates/Certificate(16).jpg";
import { ChevronRight } from "lucide-react";

export default function WhoWeAre() {
  return (
    <section className="py-24 bg-[#faf7f7]">
      <div className="max-w-7xl mx-auto px-6 grid gap-14 lg:grid-cols-2 items-center">

        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block bg-[#631529] text-white text-xs px-4 py-1 rounded-full mb-4">
            WHO WE ARE
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight mb-6">
            India’s Leading Beauty & Wellness Training Institute
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
            Pure Revive is a premium beauty and wellness training
            institute focused on transforming passion into a successful
            profession.
          </p>

          <p className="text-gray-600 leading-relaxed mb-8 text-sm sm:text-base">
            With industry-oriented courses, experienced trainers, and global
            certifications, we empower students with skills required for the
            modern beauty industry.
          </p>

          <button className="inline-flex items-center gap-3 bg-[#631529] text-white px-6 sm:px-7 py-3 rounded-full font-semibold hover:bg-[#7a1d33] transition">
            Know More
            <span className="bg-white text-[#631529] px-2 py-1 rounded-full text-sm flex items-center justify-center">
              <ChevronRight size={16} />
            </span>
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full">
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img
              src={image}
              alt="Who We Are"
              className="w-full h-64 sm:h-80 md:h-[420px] object-cover"
            />
          </div>

          {/* Optional Accent Box */}
          {/* 
          <div className="absolute -bottom-6 -left-6 bg-[#631529] text-white px-6 py-4 rounded-2xl shadow-lg hidden md:block">
            <p className="text-xl font-bold">100+</p>
            <p className="text-sm">Professional Courses</p>
          </div>
          */}
        </div>

      </div>
    </section>
  );
}
