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
  return (
    <>
      <div className="grid grid-cols-7">
        <div className={`col-span-5 ${styles.shadowBox}`}>
          <div className="grid grid-cols-3">
            <div className="col-span-1 p-4">
              <StyledAntSelect
                defaultValue="lucy"
                size="large"
                bordered={false}
                style={{ width: "100%" }}
              >
                <Option value="lucy">Lucy</Option>
              </StyledAntSelect>
            </div>
            <div className={`col-span-1 p-4 ${styles.columnWithSideBorder}`}>
              <StyledAntSelect
                defaultValue="lucy"
                size="large"
                bordered={false}
                style={{ width: "100%" }}
              >
                <Option value="lucy">Lucy</Option>
              </StyledAntSelect>
            </div>
            <div className="col-span-1 p-4">
              <StyledAntSelect
                defaultValue="lucy"
                size="large"
                bordered={false}
                style={{ width: "100%" }}
              >
                <Option value="lucy">Lucy</Option>
              </StyledAntSelect>
            </div>
          </div>
        </div>
        <div className="col-span-2 px-4">
          <StyledAntButton size="large" block className={`h-full`}>
            Online Beratung
          </StyledAntButton>
        </div>
      </div>
    </>
  );
}

export default SectionBeratungSelects;
