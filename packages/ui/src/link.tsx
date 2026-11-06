'use client';
import { createContext, useContext, type AnchorHTMLAttributes, type ComponentType, type ReactNode } from 'react';

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
const LinkContext = createContext<ComponentType<LinkProps> | null>(null);

/** Wrap the app once with next/link so every UI link gets client-side navigation. */
export function UIProvider({ link, children }: { link: ComponentType<LinkProps>; children: ReactNode }) {
  return <LinkContext.Provider value={link}>{children}</LinkContext.Provider>;
}

export function Link(props: LinkProps) {
  const Custom = useContext(LinkContext);
  if (Custom) return <Custom {...props} />;
  return <a {...props} />;
}

