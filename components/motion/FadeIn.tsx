import { motion } from "framer-motion";
import Props from "../../interfaces/Props";
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
    },
  },
};
function FadeIn({ children }: Props) {
  return (
    <motion.div variants={container} initial="hidden" animate="show">
      {children}
    </motion.div>
  );
}

export default FadeIn;
