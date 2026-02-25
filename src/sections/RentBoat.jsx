import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import BoatCard from "../components/BoatCard";
import { boats } from "../data/boats";

export default function RentBoat() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-[120px]">
      <div className="max-w-[1680px] mx-auto">
        <h2 className="text-3xl font-semibold">
          Rent a Boat for Your Next Sea Trip
        </h2>
        <p className="text-pragraph font-weight-[400] text-[20px] leading-[32px] mt-2">
          Private and group trips tailored to your journey{" "}
        </p>

        <div className="mt-8">
        <Swiper
  spaceBetween={24}
  grabCursor
  slidesPerView="auto"
  breakpoints={{
    0: {
      slidesPerView: 1.1,
    },
    640: {
      slidesPerView: 1.6,
    },
    768: {
      slidesPerView: 2.2,
    },
    1024: {
      slidesPerView: 3.2,
    },
    1280: {
      slidesPerView: 4,
    },
  }}
>
            {boats.map((boat) => (
          <SwiperSlide
  key={boat.id}
  className="!w-[300px] sm:!w-[340px] lg:!w-[402px]"
>
  <BoatCard boat={boat} />
</SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
