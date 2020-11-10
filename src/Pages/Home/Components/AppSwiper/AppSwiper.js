import React from "react";
import Swiper from "react-id-swiper";
// Styles
import styles from "./AppSwiper.module.scss";
// Images
import image1 from "../../../../Images/SliderImage1.png";

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
      <Swiper {...params}>
        <div className={"relative"}>
          <div className={styles.heroBackground}>
            <p className={styles.heroTitle}>
              Zahn-
              <br /> <strong>Bleaching</strong>
            </p>
          </div>
          <img src={image1} alt={"Dent"} className={styles.sliderImage} />
          <div className={styles.heroText}>
            <p>
              Wenn unschöne Zahnverfärbungen das eigene ästhetische Empfinden
              trüben, kann ein Bleaching Abhilfe schaffen. Dabei können Sie
              einzelne Zähne, aber auch das ganze Gebiss bleichen lassen – ganz
              nach Bedarf.
            </p>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default AppSwiper;
