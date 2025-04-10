"use-client";
import { Fonts } from "../../bin/fonts";
import { motion } from "framer-motion";
import styles from "../../styles/components/AccentedTitle.module.scss";
import Props from "../../interfaces/Props";
import FadeIn from "../motion/FadeIn";

const listItemLeft = {
  hidden: { x: "0.75rem" },
  show: { x: "0rem" },
};
const listItemRight = {
  hidden: { x: "0.75rem" },
  show: { x: "0rem" },
};

function AccentedTitle({ children }: Props) {
  return (
    <FadeIn>
      <h1 className={`${Fonts.title} ${styles.title}`}>
        <motion.text
          key="left"
          variants={listItemLeft}
          className={styles["title-accent"]}
        >
          {"["}
        </motion.text>
        {children?.toString().toUpperCase()}
        <motion.text
          variants={listItemRight}
          className={styles["title-accent"]}
        >
          {"]"}
        </motion.text>
      </h1>
    </FadeIn>
  );
}

export default AccentedTitle;
