import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Swatch from "@/components/Swatch";
import ItemCard from "@/components/ItemCard";
import { getItem, getRelated, items, formatMeta } from "@/lib/data";

export function generateStaticParams() {
  return items.map((item) => ({ id: item.id }));
}

export default async function ItemPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = getItem(id);
  if (!item) notFound();

  const related = getRelated(item);

  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-10">
        <Link href="/" className="font-mono text-xs uppercase tracking-wide text-muted hover:text-violet">
          ← До каталогу
        </Link>

        <div className="mt-6 grid gap-10 lg:grid-cols-[3fr_2fr]">
          <Swatch gradient={item.swatch} formats={item.formats} size="lg" />

          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-coral">
              {item.category}
            </p>
            <h1 className="mt-2 font-display text-2xl sm:text-3xl">{item.title}</h1>
            <p className="mt-2 text-sm text-ink-soft">Автор: {item.author}</p>

            <p className="mt-6 text-ink-soft">{item.description}</p>

            <div className="mt-8">
              <p className="font-mono text-xs uppercase tracking-wide text-muted">
                Доступ до файлів
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {item.formats.map((f) => (
                  <a
                    key={f}
                    href="#"
                    className="marquee rounded-lg border border-line bg-white/60 px-3 py-2 text-sm hover:border-violet"
                  >
                    {formatMeta[f].label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-20">
            <h2 className="font-display text-lg">Схожі матеріали</h2>
            <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3">
              {related.map((r) => (
                <ItemCard key={r.id} item={r} />
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
