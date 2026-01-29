import {useState,useEffect,useRef} from "react";
import {ChevronLeft, ChevronRight,LayoutGrid,Images} from "lucide-react";
//import all certificates from '../assets/certificates/
import Certificate1 from "../assets/certificates/Certificate(1).jpg"
import Certificate2 from "../assets/certificates/Certificate(2).jpg"
import Certificate3 from "../assets/certificates/Certificate(3).jpg"
import Certificate4 from "../assets/certificates/Certificate(4).jpg"
import Certificate5 from "../assets/certificates/Certificate(5).jpg"
import Certificate6 from "../assets/certificates/Certificate(6).jpg"
import Certificate7 from "../assets/certificates/Certificate(7).jpg"
import Certificate8 from "../assets/certificates/Certificate(8).jpg"
import Certificate9 from "../assets/certificates/Certificate(9).jpg"
import Certificate10 from "../assets/certificates/Certificate(10).jpg"
import Certificate11 from "../assets/certificates/Certificate(11).jpg"
import Certificate12 from "../assets/certificates/Certificate(12).jpg"
import Certificate13 from "../assets/certificates/Certificate(13).jpg"
import Certificate14 from "../assets/certificates/Certificate(14).jpg"
import Certificate15 from "../assets/certificates/Certificate(15).jpg"
import Certificate16 from "../assets/certificates/Certificate(16).jpg"
import Certificate17 from "../assets/certificates/Certificate(17).jpg"
import Certificate18 from "../assets/certificates/Certificate(18).jpg"
import Certificate19 from "../assets/certificates/Certificate(19).jpg"
import Certificate20 from "../assets/certificates/Certificate(20).jpg"
import Certificate21 from "../assets/certificates/Certificate(21).jpg"
import Certificate22 from "../assets/certificates/Certificate(22).jpg"
import Certificate23 from "../assets/certificates/Certificate(23).jpg"
import Certificate24 from "../assets/certificates/Certificate(24).jpg"
import Certificate25 from "../assets/certificates/Certificate(25).jpg"
import Certificate26 from "../assets/certificates/Certificate(26).jpg"
import Certificate27 from "../assets/certificates/Certificate(27).jpg"
import Certificate28 from "../assets/certificates/Certificate(28).jpg"
import Certificate29 from "../assets/certificates/Certificate(29).jpg"
import Certificate30 from "../assets/certificates/Certificate(30).jpg"
import Certificate31 from "../assets/certificates/Certificate(31).jpg"
import Certificate32 from "../assets/certificates/Certificate(32).jpg"
import Certificate33 from "../assets/certificates/Certificate(33).jpg"
import Certificate34 from "../assets/certificates/Certificate(34).jpg"
import Certificate35 from "../assets/certificates/Certificate(35).jpg"
import Certificate36 from "../assets/certificates/Certificate(36).jpg"
import Certificate37 from "../assets/certificates/Certificate(37).jpg"
import Certificate38 from "../assets/certificates/Certificate(38).jpg"
import Certificate39 from "../assets/certificates/Certificate(39).jpg"
import Certificate40 from "../assets/certificates/Certificate(40).jpg"
import Certificate41 from "../assets/certificates/Certificate(41).jpg"
import Certificate42 from "../assets/certificates/Certificate(42).jpg"
import Certificate43 from "../assets/certificates/Certificate(43).jpg"
import Certificate44 from "../assets/certificates/Certificate(44).jpg"
import Certificate45 from "../assets/certificates/Certificate(45).jpg"
import Certificate46 from "../assets/certificates/Certificate(46).jpg"
import Certificate47 from "../assets/certificates/Certificate(47).jpg"
import Certificate48 from "../assets/certificates/Certificate(48).jpg"
import Certificate49 from "../assets/certificates/Certificate(49).jpg"
import Certificate50 from "../assets/certificates/Certificate(50).jpg"

