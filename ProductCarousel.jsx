import React from "react";

export default function ProductCarousel({ items, small = false }) {
  return (
    <div className="flex gap-3 overflow-x-auto no-scrollbar px-0.5">
      {items.map((p) => (
        <ProductCard key={p.id} product={p} small={small} />
      ))}
    </div>
  );
}

function ProductCard({ product, small }) {
  return (
    <article className={`card shrink-0 ${small ? "w-36" : "w-44"} p-2`}>
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="h-24 w-full object-cover rounded-lg"
          loading="lazy"
        />
        {product.badge && (
          <span className="absolute top-1 left-1 text-[10px] bg-black/80 text-white px-1.5 py-[2px] rounded-md">
            {product.badge}
          </span>
        )}
      </div>
      <h4 className="mt-2 text-[12px] font-medium line-clamp-2">
        {product.title}
      </h4>
      <p className="mt-1 font-semibold">${product.price}</p>
    </article>
  );
}
