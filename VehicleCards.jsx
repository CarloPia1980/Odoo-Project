import React from "react";

export default function VehicleCards({ items }) {
  return (
    <div className="space-y-3">
      {items.map((v) => (
        <article key={v.id} className="card overflow-hidden">
          <div className="flex items-center justify-between px-3 py-2">
            <div>
              <p className="text-[10px] text-neutral-500">{v.year}</p>
              <h4 className="font-semibold text-[13px]">{v.title}</h4>
              <p className="text-[10px] text-neutral-500">{v.trim}</p>
            </div>
            <span className="text-[10px] px-2 py-1 rounded-full bg-brand/10 text-brand">
              Shop parts
            </span>
          </div>
          <img
            src={v.image}
            alt={v.title}
            className="h-28 w-full object-cover"
            loading="lazy"
          />
        </article>
      ))}
    </div>
  );
}
