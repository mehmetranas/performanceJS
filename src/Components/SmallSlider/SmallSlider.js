import React, { useState } from "react";
import styled from "@emotion/styled";
import { Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

// Styles
import styles from "./SmallSlider.module.scss";

// Components
import { UnsereBehandlungenItem } from "../index";

import SwiperCore, { Controller } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

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
  .swiper-button-next {
    right: -8%;
  }
  .swiper-button-prev {
    left: -8%;
  }
`;

const swiperParams = {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".slide-next-button",
    prevEl: ".slide-prev-button",
  },
  breakpoints: {
    2250: {
      slidesPerView: 5,
    },
    1400: {
      slidesPerView: 4,
    },
    980: {
      slidesPerView: 3,
    },
    560: {
      slidesPerView: 2,
    },
  },
};

function SmallSlider({ items, callback = (f) => f }) {
  return (
    <>
      <div className="flex items-center justify-center relative">
        <Button
          size="large"
          icon={<LeftOutlined className={styles.arrow} />}
          className="border-none absolute transform left-0 lg:translate-x-10 sm:translate-x-4 slide-prev-button"
        />
        <div className={"w-4/5 my-6 py-5 px-4 overflow-hidden"}>
          <StyledSwiper {...swiperParams}>
            {items &&
              items.map((item, index) => (
                <SwiperSlide key={index} onClick={() => callback(item)}>
                  {item}
                </SwiperSlide>
              ))}
          </StyledSwiper>
        </div>
        <Button
          size="large"
          icon={<RightOutlined className={styles.arrow} />}
          className="border-none absolute right-0 transform lg:-translate-x-10 sm:-translate-x-4 slide-next-button"
        />
      </div>
    </>
  );
}

export default SmallSlider;
