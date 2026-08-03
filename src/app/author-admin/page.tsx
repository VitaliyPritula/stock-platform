import Header from "@/components/Header";
import Link from "next/link";
  
const authorItems = [
  { title: "UI kit для SaaS", status: "Опубліковано", meta: "3 дні тому" },
  { title: "Набір іконок для startup", status: "Чернетка", meta: "1 день тому" },
  { title: "Логотипи для продуктових брендів", status: "На модерації", meta: "2 години тому" },
];

export default function AuthorAdminPage() {
  return (
    <main className="min-h-screen bg-paper">
      <Header />
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-[24px] border border-line bg-white/80 p-5 shadow-sm">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-coral">
              Авторська панель
            </p>
            <h1 className="mt-2 font-display text-3xl text-ink">
              Адмінка автора
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-ink-soft">
              Тут автор може керувати матеріалами, переглядати статистику і готувати нові пакети для публікації.
            </p>
          </div>

          <Link
            href="/"
            className="rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:border-violet hover:text-violet"
          >
            Назад до каталогу
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-[24px] border border-line bg-white/80 p-5 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
                  Мої матеріали
                </p>
                <h2 className="mt-1 font-display text-2xl text-ink">Останні пакети</h2>
              </div>
              <button
                type="button"
                className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-violet-deep"
              >
                + Додати
              </button>
            </div>

            <div className="mt-5 space-y-3">
              {authorItems.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-line bg-paper/70 px-4 py-3"
                >
                  <div>
                    <p className="font-medium text-ink">{item.title}</p>
                    <p className="text-sm text-ink-soft">{item.meta}</p>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-violet">
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[24px] border border-line bg-white/80 p-5 shadow-sm">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
              Статистика
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-2xl border border-line bg-paper/70 p-4">
                <p className="text-sm text-ink-soft">Завантажень за тиждень</p>
                <p className="mt-2 font-display text-3xl text-ink">182</p>
              </div>
              <div className="rounded-2xl border border-line bg-paper/70 p-4">
                <p className="text-sm text-ink-soft">Нарахування</p>
                <p className="mt-2 font-display text-3xl text-violet">1 240 ₴</p>
              </div>
              <div className="rounded-2xl border border-line bg-paper/70 p-4">
                <p className="text-sm text-ink-soft">В черзі на модерацію</p>
                <p className="mt-2 font-display text-3xl text-coral">4</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
