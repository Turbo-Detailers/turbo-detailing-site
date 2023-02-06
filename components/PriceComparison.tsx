import styles from "../styles/Components/PriceComparison.module.css";

function PriceComparison() {
  return (
    <div className={styles.div}>
      <div className={styles.sideComparison}>
        <div className={styles.titleText}>Basic</div>
      </div>
      <div className={styles.centerComparison}>
        <div className={styles.titleText}>Turbo</div>
      </div>
      <div className={styles.sideComparison}>
        <div className={styles.titleText}>Premium</div>
      </div>
    </div>
  );
}

export default PriceComparison;
