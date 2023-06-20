import ImageCarousel from "./ImageCarousel";
import { localImages } from "../../data/images";
import Image from "next/image";

export default function Carousel() {
  return (
    <ImageCarousel loop>
      {localImages.map((src, i) => {
        return (
          <div className="relative h-64-custom carousel-flex" key={i}>
            <Image
              src={src}
              fill
              className="object-cover"
              alt="alt"
              priority={!(i > 2)}
            />
          </div>
        );
      })}
    </ImageCarousel>
  );
}
