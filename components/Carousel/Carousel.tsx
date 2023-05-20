import { localImages } from "../../data/images";

import "pure-react-carousel/dist/react-carousel.es.css";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import Image from "next/image";

const handleDragStart = (e: any) => e.preventDefault();
var isFirst = true;
const items = localImages.map((image: any) => {
  var isPriority;
  if (isFirst) isPriority = true;
  else isPriority = false;

  isFirst = false;

  return (
    <div key={image}>
      <Image
        src={image}
        key={image}
        alt={"Car Detail Images"}
        role="presentation"
        style={{ objectFit: "cover", maxWidth: "100vw" }}
        onDragStart={handleDragStart}
        placeholder="blur"
        quality={70}
        priority={isPriority}
      />
    </div>
  );
});

function Carousel() {
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
      // responsive={{
      //   0: {
      //     items: 1,
      //   },
      //   1024: {
      //     items: 3,
      //     itemsFit: "contain",
      //   },
      // }}
      items={items}
    />
  );
}

export default Carousel;
