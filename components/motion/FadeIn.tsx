import { motion } from "framer-motion";
import variants from "../../bin/variants";
import Props from "../../interfaces/Props";

function FadeIn({ children }: Props) {
  return (
    <motion.div variants={variants.fadeIn} initial="hidden" animate="show">
      {children}
    </motion.div>
  );
}

export default FadeIn;
