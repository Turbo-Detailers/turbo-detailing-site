import Head from "next/head";
import AccentedTitle from "../../components/titles/AccentedTitle";
import PricingSection from "../../sections/Home/PricingSection";
import homeStyles from "../../styles/Gallery.module.scss";
import QuoteForm from "components/QuoteForm";

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Paint Correction and Ceramic Coating - Turbo Detailers</title>
        <meta
          name="description"
          content="High quality paint correction and ceramic coating starting at just $599. Ask for a quote today."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={homeStyles.main}>
        <AccentedTitle>Protection</AccentedTitle>
      </div>
      <QuoteForm></QuoteForm>
    </>
  );
}
