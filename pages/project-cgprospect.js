import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import Link from 'next/link';

const ProjectCgprospect = () => {
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
              {t('pro-cgprospect:title')} <br />{' '}
              <strong className="highlight-main2">CG Prospect</strong>{' '}
            </h1>
            <h2 className="small-font2">{t('pro-cgprospect:subtitle')}</h2>
          </div>
          <div>
            <img
              className="cannolo"
              height="300"
              width="300"
              src="/cgprospect-desc.jpg"
              alt="An image of a project"
            />
          </div>
        </section>
        <section className="pro-card-cnt">
          <ul className="pro-card">
            <li className="small-font highlight">
              {t('pro-cgprospect:card-stack')}
            </li>
            <li className="medium-font highlight-main">Next.js, PostgreSql</li>
          </ul>
          <ul className="pro-card">
            <li className="small-font highlight">
              {t('pro-cgprospect:card-web')}
            </li>
            <a target="_blank" rel="noopener" href="https://cgprospect.com/">
              <li className="medium-font highlight-main underline">
                CG Prospect
              </li>
            </a>
          </ul>
        </section>
        <section className="pro-desc-cnt">
          <div>
            <h2 className="medium-font">{t('pro-cgprospect:quest')}</h2>
            <p className="small-font">
              {t('pro-cgprospect:desc')}{' '}
              <strong className="highlight-main">
                {t('pro-cgprospect:desc2')}
              </strong>
              {t('pro-cgprospect:desc3')} <br /> <br />{' '}
              {t('pro-cgprospect:desc4')}
              <strong className="highlight-main">
                {t('pro-cgprospect:desc5')}
              </strong>
              {t('pro-cgprospect:desc6')}
            </p>
            <a
              href="https://cgprospect.com/"
              className="btn underline highlight-main"
            >
              Visit it
            </a>
          </div>
          <div>
            <img
              className="cannolo"
              height="300"
              width="300"
              src="/3d-merch.jpg"
              alt="An image of a project"
            />
          </div>
        </section>
        <div className="other-pro2">
          <Link href="/project-old-portfolio">
            <a className="btn underline highlight-main">Old Portfolio</a>
          </Link>
        </div>
      </main>
    </>
  );
};

export default ProjectCgprospect;
