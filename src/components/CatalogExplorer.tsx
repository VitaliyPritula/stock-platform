"use client";

import { categories, items, type Category } from "@/lib/data";
import { useMemo, useState } from "react";
import ItemCard from "./ItemCard";

type SortKey = "new" | "popular";

export default function CatalogExplorer({ query = "" }: { query?: string }) {
  const [active, setActive] = useState<Category | "Усі">("Усі");
  const [sort, setSort] = useState<SortKey>("new");

  const visible = useMemo(() => {
    const base = active === "Усі" ? items : items.filter((item) => item.category === active);
    const filteredByQuery = query
      ? base.filter((item) => {
        const q = query.toLowerCase();
        return (
          item.title.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.author.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q)
        );
      })
      : base;

    const sorted = [...filteredByQuery].sort((a, b) =>
      sort === "new" ? +new Date(b.addedAt) - +new Date(a.addedAt) : b.popularity - a.popularity
    );

    return sorted;
  }, [active, sort, query]);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-4">
        {/* <form className="order-1 w-full sm:order-1 sm:w-auto sm:flex-1" role="search" 
            placeholder="Пошук: назва, опис, автор…"
          />
        </form> */}

        <nav className="flex flex-wrap gap-2 font-mono text-sm" aria-label="Категорії">
          {(["Усі", ...categories] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              data-active={active === cat}
              className="bracket-tab py-1 text-ink-soft transition-colors data-[active=true]:text-ink data-[active=true]:font-medium hover:text-violet"
            >
              {cat}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-muted">
          <span>Сортування</span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="rounded-md border border-line bg-white/60 px-2 py-1 text-ink focus:border-violet focus:outline-none"
          >
            <option value="new">За датою</option>
            <option value="popular">За популярністю</option>
          </select>
        </div>
      </div>

      {visible.length === 0 ? (
        <p className="mt-12 text-center text-ink-soft">
          У цій категорії поки немає матеріалів. Заглянь пізніше.
        </p>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
          {visible.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
