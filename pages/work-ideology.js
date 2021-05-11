import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';

const WorkIdeology = () => {
  let { t } = useTranslation();

  const Headtitle = 'Ideology';

  return (
    <>
      <Head>
        <title>{`${Headtitle}, work experience.`}</title>
        <meta
          name="description"
          content={`${Headtitle} is one of the works that i did`}
        />
      </Head>
      <main className="holycannoli-cnt">
        <section className="project-title-cnt">
          <div>
            <h1 className="big-font2">
              {t('work-id:title')} <br />{' '}
              <strong className="highlight-main2">IDEOLOGY</strong>{' '}
            </h1>
            <h2 className="small-font2">{t('work-id:subtitle')}</h2>
          </div>
          <div>
            <img
              className="cannolo"
              height="300"
              width="300"
              src="/id-icon2.svg"
              alt="An image of a project"
            />
          </div>
        </section>
        <section className="pro-card-cnt">
          <div className="pro-card">
            <h2 className="small-font highlight">{t('work-id:card-type')}</h2>
            <h3 className="medium-font highlight-main">
              {t('work-id:card-type2')}
            </h3>
          </div>
          <div className="pro-card">
            <h2 className="small-font highlight">{t('work-id:card-stack')}</h2>
            <h3 className="medium-font highlight-main">
              Html, Css, Js, WordPress, Active Campaign, Shopify, Google Ads
            </h3>
          </div>
          <div className="pro-card">
            <h2 className="small-font highlight">
              {t('work-id:card-duration')}
            </h2>
            <a
              target="_blank"
              rel="noopener"
              href="https://github.com/IvanSmiths/holy-cannoli"
            >
              <h3 className="medium-font highlight-main underline">
                {t('work-id:card-duration2')}
              </h3>
            </a>
          </div>
          <div className="pro-card">
            <h2 className="small-font highlight">{t('work-id:card-web')}</h2>
            <a target="_blank" rel="noopener" href="https://www.ideology.it/">
              <h3 className="medium-font highlight-main underline">Ideology</h3>
            </a>
          </div>
        </section>
        <section className="pro-desc-cnt">
          <div>
            <h2 className="medium-font">{t('work-id:quest')}</h2>
            <p className="small-font">
              {t('work-id:desc')}{' '}
              <strong className="highlight-main">{t('work-id:desc2')}</strong>
              {t('work-id:desc3')} <br /> <br /> {t('work-id:desc4')}
              <strong className="highlight-main">{t('work-id:desc5')}</strong>
              {t('work-id:desc6')}
            </p>
          </div>
          <div>
            <img
              className="cannolo"
              height="300"
              width="300"
              src="/id-icon.svg"
              alt="An image of a project"
            />
          </div>
        </section>
        <section className="direct-cnt">
          <h2 className="medium-font">
            {t('work-id:workweb')}{' '}
            <strong className="highlight-main">{t('work-id:workweb2')}</strong>
            {t('work-id:workweb3')}
          </h2>
          <div className="direct-card-cnt">
            <a
              href="https://www.mabuprofumerie.it/"
              target="_blank"
              rel="noopener"
            >
              <div>
                <img
                  src="/mabu-icon.svg"
                  height="200"
                  width="200"
                  alt="Icon of the website mabù"
                />
              </div>
            </a>
            <a
              href="https://www.ristorantebon.it/"
              target="_blank"
              rel="noopener"
            >
              <div>
                <img
                  src="/bon-icon.png"
                  height="100"
                  width="200"
                  alt="Icon of the website BON"
                />
              </div>
            </a>
            <a href="http://chiccaconfetti.com/" target="_blank" rel="noopener">
              <div>
                <img
                  src="/chiccaconfetti-icon.svg"
                  height="200"
                  width="200"
                  alt="Icon of the website Chicca Confetti"
                />
              </div>
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default WorkIdeology;
