import '../styles/globals.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';
import useTranslation from 'next-translate/useTranslation';
import CookieConsent from 'react-cookie-consent';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  let { t } = useTranslation();
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Ivan Smiths" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="Ivan Smiths" key="twhandle" />
        <meta property="og:title" content="Ivan Smiths's Portfolio" />
        <meta
          property="og:description"
          content="React developer and 3D passionated guy."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="144" />
        <meta property="og:image:height" content="144" />
        <meta property="og:url" content="https://ivansmiths.com" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="#372dbd" name="theme-color" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#372dbd" />
        <meta name="msapplication-navbutton-color" content="#372dbd" />
        <meta
          name="apple-mobile-web-app-title"
          content="Ivan Smiths's Portfolio"
        />
        <meta
          property="og:image:secure"
          content="https://i.ibb.co/T8XqgBK/icon-144.png"
        />
        <meta name="application-name" content="Ivan Smiths's Portfolio" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="apple-touch-icon" sizes="144x144" href="/icon-144.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/icon-114.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/icon-72.png" />
        <link rel="apple-touch-icon" href="/icon-57.png" />
        <link rel="shortcut icon" href="/icon-32.png" />
      </Head>
      <div className="ico-cnt-absolute">
        <a target="_blank" rel="noopener" href="https://github.com/IvanSmiths">
          <img
            height="22"
            width="22"
            loading="lazy"
            src="/github-ico.svg"
            alt="An icon of GitHub"
          />
        </a>
        <a
          target="_blank"
          rel="noopener"
          href="https://www.artstation.com/ivansmiths"
        >
          <img
            height="22"
            width="22"
            loading="lazy"
            src="/artstation-ico.svg"
            alt="An icon of ArtStation"
          />
        </a>
        <a
          target="_blank"
          rel="noopener"
          href="https://www.instagram.com/ivan_smiths/"
        >
          <img
            height="22"
            width="22"
            loading="lazy"
            src="/instagram-ico.svg"
            alt="An icon of Instagram"
          />
        </a>
        <a
          target="_blank"
          rel="noopener"
          href="https://it.linkedin.com/in/ivan-fabbri-932aaa205?trk=people-guest_people_search-card"
        >
          <img
            height="22"
            width="22"
            loading="lazy"
            src="/linkedin-ico.svg"
            alt="An icon of Linkedin"
          />
        </a>
      </div>
      <Nav />
      <Component {...pageProps} />
      <CookieConsent
        buttonClasses="btn-cookie"
        style={{
          background: '#d8d8d8d8',
          display: 'flex',
          justifyContent: 'center',
          color: 'black',
        }}
        buttonText={t('common:accept')}
      >
        {t('common:cookie')}
      </CookieConsent>
      <Footer />
    </>
  );
}

export default MyApp;
