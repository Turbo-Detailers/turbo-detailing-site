import { Josefin_Sans } from "@next/font/google";
import { NextFont } from "@next/font/dist/types";

const josefin_sans: NextFont = Josefin_Sans({
  subsets: ["latin"],
});

const Fonts = {
  title: josefin_sans.className,
};

export { josefin_sans as TitleFont, Fonts };
