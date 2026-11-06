import { OfferCards, PageHeader, QuoteBand, Section } from '@tw/ui';
import { notFound } from 'next/navigation';
import { getDict, getProduce } from '@/lib/content';
import { isLocale } from '@/lib/i18n';
import { path } from '@/lib/nav';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return isLocale(locale) ? { title: getDict(locale).produce.title, description: getDict(locale).produce.lead } : {};
}

export default async function ProduceIndex({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const d = getDict(locale);
  return (
    <>
      <PageHeader eyebrow={d.produce.eyebrow} title={d.produce.title} lead={d.produce.lead} crumbs={[{ label: d.ui.home.split(',')[0], href: path(locale) }, { label: d.nav.produce }]} />
      <Section>
        <OfferCards items={getProduce(locale).map((p) => ({ title: p.name, text: p.blurb, href: path(locale, `/produce/${p.slug}`), cta: d.ui.viewProduct, image: p.image }))} />
      </Section>
      <QuoteBand title={d.home.bandTitle} text={d.home.bandText} quote={{ label: d.ui.quote, href: path(locale, '/request-a-quote') }} />
    </>
  );
}
