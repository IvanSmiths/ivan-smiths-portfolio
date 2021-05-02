import React from 'react';
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
    <main className="main">
      <h1 className="big-font">{t('skills:skills-desc')}</h1>
      <section className="card-cnt">
        <div className="card">
          <div className="card-content">
            <div className="card-front">
              <img
                className="card-ico card-html"
                src="/html-ico.svg"
                alt="An icon of Html"
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
                className="card-ico"
                src="/css-ico.svg"
                alt="An icon of Css"
              />
            </div>
            <div className="card-back">
              <p className="card-body small-font">{t('skills:css')}</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="card-front">
              <img
                className="card-ico"
                src="/javascript-ico.svg"
                alt="An icon of Javascript"
              />
            </div>
            <div className="card-back">
              <p className="card-body small-font">{t('skills:js')}</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="card-front">
              <img
                className="card-ico card-react"
                src="/react-ico.svg"
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
                className="card-ico card-node"
                src="/nodejs-ico.svg"
                alt="An icon of Node.js"
              />
            </div>
            <div className="card-back">
              <p className="card-body small-font">{t('skills:node')}</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="card-front">
              <img
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
      </section>
    </main>
  );
};

export default Skills;
