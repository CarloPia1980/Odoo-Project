import Image from "next/image";
import MobileSlider from "./MobileSlider";
export default function PromoBanner() {
  const slides = [
    <div
      key="a"
      className="relative w-full aspect-[16/9] mx-4 overflow-hidden rounded-2xl"
    >
      <Image
        src="/banners/red-intake.jpg"
        alt="Make your car breathe fresh new air"
        className="w-full h-full object-cover"
        height={600}
        width={1066}
      />
    </div>,
    <div
      key="b"
      className="relative w-full aspect-[16/9] mx-4 overflow-hidden rounded-2xl"
    >
      <Image
        src="/banners/red-intake.jpg"
        alt=""
        className="w-full h-full object-cover"
        height={600}
        width={1066}
      />
    </div>,
  ];
  return (
    <section className="mt-4 px-4">
      <MobileSlider items={slides} dots />
    </section>
  );
}
