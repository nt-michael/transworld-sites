import type { ReactNode } from 'react';
import { cx } from '../cx';

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cx('mx-auto w-full max-w-page px-4 sm:px-6 lg:px-8', className)}>{children}</div>;
}

type Tone = 'light' | 'mist' | 'dark' | 'accent-soft';
const tones: Record<Tone, string> = {
  light: 'bg-white text-ink',
  mist: 'bg-mist text-ink',
  'accent-soft': 'bg-accent-soft text-ink',
  dark: 'bg-dark-ground text-white',
};

export function Section({
  id, tone = 'light', children, className, labelledBy,
}: { id?: string; tone?: Tone; children: ReactNode; className?: string; labelledBy?: string }) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cx('py-16 sm:py-20', tones[tone], className)}>
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHead({
  id, eyebrow, title, intro, dark,
}: { id?: string; eyebrow?: string; title: string; intro?: string; dark?: boolean }) {
  return (
    <header className="mb-10 max-w-3xl">
      {eyebrow && (
        <p className={cx('mb-3 text-sm font-semibold uppercase tracking-[0.12em]', dark ? 'text-accent' : 'text-accent-strong')}>
          {eyebrow}
        </p>
      )}
      <h2 id={id} className="text-3xl font-bold leading-tight sm:text-4xl">{title}</h2>
      {intro && <p className={cx('mt-4 text-lg', dark ? 'text-white/80' : 'text-slate')}>{intro}</p>}
    </header>
  );
}
