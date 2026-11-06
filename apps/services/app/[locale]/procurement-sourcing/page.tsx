import { OfferCards, PageHeader, QuoteBand, Section } from '@tw/ui';
import { notFound } from 'next/navigation';
import { isLocale } from '@/lib/i18n';
import { getDict, getSourcing, path } from '@/lib/site';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return isLocale(locale) ? { title: getDict(locale).nav.sourcing } : {};
}

export default async function Index({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const d = getDict(locale);
  const i = d.sourcingIndex;
  return (
    <>
      <PageHeader eyebrow={d.nav.sourcing} title={i.title} lead={i.lead} crumbs={[{ label: d.ui.home.split(',')[0], href: path(locale) }, { label: i.title }]} />
      <Section>
        <OfferCards items={getSourcing(locale).map((s) => ({ title: s.name, text: s.blurb, href: path(locale, `/procurement-sourcing/${s.slug}`), cta: d.ui.viewService, image: s.image }))} />
      </Section>
      <QuoteBand title={d.home.bandTitle} text={d.home.bandText} quote={{ label: d.ui.quote, href: path(locale, '/request-a-quote') }} />
    </>
  );
}
