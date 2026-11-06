import { PageHeader, Section } from '@tw/ui';
import { notFound } from 'next/navigation';
import { getDict } from '@/lib/content';
import { isLocale } from '@/lib/i18n';
import { path } from '@/lib/nav';

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
        <div className="max-w-3xl space-y-8">
          {d.privacy.blocks.map((b) => (
            <section key={b.title}>
              <h2 className="text-xl font-bold">{b.title}</h2>
              <p className="mt-2 text-slate">{b.text}</p>
            </section>
          ))}
        </div>
      </Section>
    </>
  );
}
