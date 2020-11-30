import React from "react";

// Styles
import styles from "./StaffSliderItem.module.scss";

function StaffSliderItem(person) {
  const { name, title, image } = person;
  return (
    <>
      <div className={`grid grid-rows-5 ${styles.container}`}>
        <div className="row-span-4 flex items-center justify-center">
          <img src={image} alt="" />
        </div>
        <div className={`row-span-1 flex items-center flex-col justify-evenly`}>
          <p className={`mb-0 ${styles.name}`}>{name}</p>
          <p className={`mb-0 ${styles.title}`}>{title}</p>
        </div>
      </div>
    </>
  );
}

export default StaffSliderItem;
