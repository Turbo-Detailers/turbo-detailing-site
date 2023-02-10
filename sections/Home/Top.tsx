import { motion, useScroll, useMotionValue, useTransform } from "framer-motion";
import AccentedTitle from "../../components/titles/AccentedTitle";
import Subtitle from "../../components/titles/Subtitle";
import styles from "../../styles/Home.module.scss";

function Top() {
  const { scrollYProgress } = useScroll();

  const x = useMotionValue(0);

  const input = [-200, 0, 200];
  const output = [0, 1, 0];
  const opacity = useTransform(x, input, output);

  return (
    <main className={styles.main}>
      <div>
        <AccentedTitle>Turbo</AccentedTitle>
        <Subtitle>Luxury Detailing</Subtitle>
        <motion.p className={styles.scrollSign} style={{ opacity }}>
          SCROLL <p className={styles.scrollSignBar}>━━━</p>
        </motion.p>
      </div>
    </main>
  );
}

export default Top;
