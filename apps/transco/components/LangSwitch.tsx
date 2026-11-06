'use client';
import { usePathname } from 'next/navigation';
import { LangMenu } from '@tw/ui';
import { localeNames, locales, type Locale } from '@/lib/i18n';

export default function LangSwitch({ locale, label }: { locale: Locale; label: string }) {
  const path = usePathname() || `/${locale}`;
  const rest = path.replace(/^\/(fr|en)(?=\/|$)/, '');
  return <LangMenu label={label} current={locale} options={locales.map((l) => ({ code: l, label: localeNames[l], href: `/${l}${rest}` }))} />;
}
