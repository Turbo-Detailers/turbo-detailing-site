import "../styles/globals.scss";
import Head from "next/head";

import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

import { GoogleAnalytics } from "nextjs-google-analytics";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Head>
        <meta content-language="en-us" />
        <meta httpEquiv="content-language" content="en-us" />
        <meta charSet="UTF-8" />
      </Head>
      <Navbar />
      <AnimatePresence mode="wait" initial={true}>
        <Layout>
          <GoogleAnalytics trackPageViews gaMeasurementId="G-EC18NFWZEX" />
          <Component {...pageProps} />
        </Layout>
      </AnimatePresence>
      <Footer />
    </main>
  );
}
