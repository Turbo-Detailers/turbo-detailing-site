import imgOne from "../../public/images/details/a4/A4_2470.jpeg";
import imgTwo from "../../public/images/details/a4/A4_2473.jpeg";
import imgThree from "../../public/images/details/a4/A4_2474.jpeg";
import imgFour from "../../public/images/details/a4/A4_2481.jpeg";
import imgFive from "../../public/images/details/a4/A4_2486.jpeg";

export const images = [
  "/images/details/a4/A4_2470.JPG",
  "/images/details/a4/A4_2473.JPG",
  "/images/details/a4/A4_2474.JPG",
  "/images/details/a4/A4_2481.JPG",
  "/images/details/a4/A4_2486.JPG",
];

export const localImages = [imgOne, imgTwo, imgThree, imgFour, imgFive];

const imageByIndex = (index: any) => images[index % images.length];

export default imageByIndex;
