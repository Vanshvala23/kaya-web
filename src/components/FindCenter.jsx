import centerImg from "../assets/center.jpg";

export default function FindCenter() {
  return (
    <section className="py-24 bg-white">
      <div
        className="
          max-w-7xl mx-auto
          flex flex-col lg:flex-row
          gap-12
          rounded-[24px]
          shadow-[0_3px_24px_rgba(0,0,0,0.3)]
          overflow-auto
          bg-[#f9c8da] bg-gradient-to-r from-[#f9c8da] to-[#e7daee]
          p-12
          leading-[1.7]
        "
      >
        {/* LEFT */}
        <div className="flex-1">
          <h2 className="text-4xl font-serif font-normal leading-tight mb-4 text-black">
            Find Orane Near You – <br />
            Start Learning Today!
          </h2>

          <p className="text-[#39414d] mb-8">
            Locate the closest Orane International center <br />
            anywhere in India.
          </p>

          <div className="space-y-5 max-w-md">
            <select className="w-full border border-black px-4 py-3 bg-white">
              <option>Select State</option>
            </select>

            <select className="w-full border border-black px-4 py-3 bg-white">
              <option>Select City</option>
            </select>

            <button className="w-full bg-black text-white py-4 font-medium tracking-wide">
              SUBMIT →
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex-1">
          <img
            src={centerImg}
            alt="Orane Center"
            className="rounded-[24px] w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
