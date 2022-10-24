import React, { useRef, useState } from "react";
import styles from "./slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

export function SliderCardsContainer(props) {
  const sliderRef = useRef();
  const [sliderIndex, setSliderIndex] = useState(0);
  const publicaciones = props.props;

  const setIndex = (i) => {
    sliderRef.current.swiper.slideTo(i);
    setSliderIndex(i);
  };

  return (
    <>
      <div className={styles.container2}>
        <Swiper
          slidesPerGroup={2}
          slidesPerView={2}
          ref={sliderRef}
          className={styles.swiperDoubleCard}
          onSlideChange={(swiper) => setIndex(swiper.activeIndex)}
          onSwiper={null}
        >
          {publicaciones.map((component, i) => {
            return (
              <SwiperSlide key={i}>
                <div
                  className={
                    i % 2 === 0 ? styles.doubleCard : styles.doubleCardEnd
                  }
                  onClick={() => {
                    console.log(i);
                  }}
                >
                  {component}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className={styles.bulletContainer}>
          {publicaciones.map((button, i) => {
            return (
              <div
                className={
                  i % 2 === 0
                    ? sliderIndex === i || sliderIndex - 1 === i
                      ? styles.bulletActive
                      : styles.bullet
                    : styles.bulletHidden
                }
                key={i}
                onClick={() => setIndex(i)}
              ></div>
            );
          })}
        </div>
      </div>
    </>
  );
}
