import Link from "next/link";
export default function SectionHeader({
  title,
  right = "See All",
  href = "#",
  className = "",
}) {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      <h2 className="text-[15px] font-semibold">{title}</h2>
      {right && (
        <Link href={href} className="text-[13px] text-[var(--muted)]">
          {right}
        </Link>
      )}
    </div>
  );
}
