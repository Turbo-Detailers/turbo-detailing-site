import AccentedTitle from "../components/titles/AccentedTitle";
import PricingSection from "../sections/Home/PricingSection";
import homeStyles from "../styles/Home.module.scss";

export default function Pricing() {
  return (
    <>
      <div className={homeStyles.main}>
        <AccentedTitle>Pricing</AccentedTitle>
      </div>

      <PricingSection />
    </>
  );
}
