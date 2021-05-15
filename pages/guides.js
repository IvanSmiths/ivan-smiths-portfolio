import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import Link from 'next/link';

const Guides = () => {
  let { t } = useTranslation();
  return (
    <>
      <Head>
        <title>React developer Portfolio | Guides</title>

        <meta
          name="description"
          content="Guides page. Most of them are about coding, but you can also find some 3D tutorials and other stuff."
        />
      </Head>
      <main className="guides-cnt">
        <h1 className="big-font"> {t('guides:title')}</h1>
        <Link href="/3d-model-nextjs-website">
          <a>
            <div className="guide-card">
              <img
                className="img-guide"
                src="/preview-nextjs-tutorial.jpg"
                height="333"
                width="768"
                alt="3D model embed guide"
              />
              <div className="guide-card-text">
                <h2 className="small-font">12/05/2021 - {t('guides:date')}</h2>
                <h3 className="medium-font highlight-main">
                  {t('guides:card-1-title')}
                </h3>
                <p className="small-font">{t('guides:card-1-desc')}</p>
              </div>
            </div>
          </a>
        </Link>
      </main>
    </>
  );
};

export default Guides;
