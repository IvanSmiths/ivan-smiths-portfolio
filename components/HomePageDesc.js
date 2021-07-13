import useTranslation from 'next-translate/useTranslation';

const HomePageDesc = () => {
  let { t } = useTranslation();
  return (
    <section className="desc-cnt">
      <img
        className="draw-first"
        src="triangle.svg"
        height="300px"
        width="300px"
        alt="draw of a triangle"
      />
      <img
        className="draw-second"
        src="draw-square.svg"
        height="100px"
        width="100px"
        alt="draw of a square"
      />
      <img
        className="draw-third"
        src="draw-circle.svg"
        height="350px"
        width="350px"
        alt="draw of a circle"
      />
      <span className="sub-title sub-title2"> {t('home:sub-desc')}</span>
      <p className="medium-font desc-paragraph">
        {t('home:desc')}
        <strong className="highlight-main2">{t('home:desc-2')}</strong>
        {t('home:desc-3')}
        <strong className="highlight-main2">{t('home:desc-4')}</strong>
        {t('home:desc-5')}
      </p>
    </section>
  );
};

export default HomePageDesc;
