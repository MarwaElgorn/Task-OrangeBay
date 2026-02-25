import { FaHeart, FaStar, FaGlassMartini, FaHamburger } from "react-icons/fa";
import snorkelingIcon from "../assets/images/trips/Snorkeling.svg";
import lassMartiniIcon from "../assets/images/trips/GlassMartini.svg";

const featureIconMap = {
  "Welcome drink": (
    <img src={lassMartiniIcon} alt="Welcome drink" className="w-8 h-8" />
  ),
  Lunch: <FaHamburger size={24} />,
  "Lunch & Drink": <FaHamburger size={24} />,
  Snorkeling: <img src={snorkelingIcon} alt="Snorkeling" className="w-8 h-8" />,
};

export default function TripCard({ trip }) {
  return (
    // card container: responsive width, equal-height using min-h, flex-col for vertical layout
    <div className="bg-white rounded-[24px] shadow-md overflow-hidden w-full sm:w-[320px] lg:w-[385px]  flex flex-col min-h-[509px]">
      {/* image wrapper */}
      <div className="relative">
        <img
          src={trip.image}
          alt={trip.title}
          className="w-full object-cover h-[180px] sm:h-[220px] lg:h-[240px]"
        />

        {/* tag */}
        <span className="absolute top-4 left-4 bg-white text-primary text-sm font-medium px-4 py-1 rounded-full">
          {trip.tag}
        </span>

        {/* heart */}
        <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 flex items-center justify-center text-white hover:bg-primary transition">
          <FaHeart />
        </button>

        {/* rating */}
        <div className="absolute -bottom-5 right-4 bg-white rounded-full px-4 py-2 flex items-center gap-2 shadow">
          <FaStar className="text-yellow-400" />
          <span className="font-semibold">{trip.rating}</span>
          <span className="text-pragraph text-sm">
            ({trip.reviews} reviews)
          </span>
        </div>
      </div>

      {/* content area: flex-1 ensures price section sticks to bottom */}
      <div className="flex flex-col flex-1 pt-6 px-5 pb-5">
        <h3 className="text-xl sm:text-2xl font-semibold">{trip.title}</h3>
        <p className="text-pragraph mt-1 text-sm sm:text-base">{trip.time}</p>

        {/* features; reserve vertical space to avoid shift when some cards have more items */}
        <div className="flex gap-2 mt-4 flex-wrap min-h-[48px]">
          {trip.features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-2 border rounded-full text-pragraph text-xs sm:text-sm"
            >
              {featureIconMap[feature]}
              {feature}
            </div>
          ))}
        </div>

        <p className="mt-4 text-pragraph text-sm sm:text-base">
          {trip.people} People &nbsp; • &nbsp; {trip.location}
        </p>

        {/* price section always at bottom */}
        <div className="mt-auto flex items-end gap-2">
          <span className="text-primary text-2xl sm:text-3xl font-bold">
            {trip.price} €
          </span>
          <span className="text-pragraph text-sm sm:text-lg">
            /person half day
          </span>
        </div>
      </div>
    </div>
  );
}
