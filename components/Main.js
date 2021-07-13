import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import GetInTouch from './GetInTouch';
import ReactCode from './ReactCode';
import Score from './Score';
import HomeWhyMe from './HomeWhyMe';

function Main() {
  let { t } = useTranslation();
  return (
    <main>
      <HomeWhyMe />
      <section>
        <div className="score-title-cnt">
          <h2 className="big-font">
            {t('home:score-title')} <br />
            <strong className="highlight-main">{t('home:score-title2')}</strong>
          </h2>
          <p className="small-font highlight">
            {t('home:score-desc')}{' '}
            <strong className="highlight-main">{t('home:score-desc2')}</strong>
          </p>
        </div>
        <Score />
      </section>
      <ReactCode />
      <GetInTouch />
    </main>
  );
}

export default Main;
