import centerImg from "../assets/center.jpg";

export default function FindCenter() {
  return (
    <section className="py-16 md:py-24 bg-[#FFEFF4]">
      <div
        className="
          max-w-7xl mx-auto
          flex flex-col lg:flex-row
          gap-8 md:gap-12
          rounded-[24px]
          shadow-[0_3px_24px_rgba(0,0,0,0.3)]
          bg-gradient-to-r from-[#f9c8da] to-[#e7daee]
          p-6 md:p-12
          overflow-hidden
        "
      >
        {/* LEFT */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal leading-snug mb-4 text-black">
            Find PureReviev Near You – <br />
            Start Learning Today!
          </h2>

          <p className="text-[#39414d] text-base sm:text-lg mb-6 md:mb-8">
            Locate the closest PureReviev International center <br />
            anywhere in India.
          </p>

          <div className="space-y-4 md:space-y-5 max-w-md">
            <select className="w-full border border-black px-4 py-3 bg-white rounded-md">
              <option>Select State</option>
            </select>

            <select className="w-full border border-black px-4 py-3 bg-white rounded-md">
              <option>Select City</option>
            </select>

            <button className="w-full bg-black text-white py-3 md:py-4 font-medium tracking-wide rounded-md hover:bg-gray-900 transition">
              SUBMIT →
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex-1 mt-8 lg:mt-0">
          <img
            src={centerImg}
            alt="PureReviev Center"
            className="rounded-[24px] w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
