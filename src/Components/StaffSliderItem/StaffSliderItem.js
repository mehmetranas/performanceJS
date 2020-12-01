import React from "react";
import { Divider } from "antd";

// Styles
import styles from "./StaffSliderItem.module.scss";

function StaffSliderItem(person) {
  const { name, title, image } = person;
  return (
    <>
      <div className={`grid grid-rows-7 ${styles.container}`}>
        <div className="row-span-full flex items-center flex-col justify-center">
          <img src={image} alt="" />
          <Divider className="my-4 border-t-2 border-primary-0" />
        </div>
        <div className={`row-span-2 flex items-center flex-col justify-evenly`}>
          <p className={`mb-0 py-0 ${styles.name}`}>{name}</p>
          <p className={`mb-0 ${styles.title}`}>{title}</p>
        </div>
      </div>
    </>
  );
}

export default StaffSliderItem;
