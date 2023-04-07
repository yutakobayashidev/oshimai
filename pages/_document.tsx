import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="icon alternate"
          type="image/png"
          href="https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/72x72/2642.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
