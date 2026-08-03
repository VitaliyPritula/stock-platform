"use client";

import Link from "next/link";
import { ChangeEvent } from "react";

type HeaderProps = {
  query?: string;
  onQueryChange?: (q: string) => void;
};

export default function Header({ query = "", onQueryChange = () => { } }: HeaderProps) {
  return (
    <header className="border-b border-line">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-4 px-6 py-5">
        <Link href="/" className="font-display text-lg tracking-tight">
          стокплатформ<span className="text-violet">а</span>
        </Link>

        <form className="order-3 w-full sm:order-2 sm:w-auto sm:flex-1" role="search" onSubmit={(e) => e.preventDefault()}>
          <input
            value={query}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onQueryChange(e.target.value)}
            type="search"
            placeholder="Пошук: іконки, шаблони, логотипи…"
            className="w-full max-w-md rounded-full border border-line bg-white/60 px-4 py-2 text-sm font-mono placeholder:text-muted focus:border-violet focus:outline-none"
          />
        </form>

        <div className="order-2 ml-auto flex items-center gap-3 sm:order-3">
          <a
            href="#"
            className="hidden text-sm text-ink-soft hover:text-violet sm:inline"
          >
            Telegram-бот
          </a>
          <Link
            href="/author-admin"
            className="marquee rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-violet-deep"
          >
            Стати автором
          </Link>
        </div>
      </div>
    </header>
  );
}
