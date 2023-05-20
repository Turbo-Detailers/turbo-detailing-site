import { motion } from "framer-motion";
import Props from "../interfaces/Props";

function Layout({ children }: Props) {
  return (
    <>
      <motion.div
        initial={{ x: -0, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 0, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          duration: 0.5,
        }}
      >
        <div className="page-content-main">{children}</div>
      </motion.div>
    </>
  );
}

export default Layout;
