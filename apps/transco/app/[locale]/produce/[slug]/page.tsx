import { PageHeader, QuoteBand, Scope, Section, SectionHead, SpecTable } from '@tw/ui';
import { notFound } from 'next/navigation';
import { getDict, getProduce } from '@/lib/content';
import { isLocale, locales } from '@/lib/i18n';
import { path } from '@/lib/nav';

export const generateStaticParams = () => locales.flatMap((locale) => getProduce(locale).map((p) => ({ locale, slug: p.slug })));

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const p = getProduce(locale).find((x) => x.slug === slug);
  return p ? { title: p.name, description: p.blurb } : {};
}

export default async function ProducePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const d = getDict(locale);
  const p = getProduce(locale).find((x) => x.slug === slug);
  if (!p) notFound();
  const s = d.produce.spec;
  return (
    <>
      <PageHeader
        eyebrow={d.nav.produce}
        title={p.name}
        lead={p.about}
        crumbs={[{ label: d.ui.home.split(',')[0], href: path(locale) }, { label: d.nav.produce, href: path(locale, '/produce') }, { label: p.name }]}
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={p.image} alt="" className="aspect-[4/3] w-full rounded-card object-cover" />
          <div>
            <SectionHead title={d.produce.specTitle} />
            <SpecTable
              caption={`${d.produce.specTitle}: ${p.name}`}
              rows={[
                { label: s.origin, value: locale === 'fr' ? 'Cameroun' : 'Cameroon' },
                { label: s.form, value: p.form },
                { label: s.packaging, value: d.produce.tbc, tbc: true },
                { label: s.moq, value: d.produce.tbc, tbc: true },
                { label: s.terms, value: d.produce.tbc, tbc: true },
                { label: s.docs, value: d.qualityExport.docs[0] },
              ]}
            />
          </div>
        </div>
      </Section>
      <Section tone="mist">
        <Scope
          labels={{ included: d.produce.included, excluded: d.produce.excluded, suited: d.produce.suited }}
          included={d.produce.includedItems}
          excluded={d.produce.excludedItems}
          suited={p.use}
        />
      </Section>
      <QuoteBand title={d.home.bandTitle} text={d.home.bandText} quote={{ label: d.ui.quote, href: path(locale, '/request-a-quote') }} />
    </>
  );
}
