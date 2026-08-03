export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 text-sm text-ink-soft sm:grid-cols-3">
        <div>
          <p className="font-display text-base text-ink">стокплатформа</p>
          <p className="mt-2 max-w-xs">
            Каталог дизайн-матеріалів, освітній трек і система балів для авторів
            та виконавців задач в одній екосистемі.
          </p>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-wide text-muted">
            Проєкт
          </p>
          <ul className="mt-3 space-y-2">
            <li><a href="#" className="hover:text-violet">Освітній трек</a></li>
            <li><a href="#" className="hover:text-violet">Як здати таску</a></li>
            <li><a href="#" className="hover:text-violet">Каталог винагород</a></li>
          </ul>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-wide text-muted">
            Контакти
          </p>
          <ul className="mt-3 space-y-2">
            <li><a href="#" className="hover:text-violet">Telegram-бот</a></li>
            <li><a href="#" className="hover:text-violet">Партнери та спонсори</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
