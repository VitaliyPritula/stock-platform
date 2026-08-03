"use client";

import CatalogExplorer from "@/components/CatalogExplorer";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");

  return (
    <>
      <Header query={query} onQueryChange={setQuery} />
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-10">
        <section className="mb-12 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-wide text-coral">
            MVP · Каталог матеріалів
          </p>
          <h1 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">
            Знаходь ассети. Здавай задачі. Заробляй бали.
          </h1>
          <p className="mt-4 text-ink-soft">
            Публічний каталог UI kit&#39;ів, іконок, шаблонів і логотипів —
            частина ширшої екосистеми з освітнім треком і винагородами для
            авторів.
          </p>
        </section>
        <CatalogExplorer query={query} />
      </main>
      <Footer />
    </>
  );
}
