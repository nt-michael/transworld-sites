import { PageHeader, QuoteBand, Section, SectionHead, SpecTable } from '@tw/ui';
import { notFound } from 'next/navigation';
import { isLocale } from '@/lib/i18n';
import { contact, getDict, path } from '@/lib/site';
import { company } from '@/lib/content';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return isLocale(locale) ? { title: getDict(locale).nav.about } : {};
}

export default async function About({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const d = getDict(locale);
  const a = d.about;
  return (
    <>
      <PageHeader eyebrow={a.eyebrow} title={a.title} lead={a.lead} crumbs={[{ label: d.ui.home.split(',')[0], href: path(locale) }, { label: a.eyebrow }]} />
      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {a.blocks.map((b) => (
            <div key={b.title} className="rounded-card border border-line bg-white p-6">
              <h2 className="font-heading text-xl font-semibold text-ink">{b.title}</h2>
              <p className="mt-2 text-slate">{b.text}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section tone="mist" labelledBy="facts">
        <SectionHead id="facts" title={a.factsTitle} />
        <div className="max-w-2xl">
          <SpecTable caption={a.factsTitle} rows={[
            { label: a.reg, value: company.registration },
            { label: a.phone, value: contact.phone },
            { label: a.email, value: contact.email },
          ]} />
        </div>
      </Section>
      <QuoteBand title={d.home.bandTitle} text={d.home.bandText} quote={{ label: d.ui.quote, href: path(locale, '/request-a-quote') }} />
    </>
  );
}
