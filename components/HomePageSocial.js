import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

const HomePageWeb = () => {
  let { t } = useTranslation();
  return (
    <section className="services-cnt">
      <div className="services-left">
        <h2 className="tiny-font sub-title sub-title3">
          {t('home:services-sub')}
        </h2>
      </div>
      <div className="services-center">
        <h2 className="large-font">
          SOCIAL <br /> MEDIA <br /> MANAGING
        </h2>
      </div>
      <div className="services-desc">
        <div className="services-desc-1">
          <p className="small-font">
            {t('home:social')}
            <strong className="highlight">{t('home:social-2')}</strong>
            {t('home:social-3')}
            <strong className="highlight">{t('home:social-4')}</strong>
            <br />
            <br />
            {t('home:social-5')}
            <strong className="highlight">{t('home:social-6')}</strong>
            {t('home:social-7')}
          </p>
        </div>
        <div className="services-desc-2">
          <ul>
            <li className="small-font">
              {t('home:social-stack')}
              <strong className="highlight-main">
                Instagram, Facebook, Pinterest, LinkedIn
              </strong>
            </li>
          </ul>
        </div>
      </div>
      <div className="services-image-cnt">
        <img
          loading="lazy"
          src="social-media.jpg"
          width="500px"
          height="500px"
          className="services-image"
          alt="website example"
        />
        <p className="medium-font highlight">{t('home:social-desc')}</p>
        <Link href="/contact">
          <a className="btn services-btn">{t('home:services-btn')}</a>
        </Link>
      </div>
    </section>
  );
};

export default HomePageWeb;
