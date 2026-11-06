import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Arrow from '@/components/Arrow';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import TradeNav from '@/components/TradeNav';
import { farmToMarket, images, type Place } from '@/lib/content';
import { getUi, isLocale } from '@/lib/i18n';
import { getData } from '@/lib/tx/data';
import { getPageText } from '@/lib/tx/pages';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getPageText(locale).trade;
  return { title: t.ftmMetaTitle, description: t.ftmMetaDesc };
}

export default async function FarmToMarket({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const ui = getUi(locale);
  const base = `/${locale}/global-trade`;
  const t = getPageText(locale).trade;
  const data = getData(locale);
  const placeLabel = data.place;
  const legend: Place[] = ['sourcing', 'both', 'trade'];

  return (
    <>
      <PageHero
        image={images.logistics}
        crumbs={[{ label: ui.home, href: `/${locale}` }, { label: 'Global Trade', href: base }, { label: ui.farmToMarket }]}
        eyebrow="Global Trade"
        tone="amber"
        title={t.ftmTitle}
        lead={t.ftmLead}
      />
      <TradeNav locale={locale} ui={ui} />

      <section className="section">
        <div className="wrap journey-layout">
          <div className="journey-key">
            <h2 className="h-3">{t.ftmKey}</h2>
            <ul>
              {legend.map((place) => (
                <li key={place} className={`key key--${place}`}>{placeLabel[place]}</li>
              ))}
            </ul>
          </div>
          <ol className="journey">
            {farmToMarket.map((step, i) => (
              <li key={step.title} className={`journey-step journey-step--${step.place}`}>
                <Reveal className="journey-row">
                  <span className="journey-n" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="h-3">{data.farm[i].title}</h3>
                    <p>{data.farm[i].text}</p>
                  </div>
                  <span className="chip">{placeLabel[step.place]}</span>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="cta-band cta-band--cocoa">
        <div className="wrap cta-row">
          <h2 className="h-1">{t.ftmCta}</h2>
          <Link href={`${base}#products`} className="btn btn--light">
            {t.quoteBtn} <Arrow />
          </Link>
        </div>
      </section>
    </>
  );
}
