import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import Score from './Score';
import GetInTouch from './GetInTouch';
import ReactCode from './ReactCode';

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
  const [visible, setVisible] = useState(false);

  const changeLayout = () => {
    if (window.scrollY >= 900) {
      setLayout(true);
    } else {
      setLayout(false);
    }
  };

  if (process.browser) {
    window.addEventListener('scroll', changeLayout);
  }

  const changeVisible = () => {
    if (window.scrollY >= 80) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  if (process.browser) {
    window.addEventListener('scroll', changeVisible);
  }

  let { t } = useTranslation();

  return (
    <header>
      <section className="cnt-hero">
        <div className={layout ? 'hero-1-2' : 'hero-1'}>
          <h1 className="big-font">
            {t('home:title')}{' '}
            <strong className="highlight-main">{t('home:title2')}</strong>
          </h1>
          <p className="small-font">
            <strong className="highlight-main">{t('home:strong')}</strong>
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
            <a
              target="_blank"
              rel="noopener"
              href="https://github.com/IvanSmiths"
            >
              <img
                height="24"
                width="24"
                loading="lazy"
                src="/github-ico.svg"
                alt="An icon of GitHub"
              />
            </a>
            <a
              target="_blank"
              rel="noopener"
              href="https://www.artstation.com/ivansmiths"
            >
              <img
                height="24"
                width="24"
                loading="lazy"
                src="/artstation-ico.svg"
                alt="An icon of ArtStation"
              />
            </a>
            <a
              target="_blank"
              rel="noopener"
              href="https://www.instagram.com/ivan_smiths/"
            >
              <img
                height="24"
                width="24"
                loading="lazy"
                src="/instagram-ico.svg"
                alt="An icon of Instagram"
              />
            </a>
            <a
              target="_blank"
              rel="noopener"
              href="https://it.linkedin.com/in/ivan-fabbri-932aaa205?trk=people-guest_people_search-card"
            >
              <img
                height="24"
                width="24"
                loading="lazy"
                src="/linkedin-ico.svg"
                alt="An icon of Linkedin"
              />
            </a>
          </div>
          <div className="scroll-down-cnt">
            <img
              className="scroll-down"
              src="/scroll-down.svg"
              height="24"
              width="24"
              alt="scroll down"
            />
          </div>
        </div>
        <div className="hero-2">
          <ModelMe />
          <ModelRobot />
        </div>
      </section>
      <div className={visible ? 'test2' : 'test'}></div>
      <section>
        <div className="score-title-cnt">
          <h2 className="big-font">
            {t('home:score-title')} <br />
            <strong className="highlight-main">{t('home:score-title2')}</strong>
          </h2>
          <p className="small-font highlight">
            {t('home:score-desc')}{' '}
            <strong className="highlight-main">{t('home:score-desc2')}</strong>
          </p>
        </div>
        <Score />
      </section>
      <section className="why-me-cnt">
        <h2 className="medium-font">
          {t('home:why')}
          <strong className="highlight-main">{t('home:why2')}</strong>
        </h2>
        <div className="why-me-card-cnt">
          <div className="why-card-cnt">
            <div className="why-card">
              <div className="ico-title-cnt">
                <img
                  src="speed-icon.svg"
                  loading="lazy"
                  height="48"
                  width="48"
                  alt="Icon of speed"
                />
                <h3 className="btn-font highlight">{t('home:card-title')}</h3>
              </div>
              <p className="small-font">
                {t('home:card-desc')}
                <strong className="highlight-main">
                  {t('home:card-desc1-2')}
                </strong>
                {t('home:card-desc1-3')}
              </p>
            </div>
            <div className="why-card">
              <div className="ico-title-cnt">
                <img
                  src="code-icon.svg"
                  loading="lazy"
                  height="48"
                  width="48"
                  alt="Icon of code"
                />
                <h3 className="btn-font highlight">{t('home:card-title2')}</h3>
              </div>
              <p className="small-font">
                {t('home:card-desc2')}
                <strong className="highlight-main">
                  {t('home:card-desc2-2')}
                </strong>
              </p>
            </div>
            <div className="why-card">
              <div className="ico-title-cnt">
                <img
                  src="hosting-icon.svg"
                  loading="lazy"
                  height="48"
                  width="48"
                  alt="Icon of hosting"
                />
                <h3 className="btn-font highlight">{t('home:card-title3')}</h3>
              </div>
              <p className="small-font">
                {t('home:card-desc3')}
                <span className="highlight-main">{t('home:card-desc3-2')}</span>
                {t('home:card-desc3-3')}
              </p>
            </div>
          </div>
          <div className="why-card-cnt">
            <div className="why-card">
              <div className="ico-title-cnt">
                <img
                  src="language-icon.svg"
                  loading="lazy"
                  height="48"
                  width="48"
                  alt="Icon of language"
                />
                <h3 className="btn-font highlight">{t('home:card-title5')}</h3>
              </div>
              <p className="small-font">
                {t('home:card-desc5')}
                <span className="highlight-main">{t('home:card-desc5-2')}</span>
                {t('home:card-desc5-3')}
              </p>
            </div>
            <div className="why-card">
              <div className="ico-title-cnt">
                <img
                  src="3d-icon.svg"
                  loading="lazy"
                  height="48"
                  width="48"
                  alt="Icon of 3d"
                />
                <h3 className="btn-font highlight">{t('home:card-title4')}</h3>
              </div>
              <p className="small-font">
                {t('home:card-desc4')}{' '}
                <span className="highlight-main">{t('home:card-desc4-2')}</span>
                {t('home:card-desc4-3')}
              </p>
            </div>
            <div className="why-card">
              <div className="ico-title-cnt">
                <img
                  src="security-icon.svg"
                  loading="lazy"
                  height="48"
                  width="48"
                  alt="Icon of security"
                />
                <h3 className="btn-font highlight">{t('home:card-title6')}</h3>
              </div>
              <p className="small-font">
                {t('home:card-desc6')}
                <span className="highlight-main">{t('home:card-desc6-2')}</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <ReactCode />
      <GetInTouch />
    </header>
  );
};

export default Hero;
