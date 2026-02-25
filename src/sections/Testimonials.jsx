import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { FiChevronRight ,FiChevronLeft} from "react-icons/fi";
import { testimonials } from "../data/reviews";
import ReviewCard from "../components/ReviewCard";

export default function TestimonialsSection() {
  const swiperRef = useRef(null);

  return (
    <section className="py-16 px-4 md:px-8 lg:px-[120px]">
      <div className="max-w-[1680px] mx-auto">
<div className="mb-10 sm:mb-12 lg:mb-[56px] text-center lg:text-left">
  <h2 className="text-2xl sm:text-3xl lg:text-3xl font-semibold">
    What Our Clients Say About Us
  </h2>

  <p className="mt-2 text-base sm:text-lg lg:text-[20px] leading-7 sm:leading-8 text-gray-500">
    Hear from our satisfied customers and see why they love our services
  </p>
</div>
  <Swiper
  modules={[Pagination]}
  loop
  spaceBetween={40}
  breakpoints={{
    0: {
      slidesPerView: 1,
      centeredSlides: false,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2,
      centeredSlides: false,
      spaceBetween: 24,
    },
    1280: {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 40,
    },
  }}
  pagination={{
    clickable: true,
    el: ".custom-pagination",
    bulletClass: "custom-bullet",
    bulletActiveClass: "custom-bullet-active",
  }}
  onSwiper={(swiper) => (swiperRef.current = swiper)}
  className="max-w-[1680px] mx-auto"
>
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            {({ isActive, isPrev, isNext }) => (
              <div
                className={`transition-all duration-300
                  ${
                    isActive
                      ? "scale-125 z-10"
                      : isPrev || isNext
                      ? "scale-100 "
                      : "scale-90 "
                  }
                `}
              >
                <ReviewCard {...item} />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
{/* controllers */}
<div className="mt-20 flex items-center justify-center">
  <div className="flex items-center gap-6">
    {/* left arrow */}
<button
  onClick={() => swiperRef.current.slidePrev()}
  className="w-[36px] h-[36px] flex items-center justify-center text-[#7B7B7B] font-bold hover:text-gray-600 transition"
>
  <FiChevronLeft size={32} />
</button>

    {/* pagination */}
    <div className="custom-pagination flex items-center gap-3" />

    {/* right arrow */}
<button
  onClick={() => swiperRef.current.slideNext()}
  className="w-[36px] h-[36px] flex items-center justify-center text-[#7B7B7B] font-bold hover:text-gray-600 transition"
>
  <FiChevronRight size={32} />
</button>
  </div>
</div>
</div>
    </section>
  );
}