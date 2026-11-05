import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Arrow from '@/components/Arrow';
import Card from '@/components/Card';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SectionHead from '@/components/SectionHead';
import { company, images, TBC, team } from '@/lib/content';
import { getUi, isLocale } from '@/lib/i18n';
import { getData } from '@/lib/tx/data';
import { getPageText } from '@/lib/tx/pages';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getPageText(locale).about;
  return { title: t.metaTitle, description: t.metaDesc };
}

export default async function About({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const p = (s = '') => `/${locale}${s}`;
  const ui = getUi(locale);
  const t = getPageText(locale).about;
  const data = getData(locale);

  const subsidiaries = [
    { title: 'Global Trade', text: t.subs[0], href: p('/global-trade'), image: images.trade, tone: 'amber' as const },
    { title: ui.products, text: t.subs[1], href: p('/global-trade/products'), image: images.cocoa, tone: 'aqua' as const },
    { title: ui.farmToMarket, text: t.subs[2], href: p('/global-trade/farm-to-market'), image: images.hero, tone: 'blue' as const },
  ];

  return (
    <>
      <PageHero
        image={images.city}
        crumbs={[{ label: ui.home, href: p() }, { label: ui.about }]}
        eyebrow={t.eyebrow}
        title={t.title}
        lead={t.lead}
      />

      <section className="section" aria-labelledby="subsidiaries">
        <div className="wrap">
          <SectionHead
            id="subsidiaries"
            eyebrow={t.subsEyebrow}
            title={t.subsTitle}
            intro={t.subsIntro}
          />
          <ul className="card-grid">
            {subsidiaries.map((s, i) => (
              <li key={s.title}>
                <Reveal delay={i * 80}>
                  <Card href={s.href} image={s.image} eyebrow={t.subsEyebrow} title={s.title} cta={ui.learnMore} text={s.text} tone={s.tone} />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="split split--dark" aria-labelledby="together">
        <div className="split-media">
          <Image src={images.logistics} alt="" fill sizes="(min-width: 1080px) 50vw, 100vw" />
        </div>
        <div className="split-body">
          <p className="eyebrow eyebrow--sky">{t.togetherEyebrow}</p>
          <h2 className="h-1" id="together">
            {t.togetherTitle}
          </h2>
          <p className="intro">{t.togetherIntro}</p>
          <ol className="chain">
            {data.groupFlow.map((step, i) => (
              <li key={step.title}>
                <span className="chain-n" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <strong>{step.title}</strong>
                <span>{step.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--mist" aria-labelledby="team">
        <div className="wrap">
          <SectionHead
            id="team"
            eyebrow={t.teamEyebrow}
            title={t.teamTitle}
            intro={t.teamIntro}
          />
          <ul className="team-grid">
            {team.map((person, i) => (
              <li key={person.role}>
                <Reveal delay={i * 70}>
                  <article className="profile">
                    <span className="profile-photo" aria-hidden="true">
                      {person.photo ? (
                        <Image src={person.photo} alt="" fill sizes="280px" />
                      ) : (
                        <svg viewBox="0 0 48 48" width="96" height="96" fill="currentColor">
                          <circle cx="24" cy="17" r="8" />
                          <path d="M8 42c1.5-9 8-14 16-14s14.5 5 16 14z" />
                        </svg>
                      )}
                    </span>
                    <p className="profile-unit">{person.unit}</p>
                    <h3 className="h-3">{data.team[i].role}</h3>
                    <p className={person.name === TBC ? 'profile-name is-tbc' : 'profile-name'}>{person.name === TBC ? ui.tbc : person.name}</p>
                    <p className="profile-text">{data.team[i].text}</p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="companies">
        <div className="wrap">
          <SectionHead id="companies" eyebrow={t.legalEyebrow} title={t.legalTitle} />
          <div className="two-col">
            <div className="panel">
              <h3 className="h-3">{company.inc}</h3>
              <dl className="facts">
                <div><dt>{t.address}</dt><dd>{company.address}</dd></div>
                <div><dt>{t.regNo}</dt><dd>{company.registration}</dd></div>
                <div><dt>{t.phone}</dt><dd><a href={company.phoneHref}>{company.phoneDisplay}</a></dd></div>
              </dl>
            </div>
          </div>
          <dl className="stats">
            <div><dt>{t.registration}</dt><dd>{company.registration}</dd></div>
            <div><dt>{t.activeSince}</dt><dd className="is-tbc">{ui.tbc}</dd></div>
            <div><dt>{t.certifications}</dt><dd className="is-tbc">{ui.tbc}</dd></div>
          </dl>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap cta-row">
          <h2 className="h-1">{t.ctaTitle}</h2>
          <Link href={p('/contact')} className="btn btn--light">
            {ui.contactUs} <Arrow />
          </Link>
        </div>
      </section>
    </>
  );
}
