import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

const Message = () => {
  let { t } = useTranslation();
  return (
    <main className="message-cnt">
      <h1 className="big-font highlight-main">{t('message:title')}</h1>
      <Link href="/">
        <a>
          <h2 className="btn">{t('message:sectitle')}</h2>
        </a>
      </Link>
    </main>
  );
};

export default Message;
