import Link from "next/link";
import ButtonProps from "../../interfaces/ButtonProps";
import styles from "../../styles/components/LinkButton.module.scss";

function LinkButton(props: ButtonProps) {
  return (
    <div className={styles.button}>
      <Link href={props.href}>{props.text}</Link>
    </div>
  );
}

export default LinkButton;
