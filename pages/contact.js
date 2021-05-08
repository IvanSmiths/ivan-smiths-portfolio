import useTranslation from 'next-translate/useTranslation';

function Contact() {
  let { t } = useTranslation();
  return (
    <main className="contact-cnt">
      <h1 className="big-font">
        {t('contact:title')}{' '}
        <strong className="highlight-main">{t('contact:title2')}</strong>
      </h1>
    </main>
  );
}

export default Contact;
