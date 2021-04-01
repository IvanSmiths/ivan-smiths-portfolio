import { motion } from 'framer-motion';
import '../styles/globals.css';
import Nav from '../components/Nav';

function MyApp({ Component, pageProps, router }) {
  return (
    <motion.div
      key={router.route}
      initial="pageInitial"
      animate="pageAnimate"
      exit="pageExit"
      variants={{
        pageInitial: {
          opacity: 0,
        },
        pageAnimate: {
          opacity: 1,
        },
        pageExit: {
          backgroundColor: 'white',
          filter: `invert()`,
          opacity: 0,
        },
      }}
    >
      <Nav />
      <Component {...pageProps} />
    </motion.div>
  );
}

export default MyApp;
