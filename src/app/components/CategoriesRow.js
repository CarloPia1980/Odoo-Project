import SectionHeader from "./SectionHeader";
import CategoryPill from "./CategoryPill";

export default function CategoriesRow() {
  const cats = [
    { icon: "/cats/accessories.png", label: "Accessories" },
    { icon: "/cats/air-intake.png", label: "Air intake Systems" },
    { icon: "/cats/apparel.png", label: "Apparel & Merch" },
    { icon: "/cats/fluids.png", label: "Automotive Fluids" },
  ];
  return (
    <section className="section mt-4 px-4">
      <SectionHeader title="Categories" />
      <div className="mt-3 overflow-x-auto no-scrollbar">
        <div className="flex gap-3 pr-4">
          {cats.map((c) => (
            <CategoryPill key={c.label} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
