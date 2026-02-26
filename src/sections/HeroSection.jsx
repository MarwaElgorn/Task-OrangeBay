import React from "react";
import bghero from "../assets/images/hero/orangebay-header.png";

export default function HeroSection() {
  return (
    <section
      aria-label="Hero section"
      className="
        relative
        min-h-[100svh]
        w-full
        bg-cover
        bg-center
        flex
        items-center
        justify-center
        text-center
        px-4
      "
      style={{
        backgroundImage: `url(${bghero})`,
      }}
    >
      <div className="relative z-10 max-w-5xl text-white flex flex-col items-center">

        <h1
          className="
            font-bold
            leading-tight
            text-2xl
            sm:text-3xl
            md:text-5xl
            lg:text-6xl
          "
        >
          Explore the Red Sea Like Never Before
        </h1>

        <form
          role="search"
          className="
            mt-6
            sm:mt-8
            w-full
            max-w-[828px]
            bg-white
            rounded-full
            flex
            items-center
            px-4
            sm:px-6
            py-3
            sm:py-4
            shadow-lg
          "
        >
          <label htmlFor="search" className="sr-only">
            Search for trips and boats
          </label>

          <input
            id="search"
            type="text"
            placeholder="Search for Trips, Boats"
            className="
              flex-1
              text-sm
              sm:text-base
              md:text-lg
              text-gray-600
              outline-none
              bg-transparent
            "
          />

          <button
            type="submit"
            className="
              h-9
              sm:h-10
              px-4
              sm:px-6
              rounded-full
              bg-primary
              text-white
              text-sm
              sm:text-base
              font-medium
              whitespace-nowrap
            "
          >
            Search
          </button>
        </form>

        <p
          className="
            mt-4
            sm:mt-6
            max-w-3xl
            text-sm
            sm:text-base
            md:text-lg
            lg:text-xl
            text-white/90
          "
        >
          From private boats to island trips, your sea adventure starts here.
        </p>

        <button
          type="button"
          className="
            mt-6
            sm:mt-8
            h-12
            sm:h-14
            w-full
            max-w-[385px]
            rounded-full
            bg-primary
            text-white
            text-base
            sm:text-lg
            md:text-xl
          "
        >
          Find Your Perfect Match
        </button>

      </div>
    </section>
  );
}