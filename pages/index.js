import Head from 'next/head';
import Desc from '../components/HomePageDesc';
import Hero from '../components/HomePageHero';
import Main from '../components/Main';
import ServiceWeb from '../components/HomePageWeb';
import useTranslation from 'next-translate/useTranslation';

export default function Home() {
  let { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('home:head-title')}</title>
        <meta name="description" content={t('home:head-desc')} />
      </Head>
      <Hero />
      <Desc />
      <ServiceWeb />
      <Main />
    </>
  );
}
