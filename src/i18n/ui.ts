export const languages = ['en', 'bg', 'ru'] as const;
export type Lang = (typeof languages)[number];

export const ui = {
  "en": {
    "nav": {
      "home": "Home",
      "erp": "ERP Architecture",
      "team": "TEAM Method",
      "technologies": "Technologies",
      "industries": "Industries",
      "contacts": "Contacts"
    },
    "tagline": "TEAM is a system for designing enterprises.",
    "footerNav": "Navigation",
    "footerContact": "Contact",
    "copyright": "© Karen Arutyunyan, 2026",
    "subtitle": "TEAM — Enterprise Architecture Model"
  },
  "bg": {
    "nav": {
      "home": "Начало",
      "erp": "ERP Архитектура",
      "team": "TEAM Метод",
      "technologies": "Технологии",
      "industries": "Индустрии",
      "contacts": "Контакти"
    },
    "tagline": "TEAM е система за проектиране на предприятия.",
    "footerNav": "Навигация",
    "footerContact": "Контакти",
    "copyright": "© Karen Arutyunyan, 2026",
    "subtitle": "TEAM — Модел за архитектура на предприятието"
  },
  "ru": {
    "nav": {
      "home": "Главная",
      "erp": "ERP Архитектура",
      "team": "Метод TEAM",
      "technologies": "Технологии",
      "industries": "Индустрии",
      "contacts": "Контакты"
    },
    "tagline": "TEAM — это система проектирования предприятия.",
    "footerNav": "Навигация",
    "footerContact": "Контакты",
    "copyright": "© Karen Arutyunyan, 2026",
    "subtitle": "TEAM — Архитектура предприятия"
  }
} as const;
