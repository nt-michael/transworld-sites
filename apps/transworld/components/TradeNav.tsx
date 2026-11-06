import type { Locale, Ui } from '@/lib/i18n';
import NavLink from './NavLink';

/** Second-level menu shown on every Global Trade page. Sticks under the header. */
export default function TradeNav({ locale, ui }: { locale: Locale; ui: Ui }) {
  const p = (s = '') => `/${locale}/global-trade${s}`;
  return (
    <nav aria-label="Global Trade" className="subnav">
      <div className="wrap subnav-row">
        <span className="subnav-title" aria-hidden="true">Global Trade</span>
        <ul>
          <li><NavLink href={p()} exact>{ui.overview}</NavLink></li>
          <li><NavLink href={p('/services')}>{ui.tradeServices}</NavLink></li>
          <li><NavLink href={p('/farm-to-market')}>{ui.farmToMarket}</NavLink></li>
          <li><NavLink href={`/${locale}/quality-control`}>{({ en: 'Quality control', fr: 'Contrôle qualité', es: 'Control de calidad' } as const)[locale]}</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}
