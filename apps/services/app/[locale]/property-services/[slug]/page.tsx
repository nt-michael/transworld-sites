import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Arrow from '@/components/Arrow';
import Card from '@/components/Card';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SectionHead from '@/components/SectionHead';
import { images, services } from '@/lib/content';
import { getUi, isLocale, locales } from '@/lib/i18n';
import { getData } from '@/lib/tx/data';
import { getPageText } from '@/lib/tx/pages';
import { getServices } from '@/lib/tx/services';

type Params = Promise<{ locale: string; slug: string }>;

export function generateStaticParams() {
  return locales.flatMap((locale) => services.map((service) => ({ locale, slug: service.slug })));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, slug } = await params;
  const i = services.findIndex((item) => item.slug === slug);
  if (!isLocale(locale) || i < 0) return {};
  const x = getServices(locale)[i];
  return { title: x.name, description: x.overview };
}

export default async function ServicePage({ params }: { params: Params }) {
  const { locale, slug } = await params;
  const idx = services.findIndex((item) => item.slug === slug);
  if (!isLocale(locale) || idx < 0) notFound();
  const base = services[idx];
  const all = getServices(locale);
  const service = { ...base, ...all[idx] };
  const ui = getUi(locale);
  const t = getPageText(locale).property;
  const how = getData(locale).how;
  const p = (s = '') => `/${locale}${s}`;
  const others = services.map((item, i) => ({ item, i })).filter(({ item }) => item.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero
        image={service.image ?? images.warehouse}
        short
        crumbs={[
          { label: ui.home, href: p() },
          { label: 'Property Services', href: p('/property-services') },
          { label: service.name },
        ]}
        eyebrow={t.serviceEyebrow}
        tone="aqua"
        title={service.name}
        lead={service.overview}
      >
        <Link href={p('/property-services#quote')} className="btn btn--aqua">
          {t.getQuote} <Arrow />
        </Link>
      </PageHero>

      <section className="section" aria-labelledby="included">
        <div className="wrap two-col two-col--wide">
          <div>
            <h2 className="h-1" id="included">
              {t.included}
            </h2>
            <ul className="checklist">
              {service.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {service.note && <p className="callout">{service.note}</p>}
          </div>
          <div>
            <h2 className="h-2">{t.goodFor}</h2>
            <ul className="checklist checklist--plain">
              {service.suitedFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--teal" aria-labelledby="how">
        <div className="wrap">
          <SectionHead id="how" eyebrow={t.processEyebrow} title={t.howWeWork} />
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

      <section className="section" aria-labelledby="more">
        <div className="wrap">
          <SectionHead
            id="more"
            title={t.others}
            action={
              <Link href={p('/property-services')} className="link-arrow">
                {t.allServices} <Arrow />
              </Link>
            }
          />
          <ul className="card-grid card-grid--3">
            {others.map(({ item, i }) => (
              <li key={item.slug}>
                <Card
                  href={p(`/property-services/${item.slug}`)}
                  image={item.image}
                  index={i}
                  title={all[i].name}
                  text={all[i].blurb}
                  tone="aqua"
                  cta={ui.learnMore}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap cta-row">
          <h2 className="h-1">{t.ctaTitle}</h2>
          <Link href={p('/property-services#quote')} className="btn btn--light">
            {t.ctaBtn} <Arrow />
          </Link>
        </div>
      </section>
    </>
  );
}
