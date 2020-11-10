import React from "react";
import styled from "@emotion/styled";

import { Swiper, SwiperSlide } from "swiper/react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import Slider from "react-slick";

// Styles
import styles from "./UnsereBehandlungenSlider.module.scss";

// Components
import { UnsereBehandlungenItem } from "../index";

// Images
import dentBleaching from "../../Images/dent-bleaching.svg";
import dentBehandlung from "../../Images/dent-behandlung.svg";
import dentImplantate from "../../Images/dent-implantate.svg";
import dentOrthaopediatate from "../../Images/dent-orthopedia.svg";

const StyledSwiper = styled(Swiper)`
  overflow: visible;
  .swiper-wrapper {
    padding: 2em 0;
  }
  .swiper-button-next:after {
    zoom: 0.6;
  }
  .swiper-button-prev:after {
    zoom: 0.6;
  }
`;

const swiperParams = {
  slidesPerView: 4,
  spaceBetween: 20,
  navigation: true,
};

// const settings = {
//   speed: 500,
//   slidesToShow: 5,
//   slidesToScroll: 5,
// };

function UnsereBehandlungenSlider({ items }) {
  return (
    <>
      <div className={"w-full my-6 py-5"}>
        <StyledSwiper {...swiperParams}>
          <SwiperSlide>
            <UnsereBehandlungenItem image={dentBleaching} />
          </SwiperSlide>
          <SwiperSlide>
            <UnsereBehandlungenItem image={dentImplantate} />
          </SwiperSlide>
          <SwiperSlide>
            <UnsereBehandlungenItem image={dentOrthaopediatate} />
          </SwiperSlide>
          <SwiperSlide>
            <UnsereBehandlungenItem image={dentBehandlung} />
          </SwiperSlide>
        </StyledSwiper>
        {/* <Slider {...settings}>
          <div>
            <UnsereBehandlungenItem />
          </div>
          <div>
            <UnsereBehandlungenItem />
          </div>
          <div>
            <UnsereBehandlungenItem />
          </div>
        </Slider> */}
      </div>
    </>
  );
}

export default UnsereBehandlungenSlider;
