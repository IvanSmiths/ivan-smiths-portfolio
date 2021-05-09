import useTranslation from 'next-translate/useTranslation';

function Contact() {
  let { t } = useTranslation();
  return (
    <>
      <main className="contact-cnt">
        <h1 className="big-font">
          {t('contact:title')} <br />
          <strong className="highlight-main">{t('contact:title2')}</strong>
        </h1>
        <div className="zelda-cnt">
          <span className="big-font">🔥</span>
          <span className="big-font">👴</span>
          <span className="big-font">🔥</span>
        </div>
        <div className="email-cnt">
          <h2 className="btn">info@ivansmiths.com</h2>
          <span className="big-font">🙌</span>
        </div>
        <h2 className="medium-font highlight-main">{t('contact:emailh2')}</h2>
        <div className="form-cnt">
          <form
            action="https://formsubmit.co/info@ivansmiths.com"
            method="POST"
            className="form"
          >
            <input
              type="hidden"
              name="_next"
              value="http://localhost:3000/message"
            />
            <input type="hidden" name="_subject" value="IvanSmiths | Info" />
            <label htmlFor="name" className="small-font">
              {t('contact:name')}
            </label>
            <input type="text" name="name" minLength="3" required />
            <label htmlFor="object" className="small-font">
              {t('contact:object')}
            </label>
            <input type="text" name="object" minLength="4" required />
            <label htmlFor="email" className="small-font">
              Email
            </label>
            <input type="email" name="email" minLength="6" required />
            <label className="small-font" htmlFor="message">
              {t('contact:message')}
            </label>
            <textarea
              name="message"
              minLength="10"
              cols="30"
              rows="10"
            ></textarea>
            <button className="btn" type="submit">
              Send Email
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

export default Contact;
