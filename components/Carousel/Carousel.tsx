import React, {
  useState,
  useEffect,
  useCallback,
  DragEventHandler,
} from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { DotButton, PrevButton, NextButton } from "./ArrowsAndButtons";
import imageByIndex, { images } from "./ImageByIndex";
import styles from "../../styles/components/Carousel.module.scss";
import Image from "next/image";

import Flickity from "react-flickity-component";

import "pure-react-carousel/dist/react-carousel.es.css";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

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

const Carousel: React.FC<PropType> = (props) => {
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
        1024: {
          items: 3,
          itemsFit: "contain",
        },
      }}
      items={items}
    />
  );

  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      totalSlides={3}
    >
      <Slider>
        <Slide index={0}>I am the first Slide.</Slide>
        <Slide index={1}>I am the second Slide.</Slide>
        <Slide index={2}>I am the third Slide.</Slide>
      </Slider>
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
  );
  // if (true) {
  //   return (
  //     <Flickity>
  //       <img
  //         style={{ marginLeft: 5, marginRight: 5 }}
  //         src="https://placeimg.com/640/480/animals"
  //       />
  //       <img
  //         style={{ marginLeft: 5, marginRight: 5 }}
  //         src="https://placeimg.com/640/480/animals"
  //       />

  //       {slides.map((index) => (
  //         <img
  //           // className={styles["carousel__slide__img"]}
  //           src={imageByIndex(index)}
  //           alt={styles["Your alt text"]}
  //         />
  //       ))}
  //     </Flickity>
  //   );
  // }

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
                <Image
                  className={styles["carousel__slide__img"]}
                  src={imageByIndex(index)}
                  alt={styles["Your alt text"]}
                  fill
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