//Teaching images
import Teaching1 from "../assets/teaching/Teaching(1).jpg"
import Teaching2 from "../assets/teaching/Teaching(2).jpg"
import Teaching3 from "../assets/teaching/Teaching(3).jpg"
import Teaching4 from "../assets/teaching/Teaching(4).jpg"
import Teaching5 from "../assets/teaching/Teaching(5).jpg"
import Teaching6 from "../assets/teaching/Teaching(6).jpg"
import Teaching7 from "../assets/teaching/Teaching(7).jpg"
import Teaching8 from "../assets/teaching/Teaching(8).jpg"
import Teaching9 from "../assets/teaching/Teaching(9).jpg"
import Teaching10 from "../assets/teaching/Teaching(10).jpg"
import Teaching11 from "../assets/teaching/Teaching(11).jpg"
import Teaching12 from "../assets/teaching/Teaching(12).jpg"
import Teaching13 from "../assets/teaching/Teaching(13).jpg"
import Teaching14 from "../assets/teaching/Teaching(14).jpg"
import Teaching15 from "../assets/teaching/Teaching(15).jpg"
import Teaching16 from "../assets/teaching/Teaching(16).jpg"
import Teaching17 from "../assets/teaching/Teaching(17).jpg"
import Teaching18 from "../assets/teaching/Teaching(18).jpg"
import Teaching19 from "../assets/teaching/Teaching(19).jpg"

import Seminar1 from "../assets/seminars/Seminar(1).jpg"
import Seminar2 from "../assets/seminars/Seminar(2).jpg"
import Seminar3 from "../assets/seminars/Seminar(3).jpg"
import Seminar4 from "../assets/seminars/Seminar(4).jpg"
import Seminar5 from "../assets/seminars/Seminar(5).jpg"
import Seminar6 from "../assets/seminars/Seminar(6).jpg"
import Seminar7 from "../assets/seminars/Seminar(7).jpg"
import Seminar8 from "../assets/seminars/Seminar(8).jpg"

import Fashion1 from "../assets/fashions/Fashion(1).jpg"
import Fashion2 from "../assets/fashions/Fashion(2).jpg"
import Fashion3 from "../assets/fashions/Fashion(3).jpg"
import Fashion4 from "../assets/fashions/Fashion(4).jpg"
import Fashion5 from "../assets/fashions/Fashion(5).jpg"
import Fashion6 from "../assets/fashions/Fashion(6).jpg"
import Fashion7 from "../assets/fashions/Fashion(7).jpg"
import Fashion8 from "../assets/fashions/Fashion(8).jpg"
import Fashion9 from "../assets/fashions/Fashion(9).jpg"

import Placements1 from "../assets/placements/Placements(1).jpg"
import Placements2 from "../assets/placements/Placements(2).jpg"


const galleryData = {
    certificates: [
        Certificate1,Certificate2,Certificate3,Certificate4,Certificate5,Certificate6,Certificate7,Certificate8,Certificate9,Certificate10,
    Certificate11,Certificate12,Certificate13,Certificate14,Certificate15,Certificate16,Certificate17,Certificate18,Certificate19,Certificate20,
    Certificate21,Certificate22,Certificate23,Certificate24,Certificate25,Certificate26,Certificate27,Certificate28,Certificate29,Certificate30,
    Certificate31,Certificate32,Certificate33,Certificate34,Certificate35,Certificate36,Certificate37,Certificate38,Certificate39,Certificate40,
    Certificate41,Certificate42,Certificate43,Certificate44,Certificate45,Certificate46,Certificate47,Certificate48,Certificate49,Certificate50
    ],
    teaching:[
        Teaching1,Teaching2,Teaching3,Teaching4,Teaching5,Teaching6,Teaching7,Teaching8,Teaching9,Teaching10,
    Teaching11,Teaching12,Teaching13,Teaching14,Teaching15,Teaching16,Teaching17,Teaching18,Teaching19
    ],
    seminars:[
        Seminar1,Seminar2,Seminar3,Seminar4,Seminar5,Seminar6,Seminar7,Seminar8
    ],
    fashion:[
        Fashion1,Fashion2,Fashion3,Fashion4,Fashion5,Fashion6,Fashion7,Fashion8,Fashion9
    ],
    placements:[
        Placements1,Placements2
    ]
};
const categories = [
  { key: "all", label: "All" },
  { key: "certificates", label: "Certificates" },
  { key: "teaching", label: "Teachings" },
  { key: "seminars", label: "Seminars" },
  { key: "fashion", label: "Fashion" },
  { key: "placements", label: "Placements" },
];

