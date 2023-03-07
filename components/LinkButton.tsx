import Link from "next/link";
import styles from "../styles/components/LinkButton.module.scss";

interface LinkProps {
  href: string;
  text: string;
}

function LinkButton(props: LinkProps) {
  return (
    <div className={styles.button}>
      <Link href={props.href}>{props.text}</Link>
    </div>
  );
}

export default LinkButton;
