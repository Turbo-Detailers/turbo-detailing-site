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
import ServiceAreas from "../sections/Home/ServiceAreas";
// import WhyUs from "../sections/Home/WhyUs";

export default function Home() {
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
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

      <Top />
      {/* <SectionBreak /> */}
      <div className={styles.backgroundVidContainer}>
        {/* <video
          autoPlay={true}
          muted
          loop
          controls={false}
          playsInline
          className={styles.backgroundVid}
          src={"/videos/audi-a4.mp4"}
        >
          <source src={"/videos/audi-a4.mp4"} type="video/mp4" />
        </video> */}
        <AboutSection />
      </div>

      <div className="withBackground">
        {/* <WhyUs /> */}
        <SectionBreak>Our Pricing</SectionBreak>
        <PricingSection />
        <Spacer height={4} />

        <div className="withBackgroundDark">
          <SectionBreak>Service Areas</SectionBreak>
          <ServiceAreas />
          <Spacer height={2} />
        </div>

        <SectionBreak>Gallery</SectionBreak>
        <Carousel />
        <Spacer height={3} />
        <SectionBreak>Turbo FAQs</SectionBreak>
        <FAQ faqList={faqList} />
      </div>
    </div>
  );
}
