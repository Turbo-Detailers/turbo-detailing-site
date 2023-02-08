import { motion } from "framer-motion";
import styles from "../styles/components/Navbar.module.scss";

function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1, type: "spring" } }}
      className={styles.navbar_main}
    >
      <a></a>
      <a></a>
      <a>Pricing</a>
    </motion.nav>
  );
}

export default Navbar;
