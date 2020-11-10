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
      <div className="grid grid-cols-7">
        <div className={`col-span-5 ${styles.shadowBox}`}>
          <div className="grid grid-cols-3">
            <div className="col-span-1 p-4">
              <Input
                size="large"
                bordered={false}
                placeholder="Name, Nachname"
                className={`${styles.styledPlaceholder}`}
              />
            </div>
            <div className={`col-span-1 p-4 ${styles.columnWithSideBorder}`}>
              <Input
                size="large"
                bordered={false}
                placeholder="Telefon"
                className={`${styles.styledPlaceholder}`}
              />
            </div>
            <div className="col-span-1 p-4">
              <Input
                size="large"
                bordered={false}
                placeholder="E-Mail"
                className={`${styles.styledPlaceholder}`}
              />
            </div>
          </div>
        </div>
        <div className="col-span-2 px-4">
          <StyledAntButton size="large" className={`h-full w-full border-none`}>
            Absenden
          </StyledAntButton>
        </div>
      </div>
    </>
  );
}

export default SectionBeratungInputs;
