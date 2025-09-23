// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    // keep Next's defaults so nothing is undefined
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Google reCAPTCHA v3 (site key is public) */}
          <script
            src="https://www.google.com/recaptcha/api.js?render=6LcKpJ4rAAAAAIJIaCmwV6zA0lBFIzCcb597hJ6M"
            async
            defer
          />

          {/* Google Analytics GA4 */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-V2E1SF4C39"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-V2E1SF4C39', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

