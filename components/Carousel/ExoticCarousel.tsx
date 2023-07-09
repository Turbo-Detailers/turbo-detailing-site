import ImageCarousel from "./ImageCarousel";
import { exoticImages } from "../../data/exotic-images";
import Image from "next/image";

import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { PropsWithChildren } from "react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

type Props = PropsWithChildren & EmblaOptionsType;

export default function ExoticCarousel({ children, ...options }: Props) {
  const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));
  const [emblaRef] = useEmblaCarousel(options, [autoplay.current]);
  return (
    // <ImageCarousel loop>
    //   {exoticImages.map((src, i) => {
    //     return (
    //       <div className="relative exotics-custom carousel-flex" key={i}>
    //         <Image
    //           src={src}
    //           fill
    //           className="object-contain"
    //           alt="alt"
    //           priority={!(i > 2)}
    //         />
    //       </div>
    //     );
    //   })}
    // </ImageCarousel>

    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {exoticImages.map((src, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <span>{index + 1}</span>
              </div>
              <Image
                className="embla__slide__img"
                src={src}
                fill
                alt="Car image"
                priority={!(index > 2)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
