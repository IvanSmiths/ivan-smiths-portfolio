import useTranslation from 'next-translate/useTranslation';

const WorksId = ({ showModalW, setShowModalW }) => {
  let { t } = useTranslation();
  return (
    <>
      <div className="modal-cnt">
        <div className="modal">
          <h2 className="medium-font highlight-main">{t('works:id')}</h2>
          <p className="small-font">
            {t('works:id-text')}
            <strong className="highlight-main">{t('works:id-text2')}</strong>
            {t('works:id-text3')}
            {t('works:id-text4')}
            <strong className="highlight-main">
              {t('works:id-text5')}
            </strong>{' '}
            <br />
            {t('works:id-text6')}
            <strong className="highlight-main">{t('works:id-text7')}</strong>
            {t('works:id-text8')}
            <strong className="highlight-main">{t('works:id-text9')}</strong>
            {t('works:id-text10')}
          </p>
          <ul className="list-project">
            <li className="small-font list-flex ">
              {t('works:type')}{' '}
              <strong className="highlight-2 left-m">
                {' '}
                {t('works:employee')}{' '}
              </strong>
            </li>
            <li className="small-font list-flex ">
              {t('works:date')}{' '}
              <strong className="highlight-2 left-m">
                {t('works:date2')}{' '}
              </strong>
            </li>
            <li className="small-font list-flex ">
              {t('works:stack')}{' '}
              <strong className="highlight-2 left-m">
                Html, Css, JavaScript, WordPress, ActiveCampaign, Shopify,
                Google Ads.{' '}
              </strong>
            </li>
            <li className="small-font">
              {t('works:company')}{' '}
              <a
                className="underline left-m highlight-main"
                target="_blank"
                rel="noopener"
                href="https://ideology.it"
              >
                {' '}
                Ideology.{' '}
              </a>
            </li>
            <li className="small-font">
              {t('works:websites')}
              <a
                className="underline left-m highlight-main"
                target="_blank"
                rel="noopener"
                href="https://www.mabuprofumerie.it/"
              >
                {' '}
                MABÙ
              </a>
              ,
              <a
                className="underline left-m highlight-main"
                target="_blank"
                rel="noopener"
                href="https://www.ristorantebon.it/"
              >
                {' '}
                Bon{' '}
              </a>
              ,
              <a
                className="underline left-m highlight-main"
                target="_blank"
                rel="noopener"
                href="http://chiccaconfetti.com/"
              >
                {' '}
                Chicca Confetti.
              </a>
            </li>
          </ul>
          <span
            className="close-modal"
            onClick={() => setShowModalW(!showModalW)}
          >
            X
          </span>
        </div>
      </div>
    </>
  );
};

export default WorksId;
