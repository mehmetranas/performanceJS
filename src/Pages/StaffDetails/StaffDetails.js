import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "antd";
import { GlobalOutlined, PhoneOutlined, MailOutlined } from "@ant-design/icons";

// Components
import { SectionTitle } from "../../Components";

// Data
import { Staff } from "../../Data/data";

function StaffDetails({ match }) {
  const { id } = useParams();
  const [staff, setStaff] = useState();

  useEffect(() => {
    const selectedStaff = Staff.find((staff) => staff.id == id);
    setStaff(selectedStaff);
  }, [id]);
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-8 col-start-3 flex flex-col items-center justify-center">
          <div className="w-1/3">
            <SectionTitle
              title="Unsere Ärzte"
              subTitle="Ein kompetentes Team, was Ihre Wünsche erfüllt"
            />
          </div>
          <div className="grid grid-cols-2 w-full">
            <div className="col-span-1 flex items-baseline justify-end mr-12">
              <img src={staff?.image} alt="" />
            </div>
            <div className="col-span-1">
              <div className="auto-cols-max grid grid-rows-3">
                <div className="row-span-1">
                  <p className="font-semibold name py-0 text-2xl text-primary-0">
                    {staff?.name}
                  </p>
                  <p className="border-b-2 py-0 text-lg text-primary-0 title">
                    {staff?.title}
                  </p>
                </div>
                <div className="border-b border-gray-300 row-span-1">
                  <p className="flex gap-2 items-center">
                    <GlobalOutlined /> {staff?.languages.join(", ")}
                  </p>
                  <p className="flex gap-2 items-center">
                    <PhoneOutlined /> {staff?.phone}
                  </p>
                  <p className="flex gap-2 items-center">
                    <MailOutlined /> {staff?.mail}
                  </p>
                </div>
                <div className="row-span-1 py-4">
                  <Button className="ant-btn app-btn rounded">
                    Online Beratung
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StaffDetails;
