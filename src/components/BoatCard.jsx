import { FaHeart, FaStar } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { GiIsland } from "react-icons/gi";
import guide from "../assets/images/boats/boatGuide.svg";

const featureIconMap = {
  "Entering the island": {
    icon: <GiIsland className="w-4 h-4 sm:w-5 sm:h-5" />,
    label: "Entering the island included",
  },
  Guide: {
    icon: <img src={guide} alt="Tour guide included" className="w-4 h-4 sm:w-5 sm:h-5" />,
    label: "Tour guide included",
  },
};

const tagStyleMap = {
  "Most Booked": "bg-white text-[#66CB63]",
};

export default function BoatCard({ boat }) {
  return (
    <article
      aria-labelledby={`boat-${boat.id}-title`}
      className="
        bg-white
        rounded-2xl
        shadow-xl
        overflow-hidden
        w-[300px]
        sm:w-[340px]
        lg:w-[402px]
        flex
        flex-col
      "
    >
      <div className="relative">
        <img
          src={boat.image}
          alt={`${boat.title} boat in the Red Sea`}
          className="h-[200px] sm:h-[220px] lg:h-[240px] w-full object-cover"
        />

        {boat.tag && (
          <span
            className={`
              absolute top-3 left-3 sm:top-4 sm:left-4
              h-[28px] sm:h-[32px]
              min-w-[80px] sm:min-w-[95px]
              px-2
              flex items-center justify-center
              rounded-[24px]
              text-xs sm:text-sm font-medium
              ${tagStyleMap[boat.tag]}
            `}
          >
            {boat.tag}
          </span>
        )}

        <button
          type="button"
          aria-label="Add boat to favorites"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/40 flex items-center justify-center text-white hover:bg-primary transition"
        >
          <FaHeart />
        </button>

        <div
          className="absolute -bottom-4 right-3 sm:right-4 bg-white rounded-full px-3 py-2 flex items-center gap-2 shadow"
          aria-label={`Rated ${boat.rating} out of 5`}
        >
          <FaStar className="text-yellow-400 w-4 h-4" />
          <span className="font-semibold text-sm">{boat.rating}</span>
          <span className="text-pragraph text-[12px]">
            ({boat.reviews})
          </span>
        </div>
      </div>

      <div className="pt-6 sm:pt-8 px-4 sm:px-5 pb-5 flex flex-col flex-1">
        <h3
          id={`boat-${boat.id}-title`}
          className="text-lg sm:text-2xl font-semibold"
        >
          {boat.title}
        </h3>

        <p className="text-pragraph mt-1 text-sm sm:text-base">
          {boat.duration}
        </p>

        <ul className="flex gap-2 sm:gap-3 mt-4 flex-wrap">
          {boat.features.map((feature, index) => {
            const featureData = featureIconMap[feature];

            return (
              <li
                key={index}
                className="flex items-center gap-2 px-3 sm:px-4 py-2 border rounded-full text-pragraph text-sm sm:text-base"
              >
                <span aria-hidden="true">
                  {featureData.icon}
                </span>
                <span>{feature}</span>
              </li>
            );
          })}
        </ul>

        <div className="mt-auto flex items-center gap-3 pt-6">
          <button
            type="button"
            className="flex-1 h-[44px] sm:h-[48px] rounded-full bg-primary text-white font-medium text-sm sm:text-base"
          >
            Find your boat
          </button>

          <button
            type="button"
            aria-label="Share boat"
            className="w-[44px] h-[44px] sm:w-[48px] sm:h-[48px] rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition flex items-center justify-center"
          >
            <FiSend />
          </button>
        </div>
      </div>
    </article>
  );
}