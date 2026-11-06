'use client';
import { useEffect, useRef, useState } from 'react';
import { Link } from '../link';
import { cx } from '../cx';

export type LangOption = { code: string; label: string; href: string };

/** Language dropdown. Same on every site. */
export function LangMenu({ label, current, options, align = 'right' }: { label: string; current: string; options: LangOption[]; align?: 'left' | 'right' }) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    const onClick = (e: MouseEvent) => { if (root.current && !root.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onClick);
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('click', onClick); };
  }, []);
  return (
    <div ref={root} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-label={`${label}: ${current.toUpperCase()}`}
        onClick={() => setOpen(!open)}
        className="inline-flex min-h-10 items-center gap-1.5 rounded-pill border border-line px-3 text-sm font-semibold text-ink hover:bg-mist"
      >
        <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" /></svg>
        {current.toUpperCase()}
        <svg aria-hidden="true" width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 4l4 4 4-4" /></svg>
      </button>
      {open && (
        <ul className={cx('absolute top-full z-50 mt-2 min-w-40 rounded-card border border-line bg-white p-1.5 shadow-xl', align === 'right' ? 'right-0' : 'left-0')}>
          {options.map((o) => (
            <li key={o.code}>
              <Link
                href={o.href}
                hrefLang={o.code}
                lang={o.code}
                aria-current={o.code === current ? 'true' : undefined}
                onClick={() => setOpen(false)}
                className={cx('block rounded-xl px-3 py-2 text-sm hover:bg-mist', o.code === current && 'font-bold')}
              >
                {o.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
