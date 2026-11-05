import { getNav } from '@/lib/nav';
import type { Locale, Ui } from '@/lib/i18n';
import Logo from './Logo';
import SiteNav from './SiteNav';

export default function Header({ locale, ui }: { locale: Locale; ui: Ui }) {
  return (
    <header className="site-header">
      <div className="wrap header-row">
        <Logo href={`/${locale}`} />
        <SiteNav items={getNav(locale, ui)} locale={locale} ui={ui} />
      </div>
    </header>
  );
}
