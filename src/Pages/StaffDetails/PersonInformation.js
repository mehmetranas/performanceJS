import React from "react";

// Components
import PersonInformationItem from "./PersonInformationItem";

// providers
import { useLanguageContext } from "../../languages-service/container/Langauge";

function PersonInformation({ staff }) {
  const { dictionary } = useLanguageContext();
  return (
    <>
      <div className="grid grid-rows-auto justify-items-center md:justify-items-start md:grid-cols-3 md:gap-0 gap-6">
        <div className="col-span-1 text-center md:text-left">
          <PersonInformationItem
            title={dictionary?.personInformation1.title}
            subTitle={dictionary?.personInformation1.subTitle}
            items={staff?.education}
          />
        </div>
        {staff?.experience && (
          <div className="col-span-1 text-center md:text-left">
            <PersonInformationItem
              title={dictionary?.personInformation2.title}
              subTitle={dictionary?.personInformation2.subTitle}
              items={staff?.experience}
            />
          </div>
        )}
        {staff?.prizes && (
          <div className="col-span-1 text-center md:text-left">
            <PersonInformationItem
              title={dictionary?.personInformation3.title}
              subTitle={dictionary?.personInformation3.subTitle}
              items={staff?.prizes}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default PersonInformation;
