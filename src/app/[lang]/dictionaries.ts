import type { TLocale } from "../i18n";

const dictionaries = {
    vi: () => import("./dictionaries/vi.json").then((module) => module.default),
    en: () => import("./dictionaries/en.json").then((module) => module.default),
};

export const getDictionary = async (locale: TLocale) => dictionaries[locale]();
