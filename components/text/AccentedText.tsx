import styles from "../../styles/components/Text/AccentedText.module.css";
import Props from "../../interfaces/Props";

function AccentedText({ children }: Props) {
  return <a className={`${styles.text}`}>{children}</a>;
}

export default AccentedText;
