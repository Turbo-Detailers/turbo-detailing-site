import { Fonts } from "../bin/fonts";
import styles from "../styles/components/PriceComparison.module.scss";
import pricingData from "../data/pricing.json";
import DiagonalFadeButton from "./buttons/DiagonalFadeButton";
import { useRef, useState } from "react";
import SegmentedControl from "./SegmentedControl";
import ContentSection from "./ContentSection";
import Balancer from "react-wrap-balancer";

export interface PricingData {
  price: number;
  name: string;
  description: string;
  note: string;
  benefits: string[];
  location: string;
  link: string;
  isSuv: boolean;
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
        <div className={styles.booking}>
          <div>${props.price}</div>
          <div>
            {props.isSuv ? (
              <DiagonalFadeButton text="Book SUV" href={props.link} />
            ) : (
              <DiagonalFadeButton text="Book Sedan" href={props.link} />
            )}
          </div>
        </div>
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
  var [isSuv, updateSuv] = useState(false);
  var interiorPrice = pricingData.interior.price;
  var exteriorPrice = pricingData.exterior.price;
  var turboPrice = pricingData.full.price;

  if (isSuv) {
    interiorPrice = pricingData.interior.suvPrice;
    exteriorPrice = pricingData.exterior.suvPrice;
    turboPrice = pricingData.full.suvPrice;
  }

  return (
    <>
      <SegmentedControl
        name={"SUV selector"}
        segments={[
          {
            label: "Sedan",
            value: false,
            ref: useRef(),
          },
          {
            label: "SUV",
            value: true,
            ref: useRef(),
          },
        ]}
        callback={updateSuv}
        defaultIndex={0}
        controlRef={undefined}
      />

      <div className={`${styles.div} ${Fonts.body}`}>
        <PriceComparisonSection
          name={pricingData.interior.name}
          price={interiorPrice}
          description={pricingData.interior.description}
          benefits={pricingData.interior.benefits}
          note={pricingData.interior.note}
          link={
            isSuv ? pricingData.interior.suvLink : pricingData.interior.link
          }
          isSuv={isSuv}
          location="side"
        />

        <PriceComparisonSection
          name={pricingData.full.name}
          price={turboPrice}
          description={pricingData.full.description}
          benefits={pricingData.full.benefits}
          note={pricingData.full.note}
          link={isSuv ? pricingData.full.suvLink : pricingData.full.link}
          isSuv={isSuv}
          location="center"
        />
        <PriceComparisonSection
          name={pricingData.exterior.name}
          price={exteriorPrice}
          description={pricingData.exterior.description}
          benefits={pricingData.exterior.benefits}
          note={pricingData.exterior.note}
          link={
            isSuv ? pricingData.interior.suvLink : pricingData.interior.link
          }
          isSuv={isSuv}
          location="side"
        />
      </div>
    </>
  );
}

export default PriceComparison;
