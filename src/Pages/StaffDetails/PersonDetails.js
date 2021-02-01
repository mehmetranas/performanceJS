import React from "react";
import { Button, Divider } from "antd";
import { GlobalOutlined, PhoneOutlined, MailOutlined } from "@ant-design/icons";

function PersonDetails({ staff }) {
  return (
    <>
      <div className="grid grid-rows-auto md:grid-rows-3 md:grid-flow-col gap-4">
        <div className="col-span-12 md:col-span-1 md:row-span-3 flex justify-center items-center md:items-start pr-0 md:pr-4">
          <img
            className="shadow-xl md:shadow-md border-white border-8 rounded-2xl w-full"
            src={staff?.image}
            alt=""
          />
        </div>
        <div className="col-span-8 col-start-3 md:col-start-auto md:col-span-12 mt-2 order-first md:order-none flex flex-col justify-center items-center md:items-start">
          <p className="font-semibold name py-0 text-lg md:text-2xl text-primary-0 text-center md:text-left">
            {staff?.name}
          </p>
          <p className="py-0 text-sm md:text-lg text-primary-0 title text-center md:text-left">
            {staff?.title}
          </p>
          <div className="w-11/12 md:w-1/3">
            <Divider className=" border-primary-0 my-1 md:my-2" />
          </div>
        </div>
        <div className="col-span-10 col-start-2 md:col-start-auto md:mt-0 mt-4 hidden">
          <p className="flex gap-2 items-center">
            <GlobalOutlined /> {staff?.languages.join(", ")}
          </p>
          <p className="flex gap-2 items-center">
            <PhoneOutlined /> {staff?.phone}
          </p>
          <p className="flex gap-2 items-center">
            <MailOutlined /> {staff?.mail}
          </p>
          <div className="md:w-1/3">
            <Divider className=" border-primary-1 my-1 md:my-2" />
          </div>
        </div>
        <div className="col-span-10 col-start-2 md:col-start-auto md:col-span-1">
          <Button size="large" className="ant-btn app-btn rounded" block>
            Online Beratung
          </Button>
        </div>
      </div>
    </>
  );
}

export default PersonDetails;
