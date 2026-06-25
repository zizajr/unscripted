import "server-only";
// Cache bust 1

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  fr: () => import("./dictionaries/fr.json").then((module) => module.default),
  ar: () => import("./dictionaries/ar.json").then((module) => module.default),
};

export type Dictionary = Awaited<ReturnType<typeof dictionaries["en"]>>;

export const getDictionary = async (locale: "en" | "fr" | "ar"): Promise<Dictionary> => {
  const getDict = dictionaries[locale] || dictionaries["en"];
  return getDict();
};
