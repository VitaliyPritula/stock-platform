"use client";

import { useEffect } from "react";

type AuthorAdminPanelProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function AuthorAdminPanel({ isOpen, onClose }: AuthorAdminPanelProps) {
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70 px-4 py-6 backdrop-blur-sm">
      <div
        className="relative flex max-h-[85vh] w-full max-w-5xl flex-col overflow-hidden rounded-[28px] border border-line bg-paper shadow-[0_30px_90px_rgba(22,22,26,0.28)]"
        role="dialog"
        aria-modal="true"
        aria-label="Адмінка автора"
      >
        <div className="flex items-start justify-between border-b border-line bg-white/70 px-6 py-5">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-coral">
              Авторська зона
            </p>
            <h2 className="mt-2 font-display text-2xl text-ink">
              Адмінка автора
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-ink-soft">
              Керуйте матеріалами, переглядайте статистику й швидко публікуйте нові ассети.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-line bg-white px-3 py-2 text-sm text-ink-soft transition-colors hover:border-violet hover:text-violet"
          >
            Закрити
          </button>
        </div>

        <div className="flex flex-1 flex-col overflow-hidden lg:flex-row">
          <aside className="w-full border-b border-line bg-white/60 p-5 lg:w-72 lg:border-b-0 lg:border-r">
            <div className="space-y-2">
              {[
                ["Панель", true],
                ["Мої матеріали", false],
                ["Статистика", false],
                ["Налаштування", false],
              ].map(([label, active]) => (
                <button
                  key={label}
                  type="button"
                  className={`flex w-full items-center justify-between rounded-2xl px-3 py-2 text-left text-sm transition-colors ${active
                      ? "bg-ink text-paper"
                      : "bg-paper text-ink-soft hover:bg-white hover:text-violet"
                    }`}
                >
                  <span>{label}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
                    0{active ? 1 : 2}
                  </span>
                </button>
              ))}
            </div>
          </aside>

          <div className="flex-1 overflow-auto bg-[radial-gradient(circle_at_top_left,_rgba(110,86,207,0.13),_transparent_35%)] p-5 sm:p-6">
            <div className="grid gap-4 md:grid-cols-2">
              <section className="rounded-3xl border border-line bg-white/80 p-4 shadow-sm">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
                  В черзі на модерацію
                </p>
                <p className="mt-3 font-display text-3xl text-ink">4</p>
                <p className="mt-2 text-sm text-ink-soft">
                  Пакети, які потребують перевірки перед публікацією.
                </p>
              </section>

              <section className="rounded-3xl border border-line bg-white/80 p-4 shadow-sm">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
                  Заробіток цього тижня
                </p>
                <p className="mt-3 font-display text-3xl text-violet">1 240 ₴</p>
                <p className="mt-2 text-sm text-ink-soft">
                  Нарахування за активні продажі та бонуси за якість.
                </p>
              </section>
            </div>

            <section className="mt-5 rounded-3xl border border-line bg-white/80 p-5 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
                    Мій авторський пул
                  </p>
                  <h3 className="mt-1 font-display text-xl text-ink">
                    Останні матеріали
                  </h3>
                </div>
                <button
                  type="button"
                  className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-violet-deep"
                >
                  + Додати новий пакет
                </button>
              </div>

              <div className="mt-5 space-y-3">
                {[
                  ["UI kit для SaaS", "Онлайн · 3 дні тому"],
                  ["Набір іконок для startup", "Чернетка · 1 день тому"],
                  ["Логотипи для продуктових брендів", "Модерація · 2 години тому"],
                ].map(([title, meta]) => (
                  <div
                    key={title}
                    className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-line bg-paper/70 px-4 py-3"
                  >
                    <div>
                      <p className="font-medium text-ink">{title}</p>
                      <p className="text-sm text-ink-soft">{meta}</p>
                    </div>
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-violet">
                      Автор
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
