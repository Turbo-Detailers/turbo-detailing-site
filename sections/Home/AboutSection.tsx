import { motion } from "framer-motion";
import { Fonts } from "../../bin/fonts";
import variants from "../../bin/variants";
import styles from "../../styles/components/Home/AboutSection.module.scss";
import SectionBreak from "components/SectionBreak";

function AboutSection() {
  return (
    <div className={styles.sectionTwo}>
      <motion.div
        variants={variants.fadeInUp}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true }}
        className={styles.wrapper}
      >
        <div className={"flex-row-center"}>
          <div className={styles.textDiv}>
            <SectionBreak>About Us</SectionBreak>

            <div className={`${styles.paragraph} ${Fonts.body}`}>
              Welcome to Turbo Luxury Auto Detailing, where we tailor our
              services to meet the unique needs of your vehicle. Our full
              interior and exterior detailing services use only the best
              products and techniques to leave your car looking and feeling like
              new. Our team of experts personalize their approach to fit the
              specific make and model of your car, from leather and upholstery
              care to tire shining. Experience the Turbo difference.
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
export default AboutSection;
