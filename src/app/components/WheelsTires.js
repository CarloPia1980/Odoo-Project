import Image from "next/image";
import SectionHeader from "./SectionHeader";

function TireCard({ image, title, price }) {
  return (
    <button className="w-[160px] rounded-2xl border border-slate-200 bg-white overflow-hidden">
      <div className="relative w-full aspect-square grid place-items-center">
        <Image
          src={image}
          alt={title}
          className="object-contain p-3 max-w-full max-h-full"
          height={160}
          width={160}
        />
      </div>
      <div className="p-3">
        <div className="text-[12px] line-clamp-2 min-h-[32px]">{title}</div>
        <div className="mt-1 text-[14px] font-semibold">${price}</div>
      </div>
    </button>
  );
}

export default function WheelsTires() {
  const items = [
    {
      image: "/p/tire-hoosier.png",
      title: "Hoosier Circuit Racing D.O.T. Radial",
      price: "71.85",
    },
    {
      image: "/p/tire-mickey-1.png",
      title: "Mickey Thompson ET Street R 305/35R18",
      price: "1,074.80",
    },
    {
      image: "/p/tire-mickey-2.png",
      title: "Mickey Thompson 275/60R15",
      price: "165.00",
    },
  ];
  return (
    <section className="section mt-6 px-4">
      <SectionHeader title="wheels & tires" right="See All" />
      <div className="mt-3 overflow-x-auto no-scrollbar">
        <div className="flex gap-3 pr-4">
          {items.map((t, i) => (
            <TireCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
