import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Arrow from '@/components/Arrow';
import Card from '@/components/Card';
import Carousel from '@/components/Carousel';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import TradeNav from '@/components/TradeNav';
import { images, products } from '@/lib/content';
import { tradeSlugs } from '@/lib/detail';
import { getUi, isLocale } from '@/lib/i18n';
import { getData } from '@/lib/tx/data';
import { getPageText } from '@/lib/tx/pages';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getPageText(locale).trade;
  return { title: t.metaTitle, description: t.metaDesc };
}

export default async function GlobalTrade({ params }: { params: Promise<{ locale: string }> }) {
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
        crumbs={[{ label: ui.home, href: `/${locale}` }, { label: 'Global Trade' }]}
        eyebrow={ui.subsidiary}
        tone="amber"
        title="Global Trade"
        lead={t.lead}
      >
        <Link href={`${base}#products`} className="btn btn--amber">
          {t.quoteBtn} <Arrow />
        </Link>
        <Link href={`${base}/farm-to-market`} className="btn btn--outline-light">
          {t.howBtn}
        </Link>
      </PageHero>
      <TradeNav locale={locale} ui={ui} />

      <section id="products" className="section section--mist">
        <div className="wrap">
          <Carousel
            label={t.productsLabel}
            backLabel={ui.scrollBack}
            forwardLabel={ui.scrollForward}
            heading={
              <div className="section-head-text">
                <p className="eyebrow">{ui.products}</p>
                <h2 className="h-1">{t.weTrade}</h2>
              </div>
            }
          >
            {products.map((item, i) => (
              <li key={item.slug}>
                <Card
                  href={`${base}/products/${item.slug}`}
                  image={item.image}
                  index={i}
                  title={data.products[i].name}
                  text={data.products[i].blurb}
                  tone="amber"
                  cta={ui.viewProduct}
                  portrait
                  sizes="320px"
                />
              </li>
            ))}
          </Carousel>
        </div>
      </section>

      <section className="section" aria-labelledby="what">
        <div className="wrap rows-layout">
          <div className="rows-intro">
            <p className="eyebrow">{ui.tradeServices}</p>
            <h2 className="h-1" id="what">{t.whatTitle}</h2>
            <p className="intro">{t.whatIntro}</p>
          </div>
          <ol className="rows">
            {data.tradeServices.map((s, i) => (
              <li key={s.title}>
                <Reveal delay={i * 60}>
                  <span className="rows-n" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="h-3">{s.title}</h3>
                  <p>{s.text}</p>
                  <Link href={`${base}/services/${tradeSlugs[i]}`} className="link-arrow">
                    {ui.learnMore} <Arrow />
                  </Link>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="split split--dark">
        <div className="split-media">
          <Image src={images.cocoa} alt="" fill sizes="(min-width: 1080px) 50vw, 100vw" />
        </div>
        <div className="split-body">
          <p className="eyebrow eyebrow--amber">{ui.farmToMarket}</p>
          <h2 className="h-1">{t.farmTitle}</h2>
          <p className="intro">{t.farmIntro}</p>
          <div className="actions">
            <Link href={`${base}/farm-to-market`} className="btn btn--amber">
              {t.farmBtn} <Arrow />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
