import { images, products } from './content';
import { navCopy } from './copy';
import type { Locale, Ui } from './i18n';
import { getData } from './tx/data';

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
  ];
}
