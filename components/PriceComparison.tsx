import { Fonts } from "../bin/fonts";
import styles from "../styles/components/PriceComparison.module.scss";
import pricingData from "../data/pricing.json";

export interface PricingData {
  price: number;
  name: string;
  description: string;
  note: string;
  benefits: string[];
  location: string;
  link: string;
}

function PriceComparisonSection(props: PricingData) {
  var fixedStyles: {
    div: string;
    title: string;
    benefits: string;
    benefit: string;
    price: string;
    accent: string;
  } = {
    div: styles.sideComparison,
    title: styles.sideTitleText,
    benefits: styles.benefits,
    benefit: styles.benefit,
    price: styles.price,
    accent: styles.accent,
  };

  if (props.location == "center") {
    fixedStyles.div = styles.centerComparison;
    fixedStyles.title = styles.titleText;
  }
  return (
    <div className={fixedStyles.div}>
      <div className={fixedStyles.title}>
        <a href={props.link}>{props.name}</a>
        <div className={styles.description}>{props.description}</div>
      </div>
      <div className={fixedStyles.benefits}>
        {props.benefits.map((item) => (
          <div key={item} className={fixedStyles.benefit}>
            {item}
          </div>
        ))}
      </div>
      <div className={fixedStyles.price}>
        ${props.price}
        {props.note !== "" ? (
          <p>
            <a className={fixedStyles.accent}>*</a> {props.note}
          </p>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

function PriceComparison() {
  return (
    <div className={`${styles.div} ${Fonts.body}`}>
      <PriceComparisonSection
        name={pricingData.interior.name}
        price={pricingData.interior.price}
        description={pricingData.interior.description}
        benefits={pricingData.interior.benefits}
        note={pricingData.interior.note}
        link={pricingData.interior.link}
        location="side"
      />

      <PriceComparisonSection
        name={pricingData.full.name}
        price={pricingData.full.price}
        description={pricingData.full.description}
        benefits={pricingData.full.benefits}
        note={pricingData.full.note}
        link={pricingData.full.link}
        location="center"
      />
      <PriceComparisonSection
        name={pricingData.exterior.name}
        price={pricingData.exterior.price}
        description={pricingData.exterior.description}
        benefits={pricingData.exterior.benefits}
        note={pricingData.exterior.note}
        link={pricingData.exterior.link}
        location="side"
      />
    </div>
  );
}

export default PriceComparison;
