import Head from "next/head";

import styles from "../styles/Home.module.scss";
import SectionBreak from "../components/SectionBreak";
import Top from "../sections/Home/Top";
import AboutSection from "../sections/Home/AboutSection";
import PricingSection from "../sections/Home/PricingSection";
import FAQ from "../components/FAQ";
import faqList from "../data/faq.json";
import Spacer from "../components/Spacer";
import Carousel from "../components/Carousel/Carousel";

import Brands from "components/Brands";
import Script from "next/script";

const content = (isFirstMount: boolean) => ({
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: isFirstMount ? 2.8 : 0 },
  },
});

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Turbo Mobile Auto Detailing - Turbo Detailers</title>
        <meta
          name="description"
          content="Get high quality luxury detailing directly in the comfort of your own home. Located in the West Metro of the Twin Cities Area, we come to you! Book a detailing appointment today."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script type="application/ld+json" id="application/ld+json">
        {`{"@context" : "https://schema.org",
      "@type" : "WebSite",
      "name" : "Turbo Detailers",
      "alternateName" : ["Turbo", "Turbo Mobile Detailing", "Turbo Luxury Detailing"],
      "url" : "https://turbodetailers.com"}`}
      </Script>
      <div itemScope itemType="https://schema.org/WebSite">
        <meta itemProp="url" content="https://turbodetailers.com/" />
        <meta itemProp="name" content="Turbo Detailers" />
        <meta itemProp="alternateName" content="Turbo" />
      </div>
      <Top />

      <div className="withBackgroun">
        <div className="withBackgroundDar">
          <AboutSection />
          <Spacer height={2} />
        </div>
        <SectionBreak>Services</SectionBreak>
        <PricingSection />
        <Spacer height={4} />
        <SectionBreak>Gallery</SectionBreak>
        <Carousel />
        <Spacer height={2} />
        <SectionBreak>Brands we use</SectionBreak>
        <Brands />
        <Spacer height={3} />
        <SectionBreak>Turbo FAQs</SectionBreak>
        <FAQ faqList={faqList} />
        <Spacer height={2} />
      </div>
    </div>
  );
}
