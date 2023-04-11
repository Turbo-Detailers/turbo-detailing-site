export const images: string[] = [
  "/images/home/1.png",
  "/images/home/2.png",
  "/images/home/3.png",
  "/images/home/bugatti.JPG",
];

const imageByIndex = (index: number): string => images[index % images.length];

export default imageByIndex;
