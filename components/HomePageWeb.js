import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import useTranslation from 'next-translate/useTranslation';

const HomePageWeb = () => {
  let { t } = useTranslation();

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="services-cnt">
      <div className="services-left">
        <h2 className="tiny-font sub-title sub-title3">
          {t('home:services-sub')}
        </h2>
      </div>
      <div className="services-center ser-web">
        <img
          style={{ transform: `translateY(${offsetY * 0.1}px)` }}
          loading="lazy"
          src="website-example-2.jpg"
          width="500px"
          height="500px"
          className="service-image-parallax par-2"
          alt="website example"
        />
        <img
          style={{ transform: `translateY(${offsetY * 0.1}px)` }}
          loading="lazy"
          src="website-example.jpg"
          width="500px"
          height="500px"
          className="service-image-parallax par"
          alt="website example"
        />
        <h3 className="large-font">
          SVILUPPO DI <br /> WEBSITES
        </h3>
      </div>
      <div className="services-desc">
        <div className="services-desc-1">
          <p className="small-font">
            {t('home:web')}
            <b className="highlight">{t('home:web-2')}</b>
            <br />
            <br />
            {t('home:web-3')}
            <b className="highlight">{t('home:web-4')}</b>
            {t('home:web-5')}
          </p>
        </div>
        <div className="services-desc-2">
          <ul>
            <li className="small-font">
              {t('home:web-stack')}{' '}
              <b className="highlight-main">React.js, Next.js, PostgresSql</b>
            </li>
            <li className="small-font">
              {t('home:web-stack-2')}{' '}
              <b className="highlight-main">Google Analitycs, Hotjar</b>
            </li>
            <li className="small-font">
              {t('home:web-stack-3')}{' '}
              <b className="highlight-main">Google AdSense, Carbon</b>
            </li>
          </ul>
        </div>
      </div>
      <div className="services-image-cnt">
        <img
          loading="lazy"
          src="website.jpg"
          width="500px"
          height="500px"
          className="services-image"
          alt="website example"
        />
        <p className="medium-font highlight">
          {t('home:web-desc-1')}
          <strong className="highlight-main">{t('home:web-desc-2')}</strong>
          {t('home:web-desc-3')}
        </p>
        <Link href="/contact">
          <a className="btn services-btn">{t('home:services-btn')}</a>
        </Link>
      </div>
    </section>
  );
};

export default HomePageWeb;
