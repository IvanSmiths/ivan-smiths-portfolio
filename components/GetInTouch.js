import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

const GetInTouch = () => {
  let { t } = useTranslation();
  return (
    <section className="question-cnt">
      <h2 className="medium-font">
        {t('home:question')}
        <strong className="highlight-main">{t('home:question-2')}</strong>
      </h2>
      <p className="small-font">{t('home:question-desc')}</p>
      <Link href="/questionary">
        <a>
          <h3 className="btn">{t('home:question-btn')}</h3>
        </a>
      </Link>
    </section>
  );
};

export default GetInTouch;
