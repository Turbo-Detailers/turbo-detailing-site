import { motion } from "framer-motion";
import Link from "next/link";
import { Fonts } from "../bin/fonts";
import styles from "../styles/components/Navbar.module.scss";
import linkStyles from "../styles/components/Text/Link.module.css";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const iconVariants = {
    opened: {
      rotate: 135,
    },
    closed: {
      rotate: 0,
    },
  };

  const menuVariants = {
    opened: {
      top: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
    closed: {
      top: "-90vh",
    },
  };

  const linkVariants = {
    opened: {
      opacity: 1,
      y: 50,
    },
    closed: {
      opacity: 0,
      y: 0,
    },
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1, type: "spring" } }}
      className={styles.navbar_main}
    >
      <Link
        href="/"
        className={`${linkStyles["hover-animation"]} ${Fonts.title} ${styles.logoText}`}
      >
        <b>TURBO</b>
      </Link>

      <a></a>
      <div className={"flex-row"}>
        <Link
          href="/pricing"
          className={linkStyles["hover-animation"]}
          style={{ marginRight: "2.5rem" }}
        >
          Pricing
        </Link>
        <Link
          href="/faq"
          className={linkStyles["hover-animation"]}
          style={{ marginRight: "2.5rem" }}
        >
          FAQ
        </Link>
        <Link href="/contact" className={linkStyles["hover-animation"]}>
          Contact
        </Link>
      </div>
    </motion.nav>
  );
}

export default Navbar;
