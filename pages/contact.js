import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';

function Contact() {
  let { t } = useTranslation();
  return (
    <>
      <Head>
        <title>React developer Portfolio | Contact</title>
        <meta
          name="description"
          content="Web developer portfolio with knowledge of React, Blender, 3D Modeling, AR and other fancy stuff. Come check it out! "
        />
      </Head>
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
          <a href="mailto:info@ivansmiths.com">
            <h2 className="btn">info@ivansmiths.com</h2>
          </a>
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
            <input type="text" id="name" name="name" minLength="3" required />
            <label htmlFor="object" className="small-font">
              {t('contact:object')}
            </label>
            <input
              type="text"
              id="object"
              name="object"
              minLength="4"
              required
            />
            <label htmlFor="email" className="small-font">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              minLength="6"
              required
            />
            <label className="small-font" htmlFor="message">
              {t('contact:message')}
            </label>
            <textarea
              id="message"
              name="message"
              minLength="10"
              cols="30"
              rows="10"
            ></textarea>
            <button className="btn-contact" type="submit">
              {t('contact:send')}
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

export default Contact;
