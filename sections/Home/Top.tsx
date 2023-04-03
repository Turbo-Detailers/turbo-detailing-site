import { motion } from "framer-motion";
import variants from "../../bin/variants";
import AccentedTitle from "../../components/titles/AccentedTitle";
import Subtitle from "../../components/titles/Subtitle";
import styles from "../../styles/Home.module.scss";
// import backgroundVid from "../../public/videos/a4-detail.mov";

function Top() {
  return (
    <>
      <main className={styles.main}>
        <div>
          <video
            autoPlay={true}
            muted
            loop
            className={styles.backgroundVid}
            src={"/videos/audi-a4.mov"}
          >
            <source src={"/videos/audi-a4.mov"} type="video/mov" />
          </video>
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
    </>
  );
}

export default Top;
