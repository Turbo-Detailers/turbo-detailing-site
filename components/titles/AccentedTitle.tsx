import { josefin_sans } from "../../bin/fonts";
import { motion } from "framer-motion";
import styles from "../../styles/components/AccentedTitle.module.css";
import Props from "../../interfaces/Props";
import FadeUp from "../motion/fadeUp";

const listItemLeft = {
  hidden: { marginRight: "15px" },
  show: { marginRight: "0px" },
};
const listItemRight = {
  hidden: { marginLeft: "15px" },
  show: { marginLeft: "0px" },
};

function AccentedTitle({ children }: Props) {
  return (
    <FadeUp>
      <h1 className={`${josefin_sans.className} ${styles.title}`}>
        <motion.a
          key="left"
          variants={listItemLeft}
          className={styles["title-accent"]}
        >
          {"["}
        </motion.a>
        {children?.toString().toUpperCase()}
        <motion.a variants={listItemRight} className={styles["title-accent"]}>
          {"]"}
        </motion.a>
      </h1>
    </FadeUp>
  );
}

export default AccentedTitle;
