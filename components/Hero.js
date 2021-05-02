import useTranslation from 'next-translate/useTranslation';
import dynamic from 'next/dynamic';

const Model = dynamic(
  () => {
    return import('./Model');
  },
  { ssr: false }
);

const Hero = () => {
  let { t } = useTranslation();
  return (
    <header>
      <section className="cnt-hero">
        <div className="hero-1">
          <p>{t('home:hero')}</p>
          <div className="hero-btn">
            <h2>Contact</h2>
            <h2>My works</h2>
          </div>
        </div>
        <div className="hero-2">
          <span className="aurora aurora-1"></span>
          <Model />
        </div>
      </section>
    </header>
  );
};

export default Hero;
