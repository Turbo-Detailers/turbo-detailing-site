import "../styles/globals.scss";
import Head from "next/head";

import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import { AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

import Router from "next/router";

import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
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
          <meta
            property="og:image"
            content="/images/og/social-sharing-with-text.jpg"
          />
        </Head>
        <Navbar />
        <div itemScope itemType="https://schema.org/WebSite">
          <meta itemProp="url" content="https://turbodetailers.com/" />
          <meta itemProp="name" content="Turbo Detailers" />
          <meta itemProp="alternateName" content="Turbo Mobile Detailing" />
        </div>
        <AnimatePresence mode="wait" initial={false}>
          <Layout key={router.route}>
            {/* <GoogleAnalytics trackPageViews gaMeasurementId="G-EC18NFWZEX" /> */}
            {/* <motion.div
            key={router.route}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 2 } }}
          > */}
            <Component {...pageProps} />
            {/* </motion.div> */}
          </Layout>
        </AnimatePresence>
        <Footer />
      </main>
      <Analytics />
    </>
  );
}

// fixing flashes of unstyled content
const routeChange = () => {
  // Temporary fix to avoid flash of unstyled content
  // during route transitions. Keep an eye on this
  // issue and remove this code when resolved:
  // https://github.com/vercel/next.js/issues/17464

  const tempFix = () => {
    const allStyleElems = document.querySelectorAll('style[media="x"]');
    allStyleElems.forEach((elem) => {
      elem.removeAttribute("media");
    });
  };
  tempFix();
};

Router.events.on("routeChangeComplete", routeChange);
Router.events.on("routeChangeStart", routeChange);
