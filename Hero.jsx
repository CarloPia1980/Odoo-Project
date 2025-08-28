import { useRef, useState, useEffect } from "react";

export default function Hero() {
  const slides = [
    {
      id: "bov",
      img: "/banners/hero-1.jpg",
      eyebrow: "BLOW OFF",
      title: "VALVES",
      caption: 'We make your car go "psshh".',
    },
    {
      id: "intake",
      img: "/banners/hero-2.jpg",
      eyebrow: "COLD AIR",
      title: "INTAKES",
      caption: "More flow. More response.",
    },
    {
      id: "fluids",
      img: "/banners/hero-3.jpg",
      eyebrow: "PERFORMANCE",
      title: "FLUIDS",
      caption: "Protect and perform.",
    },
    {
      id: "exhaust",
      img: "/banners/hero-4.jpg",
      eyebrow: "HIGH FLOW",
      title: "EXHAUSTS",
      caption: "Sound and performance combined.",
    },
  ];

  const scrollRef = useRef(null);
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Track active slide
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const idx = Math.round(el.scrollLeft / el.clientWidth);
      setActive(idx);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  // Smooth auto-play
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      const nextIndex = (active + 1) % slides.length;
      const el = scrollRef.current;
      if (!el) return;
      el.scrollTo({
        left: nextIndex * el.clientWidth,
        behavior: "smooth",
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, active, slides.length]);

  return (
    <section className="pt-2">
      {/* Scrollable wrapper */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {slides.map((s, idx) => (
          <div key={s.id} className="relative shrink-0 w-full snap-start px-4">
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl shadow-sm">
              {/* Replaces next/image fill */}
              <img
                src={s.img}
                alt={`${s.eyebrow} ${s.title}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out"
                loading={idx === 0 ? "eager" : "lazy"}
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
              <div className="absolute left-4 right-4 bottom-4 text-white">
                <span className="inline-block rounded-md bg-brand px-2 py-1 text-[20px] font-extrabold leading-none tracking-tight text-black">
                  {s.eyebrow}
                </span>
                <h2 className="mt-1 text-[30px] font-extrabold leading-none tracking-[-0.01em] uppercase">
                  {s.title}
                </h2>
                {s.caption && (
                  <p className="mt-1 text-[12px] leading-snug text-white/90">
                    {s.caption}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination dots outside */}
      <div className="flex justify-center gap-2 mt-3">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`transition-all duration-300 rounded-full ${
              active === idx ? "w-2.5 h-2.5 bg-brand" : "w-2 h-2 bg-neutral-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
