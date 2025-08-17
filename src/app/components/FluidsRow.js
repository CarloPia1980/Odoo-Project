import SectionHeader from "./SectionHeader";
import ProductCard from "./ProductCard";
export default function FluidsRow() {
  const items = [
    { image: "/p/fluid-dexron.png", title: "MOTUL DEXRON III", price: "10.75" },
    { image: "/p/fluid-motul-1.png", title: "MOTUL ATF VI", price: "17.91" },
    { image: "/p/fluid-motul-2.png", title: "MOTUL ATF II", price: "12.40" },
  ];
  return (
    <section className="section mt-6 px-4">
      <SectionHeader title="Automotive fluids" right="See All" />
      <div className="mt-3 grid grid-cols-3 gap-3">
        {items.map((p, i) => (
          <ProductCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
