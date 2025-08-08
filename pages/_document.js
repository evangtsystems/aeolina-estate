import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google reCAPTCHA v3 */}
        <script
          src="https://www.google.com/recaptcha/api.js?render=6LcKpJ4rAAAAAIJIaCmwV6zA0lBFIzCcb597hJ6M"
          async
          defer
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

