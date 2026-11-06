import type { NavItem } from '@tw/ui';
import type { SiteLocale as L } from './i18n';
import { getDict, getProperty, path } from './site';

/** Slim header: Services (with its six pages) and Contact. About lives in the footer. */
export function getNav(l: L): NavItem[] {
  const d = getDict(l);
  return [
    { label: d.nav.property, href: path(l, '/property-services'), children: getProperty(l).map((s) => ({ label: s.name, href: path(l, `/property-services/${s.slug}`) })) },
    { label: d.nav.contact, href: path(l, '/contact') },
  ];
}

export function getFooterNav(l: L) {
  const d = getDict(l);
  return [
    { label: d.nav.about, href: path(l, '/about') },
    { label: d.nav.contact, href: path(l, '/contact') },
    { label: d.privacy.title, href: path(l, '/privacy') },
  ];
}
