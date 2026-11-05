import Link from 'next/link';
import Arrow from '@/components/Arrow';
import Card from '@/components/Card';
import PageHero from '@/components/PageHero';
import SectionHead from '@/components/SectionHead';
import { images } from '@/lib/content';
import { pageText, type Detail } from '@/lib/detail';
import type { Locale } from '@/lib/i18n';

type Group = 'trade' | 'sourcing';

const heroImages: Record<string, string> = {
  importation: images.logistics,
  distribution: images.trade,
  'b2b-supply': images.warehouse,
  'logistics-export': images.logistics,
  'supplier-search': images.hero,
  procurement: images.trade,
  'quality-control': images.cocoa,
  'export-preparation': images.logistics,
  'supplier-development': images.hero,
  'for-buyers': images.trade,
  'for-suppliers': images.hero,
};

/** One service page for Global Trade or Procurement & Sourcing. */
export default function DetailPage({
  locale,
  group,
  item,
  all,
  cta,
}: {
  locale: Locale;
  group: Group;
  item: Detail;
  all: Detail[];
  cta: { title: string; label: string; href: string };
}) {
  const t = pageText[locale];
  const p = (s = '') => `/${locale}${s}`;
  const base = group === 'trade' ? p('/global-trade/services') : p('/procurement-sourcing');
  const tone = group === 'trade' ? ('amber' as const) : ('sky' as const);
  const groupLabel = group === 'trade' ? t.globalTrade : t.sourcing;
  const groupHref = group === 'trade' ? p('/global-trade') : p('/procurement-sourcing');
  const crumbs =
    group === 'trade'
      ? [
          { label: t.home, href: p() },
          { label: groupLabel, href: groupHref },
          { label: t.tradeTitle, href: base },
          { label: item.name },
        ]
      : [{ label: t.home, href: p() }, { label: groupLabel, href: groupHref }, { label: item.name }];
  const others = all.filter((x) => x.slug !== item.slug).slice(0, 3);

  return (
    <>
      <PageHero
        image={heroImages[item.slug]}
        short
        crumbs={crumbs}
        eyebrow={groupLabel}
        tone={tone}
        title={item.name}
        lead={item.overview}
      />
      <section className="section" aria-labelledby="included">
        <div className="wrap two-col two-col--wide">
          <div>
            <h2 className="h-1" id="included">
              {t.included}
            </h2>
            <ul className="checklist">
              {item.includes.map((x) => <li key={x}>{x}</li>)}
            </ul>
            {item.note && <p className="callout">{item.note}</p>}
          </div>
          <div>
            <h2 className="h-2">{t.goodFor}</h2>
            <ul className="checklist checklist--plain">
              {item.suitedFor.map((x) => <li key={x}>{x}</li>)}
            </ul>
          </div>
        </div>
      </section>
      <section className="section section--mist" aria-labelledby="more">
        <div className="wrap">
          <SectionHead id="more" title={t.other} />
          <ul className="card-grid card-grid--3">
            {others.map((x) => (
              <li key={x.slug}>
                <Card
                  href={`${base}/${x.slug}`}
                  image={heroImages[x.slug]}
                  title={x.name}
                  text={x.blurb}
                  cta={t.learnMore}
                  tone={group === 'trade' ? 'amber' : 'blue'}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className={`cta-band${group === 'trade' ? ' cta-band--cocoa' : ''}`}>
        <div className="wrap cta-row">
          <h2 className="h-1">{cta.title}</h2>
          <Link href={cta.href} className="btn btn--light">
            {cta.label} <Arrow />
          </Link>
        </div>
      </section>
    </>
  );
}
