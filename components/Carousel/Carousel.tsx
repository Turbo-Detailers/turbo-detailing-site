import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { DotButton, PrevButton, NextButton } from "./ArrowsAndButtons";
import imageByIndex from "./ImageByIndex";
import styles from "../../styles/components/Carousel.module.scss";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const Carousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [carouselRef, carouselApi] = useEmblaCarousel(options, [Autoplay()]);
  //   const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  //   const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(
    () => carouselApi && carouselApi.scrollPrev(),
    [carouselApi]
  );
  const scrollNext = useCallback(
    () => carouselApi && carouselApi.scrollNext(),
    [carouselApi]
  );
  const scrollTo = useCallback(
    (index: number) => carouselApi && carouselApi.scrollTo(index),
    [carouselApi]
  );

  const onSelect = useCallback(() => {
    if (!carouselApi) return;
    setSelectedIndex(carouselApi.selectedScrollSnap());
    // setPrevBtnEnabled(carouselApi.canScrollPrev());
    // setNextBtnEnabled(carouselApi.canScrollNext());
  }, [carouselApi, setSelectedIndex]);

  useEffect(() => {
    if (!carouselApi) return;
    onSelect();
    setScrollSnaps(carouselApi.scrollSnapList());
    carouselApi.on("select", onSelect);
    carouselApi.on("reInit", onSelect);
  }, [carouselApi, setScrollSnaps, onSelect]);

  return (
    <>
      <div className={styles["carousel"]}>
        <div className={styles["carousel__viewport"]} ref={carouselRef}>
          <div className={styles["carousel__container"]}>
            {slides.map((index) => (
              <div className={styles["carousel__slide"]} key={index}>
                <div className={styles["carousel__slide__number"]}>
                  <span>{index + 1}</span>
                </div>
                <img
                  className={styles["carousel__slide__img"]}
                  src={imageByIndex(index)}
                  alt={styles["Your alt text"]}
                />
              </div>
            ))}
          </div>
        </div>

        {/* <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} /> */}
      </div>

      {/* <div className={styles["carousel__dots"]}>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div> */}
    </>
  );
};

export default Carousel;
