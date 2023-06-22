import { motion } from "framer-motion";
import variants from "../../bin/variants";
import PriceComparison from "../../components/PriceComparison";
import PromotionalPriceComparison from "../../components/PromotionalComparison";
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
      <PromotionalPriceComparison />

      {/* <PriceComparison /> */}
    </motion.div>
  );
}

export default PricingSection;
