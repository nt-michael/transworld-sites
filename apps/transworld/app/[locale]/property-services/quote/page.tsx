import { redirect } from 'next/navigation';

/** The quote form lives on the Property Services page. */
export default async function Quote({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  redirect(`/${locale}/property-services#quote`);
}
