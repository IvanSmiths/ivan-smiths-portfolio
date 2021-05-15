import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import Link from 'next/link';

const ProjectOldPortfolio = () => {
  let { t } = useTranslation();

  const Headtitle = 'Old Portfolio';
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
              {t('pro-old-portfolio:title')} <br />{' '}
              <strong className="highlight-main2">
                {t('pro-old-portfolio:title2')}
              </strong>{' '}
            </h1>
            <h2 className="small-font2">{t('pro-old-portfolio:subtitle')}</h2>
          </div>
          <div>
            <img
              className="cannolo"
              height="300"
              width="300"
              src="/old-portfolio1.jpg"
              alt="An image of a project"
            />
          </div>
        </section>
        <section className="pro-card-cnt">
          <div className="pro-card">
            <h2 className="small-font highlight">
              {t('pro-old-portfolio:card-type')}
            </h2>
            <h3 className="medium-font highlight-main">
              {t('pro-old-portfolio:card-type2')}
              <span className="del">
                {t('pro-old-portfolio:card-type3')}
              </span>{' '}
            </h3>
          </div>
          <div className="pro-card">
            <h2 className="small-font highlight">
              {t('pro-old-portfolio:card-stack')}
            </h2>
            <h3 className="medium-font highlight-main">
              Html, Css, JavaScript, Blender
            </h3>
          </div>
          <div className="pro-card">
            <h2 className="small-font highlight">GitHub Repo</h2>
            <a
              target="_blank"
              rel="noopener"
              href="https://github.com/IvanSmiths/ivansmiths"
            >
              <h3 className="medium-font highlight-main underline">
                {t('pro-old-portfolio:card-repo')}
              </h3>
            </a>
          </div>
          <div className="pro-card">
            <h2 className="small-font highlight">
              {t('pro-old-portfolio:card-web')}
            </h2>
            <a
              target="_blank"
              rel="noopener"
              href="https://ivansmiths.netlify.app/"
            >
              <h3 className="medium-font highlight-main underline">
                {t('pro-old-portfolio:card-web2')}
              </h3>
            </a>
          </div>
        </section>
        <section className="pro-desc-cnt">
          <div>
            <h2 className="medium-font">{t('pro-old-portfolio:quest')}</h2>
            <p className="small-font">
              {t('pro-old-portfolio:desc')}
              <strong className="highlight-main">
                {t('pro-old-portfolio:desc-2')}
              </strong>
            </p>
          </div>
          <div>
            <img
              className="cannolo"
              height="300"
              width="300"
              src="/old-project2.jpg"
              alt="An image of a project"
            />
          </div>
        </section>
        <div className="other-pro">
          <Link href="/project-holycannoli">
            <a>
              <h2 className="btn underline highlight-main">
                {'<'}- Holy Cannoli!
              </h2>
            </a>
          </Link>
          <Link href="/project-old-portfolio">
            <a>
              <h2 className="btn underline highlight-main">Red Mood -{'>'}</h2>
            </a>
          </Link>
        </div>
      </main>
    </>
  );
};

export default ProjectOldPortfolio;
