export const locales = ['fr', 'en'] as const;
export type Locale = (typeof locales)[number];
export const isLocale = (v: string): v is Locale => (locales as readonly string[]).includes(v);
export const localeNames: Record<Locale, string> = { fr: 'Français', en: 'English' };
