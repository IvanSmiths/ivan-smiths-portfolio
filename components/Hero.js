import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const ModelMe = dynamic(
  () => {
    return import('./ModelMe');
  },
  { ssr: false }
);

const ModelRobot = dynamic(
  () => {
    return import('./ModelRobot');
  },
  { ssr: false }
);

const Hero = () => {
  const [layout, setLayout] = useState(false);

  const changeLayout = () => {
    if (window.scrollY >= 900) {
      setLayout(true);
    } else {
      setLayout(false);
    }
  };

  window.addEventListener('scroll', changeLayout);

  let { t } = useTranslation();

  return (
    <header>
      <section className="cnt-hero">
        <div className={layout ? 'hero-1-2' : 'hero-1'}>
          <h1 className="big-font">
            {t('home:title')}{' '}
            <strong className="highlight-main">{t('home:title2')}</strong>
          </h1>
          <p>
            <strong className="highlight-main underline">
              {t('home:strong')}
            </strong>
            {t('home:hero')}
          </p>
          <div className="hero-btn">
            <Link href="/contact">
              <a>
                <h2 className="btn-line">{t('home:btn-c')}</h2>
              </a>
            </Link>
            <Link href="/works">
              <a>
                <h2 className="btn">{t('home:btn')}</h2>
              </a>
            </Link>
          </div>
          <div className="ico-cnt">
            <a href="https://github.com/IvanSmiths">
              <img
                height="24"
                width="24"
                loading="lazy"
                src="/github-ico.svg"
                alt="An icon of GitHub"
              />
            </a>
            <a href="https://www.artstation.com/ivansmiths">
              <img
                height="24"
                width="24"
                loading="lazy"
                src="/artstation-ico.svg"
                alt="An icon of ArtStation"
              />
            </a>
            <a href="https://www.instagram.com/ivan_smiths/">
              <img
                height="24"
                width="24"
                loading="lazy"
                src="/instagram-ico.svg"
                alt="An icon of Instagram"
              />
            </a>
            <img
              height="24"
              width="24"
              loading="lazy"
              src="/linkedin-ico.svg"
              alt="An icon of Linkedin"
            />
          </div>
        </div>
        <div className="hero-2">
          <ModelMe />
          <ModelRobot />
        </div>
      </section>
    </header>
  );
};

export default Hero;
