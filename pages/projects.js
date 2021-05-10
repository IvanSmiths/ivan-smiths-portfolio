import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

const Projects = () => {
  let { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('projects:head-title')}</title>
        <meta name="description" content={t('projects:head-desc')} />
      </Head>
      <main className="projects-cnt">
        <h1 className="big-font">
          <strong className="highlight-main">{t('projects:title')}</strong>
          {t('projects:title2')}
        </h1>
        <Link href="/project-holycannoli">
          <a>
            <img
              className="project-img"
              height="400"
              src="/project-2.jpg"
              alt="The project Holy Cannoli"
            />
          </a>
        </Link>
        <Link href="/project-old-portfolio">
          <a>
            <img
              className="project-img"
              height="400"
              src="/project-old.jpg"
              alt="The old portfolio"
            />
          </a>
        </Link>
      </main>
    </>
  );
};

export default Projects;
