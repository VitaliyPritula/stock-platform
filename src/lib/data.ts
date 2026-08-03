export type Format = "figma" | "drive" | "web";

export type Category = "UI kit" | "Іконки" | "Шаблони" | "Логотипи";

export interface StockItem {
  id: string;
  title: string;
  category: Category;
  description: string;
  author: string;
  formats: Format[];
  swatch: [string, string]; // gradient pair, stands in for a preview image
  addedAt: string; // ISO date
  popularity: number;
}

export const categories: Category[] = ["UI kit", "Іконки", "Шаблони", "Логотипи"];

export const formatMeta: Record<Format, { label: string; short: string }> = {
  figma: { label: "Figma", short: "FIG" },
  drive: { label: "Google Drive", short: "GDR" },
  web: { label: "Веб-хостинг", short: "WEB" },
};

export const items: StockItem[] = [
  {
    id: "aurora-ui-kit",
    title: "Aurora UI Kit",
    category: "UI kit",
    description:
      "Компонентна бібліотека для дашбордів: картки, таблиці, форми та навігація у світлій та темній темі.",
    author: "Марта Іваненко",
    formats: ["figma", "web"],
    swatch: ["#6e56cf", "#a78bfa"],
    addedAt: "2026-07-28",
    popularity: 98,
  },
  {
    id: "orbit-icon-pack",
    title: "Orbit Icon Pack",
    category: "Іконки",
    description: "240 лінійних іконок для інтерфейсів продуктів: навігація, фінанси, комунікації.",
    author: "Дмитро Сорока",
    formats: ["figma", "drive"],
    swatch: ["#ff6b4a", "#ffb199"],
    addedAt: "2026-07-25",
    popularity: 76,
  },
  {
    id: "field-notes-template",
    title: "Field Notes Landing",
    category: "Шаблони",
    description: "Шаблон лендингу для освітніх проєктів із секціями курсів, відгуків і тарифів.",
    author: "Олена Приходько",
    formats: ["figma", "web"],
    swatch: ["#1f9d7c", "#8fe3c7"],
    addedAt: "2026-07-20",
    popularity: 54,
  },
  {
    id: "signal-logo-set",
    title: "Signal Logo Set",
    category: "Логотипи",
    description: "12 модульних логотипів для tech-стартапів з варіаціями монограм і favicon.",
    author: "Артем Бондар",
    formats: ["drive"],
    swatch: ["#16161a", "#4a4a52"],
    addedAt: "2026-07-18",
    popularity: 41,
  },
  {
    id: "nimbus-dashboard-kit",
    title: "Nimbus Dashboard Kit",
    category: "UI kit",
    description: "Готові екрани аналітики: графіки, фільтри, картки метрик і порожні стани.",
    author: "Марта Іваненко",
    formats: ["figma", "drive", "web"],
    swatch: ["#4c37a8", "#6e56cf"],
    addedAt: "2026-07-15",
    popularity: 88,
  },
  {
    id: "handdrawn-badges",
    title: "Hand-drawn Badges",
    category: "Іконки",
    description: "Набір рукописних бейджів і стікерів для соцмереж та освітніх сертифікатів.",
    author: "Ірина Ковтун",
    formats: ["figma"],
    swatch: ["#e8b34c", "#ffe3a3"],
    addedAt: "2026-07-10",
    popularity: 63,
  },
  {
    id: "portfolio-template",
    title: "Studio Portfolio Template",
    category: "Шаблони",
    description: "Шаблон портфоліо для дизайнерів-фрилансерів з галереєю кейсів.",
    author: "Назар Гуменюк",
    formats: ["figma", "web"],
    swatch: ["#c94f7c", "#f0a8c2"],
    addedAt: "2026-07-05",
    popularity: 47,
  },
  {
    id: "monoline-marks",
    title: "Monoline Marks",
    category: "Логотипи",
    description: "Мінімалістичні монолінійні знаки для персональних брендів.",
    author: "Артем Бондар",
    formats: ["figma", "drive"],
    swatch: ["#2b6cb0", "#90cdf4"],
    addedAt: "2026-06-29",
    popularity: 35,
  },
];

export function getItem(id: string) {
  return items.find((item) => item.id === id);
}

export function getRelated(item: StockItem, limit = 3) {
  return items
    .filter((candidate) => candidate.id !== item.id && candidate.category === item.category)
    .slice(0, limit);
}
