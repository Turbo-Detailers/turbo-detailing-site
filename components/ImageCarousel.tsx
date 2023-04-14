import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import styles from "../styles/components/Carousel.module.scss";
import Image from "next/image";

export const images: string[] = [
  "/images/details/a4/A4_2470.jpg",
  "/images/details/a4/A4_2473.jpg",
  "/images/details/a4/A4_2474.jpg",
  "/images/details/a4/A4_2481.jpg",
  "/images/details/a4/A4_2486.jpg",
];

function ImageCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className={styles.carousel} ref={emblaRef}>
      <div className={styles["carousel__container"]}>
        <div className={styles["carousel__slide"]}>
          {/* <Image
            src={images[0]}
            alt={"hi"}
            key={images[0]}
            fill={true}
            quality={100}
            style={{ objectFit: "cover", zIndex: -2 }}
          /> */}

          <img src={images[0]}></img>
        </div>
        <div className={styles["carousel__slide"]}>Slide 2</div>
        <div className={styles["carousel__slide"]}>Slide 3</div>
      </div>
    </div>
  );
}
export default ImageCarousel;
