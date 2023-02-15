import { motion } from "framer-motion";
import Props from "../interfaces/Props";

function Layout({ children }: Props) {
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.5,
      }}
    >
      {children}
    </motion.div>
  );
}

export default Layout;
