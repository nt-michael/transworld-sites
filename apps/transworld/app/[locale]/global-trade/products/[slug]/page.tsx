import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Card from '@/components/Card';
import SiteForm from '@/components/SiteForm';
import SectionHead from '@/components/SectionHead';
import TradeNav from '@/components/TradeNav';
import { products } from '@/lib/content';
import { getUi, isLocale, locales } from '@/lib/i18n';
import { getData } from '@/lib/tx/data';
import { getPageText } from '@/lib/tx/pages';

type Params = Promise<{ locale: string; slug: string }>;

export function generateStaticParams() {
  return locales.flatMap((locale) => products.map((product) => ({ locale, slug: product.slug })));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, slug } = await params;
  const i = products.findIndex((item) => item.slug === slug);
  if (!isLocale(locale) || i < 0) return {};
  const x = getData(locale).products[i];
  return { title: x.name, description: x.blurb };
}

export default async function ProductPage({ params }: { params: Params }) {
  const { locale, slug } = await params;
  const index = products.findIndex((item) => item.slug === slug);
  if (!isLocale(locale) || index < 0) notFound();
  const ui = getUi(locale);
  const t = getPageText(locale).trade;
  const data = getData(locale);
  const product = { ...products[index], ...data.products[index] };
  const related = products.map((item, i) => ({ item, i })).filter(({ item }) => item.slug !== slug).slice(0, 3);
  const base = `/${locale}/global-trade`;

  return (
    <>
      <section className="product-hero">
        <div className="wrap product-hero-grid">
          <div className="product-hero-copy rise">
            <nav aria-label={ui.breadcrumb}>
              <ol className="crumbs crumbs--dark">
                <li><Link href={`/${locale}`}>{ui.home}</Link></li>
                <li><Link href={base}>Global Trade</Link></li>
                <li><Link href={`${base}#products`}>{ui.products}</Link></li>
                <li><span aria-current="page">{product.name}</span></li>
              </ol>
            </nav>
            <p className="eyebrow eyebrow--cocoa">{t.productEyebrow}</p>
            <h1 className="h-display">{product.name}</h1>
            <p className="product-lead">{product.blurb}</p>
            <div className="actions">
              <a href="#quote" className="btn btn--primary">{ui.quote}</a>
            </div>
          </div>
          <div className="product-photo">
            {product.image ? (
              <Image src={product.image} alt={product.name} fill priority sizes="(min-width: 1080px) 45vw, 100vw" />
            ) : (
              <span className="card-ph" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
            )}
          </div>
        </div>
      </section>
      <TradeNav locale={locale} ui={ui} />

      <section className="section">
        <div className="wrap product-body">
          <div className="product-info">
            <h2 className="h-2">{t.spec}</h2>
            <div className="table-scroll">
              <table className="spec">
                <tbody>
                  <tr><th scope="row">{data.origin}</th><td>{data.africa}</td></tr>
                  {data.specRows.map((row) => (
                    <tr key={row}><th scope="row">{row}</th><td className="is-tbc">{ui.tbc}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            {product.buyers && (
              <>
                <h2 className="h-2">{t.whoBuys}</h2>
                <p>{product.buyers}</p>
              </>
            )}
            <h2 className="h-2">{t.howSourced}</h2>
            <p>
              {t.sourcedPre}
              <Link href={`${base}/farm-to-market`}>{t.sourcedLink}</Link>
              {t.sourcedPost}
            </p>
          </div>
          <div id="quote" className="quote-card">
            <h2 className="h-2">{ui.quote}</h2>
            <SiteForm kind="trade" locale={locale} product={products[index].name} productLabel={product.name} />
          </div>
        </div>
      </section>

      <section className="section section--mist">
        <div className="wrap">
          <SectionHead title={t.related} />
          <ul className="card-grid card-grid--3">
            {related.map(({ item, i }) => (
              <li key={item.slug}>
                <Card href={`${base}/products/${item.slug}`} image={item.image} index={i} title={data.products[i].name} text={data.products[i].blurb} tone="amber" cta={ui.viewProduct} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
