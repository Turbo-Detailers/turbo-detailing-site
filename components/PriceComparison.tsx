import styles from "../styles/components/PriceComparison.module.css";

function PriceComparison() {
  return (
    <div className={styles.div}>
      <div className={styles.sideComparison}>
        <div className={styles.titleText}>Interior</div>
      </div>
      <div className={styles.centerComparison}>
        <div className={styles.titleText}>Turbo</div>
      </div>
      <div className={styles.sideComparison}>
        <div className={styles.titleText}>Exterior</div>
      </div>
    </div>
  );
}

export default PriceComparison;
