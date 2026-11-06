import { ImageResponse } from 'next/og';
import { getDict } from '@/lib/content';
import { isLocale, locales } from '@/lib/i18n';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Transco SG Group';
export const generateStaticParams = () => locales.map((locale) => ({ locale }));

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const l = isLocale(locale) ? locale : 'fr';
  const d = getDict(l);
  const line = l === 'fr' ? 'Cacao · Café · Karité · Poivre de Penja' : 'Cocoa · Coffee · Shea · Penja pepper';
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#07140c', color: '#fff', padding: 72 }}>
        <div style={{ display: 'flex', fontSize: 32, color: '#7bd389', fontWeight: 700 }}>Transco SG Group</div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.05 }}>{d.home.title}</div>
          <div style={{ marginTop: 28, fontSize: 32, color: '#c9e8cf' }}>{line}</div>
        </div>
        <div style={{ display: 'flex', fontSize: 28, color: '#07140c', background: '#7bd389', padding: '14px 28px', borderRadius: 999, alignSelf: 'flex-start', fontWeight: 700 }}>{d.ui.quote}</div>
      </div>
    ),
    size,
  );
}
