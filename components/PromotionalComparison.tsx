import { Fonts } from "../bin/fonts";
import styles from "../styles/components/PriceComparison.module.scss";
import pricingData from "../data/promotions.json";
import DiagonalFadeButton from "./buttons/DiagonalFadeButton";
import { useRef, useState } from "react";
import SegmentedControl from "./SegmentedControl";

export interface PricingData {
  price: number;
  name: string;
  description: string;
  note: string;
  benefits: string[];
  location: string;
  link: string;
  isSuv: boolean;
  ogPrice: number;
}

function PromotionalPriceComparisonSection(props: PricingData) {
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
          <div>
            ${props.price}
            <div className={"line-through mb-3 text-2xl decoration-red-800"}>
              ${props.ogPrice}
            </div>
          </div>
          <div>
            {props.isSuv ? (
              <DiagonalFadeButton text="Book SUV" href={props.link} />
            ) : (
              <DiagonalFadeButton text="Book Sedan" href={props.link} />
            )}
          </div>
        </div>
        {props.note !== "" ? (
          <p className={"mt-3"}>
            <a className={fixedStyles.accent}>*</a> {props.note}
          </p>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

function PromotionalPriceComparison() {
  var [isSuv, updateSuv] = useState(false);
  var interiorPrice = pricingData["instagram-local"].interior.price;
  var interiorOgPrice = pricingData["instagram-local"].interior.ogPrice;
  var exteriorPrice = pricingData["instagram-local"].exterior.price;
  var exteriorOgPrice = pricingData["instagram-local"].exterior.ogPrice;
  var turboPrice = pricingData["instagram-local"].full.price;
  var turboOgPrice = pricingData["instagram-local"].full.ogPrice;

  if (isSuv) {
    interiorPrice = pricingData["instagram-local"].interior.suvPrice;
    interiorOgPrice = pricingData["instagram-local"].interior.ogSuvPrice;
    exteriorPrice = pricingData["instagram-local"].exterior.suvPrice;
    exteriorOgPrice = pricingData["instagram-local"].exterior.ogSuvPrice;
    turboPrice = pricingData["instagram-local"].full.suvPrice;
    turboOgPrice = pricingData["instagram-local"].full.ogSuvPrice;
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
        <PromotionalPriceComparisonSection
          name={pricingData["instagram-local"].interior.name}
          price={interiorPrice}
          ogPrice={interiorOgPrice}
          description={pricingData["instagram-local"].interior.description}
          benefits={pricingData["instagram-local"].interior.benefits}
          note={pricingData["instagram-local"].interior.note}
          link={
            isSuv
              ? pricingData["instagram-local"].interior.suvLink
              : pricingData["instagram-local"].interior.link
          }
          isSuv={isSuv}
          location="side"
        />

        <PromotionalPriceComparisonSection
          name={pricingData["instagram-local"].full.name}
          price={turboPrice}
          ogPrice={turboOgPrice}
          description={pricingData["instagram-local"].full.description}
          benefits={pricingData["instagram-local"].full.benefits}
          note={pricingData["instagram-local"].full.note}
          link={
            isSuv
              ? pricingData["instagram-local"].full.suvLink
              : pricingData["instagram-local"].full.link
          }
          isSuv={isSuv}
          location="center"
        />
        <PromotionalPriceComparisonSection
          name={pricingData["instagram-local"].exterior.name}
          price={exteriorPrice}
          ogPrice={exteriorOgPrice}
          description={pricingData["instagram-local"].exterior.description}
          benefits={pricingData["instagram-local"].exterior.benefits}
          note={pricingData["instagram-local"].exterior.note}
          link={
            isSuv
              ? pricingData["instagram-local"].interior.suvLink
              : pricingData["instagram-local"].interior.link
          }
          isSuv={isSuv}
          location="side"
        />
      </div>
    </>
  );
}

export default PromotionalPriceComparison;
