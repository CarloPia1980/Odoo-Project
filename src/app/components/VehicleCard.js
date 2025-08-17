export default function VehicleCard({
  image,
  title,
  subtitle,
  cta = "Shop now",
}) {
  return (
    <a className="block mx-4 mb-3 overflow-hidden rounded-2xl">
      <div className="relative w-full aspect-[16/9]">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute left-3 bottom-3 text-white">
          <div className="text-[11px] uppercase tracking-wide opacity-90">
            {subtitle}
          </div>
          <div className="text-[18px] font-semibold leading-tight">{title}</div>
          <span className="mt-1 inline-block rounded-full bg-white/90 text-black px-2 py-1 text-[12px]">
            {cta}
          </span>
        </div>
      </div>
    </a>
  );
}
