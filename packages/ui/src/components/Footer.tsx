import type { ReactNode } from 'react';
import { Link } from '../link';
import { Container } from './Section';

export type FooterColumn = { title: string; links: { label: string; href: string }[] };

export function Footer({
  logo, about, columns, legal, contact, copyright,
}: {
  logo: ReactNode; about: string; columns: FooterColumn[];
  legal: { label: string; href: string }[]; contact: ReactNode; copyright: string;
}) {
  return (
    <footer className="bg-midnight text-white/85">
      <Container className="grid gap-10 py-14 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          {logo}
          <p className="mt-4 max-w-sm">{about}</p>
        </div>
        {columns.map((c) => (
          <nav key={c.title} aria-label={c.title}>
            <h2 className="mb-3 font-heading text-sm font-semibold uppercase tracking-[0.1em] text-accent">{c.title}</h2>
            <ul className="space-y-1">
              {c.links.map((l) => (
                <li key={l.href}><Link href={l.href} className="inline-flex min-h-9 items-center hover:text-white hover:underline">{l.label}</Link></li>
              ))}
            </ul>
          </nav>
        ))}
        <div className="lg:col-start-2 lg:col-span-3">{contact}</div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-5 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>{copyright}</p>
          <ul className="flex flex-wrap gap-x-5">
            {legal.map((l) => <li key={l.href}><Link href={l.href} className="hover:text-white hover:underline">{l.label}</Link></li>)}
          </ul>
        </Container>
      </div>
    </footer>
  );
}
