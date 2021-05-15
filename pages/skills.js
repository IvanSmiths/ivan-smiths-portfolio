import Head from 'next/head';
import dynamic from 'next/dynamic';
import useTranslation from 'next-translate/useTranslation';

const Skills = () => {
  const ModelCube = dynamic(
    () => {
      return import('../components/ModelCube');
    },
    { ssr: false }
  );

  let { t } = useTranslation();

  return (
    <>
      <Head>
        <title>React developer Portfolio | Skills</title>
        <meta
          name="description"
          content="Web developer portfolio with knowledge of React, Blender, 3D Modeling, AR and other fancy stuff. Come check it out! "
        />
      </Head>
      <main className="main">
        <h1 className="big-font">
          {t('skills:skills-web')}{' '}
          <span className="highlight-main">{t('skills:skills-web2')}</span>
        </h1>
        <section className="card-cnt">
          <div className="card">
            <div className="card-content">
              <div className="card-front">
                <img
                  loading="lazy"
                  height="58"
                  width="58"
                  className="card-ico card-html"
                  src="/html-ico.svg"
                  alt="An icon of Html"
                />
              </div>
              <div className="card-back">
                <p className="small-font card-body">
                  {t('skills:html')}
                  <strong className="highlight-main">
                    {t('skills:html2')}
                  </strong>
                  {t('skills:html3')}
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="card-front">
                <img
                  loading="lazy"
                  height="58"
                  width="58"
                  className="card-ico"
                  src="/css-ico.svg"
                  alt="An icon of Css"
                />
              </div>
              <div className="card-back">
                <p className="small-font card-body">
                  {t('skills:css')}

                  <strong className="highlight-main">{t('skills:css2')}</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="card-front">
                <img
                  loading="lazy"
                  height="58"
                  width="58"
                  className="card-ico"
                  src="/javascript-ico.svg"
                  alt="An icon of JavaScript"
                />
              </div>
              <div className="card-back">
                <p className="small-font card-body">
                  {t('skills:js')}
                  <strong className="highlight-main">{t('skills:js2')}</strong>
                  {t('skills:js3')}
                </p>
              </div>
            </div>
          </div>
          {/* <div className="card">
            <div className="card-content">
              <div className="card-front">
                <img
                  loading="lazy"
                  height="58"
                  width="58"
                  className="card-ico card-mongodb"
                  src="/graphql-ico.png"
                  alt="An icon of Graphql"
                />
              </div>
              <div className="card-back">
                {t('skills:graphql')}
                <span className="highlight-main">{t('skills:graphql2')}</span>
                {t('skills:graphql3')}
              </div>
            </div>
          </div> */}
          <div className="card">
            <div className="card-content">
              <div className="card-front">
                <img
                  loading="lazy"
                  height="58"
                  width="58"
                  className="card-ico card-react"
                  src="/react-ico.svg"
                  alt="An icon of React.js"
                />
              </div>
              <div className="card-back">
                <p className="card-body small-font">
                  {t('skills:react')}
                  <strong className="highlight-main">
                    {t('skills:react2')}
                  </strong>
                  {t('skills:react3')}
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="card-front">
                <img
                  loading="lazy"
                  height="58"
                  width="58"
                  className="card-ico card-mongodb"
                  src="/mongodb-ico.svg"
                  alt="An icon of MongoDb"
                />
              </div>
              <div className="card-back">
                <p className="card-body small-font">
                  {t('skills:mongodb')}
                  <span className="highlight-main">{t('skills:mongodb2')}</span>
                  {t('skills:mongodb3')}
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="card-front">
                <img
                  loading="lazy"
                  height="58"
                  width="58"
                  className="card-ico card-mongodb"
                  src="/wordpress-ico.svg"
                  alt="An icon of Wordpress"
                />
              </div>
              <div className="card-back">
                <p className="card-body small-font">
                  {t('skills:wp')}
                  <strong className="highlight-main">{t('skills:wp2')}</strong>
                  {t('skills:wp3')}
                </p>
              </div>
            </div>
          </div>
          {/* <div className="card">
            <div className="card-content">
              <div className="card-front">
                <img
                  loading="lazy"
                  height="58"
                  width="58"
                  className="card-ico card-mongodb"
                  src="/shopify-ico.svg"
                  alt="An icon of Shopify"
                />
              </div>
              <div className="card-back">
                {t('skills:shopify')}
                <span className="highlight-main">{t('skills:shopify2')}</span>
                {t('skills:shopify3')}
              </div>
            </div>
          </div> */}
        </section>
        <h2 className="big-font">
          {t('skills:skills-3d')}{' '}
          <span className="big-font highlight-main">
            {t('skills:skills-3d2')}
          </span>
        </h2>
        <section className="card-cnt">
          <div className="card">
            <div className="card-content">
              <div className="card-front">
                <img
                  loading="lazy"
                  height="58"
                  width="58"
                  className="card-ico"
                  src="/blender-ico.svg"
                  alt="An icon of Blender"
                />
              </div>
              <div className="card-back card-blender">
                <ModelCube />
                <p className="small-font">
                  {t('skills:blender')}
                  <span className="highlight-main">{t('skills:blender2')}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="card-front">
                <img
                  loading="lazy"
                  height="58"
                  width="58"
                  className="card-ico"
                  src="/zbrush-ico.png"
                  alt="An icon of Zbrush"
                />
              </div>
              <div className="card-back card-blender">
                <ModelCube />
                <p className="small-font">
                  {t('skills:zbrush')}
                  <span className="highlight-main">{t('skills:zbrush2')}</span>
                  {t('skills:zbrush3')}
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="card-front">
                <img
                  loading="lazy"
                  height="58"
                  width="58"
                  className="card-ico"
                  src="/substance-ico.png"
                  alt="An icon of the Substance package"
                />
              </div>
              <div className="card-back card-blender">
                <ModelCube />
                <p className="small-font">
                  {t('skills:substance')}
                  <span className="highlight-main">
                    {t('skills:substance2')}
                  </span>
                  {t('skills:substance3')}
                </p>
              </div>
            </div>
          </div>
        </section>
        <h2 className="big-font">{t('skills:skills-ad')}</h2>
        <section className="card-cnt">
          <div className="card">
            <div className="card-content">
              <div className="card-front">
                <img
                  loading="lazy"
                  height="58"
                  width="58"
                  className="card-ico"
                  src="/google-ads-ico.png"
                  alt="An icon of Google Ads"
                />
              </div>
              <div className="card-back">
                <p className="card-body small-font">
                  {t('skills:ads')}
                  <span className="highlight-main">{t('skills:ads2')}</span>
                  {t('skills:ads3')}
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="card-front">
                <img
                  loading="lazy"
                  height="58"
                  width="58"
                  className="card-ico"
                  src="/ac-ico.svg"
                  alt="An icon of ActiveCampaign"
                />
              </div>
              <div className="card-back">
                <p className="card-body small-font">
                  {t('skills:ac')}
                  <span className="highlight-main">{t('skills:ac2')}</span>
                  {t('skills:ac3')}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Skills;
