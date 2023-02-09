import { Fonts } from "../bin/fonts";
import styles from "../styles/components/PriceComparison.module.scss";
import pricingData from "../data/pricing.json";

function PriceComparison() {
  return (
    <div className={`${styles.div} ${Fonts.body}`}>
      <div className={styles.sideComparison}>
        <div className={styles.sideTitleText}>{pricingData.interior.name}</div>
        <div className={styles.benefits}>
          {pricingData.interior.benefits.map((item) => (
            <div key={item} className={styles.benefit}>
              {item}
            </div>
          ))}
        </div>
        <div className={styles.price}>${pricingData.interior.price}</div>
      </div>
      <div className={styles.centerComparison}>
        <div className={styles.titleText}>{pricingData.full.name}</div>
        <div className={styles.benefits}>
          {pricingData.full.benefits.map((item) => (
            <div key={item} className={styles.benefit}>
              {item}
            </div>
          ))}
        </div>
        <div className={styles.price}>
          ${pricingData.full.price}
          <p>
            <a className={styles.accent}>*</a> Most Popular
          </p>
        </div>
      </div>
      <div className={styles.sideComparison}>
        <div className={styles.sideTitleText}>{pricingData.exterior.name}</div>
        <div className={styles.benefits}>
          {pricingData.exterior.benefits.map((item) => (
            <div key={item} className={styles.benefit}>
              {item}
            </div>
          ))}
        </div>
        <div className={styles.price}>${pricingData.exterior.price}</div>
      </div>
    </div>
  );
}

export default PriceComparison;
