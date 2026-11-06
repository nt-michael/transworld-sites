import { Faq, PageHeader, QuoteBand, Section, SectionHead, Steps } from '@tw/ui';
import { notFound } from 'next/navigation';
import { getDict } from '@/lib/content';
import { isLocale } from '@/lib/i18n';
import { path } from '@/lib/nav';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return isLocale(locale) ? { title: getDict(locale).qualityExport.title, description: getDict(locale).qualityExport.lead } : {};
}

export default async function QualityExport({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const q = getDict(locale).qualityExport;
  const d = getDict(locale);
  return (
    <>
      <PageHeader eyebrow={q.eyebrow} title={q.title} lead={q.lead} crumbs={[{ label: d.ui.home.split(',')[0], href: path(locale) }, { label: d.nav.qualityExport }]} />
      <Section labelledBy="steps">
        <SectionHead id="steps" title={q.stepsTitle} />
        <Steps items={q.steps} />
      </Section>
      <Section tone="mist" labelledBy="docs">
        <SectionHead id="docs" title={q.docsTitle} />
        <ul className="grid gap-3 sm:grid-cols-2">
          {q.docs.map((t) => <li key={t} className="rounded-card border border-line bg-white p-5">{t}</li>)}
        </ul>
      </Section>
      <Section labelledBy="faq">
        <SectionHead id="faq" title={q.faqTitle} />
        <Faq items={q.faq} />
      </Section>
      <QuoteBand title={d.home.bandTitle} text={d.home.bandText} quote={{ label: d.ui.quote, href: path(locale, '/request-a-quote') }} />
    </>
  );
}
