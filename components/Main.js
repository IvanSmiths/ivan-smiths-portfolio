import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import HomeWhyMe from './HomeWhyMe';

function Main() {
  let { t } = useTranslation();
  return (
    <main>
      <HomeWhyMe />
    </main>
  );
}

export default Main;
