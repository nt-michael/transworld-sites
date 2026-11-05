import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Arrow from '@/components/Arrow';
import PageHero from '@/components/PageHero';
import { plannedPages } from '@/lib/content';
import { isLocale } from '@/lib/i18n';

type Params = Promise<{ locale: string; rest: string[] }>;

export const metadata: Metadata = { robots: { index: false } };

/** Holding page for planned sitemap pages, so menu links never lead to an error. */
export default async function Planned({ params }: { params: Params }) {
  const { locale, rest } = await params;
  const title = plannedPages[rest.join('/')];
  if (!isLocale(locale) || !title) notFound();

  return (
    <PageHero
      crumbs={[{ label: 'Home', href: `/${locale}` }, { label: title }]}
      eyebrow="Page in progress"
      title={title}
      lead="This page is part of the new site and has not been built yet."
    >
      <Link href={`/${locale}/contact`} className="btn btn--primary">
        Contact us <Arrow />
      </Link>
      <Link href={`/${locale}`} className="btn btn--outline">
        Back to home
      </Link>
    </PageHero>
  );
}
