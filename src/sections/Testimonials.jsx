import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import ReviewCard from "../components/ReviewCard";
import { reviews } from "../data/reviews";

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold">What Our Clients Say About Us</h2>
        <p className="mt-2 text-gray-500">
          Hear from our satisfied customers and see why they love our services
        </p>

        <div className="mt-12">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={32}
            slidesPerView={1.2}
            centeredSlides
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
            }}
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <ReviewCard review={review} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
