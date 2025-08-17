// import SectionHeader from "./SectionHeader";

import Image from "next/image";

function Chip({ image, title, price }) {
  return (
    <button className="min-w-[150px] max-w-[150px] rounded-2xl border bg-white border-slate-200 overflow-hidden text-left">
      <div className="relative w-full aspect-[4/3] grid place-items-center bg-white">
        {/* <Image
          src={image}
          alt={title}
          className="p-3 object-contain max-h-full max-w-full"
        /> */}
      </div>
      <div className="p-3">
        <div className="text-[12px] line-clamp-2 min-h-[32px]">{title}</div>
        <div className="mt-1 text-[14px] font-semibold">${price}</div>
      </div>
    </button>
  );
}

export default function BestSellers() {
  const items = [
    {
      image: "/p/best-fuel.png",
      title: "Fuel Factory E1 – 5 Gal. Race Fuel",
      price: "71.85",
    },
    {
      image: "/p/sensor.png",
      title: "Shaverc01 Sensor / Solenoid 2008–2018",
      price: "1,074.80",
    },
    { image: "/p/turbo.png", title: "Turbo Boost Solenoid", price: "165.00" },
  ];
  return (
    <section className="section mt-6 px-4">
      {/* <SectionHeader title="Best sellers" /> */}
      <div className="mt-3 overflow-x-auto no-scrollbar">
        <div className="flex gap-3 pr-4">
          {items.map((it, i) => (
            <Chip key={i} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
}