export default function GalleryPage() {
  const [category, setCategory] = useState("all");
  const [view, setView] = useState("carousel");
  const [index, setIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const timerRef = useRef(null);

  /* ================= RESPONSIVE ================= */
  useEffect(() => {
    const resize = () => {
      if (window.innerWidth < 640) setItemsPerPage(1);
      else if (window.innerWidth < 768) setItemsPerPage(2);
      else if (window.innerWidth < 1024) setItemsPerPage(3);
      else setItemsPerPage(6);
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  /* ================= IMAGE SOURCE ================= */
  const images =
    category === "all"
      ? Object.values(galleryData).flat()
      : galleryData[category] || [];

  const visible = images.slice(index, index + itemsPerPage);

  /* ================= AUTOSLIDE ================= */
  useEffect(() => {
    if (view !== "carousel") return;
    timerRef.current = setInterval(() => {
      setIndex((p) => (p + itemsPerPage >= images.length ? 0 : p + itemsPerPage));
    }, 3500);
    return () => clearInterval(timerRef.current);
  }, [images.length, itemsPerPage, view]);

  const next = () =>
    setIndex((p) => (p + itemsPerPage >= images.length ? 0 : p + itemsPerPage));

  const prev = () =>
    setIndex((p) => (p - itemsPerPage < 0 ? Math.max(images.length - itemsPerPage, 0) : p - itemsPerPage));

  return (
    <section className="bg-[#fff0f4] pt-28 pb-16">
      {/* ↑ pt-28 FIXES NAVBAR COLLISION */}

      <div className="max-w-7xl mx-auto px-4">

        {/* ================= TITLE ================= */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-[#631529]">Our Gallery</h2>
          <div className="h-1 w-28 mx-auto bg-gradient-to-r from-[#631529] to-pink-300 mt-3 rounded-full" />
        </div>

        {/* ================= CATEGORY ================= */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => {
                setCategory(c.key);
                setIndex(0);
              }}
              className={`px-6 py-2 rounded-full font-semibold transition
                ${
                  category === c.key
                    ? "bg-[#631529] text-white shadow-lg"
                    : "bg-white text-[#631529] border border-[#631529]"
                }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* ================= VIEW TOGGLE ================= */}
        <div className="flex justify-center gap-3 mb-8">
          <button
            onClick={() => setView("carousel")}
            className={`px-5 py-2 rounded-full flex gap-2 items-center
              ${view === "carousel" ? "bg-[#631529] text-white" : "bg-white border"}`}
          >
            <Images size={18} /> Carousel
          </button>

          <button
            onClick={() => setView("grid")}
            className={`px-5 py-2 rounded-full flex gap-2 items-center
              ${view === "grid" ? "bg-[#631529] text-white" : "bg-white border"}`}
          >
            <LayoutGrid size={18} /> Gallery
          </button>
        </div>

        {/* ================= CAROUSEL ================= */}
        {view === "carousel" && (
          <div className="relative">
            <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow">
              <ChevronLeft />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
              {visible.map((img, i) => (
                <div key={i} className="bg-white p-3 rounded-2xl shadow">
                  <img src={img} alt="" className="h-56 w-full object-contain rounded-xl" />
                </div>
              ))}
            </div>

            <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow">
              <ChevronRight />
            </button>
          </div>
        )}

        {/* ================= GRID ================= */}
        {view === "grid" && (
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5">
            {images.map((img, i) => (
              <div key={i} className="mb-5 bg-white p-3 rounded-2xl shadow">
                <img src={img} alt="" className="rounded-xl w-full" />
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}