import PageHero from '@/components/PageHero';
import { legal, type LegalKind } from '@/lib/legal';
import { pageText } from '@/lib/detail';
import type { Locale } from '@/lib/i18n';

/** Long-form legal text: one readable column with numbered headings. */
export default function LegalPage({ locale, kind }: { locale: Locale; kind: LegalKind }) {
  const doc = legal[locale][kind];
  const t = pageText[locale];
  return (
    <>
      <PageHero
        crumbs={[{ label: t.home, href: `/${locale}` }, { label: doc.title }]}
        eyebrow={doc.eyebrow}
        title={doc.title}
        lead={doc.lead}
        short
      />
      <section className="section">
        <div className="wrap">
          <article className="legal">
            <p className="legal-date">
              {t.lastUpdated}: {t.updated}
            </p>
            {doc.sections.map((s, i) => (
              <section key={s.id} aria-labelledby={`${kind}-${s.id}`}>
                <h2 className="h-2" id={`${kind}-${s.id}`}>
                  <span aria-hidden="true">{i + 1}. </span>
                  {s.title}
                </h2>
                {s.paras?.map((text) => <p key={text}>{text}</p>)}
                {s.list && (
                  <ul className="checklist checklist--plain">
                    {s.list.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )}
                {s.after?.map((text) => <p key={text}>{text}</p>)}
              </section>
            ))}
          </article>
        </div>
      </section>
    </>
  );
}
