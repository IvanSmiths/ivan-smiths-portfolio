import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';

const ProjectHolycannoli = () => {
  let { t } = useTranslation();

  const Headtitle = 'Holy Cannoli!';

  return (
    <>
      <Head>
        <title>{`${Headtitle}, project of Ivan Smiths`}</title>
        <meta
          name="description"
          content={`${Headtitle} is one of the projects that i did`}
        />
      </Head>
      <main className="holycannoli-cnt">
        <section className="project-title-cnt">
          <div>
            <h1 className="big-font2">
              {t('pro-holycannoli:title')} <br />{' '}
              <strong className="highlight-main2">HOLY CANNOLI!</strong>{' '}
            </h1>
            <h2 className="small-font2">{t('pro-holycannoli:subtitle')}</h2>
          </div>
          <div>
            <img
              className="cannolo"
              height="300"
              width="300"
              src="/cannolo.png"
              alt="An image of a project"
            />
          </div>
        </section>
        <section className="pro-card-cnt">
          <ul className="pro-card">
            <li className="small-font highlight">
              {t('pro-holycannoli:card-stack')}
            </li>
            <li className="medium-font highlight-main">
              Next.js, Blender, Zbrush
            </li>
          </ul>
          <ul className="pro-card">
            <li className="small-font highlight">GitHub Repo</li>
            <a
              target="_blank"
              rel="noopener"
              href="https://github.com/IvanSmiths/holy-cannoli"
            >
              <li className="medium-font highlight-main underline">
                Holy Cannoli Repo
              </li>
            </a>
          </ul>
          <ul className="pro-card">
            <li className="small-font highlight">
              {t('pro-holycannoli:card-web')}
            </li>
            <a target="_blank" rel="noopener" href="https://holycannoli.xyz/">
              <li className="medium-font highlight-main underline">
                Holy Cannoli!
              </li>
            </a>
          </ul>
        </section>
        <section className="pro-desc-cnt">
          <div>
            <h2 className="medium-font">{t('pro-holycannoli:quest')}</h2>
            <p className="small-font">
              {t('pro-holycannoli:desc')}{' '}
              <strong className="highlight-main">
                {t('pro-holycannoli:desc2')}
              </strong>
              {t('pro-holycannoli:desc3')} <br /> <br />{' '}
              {t('pro-holycannoli:desc4')}
              <strong className="highlight-main">
                {t('pro-holycannoli:desc5')}
              </strong>
              {t('pro-holycannoli:desc6')}
            </p>
            <a
              target="_blank"
              rel="noopener"
              href="https://holycannoly.xyz/"
              className="btn underline highlight-main"
            >
              {t('pro-holycannoli:cta')}
            </a>
          </div>
          <div>
            <img
              className="cannolo"
              height="300"
              width="300"
              src="/qr-code.svg"
              alt="An image of a project"
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default ProjectHolycannoli;
