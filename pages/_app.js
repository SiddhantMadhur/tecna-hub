import "../styles/globals.css";
import Head from "next/head";
import Navbar from "../components/navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>TecnaHub</title>
      </Head>
      <Navbar />
      <body>
        <Component {...pageProps} />
      </body>
    </>
  );
}

export default MyApp;
