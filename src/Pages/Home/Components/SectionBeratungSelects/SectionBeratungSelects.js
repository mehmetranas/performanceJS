import React from "react";
import styled from "@emotion/styled";

// Components
import { Select, Button } from "antd";

// Styles
import styles from "./SectionBeratungSelects.module.scss";

const { Option } = Select;

let StyledAntSelect = styled(Select)`
  text-align: center;
  font: normal normal normal 1em Nunito;
  letter-spacing: 0px;
  color: #162162;
  opacity: 1;
`;

let StyledAntButton = styled(Button)`
  box-shadow: 0px 10px 20px #3f8cd15a;
  border: 2px solid #162162;
  border-radius: 10px;
  opacity: 1;
`;

function SectionBeratungSelects() {
  const selectBoxData = {
    treatments: [
      "Zahn-Bleaching",
      "Zahn-Implantate",
      "Kiefer-Orthopedie",
      "Wurzelkanal-Behandlung",
    ],
    clinics: ["Vefadent Ümraniye"],
  };
  return (
    <>
      <div className="gap-4 grid grid-rows-2 md:grid-rows-1 md:gap-0 md:grid-cols-7">
        <div className={`md:col-span-5 row-span-1 ${styles.shadowBox}`}>
          <div className="grid grid-cols-2 md:grid-cols-3">
            <div className={`col-span-1 p-4  relative`}>
              <StyledAntSelect
                defaultValue="istanbul"
                size="large"
                bordered={false}
                style={{ width: "100%" }}
                id="city"
              >
                <Option value="istanbul">Istanbul</Option>
              </StyledAntSelect>
              <div className={`${styles.columnWithRightBorder}`}></div>
            </div>
            <div className={`col-span-1 p-4 relative`}>
              <StyledAntSelect
                placeholder="Einheit auswählen"
                size="large"
                bordered={false}
                style={{ width: "100%" }}
                id="treatment"
              >
                {selectBoxData.treatments?.map((item, index) => (
                  <Option value={item} key={index}>
                    {item}
                  </Option>
                ))}
              </StyledAntSelect>
              <div
                className={`${styles.columnWithRightBorder} hidden md:block`}
              ></div>
            </div>
            <div className="col-span-1 hidden md:block p-4">
              <StyledAntSelect
                placeholder="Klinik wählen"
                size="large"
                bordered={false}
                style={{ width: "100%" }}
                id="clinic"
              >
                {selectBoxData.clinics?.map((clinic, index) => (
                  <Option value={clinic} key={index}>
                    {clinic}
                  </Option>
                ))}
              </StyledAntSelect>
            </div>
          </div>
        </div>
        <div className="md:col-span-2 row-span-1 md:px-4 grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-0">
          <div className={`md:hidden col-span-1 p-4 ${styles.shadowBox}`}>
            <StyledAntSelect
              placeholder="Klinik wählen"
              size="large"
              bordered={false}
              style={{ width: "100%" }}
              id="clinic-sm-screen"
            >
              {selectBoxData.clinics?.map((clinic, index) => (
                <Option value={clinic} key={index}>
                  {clinic}
                </Option>
              ))}
            </StyledAntSelect>
          </div>
          <div className="col-span-1">
            <StyledAntButton
              size="large"
              className="h-full whitespace-normal"
              block
            >
              Online Beratung
            </StyledAntButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionBeratungSelects;
