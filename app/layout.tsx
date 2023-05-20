"use client";
import "../styles/globals.scss";

import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

import { SingletonRouter } from "next/router";

import { Analytics } from "@vercel/analytics/react";

import { SessionProvider } from "next-auth/react";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return <Dynamic>{children}</Dynamic>;
}

const Dynamic = ({ children }: { children: React.ReactNode }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);
  return (
    <html lang="en">
      <head>
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
      </head>
      <body>
        <main>
          <div itemScope itemType="https://schema.org/WebSite">
            <meta itemProp="url" content="https://turbodetailers.com/" />
            <meta itemProp="name" content="Turbo Detailers" />
            <meta itemProp="alternateName" content="Turbo Mobile Detailing" />
          </div>

          <SessionProvider>
            {hasMounted ? <Navbar /> : null}
            {hasMounted ? (
              <AnimatePresence>{children}</AnimatePresence>
            ) : (
              children
            )}
          </SessionProvider>

          <Footer />
        </main>
        <Analytics />
      </body>
    </html>
  );
};
