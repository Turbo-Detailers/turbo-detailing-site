import { motion } from "framer-motion";
import variants from "../../bin/variants";
import Props from "../../interfaces/Props";

function FadeUp({ children }: Props) {
  return (
    <motion.div variants={variants.fadeInUp} initial="hidden" animate="show">
      {children}
    </motion.div>
  );
}

export default FadeUp;
