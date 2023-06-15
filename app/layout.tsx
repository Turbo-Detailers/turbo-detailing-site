"use client";
import "../styles/globals.css";
import "../styles/tailwind.css";

import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

import { SingletonRouter } from "next/router";

import { Analytics } from "@vercel/analytics/react";

import { SessionProvider } from "next-auth/react";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { poppins } from "bin/fonts";

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
    <html lang="en" className={`${poppins.variable}`}>
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
        <div itemScope itemType="https://schema.org/WebSite">
          <meta itemProp="url" content="https://turbodetailers.com/" />
          <meta itemProp="name" content="Turbo Detailers" />
          <meta itemProp="alternateName" content="Turbo Mobile Detailing" />
        </div>

        <SessionProvider>
          {hasMounted ? <Navbar /> : null}
          <main className="page-content-main">
            {hasMounted ? (
              <AnimatePresence>{children}</AnimatePresence>
            ) : (
              children
            )}
          </main>
        </SessionProvider>

        <Footer />
        <Analytics />
      </body>
    </html>
  );
};
