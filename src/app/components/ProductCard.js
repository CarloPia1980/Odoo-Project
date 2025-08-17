import Image from "next/image";
export default function ProductCard({
  image,
  title,
  price,
  compareAt,
  badge,
  stock = "in",
}) {
  const inStock = stock === "in";
  return (
    <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-card">
      <div className="relative w-full aspect-square">
        <Image src={image} alt={title} fill className="object-contain p-3" />
        {badge && (
          <span className="absolute left-2 top-2 text-[11px] px-2 py-1 rounded-full bg-brand text-black font-semibold">
            {badge}
          </span>
        )}
        <button
          aria-label="Wishlist"
          className="absolute right-2 top-2 w-8 h-8 rounded-full bg-white/90 border grid place-items-center"
        >
          ♡
        </button>
      </div>
      <div className="p-3">
        <h3 className="text-[13px] font-medium line-clamp-2 min-h-[34px]">
          {title}
        </h3>
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-[15px] font-semibold">${price}</span>
            {compareAt && (
              <span className="text-[12px] text-slate-400 line-through">
                ${compareAt}
              </span>
            )}
          </div>
          <div className="flex items-center gap-1 text-[12px]">
            <span
              className={`w-2 h-2 rounded-full ${
                inStock ? "bg-emerald-500" : "bg-rose-500"
              }`}
            />
            <span className="text-slate-500">
              {inStock ? "In stock" : "Out"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
