import { PageHeader, Section } from '@tw/ui';
import { notFound } from 'next/navigation';
import { isLocale } from '@/lib/i18n';
import { getDict, path } from '@/lib/site';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return isLocale(locale) ? { title: getDict(locale).privacy.title } : {};
}

export default async function Privacy({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const d = getDict(locale);
  return (
    <>
      <PageHeader eyebrow={d.privacy.title} title={d.privacy.title} lead={d.privacy.lead} crumbs={[{ label: d.ui.home.split(',')[0], href: path(locale) }, { label: d.privacy.title }]} />
      <Section>
        <div className="max-w-prose space-y-6">
          {d.privacy.blocks.map((b) => (
            <div key={b.title}><h2 className="font-heading text-xl font-semibold text-ink">{b.title}</h2><p className="mt-1 text-slate">{b.text}</p></div>
          ))}
        </div>
      </Section>
    </>
  );
}
