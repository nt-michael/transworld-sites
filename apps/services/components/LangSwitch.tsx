'use client';
import { usePathname } from 'next/navigation';
import { localeNames, locales, type SiteLocale as Locale } from '@/lib/i18n';

export default function LangSwitch({ locale, label }: { locale: Locale; label: string }) {
  const path = usePathname() || `/${locale}`;
  const rest = path.replace(/^\/(fr|en)(?=\/|$)/, '');
  return (
    <nav aria-label={label}>
      <ul className="flex items-center gap-1">
        {locales.map((l) => (
          <li key={l}>
            <a
              href={`/${l}${rest}`}
              lang={l}
              hrefLang={l}
              aria-current={l === locale ? 'true' : undefined}
              className={`inline-flex min-h-10 items-center rounded-pill px-3 text-sm font-semibold ${l === locale ? 'bg-ink text-white' : 'text-ink hover:bg-mist'}`}
            >
              {localeNames[l]}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
