import { motion } from "framer-motion";
import styles from "../styles/components/Navbar.module.css";
import FadeUp from "./motion/FadeUp";

function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1 } }}
      className={styles.navbar_main}
    >
      <a>Main</a>
      <a></a>
      <a>Login</a>
    </motion.nav>
  );
}

export default Navbar;
