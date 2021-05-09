import '../styles/globals.css';
import Nav from '../components/Nav';

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
