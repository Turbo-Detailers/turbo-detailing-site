import { motion } from "framer-motion";
import Props from "../../interfaces/Props";
const container = {
  hidden: { opacity: 0, y: "30px" },
  show: {
    opacity: 1,
    y: "0px",
    transition: {
      delayChildren: 0.5,
    },
  },
};
function FadeUp({ children }: Props) {
  return (
    <motion.div variants={container} initial="hidden" animate="show">
      {children}
    </motion.div>
  );
}

export default FadeUp;
