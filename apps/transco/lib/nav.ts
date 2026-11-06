import type { NavItem } from '@tw/ui';
import { getDict, getProduce } from './content';
import type { Locale } from './i18n';

export const path = (l: Locale, p = '') => `/${l}${p}`;

export function getNav(l: Locale): NavItem[] {
  const d = getDict(l);
  return [
    { label: d.nav.produce, href: path(l, '/produce'), children: getProduce(l).map((p) => ({ label: p.name, href: path(l, `/produce/${p.slug}`) })) },
    {
      label: d.nav.origin, href: path(l, '/origin'),
    },
    { label: d.nav.qualityExport, href: path(l, '/quality-export') },
    { label: d.nav.about, href: path(l, '/about') },
    { label: d.nav.contact, href: path(l, '/contact') },
  ];
}
