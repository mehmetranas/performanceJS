import React from "react";
import styled from "@emotion/styled";

// Components
import { Button, Input } from "antd";

// Styles
import styles from "./SectionBeratungInputs.module.scss";

let StyledAntButton = styled(Button)`
  background: #36a0fc 0% 0% no-repeat padding-box;
  box-shadow: 0px 10px 20px #3f8cd15a;
  border-radius: 10px;
  opacity: 1;
  color: #fff;
  border: none;
`;

function SectionBeratungInputs() {
  return (
    <>
      <div className="gap-4 grid grid-rows-2 md:grid-rows-1 md:gap-0 md:grid-cols-7">
        <div className={`md:col-span-5 row-span-1 ${styles.shadowBox}`}>
          <div className="grid grid-cols-2 md:grid-cols-3">
            <div className="col-span-1 p-4 relative">
              <Input
                size="large"
                bordered={false}
                placeholder="Name, Nachname"
                className={`${styles.styledPlaceholder}`}
              />
              <div className={`${styles.columnWithRightBorder}`}></div>
            </div>
            <div className={`col-span-1 p-4 relative`}>
              <Input
                size="large"
                bordered={false}
                placeholder="Telefon"
                className={`${styles.styledPlaceholder}`}
              />
              <div
                className={`${styles.columnWithRightBorder} md:block hidden`}
              ></div>
            </div>
            <div className="col-span-1 p-4 hidden md:block">
              <Input
                size="large"
                bordered={false}
                placeholder="E-Mail"
                className={`${styles.styledPlaceholder}`}
              />
            </div>
          </div>
        </div>
        <div className="md:col-span-2 row-span-1 md:px-4 grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-0">
          <div className={`col-span-1 p-4 md:hidden ${styles.shadowBox}`}>
            <Input
              size="large"
              bordered={false}
              placeholder="E-Mail"
              className={`${styles.styledPlaceholder}`}
            />
          </div>
          <div>
            <StyledAntButton
              size="large"
              className={`h-full w-full border-none`}
            >
              Absenden
            </StyledAntButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionBeratungInputs;
