import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Arrow from '@/components/Arrow';
import PageHero from '@/components/PageHero';
import SectionHead from '@/components/SectionHead';
import { images } from '@/lib/content';
import { getUi, isLocale } from '@/lib/i18n';
import { lots, qualityCopy } from '@/lib/quality';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = qualityCopy[locale];
  return { title: t.metaTitle, description: t.metaDesc };
}

export default async function QualityControl({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const ui = getUi(locale);
  const t = qualityCopy[locale];
  const fmt = (n: number) => new Intl.NumberFormat(locale, { maximumFractionDigits: 2, minimumFractionDigits: n % 1 ? 2 : 0 }).format(n);
  const pct = (n: number) => `${fmt(n)}${t.unitPct}`;
  const date = (iso: string) => new Intl.DateTimeFormat(locale, { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(iso));
  const rows: { label: string; cell: (l: (typeof lots)[number]) => string }[] = [
    { label: t.rows.moisture, cell: (l) => pct(l.moisture) },
    { label: t.rows.beans, cell: (l) => fmt(l.beansPer100g) },
    { label: t.rows.crm, cell: (l) => pct(l.crm) },
    { label: t.rows.mouldy, cell: (l) => pct(l.mouldy) },
    { label: t.rows.insect, cell: (l) => pct(l.insect) },
    { label: t.rows.slaty, cell: (l) => pct(l.slaty) },
    { label: t.rows.germinated, cell: (l) => pct(l.germinated) },
    { label: t.rows.violet, cell: (l) => pct(l.violet) },
    { label: t.rows.grade, cell: (l) => t.gradeNames[l.grade] },
    { label: t.rows.sensory, cell: () => t.sensoryOk },
    { label: t.rows.sample, cell: (l) => `${fmt(l.sampleGrams)} g` },
    { label: t.rows.cert, cell: (l) => l.certificate },
    { label: t.rows.issued, cell: (l) => date(l.issued) },
  ];
  return (
    <>
      <PageHero image={images.cocoa} short tone="amber" crumbs={[{ label: ui.home, href: `/${locale}` }, { label: t.eyebrow }]} eyebrow={t.eyebrow} title={t.title} lead={t.lead} />
      <section className="section" aria-labelledby="how">
        <div className="wrap">
          <SectionHead id="how" title={t.howTitle} />
          <ul className="card-grid card-grid--4">
            {t.how.map((h) => (
              <li key={h.title}><div className="panel career-area"><h3 className="h-3">{h.title}</h3><p>{h.text}</p></div></li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section section--mist" aria-labelledby="results">
        <div className="wrap">
          <SectionHead id="results" title={t.resultsTitle} intro={t.resultsIntro} />
          <div className="table-scroll">
            <table className="spec">
              <caption className="sr-only">{t.caption}</caption>
              <thead>
                <tr><td /> {lots.map((l) => <th key={l.lot} scope="col">{`${l.lot}`}</th>)}</tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.label}><th scope="row">{r.label}</th>{lots.map((l) => <td key={l.lot}>{r.cell(l)}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="panel panel--white" style={{ marginTop: 32 }}>
            <h3 className="h-3">{t.noteTitle}</h3>
            <p>{t.note}</p>
          </div>
        </div>
      </section>
      <section className="section" aria-labelledby="next">
        <div className="wrap rows-layout">
          <div className="rows-intro"><h2 className="h-1" id="next">{t.beyondTitle}</h2></div>
          <ol className="rows">
            {t.beyond.map((b, i) => (
              <li key={b}><div className="reveal-static"><span className="rows-n" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span><p>{b}</p></div></li>
            ))}
          </ol>
        </div>
      </section>
      <section className="cta-band">
        <div className="wrap cta-row">
          <div>
            <h2 className="h-1">{t.ctaTitle}</h2>
            <p className="intro" style={{ color: 'rgba(255,255,255,0.88)' }}>{t.ctaText}</p>
          </div>
          <div className="actions">
            <Link href={`/${locale}/request-a-quote`} className="btn btn--light">{t.ctaBtn} <Arrow /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
