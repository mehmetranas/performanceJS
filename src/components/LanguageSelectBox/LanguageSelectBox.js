import React from "react";
import { Select } from "antd";

// Images
import GlobalIcon from "../../Images/Global.svg";

function LanguageSelectBox() {
  return (
    <>
      <div className="px-5 flex items-center">
        <img src={GlobalIcon} alt="Select Your Language" />
        <Select bordered={false} defaultValue="de" size="small">
          <Select.Option value="de">DE</Select.Option>
          <Select.Option value="en">EN</Select.Option>
        </Select>
      </div>
    </>
  );
}

export default LanguageSelectBox;
