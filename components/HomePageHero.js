import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const ModelMe = dynamic(
  () => {
    return import('./ModelMe');
  },
  { ssr: false }
);

const Hero = () => {
  let { t } = useTranslation();

  return (
    <header className="cnt-hero">
      <div className="hero-1">
        <h1 className="big-font title">
          {t('home:title')} <br />
          <strong className="highlight-main">{t('home:title2')}</strong>
        </h1>
        <p className="small-font">
          <strong className="highlight">{t('home:hero-1')}</strong>
          {t('home:hero-1-2')}
        </p>
        <div className="hero-btn">
          <Link href="/contact">
            <a className="btn-line">{t('home:btn-c')}</a>
          </Link>
          <Link href="/works">
            <a className="btn">{t('home:btn')}</a>
          </Link>
        </div>
        <div className="ico-cnt-absolute">
          <a
            target="_blank"
            rel="noopener"
            href="https://github.com/IvanSmiths"
          >
            <img
              height="22"
              width="22"
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
              height="22"
              width="22"
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
              height="22"
              width="22"
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
              height="22"
              width="22"
              loading="lazy"
              src="/linkedin-ico.svg"
              alt="An icon of Linkedin"
            />
          </a>
        </div>
      </div>
      <div className="hero-2">
        <img
          src="./brushstroke.svg"
          className="square"
          height="620px"
          width="600px"
          alt="squares"
        />
        <ModelMe />
      </div>
    </header>
  );
};

export default Hero;
