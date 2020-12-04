import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "antd";
import { GlobalOutlined, PhoneOutlined, MailOutlined } from "@ant-design/icons";

// Components
import { SectionTitle } from "../../Components";
import { ScrollToTop } from "../../Utility/ScrollTop";

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
      <ScrollToTop />

      <div className="grid grid-cols-12">
        <div className="md:col-span-8 md:col-start-3 col-span-full flex flex-col items-center justify-center">
          <div className="md:w-1/3 w-2/3">
            <SectionTitle
              title="Unsere Ärzte"
              subTitle="Ein kompetentes Team, was Ihre Wünsche erfüllt"
            />
          </div>
          <div className="flex flex-col md:flex-row md:gap-10 items-center justify-start w-4/5">
            <img
              className="shadow-md border-white border-8 rounded-2xl"
              src={staff?.image}
              alt=""
            />
            <div className="auto-cols-max grid grid-rows-3 justify-center md:justify-start items-center">
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
              <div className="row-span-1 py-4 flex justify-end md:justify-start">
                <Button className="ant-btn app-btn rounded">
                  Online Beratung
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StaffDetails;
