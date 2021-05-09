import '../styles/globals.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';
import useTranslation from 'next-translate/useTranslation';
import CookieConsent from 'react-cookie-consent';
import Nav from '../components/Nav';

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
    </>
  );
}

export default MyApp;
