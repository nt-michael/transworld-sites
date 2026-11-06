import { PageHeader, QuoteBand, Section } from '@tw/ui';
import { notFound } from 'next/navigation';
import { getDict } from '@/lib/content';
import { isLocale } from '@/lib/i18n';
import { path } from '@/lib/nav';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return isLocale(locale) ? { title: getDict(locale).about.eyebrow, description: getDict(locale).about.lead } : {};
}

export default async function About({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const d = getDict(locale);
  return (
    <>
      <PageHeader eyebrow={d.about.eyebrow} title={d.about.title} lead={d.about.lead} crumbs={[{ label: d.ui.home.split(',')[0], href: path(locale) }, { label: d.nav.about }]} />
      <Section>
        <div className="grid gap-5 md:grid-cols-3">
          {d.about.blocks.map((b) => (
            <article key={b.title} className="rounded-card border border-line bg-white p-6">
              <h2 className="text-xl font-bold">{b.title}</h2>
              <p className="mt-2 text-slate">{b.text}</p>
            </article>
          ))}
        </div>
      </Section>
      <QuoteBand title={d.home.bandTitle} text={d.home.bandText} quote={{ label: d.ui.quote, href: path(locale, '/request-a-quote') }} />
    </>
  );
}
