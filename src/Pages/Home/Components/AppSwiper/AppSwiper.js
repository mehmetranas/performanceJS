import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Typography, Button } from "antd";
import styled from "@emotion/styled";

// Styles
import styles from "./AppSwiper.module.scss";
// Images
import image1 from "../../../../Images/SliderImage1.png";

// Sub Elements
const { Title, Text } = Typography;

let StyledAntButton = styled(Button)`
  background: #36a0fc 0% 0% no-repeat padding-box;
  box-shadow: 0px 10px 20px #3f8cd15a;
  border-radius: 10px;
  opacity: 1;
  color: #fff;
  border: none;
`;

const AppSwiper = () => {
  SwiperCore.use([Autoplay, Navigation]);
  const params = {
    navigation: true,
    autoplay: {
      delay: 3500,
    },
  };

  return (
    <div className={"w-full my-6"}>
      <Swiper autoplay navigation loop>
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
      className={`${styles.heroText} grid grid-cols-6 col-span-full px-10 sm:pt-4 md:px-16 md:col-start-auto  lg:px-20 lg:pb-8 xl:px-24 xl:pb-12 bottom-0 pb-0`}
    >
      <p className="md:col-span-5  col-span-full text-center md:text-left mb-1 md:mb-0 px-2">
        Wenn unschöne Zahnverfärbungen das eigene ästhetische Empfinden trüben,
        kann ein Bleaching Abhilfe schaffen. Dabei können Sie einzelne Zähne,
        aber auch das ganze Gebiss bleichen lassen – ganz nach Bedarf.
      </p>
      <Button
        size="large"
        className={`h-1/2 m-auto w-full border-none col-span-1 app-btn hidden md:block whitespace-normal leading-4`}
      >
        Erfahren Sie Mehr
      </Button>
    </div>
  </div>
);

export default AppSwiper;
