import Head from "next/head";

import styles from "../styles/Home.module.scss";
import SectionBreak from "../components/SectionBreak";
import Top from "../sections/Home/Top";
import AboutSection from "../sections/Home/AboutSection";
import PricingSection from "../sections/Home/PricingSection";
import FAQ from "../components/FAQ";
import faqList from "../data/faq.json";
import Spacer from "../components/Spacer";
// import Carousel from "../components/Carousel/Carousel";
import ServiceAreas from "../sections/Home/ServiceAreas";
import ImageCarousel from "components/Carousel/ImageCarousel";
// import WhyUs from "../sections/Home/WhyUs";

import { localImages } from "../data/images";
import Image from "next/image";
import Brands from "components/Brands";

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

      <div className="withBackground">
        <div className="withBackgroundDark">
          <AboutSection />

          <Brands />
        </div>

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
        {/* <Carousel /> */}
        <ImageCarousel loop>
          {localImages.map((src, i) => {
            return (
              <div className="relative h-64 carousel-flex" key={i}>
                <Image src={src} fill className="object-cover" alt="alt" />
              </div>
            );
          })}
        </ImageCarousel>
        <Spacer height={2} />
        {/* <SectionBreak>Brands we use</SectionBreak> */}
        {/* <Brands /> */}
        {/* <Spacer height={3} /> */}
        <SectionBreak>Turbo FAQs</SectionBreak>
        <FAQ faqList={faqList} />
      </div>
    </div>
  );
}
