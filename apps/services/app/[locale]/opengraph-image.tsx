import { ImageResponse } from 'next/og';
import { isLocale, locales } from '@/lib/i18n';
import { getDict } from '@/lib/site';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'TransWorld Property Services';
export const generateStaticParams = () => locales.map((locale) => ({ locale }));

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const d = getDict(isLocale(locale) ? locale : 'en');
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#16130f', color: '#fff', padding: 72 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 30, color: '#ff9a4d', fontWeight: 700 }}>
          <div style={{ width: 20, height: 20, borderRadius: 10, background: '#ff9a4d' }} />
          TransWorld Property Services
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05 }}>{d.meta.ogTitle}</div>
          <div style={{ marginTop: 28, fontSize: 32, color: '#d9d2c8' }}>{d.home.eyebrow}</div>
        </div>
        <div style={{ display: 'flex', fontSize: 28, color: '#16130f', background: '#ff9a4d', padding: '14px 28px', borderRadius: 999, alignSelf: 'flex-start', fontWeight: 700 }}>{d.ui.quote}</div>
      </div>
    ),
    size,
  );
}
