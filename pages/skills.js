import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const Skills = () => {
  let { t } = useTranslation();
  return <main>{t('skills:skills-desc')}</main>;
};

export default Skills;
