import { motion, useScroll, useMotionValue, useTransform } from "framer-motion";
import variants from "../../bin/variants";
import AccentedTitle from "../../components/titles/AccentedTitle";
import Subtitle from "../../components/titles/Subtitle";
import styles from "../../styles/Home.module.scss";

function Top() {
  return (
    <main className={styles.main}>
      <div>
        <AccentedTitle>Turbo</AccentedTitle>
        <motion.div
          variants={variants.fadeInUp}
          initial="hidden"
          animate="show"
        >
          <Subtitle>Luxury Detailing</Subtitle>
        </motion.div>
        <p className={styles.scrollSign}>
          SCROLL <a className={styles.scrollSignBar}>━━━</a>
        </p>
      </div>
    </main>
  );
}

export default Top;
