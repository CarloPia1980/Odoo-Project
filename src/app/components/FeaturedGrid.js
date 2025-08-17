import SectionHeader from "./SectionHeader";
import ProductCard from "./ProductCard";

export default function FeaturedGrid() {
  const products = [
    {
      image: "/p/adapter-1.png",
      title: "UGR (BOV) Adaptor 2015–2021 VW Golf",
      price: "162.88",
    },
    {
      image: "/p/adapter-2.png",
      title: "UGR (BOV) Adaptor 2017–2020 Ford…",
      price: "322.44",
    },
  ];
  return (
    <section className="section mt-4 px-4">
      <SectionHeader title="Featured items" />
      <div className="mt-3 grid grid-cols-2 gap-3">
        {products.map((p, i) => (
          <ProductCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
