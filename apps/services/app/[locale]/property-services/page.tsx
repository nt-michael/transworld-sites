import { OfferCards, PageHeader, QuoteBand, Section } from '@tw/ui';
import { notFound } from 'next/navigation';
import { isLocale } from '@/lib/i18n';
import { getDict, getProperty, path } from '@/lib/site';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return isLocale(locale) ? { title: getDict(locale).nav.property } : {};
}

export default async function Index({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const d = getDict(locale);
  const i = d.propertyIndex;
  return (
    <>
      <PageHeader eyebrow={d.nav.property} title={i.title} lead={i.lead} crumbs={[{ label: d.ui.home.split(',')[0], href: path(locale) }, { label: i.title }]} />
      <Section>
        <OfferCards items={getProperty(locale).map((s) => ({ title: s.name, text: s.blurb, href: path(locale, `/property-services/${s.slug}`), cta: d.ui.viewService, image: s.image }))} />
      </Section>
      <QuoteBand title={d.home.bandTitle} text={d.home.bandText} quote={{ label: d.ui.quote, href: path(locale, '/request-a-quote') }} />
    </>
  );
}
