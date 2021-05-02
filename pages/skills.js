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
      <h2 className="medium-font">MY 6 (+1) PACK</h2>
      <section className="card-cnt">
        <div className="card">
          <div className="card-content">
            <div className="card-front">
              <img
                className="card-ico card-html"
                src="./img/html-ico.svg"
                alt="An icon of Html"
              />
            </div>
            <div className="card-back">
              <p className="h6-title card-body">
                <span className="paragraph-gray">&lt;p&gt;</span>
                <strong className="highlight">
                  SEO friendly code is a MUST!{' '}
                </strong>
                Search engine's web crawler are always pushing up well coded
                websites, don't let your project drown!
                <span className="paragraph-gray">&lt;/p&gt;</span>
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="card-front">
              <img
                className="card-ico"
                src="./img/css-ico.svg"
                alt="An icon of Css"
              />
            </div>
            <div className="card-back">
              <p className="card-body h6-title"></p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="card-front">
              <img
                className="card-ico"
                src="./img/javascript-ico.svg"
                alt="An icon of Javascript"
              />
            </div>
            <div className="card-back">
              <p className="card-body h6-title"></p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="card-front">
              <img
                className="card-ico card-react"
                src="./img/react-ico.svg"
                alt="An icon of React.js"
              />
            </div>
            <div className="card-back">
              <p className="card-body h6-title">
                <span className="paragraph-gray">&lt;&gt;</span>
                React, with
                <span className="highlight">Next.Js & Gatsby</span> is my most
                valuable skill. I have great knowledge about making optimized
                websites, both server side rendering, and static ones.
                <span className="paragraph-gray">&lt;/&gt;</span>
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="card-front">
              <img
                className="card-ico card-node"
                src="./img/nodejs-ico.svg"
                alt="An icon of Node.js"
              />
            </div>
            <div className="card-back">
              <p className="card-body h6-title"></p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="card-front">
              <img
                className="card-ico card-mongodb"
                src="./img/wordpress-ico.svg"
                alt="An icon of Wordpress"
              />
            </div>
            <div className="card-back">
              <p className="card-body h6-title">
                Yeah that's WordPress. Knowing how to choose the best plugins
                and themes, is the key to have a
                <span className="highlight">fast and optimized</span> WordPress
                website.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="card-front">
              <img
                className="card-ico"
                src="./img/blender-ico.svg"
                alt="An icon of Blender"
              />
            </div>
            <div className="card-back card-blender">
              <ModelCube />

              <p className="card-body h6-title">
                What's this?! This is Blender! A free and open source software
                that i use, for making
                <span className="highlight">3D/AR stuff</span>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Skills;
