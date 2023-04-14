export const images: string[] = [
  "/images/details/a4/A4_2470.JPG",
  "/images/details/a4/A4_2473.JPG",
  "/images/details/a4/A4_2474.JPG",
  "/images/details/a4/A4_2481.JPG",
  "/images/details/a4/A4_2486.JPG",
];

const imageByIndex = (index: number): string => images[index % images.length];

export default imageByIndex;
