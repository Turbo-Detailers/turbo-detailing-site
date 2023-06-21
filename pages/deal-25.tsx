import Head from "next/head";
import AccentedTitle from "../components/titles/AccentedTitle";
import PricingSection from "../sections/Home/PricingSection";
import PromotionalPriceComparison from "components/PromotionalComparison";
import homeStyles from "../styles/Gallery.module.scss";
import Spacer from "components/Spacer";
import Carousel from "components/Carousel/Carousel";
import styles from "../styles/Home.module.scss";

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
        <AccentedTitle>Exclusive</AccentedTitle>
        {/* <p className={"mx-6"}>Scroll for exclusive deals!</p> */}
        <p className={styles.scrollSign}>
          SCROLL <a className={styles.scrollSignBar}>━━━</a>
        </p>
      </div>
      <div className="page-content-main">
        <Carousel />
        <Spacer height={4} />

        <p className={"mx-6 text-center"}>
          We provide services for Sedans, Coupes, and SUVs. Choose your vehicle
          type and click the booking button to get scheduled with us!
        </p>

        <Spacer height={2} />

        <PromotionalPriceComparison />
        <Spacer height={2} />
      </div>
    </>
  );
}
