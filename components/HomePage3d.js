import Link from 'next/link';
import dynamic from 'next/dynamic';
import useTranslation from 'next-translate/useTranslation';

const ModelMe2 = dynamic(
  () => {
    return import('./ModelMe2');
  },
  { ssr: false }
);

const HomePageWeb = () => {
  let { t } = useTranslation();
  return (
    <section className="services-cnt">
      <div className="services-left">
        <h2 className="tiny-font sub-title sub-title3">
          {t('home:services-sub')}
        </h2>
      </div>
      <div className="services-center">
        <h3 className="large-font">3D Modeling</h3>
      </div>
      <div className="services-desc">
        <div className="services-desc-1">
          <p className="small-font">
            {t('home:3d')}
            <b className="highlight">{t('home:3d-2')}</b>
            {t('home:3d-3')}
            <br />
            <br />
            {t('home:3d-4')}
            <b className="highlight">{t('home:3d-5')}</b>
            {t('home:3d-6')}
          </p>
        </div>
        <div className="services-desc-2">
          <ul>
            <li className="small-font">
              {t('home:3d-stack')}
              <b className="highlight-main">Blender, Zbrush, Substance 3D</b>
            </li>
          </ul>
        </div>
      </div>
      <div className="service-model-cnt">
        <ModelMe2 />
        <div className="service-model-cnt-desc">
          <p className="medium-font highlight">
            {t('home:3d-desc')}
            <a target="_blank" rel="noopener" href="https://www.cgprospect.com">
              <strong className="underline black">{t('home:3d-desc-2')}</strong>
            </a>
            {t('home:3d-desc-3')}
          </p>
          <Link href="/contact">
            <a className="btn services-btn">{t('home:services-btn')}</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomePageWeb;
