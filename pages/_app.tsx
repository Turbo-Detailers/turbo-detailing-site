import "../styles/globals.scss";

import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Navbar />
      <AnimatePresence mode="wait">
        <Component {...pageProps} />
      </AnimatePresence>
    </main>
  );
}
