'use client';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Link } from '../link';
import { cx } from '../cx';
import { Button } from './Button';

export type NavItem = { label: string; href: string; children?: { label: string; href: string; hint?: string }[] };

export type HeaderProps = {
  logo: ReactNode;
  homeHref: string;
  homeLabel: string;
  nav: NavItem[];
  /** Required: every site shows a quote button in the menu. */
  quote: { label: string; href: string; short?: string };
  phone?: { label: string; href: string };
  lang?: ReactNode;
  menuLabel: string;
  closeLabel: string;
  navLabel: string;
};

export function Header({ logo, homeHref, homeLabel, nav, quote, phone, lang, menuLabel, closeLabel, navLabel }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState<string | null>(null);
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { setSub(null); setOpen(false); } };
    const onClick = (e: MouseEvent) => { if (root.current && !root.current.contains(e.target as Node)) setSub(null); };
    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onClick);
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('click', onClick); };
  }, []);

  return (
    <header ref={root} className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-page items-center gap-4 px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link href={homeHref} aria-label={homeLabel} className="shrink-0">{logo}</Link>

        <nav aria-label={navLabel} className="hidden flex-1 lg:block">
          <ul className="flex items-center justify-center gap-1">
            {nav.map((item) => (
              <li key={item.label} className="relative">
                {item.children ? (
                  <>
                    <button
                      type="button"
                      aria-expanded={sub === item.label}
                      onClick={() => setSub(sub === item.label ? null : item.label)}
                      className="inline-flex min-h-11 items-center gap-1 rounded-pill px-4 text-[0.95rem] font-medium text-ink hover:bg-mist"
                    >
                      {item.label}
                      <svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 4l4 4 4-4" /></svg>
                    </button>
                    {sub === item.label && (
                      <div className="absolute left-0 top-full mt-2 w-72 rounded-card border border-line bg-white p-2 shadow-xl">
                        <ul>
                          <li>
                            <Link href={item.href} onClick={() => setSub(null)} className="block rounded-xl px-3 py-2 font-semibold text-primary hover:bg-mist">
                              {item.label}
                            </Link>
                          </li>
                          {item.children.map((c) => (
                            <li key={c.href}>
                              <Link href={c.href} onClick={() => setSub(null)} className="block rounded-xl px-3 py-2 hover:bg-mist">
                                <span className="font-medium">{c.label}</span>
                                {c.hint && <span className="block text-sm text-slate">{c.hint}</span>}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={item.href} className="inline-flex min-h-11 items-center rounded-pill px-4 text-[0.95rem] font-medium text-ink hover:bg-mist">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          {phone && (
            <a href={phone.href} className="hidden min-h-11 items-center px-3 text-[0.95rem] font-semibold text-ink xl:inline-flex">
              {phone.label}
            </a>
          )}
          {lang && <div className="hidden lg:block">{lang}</div>}
          {/* The quote button stays visible at every width. */}
          <Button href={quote.href} className="!min-h-10 whitespace-nowrap !px-4 !py-2 text-sm sm:!px-5 sm:text-base">
            {quote.short ? (<><span className="sm:hidden">{quote.short}</span><span className="hidden sm:inline">{quote.label}</span></>) : quote.label}
          </Button>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-line lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? closeLabel : menuLabel}
            onClick={() => setOpen(!open)}
          >
            <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M4 4l12 12M16 4L4 16" /> : <path d="M3 6h14M3 10h14M3 14h14" />}
            </svg>
          </button>
        </div>
      </div>

      <div id="mobile-menu" hidden={!open} className="border-t border-line bg-white lg:hidden">
        <nav aria-label={navLabel} className="mx-auto max-w-page px-4 py-4 sm:px-6">
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.label} className="border-b border-line/70 py-2">
                <Link href={item.href} onClick={() => setOpen(false)} className="block py-2 text-lg font-semibold">{item.label}</Link>
                {item.children && (
                  <ul className="mb-1 ml-3 flex flex-col">
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <Link href={c.href} onClick={() => setOpen(false)} className="block py-2 text-slate">{c.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            {phone && <a href={phone.href} className="font-semibold">{phone.label}</a>}
            {lang}
          </div>
        </nav>
      </div>
    </header>
  );
}
