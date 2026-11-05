import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import DetailPage from '@/components/DetailPage';
import { pageText, sourcingDetails, sourcingSlugs } from '@/lib/detail';
import { isLocale, locales } from '@/lib/i18n';

type Params = Promise<{ locale: string; slug: string }>;

export function generateStaticParams() {
  return locales.flatMap((locale) => sourcingSlugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const item = sourcingDetails[locale].find((x) => x.slug === slug);
  return item ? { title: item.name, description: item.overview } : {};
}

export default async function SourcingPage({ params }: { params: Params }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const item = sourcingDetails[locale].find((x) => x.slug === slug);
  if (!item) notFound();
  const t = pageText[locale];
  return (
    <DetailPage
      locale={locale}
      group="sourcing"
      item={item}
      all={sourcingDetails[locale].slice(0, 5)}
      cta={{ title: t.ctaSourcingTitle, label: t.ctaSourcing, href: `/${locale}/contact` }}
    />
  );
}
