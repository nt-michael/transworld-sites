import { company, images, products, services } from './content';
import { navCopy } from './copy';
import { sourcingDetails } from './detail';
import type { Locale, Ui } from './i18n';
import { getData } from './tx/data';
import { getServices } from './tx/services';

export type NavLinkItem = { label: string; href: string };
export type NavGroup = { title: string; links: NavLinkItem[] };
export type NavItem = {
  id: string;
  label: string;
  href: string;
  intro: string;
  groups: NavGroup[];
  feature: { image: string; title: string; href: string; cta: string };
};

/** Main menu: one entry per section, each with a mega-menu panel. */
export function getNav(locale: Locale, ui: Ui): NavItem[] {
  const p = (s = '') => `/${locale}${s}`;
  const c = navCopy[locale];
  const sourcing = sourcingDetails[locale];
  return [
    {
      id: 'about',
      label: ui.about,
      href: p('/about'),
      intro: c.aboutIntro,
      groups: [
        {
          title: c.aboutGroup,
          links: [
            { label: c.aboutLinks[0], href: p('/about#subsidiaries') },
            { label: c.aboutLinks[1], href: p('/about#together') },
            { label: c.aboutLinks[2], href: p('/about#companies') },
          ],
        },
        {
          title: c.aboutWork,
          links: [
            { label: ui.partners, href: p('/partners') },
            { label: ui.careers, href: p('/careers') },
            { label: ui.contactUs, href: p('/contact') },
          ],
        },
      ],
      feature: { image: images.city, title: c.aboutFeature[0], href: p('/about'), cta: c.aboutFeature[1] },
    },
    {
      id: 'property',
      label: 'Property Services',
      href: p('/property-services'),
      intro: c.propertyIntro,
      groups: [
        {
          title: c.propertyServices,
          links: services.map((s, i) => ({ label: getServices(locale)[i].name, href: p(`/property-services/${s.slug}`) })),
        },
        {
          title: c.propertyStart,
          links: [
            { label: ui.howItWorks, href: p('/property-services#how') },
            { label: ui.quote, href: p('/property-services#quote') },
            { label: `${ui.call} ${company.phoneDisplay}`, href: company.phoneHref },
          ],
        },
      ],
      feature: { image: images.mop, title: c.propertyFeature, href: p('/property-services#quote'), cta: ui.quote },
    },
    {
      id: 'trade',
      label: 'Global Trade',
      href: p('/global-trade'),
      intro: c.tradeIntro,
      groups: [
        {
          title: ui.products,
          links: products.map((item, i) => ({ label: getData(locale).products[i].name, href: p(`/global-trade/products/${item.slug}`) })),
        },
        {
          title: c.tradeGroup,
          links: [
            { label: ui.products, href: p('/global-trade/products') },
            { label: ui.tradeServices, href: p('/global-trade/services') },
            { label: ui.farmToMarket, href: p('/global-trade/farm-to-market') },
          ],
        },
      ],
      feature: {
        image: images.cocoa,
        title: c.tradeFeature[0],
        href: p('/global-trade/farm-to-market'),
        cta: c.tradeFeature[1],
      },
    },
    {
      id: 'sourcing',
      label: 'Procurement & Sourcing',
      href: p('/procurement-sourcing'),
      intro: c.sourcingIntro,
      groups: [
        {
          title: c.sourcingDo,
          links: sourcing.slice(0, 5).map((s) => ({ label: s.name, href: p(`/procurement-sourcing/${s.slug}`) })),
        },
        {
          title: c.sourcingWork,
          links: [
            { label: sourcing[5].name, href: p('/procurement-sourcing/for-buyers') },
            { label: sourcing[6].name, href: p('/procurement-sourcing/for-suppliers') },
            { label: c.sourcingLinks[0], href: p('/procurement-sourcing#source') },
          ],
        },
      ],
      feature: {
        image: images.hero,
        title: c.sourcingFeature[0],
        href: p('/contact'),
        cta: c.sourcingFeature[1],
      },
    },
  ];
}
