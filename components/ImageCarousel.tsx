import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import styles from "../styles/components/Carousel.module.scss";

function ImageCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className={styles.carousel} ref={emblaRef}>
      <div className={styles["carousel__container"]}>
        <div className={styles["carousel__slide"]}>Slide 1</div>
        <div className={styles["carousel__slide"]}>Slide 2</div>
        <div className={styles["carousel__slide"]}>Slide 3</div>
      </div>
    </div>
  );
}
export default ImageCarousel;
