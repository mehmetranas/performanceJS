import React from "react";
import styled from "@emotion/styled";

// Components
import { Select } from "antd";

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

function SectionBeratungSelects() {
  return (
    <>
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
    </>
  );
}

export default SectionBeratungSelects;
