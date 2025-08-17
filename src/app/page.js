import Header from "./components/Header";
import Hero from "./components/Hero";
import CategoriesRow from "./components/CategoriesRow";
import FeaturedGrid from "./components/FeaturedGrid";
import PartsFinder from "./components/PartsFinder";
import NewArrivals from "./components/NewArrivals";
import BestSellers from "./components/BestSellers";
import PromoBanner from "./components/PromoBanner";
import FluidsRow from "./components/FluidsRow";
import WheelsTires from "./components/WheelsTires";
import VehicleSection from "./components/VehicleSection";
import TwoUpTiles from "./components/TwoUpTiles";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <CategoriesRow />
      <FeaturedGrid />
      <PartsFinder />
      <NewArrivals />
      <BestSellers />
      <PromoBanner />
      <FluidsRow />
      <WheelsTires />
      <VehicleSection />
      <TwoUpTiles />
      <Footer />
    </>
  );
}
