import React from "react";

// Components
import PersonInformationItem from "./PersonInformationItem";

function PersonInformation({ staff }) {
  return (
    <>
      <div className="grid grid-cols-3">
        <div className="col-span-1">
          <PersonInformationItem
            title="Bildung"
            subTitle="Akademische Ausbildung"
            items={staff?.education}
          />
        </div>
        <div className="col-span-1">
          <PersonInformationItem
            title="Erfahrung"
            subTitle="Berufliche Erfahrungen"
            items={staff?.experience}
          />
        </div>
        <div className="col-span-1">
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
