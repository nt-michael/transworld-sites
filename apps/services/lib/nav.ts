import type { NavItem } from '@tw/ui';
import type { SiteLocale as L } from './i18n';
import { getDict, getProperty, getSourcing, path } from './site';

export function getNav(l: L): NavItem[] {
  const d = getDict(l);
  return [
    { label: d.nav.property, href: path(l, '/property-services'), children: getProperty(l).map((s) => ({ label: s.name, href: path(l, `/property-services/${s.slug}`) })) },
    { label: d.nav.sourcing, href: path(l, '/procurement-sourcing'), children: getSourcing(l).map((s) => ({ label: s.name, href: path(l, `/procurement-sourcing/${s.slug}`) })) },
    { label: d.nav.about, href: path(l, '/about') },
    { label: d.nav.contact, href: path(l, '/contact') },
  ];
}
