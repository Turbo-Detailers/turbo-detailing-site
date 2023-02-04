import { Josefin_Sans, Anonymous_Pro } from "@next/font/google";
import { NextFont } from "@next/font/dist/types";

const josefin_sans: NextFont = Josefin_Sans({
  subsets: ["latin"],
});

const anonymous_pro: NextFont = Anonymous_Pro({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});
const Fonts = {
  title: josefin_sans.className,
  subtitle: anonymous_pro.className,
};

export { josefin_sans as TitleFont, Fonts };
