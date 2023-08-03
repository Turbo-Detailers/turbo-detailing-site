import {
  Josefin_Sans,
  Anonymous_Pro,
  Poppins,
  Roboto_Mono,
  Source_Code_Pro,
} from "next/font/google";
import { NextFont } from "next/dist/compiled/@next/font";

const josefin_sans: NextFont = Josefin_Sans({
  subsets: ["latin"],
});

export const poppins = Poppins({
  weight: "300",
  subsets: ["latin"],
  variable: "--font-body",
});
const poppins_bold: NextFont = Poppins({
  weight: "600",
  subsets: ["latin"],
});
const roboto_mono: NextFont = Roboto_Mono({
  weight: "300",
  subsets: ["latin"],
});

const source_code_pro: NextFont = Source_Code_Pro({
  weight: "400",
  subsets: ["latin"],
});

const Fonts = {
  title: josefin_sans.className,
  subtitle: roboto_mono.className,
  body: poppins.className,
  body_bold: poppins_bold.className,
};

export { josefin_sans as TitleFont, Fonts };
