import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Arrow from '@/components/Arrow';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SectionHead from '@/components/SectionHead';
import SiteForm from '@/components/SiteForm';
import { company, images } from '@/lib/content';
import { getUi, isLocale } from '@/lib/i18n';
import { getData } from '@/lib/tx/data';
import { getPageText } from '@/lib/tx/pages';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getPageText(locale).careers;
  return { title: t.metaTitle, description: t.metaDesc };
}

export default async function Careers({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const p = (s = '') => `/${locale}${s}`;
  const ui = getUi(locale);
  const t = getPageText(locale).careers;
  const data = getData(locale);
  const subject = encodeURIComponent(t.subject);

  return (
    <>
      <PageHero
        image={images.city}
        crumbs={[{ label: ui.home, href: p() }, { label: ui.careers }]}
        eyebrow={t.eyebrow}
        title={t.title}
        lead={t.lead}
      >
        <a href={`mailto:${company.email}?subject=${subject}`} className="btn btn--light">
          {t.emailCv} <Arrow />
        </a>
        <a href={company.phoneHref} className="btn btn--outline-light">
          {t.call} {company.phoneDisplay}
        </a>
      </PageHero>

      <section className="section" aria-labelledby="areas">
        <div className="wrap">
          <SectionHead
            id="areas"
            eyebrow={t.areasEyebrow}
            title={t.areasTitle}
            intro={t.areasIntro}
          />
          <ul className="card-grid card-grid--4">
            {data.careerAreas.map((area, i) => (
              <li key={area.title}>
                <Reveal delay={i * 70}>
                  <div className="panel career-area">
                    <h3 className="h-3">{area.title}</h3>
                    <p>{area.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--mist" aria-labelledby="apply">
        <div className="wrap rows-layout">
          <div className="rows-intro">
            <p className="eyebrow">{t.applyEyebrow}</p>
            <h2 className="h-1" id="apply">
              {t.applyTitle}
            </h2>
            <p className="intro">{t.applyIntro}</p>
          </div>
          <ol className="rows">
            <li>
              <div className="reveal-static">
                <span className="rows-n" aria-hidden="true">01</span>
                <h3 className="h-3">{t.step1}</h3>
                <p>
                  {t.step1Pre}
                  <a href={`mailto:${company.email}?subject=${subject}`}>{company.email}</a>
                  {t.step1Post}
                </p>
              </div>
            </li>
            <li>
              <div className="reveal-static">
                <span className="rows-n" aria-hidden="true">02</span>
                <h3 className="h-3">{t.step2}</h3>
                <p>
                  <a href={company.phoneHref}>{company.phoneDisplay}</a>. {t.step2Text}
                </p>
              </div>
            </li>
            <li>
              <div className="reveal-static">
                <span className="rows-n" aria-hidden="true">03</span>
                <h3 className="h-3">{ui.language}</h3>
                <p>{t.step3Text}</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section id="apply-form" className="section" aria-labelledby="apply-form-title">
        <div className="wrap product-body">
          <div className="product-info">
            <p className="eyebrow">{t.formEyebrow}</p>
            <h2 className="h-1" id="apply-form-title">{t.formTitle}</h2>
          </div>
          <div className="quote-card">
            <SiteForm kind="careers" locale={locale} />
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap cta-row">
          <h2 className="h-1">{t.ctaTitle}</h2>
          <Link href={p('/contact')} className="btn btn--light">
            {t.ctaBtn} <Arrow />
          </Link>
        </div>
      </section>
    </>
  );
}
