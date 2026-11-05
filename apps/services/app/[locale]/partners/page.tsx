import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Arrow from '@/components/Arrow';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SectionHead from '@/components/SectionHead';
import { company, images } from '@/lib/content';
import { pageText, partnersCopy } from '@/lib/detail';
import { isLocale } from '@/lib/i18n';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return isLocale(locale) ? { title: partnersCopy[locale].eyebrow, description: partnersCopy[locale].lead } : {};
}

export default async function Partners({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const c = partnersCopy[locale];
  const t = pageText[locale];
  const subject = encodeURIComponent(c.subject);
  return (
    <>
      <PageHero
        image={images.warehouse}
        short
        crumbs={[{ label: t.home, href: `/${locale}` }, { label: c.eyebrow }]}
        eyebrow={c.eyebrow}
        title={c.title}
        lead={c.lead}
      />
      <section className="section" aria-labelledby="types">
        <div className="wrap">
          <SectionHead id="types" title={c.typesTitle} intro={c.typesIntro} />
          <ul className="card-grid card-grid--4">
            {c.types.map((item, i) => (
              <li key={item.title}>
                <Reveal delay={i * 70}>
                  <div className="panel career-area">
                    <h3 className="h-3">{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section section--mist" aria-labelledby="look">
        <div className="wrap rows-layout">
          <div className="rows-intro">
            <h2 className="h-1" id="look">
              {c.lookTitle}
            </h2>
            <p className="intro">{c.lookIntro}</p>
          </div>
          <ol className="rows">
            {c.look.map((text, i) => (
              <li key={text}>
                <div className="reveal-static">
                  <span className="rows-n" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="cta-band">
        <div className="wrap cta-row">
          <div>
            <h2 className="h-1">{c.joinTitle}</h2>
            <p className="intro" style={{ color: 'rgba(255,255,255,0.88)' }}>{c.joinText}</p>
          </div>
          <a href={`mailto:${company.email}?subject=${subject}`} className="btn btn--light">
            {c.joinCta} <Arrow />
          </a>
        </div>
      </section>
    </>
  );
}
