import useTranslation from 'next-translate/useTranslation';

const WorksId = ({ showModalW, setShowModalW }) => {
  let { t } = useTranslation();
  return (
    <>
      <div className="modal-cnt">
        <div className="modal">
          <h2 className="medium-font highlight-main">{t('works:id')}</h2>
          <p className="small-font">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            ratione perspiciatis fugit voluptate. Velit repellendus molestiae
            cupiditate beatae, enim aliquam veniam, illum corporis ullam quos
            corrupti minima quod. Ducimus, nihil. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ducimus ratione perspiciatis fugit
            voluptate. Velit repellendus molestiae cupiditate beatae, enim
            aliquam veniam, illum corporis ullam quos corrupti minima quod.
            Ducimus, nihil.
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
                Html, Css, JavaScript (jQuery), WordPress, ActiveCampaign,
                Shopify, Google ads.{' '}
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
