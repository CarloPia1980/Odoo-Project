import React from "react";

export default function ProductMasonry() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto w-full px-4 py-6">
        {/* Equal rows, equal gaps, left spans 2 rows */}
        <div className="grid grid-cols-2 gap-[12px] [grid-template-rows:228px_228px]">
          {/* LEFT — BRIDE seat (spans two rows) */}
          <article className="row-span-2 rounded-[26px] bg-[#F8DFB3] ring-1 ring-black/10 shadow-sm p-[12px] flex flex-col">
            {/* Heading */}
            <header className="select-none">
              <h3 className="font-extrabold leading-[1.04] tracking-tight text-[24px]">
                BRIDE VIOS III BLK
              </h3>
              <p className="text-[12px] text-black/70 -mt-[2px]">Low Max</p>
            </header>

            {/* Image: anchored lower-left, generous scale */}
            <div className="relative flex-1 my-[4px] min-h-0">
              {/* Replace src/alt below */}
              {/* <img src="/seat.png" alt="Racing seat"
                                 className="object-contain translate-y-[8px] -translate-x-[6px] scale-[1.02] origin-bottom-left" /> */}
            </div>

            {/* Description */}
            <p className="text-[12px] leading-[1.25] text-black/90">
              Recaro Logo Black Suede With Red Stitch Racing Seat
            </p>

            {/* Price + CTA */}
            <div className="mt-[8px] flex items-center justify-between">
              <div className="font-extrabold tracking-tight text-[24px]">
                $ 537.40
              </div>
              <a
                href="#"
                className="inline-flex h-[28px] items-center gap-[6px] rounded-full bg-white px-[10px] text-[11px] font-medium text-gray-900 ring-1 ring-black/10 shadow-sm hover:ring-black/20 active:scale-[0.985]"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M6 6h15l-1.5 8.5a2 2 0 0 1-2 1.6H9.1a2 2 0 0 1-2-1.6L5 3H2"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="9.5" cy="20" r="1.05" fill="currentColor" />
                  <circle cx="17.5" cy="20" r="1.05" fill="currentColor" />
                </svg>
                Add to cart
              </a>
            </div>
          </article>

          {/* TOP-RIGHT — Intake manifold */}
          <article className="rounded-[26px] bg-[#DDEAFF] ring-1 ring-black/10 shadow-sm p-[12px] flex flex-col">
            <header className="mb-[2px] select-none">
              <h3 className="font-extrabold leading-[1.08] tracking-tight text-[20px]">
                LS1 Black Intake
                <br />
                Manifold
              </h3>
            </header>

            {/* Image: centered, slightly high, bigger presence */}
            <div className="relative flex-1 my-[2px] min-h-0">
              {/* <img src="/intake.png" alt="Black intake manifold"
                                 className="object-contain -translate-y-[6px] scale-[1.06] origin-center" /> */}
            </div>

            <p className="text-[11px] leading-[1.25] text-black/80">
              EFI Fabricated Intake Manifold with Fuel Rails and Throttle Body
              15° Throttle Opening Short
            </p>

            <div className="mt-[8px] flex items-center justify-between">
              <div className="font-extrabold tracking-tight text-[24px]">
                $ 653.57
              </div>
              <a
                href="#"
                className="inline-flex h-[28px] items-center gap-[6px] rounded-full bg-white px-[10px] text-[11px] font-medium text-gray-900 ring-1 ring-black/10 shadow-sm hover:ring-black/20 active:scale-[0.985]"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M6 6h15l-1.5 8.5a2 2 0 0 1-2 1.6H9.1a2 2 0 0 1-2-1.6L5 3H2"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="9.5" cy="20" r="1.05" fill="currentColor" />
                  <circle cx="17.5" cy="20" r="1.05" fill="currentColor" />
                </svg>
                Add to cart
              </a>
            </div>
          </article>

          {/* BOTTOM-RIGHT — Cap */}
          <article className="rounded-[26px] bg-[#F6C1F0] ring-1 ring-black/10 shadow-sm p-[12px] flex flex-col">
            <header className="mb-[2px] select-none">
              <h3 className="font-extrabold leading-[1.1] tracking-tight text-[18px]">
                1320 Kuwait Cap
              </h3>
            </header>

            {/* Image: anchored lower-right, slightly smaller */}
            <div className="relative flex-1 my-[2px] min-h-0">
              {/* <img src="/cap.png" alt="Kuwait cap"
                                 className="object-contain translate-y-[4px] translate-x-[4px] scale-[0.94] origin-bottom-right" /> */}
            </div>

            <p className="text-[11px] leading-[1.25] text-black/80">
              Are you a big fan of those late nights in Mexico.
            </p>

            <div className="mt-[8px] flex items-center justify-between">
              <div className="font-extrabold tracking-tight text-[24px]">
                $ 55.37
              </div>
              <a
                href="#"
                className="inline-flex h-[28px] items-center gap-[6px] rounded-full bg-white px-[10px] text-[11px] font-medium text-gray-900 ring-1 ring-black/10 shadow-sm hover:ring-black/20 active:scale-[0.985]"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M6 6h15l-1.5 8.5a2 2 0 0 1-2 1.6H9.1a2 2 0 0 1-2-1.6L5 3H2"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="9.5" cy="20" r="1.05" fill="currentColor" />
                  <circle cx="17.5" cy="20" r="1.05" fill="currentColor" />
                </svg>
                Add to cart
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
