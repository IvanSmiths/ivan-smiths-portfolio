import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { useState } from 'react';
import { useRouter } from 'next/router';

function Nav() {
  let router = useRouter();

  let { t } = useTranslation();

  const [isOpened, setIsOpened] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <nav className="nav">
      <div className="logo-cnt">
        <Link href="/">
          <img src="/favicon.svg" height="32" width="32" alt="Logo" />
        </Link>
      </div>
      <div className="lang-cnt-2">
        <button className="btn-lang" onClick={() => setIsOpened(!isOpened)}>
          {t('common:language')}
        </button>
        {isOpened && (
          <div onMouseLeave={() => setIsOpened(false)}>
            <ol className="lang-cnt">
              {router.locales.map((locale) => (
                <Link key={locale} locale={locale} href={router.asPath}>
                  <a>
                    <li className="language small-font" key={locale}>
                      {locale}
                    </li>
                  </a>
                </Link>
              ))}
            </ol>
          </div>
        )}
      </div>
      <div className="cnt-link">
        <ul className={isToggled ? 'toggle' : ''}>
          <li>
            <Link href="/guides">
              <a
                onClick={() => setIsToggled(!isToggled)}
                className="small-font btn-line2"
              >
                Guides
              </a>
            </Link>
          </li>
          <li>
            <Link href="/skills">
              <a
                onClick={() => setIsToggled(!isToggled)}
                className="small-font"
              >
                {t('common:skills')}
              </a>
            </Link>
          </li>
          <li>
            <Link href="/works">
              <a
                onClick={() => setIsToggled(!isToggled)}
                className="small-font"
              >
                {t('common:works')}
              </a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a
                onClick={() => setIsToggled(!isToggled)}
                className="small-font"
              >
                {t('common:projects')}
              </a>
            </Link>
          </li>
          <li>
            <Link href="/myself">
              <a
                onClick={() => setIsToggled(!isToggled)}
                className="small-font"
              >
                {t('common:myself')}
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a
                onClick={() => setIsToggled(!isToggled)}
                className="small-font"
              >
                {t('common:contact')}
              </a>
            </Link>
          </li>
          <li onClick={() => setIsToggled(!isToggled)} className="close">
            X
          </li>
        </ul>
        <div
          onClick={() => setIsToggled(!isToggled)}
          className="menu small-text"
        >
          |||
        </div>
      </div>
    </nav>
  );
}

export default Nav;
