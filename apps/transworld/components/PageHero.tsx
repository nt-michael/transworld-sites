import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { getUi, isLocale } from '@/lib/i18n';

type Crumb = { label: string; href?: string };

/** Full-bleed page header: photo, dark gradient, breadcrumb, title and lead. */
export default function PageHero({
  image,
  eyebrow,
  tone = 'sky',
  title,
  lead,
  crumbs,
  children,
  short = false,
}: {
  image?: string;
  eyebrow?: string;
  tone?: 'sky' | 'amber' | 'aqua';
  title: string;
  lead?: ReactNode;
  crumbs?: Crumb[];
  children?: ReactNode;
  short?: boolean;
}) {
  // The locale is the first path segment of the home crumb, so pages need not pass it.
  const seg = crumbs?.[0]?.href?.split('/')[1] ?? 'en';
  const crumbLabel = getUi(isLocale(seg) ? seg : 'en').breadcrumb;
  return (
    <section className={`page-hero${image ? '' : ' page-hero--plain'}${short ? ' page-hero--short' : ''}`}>
      {image && <Image src={image} alt="" fill priority sizes="100vw" className="page-hero-img" />}
      <div className="wrap page-hero-copy rise">
        {crumbs && (
          <nav aria-label={crumbLabel}>
            <ol className="crumbs">
              {crumbs.map((c) => (
                <li key={c.label}>{c.href ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}</li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && <p className={`eyebrow eyebrow--${tone}`}>{eyebrow}</p>}
        <h1 className="h-display">{title}</h1>
        {lead && <p className="page-hero-lead">{lead}</p>}
        {children && <div className="actions">{children}</div>}
      </div>
    </section>
  );
}
