import ImageCarousel from "./ImageCarousel";
import { carouselImages } from "../../data/images";
import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function Carousel() {
  return (
    <ImageCarousel loop>
      {carouselImages.map((src, i) => {
        return (
          <div
            className={`relative h-64-custom carousel-flex ${
              i == 0 ? "ml-3" : null
            }`}
            key={i}
          >
            <div className="overflow-hidden">
              <Link href={"/gallery"}>
                <AspectRatio ratio={6 / 4}>
                  <Image
                    src={src}
                    fill
                    className="object-contain hover:scale-110 hover:z-50 transition duration-400"
                    alt="alt"
                    objectFit="cover"
                    // priority={!(i > 2)}
                  />
                </AspectRatio>
              </Link>
            </div>
          </div>
        );
      })}
    </ImageCarousel>
  );
}
