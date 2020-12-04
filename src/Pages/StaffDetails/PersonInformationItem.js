import React from "react";
import { Divider } from "antd";

function PersonInformationItem({ title, subTitle, items = [] }) {
  return (
    <>
      <div className="grid grid-rows-auto md:gap-0 gap:2">
        <div className="row-span-1">
          <p className="text-primary-0 py-0 font-semibold title">{title}</p>
          <p className="text-primary-0 py-0 subTitle">{subTitle}</p>
          <div className="w-full md:w-2/5">
            <Divider className="border-primary-0 my-2" />
          </div>
        </div>
        {items.map((item, index) => (
          <div className="row-span-1 md:py-2" key={index}>
            <p className="font-bold py-0">{item.title}</p>
            <p className="py-0">{item.subTitle}</p>
            <p className="py-0">{item.subTitle2}</p>
            <p className="py-0 text-xs" style={{ color: "#3F8CD1" }}>
              {item.period}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default PersonInformationItem;
