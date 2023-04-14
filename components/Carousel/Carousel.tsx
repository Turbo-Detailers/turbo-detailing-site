import { images } from "./ImageByIndex";
import styles from "../../styles/components/Carousel.module.scss";

import "pure-react-carousel/dist/react-carousel.es.css";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e: any) => e.preventDefault();

const items = images.map((image: any) => (
  <img
    src={image}
    key={image}
    alt={styles["Car Detail Images"]}
    role="presentation"
    onDragStart={handleDragStart}
  />
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
