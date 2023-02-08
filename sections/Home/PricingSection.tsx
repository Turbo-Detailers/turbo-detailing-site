import { motion } from "framer-motion";
import variants from "../../bin/variants";
import PriceComparison from "../../components/PriceComparison";
import sectionThreeStyles from "../../styles/components/Home/SectionThree.module.scss";

function PricingSection() {
  return (
    <motion.div
      variants={variants.fadeInUp}
      initial={"hidden"}
      whileInView={"show"}
      viewport={{ once: true }}
      className={sectionThreeStyles.container}
    >
      <PriceComparison />
    </motion.div>
  );
}

export default PricingSection;
