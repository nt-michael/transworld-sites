import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Arrow from '@/components/Arrow';
import Card from '@/components/Card';
import PageHero from '@/components/PageHero';
import SiteForm from '@/components/SiteForm';
import Reveal from '@/components/Reveal';
import SectionHead from '@/components/SectionHead';
import { company, images, services } from '@/lib/content';
import { getUi, isLocale } from '@/lib/i18n';
import { getData } from '@/lib/tx/data';
import { getPageText } from '@/lib/tx/pages';
import { getServices } from '@/lib/tx/services';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getPageText(locale).property;
  return { title: t.metaTitle, description: t.metaDesc };
}

export default async function PropertyServices({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const p = (s = '') => `/${locale}${s}`;
  const ui = getUi(locale);
  const t = getPageText(locale).property;
  const text = getServices(locale);
  const how = getData(locale).how;

  return (
    <>
      <PageHero
        image={images.mop}
        crumbs={[{ label: ui.home, href: p() }, { label: 'Property Services' }]}
        eyebrow={t.eyebrow}
        tone="aqua"
        title="Property Services"
        lead={t.lead}
      >
        <a href="#quote" className="btn btn--aqua">
          {t.quoteBtn} <Arrow />
        </a>
        <a href={company.phoneHref} className="btn btn--outline-light">
          {t.call} {company.phoneDisplay}
        </a>
      </PageHero>

      <section className="section" aria-labelledby="services">
        <div className="wrap">
          <SectionHead
            id="services"
            eyebrow={t.servicesEyebrow}
            title={t.servicesTitle}
            intro={t.servicesIntro}
          />
          <ul className="card-grid card-grid--3">
            {services.map((s, i) => (
              <li key={s.slug}>
                <Reveal delay={(i % 3) * 70}>
                  <Card href={p(`/property-services/${s.slug}`)} image={s.image} index={i} title={text[i].name} text={text[i].blurb} cta={ui.learnMore} tone="aqua" />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--teal" aria-labelledby="how">
        <div className="wrap">
          <SectionHead id="how" eyebrow={t.processEyebrow} title={t.processTitle} />
          <ol className="steps-row">
            {how.map((step, i) => (
              <li key={step.title}>
                <Reveal delay={i * 80}>
                  <span className="steps-n" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="h-3">{step.title}</h3>
                  <p>{step.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="quote" className="section section--mist" aria-labelledby="quote-title">
        <div className="wrap product-body">
          <div className="product-info">
            <p className="eyebrow">{t.quoteEyebrow}</p>
            <h2 className="h-1" id="quote-title">{t.quoteTitle}</h2>
            <p>{t.quoteIntro}</p>
            <dl className="facts">
              <div><dt>{t.serviceArea}</dt><dd className="is-tbc">{ui.tbc}</dd></div>
              <div><dt>{t.insurance}</dt><dd className="is-tbc">{ui.tbc}</dd></div>
              <div><dt>{t.languages}</dt><dd>{t.languagesValue}</dd></div>
            </dl>
          </div>
          <div className="quote-card">
            <SiteForm kind="property" locale={locale} serviceLabels={text.map((x) => x.name)} />
          </div>
        </div>
      </section>
    </>
  );
}
