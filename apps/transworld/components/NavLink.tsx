'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

/** A link that marks itself as current. `exact` matches only the same path. */
export default function NavLink({
  href,
  exact = false,
  className,
  children,
}: {
  href: string;
  exact?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const pathname = usePathname() ?? '';
  const isCurrent = exact ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);
  return (
    <Link href={href} className={className} aria-current={isCurrent ? (exact ? 'page' : 'true') : undefined}>
      {children}
    </Link>
  );
}
