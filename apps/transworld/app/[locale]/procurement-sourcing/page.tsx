import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Arrow from '@/components/Arrow';
import Card from '@/components/Card';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SectionHead from '@/components/SectionHead';
import { company, images, products } from '@/lib/content';
import { sourcingSlugs } from '@/lib/detail';
import { getUi, isLocale } from '@/lib/i18n';
import { getData } from '@/lib/tx/data';
import { getPageText } from '@/lib/tx/pages';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getPageText(locale).sourcing;
  return { title: t.metaTitle, description: t.metaDesc };
}

export default async function ProcurementSourcing({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const p = (s = '') => `/${locale}${s}`;
  const ui = getUi(locale);
  const t = getPageText(locale).sourcing;
  const data = getData(locale);

  return (
    <>
      <PageHero
        image={images.hero}
        crumbs={[{ label: ui.home, href: p() }, { label: 'Procurement & Sourcing' }]}
        eyebrow={ui.subsidiary}
        title="Procurement & Sourcing"
        lead={t.lead}
      >
        <Link href={p('/contact')} className="btn btn--light">
          {t.askBtn} <Arrow />
        </Link>
        <a href={`mailto:${company.email}`} className="btn btn--outline-light">
          {t.supplierBtn}
        </a>
      </PageHero>

      <section className="section" aria-labelledby="work">
        <div className="wrap rows-layout">
          <div className="rows-intro">
            <p className="eyebrow">{t.workEyebrow}</p>
            <h2 className="h-1" id="work">
              {t.workTitle}
            </h2>
            <p className="intro">{t.workIntro}</p>
          </div>
          <ol className="rows">
            {data.sourcingWork.map((item, i) => (
              <li key={item.title}>
                <Reveal delay={i * 60}>
                  <span className="rows-n" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="h-3">{item.title}</h3>
                  <p>{item.text}</p>
                  <Link href={p(`/procurement-sourcing/${sourcingSlugs[i]}`)} className="link-arrow">
                    {ui.learnMore} <Arrow />
                  </Link>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="split split--dark split--reverse" aria-labelledby="partners">
        <div className="split-media">
          <Image src={images.warehouse} alt="" fill sizes="(min-width: 1080px) 50vw, 100vw" />
        </div>
        <div className="split-body">
          <p className="eyebrow eyebrow--sky">{t.whoEyebrow}</p>
          <h2 className="h-1" id="partners">{t.whoTitle}</h2>
          <div className="duo">
            <div>
              <h3 className="h-3">{t.buyersTitle}</h3>
              <p>{t.buyersText}</p>
              <Link href={p('/contact')} className="link-arrow link-arrow--light">
                {t.contactUs} <Arrow />
              </Link>
            </div>
            <div>
              <h3 className="h-3">{t.suppliersTitle}</h3>
              <p>{t.suppliersText}</p>
              <a href={`mailto:${company.email}`} className="link-arrow link-arrow--light">
                {company.email} <Arrow />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="source">
        <div className="wrap">
          <SectionHead
            id="source"
            eyebrow={t.prodEyebrow}
            title={t.prodTitle}
            intro={t.prodIntro}
            action={
              <Link href={p('/global-trade/products')} className="link-arrow">
                {t.allProducts} <Arrow />
              </Link>
            }
          />
          <ul className="card-grid card-grid--3">
            {products.map((item, i) => (
              <li key={item.slug}>
                <Card href={p(`/global-trade/products/${item.slug}`)} image={item.image} index={i} title={data.products[i].name} text={data.products[i].blurb} tone="amber" cta={ui.viewProduct} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
