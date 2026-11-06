'use client';
import NextLink from 'next/link';
import type { ReactNode } from 'react';
import { UIProvider, type LinkProps } from '@tw/ui';

function AppLink(props: LinkProps) {
  const { href, ...rest } = props;
  return <NextLink href={href} {...rest} />;
}

export default function Providers({ children }: { children: ReactNode }) {
  return <UIProvider link={AppLink}>{children}</UIProvider>;
}
