import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import TripCard from "../components/TripCard";
import { trips } from "../data/trips";

export default function LuxuryTrips() {
  return (
    <section
      aria-labelledby="luxury-trips-title"
      className="py-16 px-4 md:px-8 lg:px-[120px]"
    >
      <div className="max-w-[1680px] mx-auto">
        <h2
          id="luxury-trips-title"
          className="text-3xl font-semibold"
        >
          Luxury Trips Near You
        </h2>

        <p className="text-pragraph text-[20px] leading-[32px] mt-2">
          Sail, relax, and enjoy unforgettable moments
        </p>

        <div className="mt-8">
          <Swiper
            spaceBetween={24}
            grabCursor
            slidesPerView="auto"
            breakpoints={{
              0: { slidesPerView: 1.1 },
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.2 },
              1280: { slidesPerView: 4.5 },
            }}
            aria-roledescription="carousel"
          >
            {trips.map((trip) => (
              <SwiperSlide
                key={trip.id}
                role="group"
                aria-label={`${trip.title} trip`}
                className="!w-[280px] sm:!w-[320px] lg:!w-[385px]"
              >
                <TripCard trip={trip} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}