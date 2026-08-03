import { Format, formatMeta } from "@/lib/data";

export default function Swatch({
  gradient,
  formats,
  size = "md",
}: {
  gradient: [string, string];
  formats: Format[];
  size?: "md" | "lg";
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl ${
        size === "lg" ? "aspect-[16/10]" : "aspect-[4/3]"
      }`}
      style={{
        backgroundImage: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})`,
      }}
    >
      {/* faint canvas grid, lazy-loaded feel via CSS only (no network image) */}
      <svg
        aria-hidden
        className="absolute inset-0 h-full w-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="18" height="18" patternUnits="userSpaceOnUse">
            <path d="M 18 0 L 0 0 0 18" fill="none" stroke="white" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <div className="absolute bottom-2 left-2 flex gap-1">
        {formats.map((f) => (
          <span
            key={f}
            className="rounded-md bg-black/30 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-white backdrop-blur-sm"
          >
            {formatMeta[f].short}
          </span>
        ))}
      </div>
    </div>
  );
}
