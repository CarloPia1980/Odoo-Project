import React from "react";

export default function SmallProductCard({
  title,
  subtitle,
  price,
  image,
  badges = [],
}) {
  return (
    <article className="card p-2 flex gap-2">
      <img
        src={image}
        className="w-24 h-20 object-cover rounded-lg"
        alt={title}
        loading="lazy"
      />
      <div className="flex-1">
        <div className="flex flex-wrap gap-1 mb-1">
          {badges.map((b) => (
            <span
              key={b}
              className="text-[10px] px-2 py-[2px] rounded-full bg-neutral-100"
            >
              {b}
            </span>
          ))}
        </div>
        <h4 className="text-[13px] font-semibold leading-tight">{title}</h4>
        {subtitle && <p className="text-[11px] text-neutral-500">{subtitle}</p>}
        <p className="mt-1 font-semibold">${price}</p>
      </div>
    </article>
  );
}
