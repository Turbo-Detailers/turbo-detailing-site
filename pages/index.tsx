import Head from "next/head";

import styles from "../styles/Home.module.scss";
import SectionBreak from "../components/SectionBreak";
import Top from "../sections/Home/Top";
import AboutSection from "../sections/Home/AboutSection";
import PricingSection from "../sections/Home/PricingSection";
import FAQ from "../components/FAQ";
import faqList from "../data/faq.json";
import Spacer from "../components/Spacer";
import ImageCarousel from "../components/ImageCarousel";
import Carousel from "../components/Carousel/Carousel";
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
          content="Get high quality, low price luxury detailing directly in the comfort of your own home. Located in the Twin Cities Area, we come to you!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Top />
      {/* <SectionBreak /> */}
      <div className={styles.backgroundVidContainer}>
        <video
          autoPlay={true}
          muted
          loop
          playsInline
          className={styles.backgroundVid}
          src={"/videos/audi-a4.mov"}
        >
          <source src={"/videos/audi-a4.mov"} type="video/mov" />
        </video>
        <AboutSection />
      </div>

      {/* <WhyUs /> */}
      <SectionBreak>Our Pricing</SectionBreak>
      <PricingSection />
      {/* <ImageCarousel /> */}
      <Spacer height={6} />
      <Carousel />
      <Spacer height={3} />
      <SectionBreak>Turbo FAQs</SectionBreak>
      <FAQ faqList={faqList} />
    </div>
  );
}
