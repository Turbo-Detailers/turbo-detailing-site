import { motion } from "framer-motion";
import { Fonts } from "../../bin/fonts";
import variants from "../../bin/variants";
import AccentedText from "../../components/text/AccentedText";
import sectionTwoStyles from "../../styles/components/Home/SectionTwo.module.scss";

function AboutSection() {
  return (
    <div className={sectionTwoStyles.sectionTwo}>
      <motion.div
        variants={variants.fadeInUp}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true }}
        className={sectionTwoStyles.wrapper}
      >
        <div className={`${sectionTwoStyles.paragraph} ${Fonts.body}`}>
          Welcome to <AccentedText>Turbo Luxury Auto Detailing</AccentedText>,
          where we tailor our services to meet the unique needs of your vehicle.
          Our full interior and exterior detailing services use only the best
          products and techniques to leave your car looking and feeling like
          new. Our team of experts personalize their approach to fit the
          specific make and model of your car, from leather and upholstery care
          to tire shining. {/* <AccentedText> */}
          Experience the Turbo difference.
          {/* </AccentedText> */}
        </div>
      </motion.div>
    </div>
  );
}
export default AboutSection;
