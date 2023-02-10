import "../styles/globals.scss";
import Head from "next/head";

import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import { AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Head>
        <meta content-language="en-us" />
        <meta http-equiv="content-language" content="en-us" />
      </Head>
      <Navbar />
      <AnimatePresence mode="wait">
        <Component {...pageProps} />
      </AnimatePresence>
      <Footer />
    </main>
  );
}
