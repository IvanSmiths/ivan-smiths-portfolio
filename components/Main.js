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
        <h2 className="sub-title sub-title3">{t('home:score-title')}</h2>
        <div className="score-title-cnt">
          <h3 className="medium-font highlight-main">
            {t('home:score-desc2')}
          </h3>
        </div>
        <Score />
      </section>
      <GetInTouch />
    </main>
  );
}

export default Main;
