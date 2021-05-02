import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import React, { useState } from 'react';

function Nav() {
  let { t } = useTranslation();
  const [isToggled, setIsToggled] = useState(false);

  return (
    <nav className="nav">
      <div className="logo-cnt">
        <Link href="/">
          <a className="small-font">{t('common:home')}</a>
        </Link>
      </div>
      <div className="cnt-link">
        <ul className={isToggled ? 'toggle' : ''}>
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
