import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import MenuLogo from "./MenuLogo";

import styles from "../../styles/Navbar.module.css";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export default function MenuItem({ i, menuObject }) {
  const style = { border: `1px solid ${menuObject.borderColor}` };
  return (
    <motion.li
      className={styles.li}
      variants={variants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href={menuObject.ref}>
        <div className={styles.iconPlaceholder} style={style}>
          {menuObject.title == "" ? (
            <div className="menuLogo">
              <MenuLogo className={styles.menuLogo}></MenuLogo>
            </div>
          ) : (
            <></>
          )}
        </div>
      </Link>
      <Link href={menuObject.ref}>
        <div className={styles.textPlaceholder}>{menuObject.title}</div>
      </Link>
    </motion.li>
  );
}
