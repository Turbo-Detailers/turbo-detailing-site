// components/Carousel.tsx
// import the hook and options type
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { PropsWithChildren } from "react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

// Define the props
type Props = PropsWithChildren & EmblaOptionsType;

const ImageCarousel = ({ children, ...options }: Props) => {
  // 1. useEmblaCarousel returns a emblaRef and we must attach the ref to a container.
  // EmblaCarousel will use that ref as basis for swipe and other functionality.

  const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));
  const [emblaRef] = useEmblaCarousel(options, [autoplay.current]);

  return (
    // Attach ref to a div
    // 2. The wrapper div must have overflow:hidden
    <div style={{ flex: "0 0 80%" }} className="overflow-hidden" ref={emblaRef}>
      {/* 3. The inner div must have a display:flex property */}
      {/* 4. We pass the children as-is so that the outside component can style it accordingly */}
      <div className="flex gap-x-8">{children}</div>
    </div>
  );
};
export default ImageCarousel;
