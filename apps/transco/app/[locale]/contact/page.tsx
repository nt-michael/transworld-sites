import { Button, PageHeader, Section } from '@tw/ui';
import { notFound } from 'next/navigation';
import { getDict } from '@/lib/content';
import { isLocale } from '@/lib/i18n';
import { path } from '@/lib/nav';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return isLocale(locale) ? { title: getDict(locale).nav.contact, description: getDict(locale).contact.lead } : {};
}

export default async function Contact({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const d = getDict(locale);
  return (
    <>
      <PageHeader eyebrow={d.contact.eyebrow} title={d.contact.title} lead={d.contact.lead} crumbs={[{ label: d.ui.home.split(',')[0], href: path(locale) }, { label: d.nav.contact }]} />
      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-card border border-line bg-white p-8">
            <h2 className="text-2xl font-bold">{d.ui.quote}</h2>
            <p className="mt-3 text-slate">{d.request.lead}</p>
            <Button href={path(locale, '/request-a-quote')} className="mt-6">{d.ui.quote}</Button>
          </div>
          <div className="rounded-card bg-accent-soft p-8">
            <h2 className="text-2xl font-bold">{d.contact.direct}</h2>
            <p className="mt-3">{d.contact.directText}</p>
          </div>
        </div>
      </Section>
    </>
  );
}
