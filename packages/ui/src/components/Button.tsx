import type { ReactNode } from 'react';
import { Link } from '../link';
import { cx } from '../cx';

type Variant = 'primary' | 'secondary' | 'accent' | 'ghost-light';
const styles: Record<Variant, string> = {
  // light surfaces
  primary: 'bg-blue text-white hover:bg-[#0f4296]',
  secondary: 'border border-ink/25 text-ink hover:border-ink hover:bg-mist',
  // dark surfaces
  accent: 'bg-accent text-on-accent hover:brightness-95',
  'ghost-light': 'border border-white/40 text-white hover:bg-white/10',
};

export function Button({
  href, children, variant = 'primary', className, ...rest
}: { href: string; children: ReactNode; variant?: Variant; className?: string } & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>) {
  return (
    <Link
      href={href}
      className={cx(
        'inline-flex min-h-11 items-center justify-center gap-2 rounded-pill px-6 py-3 text-base font-semibold transition-colors',
        styles[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </Link>
  );
}
