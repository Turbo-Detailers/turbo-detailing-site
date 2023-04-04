import Head from "next/head";

import styles from "../styles/Home.module.scss";
import SectionBreak from "../components/SectionBreak";
import Top from "../sections/Home/Top";
import AboutSection from "../sections/Home/AboutSection";
import PricingSection from "../sections/Home/PricingSection";
import FAQ from "../components/FAQ";
import faqList from "../data/faq.json";
import Spacer from "../components/Spacer";
// import WhyUs from "../sections/Home/WhyUs";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Turbo Mobile Auto Detailing - Turbo Detailers</title>
        <meta
          name="description"
          content="Get high quality, low price luxury detailing directly in the comfort of your own home. Located in the Twin Cities Area, we come to you!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Top />
      {/* <SectionBreak /> */}
      <div>
        <video
          autoPlay={true}
          muted
          loop
          className={styles.backgroundVid}
          src={"/videos/audi-a4.mov"}
        >
          <source src={"/videos/audi-a4.mov"} type="video/mov" />
        </video>
        <AboutSection />
        {/* <WhyUs /> */}
        <SectionBreak>Our Pricing</SectionBreak>
        <PricingSection />
      </div>

      <Spacer height={3} />
      <SectionBreak>Turbo FAQs</SectionBreak>
      <FAQ faqList={faqList} />
    </div>
  );
}
