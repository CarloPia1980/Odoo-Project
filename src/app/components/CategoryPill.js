import Image from "next/image";
export default function CategoryPill({ icon, label }) {
  return (
    <button className="flex flex-col items-center w-[84px]">
      <span className="relative w-14 h-14 rounded-full bg-white border border-slate-200 shadow-card">
        <Image src={icon} alt="" fill className="object-contain p-3" />
      </span>
      <span className="mt-2 text-[12px] text-center leading-tight">
        {label}
      </span>
    </button>
  );
}
