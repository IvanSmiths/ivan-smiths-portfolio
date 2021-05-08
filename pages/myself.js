import useTranslation from 'next-translate/useTranslation';

const MySelf = () => {
  let { t } = useTranslation();
  return (
    <main className="myself-main">
      <h1 className="big-font">
        {t('myself:title')}{' '}
        <strong className="highlight-main"> {t('myself:title2')}</strong>
      </h1>
      <section className="myself-cnt">
        <div className="list-cnt">
          <ul>
            <li className="small-font">
              {t('myself:name')}{' '}
              <strong className="highlight2">{t('myself:name2')}</strong>
            </li>
            <li className="small-font">
              {t('myself:last')}{' '}
              <strong className="highlight2">{t('myself:last2')}</strong>
            </li>
            <li className="small-font">
              {t('myself:nationality')}{' '}
              <strong className="highlight2">{t('myself:nationality2')}</strong>
            </li>
            <li className="small-font">
              {t('myself:languages')}{' '}
              <strong className="highlight2">{t('myself:languages2')}</strong>
            </li>
          </ul>
          <ul>
            <li className="small-font">
              {t('myself:age')}{' '}
              <strong className="highlight2">{t('myself:age2')}</strong>
            </li>
            <li className="small-font">
              {t('myself:living')}{' '}
              <strong className="highlight2">{t('myself:living2')}</strong>
            </li>
            <li className="small-font">
              {t('myself:education')}{' '}
              <strong className="highlight2">{t('myself:education2')}</strong>
            </li>
            <li className="small-font">
              Email: {''}
              <strong className="highlight-main">info@ivansmiths.com</strong>
            </li>
          </ul>
        </div>
        <div>
          <img
            height="400"
            width="400"
            src="myself-real.png"
            alt="A photo about me"
          />
        </div>
      </section>
    </main>
  );
};

export default MySelf;
