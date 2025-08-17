import VehicleCard from "./VehicleCard";
import SectionHeader from "./SectionHeader";

export default function VehicleSection() {
  const vehicles = [
    {
      image: "/vehicles/camaro.jpg",
      title: "Z06 / ZL1 (E2)",
      subtitle: "CHEVROLET CAMARO 2016–2024",
    },
    {
      image: "/vehicles/mustang.jpg",
      title: "GT Dark Horse",
      subtitle: "MUSTANG 2024–2025",
    },
    {
      image: "/vehicles/jeep.jpg",
      title: "JL RUBICON (E3)",
      subtitle: "JEEP WRANGLER 2018–2024",
    },
    {
      image: "/vehicles/f150.jpg",
      title: "F‑150 RAPTOR",
      subtitle: "F150 2015–2023",
    },
  ];
  return (
    <section className="mt-6">
      <SectionHeader className="section" title="Shop by vehicle" right={null} />
      <div className="mt-3 space-y-3">
        {vehicles.map((v, i) => (
          <VehicleCard key={i} {...v} />
        ))}
      </div>
    </section>
  );
}
