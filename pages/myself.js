import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';

const MySelf = () => {
  let { t } = useTranslation();
  return (
    <>
      <Head>
        <title>React developer Portfolio | Myself</title>

        <meta
          name="description"
          content="Web developer portfolio with knowledge of React, Blender, 3D Modeling, AR and other fancy stuff. Come check it out! "
        />
      </Head>
      <main className="myself-main">
        <section className="myself-cnt">
          <div>
            <h1 className="big-font3">
              {t('myself:title')}{' '}
              <strong className="highlight-main"> {t('myself:title2')}</strong>
            </h1>
          </div>
          <div>
            <img
              height="111"
              width="339"
              src="myself.png"
              alt="Me in a fancy pose"
            />
          </div>
        </section>
        <section className="myself-card-cnt">
          <div className="pro-card">
            <h2 className="small-font highlight">{t('myself:name')}</h2>
            <h3 className="medium-font highlight-main">{t('myself:name2')}</h3>
          </div>
          <div className="pro-card">
            <h2 className="small-font highlight"> {t('myself:last')}</h2>
            <h3 className="medium-font highlight-main"> {t('myself:last2')}</h3>
          </div>
          <div className="pro-card">
            <h2 className="small-font highlight"> {t('myself:education')}</h2>
            <h3 className="medium-font highlight-main">
              {t('myself:education2')}
            </h3>
          </div>
          <div className="pro-card">
            <h2 className="small-font highlight"> {t('myself:courses')}</h2>
            <h3 className="medium-font highlight-main">
              {t('myself:courses2')}
            </h3>
          </div>
          <div className="pro-card">
            <h2 className="small-font highlight"> {t('myself:nationality')}</h2>
            <h3 className="medium-font highlight-main">
              {t('myself:nationality2')}
            </h3>
          </div>
          <div className="pro-card">
            <h2 className="small-font highlight"> {t('myself:languages')}</h2>
            <h3 className="medium-font highlight-main">
              {t('myself:languages2')}
            </h3>
          </div>
          <div className="pro-card">
            <h2 className="small-font highlight">{t('myself:age')}</h2>
            <h3 className="medium-font highlight-main">{t('myself:age2')}</h3>
          </div>
          <div className="pro-card">
            <h2 className="small-font highlight">{t('myself:living')}</h2>
            <h3 className="medium-font highlight-main">
              {t('myself:living2')}
            </h3>
          </div>
        </section>
      </main>
    </>
  );
};

export default MySelf;
