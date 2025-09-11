// pages/_app.js
import "../i18n/i18n";          // <-- initialize i18n (required)
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

