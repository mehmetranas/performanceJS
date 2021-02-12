import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Divider, Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";

// Components
import { SectionTitle } from "../../Components";
import PersonDetails from "./PersonDetails";
import PersonInformation from "./PersonInformation";
import { ScrollToTop } from "../../Utility/ScrollTop";

// Data
import { Staff } from "../../Data/data";

//providers
import { useLanguageContext } from "../../languages-service/container/Langauge";

function StaffDetails({ match }) {
  const { dictionary } = useLanguageContext();
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
              title={dictionary?.staffDetails.sectionTitle}
              subTitle={dictionary?.staffDetails.sectionSubtitle}
            />
          </div>
          <div className="w-4/5 flex flex-col gap-10 md:mt-0 mt-6">
            <PersonDetails staff={staff} />
            <PersonInformation staff={staff} />
            <Divider className="border-primary-1" />
            <div className="action">
              <Button
                size="large"
                icon={<LeftOutlined />}
                className="app-btn rounded flex items-center justify-center w-full md:w-auto "
              >
                {dictionary?.staffDetails.backButton}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StaffDetails;
