import useTranslation from 'next-translate/useTranslation';

const HomeWhyMe = () => {
  let { t } = useTranslation();
  return (
    <section className="why-me-cnt">
      <h2 className="big-font">
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
  );
};

export default HomeWhyMe;
