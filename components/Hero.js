import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { useState, useCallback, useEffect } from 'react';
import dynamic from 'next/dynamic';

const Model = dynamic(
  () => {
    return import('./Model');
  },
  { ssr: false }
);

const Hero = () => {
  let { t } = useTranslation();
  const names = ['tony', 'elias', 'fadi'];
  const [newName, setnewName] = useState('');

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * names.length);
    setnewName(names[index]);
  }, []);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 3000);
    return () => clearInterval(intervalID);
  }, [shuffle]);
  return (
    <header>
      <section className="cnt-hero">
        <div className="hero-1">
          <h1 className="big-font highlight-main">
            {t('home:title')}
            <strong className="fade">{newName}</strong>
          </h1>
          <p>{t('home:hero')}</p>
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
                width="auto"
                loading="lazy"
                src="/github-ico.svg"
                alt="An icon of GitHub"
              />
            </a>
            <a href="https://www.artstation.com/ivansmiths">
              <img
                height="24"
                width="auto"
                loading="lazy"
                src="/artstation-ico.svg"
                alt="An icon of ArtStation"
              />
            </a>
            <a href="https://www.instagram.com/ivan_smiths/">
              <img
                height="24"
                width="auto"
                loading="lazy"
                src="/instagram-ico.svg"
                alt="An icon of Instagram"
              />
            </a>
            <img
              height="24"
              width="auto"
              loading="lazy"
              src="/linkedin-ico.svg"
              alt="An icon of Linkedin"
            />
          </div>
        </div>
        <div className="hero-2">
          <Model />
        </div>
      </section>
    </header>
  );
};

export default Hero;
