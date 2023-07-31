import ImageCarousel from "./ImageCarousel";
import { carouselImages } from "../../data/images";
import Image from "next/image";
import Link from "next/link";

export default function Carousel() {
  return (
    <ImageCarousel loop>
      {carouselImages.map((src, i) => {
        return (
          <div className="relative h-64-custom carousel-flex" key={i}>
            <div className="overflow-hidden">
              <Link href={"/gallery"}>
                <Image
                  src={src}
                  fill
                  className="object-contain hover:scale-110 transition duration-400"
                  alt="alt"
                // priority={!(i > 2)}
                />
              </Link>
            </div>
          </div>
        );
      })}
    </ImageCarousel>
  );
}
