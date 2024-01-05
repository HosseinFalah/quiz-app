const langs = {
    "en-us": () => import('@/langs/en.json').then(module => module.default),
    "fa-ir": () => import('@/langs/fa.json').then(module => module.default),
    en: () => import('@/langs/fa.json').then(module => module.default),
    fa: () => import('@/langs/fa.json').then(module => module.default),
};

export const getLangs = async (locale) => langs[locale]();