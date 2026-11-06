import type { ReactNode } from 'react';
import { Button } from './Button';
import { Container } from './Section';

export type Cta = { label: string; href: string };

export function Hero({
  eyebrow, title, lead, primary, secondary, image, aside,
}: {
  eyebrow: string; title: string; lead: string; primary: Cta; secondary?: Cta;
  /** Background image URL. Decorative; the title carries the meaning. */
  image?: string; aside?: ReactNode;
}) {
  return (
    <div className="relative isolate overflow-hidden bg-dark-ground text-white">
      {image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={image} alt="" className="absolute inset-0 -z-20 size-full object-cover" />
      )}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-dark-ground via-dark-ground/85 to-dark-ground/30" aria-hidden="true" />
      <Container className="grid gap-10 py-20 sm:py-28 lg:grid-cols-[1.3fr_1fr] lg:items-end">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-accent">{eyebrow}</p>
          <h1 className="text-4xl font-bold leading-[1.05] sm:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85 sm:text-xl">{lead}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={primary.href} variant="accent">{primary.label}</Button>
            {secondary && <Button href={secondary.href} variant="ghost-light">{secondary.label}</Button>}
          </div>
        </div>
        {aside}
      </Container>
    </div>
  );
}
