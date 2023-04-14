import imgOne from "../../public/images/details/a4/A4_2470.JPG";
import imgTwo from "../../public/images/details/a4/A4_2473.JPG";
import imgThree from "../../public/images/details/a4/A4_2474.JPG";
import imgFour from "../../public/images/details/a4/A4_2481.JPG";
import imgFive from "../../public/images/details/a4/A4_2486.JPG";

export const images = [
  "/images/details/a4/A4_2470.JPG",
  "/images/details/a4/A4_2473.JPG",
  "/images/details/a4/A4_2474.JPG",
  "/images/details/a4/A4_2481.JPG",
  "/images/details/a4/A4_2486.JPG",
];

export const localImages = [imgOne, imgTwo, imgThree, imgFour, imgFive];

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;
