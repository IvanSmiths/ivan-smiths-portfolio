import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Guides = () => {
  return (
    <>
      <Head>
        <title>React developer Portfolio | Guides</title>

        <meta
          name="description"
          content="Guides page. Most of tem are about coding, but you can also find some 3D tutorials and other stuff."
        />
      </Head>
      <main className="guides-cnt">
        <h1 className="big-font">Guides and stuff</h1>
        <Link href="/guide-3d-model-nextjs-website">
          <a>
            <div className="guide-card">
              <img
                className="img-guide"
                src="/project-old.jpg"
                height="220"
                width="550"
                alt="3D model embed guide"
              />
              <div className="guide-card-text">
                <h2 className="small-font">12/05/2021 - Guide</h2>
                <h3 className="medium-font highlight-main">
                  How to put a 3D model on a Next.Js website
                </h3>
                <p className="small-font">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum,
                  provident voluptatum! Tempore architecto corrupti veritatis
                  quaerat laboriosam cumque nobis numquam ab, soluta, ducimus
                  dolor assumenda eum quia suscipit adipisci esse.
                </p>
              </div>
            </div>
          </a>
        </Link>
      </main>
    </>
  );
};

export default Guides;
