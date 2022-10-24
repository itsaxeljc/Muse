import React, { useRef, useState } from "react";
import styles from "./slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export function SliderContainer({ components }) {
  const sliderRef = useRef();
  const [sliderIndex, setSliderIndex] = useState(0);

  const setIndex = (i) => {
    sliderRef.current.swiper.slideTo(i);
    setSliderIndex(i);
  };
  const borderRadius = {
    borderRadius: "20px !important",
  };

  return (
    <div className={styles.container}>
      <Swiper
        ref={sliderRef}
        modules={[Pagination]}
        className={styles.swiper}
        onSlideChange={(swiper) => setIndex(swiper.activeIndex)}
        onSwiper={null}
        style={{
          "--swiper-pagination-color": "#FE8C4A",
          "--swiper-pagination-bullet-inactive-color": "#C4C4C4",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "15px",
          "--swiper-pagination-bullet-horizontal-gap": "5px",
        }}
      >
        {components.map((component, i) => {
          return (
            <SwiperSlide style={borderRadius} key={i}>
              {component}
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className={styles.bulletContainer}>
        {components.map((button, i) => {
          return (
            <div
              className={
                sliderIndex === i ? styles.bulletActive : styles.bullet
              }
              key={i}
              onClick={() => setIndex(i)}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
