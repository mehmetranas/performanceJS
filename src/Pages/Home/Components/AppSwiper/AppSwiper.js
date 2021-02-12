import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Button } from "antd";
import { HashLink } from "react-router-hash-link";

// Styles
import styles from "./AppSwiper.module.scss";
// Images
import image1 from "../../../../Images/SliderImage1.png";
import image2 from "../../../../Images/dentist-office.jpg";
import image3 from "../../../../Images/dentist-office-women.jpg";
import image4 from "../../../../Images/dentist-Orthodontics.jpg";

// providers
import { useLanguageContext } from "../../../../languages-service/container/Langauge";

const AppSwiper = () => {
  const { dictionary } = useLanguageContext();
  SwiperCore.use([Autoplay, Navigation]);

  const SwiperItem1 = ({ image, title1, title2, rightTitle }) => (
    <div
      className={`relative grid grid-cols-9 ${styles.sliderImage}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div
        className={`${styles.heroBackground} ${
          rightTitle ? styles.rightTitle : styles.leftTitle
        }`}
      >
        <p className={styles.heroTitle}>
          {title1}
          <br /> <strong>{title2}</strong>
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
            {dictionary?.appSwiper.ctaButton}
          </Button>
        </HashLink>
      </div>
    </div>
  );

  return (
    <div className={"w-full my-6"}>
      <Swiper navigation loop autoplay>
        <SwiperSlide key={1}>
          <SwiperItem1
            title1={dictionary?.appSwiper.item1.title1}
            title2={dictionary?.appSwiper.item1.title2}
            image={image1}
          />
        </SwiperSlide>
        <SwiperSlide key={2}>
          <SwiperItem1
            title1={dictionary?.appSwiper.item2.title1}
            title2={dictionary?.appSwiper.item2.title2}
            image={image2}
          />
        </SwiperSlide>
        <SwiperSlide key={3}>
          <SwiperItem1
            title1={dictionary?.appSwiper.item3.title1}
            title2={dictionary?.appSwiper.item3.title2}
            image={image3}
          />
        </SwiperSlide>
        <SwiperSlide key={4}>
          <SwiperItem1
            title1={dictionary?.appSwiper.item4.title1}
            title2={dictionary?.appSwiper.item4.title2}
            image={image4}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AppSwiper;
