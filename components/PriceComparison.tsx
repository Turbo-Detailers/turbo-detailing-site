import { Fonts } from "../bin/fonts";
import styles from "../styles/components/PriceComparison.module.scss";

function PriceComparison() {
  return (
    <div className={`${styles.div} ${Fonts.body}`}>
      <div className={styles.sideComparison}>
        <div className={styles.sideTitleText}>Interior</div>
      </div>
      <div className={styles.centerComparison}>
        <div className={styles.titleText}>Turbo</div>
      </div>
      <div className={styles.sideComparison}>
        <div className={styles.sideTitleText}>Exterior</div>
      </div>
    </div>
  );
}

export default PriceComparison;
