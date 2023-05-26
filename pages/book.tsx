import Head from "next/head";
import AccentedTitle from "../components/titles/AccentedTitle";
import PricingSection from "../sections/Home/PricingSection";
import homeStyles from "../styles/Gallery.module.scss";

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Book an Appointment - Turbo Detailers</title>
        <meta
          name="description"
          content="Low price Luxury Mobile Detailing Pricing. We provide three service options: interior ($175), exterior ($150), and a Turbo Car detail, including both the exterior and interior for just $300."
        />
      </Head>
      <div className={homeStyles.main}>
        <AccentedTitle>Book</AccentedTitle>
      </div>
      <main style={{ textAlign: "center" }}>
        <p>
          We provide services for Sedans, Coupes, and SUVs. Choose your vehicle
          type and click the booking button to get scheduled with us!
        </p>
        <br />
        <PricingSection />
      </main>
    </>
  );
}
