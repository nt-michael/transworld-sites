import { PageHeader, QuoteBand, Section, SectionHead } from '@tw/ui';
import { notFound } from 'next/navigation';
import { getDict } from '@/lib/content';
import { isLocale } from '@/lib/i18n';
import { path } from '@/lib/nav';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return isLocale(locale) ? { title: getDict(locale).origin.title, description: getDict(locale).origin.lead } : {};
}

export default async function Origin({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const d = getDict(locale);
  return (
    <>
      <PageHeader eyebrow={d.origin.eyebrow} title={d.origin.title} lead={d.origin.lead} crumbs={[{ label: d.ui.home.split(',')[0], href: path(locale) }, { label: d.nav.origin }]} />
      <Section>
        <ul className="grid gap-5 md:grid-cols-2">
          {d.origin.areas.map((a) => (
            <li key={a.name} className="rounded-card border border-line bg-white p-6">
              <h2 className="text-xl font-bold">{a.name}</h2>
              <p className="mt-2 text-slate">{a.text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-3xl rounded-card bg-accent-soft p-5">{d.origin.note}</p>
      </Section>
      <Section tone="mist">
        <SectionHead title={d.origin.calendarTitle} intro={d.origin.calendarText} />
      </Section>
      <QuoteBand title={d.home.bandTitle} text={d.home.bandText} quote={{ label: d.ui.quote, href: path(locale, '/request-a-quote') }} />
    </>
  );
}
