/** Types cover all three languages because the legacy write-ups in detail.ts carry Spanish too. Only en and fr are routed. */
export type Locale = 'en' | 'fr' | 'es';
export const locales = ['en', 'fr'] as const;
export type SiteLocale = (typeof locales)[number];
export const isLocale = (v: string): v is SiteLocale => (locales as readonly string[]).includes(v);
export const localeNames: Record<SiteLocale, string> = { en: 'English', fr: 'Français' };
