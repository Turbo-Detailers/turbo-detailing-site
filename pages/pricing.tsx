import Head from "next/head";
import AccentedTitle from "../components/titles/AccentedTitle";
import PricingSection from "../sections/Home/PricingSection";
import homeStyles from "../styles/Gallery.module.scss";
import Spacer from "components/Spacer";

const content = (isFirstMount: boolean | undefined) => ({
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: isFirstMount ? 2.6 : 0 },
  },
});

const title = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const pagecontents = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};


export default function Pricing() {
  return (
    <>
      <Head>
        <title>Pricing - Turbo Detailers</title>
        <meta
          name="description"
          content="Low price Luxury Mobile Detailing Pricing. We provide three service options: interior ($175), exterior ($150), and a Turbo Car detail, including both the exterior and interior for just $300."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={homeStyles.main}>
        <AccentedTitle>Pricing</AccentedTitle>
      </div>
      <PricingSection />
      <Spacer height={2} />
    </>
  );
}
