import Document, { Html, Head, Main, NextScript } from 'next/document';
import { GA_TRACKING_ID } from '../lib/gtag';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.svg" />
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta content="#372dbd" name="theme-color" />
          <meta
            name="apple-mobile-web-app-title"
            content="Ivan Smiths's Portfolio"
          />
          <meta name="application-name" content="Ivan Smiths's Portfolio" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="msapplication-navbutton-color" content="#372dbd" />
          <meta property="og:image:type" content="image/jpeg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
