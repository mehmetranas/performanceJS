import React from "react";

// Components
import PersonInformationItem from "./PersonInformationItem";

function PersonInformation({ staff }) {
  return (
    <>
      <div className="grid grid-rows-auto justify-items-center md:justify-items-start md:grid-cols-3 md:gap-0 gap-6">
        <div className="col-span-1 text-center md:text-left">
          <PersonInformationItem
            title="Bildung"
            subTitle="Akademische Ausbildung"
            items={staff?.education}
          />
        </div>
        <div className="col-span-1 text-center md:text-left">
          <PersonInformationItem
            title="Erfahrung"
            subTitle="Berufliche Erfahrungen"
            items={staff?.experience}
          />
        </div>
        <div className="col-span-1 text-center md:text-left">
          <PersonInformationItem
            title="Sonstiges"
            subTitle="Weitere Informationen"
            items={staff?.prizes}
          />
        </div>
      </div>
    </>
  );
}

export default PersonInformation;
