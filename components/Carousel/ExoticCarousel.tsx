import ImageCarousel from "./ImageCarousel";
import { exoticImages } from "../../data/images";
import Image from "next/image";

export default function ExoticCarousel() {
  return (
    <ImageCarousel loop>
      {exoticImages.map((src, i) => {
        return (
          <div className="relative exotics-custom carousel-flex" key={i}>
            <Image
              src={src}
              fill
              className="object-contain"
              alt="alt"
              priority={!(i > 2)}
            />
          </div>
        );
      })}
    </ImageCarousel>
  );
}
