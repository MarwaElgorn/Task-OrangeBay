import CategoryCard from "../components/CategoryCard";
import { tripCategories } from "../data/categories";

export default function TripCategories() {
  return (
    <section className="px-4 sm:px-8 lg:px-[120px] py-16">
      <h2 className="text-3xl font-semibold">Trip Categories</h2>
      <p className="text-pragraph font-weight-[400] text-[20px] leading-[32px] mt-2">
        Explore trips that suit every mood and adventure
      </p>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="grid grid-rows-2 gap-6">
          <CategoryCard item={tripCategories[0]} />
          <CategoryCard item={tripCategories[1]} />
        </div>

        <div className="grid grid-rows-[2fr_1fr] gap-6">
          <CategoryCard item={tripCategories[2]} />
          <CategoryCard item={tripCategories[3]} />
        </div>

        <div className="grid grid-rows-[1fr_2fr] gap-6">
          <CategoryCard item={tripCategories[4]} />
          <CategoryCard item={tripCategories[5]} />
        </div>
      </div>
    </section>
  );
}
