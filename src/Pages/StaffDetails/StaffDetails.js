import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Components
import { SectionTitle } from "../../Components";
import PersonDetails from "./PersonDetails";
import PersonInformation from "./PersonInformation";
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
          <div className="w-4/5 flex flex-col gap-10">
            <PersonDetails staff={staff} />
            <PersonInformation staff={staff} />
          </div>
        </div>
      </div>
    </>
  );
}

export default StaffDetails;
