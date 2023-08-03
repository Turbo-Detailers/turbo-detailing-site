import { Fonts } from "../bin/fonts";
import Props from "../interfaces/Props";
import styles from "../styles/components/SectionBreak.module.css";

function SectionBreak({ children }: Props) {
  if (children)
    return (
      <div className={`${styles.main} ${styles.text} ${Fonts.body}`}>
        <strong>
          <text className={`${styles.accent} ${Fonts.body_bold}`}>{"[ "}</text>
        </strong>
        {children.toString().toUpperCase()}
        <strong>
          <text className={`${styles.accent} ${Fonts.body_bold}`}>{" ]"}</text>
        </strong>
      </div>
    );
  return <div className={styles.main}></div>;
}

export default SectionBreak;
