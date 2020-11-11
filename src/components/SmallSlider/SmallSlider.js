import React from "react";
import styled from "@emotion/styled";
import { Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import { Swiper, SwiperSlide } from "swiper/react";

// Styles
import styles from "./SmallSlider.module.scss";

// Components
import { UnsereBehandlungenItem } from "../index";

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
  slidesPerView: 4,
  spaceBetween: 20,
  navigation: true,
};

function SmallSlider({ items }) {
  return (
    <>
      <div className="flex items-center justify-around">
        <Button
          size="large"
          icon={<LeftOutlined className={styles.arrow} />}
          className="border-none transform translate-x-10"
        />
        <div className={"w-4/5 my-6 py-5 px-4 overflow-hidden"}>
          <StyledSwiper {...swiperParams}>
            {items && items.map((item) => <SwiperSlide>{item}</SwiperSlide>)}
            {/* <SwiperSlide>
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
            </SwiperSlide> */}
          </StyledSwiper>
        </div>
        <Button
          size="large"
          icon={<RightOutlined className={styles.arrow} />}
          className="border-none transform -translate-x-10"
        />
      </div>
    </>
  );
}

export default SmallSlider;
