// import Image from "next/image";
// import Link from "next/link";

// export default function Example() {
//   return (
//     <section className="bg-gray-50">
//       <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8 lg:py-16">
//         {/* Header */}
//         <div className="flex items-baseline justify-between">
//           <h2 className="text-2xl font-bold tracking-tight text-gray-900">
//             Shop by Category
//           </h2>
//           <Link
//             href="#"
//             className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 md:block"
//           >
//             Browse all categories<span aria-hidden="true"> →</span>
//           </Link>
//         </div>

//         {/* 2x2 grid, equal gaps, equal row heights */}
//         <div
//           className="
//             mt-6 grid grid-cols-2 gap-4 lg:gap-8
//             [grid-template-rows:200px_200px] sm:[grid-template-rows:260px_260px] lg:[grid-template-rows:320px_320px]
//           "
//         >
//           {/* Featured (left) — spans both rows */}
//           <div className="group relative row-span-2 overflow-hidden rounded-2xl bg-amber-200 shadow-sm ring-1 ring-black/5">
//             {/* <Image ... className="absolute inset-0 object-cover" fill /> */}
//             <div
//               aria-hidden
//               className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"
//             />
//             <div className="absolute inset-0 flex items-end p-4 sm:p-6">
//               <div>
//                 <h3 className="text-lg sm:text-xl font-semibold text-white">
//                   <Link href="#">
//                     <span className="absolute inset-0" />
//                     New Arrivals
//                   </Link>
//                 </h3>
//                 <p className="mt-0.5 text-xs sm:text-sm text-white/90">
//                   Shop now
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Top-right */}
//           <div className="group relative overflow-hidden rounded-2xl bg-blue-100 shadow-sm ring-1 ring-black/5">
//             {/* <Image ... className="absolute inset-0 object-cover" fill /> */}
//             <div
//               aria-hidden
//               className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"
//             />
//             <div className="absolute inset-0 flex items-end p-4 sm:p-6">
//               <div>
//                 <h3 className="text-lg font-semibold text-white">
//                   <Link href="#">
//                     <span className="absolute inset-0" />
//                     Accessories
//                   </Link>
//                 </h3>
//                 <p className="mt-0.5 text-xs sm:text-sm text-white/90">
//                   Shop now
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Bottom-right */}
//           <div className="group relative overflow-hidden rounded-2xl bg-pink-200 shadow-sm ring-1 ring-black/5">
//             {/* <Image ... className="absolute inset-0 object-cover" fill /> */}
//             <div
//               aria-hidden
//               className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"
//             />
//             <div className="absolute inset-0 flex items-end p-4 sm:p-6">
//               <div>
//                 <h3 className="text-lg font-semibold text-white">
//                   <Link href="#">
//                     <span className="absolute inset-0" />
//                     Workspace
//                   </Link>
//                 </h3>
//                 <p className="mt-0.5 text-xs sm:text-sm text-white/90">
//                   Shop now
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Mobile “Browse all” link */}
//         <div className="mt-6 md:hidden">
//           <Link
//             href="#"
//             className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
//           >
//             Browse all categories<span aria-hidden="true"> →</span>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

// components/ProductMasonryMobile.jsx
import Image from "next/image";
import Link from "next/link";

export default function ProductMasonryMobile() {
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
              {/* <Image fill src="/seat.png" alt="Racing seat"
                 className="object-contain translate-y-[8px] -translate-x-[6px] scale-[1.02] origin-bottom-left" priority /> */}
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
              <Link
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
              </Link>
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
              {/* <Image fill src="/intake.png" alt="Black intake manifold"
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
              <Link
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
              </Link>
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
              {/* <Image fill src="/cap.png" alt="Kuwait cap"
                 className="object-contain translate-y-[4px] translate-x-[4px] scale-[0.94] origin-bottom-right" /> */}
            </div>

            <p className="text-[11px] leading-[1.25] text-black/80">
              Are you a big fan of those late nights in Mexico.
            </p>

            <div className="mt-[8px] flex items-center justify-between">
              <div className="font-extrabold tracking-tight text-[24px]">
                $ 55.37
              </div>
              <Link
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
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
