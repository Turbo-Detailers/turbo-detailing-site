import { motion } from "framer-motion";
import variants from "../bin/variants";
import AccentedTitle from "../components/titles/AccentedTitle";
import Subtitle from "../components/titles/Subtitle";
import styles from "../styles/Home.module.scss";
import topStyles from "../styles/components/Home/Top.module.scss";
import Image from "next/image";
import bgimgShort from "../public/images/exotics-cover-img.jpg";

// import backgroundVid from "../../public/videos/a4-detail.mp4";

function ExoticTop() {
  return (
    <>
      <main className={topStyles.main}>
        <Image
          priority
          fetchPriority="high"
          src={bgimgShort.src}
          fill
          id="backgroundimage"
          alt="lamborghini aventador svj with a clean exterior in a garage"
        />
        <div className={topStyles["exotic-container"]}>
          <div
            style={{
              textAlign: "center",
            }}
          >
            <div style={{ letterSpacing: "1.2ch" }}>
              <AccentedTitle>Exotics</AccentedTitle>
            </div>
            <motion.div
              variants={variants.fadeInUp}
              initial="hidden"
              animate="show"
            >
              <Subtitle>Turbo Luxury Detailing</Subtitle>
              {/* <LinkButton href="/book" text="Book today" /> */}
            </motion.div>
            <p className={styles.scrollSign}>
              SCROLL <a className={styles.scrollSignBar}>━━━</a>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default ExoticTop;
