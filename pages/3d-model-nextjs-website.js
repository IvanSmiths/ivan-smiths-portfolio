import SyntaxHighlighter from 'react-syntax-highlighter';
import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';

const Nextjs3dModelWebsite = () => {
  let { t } = useTranslation();
  const npx = `npx create-next-app`;
  const modelViewer = `npm i @google/model-viewer`;
  const modelViewerCode = `import '@google/model-viewer';
  
    const ModelTree = () => {
      return (
        <div>
          <model-viewer
            src="3d-model.glb"
            camera-controls
            ar
            auto-rotate
            camera-orbit="-9.511deg 86.41deg 1.755m"
            poster="poster.png"
          ></model-viewer>
        </div>
      );
    };
    
    export default ModelTree;`;
  const importCode = `import styles from '../styles/Home.module.css';
    import dynamic from 'next/dynamic';
    
    const ModelTree = dynamic(
      () => {
        return import('../components/ModelTree');
      },
      { ssr: false }
    );
    
    export default function Home() {
      return (
        <div className={styles.container}>
          <div>
            <ModelTree />
          </div>
        </div>
      );
    }
    `;

  return (
    <>
      <Head>
        <title>How to put 3d a model on Next.js</title>
        <meta
          name="description"
          content="In this tutorial, we will see how to put a 3d model in a Next.js website. The 3d model will be visible in your space in augmented reality"
        />
        <meta
          property="og:title"
          content="How to put a 3d model on a Next.js website"
        />
        <meta
          property="og:description"
          content="In this tutorial, we will see how to put a 3d model, visible in augmented reality, in a Next.js website."
        />
        <meta property="og:type" content="article" />
        <meta property="og:image:width" content="446" />
        <meta property="og:image:height" content="384" />
        <meta
          property="og:url"
          content="https://www.ivansmiths.com/it/3d-model-nextjs-website"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/yPY43j4/Immagine-2021-05-14-212905.jpg"
        />
        <meta property="og:image:type" content="image/jpeg" />
      </Head>
      <main className="guide-cnt">
        <article>
          <h1 className="big-font highlight-main">
            {t('nextjs-3d-model:title')}
          </h1>
          <h2 className="medium-font">{t('nextjs-3d-model:intro')}</h2>
          <p className="small-font">
            {t('nextjs-3d-model:p-1')}
            <br />
            <br />
            {t('nextjs-3d-model:p-2')}
          </p>
          <h2 className="medium-font">{t('nextjs-3d-model:title-2')}</h2>
          <p className="small-font">
            {t('nextjs-3d-model:p-3')}
            <a
              rel="noopener"
              target="_blank"
              href="https://github.com/IvanSmiths/tutorial-nextjs-3d-model"
            >
              <strong className="highlight-main underline">
                {t('nextjs-3d-model:p-3-2')}
              </strong>
            </a>
            {t('nextjs-3d-model:p-3-3')}
          </p>
          <h2 className="medium-font">{t('nextjs-3d-model:title-3')}</h2>
          <p className="small-font">
            {t('nextjs-3d-model:p-4')}
            <br />
            <br />
            <a rel="noopener" target="_blank" href="https://modelviewer.dev/">
              <strong className="highlight-main underline">
                {t('nextjs-3d-model:p-5')}
              </strong>
            </a>
            {t('nextjs-3d-model:p-5-2')}
          </p>
          <img
            className="guide-img-big"
            loading="lazy"
            src="nextjs-3d-model-1.jpg"
            height="378"
            width="711"
            alt="preview of an api"
          />
          <p className="small-font">{t('nextjs-3d-model:p-6')}</p>
          <img
            className="guide-img-big"
            loading="lazy"
            src="nextjs-3d-model-2.jpg"
            height="379"
            width="715"
            alt="preview of an api with a model"
          />
          <img
            className="guide-image-little"
            loading="lazy"
            src="nextjs-3d-model-3.jpg"
            height="378"
            width="179"
            alt="preview of a feature"
          />
          <p className="small-font">
            {t('nextjs-3d-model:p-7')}
            <br />
            <br />
            {t('nextjs-3d-model:p-8')}
          </p>
          <img
            className="guide-image-little"
            loading="lazy"
            src="nextjs-3d-model-4.jpg"
            height="378"
            width="168"
            alt="preview of another feature"
          />
          <img
            className="guide-image-little"
            loading="lazy"
            src="nextjs-3d-model-5.jpg"
            height="378"
            width="175"
            alt="feature for a 3d model"
          />
          <p className="small-font">{t('nextjs-3d-model:p-9')}</p>
          <h2 className="medium-font">{t('nextjs-3d-model:title-4')}</h2>
          <p className="small-font">{t('nextjs-3d-model:p-10')}</p>
          <SyntaxHighlighter className="script" language="javascript">
            {npx}
          </SyntaxHighlighter>
          <SyntaxHighlighter className="script" language="javascript">
            {modelViewer}
          </SyntaxHighlighter>
          <p className="small-font">{t('nextjs-3d-model:p-11')}</p>
          <img
            className="guide-image-little"
            loading="lazy"
            src="nextjs-3d-model-6.jpg"
            height="428"
            width="177"
            alt="project root"
          />
          <SyntaxHighlighter className="script" language="javascript">
            {modelViewerCode}
          </SyntaxHighlighter>
          <p className="small-font">{t('nextjs-3d-model:p-11')}</p>
          <SyntaxHighlighter className="script" language="javascript">
            {importCode}
          </SyntaxHighlighter>
          <p className="small-font">
            {t('nextjs-3d-model:p-12')}
            <br />
            <br />
            {t('nextjs-3d-model:p-13')}
          </p>
        </article>
      </main>
    </>
  );
};

export default Nextjs3dModelWebsite;
