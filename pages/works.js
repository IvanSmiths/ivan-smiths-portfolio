import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

const Works = () => {
  let { t } = useTranslation();

  return (
    <>
      <Head>
        <title>React developer Portfolio | Works</title>
        <meta
          name="description"
          content="Web developer portfolio with knowledge of React, Blender, 3D Modeling, AR and other fancy stuff. Come check it out! "
        />
      </Head>

      <main className="projects-cnt">
        <h1 className="big-font">
          <strong className="highlight-main">{t('works:title')}</strong>{' '}
          {t('works:title2')}{' '}
        </h1>
        <section className="works-cnt">
          <Link href="/work-ideology">
            <a>
              <img
                height="400"
                width="500"
                src="/id-ico.svg"
                alt="An image of a project"
              />
            </a>
          </Link>
        </section>
      </main>
    </>
  );
};

export default Works;
