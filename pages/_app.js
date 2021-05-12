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
        <link
          rel="apple-touch-icon-precomposed"
          sizes="144x144"
          href="/icon-144.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="114x114"
          href="/icon-114.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="72x72"
          href="/icon-72.png"
        />
        <link rel="apple-touch-icon-precomposed" href="/icon-57.png" />
        <link rel="shortcut icon" href="/icon-32.png" />
      </Head>
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
