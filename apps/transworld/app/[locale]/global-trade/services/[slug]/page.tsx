import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import DetailPage from '@/components/DetailPage';
import { pageText, tradeDetails, tradeSlugs } from '@/lib/detail';
import { isLocale, locales } from '@/lib/i18n';

type Params = Promise<{ locale: string; slug: string }>;

export function generateStaticParams() {
  return locales.flatMap((locale) => tradeSlugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const item = tradeDetails[locale].find((x) => x.slug === slug);
  return item ? { title: item.name, description: item.overview } : {};
}

export default async function TradeServicePage({ params }: { params: Params }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const item = tradeDetails[locale].find((x) => x.slug === slug);
  if (!item) notFound();
  const t = pageText[locale];
  return (
    <DetailPage
      locale={locale}
      group="trade"
      item={item}
      all={tradeDetails[locale]}
      cta={{ title: t.ctaTradeTitle, label: t.ctaTrade, href: `/${locale}/global-trade/products` }}
    />
  );
}
