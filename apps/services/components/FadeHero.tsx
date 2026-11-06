'use client';
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import { Button, Container } from '@tw/ui';

type Cta = { label: string; href: string };

/** Full-bleed hero with background photos that cross-fade. Static (first photo) if the visitor prefers reduced motion. */
export default function FadeHero({
  eyebrow, title, lead, chips, primary, secondary, images, interval = 6000,
}: { eyebrow: string; title: string; lead: string; chips: string[]; primary: Cta; secondary: Cta; images: string[]; interval?: number }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (images.length < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => setI((n) => (n + 1) % images.length), interval);
    return () => clearInterval(t);
  }, [images.length, interval]);

  return (
    <div className="relative isolate overflow-hidden bg-dark-ground text-white">
      <div aria-hidden="true" className="absolute inset-0 -z-20">
        {images.map((src, n) => (
          <img
            key={src}
            src={src}
            alt=""
            loading={n === 0 ? 'eager' : 'lazy'}
            className={`absolute inset-0 size-full object-cover transition-opacity duration-[1600ms] ease-in-out ${n === i ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-dark-ground via-dark-ground/80 to-dark-ground/20" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-dark-ground/70 to-transparent" />
      <Container className="py-20 sm:py-32">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-pill bg-accent px-4 py-1.5 text-sm font-bold text-on-accent">{eyebrow}</p>
          <h1 className="mt-5 text-5xl font-extrabold leading-[1.02] sm:text-7xl">{title}</h1>
          <p className="mt-6 text-lg text-white/85 sm:text-xl">{lead}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={primary.href} variant="accent">{primary.label}</Button>
            <Button href={secondary.href} variant="ghost-light">{secondary.label}</Button>
          </div>
          <ul className="mt-8 flex flex-wrap gap-2">
            {chips.map((c) => (
              <li key={c} className="rounded-pill border border-white/30 bg-white/10 px-3 py-1 text-sm font-medium backdrop-blur">{c}</li>
            ))}
          </ul>
        </div>
        {images.length > 1 && (
          <div className="mt-10 flex gap-2" aria-hidden="true">
            {images.map((src, n) => (
              <span key={src} className={`h-1 rounded-full transition-all duration-500 ${n === i ? 'w-10 bg-accent' : 'w-4 bg-white/40'}`} />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}
