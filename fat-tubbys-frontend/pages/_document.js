import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Edu+VIC+WA+NT+Beginner&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body data-theme="night">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
