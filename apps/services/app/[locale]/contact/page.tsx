import { PageHeader, QuoteBand, Section, SectionHead } from '@tw/ui';
import { notFound } from 'next/navigation';
import { isLocale } from '@/lib/i18n';
import { contact, getDict, path } from '@/lib/site';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return isLocale(locale) ? { title: getDict(locale).contact.title } : {};
}

export default async function Contact({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const d = getDict(locale);
  const c = d.contact;
  return (
    <>
      <PageHeader eyebrow={c.eyebrow} title={c.title} lead={c.lead} crumbs={[{ label: d.ui.home.split(',')[0], href: path(locale) }, { label: c.eyebrow }]} />
      <Section labelledBy="direct">
        <SectionHead id="direct" title={c.direct} intro={c.directText} />
        <ul className="space-y-2 text-lg">
          <li><a className="font-semibold text-blue underline-offset-4 hover:underline" href={contact.phoneHref}>{contact.phone}</a></li>
          <li><a className="font-semibold text-blue underline-offset-4 hover:underline" href={`mailto:${contact.email}`}>{contact.email}</a></li>
          <li className="text-slate">{contact.address}</li>
        </ul>
      </Section>
      <QuoteBand title={d.home.bandTitle} text={d.home.bandText} quote={{ label: d.ui.quote, href: path(locale, '/request-a-quote') }} />
    </>
  );
}
