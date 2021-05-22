import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Projects = () => {
  let { t } = useTranslation();

  const [isMounted, setIsMounted] = useState(false);
  const [isMounted2, setIsMounted2] = useState(false);

  const defaultState = {
    opacity: 0,
    scale: 0.6,
  };

  return (
    <>
      <Head>
        <title>{t('projects:head-title')}</title>
        <meta name="description" content={t('projects:head-desc')} />
      </Head>
      <main className="projects-cnt">
        <h1 className="big-font">
          <strong className="highlight-main">{t('projects:title')}</strong>
          {t('projects:title2')}
        </h1>
        <Link href="/project-holycannoli">
          <a>
            <div
              className="project-card"
              onMouseEnter={() => setIsMounted(!isMounted)}
              onMouseLeave={() => setIsMounted(!isMounted)}
            >
              <AnimatePresence>
                {isMounted && (
                  <motion.div
                    className="block"
                    initial={defaultState}
                    exit={defaultState}
                    animate={{
                      opacity: 1,
                      boxShadow: '1px 1px 10px rgba(0, 0, 0, 0.3)',
                      scale: 1,
                    }}
                  >
                    <h2 className="large-font highlight-main2">
                      {t('projects:see')}
                    </h2>
                  </motion.div>
                )}
              </AnimatePresence>
              <img
                className="project-img"
                height="400"
                src="/project-2.jpg"
                alt="The project Holy Cannoli"
              />
            </div>
          </a>
        </Link>
        <Link href="/project-old-portfolio">
          <a>
            <div
              className="project-card"
              onMouseEnter={() => setIsMounted2(!isMounted2)}
              onMouseLeave={() => setIsMounted2(!isMounted2)}
            >
              <AnimatePresence>
                {isMounted2 && (
                  <motion.div
                    className="block"
                    initial={defaultState}
                    exit={defaultState}
                    animate={{
                      opacity: 1,
                      boxShadow: '1px 1px 10px rgba(0, 0, 0, 0.3)',
                      scale: 1,
                    }}
                  >
                    <h2 className="large-font highlight-main2">
                      {t('projects:see')}
                    </h2>
                  </motion.div>
                )}
              </AnimatePresence>
              <img
                className="project-img"
                height="400"
                src="/project-old.jpg"
                alt="The old portfolio"
              />
            </div>
          </a>
        </Link>
      </main>
    </>
  );
};

export default Projects;
