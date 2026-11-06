import { ImageResponse } from 'next/og';
import { isLocale, locales } from '@/lib/i18n';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'TransWorld SG Consulting Group';
export const generateStaticParams = () => locales.map((locale) => ({ locale }));

const og = {
  en: { t: 'Quality-checked African produce for Canadian businesses', c: 'Request a quote' },
  fr: { t: 'Des produits africains contrôlés pour les entreprises canadiennes', c: 'Demander un devis' },
  es: { t: 'Productos africanos controlados para empresas canadienses', c: 'Solicitar un presupuesto' },
} as const;

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = og[isLocale(locale) ? locale : 'en'];
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#070b14', color: '#fff', padding: 72 }}>
        <div style={{ display: 'flex', fontSize: 32, color: '#f2a65a', fontWeight: 700 }}>TransWorld SG Consulting Group</div>
        <div style={{ display: 'flex', fontSize: 74, fontWeight: 800, lineHeight: 1.05 }}>{t.t}</div>
        <div style={{ display: 'flex', fontSize: 28, color: '#1b120a', background: '#f2a65a', padding: '14px 28px', borderRadius: 999, alignSelf: 'flex-start', fontWeight: 700 }}>{t.c}</div>
      </div>
    ),
    size,
  );
}
