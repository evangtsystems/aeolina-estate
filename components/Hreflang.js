import Head from "next/head";

export default function Hreflang({ path = "/" }) {
  // Example: path="/villas/elea/"  -> https://aeolinavillas.com/en/villas/elea/
  const href = (lng) => `https://aeolinavillas.com/${lng}${path}`;
  return (
    <Head>
      <link rel="alternate" hrefLang="en" href={href("en")} />
      <link rel="alternate" hrefLang="el" href={href("el")} />
      <link rel="alternate" hrefLang="x-default" href={href("en")} />
    </Head>
  );
}
