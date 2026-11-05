'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState, type FocusEvent } from 'react';
import Arrow from './Arrow';

export type Slide = {
  label: string;
  tone: 'sky' | 'amber' | 'aqua';
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
};

const INTERVAL = 7000;

/**
 * Full-bleed home hero. WAI-ARIA carousel pattern:
 * - rotates only when reduced motion is not requested, with a pause button
 * - holds while hovered or focused; hidden slides are inert
 * - numbered tabs along the bottom show progress and jump to a slide
 * - swipe left or right on touch screens
 */
export type SliderLabels = { pause: string; play: string; slide: string; of: string };

export default function HeroSlider({ slides, labels }: { slides: Slide[]; labels: SliderLabels }) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [held, setHeld] = useState(false);
  const startX = useRef<number | null>(null);
  const count = slides.length;
  const go = (n: number) => setIndex((n + count) % count);

  useEffect(() => {
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) setPlaying(true);
  }, []);

  useEffect(() => {
    if (!playing || held) return;
    const timer = setTimeout(() => setIndex((i) => (i + 1) % count), INTERVAL);
    return () => clearTimeout(timer);
  }, [playing, held, index, count]);

  const onBlur = (event: FocusEvent<HTMLElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setHeld(false);
  };

  const running = playing && !held;

  return (
    <section
      className={`hero-slider${running ? ' is-running' : ''}`}
      aria-roledescription="carousel"
      aria-label="TransWorld SG Consulting Group"
      onMouseEnter={() => setHeld(true)}
      onMouseLeave={() => setHeld(false)}
      onFocus={() => setHeld(true)}
      onBlur={onBlur}
      onTouchStart={(e) => (startX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (startX.current === null) return;
        const dx = e.changedTouches[0].clientX - startX.current;
        if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1));
        startX.current = null;
      }}
    >
      <div className="hs-slides" aria-live={running ? 'off' : 'polite'}>
        {slides.map((slide, i) => {
          const active = i === index;
          const Title = i === 0 ? 'h1' : 'h2';
          return (
            <div
              key={slide.label}
              className={`hs-slide${active ? ' is-active' : ''}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} ${labels.of} ${count}: ${slide.label}`}
              inert={!active}
            >
              <Image src={slide.image} alt="" fill priority={i === 0} sizes="100vw" className="hs-img" />
              <div className="wrap hs-copy">
                <p className={`eyebrow eyebrow--${slide.tone}`}>{slide.eyebrow}</p>
                <Title className="h-display">{slide.title}</Title>
                <p className="hs-text">{slide.text}</p>
                <div className="actions">
                  <Link href={slide.primary.href} className="btn btn--light">
                    {slide.primary.label} <Arrow />
                  </Link>
                  {slide.secondary && (
                    <Link href={slide.secondary.href} className="btn btn--outline-light">
                      {slide.secondary.label}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="hs-bar">
        <div className="wrap hs-bar-row">
          <button type="button" className="hs-pause" onClick={() => setPlaying((p) => !p)}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              {playing ? <path d="M6 4h4v16H6zM14 4h4v16h-4z" /> : <path d="M7 4l13 8-13 8z" />}
            </svg>
            <span className="sr-only">{playing ? labels.pause : labels.play}</span>
          </button>
          <ol className="hs-tabs">
            {slides.map((slide, i) => (
              <li key={slide.label}>
                <button
                  type="button"
                  className={`hs-tab${i === index ? ' is-active' : ''}`}
                  aria-current={i === index ? 'true' : undefined}
                  onClick={() => go(i)}
                >
                  <span className="hs-progress" aria-hidden="true">
                    <i key={i === index ? `on-${index}` : 'off'} />
                  </span>
                  <span className="hs-num" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="hs-label">{slide.label}</span>
                  <span className="sr-only">
                    , {labels.slide} {i + 1} {labels.of} {count}
                  </span>
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
