import { PageHeader, QuoteBand, Scope, Section, Steps, SectionHead } from '@tw/ui';
import { notFound } from 'next/navigation';
import { isLocale, locales } from '@/lib/i18n';
import { getDict, getSourcing, path } from '@/lib/site';

export const generateStaticParams = () => locales.flatMap((locale) => getSourcing(locale).map((s) => ({ locale, slug: s.slug })));

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const s = getSourcing(locale).find((x) => x.slug === slug);
  return s ? { title: s.name, description: s.blurb } : {};
}

export default async function Page({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const d = getDict(locale);
  const s = getSourcing(locale).find((x) => x.slug === slug);
  if (!s) notFound();
  const parent = d.nav.sourcing;
  return (
    <>
      <PageHeader eyebrow={parent} title={s.name} lead={s.blurb} crumbs={[{ label: d.ui.home.split(',')[0], href: path(locale) }, { label: parent, href: path(locale, '/procurement-sourcing') }, { label: s.name }]} />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="max-w-prose text-lg text-slate">{s.overview}</p>
            {s.note ? <p className="mt-6 max-w-prose rounded-card border border-line bg-mist p-5 text-slate"><strong className="font-heading text-ink">{d.service.note}: </strong>{s.note}</p> : null}
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          {s.image ? <img src={s.image} alt="" className="aspect-[4/3] w-full rounded-card object-cover" /> : null}
        </div>
      </Section>
      <Section tone="mist">
        <Scope labels={{ included: d.service.included, excluded: d.service.excluded, suited: d.service.suited }} included={s.includes} suited={s.suitedFor} />
      </Section>
      <Section labelledBy="how">
        <SectionHead id="how" title={d.service.howTitle} />
        <Steps items={d.service.steps} />
      </Section>
      <QuoteBand title={d.home.bandTitle} text={d.home.bandText} quote={{ label: d.ui.quote, href: path(locale, '/request-a-quote') }} />
    </>
  );
}
