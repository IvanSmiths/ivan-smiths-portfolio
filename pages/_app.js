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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="Ivan Smiths" key="twhandle" />
        <meta property="og:title" content="Ivan Smiths's Portfolio" />
        <meta property="og:description" content="Ivan Smiths's Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ivansmiths.com" />
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
