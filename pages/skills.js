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
        <title>Portfolio</title>
        <meta
          name="description"
          content="Web developer portfolio with knowledge of React, Blender, 3D Modeling, AR and other fancy stuff. Come check it out! "
        />
      </Head>
      <main className="main">
        <h2 className="big-font">{t('skills:skills-web')}</h2>
        <section className="card-cnt">
          <div className="card">
            <div className="card-content">
              <div className="card-front">
                <img
                  height="58"
                  width="58"
                  className="card-ico card-html"
                  src="/html-ico.svg"
                  alt="An icon of Html"
                />
                <img
                  height="58"
                  width="58"
                  className="card-ico"
                  src="/css-ico.svg"
                  alt="An icon of Css"
                />
              </div>
              <div className="card-back">
                <p className="small-font card-body">{t('skills:html')}</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="card-front">
                <img
                  height="58"
                  width="58"
                  className="card-ico card-react"
                  src="/react-ico.svg"
                  alt="An icon of React.js"
                />
                <img
                  height="58"
                  width="58"
                  className="card-ico card-react"
                  src="/nextjs-ico.svg"
                  alt="An icon of React.js"
                />
              </div>
              <div className="card-back">
                <p className="card-body small-font">{t('skills:react')}</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="card-front">
                <img
                  height="58"
                  width="58"
                  className="card-ico card-mongodb"
                  src="/wordpress-ico.svg"
                  alt="An icon of Wordpress"
                />
              </div>
              <div className="card-back">
                <p className="card-body small-font">{t('skills:wp')}</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="card-front">
                <img
                  height="58"
                  width="58"
                  className="card-ico card-mongodb"
                  src="/shopify-ico.svg"
                  alt="An icon of Shopify"
                />
              </div>
              <div className="card-back">
                <p className="card-body small-font">{t('skills:wp')}</p>
              </div>
            </div>
          </div>
        </section>
        <h2 className="big-font">{t('skills:skills-3d')}</h2>
        <section className="card-cnt">
          <div className="card">
            <div className="card-content">
              <div className="card-front">
                <img
                  height="58"
                  width="58"
                  className="card-ico"
                  src="/blender-ico.svg"
                  alt="An icon of Blender"
                />
              </div>
              <div className="card-back card-blender">
                <ModelCube />

                <p className="card-body small-font">{t('skills:blender')}</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="card-front">
                <img
                  height="58"
                  width="58"
                  className="card-ico"
                  src="/zbrush-ico.png"
                  alt="An icon of Zbrush"
                />
              </div>
              <div className="card-back card-blender">
                <ModelCube />

                <p className="card-body small-font">{t('skills:blender')}</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="card-front">
                <img
                  height="58"
                  width="58"
                  className="card-ico"
                  src="/designer-ico.png"
                  alt="An icon of Substance Designer"
                />
                <img
                  height="58"
                  width="58"
                  className="card-ico"
                  src="/alchemist-ico.png"
                  alt="An icon of Substance Alchemist"
                />
              </div>
              <div className="card-back card-blender">
                <ModelCube />

                <p className="card-body small-font">{t('skills:blender')}</p>
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
                  height="58"
                  width="58"
                  className="card-ico"
                  src="/google-ads-ico.png"
                  alt="An icon of Substance Designer"
                />
              </div>
              <div className="card-back card-blender">
                <p className="card-body small-font">{t('skills:blender')}</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="card-front">
                <img
                  height="58"
                  width="58"
                  className="card-ico"
                  src="/mailchimp-ico.png"
                  alt="An icon of Substance Designer"
                />
              </div>
              <div className="card-back card-blender">
                <p className="card-body small-font">{t('skills:blender')}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Skills;
