"use client";
import { useCallback, useEffect, useRef, useState } from "react";

export default function MobileSlider({
  items = [],
  autoPlay = true,
  interval = 4000,
  card = false,
  dots = true,
  arrows = false,
  ariaLabel = "carousel",
}) {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const count = items.length;

  const snapTo = useCallback((i) => {
    const el = trackRef.current;
    const child = el?.children?.[i];
    if (child) child.scrollIntoView({ behavior: "smooth", inline: "start" });
  }, []);

  // track active slide
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => {
      const i = Math.round(el.scrollLeft / el.clientWidth);
      setIndex(i);
    };
    let id;
    const handler = () => {
      cancelAnimationFrame(id);
      id = requestAnimationFrame(onScroll);
    };
    el.addEventListener("scroll", handler, { passive: true });
    return () => {
      el.removeEventListener("scroll", handler);
      cancelAnimationFrame(id);
    };
  }, []);

  // autoplay (pause on touch/hover)
  // useEffect(() => {
  //   if (!autoPlay || count <= 1) return;
  //   const el = trackRef.current;
  //   let paused = false;
  //   const pause = () => (paused = true);
  //   const resume = () => (paused = false);
  //   el.addEventListener("pointerdown", pause);
  //   el.addEventListener("pointerup", resume);
  //   el.addEventListener("mouseenter", pause);
  //   el.addEventListener("mouseleave", resume);
  //   const id = setInterval(() => {
  //     if (!paused) snapTo((index + 1) % count);
  //   }, interval);
  //   return () => {
  //     clearInterval(id);
  //     el.removeEventListener("pointerdown", pause);
  //     el.removeEventListener("pointerup", resume);
  //     el.removeEventListener("mouseenter", pause);
  //     el.removeEventListener("mouseleave", resume);
  //   };
  // }, [index, count, autoPlay, interval, snapTo]);

  const goPrev = () => snapTo(Math.max(0, index - 1));
  const goNext = () => snapTo(Math.min(count - 1, index + 1));

  return (
    <div className="relative" role="region" aria-label={ariaLabel}>
      <div
        ref={trackRef}
        className="no-scrollbar flex overflow-x-auto snap-x snap-mandatory"
        style={{ scrollBehavior: "smooth" }}
      >
        {items.map((node, i) => (
          <div key={i} className="snap-start shrink-0 w-full">
            <div
              className={
                card
                  ? "mx-4 rounded-2xl border border-slate-200 bg-white overflow-hidden"
                  : ""
              }
            >
              {node}
            </div>
          </div>
        ))}
      </div>

      {arrows && count > 1 && (
        <>
          <button
            aria-label="Previous"
            onClick={goPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/85 px-3 py-2 border border-slate-200"
          >
            ‹
          </button>
          <button
            aria-label="Next"
            onClick={goNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/85 px-3 py-2 border border-slate-200"
          >
            ›
          </button>
        </>
      )}

      {dots && count > 1 && (
        <div className="absolute -bottom-3 left-0 right-0 flex justify-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => snapTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                i === index ? "w-7 bg-[var(--ink)]" : "w-2.5 bg-slate-300"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
