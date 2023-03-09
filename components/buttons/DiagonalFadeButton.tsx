import Link from "next/link";
import { Fonts } from "../../bin/fonts";
import ButtonProps from "../../interfaces/ButtonProps";
import styles from "../../styles/components/DiagonalFadeButton.module.scss";

export default function DiagonalFadeButton({ href, text }: ButtonProps) {
  return (
    <div className={`${styles["button-borders"]} ${Fonts.body}`}>
      <button className={`${styles["primary-button"]} ${Fonts.body}`}>
        {text}
      </button>
    </div>
  );
}
