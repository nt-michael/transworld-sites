import Link from 'next/link';
import { company, emails } from '@/lib/content';
import type { Locale, Ui } from '@/lib/i18n';
import Logo from './Logo';

export default function Footer({ locale, ui }: { locale: Locale; ui: Ui }) {
  const p = (s = '') => `/${locale}${s}`;
  return (
    <footer className="site-footer">
      <div className="wrap footer-top">
        <div className="footer-brand">
          <Logo href={p()} />
          <p>{ui.tagline}</p>
          <Link href={p('/contact')} className="btn btn--primary btn--sm">
            {ui.contactUs}
          </Link>
        </div>
        <nav aria-label="Footer" className="footer-cols">
          <div>
            <h2>{ui.group}</h2>
            <ul>
              <li><Link href={p('/about')}>{ui.about}</Link></li>
              <li><Link href={p('/partners')}>{ui.partners}</Link></li>
              <li><Link href={p('/careers')}>{ui.careers}</Link></li>
              <li><Link href={p('/contact')}>{ui.contact}</Link></li>
            </ul>
          </div>
          <div>
            <h2>Global Trade</h2>
            <ul>
              <li><Link href={p('/global-trade')}>{ui.overview}</Link></li>
              <li><Link href={p('/global-trade#products')}>{ui.products}</Link></li>
              <li><Link href={p('/global-trade/services')}>{ui.tradeServices}</Link></li>
              <li><Link href={p('/global-trade/farm-to-market')}>{ui.farmToMarket}</Link></li>
            </ul>
          </div>
          <div>
            <h2>{ui.getInTouch}</h2>
            <ul>
              <li><a href={company.phoneHref}>{company.phoneDisplay}</a></li>
              {emails.map((e) => (
                <li key={e.address}><a href={`mailto:${e.address}`}>{e.address}</a></li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
      <div className="footer-legal">
        <div className="wrap footer-legal-row">
          <p>
            © {new Date().getFullYear()} {company.inc} · {ui.regNo} {company.registration}
          </p>
          <ul>
            <li><Link href={p('/privacy')}>{ui.privacy}</Link></li>
            <li><Link href={p('/terms')}>{ui.terms}</Link></li>
            <li><Link href={p('/accessibility')}>{ui.accessibility}</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
