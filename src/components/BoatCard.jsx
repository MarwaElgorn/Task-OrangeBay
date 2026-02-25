import { FaHeart, FaStar } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { GiIsland } from "react-icons/gi";
import guide from "../assets/images/boats/boatGuide.svg";

const featureIconMap = {
  "Entering the island": <GiIsland className="w-4 h-4 sm:w-5 sm:h-5" />,
  Guide: <img src={guide} alt="Guide" className="w-4 h-4 sm:w-5 sm:h-5" />,
};

const tagStyleMap = {
  "Most Booked": "bg-white text-[#66CB63]",
};

export default function BoatCard({ boat }) {
  return (
    <div
      className="
        bg-white
        rounded-2xl
        shadow-xl
        overflow-hidden
        w-[300px]
        sm:w-[340px]
        lg:w-[402px]
        h-auto
        lg:h-[478px]
        flex flex-col
      "
    >
      {/* image */}
      <div className="relative">
        <img
          src={boat.image}
          alt={boat.title}
          className="h-[200px] sm:h-[220px] lg:h-[240px] w-full object-cover"
        />

        {/* tag */}
        {boat.tag && (
          <span
            className={`
              absolute top-3 left-3 sm:top-4 sm:left-4
              h-[28px] sm:h-[32px]
              min-w-[80px] sm:min-w-[95px]
              px-2
              flex items-center justify-center gap-[6px]
              rounded-[24px]
              text-xs sm:text-sm font-medium
              ${tagStyleMap[boat.tag]}
            `}
          >
            {boat.tag}
          </span>
        )}

        {/* heart */}
        <button className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/40 flex items-center justify-center text-white hover:bg-primary transition">
          <FaHeart size={18} className="sm:hidden" />
          <FaHeart size={20} className="hidden sm:block" />
        </button>

        {/* rating */}
        <div className="absolute -bottom-4 right-3 sm:right-4 bg-white rounded-full px-3 py-2 flex items-center gap-2 shadow">
          <FaStar className="text-yellow-400 w-4 h-4" />
          <span className="font-semibold text-sm">{boat.rating}</span>
          <span className="text-pragraph text-[12px]">({boat.reviews})</span>
        </div>
      </div>

      {/* content */}
      <div className="pt-6 sm:pt-8 px-4 sm:px-5 pb-5 flex flex-col flex-1">
        <h3 className="text-lg sm:text-2xl font-semibold">{boat.title}</h3>
        <p className="text-pragraph mt-1 text-sm sm:text-base">
          {boat.duration}
        </p>

        {/* features */}
        <div className="flex gap-2 sm:gap-3 mt-4 flex-wrap">
          {boat.features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 border rounded-full text-pragraph text-sm sm:text-base"
            >
              {featureIconMap[feature]}
              {feature}
            </div>
          ))}
        </div>

        {/* buttons */}
        <div className="mt-auto flex items-center gap-3 pt-6">
          <button className="flex-1 h-[44px] sm:h-[48px] rounded-full bg-primary text-white font-medium text-sm sm:text-base">
            Find your boat
          </button>

          <button className="w-[44px] h-[44px] sm:w-[48px] sm:h-[48px] rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition flex items-center justify-center">
            <FiSend size={18} className="sm:hidden" />
            <FiSend size={20} className="hidden sm:block" />
          </button>
        </div>
      </div>
    </div>
  );
}
