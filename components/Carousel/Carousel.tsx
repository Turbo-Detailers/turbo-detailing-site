import { images, localImages } from "./ImageByIndex";
import styles from "../../styles/components/Carousel.module.scss";

import "pure-react-carousel/dist/react-carousel.es.css";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import Image from "next/image";

const handleDragStart = (e: any) => e.preventDefault();

const items = localImages.map((image: any) => (
  <div>
    <Image
      src={image}
      key={image}
      alt={styles["Car Detail Images"]}
      role="presentation"
      loading="eager"
      // width={"1920"}
      // height={"1080"}
      // fill
      style={{ objectFit: "cover", maxWidth: "100vw" }}
      onDragStart={handleDragStart}
    />
  </div>
));

function Carousel() {
  console.log(items);
  return (
    <AliceCarousel
      autoPlay
      autoHeight={true}
      autoWidth={true}
      autoPlayInterval={3000}
      autoPlayStrategy="none"
      mouseTracking
      infinite
      disableButtonsControls
      responsive={{
        0: {
          items: 1,
        },
        767: {
          items: 3,
          itemsFit: "contain",
        },
      }}
      items={items}
    />
  );
}

export default Carousel;
