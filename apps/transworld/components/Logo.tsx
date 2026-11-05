import Link from 'next/link';

/** The group's logo, taken from the current site (public/logo-v1.png, 894 × 279). */
export default function Logo({ href, className = '' }: { href: string; className?: string }) {
  return (
    <Link href={href} className={`logo ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo-v1.png" alt="TransWorld SG Consulting Group, home" width={894} height={279} />
    </Link>
  );
}
