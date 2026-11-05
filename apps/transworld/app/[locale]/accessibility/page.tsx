import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LegalPage from '@/components/LegalPage';
import { isLocale } from '@/lib/i18n';
import { legal } from '@/lib/legal';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return isLocale(locale) ? { title: legal[locale].accessibility.title, description: legal[locale].accessibility.lead } : {};
}

export default async function Accessibility({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <LegalPage locale={locale} kind="accessibility" />;
}
