import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Typography } from "antd";

// Styles
import styles from "./AppSwiper.module.scss";
// Images
import image1 from "../../../../Images/SliderImage1.png";

// Sub Elements
const { Title, Text } = Typography;

const AppSwiper = () => {
  const params = {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    centeredSlides: true,
    centeredSlidesBounds: true,
  };

  return (
    <div className={"w-full my-6"}>
      <Swiper navigation>
        <SwiperSlide>
          <div className={"relative grid grid-cols-9"}>
            <div className={`${styles.heroBackground}`}>
              <p className={styles.heroTitle}>
                Zahn-
                <br /> <strong>Bleaching</strong>
              </p>
            </div>
            <img
              src={image1}
              alt={"Dent"}
              className={`${styles.sliderImage} col-span-full`}
            />
            <div
              className={`${styles.heroText} col-span-full px-10 col-start-5 sm:pt-4 md:px-16 md:col-start-auto  lg:px-20 lg:pb-8 xl:px-24 xl:pb-12 bottom-0 pb-0`}
            >
              <p>
                Wenn unschöne Zahnverfärbungen das eigene ästhetische Empfinden
                trüben, kann ein Bleaching Abhilfe schaffen. Dabei können Sie
                einzelne Zähne, aber auch das ganze Gebiss bleichen lassen –
                ganz nach Bedarf.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AppSwiper;
