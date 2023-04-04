import Head from "next/head";
import AccentedTitle from "../components/titles/AccentedTitle";
import PricingSection from "../sections/Home/PricingSection";
import homeStyles from "../styles/Home.module.scss";

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Pricing - Turbo Detailers</title>
        <meta
          name="description"
          content="Low price Luxury Mobile Detailing Pricing. We provide three service options: interior ($125), exterior ($125), and a Turbo Car detail, including both the exterior and interior for just $200."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={homeStyles.main}>
        <AccentedTitle>Pricing</AccentedTitle>
      </div>

      <PricingSection />
    </>
  );
}
