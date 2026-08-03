import Link from "next/link";
import type { StockItem } from "@/lib/data";
import Swatch from "./Swatch";

export default function ItemCard({ item }: { item: StockItem }) {
  return (
    <Link
      href={`/item/${item.id}`}
      className="marquee group block rounded-xl p-1.5 transition-colors"
    >
      <Swatch gradient={item.swatch} formats={item.formats} />
      <div className="px-1.5 pt-3">
        <p className="font-mono text-[11px] uppercase tracking-wide text-muted">
          {item.category}
        </p>
        <h3 className="mt-1 font-display text-[15px] leading-snug group-hover:text-violet">
          {item.title}
        </h3>
      </div>
    </Link>
  );
}
