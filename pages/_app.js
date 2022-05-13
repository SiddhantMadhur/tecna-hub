import "../styles/globals.css";
import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>TecnaHub</title>
      </Head>
      <div class="alert alert-warning shadow-lg">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="stroke-current flex-shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <span>
            Warning: The site is a work in progress. Please visit later for the full site.
            <span className="text-blue-700 hover:text-blue-900 transition">
              {" "}
              <a href="https://github.com/SiddhantMadhur/tecna-hub">
                Visit the official github to stay updated.
              </a>{" "}
            </span>{" "}
          </span>
        </div>
      </div>
      <Navbar />
      <body>
        <Component {...pageProps} />
      </body>
      <Footer />
    </>
  );
}

export default MyApp;
