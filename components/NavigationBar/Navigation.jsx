import * as React from "react";
import { motion } from "framer-motion";
import MenuItem from "./MenuItem";
import styles from "../../styles/Navbar.module.css";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export default function Navigation() {
  return (
    <motion.ul className={styles.ul} variants={variants}>
      {menuItems.map((i) => (
        <MenuItem i={i} key={i} menuObject={i} />
      ))}
    </motion.ul>
  );
}

const menuItems = [
  {
    title: "Home",
    ref: "/",
    borderColor: "#74d173",
  },
  {
    title: "Our service",
    ref: "/service",
    borderColor: "#5bcc5a",
  },
  {
    title: "Pricing",
    ref: "/pricing",
    borderColor: "#36c734",
  },
  {
    title: "About us",
    ref: "/about",
    borderColor: "#02a800",
  },
  {
    title: "Testimonials",
    ref: "/testimonials",
    borderColor: "#017800",
  },
];
