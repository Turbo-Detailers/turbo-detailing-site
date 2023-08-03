import { motion } from "framer-motion";
import Props from "../interfaces/Props";
import InitialTransition from "./motion/InitialTransition";

function Layout({ children, isFirstMount }: Props) {
  return (
    <>
      {isFirstMount && <InitialTransition />}

      <motion.div
        initial={{ x: -0, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 0, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          duration: 0.5,
          delayChildren: 1,
        }}
        className="page-content-wrapper"
      >

        <div className={"page-content"}>{children}</div>
      </motion.div>
    </>
  );
}

export default Layout;
