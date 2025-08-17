import ProductCard from "./ProductCard";
import MobileSlider from "./MobileSlider";
import SectionHeader from "./SectionHeader";

export default function NewArrivals() {
  const products = [
    {
      image: "/p/exhaust-clamp.png",
      title: "Exhaust Clamp (2.5 inch)",
      price: "32.57",
    },
    {
      image: "/p/simpson-hybrid.png",
      title: "Simpson Hybrid Pro",
      price: "1074.80",
    },
    { image: "/p/turbo.png", title: "Turbo Boost Solenoid", price: "165.00" },
  ];
  return (
    <section className="section mt-6 pb-6 px-4">
      <SectionHeader title="New arrivals" />
      <MobileSlider
        card
        autoPlay={false}
        dots
        items={products.map((p, i) => (
          <div key={i}>
            <ProductCard {...p} />
          </div>
        ))}
      />
    </section>
  );
}
