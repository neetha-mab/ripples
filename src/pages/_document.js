import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <script async src="/scripts/checkBrowser.js" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Condensed:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <body id='body'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}