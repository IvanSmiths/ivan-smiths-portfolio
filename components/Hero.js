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

  if (process.browser) {
    // Client-side-only code
    window.addEventListener('scroll', changeLayout);
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
      <section>
        <svg
          width="256"
          viewBox="0 0 128 128"
          fill="none"
          stroke-linejoin="round"
          class="score_score__1yBKT"
        >
          <g shape-rendering="geometricPrecision">
            <circle cx="64" cy="64" r="64" fill="#0CCE6B"></circle>
            <circle
              cx="64"
              cy="64"
              r="48"
              fill="none"
              stroke-width="10"
              stroke="rgba(0,0,0,.1)"
            ></circle>
            <circle
              cx="64"
              cy="64"
              r="48"
              fill="none"
              stroke-width="10"
              stroke="white"
              stroke-dasharray="301.59289474462014,301.59289474462014"
              stroke-dashoffset="18.095573684677206"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="score_progress__wg_vO"
            ></circle>
            <text
              x="64"
              y="75"
              fill="white"
              font-weight="800"
              font-size="32"
              text-anchor="middle"
            >
              96
            </text>
          </g>
        </svg>
      </section>
    </header>
  );
};

export default Hero;
