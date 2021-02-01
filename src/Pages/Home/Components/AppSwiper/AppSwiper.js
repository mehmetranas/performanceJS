import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Button } from "antd";
import { HashLink } from "react-router-hash-link";

// Styles
import styles from "./AppSwiper.module.scss";
// Images
import image1 from "../../../../Images/SliderImage1.png";

const AppSwiper = () => {
  SwiperCore.use([Autoplay, Navigation]);

  return (
    <div className={"w-full my-6"}>
      <Swiper navigation loop>
        <SwiperSlide key={1}>
          <SwiperItem1 />
        </SwiperSlide>
        <SwiperSlide key={2}>
          <SwiperItem1 />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

const SwiperItem1 = () => (
  <div
    className={`relative grid grid-cols-9 ${styles.sliderImage}`}
    style={{ backgroundImage: `url(${image1})` }}
  >
    <div className={`${styles.heroBackground}`}>
      <p className={styles.heroTitle}>
        Zahn-
        <br /> <strong>Bleaching</strong>
      </p>
    </div>
    <div
      className={`${styles.heroText} w-full flex px-10 sm:pt-4 md:px-16 md:col-start-auto  lg:px-20 lg:pb-8 xl:px-24 xl:pb-12 bottom-0 pb-0`}
    >
      <HashLink smooth to="/#behandlungen" className="h-full w-full">
        <Button
          size="large"
          className="ant-btn ant-btn-lg app-btn border-none col-span-1 h-1/2 hidden leading-4 ml-auto md:block px-8 py-6 whitespace-normal"
        >
          Erfahren Sie Mehr
        </Button>
      </HashLink>
    </div>
  </div>
);

export default AppSwiper;
