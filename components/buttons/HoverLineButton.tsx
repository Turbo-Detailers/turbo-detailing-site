import Link from "next/link";
import { Fonts } from "../../bin/fonts";
import ButtonProps from "../../interfaces/ButtonProps";
import styles from "../../styles/components/HoverLineButton.module.scss";

export default function HoverLineButton({ text, href }: ButtonProps) {
  return (
    <Link className={`${styles.hoverLineButton} ${Fonts.body}`} href={href}>
      <span className={styles["top-key"]}></span>
      <span className={styles.text}>{text}</span>
      <span className={styles["bottom-key-1"]}></span>
      <span className={styles["bottom-key-2"]}></span>
    </Link>
  );
}
