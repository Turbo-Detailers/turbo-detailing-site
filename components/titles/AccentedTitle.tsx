import { Fonts } from "../../bin/fonts";
import { motion } from "framer-motion";
import styles from "../../styles/components/AccentedTitle.module.scss";
import Props from "../../interfaces/Props";
import FadeIn from "../motion/FadeIn";

const listItemLeft = {
  hidden: { marginRight: "0.75rem" },
  show: { marginRight: "0rem" },
};
const listItemRight = {
  hidden: { marginLeft: "0.75rem" },
  show: { marginLeft: "0rem" },
};

function AccentedTitle({ children }: Props) {
  return (
    <FadeIn>
      <h1 className={`${Fonts.title} ${styles.title}`}>
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
    </FadeIn>
  );
}

export default AccentedTitle;
