import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Works = () => {
  let { t } = useTranslation();

  const [isMounted, setIsMounted] = useState(false);

  const defaultState = {
    opacity: 0,
    scale: 0.6,
  };

  return (
    <>
      <Head>
        <title>React developer Portfolio | Works</title>
        <meta
          name="description"
          content="Web developer portfolio with knowledge of React, Blender, 3D Modeling, AR and other fancy stuff. Come check it out! "
        />
      </Head>

      <main className="projects-cnt">
        <h1 className="big-font">
          <strong className="highlight-main">{t('works:title')}</strong>{' '}
          {t('works:title2')}{' '}
        </h1>
        <section>
          <Link href="/work-ideology">
            <a>
              <div
                onMouseEnter={() => setIsMounted(!isMounted)}
                onMouseLeave={() => setIsMounted(!isMounted)}
                className="works-card"
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
                        {t('works:see')}
                      </h2>
                    </motion.div>
                  )}
                </AnimatePresence>
                <img
                  height="400"
                  width="500"
                  src="/id-icon.svg"
                  alt="An image of a project"
                />
              </div>
            </a>
          </Link>
        </section>
      </main>
    </>
  );
};

export default Works;
