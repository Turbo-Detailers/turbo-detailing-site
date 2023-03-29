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
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Turbo Detailers" />
        <meta property="og:type" content="website" />
        <meta
          name="description"
          content="Turbo Mobile Auto Detailing: Low price, high quality luxury detailing in the Twin Cities area."
        />
        <meta property="og:image" content="Turbo Detailers" />
      </Head>
      <Navbar />
      <AnimatePresence mode="wait" initial={true}>
        <Layout>
          <div itemScope itemType="https://schema.org/WebSite">
            <meta itemProp="url" content="https://turbodetailers.com/" />
            <meta itemProp="name" content="Turbo Detailers" />
            <meta itemProp="alternateName" content="Turbo Mobile Detailing" />
          </div>
          <GoogleAnalytics trackPageViews gaMeasurementId="G-EC18NFWZEX" />
          <Component {...pageProps} />
        </Layout>
      </AnimatePresence>
      <Footer />
    </main>
  );
}
