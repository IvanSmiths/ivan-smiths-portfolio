import useTranslation from 'next-translate/useTranslation';

const ReactCode = () => {
  let { t } = useTranslation();
  return (
    <section className="react-code-cnt">
      <h2 className="big-font">
        {t('home:react-code')}
        <strong className="highlight-main">{t('home:react-code-2')}</strong>
      </h2>
      <p className="small-font">
        {t('home:react-code-desc')}
        <br />
        <br />
        {t('home:react-code-desc-2')}
        <strong className="highlight-main">
          {t('home:react-code-desc-2-2')}
        </strong>
      </p>
    </section>
  );
};

export default ReactCode;
