# Стокплатформа — Frontend MVP

Каталог стокових графічних матеріалів (UI kit, іконки, шаблони, логотипи) —
клієнтська частина MVP згідно з ТЗ.

## Стек
- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Дані — тимчасовий мок-масив у `src/lib/data.ts` (легко замінити на
  запити до Airtable/Supabase API)

## Запуск локально

```bash
npm install
npm run dev
```

Відкрий http://localhost:3000

## Структура
- `src/app/page.tsx` — головна сторінка (каталог, фільтри, сортування)
- `src/app/item/[id]/page.tsx` — сторінка деталей матеріалу
- `src/components/` — Header, Footer, картка матеріалу, свотч-плейсхолдер,
  клієнтський фільтр/сортування (`CatalogExplorer`)
- `src/lib/data.ts` — типи (`StockItem`, `Category`, `Format`) і мок-дані.
  Заміни `items` на реальний fetch з Airtable/Supabase, коли буде готовий бекенд.

## Наступні кроки
- Підʼєднати реальне джерело даних (Airtable REST API або Supabase)
- Додати сторінку "Стати автором" і форму заявки (Tally/Typeform або власна форма)
- Підключити реальні прев'ю-зображення замість градієнтних свотчів
