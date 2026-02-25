import React from "react";
import bghero from "../assets/images/hero/orangebay-header.png";

export default function HeroSection() {
  return (
    <section
      className="
        relative
        h-[100vh]
        w-full
        bg-cover
        bg-center
        flex
        items-center
        justify-center
        text-center
      "
      style={{
        backgroundImage: `url(${bghero})`,
      }}
    >
      <div className="relative z-10 max-w-5xl px-4 text-white flex flex-col items-center">
        <h1 className="text-6xl font-bold leading-[140%] text-center">
          Explore the Red Sea Like Never Before
        </h1>

        <div className="mt-8 w-full max-w-[828px] bg-white rounded-full flex items-center px-6 py-4 shadow-lg">
          <input
            type="text"
            placeholder="Search for Trips, Boats"
            className="flex-1 text-[18px] leading-[20px]  text-gray-500 outline-none bg-transparent"
          />

          <button className="h-[40px] px-6 rounded-full bg-primary text-white text-[16px] leading-none font-medium">
            Search
          </button>
        </div>

        <p className="mt-6 text-[24px] text-white/90 text-center">
          From private boats to island trips, your sea adventure starts here.
        </p>

        <button className="mt-8 h-[56px] w-[385px] px-8 rounded-full bg-primary text-white text-[24px] leading-[32px] ">
          Find Your Perfect Match
        </button>
      </div>
    </section>
  );
}
