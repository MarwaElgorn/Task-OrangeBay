import { FaHeart, FaStar, FaHamburger } from "react-icons/fa";
import snorkelingIcon from "../assets/images/trips/Snorkeling.svg";
import lassMartiniIcon from "../assets/images/trips/GlassMartini.svg";

const featureIconMap = {
  "Welcome drink": {
    icon: lassMartiniIcon,
    alt: "Welcome drink included",
  },
  Lunch: {
    icon: null,
    alt: "Lunch included",
  },
  "Lunch & Drink": {
    icon: null,
    alt: "Lunch and drink included",
  },
  Snorkeling: {
    icon: snorkelingIcon,
    alt: "Snorkeling activity",
  },
};

export default function TripCard({ trip }) {
  return (
    <article
      aria-labelledby={`trip-${trip.id}-title`}
      className="bg-white rounded-[24px] shadow-md overflow-hidden w-full sm:w-[320px] lg:w-[385px] flex flex-col min-h-[509px]"
    >
      <div className="relative">
        <img
          src={trip.image}
          alt={`${trip.title} trip in ${trip.location}`}
          className="w-full object-cover h-[180px] sm:h-[220px] lg:h-[240px]"
        />

        <span className="absolute top-4 left-4 bg-white text-primary text-sm font-medium px-4 py-1 rounded-full">
          {trip.tag}
        </span>

        <button
          type="button"
          aria-label="Add trip to favorites"
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 flex items-center justify-center text-white hover:bg-primary transition"
        >
          <FaHeart />
        </button>

        <div
          className="absolute -bottom-5 right-4 bg-white rounded-full px-4 py-2 flex items-center gap-2 shadow"
          aria-label={`Rated ${trip.rating} out of 5`}
        >
          <FaStar className="text-yellow-400" />
          <span className="font-semibold">{trip.rating}</span>
          <span className="text-pragraph text-sm">
            ({trip.reviews} reviews)
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-1 pt-6 px-5 pb-5">
        <h3
          id={`trip-${trip.id}-title`}
          className="text-xl sm:text-2xl font-semibold"
        >
          {trip.title}
        </h3>

        <p className="text-pragraph mt-1 text-sm sm:text-base">
          {trip.time}
        </p>

        <ul className="flex gap-2 mt-4 flex-wrap min-h-[48px]">
          {trip.features.map((feature, index) => {
            const featureData = featureIconMap[feature];

            return (
              <li
                key={index}
                className="flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-2 border rounded-full text-pragraph text-xs sm:text-sm"
              >
                {featureData?.icon ? (
                  <img
                    src={featureData.icon}
                    alt={featureData.alt}
                    className="w-6 h-6"
                  />
                ) : (
                  <FaHamburger aria-hidden="true" />
                )}
                <span>{feature}</span>
              </li>
            );
          })}
        </ul>

        <p className="mt-4 text-pragraph text-sm sm:text-base">
          {trip.people} People • {trip.location}
        </p>

        <div className="mt-auto flex items-end gap-2">
          <span className="text-primary text-2xl sm:text-3xl font-bold">
            {trip.price} €
          </span>
          <span className="text-pragraph text-sm sm:text-lg">
            /person half day
          </span>
        </div>
      </div>
    </article>
  );
}