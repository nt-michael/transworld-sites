'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { company } from '@/lib/content';
import { localeNames, locales, type Locale, type Ui } from '@/lib/i18n';
import type { NavItem } from '@/lib/nav';
import Arrow from './Arrow';

const Chevron = () => (
  <svg className="chev" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

/** Swap the locale segment of the current path. */
const withLocale = (path: string, next: Locale) => {
  const parts = path.split('/');
  parts[1] = next;
  return parts.join('/') || `/${next}`;
};

/**
 * Header navigation.
 * Desktop: disclosure buttons that open one mega-menu panel at a time.
 * Small screens: a full-height panel with an accordion per section.
 * Both are plain state + CSS transforms (no dialog, no blur), so they react
 * on the first tap. Escape, an outside click or a route change closes them.
 */
export default function SiteNav({ items, locale, ui }: { items: NavItem[]; locale: Locale; ui: Ui }) {
  const pathname = usePathname() ?? `/${locale}`;
  const uid = useId();
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const [section, setSection] = useState<string | null>(null);
  const [lang, setLang] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const closeAll = useCallback(() => {
    setOpen(null);
    setLang(false);
    setMobile(false);
  }, []);

  // Close everything after navigation.
  useEffect(() => {
    closeAll();
  }, [pathname, closeAll]);

  // Escape closes and returns focus to the control that opened the panel.
  useEffect(() => {
    if (!open && !lang && !mobile) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      if (mobile) {
        setMobile(false);
        toggleRef.current?.focus();
      } else if (open) {
        document.getElementById(`${uid}-btn-${open}`)?.focus();
        setOpen(null);
      } else {
        langRef.current?.querySelector('button')?.focus();
        setLang(false);
      }
    };
    const onPointer = (event: PointerEvent) => {
      const target = event.target as Node;
      if (open && navRef.current && !navRef.current.contains(target)) setOpen(null);
      if (lang && langRef.current && !langRef.current.contains(target)) setLang(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
    };
  }, [open, lang, mobile, uid]);

  // Mobile panel: lock page scroll, make the page behind it inert, move focus in.
  useEffect(() => {
    const root = document.documentElement;
    const behind = [document.getElementById('main'), document.querySelector('.site-footer')];
    root.classList.toggle('nav-locked', mobile);
    behind.forEach((el) => el?.toggleAttribute('inert', mobile));
    if (mobile) panelRef.current?.querySelector<HTMLElement>('button, a')?.focus();
    return () => {
      root.classList.remove('nav-locked');
      behind.forEach((el) => el?.removeAttribute('inert'));
    };
  }, [mobile]);

  // Leaving the small-screen layout closes the mobile panel.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1080px)');
    const onChange = () => mq.matches && setMobile(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const isCurrent = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      {/* Desktop */}
      <div ref={navRef} className="primary-nav">
        <nav aria-label={ui.mainNav}>
          <ul className="nav-list">
            {items.map((item) => {
              const expanded = open === item.id;
              return (
                <li key={item.id}>
                  <button
                    id={`${uid}-btn-${item.id}`}
                    type="button"
                    className={`nav-trigger${isCurrent(item.href) ? ' is-current' : ''}`}
                    aria-expanded={expanded}
                    aria-controls={`${uid}-panel-${item.id}`}
                    onClick={() => {
                      setLang(false);
                      setOpen(expanded ? null : item.id);
                    }}
                  >
                    {item.label}
                    <Chevron />
                  </button>
                  <div id={`${uid}-panel-${item.id}`} className="mega" hidden={!expanded}>
                    <div className="wrap mega-grid">
                      <div className="mega-intro">
                        <p className="mega-title">{item.label}</p>
                        <p>{item.intro}</p>
                        <Link href={item.href} className="btn btn--primary" onClick={closeAll}>
                          {ui.overview} <Arrow />
                        </Link>
                      </div>
                      {item.groups.map((group) => (
                        <div key={group.title} className="mega-group">
                          <p className="mega-label">{group.title}</p>
                          <ul>
                            {group.links.map((link) => (
                              <li key={link.label}>
                                <Link href={link.href} onClick={closeAll}>
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      <Link href={item.feature.href} className="mega-feature" onClick={closeAll}>
                        <span className="mega-feature-img">
                          <Image src={item.feature.image} alt="" fill sizes="320px" />
                        </span>
                        <strong>{item.feature.title}</strong>
                        <span className="link-arrow">
                          {item.feature.cta} <Arrow />
                        </span>
                      </Link>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      {open && <div className="nav-scrim" aria-hidden="true" onClick={() => setOpen(null)} />}

      <div className="header-actions">
        <div ref={langRef} className="lang">
          <button
            type="button"
            className="lang-btn"
            aria-expanded={lang}
            aria-controls={`${uid}-lang`}
            onClick={() => {
              setOpen(null);
              setLang((v) => !v);
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" />
            </svg>
            <span className="sr-only">{ui.language}: </span>
            <span>{locale.toUpperCase()}</span>
            <Chevron />
          </button>
          <ul id={`${uid}-lang`} className="lang-menu" hidden={!lang}>
            {locales.map((code) => (
              <li key={code}>
                <Link
                  href={withLocale(pathname, code)}
                  hrefLang={code}
                  lang={code}
                  aria-current={code === locale ? 'true' : undefined}
                  onClick={closeAll}
                >
                  {localeNames[code]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link href={`/${locale}/request-a-quote`} className="btn btn--primary btn--sm header-contact">
          {ui.quote}
        </Link>
        <button
          ref={toggleRef}
          type="button"
          className="menu-toggle"
          aria-expanded={mobile}
          aria-controls={`${uid}-mobile`}
          onClick={() => setMobile((v) => !v)}
        >
          <span className="menu-icon" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span>{mobile ? ui.close : ui.menu}</span>
        </button>
      </div>

      {/* Small screens */}
      <div
        ref={panelRef}
        id={`${uid}-mobile`}
        className={`mobile-panel${mobile ? ' is-open' : ''}`}
        inert={!mobile}
      >
        <nav aria-label={ui.mainNav} className="m-nav">
          <ul>
            {items.map((item) => {
              const expanded = section === item.id;
              return (
                <li key={item.id} className="m-item">
                  <button
                    type="button"
                    className="m-trigger"
                    aria-expanded={expanded}
                    aria-controls={`${uid}-m-${item.id}`}
                    onClick={() => setSection(expanded ? null : item.id)}
                  >
                    {item.label}
                    <Chevron />
                  </button>
                  <div id={`${uid}-m-${item.id}`} className="m-sub" hidden={!expanded}>
                    <Link href={item.href} className="m-overview" onClick={closeAll}>
                      {ui.overview} <Arrow />
                    </Link>
                    {item.groups.map((group) => (
                      <div key={group.title}>
                        <p className="mega-label">{group.title}</p>
                        <ul>
                          {group.links.map((link) => (
                            <li key={link.label}>
                              <Link href={link.href} onClick={closeAll}>
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="m-foot">
          <Link href={`/${locale}/contact`} className="btn btn--primary btn--block" onClick={closeAll}>
            {ui.contactUs} <Arrow />
          </Link>
          <a href={company.phoneHref} className="btn btn--outline btn--block">
            {ui.call} {company.phoneDisplay}
          </a>
          <p className="mega-label">{ui.language}</p>
          <ul className="m-lang">
            {locales.map((code) => (
              <li key={code}>
                <Link
                  href={withLocale(pathname, code)}
                  hrefLang={code}
                  lang={code}
                  aria-current={code === locale ? 'true' : undefined}
                  onClick={closeAll}
                >
                  {localeNames[code]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
