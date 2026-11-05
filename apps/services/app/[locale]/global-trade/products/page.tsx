import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Card from '@/components/Card';
import PageHero from '@/components/PageHero';
import TradeNav from '@/components/TradeNav';
import { images, products } from '@/lib/content';
import { getUi, isLocale } from '@/lib/i18n';
import { getData } from '@/lib/tx/data';
import { getPageText } from '@/lib/tx/pages';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getPageText(locale).trade;
  return { title: t.listMetaTitle, description: t.listMetaDesc };
}

export default async function Products({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const ui = getUi(locale);
  const base = `/${locale}/global-trade`;
  const t = getPageText(locale).trade;
  const data = getData(locale);

  return (
    <>
      <PageHero
        image={images.trade}
        short
        crumbs={[{ label: ui.home, href: `/${locale}` }, { label: 'Global Trade', href: base }, { label: ui.products }]}
        eyebrow="Global Trade"
        tone="amber"
        title={ui.products}
        lead={t.listLead}
      />
      <TradeNav locale={locale} ui={ui} />
      <section className="section">
        <div className="wrap">
          <ul className="card-grid card-grid--3">
            {products.map((item, i) => (
              <li key={item.slug}>
                <Card href={`${base}/products/${item.slug}`} image={item.image} index={i} title={data.products[i].name} text={data.products[i].blurb} tone="amber" cta={ui.viewRequest} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
