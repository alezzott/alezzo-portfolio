import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Defaults */}
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          {/* Theme / Favicon */}
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.svg" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" />
          <meta name="msapplication-TileColor" />
          <meta name="theme-color" content="#ffffff" />

          {/* Primary Meta Tags */}
          <meta name="description" content="Portfolio" />
          <meta name="keywords" content="portfolio, developer, programmer, alezzo, dev, programming, projects" />
          <meta name="author" content="Arnon Rodrigues, Alex Faustino" />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
