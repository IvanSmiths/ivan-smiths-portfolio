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
        <h2 className="large-font">WEBSITES</h2>
      </div>
      <div className="services-desc">
        <div className="services-desc-1">
          <p className="small-font">
            {t('home:web')}
            <strong className="highlight">{t('home:web-2')}</strong>
            <br />
            <br />
            {t('home:web-3')}
            <strong className="highlight">{t('home:web-4')}</strong>
            {t('home:web-5')}
          </p>
        </div>
        <div className="services-desc-2">
          <ul>
            <li className="small-font">
              {t('home:web-stack')}{' '}
              <strong className="highlight-main">
                React.js, Next.js, PostgresSql
              </strong>
            </li>
            <li className="small-font">
              {t('home:web-stack-2')}{' '}
              <strong className="highlight-main">
                Google Analitycs, Hotjar
              </strong>
            </li>
            <li className="small-font">
              {t('home:web-stack-3')}{' '}
              <strong className="highlight-main">Google AdSense, Carbon</strong>
            </li>
          </ul>
        </div>
      </div>
      <div className="services-image-cnt">
        <img
          loading="lazy"
          src="website.png"
          width="500px"
          height="500px"
          className="services-image"
          alt="website example"
        />
        <p className="medium-font highlight">
          From the physical shop owners, to the marletplace owners on Etsy,
          everyone needs a Website in order to promote their business on Google
          Ads and reach THOUSANDS of targeted clients.
        </p>
        <Link href="/contact">
          <a className="btn services-btn">Let's talk about this</a>
        </Link>
      </div>
    </section>
  );
};

export default HomePageWeb;
