import { Fonts } from "../../bin/fonts";
import Props from "../../interfaces/Props";
import subtitleStyles from "../../styles/components/Subtitle.module.css";

export default function Subtitle({ children }: Props) {
  return (
    <div className={`${Fonts.subtitle} ${subtitleStyles.subtitle}`}>
      {children}
    </div>
  );
}
