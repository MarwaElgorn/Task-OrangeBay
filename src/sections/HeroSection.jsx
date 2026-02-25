import React from "react";
import bghero from "../assets/images/hero/orangebay-header.png";

export default function HeroSection() {
  return (
    <section
      aria-label="Hero section"
      className="
        relative
        min-h-screen
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
        <h1 className="text-6xl font-bold leading-[140%]">
          Explore the Red Sea Like Never Before
        </h1>

        <form
          role="search"
          className="mt-8 w-full max-w-[828px] bg-white rounded-full flex items-center px-6 py-4 shadow-lg"
        >
          <label htmlFor="search" className="sr-only">
            Search for trips and boats
          </label>

          <input
            id="search"
            type="text"
            placeholder="Search for Trips, Boats"
            className="flex-1 text-[18px] leading-[20px] text-gray-600 outline-none bg-transparent"
          />

          <button
            type="submit"
            className="h-[40px] px-6 rounded-full bg-primary text-white text-[16px] font-medium"
          >
            Search
          </button>
        </form>

        <p className="mt-6 text-[24px] text-white/90">
          From private boats to island trips, your sea adventure starts here.
        </p>

        <button
          type="button"
          className="mt-8 h-[56px] w-[385px] rounded-full bg-primary text-white text-[24px]"
        >
          Find Your Perfect Match
        </button>
      </div>
    </section>
  );
}