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
          <ul className="pro-card">
            <li className="small-font highlight">
              {t('pro-old-portfolio:card-stack')}
            </li>
            <li className="medium-font highlight-main">
              Html, Css, JavaScript, Blender
            </li>
          </ul>
          <ul className="pro-card">
            <li className="small-font highlight">GitHub Repo</li>
            <a
              target="_blank"
              rel="noopener"
              href="https://github.com/IvanSmiths/ivansmiths"
            >
              <li className="medium-font highlight-main underline">
                {t('pro-old-portfolio:card-repo')}
              </li>
            </a>
          </ul>
          <ul className="pro-card">
            <li className="small-font highlight">
              {t('pro-old-portfolio:card-web')}
            </li>
            <a
              target="_blank"
              rel="noopener"
              href="https://ivansmiths.netlify.app/"
            >
              <li className="medium-font highlight-main underline">
                {t('pro-old-portfolio:card-web2')}
              </li>
            </a>
          </ul>
        </section>
        <section className="pro-desc-cnt">
          <ul>
            <li className="medium-font">{t('pro-old-portfolio:quest')}</li>
            <p className="small-font">
              {t('pro-old-portfolio:desc')}
              <strong className="highlight-main">
                {t('pro-old-portfolio:desc-2')}
              </strong>
            </p>
          </ul>
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
      </main>
    </>
  );
};

export default ProjectOldPortfolio;
