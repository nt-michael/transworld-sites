import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Arrow from '@/components/Arrow';
import Card from '@/components/Card';
import PageHero from '@/components/PageHero';
import TradeNav from '@/components/TradeNav';
import { images } from '@/lib/content';
import { pageText, tradeDetails } from '@/lib/detail';
import { getUi, isLocale } from '@/lib/i18n';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return isLocale(locale) ? { title: pageText[locale].tradeTitle, description: pageText[locale].tradeLead } : {};
}

const cardImages = [images.logistics, images.trade, images.warehouse, images.logistics];

export default async function TradeServices({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const ui = getUi(locale);
  const t = pageText[locale];
  const base = `/${locale}/global-trade`;
  return (
    <>
      <PageHero
        image={images.logistics}
        short
        crumbs={[{ label: t.home, href: `/${locale}` }, { label: t.globalTrade, href: base }, { label: t.tradeTitle }]}
        eyebrow={t.tradeIntroEyebrow}
        tone="amber"
        title={t.tradeTitle}
        lead={t.tradeLead}
      />
      <TradeNav locale={locale} ui={ui} />
      <section className="section">
        <div className="wrap">
          <p className="intro">{t.tradeIntro}</p>
          <ul className="card-grid" style={{ marginTop: 40 }}>
            {tradeDetails[locale].map((s, i) => (
              <li key={s.slug}>
                <Card href={`${base}/services/${s.slug}`} image={cardImages[i]} title={s.name} text={s.blurb} cta={t.learnMore} tone="amber" />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="cta-band cta-band--cocoa">
        <div className="wrap cta-row">
          <h2 className="h-1">{t.ctaTradeTitle}</h2>
          <Link href={`${base}/products`} className="btn btn--light">
            {t.ctaTrade} <Arrow />
          </Link>
        </div>
      </section>
    </>
  );
}
