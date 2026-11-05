import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Card from '@/components/Card';
import PageHero from '@/components/PageHero';
import SectionHead from '@/components/SectionHead';
import SiteForm from '@/components/SiteForm';
import { company, emails, images } from '@/lib/content';
import { getUi, isLocale } from '@/lib/i18n';
import { getPageText } from '@/lib/tx/pages';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getPageText(locale).contact;
  return { title: t.metaTitle, description: t.metaDesc };
}

export default async function Contact({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const p = (s = '') => `/${locale}${s}`;
  const ui = getUi(locale);
  const t = getPageText(locale).contact;

  const needs = [
    { ...t.needs[0], href: p('/property-services#quote'), image: images.cleanDesk, tone: 'aqua' as const, eyebrow: 'Property Services' },
    { ...t.needs[1], href: p('/global-trade/products'), image: images.cocoa, tone: 'amber' as const, eyebrow: 'Global Trade' },
    { ...t.needs[2], href: p('/procurement-sourcing#partners'), image: images.hero, tone: 'blue' as const, eyebrow: 'Procurement & Sourcing' },
  ];

  return (
    <>
      <PageHero
        image={images.warehouse}
        crumbs={[{ label: ui.home, href: p() }, { label: ui.contact }]}
        eyebrow={t.eyebrow}
        title={t.title}
        lead={t.lead}
      >
        <a href={company.phoneHref} className="btn btn--light">
          {t.call} {company.phoneDisplay}
        </a>
        <a href={`mailto:${company.email}`} className="btn btn--outline-light">
          {company.email}
        </a>
      </PageHero>

      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow={t.startEyebrow} title={t.startTitle} />
          <ul className="card-grid">
            {needs.map((n) => (
              <li key={n.title}>
                <Card href={n.href} image={n.image} eyebrow={n.eyebrow} title={n.title} text={n.text} tone={n.tone} cta={ui.start} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="message" className="section section--mist" aria-labelledby="message-title">
        <div className="wrap product-body">
          <div className="product-info">
            <p className="eyebrow">{t.formEyebrow}</p>
            <h2 className="h-1" id="message-title">{t.formTitle}</h2>
            <p>{t.formIntro}</p>
          </div>
          <div className="quote-card">
            <SiteForm kind="contact" locale={locale} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow={t.officesEyebrow} title={t.officesTitle} />
          <div className="two-col">
            <div className="panel panel--white">
              <p className="tag">{t.canada}</p>
              <h3 className="h-3">{company.inc}</h3>
              <dl className="facts">
                <div><dt>{t.address}</dt><dd><address>{company.address}</address></dd></div>
                <div><dt>{t.phone}</dt><dd><a href={company.phoneHref}>{company.phoneDisplay}</a></dd></div>
                {emails.map((e, i) => (
                  <div key={e.address}>
                    <dt>{t.emailLabels[i]}</dt>
                    <dd><a href={`mailto:${e.address}`}>{e.address}</a></dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="panel panel--white">
              <p className="tag tag--amber">{t.cameroon}</p>
              <h3 className="h-3">{company.sarl}</h3>
              <dl className="facts">
                <div><dt>{t.sigle}</dt><dd>{company.sarlShort}</dd></div>
                <div><dt>{t.address}</dt><dd>{ui.tbc}</dd></div>
                <div><dt>{t.phone}</dt><dd>{ui.tbc}</dd></div>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
