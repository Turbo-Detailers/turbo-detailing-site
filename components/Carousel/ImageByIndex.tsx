export const images: string[] = [
  "/images/details/a4/A4_2470.jpg",
  "/images/details/a4/A4_2473.jpg",
  "/images/details/a4/A4_2474.jpg",
  "/images/details/a4/A4_2481.jpg",
  "/images/details/a4/A4_2486.jpg",
];

const imageByIndex = (index: number): string => images[index % images.length];

export default imageByIndex;
