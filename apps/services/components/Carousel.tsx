'use client';

import { useRef, type ReactNode } from 'react';

/**
 * Horizontal card slider built on native scrolling: swipe, trackpad, scrollbar
 * and keyboard all work without script. The buttons scroll two cards at a time.
 */
export default function Carousel({
  label,
  heading,
  backLabel,
  forwardLabel,
  children,
}: {
  label: string;
  backLabel: string;
  forwardLabel: string;
  heading: ReactNode;
  children: ReactNode;
}) {
  const track = useRef<HTMLUListElement>(null);

  const move = (direction: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector('li');
    const step = ((card?.getBoundingClientRect().width ?? 300) + 16) * 2;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollBy({ left: direction * step, behavior: reduced ? 'auto' : 'smooth' });
  };

  return (
    <div className="carousel">
      <div className="carousel-head">
        {heading}
        <div className="carousel-btns">
          <button type="button" onClick={() => move(-1)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 6l-6 6 6 6" />
            </svg>
            <span className="sr-only">{backLabel}</span>
          </button>
          <button type="button" onClick={() => move(1)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 6l6 6-6 6" />
            </svg>
            <span className="sr-only">{forwardLabel}</span>
          </button>
        </div>
      </div>
      <ul ref={track} className="carousel-track" tabIndex={0} aria-label={label}>
        {children}
      </ul>
    </div>
  );
}
