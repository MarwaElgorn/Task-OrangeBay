import HeroSection from "../sections/HeroSection";
import LuxuryTrips from "../sections/LuxuryTrips";
import RentBoat from "../sections/RentBoat";
import Testimonials from "../sections/Testimonials";
import TripCategories from "../sections/TripCategories";

export default function Home() {
  return (
    <>
      <HeroSection />
      <LuxuryTrips />
      <TripCategories />
      <RentBoat />
      <Testimonials />
    </>
  );
}
