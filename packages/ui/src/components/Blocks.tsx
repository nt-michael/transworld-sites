import type { ReactNode } from 'react';
import { Link } from '../link';
import { cx } from '../cx';

/** Three or four checkable facts under the hero. */
export function ProofStrip({ items }: { items: { value: string; label: string; tbc?: boolean }[] }) {
  return (
    <dl className="grid gap-px overflow-hidden rounded-card border border-line bg-line" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(14rem, 1fr))' }}>
      {items.map((i) => (
        <div key={i.label} className="bg-white p-6">
          <dt className="text-sm text-slate">{i.label}</dt>
          <dd className={cx('mt-1 font-heading text-2xl font-bold', i.tbc && 'text-field')}>{i.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export type Offer = { title: string; text: string; href: string; cta: string; image?: string; tag?: string };

export function OfferCards({ items, columns = 3 }: { items: Offer[]; columns?: 2 | 3 | 4 }) {
  const cols = { 2: 'sm:grid-cols-2', 3: 'sm:grid-cols-2 lg:grid-cols-3', 4: 'sm:grid-cols-2 lg:grid-cols-4' }[columns];
  return (
    <ul className={cx('grid gap-5', cols)}>
      {items.map((o) => (
        <li key={o.href}>
          <article className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-white transition-shadow hover:shadow-lg">
            {o.image && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={o.image} alt="" loading="lazy" className="aspect-[4/3] w-full object-cover" />
            )}
            <div className="flex flex-1 flex-col p-6">
              {o.tag && <p className="mb-2 text-xs font-semibold uppercase tracking-[0.1em] text-accent-strong">{o.tag}</p>}
              <h3 className="text-xl font-bold">{o.title}</h3>
              <p className="mt-2 flex-1 text-slate">{o.text}</p>
              <Link href={o.href} className="mt-5 inline-flex min-h-11 items-center font-semibold text-primary underline-offset-4 hover:underline">
                {o.cta}<span className="sr-only">: {o.title}</span>
                <svg aria-hidden="true" className="ml-2" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
              </Link>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}

/** Numbered process shown before the form. */
export function Steps({ items, dark }: { items: { title: string; text: string }[]; dark?: boolean }) {
  return (
    <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((s, i) => (
        <li key={s.title} className={cx('rounded-card p-6', dark ? 'bg-white/5' : 'border border-line bg-white')}>
          <span aria-hidden="true" className={cx('font-heading text-4xl font-bold', dark ? 'text-accent' : 'text-accent-strong')}>
            {String(i + 1).padStart(2, '0')}
          </span>
          <h3 className="mt-3 text-lg font-bold">{s.title}</h3>
          <p className={cx('mt-2', dark ? 'text-white/80' : 'text-slate')}>{s.text}</p>
        </li>
      ))}
    </ol>
  );
}

/** Included / not included / suited for, on every service page. */
export function Scope({
  labels, included, excluded, suited,
}: { labels: { included: string; excluded: string; suited: string }; included: string[]; excluded?: string[]; suited?: string[] }) {
  const List = ({ title, items, mark }: { title: string; items: string[]; mark: ReactNode }) => (
    <div className="rounded-card border border-line bg-white p-6">
      <h3 className="text-lg font-bold">{title}</h3>
      <ul className="mt-4 space-y-3">
        {items.map((t) => (
          <li key={t} className="flex gap-3">
            <span aria-hidden="true" className="mt-1 shrink-0">{mark}</span>
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
  const tick = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="var(--accent-strong)" strokeWidth="2.2"><path d="M3 8.5l3.2 3L13 4.5" /></svg>;
  const dash = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="var(--color-field)" strokeWidth="2.2"><path d="M3.5 8h9" /></svg>;
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      <List title={labels.included} items={included} mark={tick} />
      {excluded && <List title={labels.excluded} items={excluded} mark={dash} />}
      {suited && <List title={labels.suited} items={suited} mark={tick} />}
    </div>
  );
}

/** Product specification rows (trade and Transco). */
export function SpecTable({ rows, caption }: { rows: { label: string; value: string; tbc?: boolean }[]; caption: string }) {
  return (
    <table className="w-full overflow-hidden rounded-card border border-line text-left">
      <caption className="sr-only">{caption}</caption>
      <tbody className="divide-y divide-line">
        {rows.map((r) => (
          <tr key={r.label} className="bg-white">
            <th scope="row" className="w-2/5 bg-mist px-5 py-3 text-sm font-semibold text-slate">{r.label}</th>
            <td className={cx('px-5 py-3', r.tbc && 'text-field')}>{r.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-line rounded-card border border-line bg-white">
      {items.map((f) => (
        <details key={f.q} className="group p-5">
          <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-semibold">
            {f.q}
            <svg aria-hidden="true" className="shrink-0 transition-transform group-open:rotate-45" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 3v12M3 9h12" /></svg>
          </summary>
          <p className="mt-3 max-w-3xl text-slate">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

/** Inner-page title band. */
export function PageHeader({ eyebrow, title, lead, crumbs }: { eyebrow: string; title: string; lead?: string; crumbs?: { label: string; href?: string }[] }) {
  return (
    <div className="bg-dark-ground text-white">
      <div className="mx-auto w-full max-w-page px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        {crumbs && (
          <nav aria-label="Breadcrumb" className="mb-5 text-sm text-white/70">
            <ol className="flex flex-wrap gap-2">
              {crumbs.map((c, i) => (
                <li key={c.label} className="flex gap-2">
                  {c.href ? <Link href={c.href} className="underline-offset-4 hover:underline">{c.label}</Link> : <span aria-current="page">{c.label}</span>}
                  {i < crumbs.length - 1 && <span aria-hidden="true">/</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-accent">{eyebrow}</p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">{title}</h1>
        {lead && <p className="mt-5 max-w-2xl text-lg text-white/85">{lead}</p>}
      </div>
    </div>
  );
}
