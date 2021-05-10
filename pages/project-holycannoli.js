import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import Link from 'next/link';

const ProjectHolycannoli = () => {
  let { t } = useTranslation();

  const Headtitle = 'Holy Cannoli!';

  return (
    <>
      <Head>
        <title>{`${Headtitle} is one of the projects that i did`}</title>
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
              src="/cannolo.jpg"
              alt="An image of a project"
            />
          </div>
        </section>
        <section className="pro-card-cnt">
          <div className="pro-card">
            <h2 className="small-font highlight">
              {t('pro-holycannoli:card-type')}
            </h2>
            <h3 className="medium-font highlight-main">
              {t('pro-holycannoli:card-type2')}
              <span className="del">
                {t('pro-holycannoli:card-type3')}
              </span>{' '}
            </h3>
          </div>
          <div className="pro-card">
            <h2 className="small-font highlight">
              {t('pro-holycannoli:card-stack')}
            </h2>
            <h3 className="medium-font highlight-main">
              Next.js, Blender, Zbrush
            </h3>
          </div>
          <div className="pro-card">
            <h2 className="small-font highlight">GitHub Repo</h2>
            <a
              target="_blank"
              rel="noopener"
              href="https://github.com/IvanSmiths/holy-cannoli"
            >
              <h3 className="medium-font highlight-main underline">
                Holy Cannoli Repo
              </h3>
            </a>
          </div>
          <div className="pro-card">
            <h2 className="small-font highlight">
              {t('pro-holycannoli:card-web')}
            </h2>
            <a target="_blank" rel="noopener" href="https://holycannoli.xyz/">
              <h3 className="medium-font highlight-main underline">
                Holy Cannoli!
              </h3>
            </a>
          </div>
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
          </div>
          <div>
            <img
              height="300"
              width="300"
              src="/qr-code.svg"
              alt="An image of a project"
            />
          </div>
        </section>
        <div className="other-pro">
          <div>
            <Link href="/project-old-portflio">
              <a>
                <h2 className="medium-font underline highlight-main">
                  BBB -{'>'}
                </h2>
              </a>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProjectHolycannoli;
